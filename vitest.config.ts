// noinspection ES6PreferShortImport

import { defineConfig } from 'vitest/config';
export default defineConfig({
	test: {
		environment: 'jsdom',
		globals: true,
		include: ['test/**/*.{test,spec}.{ts,mts,cts}']
	}
});
