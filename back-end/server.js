const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')

// 
// Any changes made to the '.ENV' file will require the 'npm run server' command line again
// 
const port = process.env.PORT;

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on ${port}`))