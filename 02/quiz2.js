    var board = document.getElementById("board");

    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
          var span = document.createElement("span");
          if((i+j)%2==0)
          {
            span.setAttribute("class","white")
          }
          else
          {
            span.setAttribute("class","black")
          }
          board.appendChild(span);
        }
    }
