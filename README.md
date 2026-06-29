# Ground

Ground is a premium footwear landing page inspired by editorial ecommerce layouts. It uses large type, smooth scrolling, hover-reveal shop panels, product cards, and motion effects for a polished brand experience.

## Features

- Responsive hero with oversized typography
- Fixed navigation with animated menu overlay
- Hover-expanding shop panels on collection cards
- Four Ground footwear product cards with generated product images
- Smooth scrolling and scroll-triggered reveal animations
- Custom cursor interaction on product cards

## Project Structure

```text
.
|-- index.html
|-- style.css
|-- script.js
`-- assets/
    |-- fonts/
    |-- images/
    |   |-- logo/
    |   `-- product_img/
    `-- video/
```

## Run Locally

Open `index.html` directly in a browser, or run a local static server from the project root:

```powershell
python -m http.server 5500
```

Then visit:

```text
http://127.0.0.1:5500
```

## Main Files

- `index.html` contains the page structure and Ground brand content.
- `style.css` contains layout, typography, responsive styles, and hover panels.
- `script.js` initializes Locomotive Scroll, GSAP animations, menu behavior, and cursor interactions.

## Generated Assets

The four product-card images were AI-generated for Ground and saved under:

```text
assets/images/product_img/
```

Current generated product assets:

- `ground-essential-sneaker.png`
- `ground-performance-runner.png`
- `ground-formal-derby.png`
- `ground-trail-boot.png`
