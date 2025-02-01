const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// DB DESIGN
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    content:{
    type: String,
    required:true
    }
});
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;