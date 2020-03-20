
import { PI as pi, pow } from './math';

export default class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return pi * pow(this.radius, 2);
  }
}