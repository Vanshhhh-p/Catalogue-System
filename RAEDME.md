# CampusEats Catalogue

A simple food catalogue web application built using Node.js and Express.js.

## Features

- Display all available dishes.
- Retrieve a specific dish using its ID.
- Add new dishes through an HTML form.
- REST API integration.
- Responsive and styled frontend.

## Technologies Used

- Node.js
- Express.js
- HTML
- CSS
- JavaScript
- REST API

## Project Structure

```text
catalogue/
├── public/
│   ├── index.html
│   └── style.css
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## How to Run

1. Clone the repository.
2. Open the project folder in VS Code.
3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node server.js
```

5. Open your browser:

```text
http://localhost:3000/
```

## API Endpoints

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| GET    | `/items`     | Get all dishes   |
| GET    | `/items/:id` | Get a dish by ID |
| POST   | `/items`     | Add a new dish   |

## Data Storage

The application currently uses an in-memory JavaScript array to store menu items. Data resets when the server restarts.

## Author

CampusEats Catalogue Project
