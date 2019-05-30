import { CarInfo } from './car-info-model';
import * as mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { carInfoRoutes } from './car-info-routes';

/**
 * gets all the users
 */
export function getAllCars(req: Request, res: Response, next: NextFunction) {

    CarInfo.find()
        .exec()
        .then((cars) => {
            res.status(200).json({
                count: cars.length,
                result: cars
            });
        }).catch((err) => {

            res.status(500).json({
                err: err
            });
        });
}

/**
 * gets cars by vin
 */
export function getCarByVin(req: Request, res: Response, next: NextFunction) {
    const vin = req.params.id;

    CarInfo.find().where('vin', vin)
        .exec()
        .then((cars) => {
            res.status(200).json({
                result: cars
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
export function getCarsByOwnerId(req: Request, res: Response, next: NextFunction) {
    const ownerId = req.params.id;

    CarInfo.find().where('ownerId', ownerId)
        .exec()
        .then((cars) => {
            res.status(200).json({
                result: cars
            });
        }).catch((err) => {

            res.status(500).json({
                err: err
            });
        });
}

export function addNewCar(req: Request, res: Response, next: NextFunction) {


    CarInfo.find({ vin: req.body.vin }).exec()
        .then(car => {
            // checks if there is a user with same email in the database
            if (car.length >= 1) {
                res.status(409).json({
                    message: 'VIN Already exists'
                });
            }
            else {
                // creates a new user 
                const carInfo = new CarInfo({
                    _id: new mongoose.Types.ObjectId(),
                    vin: req.body.vin,
                    model: req.body.model,
                    make: req.body.make,
                    year: req.body.year,
                    mileage: req.body.mileage,
                    ownerId: req.body.ownerId,
                });

                carInfo.save().then(result => {
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

