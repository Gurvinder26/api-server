import { User } from "./user-model";
import * as mongoose from "mongoose";
import { Request, Response, NextFunction, Router } from "express";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

/**
 * gets all the users
 */
export function getUser(req: Request, res: Response, next: NextFunction) {
  User.find()
    .select("firstName lastName _id middleName phone email")
    .exec()
    .then(users => {
      console.log(users);
      res.status(200).json({
        count: users.length,
        result: users
      });
    })
    .catch(err => {
      res.status(500).json({
        err: err
      });
    });
}

/**
 * gets all the users
 */
export function getUserById(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;

  User.find()
    .where("_id", id)
    .select("firstName lastName middleName phone email")
    .exec()
    .then(user => {
      res.status(200).json(user[0]);
    })
    .catch(err => {
      res.status(500).json({
        err: err
      });
    });
}

/**
 * user by email id
 */
export function createNewUser(req: Request, res: Response, next: NextFunction) {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      // checks if there is a user with same email in the database
      if (user.length >= 1) {
        res.status(409).json({
          message: "Email Already exists"
        });
      } else {
        // creates a new user

        bcrypt.hash(req.body.password, 10, (err, hash): any => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              middleName: req.body.middleName,
              phone: req.body.phone,
              email: req.body.email,
              password: hash
            });

            user
              .save()
              .then(result => {
                return res.status(201).json({
                  status: 201,
                  result: result
                });
              })
              .catch(err => {
                console.error(err);
                return res.status(500).json({
                  err: err
                });
              });
          }
        });
      }
    });
}

/**
 *login user
 */
export function loginUser(req: Request, res: Response, next: NextFunction) {
  console.log(req.body.email, req.body.password);
  User.find()
    .where("email", req.body.email)
    .exec()
    .then(user => {
      bcrypt.compare(
        req.body.password,
        user[0]["password"],
        (err, result): any => {
          if (err) {
            return res.status(401).json({
              message: "Invalid Username/Password"
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                userId: user[0]._id
              },
              "process.env.JWT_KEY",
              {
                expiresIn: "1h"
              }
            );
            return res.status(200).json({
              message: "Auth Successful",
              userId: user[0]._id,
              token: token
            });
          }
          return res.status(401).json({
            message: "Invalid Username/Password"
          });
        }
      );
    })
    .catch(err => {
      res.status(500).json({
        err: err
      });
    });
}
