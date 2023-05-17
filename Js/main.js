alert("1"+" "+"(CALCULADOR ONLINE PARA REVESTIMIENTOS Y PISOS)"+"\n"+"2"+" "+"(SIMULADOR DE TIENDA)")

let metrosCuadrados= 0;
let metrosAncho;
let metrosLargo;
let metroAlto;
let listametAncho="";
let listametLargo="";
let listametAlto ="";
let listaMetrosTotal="";
let listaAltos ="";
let listaMetrosfinal= 0;
let entradasDatos=0;
let ventaProductos ="";
let calculadorPegamento="";
let pegamento = "";
let producto= while1();

if((producto === "CALCULAR")){
  
    while(isNaN(metrosAncho) || isNaN(metroAlto) || isNaN(metrosLargo)){
        metrosAncho = parseFloat(prompt("Ingrese la cantidad de metros de (ancho) de piso a cubrir")).toFixed(2);
        metrosLargo = parseFloat(prompt("Ingrese la cantidad de metros de (largo) de piso a cubrir")).toFixed(2);
        metroAlto = parseFloat(prompt("Ingrese la altura en metros a cubrir")).toFixed(2);
    }

    listametAncho += "Sus metros de ancho a cubrir de piso ingresados son"+" "+"="+" "+metrosAncho+" "+"metros;"+"\n";
    listametLargo += "Sus metros de largo a cubrir de piso ingresados son"+" "+"="+" "+metrosLargo+" "+"metros;"+"\n";
    listametAlto += "Su altura declarada a cubrir es"+" "+"="+" "+ metroAlto+" "+"metros"+"\n";
    listaMetrosTotal = listametAncho + listametLargo + listametAlto;
    listaAltos= "Sus metros a cubrir de revesitimiento para pared son"+" "+"="+" "+ operacionSuperficie(metrosAncho,metroAlto,metrosLargo).toFixed(2)+" "+"m2;";
    metrosCuadrados= operacionMetros2(metrosAncho,metrosLargo);
    listaMetrosfinal = operacionSumaCantidades(metrosAncho,metrosLargo,metroAlto);

    alert(listaMetrosTotal+"\n"+"Los (METROS CUADRADOS) a cubrir de piso son"+" "+"="+" "+metrosCuadrados.toFixed(2)+" "+"m2;"+"\n"+ listaAltos);
    alert("USTED TIENE QUE CUBRIR"+" "+"("+listaMetrosfinal.toFixed(2)+" "+"m2"+")"+" "+"EN TOTAL!!!");
    alert("Recomendamos a sus"+" "+"("+listaMetrosfinal.toFixed(2)+" "+"m2"+")"+" "+"agregarle un 10% mas"+" "+"por motivos de desperdicios en los recortes, fracturas o quiebres y futuras reparaciones;");

    let agregadoCeramica = prompt("Desea hacerlo?"+"\n\n"+"Presione SI, si asi lo desea;"+ "\n"+ "Presione NO, si asi lo desea;").toUpperCase();
    if(agregadoCeramica === "SI"){
        alert(listaMetrosTotal+"\n"+"METROS TOTALES"+" "+"="+" "+listaMetrosfinal.toFixed(2)+" "+"M2"+"\n"+"Los (METROS CUADRADOS) a cubrir  sumandole el +10% es"+" "+"="+" "+operacionAgregadoCeramica(listaMetrosfinal).toFixed(2)+" "+"m2");
    }else{
        alert("Su resultado final es"+" "+"="+" "+"("+listaMetrosfinal.toFixed(2)+" "+"m2"+")"+" "+"a cubrir en total.");
    }

}else if((producto === "PEGAMENTO")){
    
    while((!isNaN(calculadorPegamento)) || ((calculadorPegamento.trim() ===""))){
        calculadorPegamento = prompt("Cacule el pegamento de acorde a sus metros cuadrados finales."+"\n"+"(INSERTE CALCULAR);"+"\n\n").toLocaleUpperCase();
    }
    
    let cantidadMetros = parseFloat(prompt("Ingrese los metros cuadrados finales para efectuar el calculo acorde")).toFixed(2);
    let calculoFinal= "Para"+" "+cantidadMetros+" "+"m2"+" "+"se necesitan"+" "+ operacionCalculoPegamento(cantidadMetros).toFixed(2)+" "+"bolsas de pegamento aproximadamente.";
    alert(calculoFinal);

}else if((producto === "TIENDA")){

    alert("PROMOCIONES DE PISOS Y PEGAMENTOS")

    while ((!isNaN(ventaProductos)) || (ventaProductos.trim() === "")){
        ventaProductos =prompt("Que desea comprar?"+"\n\n"+"Inserte"+" "+"(" +"(CERAMICA)"+ "),"+" "+"Si así lo desea."+"\n"+"Inserte"+" "+"(" +"PEGAMENTO"+ "),"+" "+"Si así lo desea.").toUpperCase();
    }
    
    if((ventaProductos === "CERAMICA")){
        alert("TUS PROMOCIONES EN CERAMICA"+"\n\n"+"PROMO 1"+"\n"+"Ceramica venecita 36x36"+" "+"="+" "+"$1250.33 m2."+"\n"+"PROMO 2"+"\n"+"Ceramica pulida 36x36"+" "+"="+" "+"$1920.75 m2."+"\n"+"PROMO 3"+"\n"+"Ceramica calacata 36x36"+" "+"="+" "+"$2575.21 m2."+"\n");

        let promocion = parseInt(prompt("Que ceramica desea?"+"\n\n"+"ingrese 1, Para promocion (1) VENECITA."+"\n"+"ingrese 2, Para promocion (2) PULIDA."+"\n"+"ingrese 3, Para promocion (3) CALACATA.").toLocaleLowerCase());

        switch (promocion) {
            case 1:
                promocion = 1250.33;
                break;
            case 2:
                promocion = 1920.75;
            break;
            case 3:
                promocion = 2575.21;
                break;
            default:
                break;
        }

        metrosCuadrados = parseFloat(prompt("ingrese la cantidad de metros cuadrados que desea")).toFixed(2);
        listaMetrosTotal = "El total de metros cuadrados que ingreso es"+" "+"="+" "+metrosCuadrados+" "+"m2.";
        listaMetrosfinal= listaMetrosTotal+"\n"+"El total de la promocion de es"+" "+"="+" "+"$"+operacionMetros2(promocion,metrosCuadrados).toFixed(2);
        alert ("La promocion aplica a pago CONTADO EFECTIVO"+"\n\n"+listaMetrosfinal);

    }else if(ventaProductos === "PEGAMENTO"){

        (alert("KLAUCOL CONTRUKOR = $4325"+" "+"//"+" KLAUCOL IMPERMEABLE = $6785"))
        
        let contrukor = 4325;
        let impermeable = 6785;

        while((!isNaN(pegamento)) || (pegamento.trim() === "")){
            pegamento= prompt("Que pegamento desea?"+"\n"+"klaucol contrukor;"+"\n"+"klaucol impermeable;"+"\n\n"+"Ingrese contrukor"+"\n"+"Ingrese Impermeable").toUpperCase();
        }
        if(pegamento === "CONTRUKOR"){

            metrosCuadrados = tiendaPegamento();
            alert("La cantidad de pegamento que necesita para esta cantidad de"+" "+metrosCuadrados+" "+"m2"+" "+"es"+" "+"="+ operacionCalculoPegamento(metrosCuadrados)+" "+"bolsas.")
            alert("El precio total de la promocion en relacion a sus metros cuadrados es"+" "+"="+" "+"$"+(operacionCalculoPegamento(metrosCuadrados)*contrukor));

        }else if(pegamento === "IMPERMEABLE"){
            metrosCuadrados = tiendaPegamento();
            alert("La cantidad de pegamento que necesita para esta cantidad de"+" "+metrosCuadrados+" "+"m2"+" "+"es"+" "+"="+ operacionCalculoPegamento(metrosCuadrados).toFixed(1)+" "+"bolsas.")
            alert("El precio total de la promocion en relacion a sus metros cuadrados es"+" "+"="+" "+"$"+(operacionCalculoPegamento(metrosCuadrados)*impermeable)).toFixed(1);
        }else{
            alert("Ingreso mal los datos")
        }
    }else{
        alert("ERROR!"+" "+"No ha ingresado un dato valido!!!");
    }
}else{
    alert("ERROR!"+" "+"No ha ingresado un dato valido!!!")
}



  





    
   
    





