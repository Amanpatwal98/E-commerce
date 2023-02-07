const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const multer = require ('multer');
const path = require ('path');

const app = express()

app.use('/assets',express.static(__dirname + '/public'));
app.use('/uploads', express.static(path.join(__dirname, '/public')));

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1/TAP1", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    imagename:String,
    type:Number
})

const User = new mongoose.model("User", userSchema)

//Multer
var imagename='';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public');
    },
    filename: (req, file, cb) => {
        console.log(file);
   imagename=Date.now() + path.extname(file.originalname)+'';
   console.log(imagename+"image----");
        cb(null, imagename);
    }
});
const fileFilter = (req, file, cb) => {
    console.log("Filter for file");
    if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
      
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });




//login
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

//Register
app.post("/register",upload.single('file'), (req, res)=> {
    const { name, email, password,file,type} = req.body
    console.log(type);
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password,
                imagename,
                file,
                type
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 


app.listen(4000,() => {
    console.log("BE started at port 4000")
})