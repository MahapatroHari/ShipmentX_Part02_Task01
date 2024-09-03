
# Front-End Developer Coding Assessment Part-02 Task-04

## Introduction

This project is part of an assessment where the objective is to build a **Personal Finance Tracker** application using **React** and **Tailwind CSS**. The application allows users to track their income and expenses, providing a summary dashboard and the ability to filter transactions by category. The UI is designed to be responsive, ensuring a clean and modern look across different devices.

## Features

- **Add Income/Expense Entries**: Users can add new transactions by specifying the amount, description, category, and whether it's an income or expense.
- **Dashboard**: A summary dashboard displays the total income, total expenses, and the remaining balance.
- **Transaction List**: A table view of all transactions with filtering options by category.
- **Responsive Design**: The application is fully responsive, ensuring usability on both desktop and mobile devices.

## Instructions to Run the Project

### Prerequisites

Before running the project, ensure you have the following installed on your system:

- **Node.js** (v12 or later)
- **npm** or **yarn**

### Setup and Running the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/MahapatroHari/ShipmentX_Part02_Task04.git
   cd ShipmentX_Part02_Task04
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

   or if you're using yarn:

   ```bash
   yarn install
   ```

3. **Start the Development Server**

   ```bash
   npm start
   ```

   or with yarn:

   ```bash
   yarn start
   ```

4. **View the Application**

   Open your browser and navigate to `http://localhost:3000` to view the application.

### Build for Production

To create a production build of the application:

```bash
npm run build
```

or with yarn:

```bash
yarn build
```

The production-ready files will be located in the `build` directory.

## Additional Notes

- The application is built with **React** for the frontend logic and **Tailwind CSS** for styling.
- **React Icons** is used to display icons for categories and types of transactions.
- The project follows a modular structure with components divided into separate files for better maintainability.
- All components are designed to be responsive, ensuring a seamless experience across different screen sizes.
- The application features basic validation to ensure that no empty tasks can be added.