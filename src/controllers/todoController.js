let todos = [
    { id: 1, title: "Learn Node.js", description: "Basics", completed: false },
    { id: 2, title: "Build API", description: "RESTful APIs", completed: false }
];



let idCounter = 3;

const getAllTodos = (req, res) => {
    res.status(200).json(todos);
};

const createTodo = (req, res) => {
    const { title, description } = req.body;
    const newTodo = { id: idCounter++, title, description, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
};

const updateTodo = (req, res) => {
    const { id } = req.params;
    console.log("Updating Todo with ID:", id);

    if (!id) {
        return res.status(400).json({ message: "ID is required" });
    }

    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    const { title, description, completed } = req.body;
    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.completed = completed !== undefined ? completed : todo.completed;

    res.status(200).json(todo);
};

const deleteTodo = (req, res) => {
    const { id } = req.params;
    console.log("Deleting Todo with ID:", id);

    if (!id) {
        return res.status(400).json({ message: "ID is required" });
    }

    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex === -1) {
        return res.status(404).json({ message: "Todo not found" });
    }

    todos.splice(todoIndex, 1);
    res.status(204).send();
};

console.log(todos)

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
};
