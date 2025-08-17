// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://samuel-aka-viana.github.io/', // se for user.github.io use apenas 'https://<USER>.github.io/'
    base: '/',                          // se for user.github.io use '/'
    output: 'static'
});
