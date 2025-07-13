**Summary:**
A simple, responsive employee directory built using frontend technologies. This app allows users to view, add, edit, delete, and search employee details. All data is stored locally in the system, so no backend or database is required.
**Project Structure Overview**
employee-directory/
├── public/                  # Static files (favicon, etc.)
├── src/                     # Application source code
│   ├── assets/              # Static assets (e.g., images, icons)
│   ├── components/          # Reusable React components
│   │   ├── Context.jsx      # Context API setup for global state management
│   │   ├── Editemp.jsx      # Component to edit employee details
│   │   ├── Empcard.jsx      # Component to display individual employee cards
│   │   ├── Empform.jsx      # Component to add a new employee
│   │   └── Header.jsx       # Header component (navigation/title)
│   ├── App.jsx              # Main application layout and routing
│   ├── App.css              # App-level styling
│   ├── index.css            # Global CSS styles
│   └── main.jsx             # React entry point, mounts App component
├── index.html               # Entry HTML file for Vite
├── package.json             # Project metadata and dependencies
├── vite.config.js           # Vite configuration file
├── .gitignore               # Files and folders ignored by Git
├── eslint.config.js         # Linting rules (optional)
├── README.md                # Project documentation


**Clone the Repository**

git clone https://github.com/your-username/Employee-Directory.git
cd employee-directory
Run the App
using a framework React (e.g., with create-react-app):
npm install
npm start

**Challenges Faced**
State Management: Managing app state only on the frontend while keeping Local Storage in sync posed some complexity.
Form Handling: Creating reusable forms for both adding and editing employees required careful handling of controlled inputs.
Better Validation: Add form validation and error messages to ensure data integrity.
Sorting: Useful for directories with large employee lists.
Responsive Design: Further polish mobile responsiveness for smaller screens.
