var th = document.getElementById('thumbnails'),
  box = document.querySelector('.current-image-wrapper');
var img = document.createElement('img');
// first image
img.src = 'img/living_room.jpg';
img.className = 'large';
// open 1 image
box.appendChild(img)
// on click show 
th.addEventListener('click', function(e) {
  var x = e.target.nodeName;
  if(x != 'IMG') {
  	return;
  }
  var t = e.target,
    new_src = t.parentNode.href;
  
  img.className = 'large';
  img.src = new_src;
  box.removeChild(img);
  box.appendChild(img);
  
  e.preventDefault();
}, false);