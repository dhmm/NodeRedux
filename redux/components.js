class todo 
{
    constructor(title = null , description = null)
    {
        this.id = null
        this.title= title;
        this.description= description;
        this.completed= false;
    }
}
module.exports = { todo }