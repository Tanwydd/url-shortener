# URL Shortener Project

Welcome to our URL Shortener Project! This project aims to provide a simple and efficient way to manage and shorten URLs. Whether you're tired of long, unwieldy URLs or you're looking for a convenient way to share links, our URL shortener has got you covered.

## Features

- **User Registration and Authentication**: Create an account and log in securely to manage your shortened URLs.
- **URL Management Dashboard**: Easily view and manage all your shortened URLs from a centralized dashboard.
- **URL Manipulation Features**: Create, edit, and delete your shortened URLs effortlessly.
- **Redirection Functionality**: Instantly redirect from the shortened URL to the specified target URL.
- **API Functionality**: Implement CRUD operations for the URLs via an API endpoint.

## Technologies Used

- **Backend**: Node.js with Express.js for handling server-side logic and API endpoints.
- **Database**: MariaDB for storing user data and URLs.
- **Deployment**: XAMPP for local development and potentially other deployment options.

## Getting Started

To get started with the URL Shortener Project, follow these steps:

1. **Clone the Repository**: 
   ```bash
   git clone <repository_url>

2. **Install Dependencies**:
   ```bash 
   cd url-shortener
   npm install
   
3. **Set Up Database**:

    - Ensure you have MariaDB installed and running.
    - Create a new database for the project and import the provided SQL file (url_shortener_setup.sql) to set up the required tables.

4. **Set Up Environment Variables**:

    - Rename .env.example to .env and fill in the necessary environment variables, such as database credentials and JWT secret.
  
5. **Run the Server**:
     ```bash 
   node app.js

6. **Access the Application**:
Open your web browser and navigate to http://localhost:5000 to access the URL Shortener application.

## API Endpoints

    - GET /api/urls: Retrieve all URLs.
    - GET /api/urls/ : Retrieve a specific URL by ID.
    - POST /api/urls: Create a new URL.
    - PUT /api/urls/ : Update an existing URL.
    - DELETE /api/urls/ : Delete a URL.

## License
  This project is licensed under the MIT License.
