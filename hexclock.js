var container = document.getElementsByClassName('body')[0];
var copybtn= document.getElementsByClassName('copybtn')[0];
var hex;

function updateTime() {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();

  if (h < 10)
		h = "0" + h;

	if (m < 10)
		m = "0" + m;

  if (s < 10)
  	s = "0" + s;


  hex = "#"+h+m+s;
  document.getElementsByClassName('time')[0].innerHTML = hex;
  container.style.backgroundColor = hex;
}

setInterval(updateTime,1000);
