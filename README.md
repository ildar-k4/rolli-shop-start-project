Sushi and Rolls Store Website

Overview

This is the source code for an adaptive e-commerce website for a sushi and rolls delivery service. The website features a product catalog, a shopping cart, and an order form, designed to provide a seamless user experience for ordering food online.

Getting Started

To run the website locally, follow these steps:

Locate the Entry Point:
Find the index.html file in the project root directory. This is the main entry point for the website.

Run the Website:
Install the Live Server extension in your code editor (e.g., Visual Studio Code).
Right-click on index.html and select "Open with Live Server" to launch the website in your default browser.
Alternatively, use any local server solution (e.g., npm install -g live-server and run live-server in the project directory).

Project Structure
index.html: The main HTML file for the website.
css/main.css: Custom CSS stylesheet for styling the website.
libs/bootstrap/css/bootstrap.min.css: Bootstrap CSS framework for responsive design.
js/: Directory containing JavaScript files for functionality:
renderProducts.js: Renders the product catalog.
calcCartPriceAndDelivery.js: Calculates cart total and delivery costs.
toggleCartStatus.js: Manages cart visibility and status.
counter.js: Handles product quantity counters.
cart.js: Manages cart functionality.
img/: Directory containing images, including the logo (img/logo/logo.svg).

Dependencies
Bootstrap: The website uses Bootstrap for responsive layout and styling. The CSS is included via libs/bootstrap/css/bootstrap.min.css.
Google Fonts: The Merriweather font is loaded via a CDN for typography (https://fonts.googleapis.com/css?family=Merriweather:300,400,400i,700&subset=cyrillic-ext).
No additional JavaScript libraries are required; all scripts are custom-built.

Features
Responsive Design: Adapts to various screen sizes using Bootstrap's grid system.
Product Catalog: Dynamically rendered products (via renderProducts.js).
Shopping Cart: Displays cart contents, calculates total price, and includes delivery cost logic (free delivery for orders over 600 ₽).
Order Form: Allows users to submit their phone number to place an order.

Notes
Ensure all linked assets (CSS, JavaScript, and images) are in their respective directories as referenced in index.html.
The website uses Russian language (lang="ru") and currency (₽).
For development, verify that the products-container div is populated correctly by renderProducts.js.
The order form requires a valid phone number for submission; additional validation may need to be implemented depending on requirements.
