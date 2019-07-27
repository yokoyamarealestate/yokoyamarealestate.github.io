$(document).ready(function(){
	console.log(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		// Take the user to a different screen here.
		document.getElementById('prompt').innerHTML = "After tapping a photo, swipe left/right to navigate through the gallery.";
	} else {
		document.getElementById('prompt').innerHTML = "After clicking a photo, use your arrow keys to navigate through the gallery.";
	}
});
