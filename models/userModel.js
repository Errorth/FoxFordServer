const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: true},
    activationLink: {type: String},
    roles: {type: [String], default: ["Member"]},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
})

module.exports = model('User', UserSchema)