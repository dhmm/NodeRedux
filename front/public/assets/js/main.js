let actionsURL = 'http://localhost:8000/todos/';

jQuery(document).ready(function() {           
    $('#mdlAddNew').modal();    
    $('#btnAddNew').click(function(){
      $('#newTodoTaskName').val('');
      $('#newTodoDescription').val('');     
      $('#newTodoExtensionType').prop("checked", true);
     
     
      $('#mdlAddNew').modal('open');
    })  
    $('#mdlEdit').modal();

    $('#btnCreateTodo').click(addTodo);
    $('#btnChangeTodo').click(changeTodo);
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
let todoToChange = 0;
function openEdit(id)
{  
  todoToChange = id;
  $.ajax({
    url: actionsURL+"todo/"+id,    
  }).done(function(data) {
      if(data == null) {
        alert('Task not exist');
      } else {        
          let todo = JSON.parse(data);
        if(todo) {
          $('#editTodoTaskName').val(todo.title);
          $('#editTodoDescription').val(todo.description);
          switch(todo.type)
          {
            case 'EXTENSION' :
                $('#editTodoExtensionType').prop("checked", true);
            break;
            case 'REQUIREMENT' :
                $('#editTodoRequirementType').prop("checked", true);
            break;
            case 'FEATURE' :
                $('#editTodoFeatureType').prop("checked", true);
            break;
            case 'BUG' :
                $('#editTodoBugType').prop("checked", true);
            break;
          }
          $('#mdlEdit').modal('open');
        } 
      }
  });    
}
function changeTodo()
{        
  var form = new FormData();  
  form.append("id" , todoToChange)
  form.append("title", $('#editTodoTaskName').val());
  form.append("description", $('#editTodoDescription').val());
  form.append("type", $("input:radio[name ='editTodoGrpType']:checked").val());  
  
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": actionsURL+"change",
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
function deleteTodo(id)
{
  $.ajax({
    url: actionsURL+"delete/"+id,    
  }).done(function() {
      location.reload();
  });
}



  