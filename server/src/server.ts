import errorHandler from "errorhandler";
import mongoose from "mongoose";

import app from "./app";
import { MONGODB_URI, PORT } from "./util/secrets";

const mongoUrl = MONGODB_URI;

mongoose
  .connect(mongoUrl, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true,
  })
  .then(() => {
    // Start Express server
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.log(
      "MongoDB connection error. Please make sure MongoDB is running. " + error
    );
    process.exit(1);
  });
/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());
