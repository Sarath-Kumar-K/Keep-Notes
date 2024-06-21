# Note Keeper Application

## Overview
The Note Keeper Application is a web-based tool for creating, editing, deleting, and searching notes. This application uses React for the frontend and Node.js/Express for the backend, providing a seamless and interactive user experience for note management.

## Features
- Create new notes with titles and content.
- Edit existing notes.
- Delete notes.
- Search notes by title or content.
- Pagination for browsing notes.
- Pin important notes to keep them at the top.
- Responsive design for mobile and desktop usage.

## Technologies Used
- **Frontend:** React, React Router, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other:** Fetch API for client-server communication

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sarath-Kumar-K/Keep-Notes.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd keep-notes
   ```
3. **Install backend dependencies:**
   ```bash
   npm install
   ```
4. **Install frontend dependencies:**
   ```bash
   cd client/
   npm install
   ```

### Setup Environment Variables
- Create a .env file in the app root directory and add the following environment variables:
  ```bash
  PORT=3000
  MONGO_URI=your_mongodb_connection_string
  ```

### Running the Application

1. **Start the backend server:**
   ```bash
   npm run dev
   ```
2. **Start the frontend development server:**
   ```bash
   cd client/
   npm run dev
   ```
3. **Open the application in your browser:**
   ```bash
   http://localhost:5173
   ```


## Usage

### Creating a Note
- Click on the "Take a note..." input field to expand it.
- Enter the title and content of the note.
- Click on the "Save" button to save the note.

### Editing a Note
- Click on an existing note to open the Edit Modal.
- Modify the title and/or content of the note.
- Click on the "Save" button to update the note.

### Deleting a Note
- Click on the trash icon in the note item to delete the note.

### Searching Notes
- Enter a search term in the search input field.
- The list of notes will filter to show only those matching the search term.

### Pagination
- Navigate through pages using the pagination buttons at the bottom of the notes list.


## Project Structure
   ```bash
   note-keeper/
├── api/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
├── README.md
└── package.json
```
## Contributing
- Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's style guidelines and includes appropriate tests.

## Contact
- For any questions or inquiries, please contact sarathkrishnan2332@gmail.com.
   

