
// portadas escritora relatos

var count = 0;
var inc = 0;
var margin = 0;
var slider = document.getElementsByClassName("slider-width")[0];
var itemDisplay = 0;

if (screen.width > 990) {
  itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
  margin = itemDisplay * 5;
}
if (screen.width > 700 && screen.width < 990) {
  itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
  margin = Math.floor(window.innerWidth / itemDisplay);
}
if (screen.width > 280 && screen.width < 700) {
  itemDisplay = 1; // solo se muestra un elemento a la vez en la versión móvil
  margin = Math.floor(window.innerWidth / itemDisplay);
}





var items = document.getElementsByClassName("item");
var itemleft = items.length % itemDisplay;
var itemslide = Math.floor(items.length / itemDisplay) - 1;

for (let i = 0; i < items.length; i++) {
  items[i].style.width = (screen.width / itemDisplay) - margin + "px";
}

document.getElementById("next-btn").addEventListener("click", function() {
  if (inc !== itemslide + itemleft) {
    if (inc == itemslide) {
      inc = inc + itemleft;
      count = count - (screen.width / itemDisplay) * itemleft;
    } else {
      inc++;
      count = count - screen.width;
    }
  }
  slider.style.left = count + "px";
});

document.getElementById("prev-btn").addEventListener("click", function() {
  if (inc !== 0) {
    if (inc == itemleft) {
      inc = inc - itemleft;
      count = count + (screen.width / itemDisplay) * itemleft;
    } else {
      inc--;
      count = count + screen.width;
    }
  }
  slider.style.left = count + "px";
});


// galeria  filtros blog

var filterButtons = document.querySelectorAll(".filter");
var imgBoxes = document.querySelectorAll(".img-box-3");

// Agregar un evento de click a cada botón de filtro
filterButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var category = button.getAttribute("data-category");
    filterImages(category);
  });
});

function filterImages(category) {
  imgBoxes.forEach(function(imgBox) {
    if (imgBox.getAttribute("data-category") === category || category === "all") {
      imgBox.style.display = "block";
    } else {
      imgBox.style.display = "none";
    }
  });
}



