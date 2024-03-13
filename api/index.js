const express=require("express");
const app=express();

const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");
const postRoute=require("./routes/posts");
const categoriesRoute=require("./routes/categories");
const multer=require("multer");
const cors = require("cors");
dotenv.config();

app.use((req, res, next) => {
    // Access the headers object
    const headers = req.headers;
  
    // Find the number of headers
    const headerCount = Object.keys(headers).length;
  
    // Log or handle the header count as needed
    console.log('Number of headers:', headerCount);
  
    // Pass control to the next middleware
    next();
  });

app.use(express.json());
app.use(cors({origin: "http://localhost:3000/"}))


const url=process.env.MONGO_URL;
mongoose.connect(url).then(console.log("connected to mongodb"))
.catch((err) => console.log(err));

const storage=multer.diskStorage({

    destination: (req,file,cb) => {
        cb(null,"images");
    },
    filename:(req,file,cb) => {
        cb(null,req.body.name);
    },
});

// const upload=multer({storage:storage});


  
// app.post("/api/upload",upload.single("file"),(req,res) => {
//     res.status(200).json("file uploaded");
// })

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoriesRoute);
app.listen('5000',()=>{
    console.log("Connected");
})