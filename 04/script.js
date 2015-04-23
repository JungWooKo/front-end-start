var box = document.querySelectorAll('.box')[0];
var startX = 10;

console.log(box);

function randomNumber(endNum)
{
  return Math.floor(Math.random()*endNum)+1;
}
function moveBox()
{
  var value = x + 5;

  box.style.left = x + 'px';

  x = value;
}

function startMove()
{
  console.log('start')
  window.setInterval(moveBox,100);
}

document.body.addEventListener('click',startMove);
