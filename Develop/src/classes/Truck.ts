// Assuming Vehicle and AbleToTow are defined elsewhere in your codebase
import Vehicle from './Vehicle';
import AbleToTow from "../interfaces/AbleToTow.js";
import Wheel from './Wheel';
import Car from './Car';
import Motorbike from './Motorbike';

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
    super(vin, color, make, model, year, weight, topSpeed, wheels);
    this.towingCapacity = towingCapacity;
  }

  tow(vehicleToTow: Truck | Car | Motorbike): void {
    console.log(`Towing with capacity: ${this.towingCapacity}`);
  }
}