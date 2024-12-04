import '@testing-library/jest-dom';

declare module 'vitest' {
  interface JestMatchers<R> {
    toBeInTheDocument(): R;
    toHaveValue(expected: string): R;
  }
}

declare global {
  namespace Vi {
    interface JestMatchers<T> {
      toBeInTheDocument(): T;
      toHaveValue(expected: string): T;
    }
  }
}