import {defineConfig} from 'oxfmt';

import config from '@ffflorian/oxfmt-config';

export default defineConfig({
  ...config,
  ignorePatterns: ['**/dist/**', '**/node_modules/**', '**/.yarn/**'],
});
