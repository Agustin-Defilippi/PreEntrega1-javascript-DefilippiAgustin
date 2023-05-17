//mis funciones utilizadas
const operacionMetros2 = (valor1,valor2) =>{
    return(valor1 * valor2);
}
const operacionSuperficie = (valor1,valor2,valor3) =>{
    return(((valor1 * valor2)*2) + ((valor3 * valor2)*2));
}
const operacionAgregadoCeramica = (valor1) =>{
    return(valor1 * 1.10);
}
const operacionAgregadoPorcelanto = (valor1) =>{
    return(valor1 * 1.15.toFixed(2));
}
const operacionSumaCantidades = (valor1,valor2,valor3) =>{
    return((valor1 * valor2)+((valor1 * valor3)*2) + ((valor2 * valor3)*2));
}
const operacionCalculoPegamento = (valor1) =>{
    return(valor1 / 5);
}

//solicita datos principal
const while1 = () =>{

    let producto= "";
    while((producto.trim() === "") || (!isNaN(producto))){
        producto= prompt("ingrese que desea hacer"+"\n\n"+"1"+")"+" "+"Inserte"+" " +"(CALCULAR)"+" "+"Para calcular metros cuadrados que necesites de ceramica y o porcelanato,"+" "+"Si así lo desea."+"\n\n"+"1"+")"+" "+"Inserte"+" "+"(" +"PEGAMENTO"+ "),"+" "+"para calcular pegamento"+" "+"Si así lo desea."+"\n\n"+"2"+")"+" "+"Inserte"+" "+"(" +"TIENDA"+ "),"+" "+"Si así lo desea.").toUpperCase();
    }
    return producto;
}

//datos a completar en la tienda
const tiendaPegamento = () =>{

   return parseInt(prompt("ingrese la cantidad de metros cuadrados que desea"+"\n"+"ingrese solo valores enteros."));
}




