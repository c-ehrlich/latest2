import { createRouter } from './context';

export const exampleRouter = createRouter().query('hello', {
  resolve() {
    const world = process.env.WORLD ?? '...not found...';
    return {
      greeting: world,
    };
  },
});
