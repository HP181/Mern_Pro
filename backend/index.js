const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config({path:"./config.env"})
require("./db/conn")
const cors = require('cors')
const cookieParser = require('./node_modules/cookie-parser')
const path = require('path')

app.use(cookieParser())
app.use(cors({origin: 'http://localhost:3000', credentials: true}))
app.use(express.json());
app.use(require('./routes/auth'))


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './static/index.html'))
});

// app.get('*', ()=>{ss

// })


app.listen(process.env.PORT, ()=>{
    console.log(`server started on ${process.env.PORT}`);
})
