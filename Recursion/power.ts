function power(base: number, exp: number): number {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}
