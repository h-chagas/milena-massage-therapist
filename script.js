

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
        y.innerHTML = '&#xe5cd;';

        x.style.flexDirection = 'column';
        x.style.backgroundColor = 'var(--color0)';
        z.style.backgroundColor = 'var(--color0)';
        x.style.overflow = 'hidden';
        x.style.padding = '2px';
        x.style.display = 'flex';
      

    } else {
        x.style.display = 'none';
        y.innerHTML = '&#xe5d2;';
        z.style.backgroundColor = 'transparent';
        
        }
    
}