// tests/helpers/route-scanner.js - Fixed for Windows paths
import path from 'path'
import { glob } from 'glob'

export class RouteScanner {
  static async getAllRoutes(pagesDir = 'pages') {
    try {
      const fullPagesDir = path.join(process.cwd(), pagesDir)
      const files = await glob('**/*.{vue,js,ts}', { cwd: fullPagesDir })
      
      const routes = files
        .filter(file => !this.isIgnoredFile(file))
        .map(file => this.fileToRoute(file))
        .filter(route => route !== null)
        .sort()

      return [...new Set(routes)] // Remove duplicates
    } catch (error) {
      console.warn('Could not scan pages directory:', error.message)
      return ['/'] // Fallback to home page
    }
  }

  static isIgnoredFile(file) {
    const ignoredPatterns = [
      /^_/, // Files starting with underscore
      /\[\.\.\./, // Catch-all routes
      /\.d\.ts$/, // TypeScript declaration files
      /\.test\.(js|ts|vue)$/, // Test files
      /\.spec\.(js|ts|vue)$/, // Spec files
    ]
    
    return ignoredPatterns.some(pattern => pattern.test(file))
  }

  static fileToRoute(file) {
    // CRITICAL FIX: Convert Windows backslashes to forward slashes
    const normalizedFile = file.replace(/\\/g, '/')
    
    let route = '/' + normalizedFile
      .replace(/\.(vue|js|ts)$/, '')
      .replace(/\/index$/, '')
      .replace(/\[([^\]]+)\]/g, (match, param) => {
        // Handle dynamic routes
        if (param.startsWith('...')) return null // Skip catch-all
        return 'test-param' // Replace with test value
      })
    
    // Ensure we always return a clean route with forward slashes
    route = route.replace(/\\/g, '/')
    
    return route === '/' ? '/' : route
  }

  static async getRoutesByPriority() {
    const allRoutes = await this.getAllRoutes()
    
    // Prioritize important pages - using forward slashes
    const priority = {
      high: ['/', '/contact-us', '/find-us', '/sermons'],
      medium: [
        '/whats-on', '/whats-on/bible-study', '/whats-on/children', 
        '/whats-on/first-steps', '/whats-on/mens-meetings', 
        '/whats-on/online-prayer-meeting', '/whats-on/sunday-evening', 
        '/whats-on/sunday-morning', '/whats-on/sunday-prayer', 
        '/whats-on/sunday-services', '/whats-on/womens-meetings', 
        '/whats-on/youth', '/about', '/about/church-history',
        '/about/pastors-message', '/about/what-we-believe',
        '/testimonies', '/what-is-a-christian', 
        '/what-is-a-christian/becoming-a-christian',
        '/what-is-a-christian/stop-trying-and-start-trusting',
        '\\\\'
      ],
      low: [] // Everything else
    }
    
    const categorized = {
      high: allRoutes.filter(r => priority.high.includes(r)),
      medium: allRoutes.filter(r => priority.medium.includes(r)),
      low: allRoutes.filter(r => !priority.high.includes(r) && !priority.medium.includes(r))
    }
    
    return categorized
  }
}
