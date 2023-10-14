const app = require("./app");
const mongoose = require("mongoose");



// server
const port = process.env.PORT || 8000;

// Connect to DB and start server
const DATABASE = 'mongodb://localhost:27017/school';
mongoose
    .connect(DATABASE)
    .then(() => {
        console.log("DB Connected")
        app.listen(port, () => {
            console.log(`Server Running on port ${port}`);
        });
    })
    .catch((err) => console.log(err));