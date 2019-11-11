

class Car{

}

class Bmw extends Car{

}

let cr : Car = new Car()


interface GpsListener {
    locate()
}

class Device implements GpsListener{
    locate(){

    }

}

let dv = new Device()
dv.locate()

// let dv