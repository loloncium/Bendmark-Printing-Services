# BendMark Website - Project Documentation

## Overview
This is a professional website for BendMark, a printing services company that designs and produces 3D signs, road signs, construction signs, posters, fliers, documents, business cards, and other printing services.

## Project Structure

```
Bendmark/
├── index.html                 # Main homepage
├── css/
│   └── styles.css            # Main stylesheet (responsive & SEO optimized)
├── js/
│   └── carousel.js           # Interactive carousel functionality
├── pages/
│   ├── 3d-signs.html         # 3D Signs service page
│   ├── road-signs.html       # Road Signs service page
│   ├── construction-signs.html # Construction Signs service page
│   ├── posters.html          # Posters service page
│   ├── fliers.html           # Fliers service page
│   ├── documents.html        # Documents service page
│   ├── business-cards.html   # Business Cards service page
│   ├── custom-printing.html  # Custom Printing service page
│   └── banners.html          # Banners & Signage service page
├── images/                   # Placeholder for image assets
├── sitemap.xml               # XML sitemap for search engines
├── robots.txt                # Robots file for search engine crawling
└── README.md                 # This file
```

## Features

### 1. Responsive Design
- Mobile-first approach
- Works on all devices (mobile, tablet, desktop)
- Tested breakpoints: 768px, 480px

### 2. Header & Navigation
- Logo on the left (clickable to home)
- Centered navigation menu
- Mobile hamburger menu for smaller screens
- Sticky header for easy navigation

### 3. Hero Carousel
- 9 rotating slides showcasing company work
- Auto-advance every 6 seconds
- Manual navigation with previous/next buttons
- Dot indicators for slide navigation
- Touch/click friendly controls

### 4. Services Section
- 9 service cards in responsive grid
- Hover effects with smooth animations
- Clickable cards linking to detailed service pages
- Image placeholders with gradient overlays

### 5. Service Detail Pages
- Comprehensive information for each service
- Features & benefits listed
- Production timeline details
- Pricing tables with multiple options
- Call-to-action button for quotes

### 6. Location & Map
- Contact information display
- Business hours listed
- Phone number and email with direct links
- Embedded Google Map (customize coordinates)
- Responsive two-column layout

### 7. Social Media Integration
- Five social media link placeholders
- Facebook, Twitter/X, Instagram, LinkedIn, YouTube
- Hover effects on social icons
- Ready for your actual social media URLs

### 8. SEO Optimization
- Meta tags on all pages
- Semantic HTML5 structure
- Schema.org markup ready
- Proper heading hierarchy
- Sitemap.xml for search engines
- robots.txt for crawl control
- Optimized alt attributes
- Fast loading times

### 9. Google AdSense Integration
- Ad container placeholders on homepage and all service pages
- Responsive ad sizing
- Ready to add your AdSense publisher ID
- Clearly labeled advertisement sections

### 10. Footer
- Company information
- Quick links
- Service links
- Legal links (placeholders)
- Copyright notice

## Color Scheme
- **Primary Color**: #7CDCD4 (Cyan/Turquoise)
- **Secondary Color**: #0415DC (Dark Blue)
- **Background**: #ffffff (White)
- **Dark Background**: #1a1a1a (Dark Gray)
- **Light Background**: #f8f9fa (Off-White)

## Setup Instructions

### 1. Domain Setup
Update the following with your actual domain:
- In `index.html`: Update Google Analytics tracking ID
- In `index.html`: Update Google AdSense publisher ID
- In `pages/*.html`: Update all file paths if needed
- In `sitemap.xml`: Replace `https://bendmark.com/` with your actual domain

### 2. Google Map Integration
In `index.html`, update the iframe src:
```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"></iframe>
```
Find your map embed code on [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started)

### 3. Contact Information
Update contact details in:
- `index.html`: Phone, email, address, hours
- `pages/*.html`: Footer contact information

### 4. Social Media Links
Update social media URLs in `index.html`:
- Replace Facebook, Twitter, Instagram, LinkedIn, YouTube URLs

### 5. AdSense Integration
To enable Google AdSense:
1. Sign up at [Google AdSense](https://www.google.com/adsense/)
2. Get your Publisher ID (format: ca-pub-xxxxxxxxxxxxxxxx)
3. Replace placeholder in `index.html` line with your ID
4. Uncomment the ad code in each page's ad-container div

### 6. Image Assets
- Replace placeholder images in `css/styles.css` carousel slides with actual project images
- Add company logo to `images/` folder
- Images should be optimized for web (WebP format preferred)

### 7. Analytics
Set up Google Analytics:
1. Create account at [Google Analytics](https://analytics.google.com/)
2. Replace `GA_MEASUREMENT_ID` with your actual ID in `index.html`

## Hosting & Deployment

### Using a Web Host
1. Upload all files to your web server via FTP or file manager
2. Ensure proper file permissions (644 for HTML, CSS, JS; 755 for directories)
3. Test all links and forms
4. Submit sitemap to Google Search Console

### Using GitHub Pages
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: BendMark website"
git remote add origin https://github.com/yourusername/bendmark.git
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## Performance Optimization

### Images
- Use WebP format with PNG fallbacks
- Compress images with tools like TinyPNG
- Implement lazy loading for below-the-fold images

### CSS & JavaScript
- CSS is minified in production
- Consider minifying JS for production
- Load JS at end of body

### Caching
- Set appropriate cache headers on web server
- Use browser caching for static assets
- Consider CDN for image serving

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features
- Semantic HTML structure
- Proper heading hierarchy
- Alt attributes on images
- Keyboard navigation support
- High contrast colors
- Touch-friendly buttons (min 48px)

## SEO Best Practices Implemented
✓ Mobile responsive design
✓ Meta descriptions
✓ Open Graph tags
✓ Semantic HTML5
✓ Fast page load times
✓ XML sitemap
✓ robots.txt file
✓ Keyword optimization
✓ Internal link structure
✓ Local business schema (ready to add)

## Future Enhancements
- [ ] Contact form with email integration
- [ ] Online quote calculator
- [ ] Gallery lightbox for portfolio images
- [ ] Blog section for news/updates
- [ ] FAQ accordion section
- [ ] Video integration
- [ ] Customer testimonials carousel
- [ ] Live chat support
- [ ] Mobile app
- [ ] Payment gateway integration

## Troubleshooting

### Links not working
- Verify file paths in href attributes
- Check that all HTML files are in correct directories
- Clear browser cache (Ctrl+Shift+Delete)

### Carousel not working
- Ensure `carousel.js` is properly linked
- Check browser console for JavaScript errors
- Verify no JavaScript conflicts

### Images not showing
- Check image file paths
- Ensure images exist in `/images/` folder
- Verify image file names match exactly

### Google Map not displaying
- Verify API key is valid
- Check URL format in embed code
- Ensure domain is authorized in Google Maps API

## Support & Contact
For assistance or to report issues:
- Email: info@bendmark.com
- Phone: (123) 456-7890

## License
© 2024 BendMark Printing Services. All rights reserved.

---

**Last Updated**: April 2024
**Version**: 1.0
