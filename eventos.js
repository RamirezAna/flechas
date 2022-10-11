var teclas = {  UP: 38,  DOWN: 40,  LEFT: 37,  RIGHT: 39};

console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);//keyup suelta la tecla keydown presiona tecla

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d")
var x= 100, y =100;

dibujarLineas("red",x-1,y-1,x+1,y+1,papel);

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal, lienzo)
    {
      lienzo.beginPath();
      lienzo.strokeStyle=color;
      lienzo.lineWidth=3;
      lienzo.moveTo(xinicial, yinicial);
      lienzo.lineTo(xfinal, yfinal);
      lienzo.stroke();
      lienzo.closePath();
    }


function dibujarTeclado(evento)
{
  var colorcito="brown";
  var movimiento = 1;

 switch(evento.keyCode) //para poder usar case
 {
   case teclas.UP:
      dibujarLineas(colorcito, x, y, x, y-movimiento, papel);
      y = y - movimiento;
   break;
   case teclas.DOWN:
     dibujarLineas(colorcito, x, y, x, y+movimiento, papel);
     y = y + movimiento;
   break;
   case teclas.LEFT:
       dibujarLineas(colorcito, x, y, x-movimiento, y, papel);
       x = x - movimiento;
   break;
   case teclas.RIGHT:
       dibujarLineas(colorcito, x, y, x+movimiento, y, papel);
       x = x + movimiento;
   break;
   default:
      console.log("otra techa");
   break;
 }

}
