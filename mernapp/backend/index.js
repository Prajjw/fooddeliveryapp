const express = require('express');

const app = express();
const PORT = 5000;
const mongoDB = require('./db');
const cors = require('cors');
app.use(cors({
  origin: '*'
}));

app.use((req,res,next) =>{
  res.setHeader("Access-Control-Origin","https://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type ,Accept"
  );
  next();
});


app.get('/', (req, res) => {
  res.send("my name is princu");
});
app.use(express.json())
app.use('/api',require('./Routes/CreateUser'))
app.use('/api',require('./Routes/displaydata'))


app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});