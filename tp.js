function tipoFigura(nro,largo){
    varCadena="";
    switch(nro) {
        case 0:
          varCadena="Circulo";
          break;
        case 3:
          varCadena= "Triangulo";
          break;
        case 4:
            varCadena= "Cuadrado";
            break;
        case 5:
            varCadena= "Pentagono";
            break;
        case 6:
            varCadena= "Hexagono";
            break;
        default:
            if (nro<0){
                varCadena= "menor a cero";
            }else if (nro>6){
                varCadena= "Poligono";    
            }
            else{
                varCadena= "";
            }
            break;
          // code block
      } 
console.log("Se a seleccionado un: "+varCadena+" y su perimetro es: "+fperimetro(nro,largo));//console.log(perimetro(nro,largo));
}


function fperimetro(nro,largo){
    if(nro==0){
    varPer=2*Math.PI*largo;
    return varPer;
    }
    else if(nro>0 && nro!=2){
        let varPer=0;
        for(let i=0;i<nro;i++){
            varPer=varPer+largo;
        }
        return varPer;
    }
}


// primer valor es la figura, segundo valor es el largo de un lado
tipoFigura(0,20);