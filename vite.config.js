import { defineConfig } from 'vite';
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";
export default defineConfig({
    css: { postcss: './postcss.config.js' },
    // plugins: [
    //     pluginPurgeCss(),
    // ],
});
