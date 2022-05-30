var numeroIngresado = prompt("Ingrese un numero", "0");

if(     numeroIngresado == 3    ){
    document.write(`
      <h2> Los numeros son iguales ¡¡Ganaste!! </2>
    `);
}else{
   document.write(`
      <h2> Fallaste intentalo de nuevo </2>
   `);
}