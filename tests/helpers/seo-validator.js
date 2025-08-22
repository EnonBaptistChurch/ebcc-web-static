export class SEOValidator {
  static titleRules = {
    minLength: 10,
    maxLength: 60,
    shouldNotEndWith: [' | ', ' - '],
    shouldNotStartWith: ['Home', 'Welcome'],
    required: true
  }

  static descriptionRules = {
    minLength: 50,
    maxLength: 160,
    shouldIncludeKeywords: true,
    shouldBeUnique: true,
    required: true
  }

  static validateTitle(title, route) {
    const errors = []
    
    if (!title || title.trim().length === 0) {
      errors.push('Title is required')
      return errors
    }

    if (title.length < this.titleRules.minLength) {
      errors.push(`Title too short: ${title.length} chars (min: ${this.titleRules.minLength})`)
    }

    if (title.length > this.titleRules.maxLength) {
      errors.push(`Title too long: ${title.length} chars (max: ${this.titleRules.maxLength})`)
    }

    // Check for generic titles
    const genericTitles = ['Home', 'Welcome', 'Page', 'Default']
    if (genericTitles.some(generic => title.toLowerCase().includes(generic.toLowerCase()))) {
      errors.push('Title appears to be generic - consider making it more specific')
    }

    // Check for proper capitalization
    if (title !== title.charAt(0).toUpperCase() + title.slice(1)) {
      errors.push('Title should start with a capital letter')
    }

    return errors
  }

  static validateDescription(description, route) {
    const errors = []
    
    if (!description || description.trim().length === 0) {
      errors.push('Meta description is required')
      return errors
    }

    if (description.length < this.descriptionRules.minLength) {
      errors.push(`Description too short: ${description.length} chars (min: ${this.descriptionRules.minLength})`)
    }

    if (description.length > this.descriptionRules.maxLength) {
      errors.push(`Description too long: ${description.length} chars (max: ${this.descriptionRules.maxLength})`)
    }

    // Check for duplicate content
    const words = description.toLowerCase().split(' ')
    const uniqueWords = [...new Set(words)]
    if (uniqueWords.length < words.length * 0.8) {
      errors.push('Description has too many repeated words')
    }

    return errors
  }

  static generateReport(results) {
    const passed = results.filter(r => r.success).length
    const failed = results.filter(r => !r.success).length
    
    return {
      summary: {
        total: results.length,
        passed,
        failed,
        passRate: Math.round((passed / results.length) * 100)
      },
      details: results,
      recommendations: this.generateRecommendations(results)
    }
  }

  static generateRecommendations(results) {
    const recommendations = []
    const failed = results.filter(r => !r.success)
    
    if (failed.length === 0) return ['All pages have proper SEO meta tags! 🎉']

    // Common issues
    const titleIssues = failed.filter(r => r.titleErrors?.length > 0).length
    const descIssues = failed.filter(r => r.descErrors?.length > 0).length
    
    if (titleIssues > 0) {
      recommendations.push(`${titleIssues} pages need title improvements`)
    }
    
    if (descIssues > 0) {
      recommendations.push(`${descIssues} pages need description improvements`)
    }

    // Specific recommendations
    if (titleIssues > results.length * 0.5) {
      recommendations.push('Consider creating a title template in nuxt.config.js')
    }

    if (descIssues > results.length * 0.5) {
      recommendations.push('Consider using useSeoMeta() composable in your pages')
    }

    return recommendations
  }
}