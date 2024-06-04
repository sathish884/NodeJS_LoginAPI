const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const bodyParser = require("body-parser")

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use("/api", routes);

// mongoose.connect("").then(() => {
//     console.log("MongoDB was connected");
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);

//     });
// }).catch(error => {
//     console.log("Connection failed ", error);
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // console.log(result);
});

