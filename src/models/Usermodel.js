"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const zod_1 = require("zod");
// Define Zod schema for user name validation
const UserNameSchema = zod_1.z.string().min(2);
// Define Mongoose schema for User
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        validate: {
            validator: (value) => UserNameSchema.safeParse(value).success,
            message: (props) => `Invalid name: ${props.value}`,
        },
        required: true,
    },
});
// Create and export User model
const UserModel = mongoose_1.default.model("User", UserSchema);
module.exports = UserModel;
//# sourceMappingURL=Usermodel.js.map