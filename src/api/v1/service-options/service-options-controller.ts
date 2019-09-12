import { serviceOption } from "./service-options-model";
import * as mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";

/**
 * gets all the service options
 */
export function getServiceOptions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  serviceOption
    .find()
    .exec()
    .then(serviceOptions => {
      console.log(serviceOptions);
      res.status(200).json({
        count: serviceOptions.length,
        result: serviceOptions
      });
    })
    .catch(err => {
      res.status(500).json({
        err: err
      });
    });
}

/**
 * get service option by Id
 */
export function getServiceOptionById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id;

  serviceOption
    .find()
    .where("_id", id)
    .exec()
    .then(serviceOpt => {
      res.status(200).json(serviceOpt[0]);
    })
    .catch(err => {
      res.status(500).json({
        err: err
      });
    });
}

export function addNewServiceOption(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // creates a new service option
  const carInfo = new serviceOption({
    _id: new mongoose.Types.ObjectId(),
    type: req.body.type,
    time: req.body.time
  });

  carInfo
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
