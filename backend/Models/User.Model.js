const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        age: { type: Number },
        city: { type: String },
        gender: { type: String },
        profession: { type: String }
    }
)

const UserModel = mongoose.model("user", UserSchema)

module.exports = {
    UserModel
}