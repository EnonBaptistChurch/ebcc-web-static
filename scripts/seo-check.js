export async function runSEOCheck() {
  try {
    const { execSync } = await import('child_process')
    
    console.log('🔍 Running SEO meta tag validation...\n')
    
    const result = execSync('npm run test:seo', { 
      encoding: 'utf8',
      stdio: 'pipe' 
    })
    
    console.log(result)
    console.log('✅ All SEO checks passed!')
    
    return true
  } catch (error) {
    console.error('❌ SEO validation failed:')
    console.error(error.stdout || error.message)
    process.exit(1)
  }
}