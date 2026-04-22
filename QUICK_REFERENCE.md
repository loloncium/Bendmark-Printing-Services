# BendMark Website - Quick Reference Guide

## 📁 PROJECT STRUCTURE

```
Bendmark/
│
├── 📄 index.html                     # Main Homepage
├── 📄 contact.php                    # Contact form backend (PHP)
├── 📄 robots.txt                     # Search engine crawl instructions
├── 📄 sitemap.xml                    # XML sitemap for SEO
├── 📄 .htaccess                      # Apache server configuration
├── 📄 web.config                     # IIS server configuration
├── 📄 README.md                      # Project documentation
├── 📄 SETUP_CHECKLIST.txt           # Setup configuration checklist
│
├── 📁 css/
│   └── styles.css                    # Main stylesheet (responsive & optimized)
│
├── 📁 js/
│   ├── carousel.js                   # Image carousel & menu toggle
│   └── forms.js                      # Contact form handler
│
├── 📁 pages/                         # Service detail pages
│   ├── 3d-signs.html                # 3D Signs service page
│   ├── road-signs.html              # Road Signs service page
│   ├── construction-signs.html       # Construction Signs service page
│   ├── posters.html                 # Posters service page
│   ├── fliers.html                  # Fliers service page
│   ├── documents.html               # Documents service page
│   ├── business-cards.html          # Business Cards service page
│   ├── custom-printing.html         # Custom Printing service page
│   └── banners.html                 # Banners & Signage service page
│
└── 📁 images/                        # Image assets (add your images here)
    ├── logo.png                      # Company logo
    ├── carousel-1.jpg               # Carousel images
    ├── carousel-2.jpg
    └── ...
```

## 🎨 COLORS & THEME

- **Primary Color**: `#7CDCD4` (Cyan/Turquoise)
- **Secondary Color**: `#0415DC` (Dark Blue)
- **Text Color**: `#333333` (Dark Gray)
- **Light Background**: `#f8f9fa` (Off-White)
- **Dark Background**: `#1a1a1a` (Dark Gray)

**CSS Variables** (in `styles.css:27-35`):
```css
--primary-color: #7CDCD4;
--secondary-color: #0415DC;
```

## 🔧 KEY CUSTOMIZATION POINTS

### 1. Contact Information
- **File**: `index.html` + all service pages
- **Phone**: Search for "(123) 456-7890"
- **Email**: Search for "info@bendmark.com"
- **Address**: Search for "123 Print Street"

### 2. Google Services
- **AdSense**: Line 27 in `index.html`
  ```html
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"></script>
  ```
- **Analytics**: Line 32 in `index.html`
  ```html
  gtag('config', 'GA_MEASUREMENT_ID');
  ```
- **Map Embed**: Line ~355 in `index.html`

### 3. Social Media Links
- **File**: `index.html` lines ~435-439
- Links: Facebook, Twitter/X, Instagram, LinkedIn, YouTube

### 4. Logo & Images
- **Logo**: Header in `index.html` (currently text-based)
- **Carousel Images**: 9 placeholder slides in `index.html` (lines ~163-246)
- **Service Card Images**: Emoji placeholders (customize in pages)

### 5. Pricing Tables
- **Location**: `/pages/*.html` - each service page
- **Find**: Search for "Pricing Guide" or `.pricing-table`

## 📱 RESPONSIVE BREAKPOINTS

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ⚙️ JAVASCRIPT FUNCTIONS

### Carousel (carousel.js)
```javascript
new Carousel()  // Initializes carousel with auto-advance
```
- Auto-advance: 6 seconds
- Navigation: Next/Prev buttons, dot indicators
- Touch-friendly: Yes

### Mobile Menu (carousel.js)
```javascript
initMobileMenu()  // Toggles menu on mobile
```
- Toggle button class: `.nav-toggle`
- Menu class: `nav.active`

### Forms (forms.js)
```javascript
new FormHandler()  // Handles contact form submissions
```
- Form ID: `contactForm`
- Validation: Built-in
- SPAM Detection: Built-in

## 📊 SEO FEATURES

✅ **Implemented**:
- [ ] Responsive mobile design
- [ ] Meta descriptions on all pages
- [ ] Open Graph tags for social sharing
- [ ] XML sitemap.xml
- [ ] robots.txt file
- [ ] Semantic HTML5
- [ ] Fast load times
- [ ] Schema.org ready
- [ ] Canonical URLs
- [ ] Alt attributes on images

⏳ **For you to add**:
- [ ] Actual company images
- [ ] Google Analytics tracking
- [ ] Google AdSense integration
- [ ] Google Search Console verification
- [ ] Local business schema markup
- [ ] Structured data markup

## 🔐 SECURITY FEATURES

- X-Content-Type-Options header (prevent MIME sniffing)
- X-XSS-Protection header (XSS protection)
- X-Frame-Options header (clickjacking protection)
- Referrer-Policy header
- HTTPS ready (add SSL certificate)
- GZIP compression (configured)
- Browser caching (configured)

## 🚀 PERFORMANCE OPTIMIZATION

**Already Configured**:
- ✅ CSS minification-ready
- ✅ GZIP compression (.htaccess)
- ✅ Browser caching (.htaccess)
- ✅ Image lazy loading ready
- ✅ Fast carousel load time

**To Do**:
- [ ] Compress images < 100KB each
- [ ] Use WebP format for images
- [ ] Minimize JavaScript
- [ ] Minify CSS for production
- [ ] Set up CDN for images
- [ ] Enable HTTP/2 on server

## 📞 CONTACT FORM INTEGRATION

### Current State
- Quote buttons show alert with contact info
- No backend integration yet

### To Enable Email Submission:

**Option A: Formspree (Easiest)**
1. Sign up at https://formspree.io/
2. Create new form
3. Get form ID (e.g., `f/ABC123`)
4. Un comment lines in `js/forms.js`
5. Update form ID

**Option B: Your Server (PHP)**
1. Upload `contact.php` to server
2. Update form action in HTML files
3. Configure PHP mail settings
4. Test with test@example.com

**Option C: Netlify Forms (If using Netlify)**
1. Deploy to Netlify
2. Enable form notifications
3. Forms auto-capture on submission

## 📝 PAGE STRUCTURE

### Homepage (index.html)
1. Header with navigation
2. Image carousel (9 slides)
3. Services grid (9 cards)
4. CTA section
5. Location & map
6. Social media links
7. Footer

### Service Pages (pages/*.html)
1. Header with navigation
2. Service hero section
3. Features & benefits sidebar
4. Production timeline sidebar
5. Pricing table
6. Additional details sections
7. Ad container
8. Call-to-action button
9. Footer

## 🔗 IMPORTANT LINKS TO UPDATE

1. **Domain Name**
   - sitemap.xml (all URLs)
   - .htaccess (if using clean URLs)
   - index.html meta tags

2. **Google Services**
   - AdSense publisher ID
   - Analytics measurement ID
   - Maps embed code

3. **Social Media**
   - Facebook page URL
   - Twitter/X profile URL
   - Instagram profile URL
   - LinkedIn company page
   - YouTube channel URL

4. **Contact Information**
   - Phone number (search all files)
   - Email address (search all files)
   - Physical address
   - Business hours

## 🧪 TESTING CHECKLIST

### Functionality
- [ ] All links work
- [ ] Carousel advances automatically
- [ ] Carousel controls work (prev/next/dots)
- [ ] Mobile menu toggles
- [ ] Quote buttons work
- [ ] Map embed loads
- [ ] Forms validate input
- [ ] Social links open in new tabs

### Responsive
- [ ] Desktop view (1920px+)
- [ ] Tablet view (768px)
- [ ] Mobile view (480px)
- [ ] Mobile landscape
- [ ] Touch buttons (48px min)

### Performance
- [ ] PageSpeed Insights > 80
- [ ] GTmetrix Grade A
- [ ] Load time < 3 seconds
- [ ] Mobile load time < 2 seconds

### SEO
- [ ] Google Search Console indexed
- [ ] Sitemap submitted
- [ ] robots.txt accessible
- [ ] Meta descriptions present
- [ ] No broken links
- [ ] Schema.org markup valid

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] iOS Safari (latest)
- [ ] Chrome Mobile (latest)

## 💡 CUSTOMIZATION EXAMPLES

### Change Button Color
```css
/* In styles.css */
.service-btn {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  /* Change --primary-color and --secondary-color values */
}
```

### Add New Service
1. Create new HTML file in `/pages/`
2. Copy content from existing service page
3. Update title, description, pricing
4. Add card in services grid in `index.html`
5. Link to new page

### Change Carousel Timing
```javascript
// In carousel.js, line ~56
this.slideInterval = setInterval(() => {
  this.showSlide(this.currentSlide + 1);
}, 6000);  // 6000ms = 6 seconds (change this number)
```

## 📚 HELPFUL RESOURCES

- [Google Search Console](https://search.google.com/search-console/)
- [Google Analytics](https://analytics.google.com/)
- [Google AdSense](https://www.google.com/adsense/)
- [Formspree](https://formspree.io/)
- [TinyPNG](https://tinypng.com/) - Image optimization
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [Can I Use](https://caniuse.com/) - Browser compatibility

## 🆘 TROUBLESHOOTING

### Carousel not working
- Check `js/carousel.js` is loaded
- Verify JavaScript errors in console
- Ensure HTML structure matches

### Images not showing
- Check file paths in HTML
- Verify images exist in `/images/` folder
- Check file permissions (644)

### Mobile menu stuck
- Clear browser cache
- Check `.nav-toggle` button visibility
- Verify `nav` class toggle logic

### Form not submitting
- Verify `contact.php` is uploaded (if using PHP)
- Check form fields have correct `name` attributes
- Verify email configuration on server

---

## 📞 Support
- Email: info@bendmark.com
- Phone: (123) 456-7890
- Website: https://bendmark.com

---

**Last Updated**: April 2024  
**Version**: 1.0  
**Maintained By**: BendMark Printing Services
