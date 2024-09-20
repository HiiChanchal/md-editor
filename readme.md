## Text Editor with Live Preview

### Overview
This is a simple **Markdown Text Editor** with real-time HTML preview built using **React** for the frontend and **Node.js** for the backend. The frontend is deployed on **GitHub Pages**, and the backend API is hosted on **Render**.

### Features
- Write Markdown on the left pane and see the live HTML preview on the right.
- Uses **Node.js** for backend Markdown-to-HTML conversion.
- The backend API might automatically shut down after inactivity due to the free hosting service on Render. If you experience network errors, please wait 2-3 minutes for the API to restart.

---

### Project Links

- **Frontend (Deployed on GitHub Pages)**: [https://hiichanchal.github.io/md-texteditor-front-end](https://hiichanchal.github.io/md-texteditor-front-end)
- **Backend (Deployed on Render)**: [https://md-editor-zv0e.onrender.com](https://md-editor-zv0e.onrender.com)

---

### Running the Project Locally

#### Prerequisites
Before running the project locally, ensure you have the following installed on your machine:
- **Node.js** (v14+)
- **npm** (v6+)
- **Git** (to clone the repository)

#### Steps to Run Locally

1. **Clone the Repository**

   For the **Frontend**:
   ```bash
   git clone https://github.com/hiichanchal/md-texteditor-front-end.git
   ```

   For the **Backend**:
   ```bash
   git clone https://github.com/hiichanchal/md-texteditor-backend.git
   ```

2. **Install Dependencies**

   Navigate to the cloned directories and run:
   ```bash
   cd md-texteditor-front-end
   npm install
   ```

   Similarly, for the backend:
   ```bash
   cd md-texteditor-backend
   npm install
   ```

3. **Running the Frontend**

   In the `md-texteditor-front-end` directory, run the following command to start the frontend in development mode:
   ```bash
   npm start
   ```

   This will start the React app on `http://localhost:3000`.

4. **Running the Backend**

   In the `md-texteditor-backend` directory, run the following command to start the backend server:
   ```bash
   npm start
   ```

   This will start the backend API on `http://localhost:5000`.

---

### API Information

- **Backend URL**: [https://md-editor-zv0e.onrender.com](https://md-editor-zv0e.onrender.com)
- The API handles the Markdown-to-HTML conversion.

> **Note**: The API might take 2-3 minutes to wake up if not in use due to the free hosting service on Render. Please be patient during this time.

---

### Message for NeoKred

> This project demonstrates my ability to create a fully functional **Markdown Editor** with real-time preview using modern web technologies like **React** and **Node.js**. The UI is deployed on GitHub Pages, and the backend API is hosted on Render, showcasing my experience in deploying applications across different platforms.
> 
> I'm excited about the opportunity to contribute my skills and collaborate on innovative projects at your company. I look forward to discussing how I can contribute to your team!

---

### Tech Stack
- **Frontend**: React, Axios
- **Backend**: Node.js, Express, Marked (for Markdown conversion)
- **Deployment**: GitHub Pages (Frontend), Render (Backend)

---

### Contact
Feel free to reach out to me via [LinkedIn](https://www.linkedin.com/in/chanchal-kumar-chandan-865051195/) if you have any questions or suggestions!
