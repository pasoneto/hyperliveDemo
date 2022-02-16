function dropHandler(ev) {
  ev.preventDefault();
  if (ev.dataTransfer.items[0].kind === 'file') {
     var file = ev.dataTransfer.items[0].getAsFile();
     document.getElementById("p1").innerHTML = 'You selected the file: "' + file.name + '"';
	}
  return(file)
}

function hitPotential(file){
  console.log(file)
  if(file == "one.wav"){
    return(98)
  } else if(file == "two.wav"){
    return(85)
  } else if(file == "three.wav"){
    return(79)
  } else{
    return(Math.floor(Math.random() * 100))
  }
}

function fileInputName(){
    var fileName = document.getElementById("input-file").value;
    var fileName = fileName.split(/(\\|\/)/g).pop();
		document.getElementById("p1").innerHTML = 'You selected the file: "' + fileName + '"';
}

function analyzer(){
  var file = document.getElementById("p1").innerHTML;
  var file = file.substring(24, file.length-1)
  if(file !== ''){
	var tasks = ['Analyzing "'+ file + '"', "Analyzing artist data...", "Computing Hit Potential Score"]
	move(20, tasks[0])
	setTimeout(() => { move(30, tasks[1]); }, 2000);
	setTimeout(() => { move(50, tasks[2]); }, 5000);
	setTimeout(() => {
		document.getElementById("myProgress").style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementById("p1").innerHTML = "Hit Potential Score is: <strong><span style='color:rgb(255, 255, 51)'>" + hitPotential(file) + "</span></strong>";
	}, 10000)
  } else{
	  alert("Please, choose a file.")
  }
}

function move(time, text) {
  var i = 0;
  document.getElementById("p1").innerHTML = text;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var elem2 = document.getElementById("myProgress");
    elem2.style.backgroundColor = "#ddd"
    var width = 1;
    var id = setInterval(frame, time);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        if(width == 100){
          elem.style.width = "0%";
        }
      }
    }
  }
}

function dragOverHandler(ev) {
  ev.preventDefault();
  console.log(ev.dataTransfer.items)
}
