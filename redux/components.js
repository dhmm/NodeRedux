const todoTypes = require('./todoTypes');

class todo 
{
    constructor(title = null , description = null , type = todoTypes.EXTENSION , completed = false)
    {
        this.id = null
        this.title= title;
        this.description= description;
        this.type = type;
        this.completed= completed;        
    }
}
module.exports = { todo }