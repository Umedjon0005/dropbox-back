const express = require('express');
const mongoose = require('mongoose');
const config = require("config");
const authRouter = require("./routes/auth.routes");
const fileRouter = require("./routes/file.routes");
const fileUpload = require('express-fileupload');
const app = express();
const corsMiddleware = require('./middleware/cors.middleware');
const filePath = require('./middleware/filePath.middleware');
const PORT = process.env.PORT || config.get('serverPort');
const path = require('path')
app.use(fileUpload({}));
app.use(corsMiddleware);
app.use(filePath(path.resolve(__dirname, 'files')))
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);
const start = async() => {
    try {
        mongoose.connect(config.get('dbUrl'))

        
        app.listen(PORT, () => {
            console.log('Server started');
        })
    } catch (e) {

    }


}

start();