
import { convert } from "./dependecies.mjs";

const bin = document.getElementById("Bin")
bin.addEventListener("click", function(){
    let Num = document.getElementById("num").value
    

    const pOut = document.getElementById("out")
    pOut.innerText =convert.conversorPrefija(Num)


   
   
})