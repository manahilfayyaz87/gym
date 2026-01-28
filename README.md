# IRON FORGE - Premium Gym Website

A responsive, modern gym website built with Flask, HTML, CSS, and JavaScript. Features a dark theme with neon accents, smooth animations, and a complete user experience for a fitness facility.

## 🎯 Features

- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Dark Gym Theme**: Modern dark aesthetic with neon cyan, pink, and green accents
- **Smooth Animations**: CSS transitions and JavaScript-powered interactions
- **Multi-page Website**: Home, About, and Membership pages with dynamic routing
- **Membership Pricing**: Three flexible membership plans with detailed comparison
- **Trainer Profiles**: Detailed information about expert trainers
- **Testimonials**: Member reviews and success stories
- **FAQ Section**: Comprehensive answers to common questions
- **SEO Optimized**: Semantic HTML and proper meta tags

## 💻 Tech Stack

- **Backend**: Python Flask
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Templating**: Jinja2
- **Design**: Responsive CSS Grid & Flexbox

## 📁 Project Structure

```
/home/site/wwwroot/
├── app.py                    # Flask application & route handlers
├── README.md                 # Project documentation
├── requirements.txt          # Python dependencies
│
├── templates/                # HTML Templates (Jinja2)
│   ├── base.html            # Base template with navbar & footer
│   ├── home.html            # Home page with hero & sections
│   ├── about.html           # About Us page
│   └── membership.html       # Membership & pricing page
│
└── static/                   # Static assets
    ├── css/
    │   └── style.css        # All CSS styling
    ├── js/
    │   └── script.js        # JavaScript functionality
    └── images/              # Image assets (optional)
```

## 🚀 Setup Instructions

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Installation Steps

1. **Clone or Download the Project**
   ```bash
   cd gym-website
   ```

2. **Create a Virtual Environment**
   ```bash
   # On Windows
   python -m venv venv
   venv\Scripts\activate

   # On macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```
   Or install Flask directly:
   ```bash
   pip install flask
   ```

4. **Run the Flask App**
   ```bash
   python app.py
   ```

5. **Open in Browser**
   - Navigate to `http://localhost:5000`
   - The app will be running with auto-reload enabled

### Creating requirements.txt
If you don't have a requirements.txt file, create one with:
```
Flask==2.3.3
Werkzeug==2.3.7
```

## 📄 Pages Overview

### Home Page (`/`)
- **Hero Section**: Eye-catching headline "Train Hard. Stay Strong."
- **Why Choose Us**: 6 feature cards highlighting gym advantages
- **Programs Section**: 4 fitness programs (Strength, Cardio, Yoga, CrossFit)
- **Trainer Profiles**: Meet 4 expert trainers
- **Testimonials**: 4 member success stories
- **Call-to-Action**: Prominent membership buttons

### About Us Page (`/about`)
- **Company Story**: History and founding mission
- **Mission & Vision**: Core business goals
- **Core Values**: 6 fundamental values (Excellence, Integrity, Community, etc.)
- **Detailed Trainer Profiles**: Full trainer bios and certifications
- **Impact Stats**: Key metrics (members, experience, satisfaction rate)

### Membership Page (`/membership`)
- **Three Pricing Plans**:
  - **Basic** ($19/month): Off-peak access, cardio & machines
  - **Standard** ($49/month): 24/7 access, all equipment, 2 training sessions
  - **Premium** ($99/month): Full access, 8 training sessions, meal plans
- **Comparison Table**: Detailed feature comparison
- **FAQ Section**: 8 common questions answered
- **Contact Information**: Location, phone, email, hours

## 🎨 Design Details

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Neon Cyan | `#00d9ff` | Primary buttons, highlights, borders |
| Neon Pink | `#ff006e` | Secondary accents, hover states |
| Neon Green | `#00ff41` | Success states, checkmarks |
| Dark Background | `#0a0e27` | Main background |
| Dark Card | `#1a1f3a` | Card backgrounds |
| Text Primary | `#ffffff` | Main text |
| Text Secondary | `#b0b5c0` | Supporting text |

### Typography
- **Headings**: Arial (Bold, 700 weight)
- **Body**: Segoe UI, Tahoma, Geneva (Regular, 400-500 weight)
- **Line Height**: 1.4-1.6 for optimal readability

### Responsive Breakpoints
- **Desktop**: Full layout with 3-4 column grids
- **Tablet** (768px): 2 column grids, adjusted sizing
- **Mobile** (480px): Single column, optimized spacing

## 🔧 Customization Guide

### Changing Colors
Edit the CSS variables at the top of `/static/css/style.css`:
```css
:root {
    --primary: #00d9ff;        /* Change primary color */
    --secondary: #ff006e;      /* Change secondary color */
    --accent: #00ff41;         /* Change accent color */
    /* ... more colors ... */
}
```

### Modifying Pricing Plans
Edit the pricing cards in `/templates/membership.html`:
- Adjust `<span class="amount">` for price
- Update `<span class="period">` for billing period
- Add/remove `<li>` items in `.plan-features`

### Updating Trainer Information
Edit the trainer cards in `/templates/home.html` and `/templates/about.html`:
- Change trainer names and specialties
- Update certifications and bio text
- Modify the trainer-avatar emoji

### Adding Images
Place images in `/static/images/` and reference them:
```html
<img src="{{ url_for('static', filename='images/filename.jpg') }}" alt="Description">
```

## ✨ Features Explained

### Responsive Navigation
- Sticky navbar with logo and menu links
- Hamburger menu for mobile devices (JavaScript-powered)
- Active page indicator with underline animation

### Animations & Interactions
- Smooth hover effects on buttons and cards
- Fade-in animations using Intersection Observer
- Scroll-to-top button that appears after scrolling
- FAQ toggle functionality (click to expand/collapse)

### Semantic HTML
- Proper use of `<main>`, `<section>`, `<nav>`, `<footer>`
- Meaningful heading hierarchy
- ARIA attributes for accessibility

### Performance
- Minimal JavaScript (vanilla, no frameworks)
- CSS Grid and Flexbox for optimal layouts
- Lazy loading ready for images
- Fast page load time

## 📱 Mobile Optimization

The website is fully responsive:
- **Touch-friendly buttons** (50px minimum size)
- **Readable text** (16px minimum on mobile)
- **Simplified navigation** (hamburger menu)
- **Single-column layouts** (stacked on small screens)
- **Optimized images** (use appropriate sizing)

## 🔄 Deployment

### Deploying to Heroku
1. Create `Procfile`:
   ```
   web: gunicorn app:app
   ```

2. Install gunicorn:
   ```bash
   pip install gunicorn
   ```

3. Update `requirements.txt`:
   ```bash
   pip freeze > requirements.txt
   ```

4. Deploy to Heroku:
   ```bash
   heroku login
   heroku create your-app-name
   git push heroku main
   ```

### Deploying to PythonAnywhere
1. Upload files to PythonAnywhere
2. Create a new web app with Flask
3. Configure the WSGI file to point to `app.py`
4. Reload the web app

## 🚀 Future Improvements

- [ ] **Database Integration**: Add user accounts, save member preferences
- [ ] **Email Notifications**: Send membership confirmations and updates
- [ ] **Payment Integration**: Stripe/PayPal for online membership signup
- [ ] **Admin Dashboard**: Manage members, trainers, and content
- [ ] **Blog Section**: Fitness tips, workout guides, nutrition advice
- [ ] **Class Scheduling**: Book fitness classes online
- [ ] **Member Portal**: Track workouts, progress, achievements
- [ ] **Photo Gallery**: Showcase gym facilities and member transformations
- [ ] **Contact Form**: Backend email handling for inquiries
- [ ] **Social Media Integration**: Connect Instagram, Facebook, YouTube
- [ ] **Multi-language Support**: Internationalization (i18n)
- [ ] **Dark/Light Mode Toggle**: User preference setting
- [ ] **Testimonial Form**: Allow members to submit reviews
- [ ] **Event Calendar**: Upcoming gym events and promotions

## 📝 Additional Notes

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Best Practices Used
- ✅ Semantic HTML structure
- ✅ Mobile-first responsive design
- ✅ Performance-optimized CSS
- ✅ Vanilla JavaScript (no unnecessary dependencies)
- ✅ Consistent naming conventions
- ✅ Clean code with comments
- ✅ Accessible form elements
- ✅ SEO-friendly structure

### Performance Tips
- Images are lazy-loaded on modern browsers
- CSS is minifiable for production
- JavaScript is vanilla (no framework overhead)
- Static assets are cacheable
- Optimized for fast initial load

## 🎓 Learning Resources

- [Flask Documentation](https://flask.palletsprojects.com/)
- [Jinja2 Template Engine](https://jinja.palletsprojects.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 📄 License

This project is open source and available for educational and personal use.

## 🤝 Support

For issues or questions:
1. Check the Future Improvements section for planned features
2. Review the code comments for implementation details
3. Test in different browsers for compatibility
4. Check console for any JavaScript errors

## 👨‍💻 Author Notes

This is a portfolio-ready project that demonstrates:
- Full-stack web development skills
- Responsive design expertise
- Modern CSS techniques
- Python backend development
- User experience design
- Clean code practices

Perfect for showcasing in a portfolio or as a foundation for a real gym website!

---

**Version**: 1.0  
**Last Updated**: 2024  
**Status**: Production Ready
