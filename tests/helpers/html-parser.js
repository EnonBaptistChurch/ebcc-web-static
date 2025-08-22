import { load } from 'cheerio'

export class HTMLParser {
  static extractSEOData(html) {
    const $ = load(html)
    
    return {
      title: $('title').text() || '',
      metaDescription: this.getMetaContent($, 'description'),
      ogTitle: this.getMetaContent($, 'og:title', 'property'),
      ogDescription: this.getMetaContent($, 'og:description', 'property'),
      ogType: this.getMetaContent($, 'og:type', 'property'),
      ogImage: this.getMetaContent($, 'og:image', 'property'),
      twitterCard: this.getMetaContent($, 'twitter:card'),
      twitterTitle: this.getMetaContent($, 'twitter:title'),
      twitterDescription: this.getMetaContent($, 'twitter:description'),
      canonical: $('link[rel="canonical"]').attr('href'),
      robots: this.getMetaContent($, 'robots'),
      viewport: this.getMetaContent($, 'viewport'),
      charset: $('meta[charset]').attr('charset'),
    }
  }

  static getMetaContent($, name, attr = 'name') {
    return $(`meta[${attr}="${name}"]`).attr('content') || ''
  }

  static validateStructuredData(html) {
    const $ = load(html)
    const jsonLdScripts = $('script[type="application/ld+json"]')
    const structuredData = []
    
    jsonLdScripts.each((i, el) => {
      try {
        const data = JSON.parse($(el).html())
        structuredData.push(data)
      } catch (error) {
        structuredData.push({ error: 'Invalid JSON-LD', content: $(el).html() })
      }
    })
    
    return structuredData
  }
}