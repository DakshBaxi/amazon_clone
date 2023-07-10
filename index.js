function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    
  }

  function done(){
    alert("You searched");
  }
  function hero(){
    document.querySelector(".hero").classList.toggle("hero2");
    document.querySelector(".carddiv").classList.toggle("herodown2");
}

function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 
}