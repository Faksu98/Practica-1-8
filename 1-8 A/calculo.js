/*
  El dia 2 de junio Juan recibe de su emprendimiento $200.000, sumandole las ventas en negro $100.000.
  Despues de gastar $50.000 en impuestos y de pagarle a sus 5 empleados un sueldo de $30.000.
  Y recibiendo los ingresos de los $10.000 que invirtio por 6 meses.
  ¿despues de hacer todos los tramites cuanta plata le queda a Juan? 
*/

var juanEmprendimiento = 200000;
var dineroNegro = 100000;
var impuestosPagados = 50000;
var empleadosCantidad = 5;
var sueldoEmpleados = 30000;
var plataInvertida = 10000;
var mesesInvertidos = 6;
var empleadosPagados = sueldoEmpleados / empleadosCantidad;
var invercionRecibida = plataInvertida * mesesInvertidos;
var gananciaTotal = juanEmprendimiento + dineroNegro + invercionRecibida;


console.log("La plata que obtiene de su emprendimiento, las ventas y sus inversiones es de: " + gananciaTotal);
console.log("Plata despues de pagar a los impuestos y empleados: " + (gananciaTotal - empleadosPagados - impuestosPagados));


