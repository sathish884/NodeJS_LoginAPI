const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.use("/api", routes);

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB was connected");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);

    });
}).catch(error => {
    console.log("Connection failed ", error);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // console.log(result);
});

