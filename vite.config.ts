
/*
 * -----------------------------------------------------------------------------
 * Project: TAGS
 * Module: WebApp Frontend
 * Phase: Production Build
 * File: vite.config.ts
 * Tags: ["vite", "react", "config", "build"]
 * Updated: 17 June 2025 12:00 (EST)
 * Version: v0.0.7
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

  // Only add lovable-tagger in development mode and when available
  if (enableTagger && mode === 'development') {
    try {
      const { componentTagger } = require('lovable-tagger')
      plugins.push(componentTagger())
    } catch (error) {
      console.warn('lovable-tagger not available, continuing without it')
    }
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
    define: {
      // Ensure environment variables are properly defined
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
  }
})
