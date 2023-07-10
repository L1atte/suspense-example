function sleep<T = unknown>(value: T, delay?: number): Promise<T> {
  delay = delay ?? 1000;
  return new Promise<T>(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

export { sleep };
