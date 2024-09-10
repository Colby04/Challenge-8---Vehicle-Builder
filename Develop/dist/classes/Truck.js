// Assuming Vehicle and AbleToTow are defined elsewhere in your codebase
import Vehicle from './Vehicle.js';
// The Truck class should extend the Vehicle class and should implement the AbleToTow interface
export default class Truck extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        super();
        this.towingCapacity = towingCapacity;
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
    }
    tow(vehicleToTow) {
        console.log(`Towing with capacity: ${this.towingCapacity}`);
    }
}
