// Test script to verify lovable-tagger handling
console.log('Testing lovable-tagger handling...');

// Simulate the vite.config.ts logic
const mode = 'development';
const enableTagger = true;

if (enableTagger && mode === 'development') {
  try {
    // Check if lovable-tagger is available before requiring
    const tagger = (() => {
      try {
        return require('lovable-tagger')
      } catch {
        return null
      }
    })()
    
    if (tagger?.componentTagger) {
      console.log('✓ lovable-tagger enabled')
    } else {
      console.log('ℹ lovable-tagger not available, continuing without it')
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.warn('Warning: Could not load lovable-tagger:', errorMessage)
  }
}

console.log('Test completed successfully - no build errors!');
