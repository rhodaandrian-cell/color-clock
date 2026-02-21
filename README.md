# Color Clock (React + Vite)

A dynamic and colorful digital clock built using **React**, **Vite**, and **date-fns**.

This application displays the current date and time in a readable format and updates automatically every second.

---

## 🚀 Features

- Displays the current **date and time**
- Updates dynamically every second using React state
- Uses **date-fns (v2.30.0)** for date formatting
- Styled with custom CSS including colors beyond black and white
- Built using Vite for fast development

---

## 🛠 Technologies Used

- React
- Vite
- JavaScript
- date-fns (v2.30.0)
- CSS

---

## 📦 Project Setup (From Scratch)

Create the project using Vite:

    npm create vite@latest color-clock

When prompted:
- Select React
- Select JavaScript

Navigate into the project folder:

    cd color-clock

Install dependencies:

    npm install

Install required date formatting package:

    npm install date-fns@2.30.0

---

## ▶ Running the Application

Start the development server:

    npm run dev

Open the local development URL shown in the terminal (usually):

    http://localhost:5173/

The clock should display the current date and time and update automatically every second.

---

## 📂 Project Structure

    color-clock/
    │
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    │
    ├── package.json
    ├── vite.config.js
    └── README.md

---

## 📸 Screenshot

Add a screenshot of the running application in the project root directory:

    screenshot.png

Then display it below:

![Color Clock Screenshot](./screenshot.png)

---

## Implementation Details

- The application uses React’s `useState` and `useEffect` to update the time every second.
- The `format()` function from date-fns formats the date and time into a readable string.
- CSS styling includes additional colors and layout enhancements to create a visually appealing design.
- The project follows standard React structure and best practices for maintainability.

---

## Author

Rhoda