import { CPU } from "./comp-dep";


export class Computer{
 cpu : CPU
    constructor(cpu : CPU){
this.cpu=cpu
    }

    // turnOn(){
    //       cpu = 0  
    // }
}


let cpu = new CPU()//here this is dependency
let pc = new Computer(cpu)  //here the(CPU) is injection.

let o : CPU = { ghz : 50 , Processing:()=>34}//shapes are equal

cpu.ghz = 78