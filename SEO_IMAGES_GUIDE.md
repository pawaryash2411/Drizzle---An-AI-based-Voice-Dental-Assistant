# SEO Images Guide for Drizzle AI Voice Dental Assistant

This guide outlines the SEO images you need to create and add to your website for optimal search engine optimization and social media sharing.

## Required Images

### 1. Open Graph Image (og-image.jpg)
- **Location**: `/public/og-image.jpg`
- **Dimensions**: 1200 x 630 pixels (recommended)
- **Format**: JPG or PNG
- **Purpose**: Displayed when your website is shared on Facebook, LinkedIn, and other social platforms
- **Content Suggestions**:
  - Include "Drizzle AI Voice Dental Assistant" text
  - Show AI/dental technology imagery
  - Use your brand colors
  - Keep text readable and prominent
  - Include a tagline like "AI-Powered Dental Care"

### 2. Twitter Card Image (twitter-image.jpg)
- **Location**: `/public/twitter-image.jpg`
- **Dimensions**: 1200 x 600 pixels (recommended for summary_large_image)
- **Format**: JPG or PNG
- **Purpose**: Displayed when your website is shared on Twitter/X
- **Content Suggestions**:
  - Similar to OG image but optimized for Twitter
  - Ensure important text is in the center (Twitter may crop edges)
  - Include your logo and key messaging

### 3. Favicon
- **Location**: `/app/favicon.ico` (already exists, but you may want to update it)
- **Dimensions**: 32 x 32 pixels (minimum), 16 x 16 to 512 x 512 for various devices
- **Format**: ICO, PNG, or SVG
- **Purpose**: Browser tab icon and bookmarks

### 4. Apple Touch Icon (Optional but Recommended)
- **Location**: `/public/apple-touch-icon.png`
- **Dimensions**: 180 x 180 pixels
- **Format**: PNG
- **Purpose**: Icon when users add your site to iOS home screen

### 5. Logo (for structured data)
- **Location**: `/public/logo.png`
- **Dimensions**: At least 112 x 112 pixels
- **Format**: PNG with transparent background (recommended)
- **Purpose**: Used in structured data for search engines

## Image Optimization Tips

1. **File Size**: Keep images under 1MB for faster loading
2. **Alt Text**: All images should have descriptive alt text (already implemented in code)
3. **Compression**: Use tools like TinyPNG or ImageOptim to compress images
4. **Responsive**: Consider creating multiple sizes for different devices
5. **Branding**: Ensure all images reflect your brand identity

## Tools for Creating SEO Images

- **Canva**: Easy-to-use design tool with OG image templates
- **Figma**: Professional design tool
- **Adobe Photoshop/Illustrator**: For advanced design work
- **Online OG Image Generators**: Search for "OG image generator" for quick solutions

## Testing Your Images

After adding images, test them using:
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
- **Google Rich Results Test**: https://search.google.com/test/rich-results

## Current Implementation

The metadata in `app/layout.tsx` is already configured to use these images:
- Open Graph image: `/og-image.jpg`
- Twitter image: `/twitter-image.jpg`
- Logo: `/logo.png` (for structured data)

Simply add the images to the `/public` folder with these exact names, and they will be automatically used.

## Additional SEO Files Created

### Sitemap
- **Location**: `app/sitemap.ts`
- **Purpose**: Automatically generates `/sitemap.xml` for search engines
- **Status**: ✅ Created and configured
- **Note**: Update the `baseUrl` with your actual domain

### Robots.txt
- **Location**: `public/robots.txt`
- **Purpose**: Tells search engines which pages to crawl
- **Status**: ✅ Created and configured
- **Note**: Update the sitemap URL with your actual domain

### Web App Manifest
- **Location**: `app/manifest.ts`
- **Purpose**: Makes your site installable as a PWA and improves mobile experience
- **Status**: ✅ Created and configured

## Next Steps

1. Create or commission the images listed above
2. Optimize them for web (compress, resize)
3. Add them to the `/public` folder
4. Test using the tools mentioned above
5. Update the URLs in `app/layout.tsx` if you use different file names
6. Update `NEXT_PUBLIC_SITE_URL` environment variable with your actual domain
7. Test your sitemap at `https://yourdomain.com/sitemap.xml`
8. Submit your sitemap to Google Search Console and Bing Webmaster Tools

## Additional SEO Image Recommendations

- **Screenshot**: Add a screenshot of your application for structured data (already referenced in code)
- **Feature Images**: Consider adding specific images for key features
- **Team Photos**: If applicable, add team photos with proper alt text
- **Product Images**: High-quality images of your AI dental assistant interface

