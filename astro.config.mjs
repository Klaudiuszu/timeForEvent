import { defineConfig } from 'astro/config';
import i18n from 'astro-i18n';

export default defineConfig({
    i18n: {
        locales: ["pl", "en"],
        defaultLocale: "en",
    },
    routing: {
        prefixDefaultLocale: true
    },
    vite: {
        plugins: [tailwindcss()],
    },
})