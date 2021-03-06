import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

import { userRoutes } from "./api/v1/user/user-routes";
import { carInfoRoutes } from "./api/v1/car-info/car-info-routes";
import { serviceOptionRoutes } from "./api/v1/service-options/service-options-routes";
import { appointmentRoutes } from "./api/v1/appointment/appointment-routes";
import { dealerRoutes } from "./api/v1/dealer/dealer-routes";

export const app: express.Application = express();

mongoose.connect(
  "mongodb+srv://admin:" +
    process.env.DATABASEPW +
    "@database-xtgku.mongodb.net/api-server?retryWrites=true",
  {
    useNewUrlParser: true
  },
  (error, client?) => {
    if (error) {
      console.log("Unable to connect to the database", error);
    } else {
      console.log("database connected successfully");
    }
  }
);

// mongoose.Promise = global.Promise;

// logger
this.app.use(logger("dev"));

// body parser
this.app.use(bodyParser.urlencoded({ extended: false }));
this.app.use(bodyParser.json());

//headers for the req
this.app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-headers",
    "Orgin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes to handle requests
this.app.use("/users", userRoutes);
this.app.use("/cars", carInfoRoutes);
this.app.use("/service-options", serviceOptionRoutes);
this.app.use("/book-appointment", appointmentRoutes);
this.app.use("/dealer", dealerRoutes);

this.app.use((req, res, next) => {
  const err: any = new Error("Not found");
  err.status = 404;
  next(err);
});

this.app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});
// export default new App().app;
