require('dotenv').config();
const express = require('express');
const app = new express();
const router = express.Router();

router.get('/' , (req,res)=> {
  res.end('Hello');
})

let host = process.env.HOST || '127.0.0.1';
let port = process.env.PORT || '8000';

app.use(router);
app.listen(port, host ,()=> {
  if(process.env.mode == 'dev') {
    console.log(`Server running at port ${port}`);
  }
})
