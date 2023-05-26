
import { Schema, model, Types } from "mongoose";


const userSchema = new Schema({

    userName: {
        type: String,
        required: [true,"userName is required "],
        min: [2, 'minimum length 2 char'],
        max: [20, 'max length 2 char']

    },

    age:String,
    gender:{
        type:String,
        enum:["male","female"]
    },
    email: {
        type: String,
        unique: [true, 'email must be unique value'],
        required: [true, 'userName is required'],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
        default: 'User',
        enum: ['User', 'Admin']
    },
    confirmEmail: {
        type: Boolean,
        default: false,
    },
    blocked: {
        type: Boolean,
        default: false,
    },

    accesscode:{
     type:String,
    },
    image: String,


}, {
    timestamps: true,
    // toJSON:{virtuals:true},
    // toObject:{virtual:true},
})

// categorySchema.virtual("Subcategory",{
//     ref:"subcategory",
//     localField:"localfield",
//     foreignField:"categoryId"
//     }
//     )



const userModel = model('User', userSchema)
export default userModel
