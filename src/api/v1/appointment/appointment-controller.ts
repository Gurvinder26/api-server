import { Appointment } from "./appointment-model";
import * as mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";

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

export function addNewAppointment(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // creates a new appointment
  const appointment = new Appointment({
    _id: new mongoose.Types.ObjectId(),
    userId: req.body.userId,
    carId: req.body.carId,
    serviceOptions: req.body.serviceOptions,
    day: req.body.day,
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
}
