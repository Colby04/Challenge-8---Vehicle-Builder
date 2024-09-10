// Assuming Vehicle and AbleToTow are defined elsewhere in your codebase
import Vehicle from './Vehicle.js';
import AbleToTow from "../interfaces/AbleToTow.js";
import Wheel from './Wheel.js';
import Car from './Car.js';
import Motorbike from './Motorbike.js';

// The Truck class should extend the Vehicle class and should implement the AbleToTow interface
export default class Truck extends Vehicle implements AbleToTow {
  vin: string 
  color: string
  make: string
  model: string
  year: number
  weight: number
  topSpeed: number
  wheels: Wheel[]
  towingCapacity: number

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
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

  tow(vehicleToTow: Truck | Car | Motorbike): void {
    console.log(`Towing with capacity: ${this.towingCapacity}`);
  }
}