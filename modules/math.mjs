
export const PI = 3.141592;

export function pow(base, exponencial) {
  if (exponencial === 0) {
    return 1;
  }
  return base * pow(base, exponencial - 1);
}