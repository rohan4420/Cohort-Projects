const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors")
//body{
    // title:string
    // description:string
// }
app.use(express.json());
app.use(cors())

app.post("/todo", async function(req , res){
    const createPayLoad = req.body;
    const parsedPayload = createTodo.safeParse(createPayLoad);
 
    if(!parsedPayload.success){
        res.status(411).json({
            message: "You sent the wrong inputs"
        })
        return;
    }
    // put in mongodb
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })

    res.json({
        message: "Todo created"
    })

})

app.get("/todos", async function(req , res){
    const todos = await todo.find({})

    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);

    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You sent the wrond inputs"
        })
        return;
    }
    // update in mongodb
    
    await todo.findOneAndUpdate({
        _id: req.body.id
    },{
        completed:true
    })

    res.json({
        messgae: "Todo marked as complete "
    })
})
// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });