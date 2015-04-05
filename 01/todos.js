//start...
<<<<<<< HEAD

function getDom(id)
{
  return document.getElementById(id)
}

//var todoStringField = document.getElementById("todoString");
var todoStringField = getDom('todoString');

//var form = document.getElemeentById("todoForm");


todoStringField.addEventListener('keyup',function(event){
  //console.log(event.keyCode);
  //console.log(todoStringField , todoStringField.value);
  if(event.keyCode === 13)
  {
    //입력 받아들이기
    console.log(todoStringField.value);
    var newTodo = todoStringField.value;
    todoStringField.value="";
    //리스트에 출력
    var listDom = getDom("todoList");
    listDom.innerHTML += '\
    <li>\
        <button class="delete">×</button>\
        <input type="checkbox" class="toggle-checked">\
        <span class="text">'+newTodo+'</span>\
    </li>\
    ';
  }
});
