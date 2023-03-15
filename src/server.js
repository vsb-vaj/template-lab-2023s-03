import express from 'express'

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// this is the simpliest example - if you go to the localhost:3000, if show you "Hello world"
app.get('/', (req, res) => {
  res.send('Hello World!')
})


// TASK 1 - Get all users
app.get('/users/', async (req, res) => {
  
})

// TASK 1 - Get all posts 
app.get('/posts/', async (req, res) => {
  
})

// TASK 2 - Get specific user
app.get('/users/:id', async (req, res) => {

})

// TASK 3 - Get specific post
app.get('/post/:id', async (req, res) => {

})

// TASK 4 - Create USER 
app.post('/users/create', async (req, res) => {

})

// TASK 5 - Create POST
app.post('/posts/create', async (req, res) => {

})


export { app };
