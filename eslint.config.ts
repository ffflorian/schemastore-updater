import config from '@ffflorian/eslint-config';
import {Config, defineConfig, globalIgnores} from 'eslint/config';

export default defineConfig([config as Config, globalIgnores(['schemas/**', 'temp/**'])]);
