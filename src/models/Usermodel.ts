import mongoose, { Schema, Document } from "mongoose";
import { z } from "zod";

// Define Zod schema for user name validation
const UserNameSchema = z.string().min(2);

// Define interface for User document
interface IUser extends Document {
    name: string;
}

// Define Mongoose schema for User
const UserSchema: Schema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (value: any) => UserNameSchema.safeParse(value).success,
            message: (props: any) => `Invalid name: ${props.value}`,
        },
        required: true,
    },
});

// Create and export User model
const UserModel = mongoose.model<IUser>("User", UserSchema);
module.exports = UserModel