import { Animal } from './animal';

export class Cat implements Animal {

  private breed: string;

  constructor(breed: string) {
    this.breed = breed;
  }

  public getBreed(): string {
    return this.breed;
  }

  public move(distance: string): void {
    console.log(`Distance moved by ${this.breed} is ${distance}`);
  }

  public meow(): void {
    console.log(`${this.breed} does meow`);
  }
}
