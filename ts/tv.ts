import { Remote } from "./remote";


export class TV{

  private  remote : Remote

    constructor(){
        this.remote=new Remote()
    }
}

let tv = new TV()

//tv.remote.turnOn() //It gives u error bcoz now remote is declare as a private(access modifier).