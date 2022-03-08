import './less/index.less'

// Your code goes here!
const BusPic = document.querySelector(".busPic");

BusPic.onclick = function(evt) {
    console.log("On click");
  }

  BusPic.addEventListener("mouseover", myScript);

  function myScript(){
      console.log('hi')
  }