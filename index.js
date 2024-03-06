const exp = require('constants');
const { urlencoded } = require('express');
const express = require('express');
const db = require('./config/mongoose')
const port = 800;
const path = require('path');
const app = express();
const todoList = require('./models/models')

let todo = [
    // description: "my todo",
    // dueDate: '12 jun,2019',
    // category: 'personal'
]

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

app.use(express.static('assets'))
app.use(urlencoded());
app.get('/', (req, res) => {
    todoList.find({}, (err, Todo) => {
        if (err) {
            console.log('error in finding the the list item');
            return;
        } return res.render('app', { title: 'ToDo App', TodoList: Todo });
    })
})
app.post('/add-task', (req, res) => {
    console.log(req.body.dueDate);
    let id = req.body.TodoDone;
    if (req.body.type == 'Update') {
        todoList.create({
            description: req.body.description,
            dueDate: req.body.dueDate,
            category: req.body.category
        })
    }
    else {
        todoList.findByIdAndDelete(id, (err) => {
            if (err) {
                console.log('error');
                return;
            }
        })
    }
    return res.redirect('back');
})

app.listen(port, (err) => {
    if (err) {
        console.log('error in running the server');
        return;
    }
    console.log(`server is running on port: ${port}`)
})