import * as mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { dealerTimingList } from "./dealer-timings-model";
import { CommonFunctions } from "../../../../common-functions";

export function addNewDealerTiming(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // creates a new dealer timing
  const dealer_id = req.params.id;
  if (
    CommonFunctions.validTimeFormatArray([
      req.body.open_time,
      req.body.close_time,
      req.body.break_end_time,
      req.body.break_start_time
    ])
  ) {
    const dealer = new dealerTimingList({
      _id: new mongoose.Types.ObjectId(),
      dealerId: dealer_id,
      dayOfWeek: req.body.dayOfWeek.toLowerCase(),
      open_time: req.body.open_time,
      break_start_time: req.body.break_start_time,
      break_end_time: req.body.break_end_time,
      close_time: req.body.close_time,
      validFrom: req.body.validFrom,
      validTo: req.body.validTo
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
  } else {
    res.status(500).json({
      err: "Please provide valid timings for time fields"
    });
  }
}

/**
 * gets timings for a dealership with id
 */
export function getDealerTimings(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const dealer_id = req.params.id;

  dealerTimingList
    .find()
    .where("dealerId", dealer_id)
    .exec()
    .then(timings => {
      res.status(200).json(timings);
    })
    .catch(err => {
      res.status(500).json({
        err: err
      });
    });
}
