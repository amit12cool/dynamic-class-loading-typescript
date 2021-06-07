export interface Animal {
  bark?: () => void;
  getBreed: () => string;
  meow?: () => void;
  move: (distance: string) => void;
}
