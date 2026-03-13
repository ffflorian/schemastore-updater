import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    environment: 'node',
    globals: true,
    include: ['tests/**/*.test.ts'],
    mockReset: true,
    restoreMocks: true,
  },
});
