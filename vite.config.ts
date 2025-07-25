
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
import fs from 'fs'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const enableTagger =
    env.VITE_ENABLE_TAGGER === 'true' ||
    (mode === 'development' && env.VITE_ENABLE_TAGGER !== 'false')

  const plugins = [react()]

  // Only add lovable-tagger in development mode and when available
  if (enableTagger && mode === 'development') {
    try {
      // Check if lovable-tagger module exists in node_modules
      const taggerPath = path.join(process.cwd(), 'node_modules', 'lovable-tagger')
      
      if (fs.existsSync(taggerPath)) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          const { componentTagger } = require('lovable-tagger')
          plugins.push(componentTagger())
          console.log('✓ lovable-tagger enabled')
        } catch (loadError: unknown) {
          const errorMessage = loadError instanceof Error ? loadError.message : String(loadError)
          console.log('ℹ lovable-tagger found but failed to load:', errorMessage)
        }
      } else {
        console.log('ℹ lovable-tagger not installed, continuing without it')
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      console.log('ℹ lovable-tagger check failed:', errorMessage)
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
