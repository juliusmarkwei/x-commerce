# X-Commerce Application

Welcome to the **X-Commerce Application** repository! This project is an ongoing development effort to build a modern and scalable eCommerce web application using the latest technologies. If you find this project interesting or useful, consider giving it a star on GitHub! ⭐

## Project Overview

The **X-Commerce Application** is a full-featured eCommerce platform built with **Next.js**, **Redux**, **Redux-Persist**, **React Hooks**, **SCSS**, and **BEM methodology** for structured styling. The goal of this project is to create a high-performance online shopping experience with a responsive and user-friendly design.

This application includes essential eCommerce functionalities such as product listings, a shopping cart, user authentication, and a streamlined checkout process. The design is based on a free **Adobe XD eCommerce UI kit** provided by **ICEO**.

## Technologies Used

The project leverages the following technologies:

- **Next.js** - A React-based framework for server-side rendering (SSR) and static site generation (SSG).
- **Redux & Redux-Persist** - For efficient state management and data persistence.
- **React Hooks** - To manage component logic in a functional approach.
- **SCSS & BEM (Block Element Modifier)** - For modular, maintainable, and reusable styling.
- **Mock Data API** - The backend functionality is currently simulated using static mock data stored in the `utils/data` directory.

## Getting Started

To set up and run the application on your local machine, follow these simple steps:

### 1. Clone the Repository

Open a terminal and execute the following command to clone the repository:

```bash
  git clone https://github.com/juliusmarkwei/x-commerce.git
  cd x-commerce/
```

### 2. Install Dependencies

Ensure you have **Node.js** and **Yarn** installed, then install the required dependencies:

```bash
  yarn install
```

### 3. Start the Development Server

Run the following command to start the local development server:

```bash
  yarn dev
```

Once the server is running, open your browser and navigate to:

```
  http://localhost:3000
```

You should now see the application up and running!

## Application Features

The X-Commerce Application provides the following core functionalities:

- **Homepage (`/`)** – Displays featured products and promotional content.
- **Product Listing Page (`/products`)** – Shows a grid of available products.
- **Product Detail Page (`/product/:id`)** – Displays in-depth information about a selected product.
- **Shopping Cart (`/cart`)** – Allows users to manage selected products before checkout.
- **User Authentication** – Login (`/login`) and Registration (`/register`) pages for account management.
- **404 Error Page (`/page-not-found`)** – A custom-designed error page for handling incorrect URLs.
- **Checkout Process** – A structured order placement and checkout experience (future development).

## Backend Information

At the moment, the application does not use a fully developed backend. Instead, it relies on mock data stored in the `utils/data` directory. Next.js API routes (`/api`) handle API-like interactions, making it easier to integrate a real backend in the future.

## Design & UI/UX

The UI design of this project is based on a free **Adobe XD eCommerce UI kit** by **ICEO**. You can check out the original UI kit here:
[ICEO eCommerce UI Kit](https://www.xdguru.com/free-xd-ecommerce-ui-kit-by-iceo/)

## Screenshots

Below are some screenshots showcasing the application's UI:

![X-Commerce Screenshot](https://lucaspulliese.com/wp-content/uploads/2020/09/ecommerce-1.jpg)

![X-Commerce Screenshot](https://lucaspulliese.com/wp-content/uploads/2020/09/ecommerce-2.jpg)

## Project Structure

The repository follows a well-organized structure to ensure scalability and maintainability:

```
├── LICENSE
├── README.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── featured-1.jpg
│   │   ├── featured-2.jpg
│   │   ├── featured-3.jpg
│   │   ├── icons/
│   │   │   └── gmail.svg
│   │   ├── logo.svg
│   │   ├── products/
│   │   │   ├── product-1.jpg
│   │   │   ├── product-2.jpg
│   │   │   ├── product-3.jpg
│   │   └── subscribe.jpg
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.scss
│   │   │   ├── partials/
│   │   │   │   ├── variables.scss
│   │   ├── icons/
│   ├── components/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── product-item/
│   │   ├── product-single/
│   │   ├── shopping-cart/
│   ├── layouts/
│   │   ├── 404.tsx
│   │   ├── Main.tsx
│   ├── pages/
│   │   ├── 404.tsx
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │   ├── products.tsx
│   │   ├── product/
│   │   │   ├── [pid].tsx
│   │   ├── cart/
│   │   │   ├── checkout.tsx
│   ├── store/
│   │   ├── reducers/
│   │   │   ├── cart.ts
│   │   │   ├── user.ts
│   ├── utils/
│   │   ├── data/
│   │   │   ├── products.ts
│   │   │   ├── products-colors.ts
│   │   │   ├── products-sizes.ts
│   │   ├── services.ts
│   ├── tsconfig.json
│   └── yarn.lock
```

## Future Enhancements

The following features are planned for future updates:

- **Full Backend Integration** – Connecting to a real database and authentication system.
- **Product Search & Filtering** – Implementing advanced search and filtering options.
- **User Profiles & Order History** – Allowing users to manage their orders and preferences.
- **Wishlist Functionality** – Enabling users to save products for later.
- **Payment Gateway Integration** – Adding secure payment processing with Stripe, PayPal, etc.

## Contributions

Contributions are welcome! If you would like to improve the project, feel free to fork the repository, make changes, and submit a pull request.

## License

This project is open-source and licensed under the **MIT License**.

---

Thank you for checking out **X-Commerce Application**! If you have any feedback or suggestions, feel free to reach out. Happy coding! 🚀
