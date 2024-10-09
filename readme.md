# Meme Generator (My First Website)

## Description
This website is a meme generator that allows users to create, search, and share memes easily. It provides a fun and interactive way to generate memes from popular templates, enhancing user engagement through user authorization and personalization features.

## Features
1. **Responsive Design:** The website is fully responsive and works seamlessly on various devices.
2. **User Authorization:** Users can sign up and log in using their credentials to save their generated memes.
3. **Meme Generation:** Users can generate memes using predefined templates.
4. **Logout Functionality:** Users can log out of their accounts when they are done.

## Technologies Used
1. **Frontend:**
   - HTML5
   - CSS (Bootstrap)
   - JavaScript (React)
2. **Backend:**
   - Express.js
   - MySQL

## User Instructions
- If the local server is running, users can sign in or sign up using their username and password. The frontend will use the local API.
- If the local server is not running, the default username is `"guest"` and the password is `"guest"`, and the frontend will use the remote API at `https://api.imgflip.com/get_memes`.
- After authentication, users can search for memes and generate their own memes.

## Contact
- Email: [arshadshmim786@gmail.com](mailto:arshadshmim786@gmail.com)
- LinkedIn: [www.linkedin.com/in/ar83had-shamim](https://www.linkedin.com/in/ar83had-shamim)

## Acknowledgments
### Frontend
1. **React-Toasify:** For notification alerts.
2. **React-Router-Dom:** For navigation and URL query string management.
3. **React-Draggable:** For drag-and-drop functionality.
4. **Axios:** For communicating with the API.
5. **Bootstrap:** Integrated via `import "bootstrap/dist/css/bootstrap.css"` and `import "bootstrap/dist/js/bootstrap.bundle"` for Bootstrap 5 styling.

### Backend
1. **Express:** For creating the server.
2. **CORS:** To enable Cross-Origin Resource Sharing for the API.
3. **Express-JWT:** For decoding JWT tokens.
4. **MySQL2/Promise:** For database interactions.
5. **JsonWebToken:** For encoding tokens for secure authentication.

