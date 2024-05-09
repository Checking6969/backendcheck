"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const UserModel = require('./models/Usermodel');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://ashishashish7440:r5VpNP6UIXeqOgLd@cluster0.po6f6wt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
mongoose_1.default.connection.on("connected", () => {
    console.log("Mongoose default connection is open.");
});
mongoose_1.default.connection.on("error", (err) => {
    console.error("Mongoose default connection has occurred " + err + " error");
});
mongoose_1.default.connection.on("disconnected", () => {
    console.log("Mongoose default connection is disconnected");
});
const db = mongoose_1.default.connection;
if (db.readyState === 1) {
    console.log("Mongoose default connection is already open.");
}
else {
    console.log("Mongoose default connection is not yet open.");
}
const newUser = new UserModel({
    name: "John Doe",
});
newUser.save();
app.listen(3000, () => {
    console.log('server is running');
});
//# sourceMappingURL=moveindex.js.map