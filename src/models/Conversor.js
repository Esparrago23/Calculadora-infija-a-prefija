import { pilaOperadores } from "../dependecies.mjs";
import { pilaSalida } from "../dependecies.mjs";
import { pila } from "../dependecies.mjs";


export class Conversor{
    valPrecedencia(operador){
        if(operador =="+"|| operador == "-")
            return 1;
        else if(operador =="*"|| operador == "/")
            return 2;
        else if(operador =="^"|| operador == "$"){
            return 3;
        }
        return 0;
    }


    conversorPrefija(expresion){
        let element ="";
       let operandos = "";
       let cont = 0;
       let final = "";
       
       console.log(!final.empty)
       while (cont <=expresion.length-1) {
        if (expresion[cont]=="*"||expresion[cont]=="/"||expresion[cont]=="+"||expresion[cont]=="-"||expresion[cont]=="^"||expresion[cont]=="$"||expresion[cont]==")") {
            if(!operandos.empty) {
                pila.push(operandos);
                operandos="";
            }
            pila.push(expresion[cont])
        }
        else if(expresion[cont]!="*"||expresion[cont]!="/"||expresion[cont]!="+"||expresion[cont]!="-"||expresion[cont]!="^"||expresion[cont]!="$"){
            if (expresion[cont]=="(") {
                pila.push(expresion[cont])
            }
            else if(cont==expresion.length-1){
                if(!operandos.empty){
                    final+=operandos + expresion[cont]
                    pila.push(final)
                }else{
                    pila.push(expresion[cont])
                }
            }else{
                operandos +=expresion[cont]
            }
        }
        cont = cont +1;
       }
       
       
       for(let i=expresion.length-1;i>=0;i--){
        element=expresion.charAt(i)
       
        if(isNaN(element)==false){
            pilaSalida.push(element)
        }
        if(element==")"){
            pilaOperadores.push(element)
        }
        if(element=="("){
            while (!pilaOperadores.isEmpty()&& pilaOperadores.peek() !=")") {
                pilaSalida.push(pilaOperadores.pop())
            }
            pilaOperadores.pop()
        }
        if(element=="*"||element=="/"||element=="+"||element=="-"||element=="^"||element=="$"){
            while(!pilaOperadores.isEmpty() && this.valPrecedencia(pilaOperadores.peek())>this.valPrecedencia(element)){
                pilaSalida.push(pilaOperadores.pop())
            }
            pilaOperadores.push(element)

        }
       }
       
    while(!pilaOperadores.isEmpty()){
        pilaSalida.push(pilaOperadores.pop())
    }
    let Out="";
    do{
        Out+= pilaSalida.pop()
    }
    while (!pilaSalida.isEmpty());
    
    return Out;
        
    }   
}
