import { Animal } from './animal';
import { Cat } from './cat';
import { Dog } from './dog';

const animalTypes = {
  cat: Cat,
  dog: Dog
};

class Example {
  public getAnimal(animalName: string): new (breed: string) => Animal {
    return animalTypes[animalName.toLowerCase()] as new (breed: string) => Animal;
  }
}

const example = new Example();
const cat = new (example.getAnimal('cat'))('persian cat');
const dog = new (example.getAnimal('dog'))('bull dog');
dog.move('10 km');
cat.move('5 km');
cat.meow();
dog.bark();
