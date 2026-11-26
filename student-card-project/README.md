# Student Card Studio

A responsive React student ID card generator built with Vite.

## Features
- Student information form
- Live student card preview
- Upload a student photo
- Reset the form to sample details
- Print the student card
- Responsive layout for desktop and mobile

## Requirements
- Node.js (LTS version recommended)
- Visual Studio Code

## Run in VS Code

1. Extract `student-card-project.zip`.
2. Open the extracted `student-card-project` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Install the project packages:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Customize
- In `src/App.jsx`, replace `YOUR INSTITUTION` with your college name.
- Edit the sample values in the `initial` object to show your preferred default student details.
- The uploaded photo is used only for the current browser preview; this starter project does not save student data to a database.

## Create a production build

```bash
npm run build
```

The optimized website will be created in the `dist` folder.
