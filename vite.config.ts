import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    federation({
      name: "smart40",
      exposes: {
        ".": "./src/ModuleBridge.tsx"
      },
      filename: "remoteEntry.js",
      dts:false
    })
  ],
  preview: { port: 5000, strictPort: true, cors: true },
})
