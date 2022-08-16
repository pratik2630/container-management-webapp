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
    document.getElementById("container_content2").innerHTML =
      this.responseText;
  }
  xhttp.open("GET", "http://13.233.49.96:3000/ps");
  xhttp.send();
  document.getElementById("container_content").innerHTML = ""
}



function psall_code() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("container_content").innerHTML =
      this.responseText;
  }
  xhttp.open("GET", "http://13.233.49.96:3000/ps_all");
  xhttp.send();
  document.getElementById("container_content2").innerHTML = ""
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
  console.log("")
  var cname = document.getElementById("start_container").value
  // var cimage = document.getElementById("containerImage").value
  // var cport = document.getElementById("containerPort").value
  console.log("cname fron home js"+ cname)
  const xhttp = new XMLHttpRequest();
  alert("Container "+ cname + "will be started soon!")
xhttp.open("GET", "http://13.233.49.96:3000/start?container_name="+cname);
xhttp.send();
}


function stop_code() {
 
  var cname = document.getElementById("containerNameToStop").value
  const xhttp = new XMLHttpRequest();

  alert("Container "+cname+" will be stopped soon. ")
xhttp.open("GET", "http://13.233.49.96:3000/stop?containerNameToStop="+cname );
xhttp.send();
}

function delete_container_code() {

  var cname = document.getElementById("containerNameToDelete").value
  const xhttp = new XMLHttpRequest();

  alert("Container "+ cname+ " will be deleted soon")
  xhttp.open("GET", "http://13.233.49.96:3000/cdelete?containerNameToDelete="+cname );
  xhttp.send();
}

function delete_all_container_code() { 
  
  var cname = document.getElementById("containerAllToDelete").value
  
  const xhttp = new XMLHttpRequest();
  console.log("cdelte:"+cname)
  xhttp.open("GET", "http://13.233.49.96:3000/cdelete_all?containerAllToDelete="+cname);
  xhttp.send();
}


function download_image_ajax() { 
  var iname = document.getElementById("imageNameToDownload").value
  alert(iname+" will be downloaded soon. Download time depends on internet speed and image size.")
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://13.233.49.96:3000/download_image?imageNameToDownload="+iname);
  xhttp.send();
}

function delete_image_ajax() { 
  var iname = document.getElementById("imageNameToDelete").value
  alert("Image "+iname+" will be deleted soon.")
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://13.233.49.96:3000/delete_image?imageNameToDelete="+iname);
  xhttp.send();
}

function search_image_ajax() { 
  var iname = document.getElementById("containerName").value
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://13.233.49.96:3000/search_image?image_name"+iname);
  xhttp.send();
}





// Pop up buttons js
// function startContainer() {
//   alert("startContainer")
// }

function cancelContainer() {
  //alert("cancelContainer")
  document.getElementById("startContainerMainBox").style.display = "none";
}

// function stopContainer() {
//   alert("stopContainer")

// }

function cancelStopContainer() {
  //alert("cancelStopContainer")
  document.getElementById("stopContainerMainBox").style.display = "none";
}

// function deleteContainer() {
//   alert("deleteContainer")

// }

function canceldeleteContainer() {
 // alert("canceldeleteContainer")
  document.getElementById("deleteContainerMainBox").style.display = "none";
}


function canceldeleteAllContainer() {
  // alert("canceldeleteContainer")
   document.getElementById("deleteAllContainerMainBox").style.display = "none";
 }
 



// form pop up button

function displayPopup() {
  document.getElementById("formContainer").style.display = "block";
}
function cancelPopup() {
  document.getElementById("formContainer").style.display = "none";
}
function stop_container() {
  document.getElementById("stopContainerMainBox").style.display = "block";
}
function delete_container(){
  document.getElementById("deleteContainerMainBox").style.display = "block";
}

function delete_all_container(){
  document.getElementById("deleteAllContainerMainBox").style.display = "block";
}
function start_container(){
  document.getElementById("startContainerMainBox").style.display = "block";
}

function download_container() {
  document.getElementById("stopContainerMainBox").style.display = "block";
}
function deleteImagePopup(){
  document.getElementById("deleteImageBox").style.display = "block";

}
function canceldeleteImage(){
  document.getElementById("deleteImageBox").style.display = "none";

}
function downloadImagePopup(){
  document.getElementById("downloadImageBox").style.display = "block";

}
function cancelDownloadImage(){
  document.getElementById("downloadImageBox").style.display = "none";

}
function searchPopup(e){

  document.getElementById("searchPopup").style.display = "block";
  e = e || window.event;
  e.preventDefault();

}
function cancelSearchPopup(){
  document.getElementById("searchPopup").style.display = "none";

}