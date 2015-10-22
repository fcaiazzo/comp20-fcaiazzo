// Replace this with your code
function init (){
	var canvas = document.getElementById('game_canvas');
	var context = canvas.getContext('2d');

	var img = new Image();
	var duck = new Image();  

	img.onload = function() {
		context.drawImage(img, 0, 0);
		context.drawImage(duck, 0, 120, 29, 30, 78, 24, 29, 30);
		context.drawImage(duck, 259, 119, 30, 30, 150, 84, 30, 30);
	};

	img.src = './duckhunt-background.gif'; 
	duck.src = './duckhunt_various_sheet.png';
}