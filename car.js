
class Car {
    constructor(brand,speed){
        this.brand = brand
        this.speed = speed
       
    }

    accelerate (vitesse) {
        this.speed = this.speed + vitesse
        
    }

    brake (frein) {
        this.speed = this.speed - frein 
    
    }

    describe (){
        console.log (`${this.brand} running at ${this.speed}`)
    }


}

let ford= new Car("ford",10)
console.log(ford)

ford.accelerate(50)
console.log(ford)

ford.brake(25)
console.log(ford)

ford.describe()


