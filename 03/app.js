
// 박스오피스  데이터 가져오기
var listTemplate = $('listTemplate').innerHTML;
var apikey = 'https://apis.daum.net/search/web?apikey=6fafa0a2e398ed964ce63d2ca3d53ba8&q='+text+'&output=json'
var search = $('search');
var button = $('button');
// console.log(listTemplate);

getJSON(apikey , function(apikeyData){

  console.log(apikeyData)

  // 템플릿 가져와서  해석하기
  var html = tmpl(listTemplate, {list: apikeyData.data});


  // 해석된 html을 $wrap 넣어주기
  $('wrap').innerHTML = html;


});
