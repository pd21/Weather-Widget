$(document).ready(function(){
  $("#btn-search-city").click(function(){
    var cityName = $("#cityName").val();
    if(!cityName){
      return;
    }
    window.location.href = "/weather/" + cityName;
  });

document.getElementById("date").innerHTML = new Date().toDateString();
});
function startTime(){
  var today = new Date(),
      h = today.getHours(),
      m = today.getMinutes(),
      s = today.getSeconds();

  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  document.getElementById('time').innerHTML=h+":"+m+":"+s;
  t=setTimeout('startTime()',500);
}
