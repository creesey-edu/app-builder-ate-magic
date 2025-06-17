/*
 * -----------------------------------------------------------------------------
 * Project: TAGS
 * Module: WebApp Frontend
 * Phase: Production Build
 * File: vite.config.ts
 * Tags: ["vite", "react", "config", "build"]
 * Updated: 16 June 2025 16:10 (EST)
 * Version: v0.0.6
 * Author: Chad Reesey
 * Email: contact@thenagrygamershow.com
 * Description: Vite configuration for TAGS WebApp frontend. Includes build
 *              environment toggle for component tagging, resolved by mode.
 * -----------------------------------------------------------------------------
 */

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const enableTagger =
    env.VITE_ENABLE_TAGGER === 'true' ||
    (mode === 'development' && env.VITE_ENABLE_TAGGER !== 'false')

  const plugins = [react()]

  if (enableTagger && mode !== 'production') {
    const { componentTagger } = require('lovable-tagger') // <--- ✅ dynamic require
    plugins.push(componentTagger())
  }

  return {
    server: {
      host: '::',
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
