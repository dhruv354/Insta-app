const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path")

const { MONGODB } = require("./config");
const model = require("./models/user");
const router = require("./Routes/auth");
const PORT = process.env.PORT || 8000;

/***********************************config ************************* */
mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("connected to mongoDb");
});

/********************model imports ***************************/

const User = require("./models/user");
const Post = require("./models/post");

/********************************middlewares**************************** */
app.use(express.json());
app.use(cors());
app.use(router);
app.use(require("./Routes/posts"));
app.use(require("./Routes/user"));


/****code related to production of app***** */

app.use(express.static(path.resolve(__dirname, 'build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


/**********************listening on server *********************** */
app.listen(PORT, (err) => {
  if (err) {
    return console.log(`Error: ${err}`);
  }
  console.log(`server running on port: ${PORT}`);
});
