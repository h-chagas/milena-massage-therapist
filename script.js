/*Opacity for the Cards (Pricing)*/
function fadeIn() {
    var card = document.querySelector('.imgCard1');
    var card2 = document.querySelector('.imgCard2');
    var card3 = document.querySelector('.imgCard3');
    card.style.opacity=1;
    card.style.transition+='all  1s';
    card2.style.opacity=1;
    card2.style.transition+='all  1s';
    card3.style.opacity=1;
    card3.style.transition+='all  1s';
}

function fadeOut() {
    var card = document.querySelector('.imgCard1');
    var card2 = document.querySelector('.imgCard2');
    var card3 = document.querySelector('.imgCard3');
    card.style.opacity=0.7;
    card.style.transition+='all 1s';
    card2.style.opacity=0.7;
    card2.style.transition+='all 1s';
    card3.style.opacity=0.7;
    card3.style.transition+='all 1s';
}


/*Copyright year*/

var date = new Date();
var year = date.getFullYear();
document.querySelector('#copyright').innerText += year;




/**//**//* MOBILE *//**//**/

/*
Display menu when max-width is 
Change menu hamburger button to 'x' when menu open 
*/
function hbMenuIcon() {
    var x = document.getElementById("topnav");
    var y = document.getElementById('menuIc');
    var z = document.querySelector('#milenaName');
    
    if (x.style.display == 'none') {
        
        x.style.display = 'block';
        x.style.flexDirection = 'column';
        x.style.backgroundColor = 'var(--color6)';
        x.style.overflow = 'hidden';
        x.style.display = 'flex';
        x.style.position = 'fixed';
        y.innerHTML = '&#xe5cd;';

        z.style.backgroundColor = 'var(--color6)';
      
    } else {
        x.style.display = 'none';
        y.innerHTML = '&#xe5d2;';
        z.style.backgroundColor = 'transparent';
        
        }
    
}



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.style.top=0;

  } else {
    header.classList.remove("sticky");
  }
}

window.addEventListener('scroll', scrollHandler);




/*BOOK Button*/

/* When the user clicks on the button BOOK on the topmenu, toggle between hiding and showing the dropdown content */
function openDropDownMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('#bookMenuBtn')) {
      var dropdowns = document.getElementById("dropdownMenu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }







