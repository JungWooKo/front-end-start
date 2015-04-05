/*
for(var i=0; i<=100; i++)
{
  console.log(i);
}
*/
/*
for(var i=0; i<=100; i=i+2)
{
  console.log(i);
}
for(var j=1; j<=100; j=j+2)
{
  console.log(j);
}
*/

var num, total=0;

for(var isEnd=false; isEnd===false;)
{
  num = prompt("숫자를 입력하세요");
  if(num===null)
  {
    alert("합은"+total+"입니다.")
    isEnd=true;
  }
  else
  {
    total += parseInt(num,10);
  }
}
console.log(num);
