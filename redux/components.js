const todoTypes = require('./todoTypes');

class todo 
{
    constructor(title = null , description = null , type = todoTypes.EXTENSION )
    {
        this.id = null
        this.title= title;
        this.description= description;
        this.type = type;
        this.completed= false;        
    }
}
module.exports = { todo }