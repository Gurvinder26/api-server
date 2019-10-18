import { Appointment } from "./appointment-model";
import * as mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { CommonFunctions } from "../../../common-functions";

/**
 * gets all the users
 */
export function getAllAppoinments(
  req: Request,
  res: Response,
  next: NextFunction
) {
  Appointment.find()
    .exec()
    .then(appointments => {
      res.status(200).json({
        count: appointments.length,
        result: appointments
      });
    })
    .catch(err => {
      res.status(500).json({
        err: err
      });
    });
}

/**
 * Add new Appointment
 */
export function addNewAppointment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (
    CommonFunctions.validDateFormat(req.body.date) &&
    CommonFunctions.validTimeFormat(req.body.time)
  ) {
    // creates a new appointment
    const appointment = new Appointment({
      _id: new mongoose.Types.ObjectId(),
      userId: req.body.userId,
      carId: req.body.carId,
      serviceOptions: req.body.serviceOptions,
      date: req.body.date,
      time: req.body.time,
      dealerId: req.body.dealerId
    });

    appointment
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
      err: "Please provide a valid date and time"
    });
  }
}

/**
 * gets appoinments by userId
 */
export function getAppointmentWithUserId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = req.params.userId;

  Appointment.find()
    .where("userId", userId)
    .exec()
    .then(appointments => {
      res.status(200).json({
        result: appointments
      });
      next();
    })
    .catch(err => {
      res.status(500).json({
        err: err
      });
    });
}
