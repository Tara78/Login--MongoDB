const express= require('express')
const app= express()
const mongoose= require('mongoose')
const port= 5000
const dotenv= require('dotenv')
dotenv.config()

// Import Route
const postRoute= require('./routes/post')

// Connect DB
mongoose.connect (
    process.env.BD_CONNECTION,
    { useNewUrlParser: true, 
     useUnifiedTopology: true, 
    useFindAndModify: false , 
    dbName:'Register'
})
.then(() => {
    console.log('Connected to db');
  })
  .catch((err) => {
    console.log(err);
  });


 // Middelwear - read from body (bodyparser)
 app.use(express.json())
 app.use(express.urlencoded({ extended: true }));


// Rotes Middleware
app.use('/api/user', postRoute);


app.listen(port, (req, res) =>{
    console.log(`App is active on port ${port}`)
})
