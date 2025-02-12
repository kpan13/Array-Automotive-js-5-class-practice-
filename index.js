class Vehicle {
    constructor(make, model, year, color, millage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.millage = millage;
    }

    start() {
        if (this.fuel > 0){
            return this.started = true;
            console.log("engine started");

        } else {
            return this.started = false;
            console.log("engin cannot start");  
        }
    }
    accelerate(){
        if (this.started){
            if (this.fuel > 0){
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel");
                this.stop();
            }
        }else {
            alert("you need to start the engine first");
            
        }  
    }

    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this.model + " " + this.make + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel");
                this.stop();
            }
        } else {
            alert("you need to start the engine first");
        }
    }

    stop() {
        this.started = false;
    }

    drive() {
        this.accelerate();
    }

    brake() {
        this.decelerate();
    }

    autoPark() {
        // Implementation for autoPark
    }

    autoDrive() {
        // Implementation for autoDrive
    }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a car");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a motorcycle");
        } else {
            console.log(this.model + " " + this.make + " is a vehicle");
        }
    }

    accelerate() {
        // Implementation for accelerate
    }
}