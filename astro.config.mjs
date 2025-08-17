// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://devopsmanaus.github.io/', // se for user.github.io use apenas 'https://<USER>.github.io/'
    base: '/',
    output: 'static'
});
