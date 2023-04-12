//Criar uma referência para tela
cnvas = document.getElementById('myCanvas');
ctx = canvas.getContext
//Dê altura e largura específicas para a imagem do carro
car2.png_width = 75;
car2.png_height = 100;

backgroundImage = "parkingLot.jpg";
car2.pngImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
car2.png_x = 5;
car2.png_y = 225;

function add() {
	//carregar carro e imagens de fundo na tela.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = car2.png_image;
	
	car2.png_imgTag = new Image();
	car2.png_imgTag.onload = uploadcar2.png;
	car2.png_imgTag.src = car2.png_image;
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadcar2.png() {
	//Defina a função ‘uploadcar2.png’.
	ctx.drawImage(car2.png_imgTag, car2.png_width, greencar_height);
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(greencar_y >=0)
{
greencar_y = greencar_y - 10;
console.log("When up arrow is pressed, x = " + greencar_x+" | y = " +greencar_y);
uploadBackground();
uploadgreencar();
}
}

function down()
{
if(greencar_y >=0)
{
greencar_y = greencar_y + 10;
console.log("When up arrow is pressed, x = " + greencar_x+" | y = " +greencar_y);
uploadBackground();
uploadgreencar();
}
}

function up()
{
if(greencar_x >=0)
{
greencar_x = greencar_x - 10;
console.log("When up arrow is pressed, x = " + greencar_x+" | y = " +greencar_y);
uploadBackground();
uploadgreencar();
}
}

function up()
{
if(greencar_x >=0)
{
greencar_x = greencar_x + 10;
console.log("When up arrow is pressed, x = " + greencar_x+" | y = " +greencar_y);
uploadBackground();
uploadgreencar();
}
}
