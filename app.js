import express from "express";
import "dotenv/config";
import session from 'express-session';
import authRoutes from "./routes/authRoutes.js"; 
import userRoutes from "./routes/userRoutes.js";
import path from 'path'; 
import { fileURLToPath } from "url";
import config from './config/auth.js';
import aboutUsRoutes from "./routes/aboutUsRoute.js";
import contactUsRoutes from "./routes/contactUsRoutes.js";
import servicesRoute from "./routes/servicesRoute.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentsRoutes.js";


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//middleweres
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: config.secret, 
    resave: false,         
    saveUninitialized: true, 
    cookie: { secure: false } 
  }));
app.use('/api/auth', authRoutes); 
app.use('/', userRoutes);
app.use('/', aboutUsRoutes);
app.use('/', contactUsRoutes);
app.use('/',servicesRoute);
app.use('/', postRoutes);
app.use('/', commentRoutes);


// views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
console.log("Views directory:", path.join(__dirname, "views"));



app.get('/',function (req, res) {
    res.send('index');
});




app.listen(process.env.PORT || 3010, function(){
    console.log(`server started at port ${process.env.PORT}`);
});


