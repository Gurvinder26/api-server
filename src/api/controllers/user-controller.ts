import { User } from '../models/user';
import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';

/**
 * gets all the users
 */
export function getUser(req: Request, res: Response, next: NextFunction) {

    User.find()
        .select('firstName lastName')
        .exec()
        .then((users) => {
            console.log(users);
            res.status(200).json({
                count: users.length,
                result: users 
            });
        }).catch((err) => {

            res.status(500).json({
                err: err
            });
        });
}

/**
 * gets all the users
 */
export function getUserById(req: Request, res: Response, next: NextFunction) {
    const email = req.params.id;

    User.find().where('email', email)
        .select('firstName lastName')
        .exec()
        .then((user) => {
            res.status(200).json({
                result: user
            });
        }).catch((err) => {

            res.status(500).json({
                err: err
            });
        });
}

/**
 * user by email id
 */
export function createNewUser(req: Request, res: Response, next: NextFunction) {

    User.find({ email: req.body.email }).exec()
        .then(user => {
            // checks if there is a user with same email in the database
            if (user.length >= 1) {
                res.status(409).json({
                    message: 'Email Already exists'
                });
            }
            else {
                // creates a new user 
                const user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    middleName: req.body.middleName,
                    phone: req.body.phone,
                    email: req.body.email,
                });

                user.save().then(result => {
                    console.log(result);
                    return res.status(201).json({
                        status: 201,
                        result: result
                    })
                }).catch((err) => {
                    console.error(err)
                    return res.status(500).json({
                        err: err
                    })
                });
            }
        });
}
