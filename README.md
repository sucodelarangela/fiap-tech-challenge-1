# Project: FIAP Tech Challenge - Financial Manager

## Description

This project was developed as part of the technical challenge for the FIAP Tech Challenge. The goal is to create a web application for financial management using **Next.js**, **TailwindCSS**, and **Object-Oriented Programming (OOP)** concepts. The interface is designed to allow users to manage financial transactions intuitively and efficiently.

## Features

- **Home Page**: Displays the current account balance and a statement of recent transactions, with an option to start a new transaction.
- **Transaction List**: Shows all transactions made, with options to view details, edit, and delete.
- **Add New Transaction**: Form to add transactions with fields such as type, amount, and date.
- **Edit Transaction**: Ability to modify existing transactions.

## Folder Structure

```
app/
components/
hooks/
models/
services/
utils/
```

## Technologies Used

- **Next.js** (v15.1.4)
- **React** (v19.0.0)
- **TailwindCSS** (v3.4.1)
- **Storybook** (v8.5.0)
- **Jest** and **Testing Library** for testing
- **TypeScript** (v5)
- **React Icons**

## Installation and Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

1. Clone the repository:
   ```bash
   git clone <REPOSITORY_URL>
   cd fiap-tech-challenge-1
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. Start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

6. To view the Storybook:
   ```bash
   npm run storybook
   ```
7. To run tests:
   ```bash
   npm run test
   ```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run start`: Starts the server in production mode.
- `npm run lint`: Runs the linter to check for code issues.
- `npm run storybook`: Starts the Storybook for component documentation.
- `npm run build-storybook`: Builds the Storybook.
- `npm run test`: Runs unit tests with Jest.
- `npm run test:watch`: Runs tests in "watch" mode.

## Author

Developed by **Angela Caldas**, **Guilherme** e **Paula Freitas**.

## Contribution

Feel free to open issues and pull requests for improvements.

## License

This project is licensed under the MIT license.
