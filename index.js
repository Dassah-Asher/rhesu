const express=require("express");
const dotenv=require("dotenv");
const morgan=require("morgan");
const connectDB=require("./config/connectDB");
const resultsRoute=require("./routes/resultsRoute");
const usersRoute=require("./routes/usersRoute")
const cors=require("cors");
const { urlencoded } = require("express");

dotenv.config();


const app=express()

connectDB()

//middlewares
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cors());
app.use(morgan("dev"))


//routes
app.use("/api/v2/results",resultsRoute);
app.use("/api/v2/users", usersRoute)

//home route
app.get("/", (req,res)=>{
    res.send("<h1>Welcome to my online results API <h1>")
});

const port=process.env.PORT||6000

app.listen(port, ()=>console.log(`server started on port ${port}`))
