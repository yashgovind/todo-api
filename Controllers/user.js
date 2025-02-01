const UserModel = require("../Models/user");

async function createTodos(req,res) {
      const { name, content } = req.body;
        if (!name || !body) return res.status(404).json({ messaage: "fields must not be empty" });
        const newUser = await UserModel.create({
            name,
            content
        });
        getUser.save();
        res.status(201).json(newUser)
}

async function getAllTodos(req,res) {
        const { name, content } = req.body;
       // get all todos.
        const getUser = await UserModel.find({
            name,
            content
        });
        res.json(getUser).status(201);
}

async function getSingleTodo(req, res) {
    const  id  = parseInt(req.params.id);
    const getUserbyId = await UserModel.findOne({
        _id: id
    });
    res.json(getUserbyId).status(201);
}

async function updateTodo(req, res) {
    const { name,content } = req.body;
    const updateUser = await UserModel.findOneAndUpdate({
         name,
        content
    });
    res.json(updateUser).status(201);
}

async function deleteSingleTodo(req, res) {
    const { name,content } = req.body;
    const deleteTodo = await UserModel.findOneAndDelete({
         name,
        content
    });
    res.json(deleteTodo).status(201);
}

async function deleteAllTodo(req, res) {
    const { name, content } = req.body;
    // get all todos.
      await UserModel.deleteMany({
         name,
         content
     });
    res.status(201).json({"messaage":"all items deleted"})
}


module.exports = {
    createTodos,getAllTodos,getSingleTodo,updateTodo,deleteSingleTodo,deleteAllTodo
}