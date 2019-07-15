let actionsURL = 'http://localhost:8000/todos/';

jQuery(document).ready(function() {           
    $('#mdlAddNew').modal();    
    $('#btnAddNew').click(function(){
      $('#mdlAddNew').modal('open');
    })  
    
    $('#btnCreateTodo').click(addTodo);
})
function addTodo()
{  
  var form = new FormData();
  form.append("title", $('#newTodoTaskName').val());
  form.append("description", $('#newTodoDescription').val());
  form.append("type", $("input:radio[name ='newTodoGrpType']:checked").val());
  form.append("completed", "false");
  
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": actionsURL+"add",
    "method": "POST",
    "headers": {},
    "processData": false,
    "contentType": false,
    "mimeType": "multipart/form-data",
    "data": form
  }
  
  $.ajax(settings).done(function (response) {
    location.reload();
  });
  
}
function editTodo(id)
{
  
}
function deleteTodo(id)
{
  $.ajax({
    url: actionsURL+"delete/"+id,    
  }).done(function() {
      location.reload();
  });
}



  