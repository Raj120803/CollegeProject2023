import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import registration from "./model/user.js";
import bcrypt from 'bcrypt';
const app = express()

app.use(cors())
app.use(bodyParser())


mongoose.connect("mongodb+srv://rajrai0812:Rajrai0507@cluster0.rgwkrkh.mongodb.net/?retryWrites=true&w=majority").then((res) => {
  console.log("database connected sucessfully")
}).catch((err) => {
  console.log("err")
})


app.post('/registration', async (req, res) => {
  try{
    const { username, email,number, password } = req.body;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!gmailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid Gmail address. Please use a Gmail email." });
  }

    // Check if the password field is empty
    if (!password) {
      return res.status(400).json({ error: 'Password field is required.' });
      alert("password is required")
    }
  let newPassword = await bcrypt.hash(password, 10);
  let update = {
    username: req.body.username,
    email: req.body.email,
    number: req.body.number,
    password: newPassword,

  }
  const registrationData = new registration(update);
  registrationData.save().then((data) => {
    res.json({msg: "Sign Up successfull" })

  }).catch((err) => {
    console.log(err);
    res.json(err)
  })
}
catch(err){
  res.json(err)

}
})

// app.post('/registration', async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     if (!password || !username || !email) {
//       // If any required fields are missing, return a 400 Bad Request response
      
//       return res.status(404).json({ error: 'Please provide all required fields: username, email, and password.' });
      
//     }

//     // Hash the password and save the user data as before
//     // ...

//     res.json({ msg: "Sign Up successful" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });



app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists based on the provided email
  const user = await registration.findOne({ email: email });

  console.log(user,email, "user")

  if (!user) {
    // console.log("userCheck")
    return res.status(401).json({ message: 'User not found' });
    alert("User not found")
  }

  let isLogin = await bcrypt.compare(password, user.password);

  // console.log(isLogin)

  if (isLogin) {
    res.status(200).json({ mssg: "login successfull" })
  }
  else {
    res.status(200).json({ mssg: "incorrect email and password" })
    

  }
})


  



app.get("/getAllUser",async(req,res)=>{
 const {username}=req.body
  try {
    // await Collection.({username:username});
   const allData= await Collection.find({})
   res.json(allData)
   console.log("finded")
  }catch (error){
    console.log(error);
  }
})

app.listen(4000, () => {
  console.log("sucess")
});