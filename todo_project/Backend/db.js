const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://techyrohan4:gVqxjdY5SlPynBQt@cluster1.mpfmg.mongodb.net/todo")
const todoSchema = mongoose.Schema({
    title: String, 
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos",todoSchema);

module.exports = {
    todo
}