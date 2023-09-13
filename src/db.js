import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1/Nodejs_RestAPI_JWT", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("DB is connected"))
    .catch(error => console.log(error))