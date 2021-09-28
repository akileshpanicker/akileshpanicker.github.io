window.onload=function(){
  getTime();

  let mainNav = document.getElementById("js-menu");
  let navBarToggle = document.getElementById("js-navbar-toggle");

  navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
  });
}

function spa(e)
{
  document.getElementById(e.innerText).style.display = "block";
  document.querySelectorAll(`* div[id]:not(#${e.innerText})`).forEach(elem=>{
    elem.style.display = "none";
  });
}

function getTime()
{
  const d = new Date();
  let day = d.getDate();
  if (day<10)
  {
    day = "0" + day.toString();
  }

  let month = d.getMonth()+1;
  if (month<10)
  {
    month = "0" + month.toString();
  }

  let year = d.getFullYear().toString();

  let res = day + "/" + month + "/" + year;

  let hour = d.getHours();
  if (hour<10)
  {
    hour = "0" + hour.toString();
  }

  let minute = d.getMinutes();
  if (minute<10)
  {
    minute = "0" + minute.toString();
  }

  let second = d.getSeconds();
  if (second<10)
  {
    second = "0" + second.toString();
  }

  res += "  " + hour+":"+minute+":"+second;
  document.getElementById("time").innerHTML = res;

  setTimeout(getTime, 1000);
}