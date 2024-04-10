const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routes/user.routes");
const prodRouter = require("./routes/products.routes");
const { connection } = require("./config/db");
const PORT = process.env.PORT || 4500;
const app = express();

app.use(cors())
app.use(express.json())

app.use('/user', userRouter);
app.use('/products', prodRouter)

app.listen(PORT,async() => {
    try {
        await connection
        console.log("Connected to db...");
        console.log("your server is running at http://localhost:4500");
    } catch (error) {

    }
})