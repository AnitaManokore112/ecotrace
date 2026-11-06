import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub provides owner/repository in Actions. User/organization sites use /.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = repository && !repository.toLowerCase().endsWith('.github.io')
  ? `/${repository}/` : '/';
export default defineConfig({ plugins: [react(), tailwindcss()], base });
