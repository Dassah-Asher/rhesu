const express=require("express");
const dotenv=require("dotenv");
const morgan=require("morgan");
const connectDB=require("./config/connectDB");
const studentRoute=require("./routes/studentRoute");

const cors=require("cors");


dotenv.config();


const app=express()

connectDB()

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use('/students', studentRoute)

// PORT
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});