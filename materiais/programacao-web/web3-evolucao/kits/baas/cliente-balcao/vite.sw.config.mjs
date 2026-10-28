import { defineConfig } from "vite";
export default defineConfig({publicDir:false,build:{outDir:"../public",emptyOutDir:false,minify:false,lib:{entry:"src/mensageria-sw.js",formats:["iife"],name:"CafeAvisos",fileName:()=>"firebase-messaging-sw.js"}}});
