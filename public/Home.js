const links = document.querySelectorAll(".navbar > nav > ul > li");
const cards = document.querySelectorAll(".card");

[...links].map((link, index) => {
  link.addEventListener("click", () => onLinkClick(link, index), false);
});

const onLinkClick = (link, currentIndex) => {
  const selectedItem = link.getAttribute("name");
  cards.forEach((card) => {
    card.classList.remove("active");
  });
  // const currentCard = [...cards].find((card) =>
  //   card.classList.contains(selectedItem)
  // );

  const currentCard = [...cards].find((card) =>
    Object.keys(card.dataset).includes(selectedItem)
  );
  currentCard.classList.add("active");
  highLightSelectedLink(currentIndex);
};

const highLightSelectedLink = (currentIndex) => {
  links.forEach((link) => {
    link.classList.remove("selectedLink");
  });
  links[currentIndex].classList.add("selectedLink");
};





function ps_code() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("container_content").innerHTML =
      this.responseText;
  }
  xhttp.open("GET", "http://13.233.49.96:3000/ps");
  xhttp.send();
}



function psall_code() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("container_content").innerHTML =
      this.responseText;
  }
  xhttp.open("GET", "http://13.233.49.96:3000/ps_all");
  xhttp.send();
}




function dimage_code() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("content").innerHTML =
      this.responseText;
  }
  xhttp.open("GET", "http://13.233.49.96:3000/dimage");
  xhttp.send();
}




function drun_code() {

  var cname = document.getElementById("containerName").value
  var cimage = document.getElementById("containerImage").value
  var cport = document.getElementById("containerPort").value
  
  const xhttp = new XMLHttpRequest();

xhttp.open("GET", "http://13.233.49.96:3000/docker_run?container_name="+cname+"&container_image="+cimage+"&container_port="+cport );
xhttp.send();
}


function start_code() {

  var cname = document.getElementById("containerName").value
  var cimage = document.getElementById("containerImage").value
  var cport = document.getElementById("containerPort").value
  
  const xhttp = new XMLHttpRequest();

xhttp.open("GET", "http://13.233.49.96:3000/start?container_name="+cname);
xhttp.send();
}


function stop_code() {

  var cname = document.getElementById("containerName").value
  const xhttp = new XMLHttpRequest();

xhttp.open("GET", "http://13.233.49.96:3000/docker_run?stop="+cname );
xhttp.send();
}

function delete_container_code() {

  var cname = document.getElementById("containerName").value
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://13.233.49.96:3000/cdelete?container_name="+cname );
  xhttp.send();
}

function delete_all_container_code() { 
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://13.233.49.96:3000/cdelete_all");
  xhttp.send();
}


function download_image_ajax() { 
  var iname = document.getElementById("containerName").value
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://13.233.49.96:3000/download_image?image_name"+iname);
  xhttp.send();
}

function delete_image_ajax() { 
  var iname = document.getElementById("containerName").value
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://13.233.49.96:3000/delete_image?image_name"+iname);
  xhttp.send();
}

function search_image_ajax() { 
  var iname = document.getElementById("containerName").value
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://13.233.49.96:3000/search_image?image_name"+iname);
  xhttp.send();
}
