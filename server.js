const express = require('express');
const app = new express();
const router = express.Router();
const actions = require('./actions');
const front = require('./front');
const frontFiles = require('./front/frontfiles');
const config = require('./config/config');
const path = require('path');

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , '/front/public'));

router.use('/todos' , actions);
router.use('/frontfiles' , frontFiles);
router.use('/' , front);


app.use(router);
app.listen(config.port, config.host ,()=> {
  if(process.env.mode == 'dev') {
    console.log(`Server running at port ${config.port}`);
  }
})
