export function greet(name: string, callback?: (message: string) => void) {
  callback?.(`Hello! ${name}`);
}
