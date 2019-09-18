import { dealerList } from "./dealer-model";
import * as mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";

/**
 * gets all the users
 */
export function getAllDealers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  dealerList
    .find()
    .exec()
    .then(dealers => {
      res.status(200).json({
        count: dealers.length,
        result: dealers
      });
    })
    .catch(err => {
      res.status(500).json({
        err: err
      });
    });
}

export function addNewDealer(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // creates a new dealer
  const dealer = new dealerList({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    province: req.body.province,
    city: req.body.city,
    country: req.body.country,
    phone: req.body.phone,
    email: req.body.email
  });

  dealer
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
