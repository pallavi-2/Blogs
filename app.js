const express =require('express');
const app = express();

require('dotenv').config()
app.use(express.json());

const connectDB = require('./database/connectdb');
const routes = require('./routes/route');

app.get('/',(req,res)=>{
    res.send('Home page')
})

app.use(routes)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(5000, () => console.log("Server running on port 5000"));
    } catch (err) {
        console.log(err);
    }
}

start();