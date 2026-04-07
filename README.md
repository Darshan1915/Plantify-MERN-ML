# 🚀 Plantify

<div align="center">

![Plantify Logo](https://img.shields.io/badge/Plantify-AI--Powered-green?style=for-the-badge&logo=plantuml) <!-- TODO: Add an actual project logo relevant to plants/AI -->

[![GitHub stars](https://img.shields.io/github/stars/Darshan1915/Plantify-MERN-ML?style=for-the-badge)](https://github.com/Darshan1915/Plantify-MERN-ML/stargazers)

[![GitHub forks](https://img.shields.io/github/forks/Darshan1915/Plantify-MERN-ML?style=for-the-badge)](https://github.com/Darshan1915/Plantify-MERN-ML/network)

[![GitHub issues](https://img.shields.io/github/issues/Darshan1915/Plantify-MERN-ML?style=for-the-badge)](https://github.com/Darshan1915/Plantify-MERN-ML/issues)

[![GitHub license](https://img.shields.io/github/license/Darshan1915/Plantify-MERN-ML?style=for-the-badge)](LICENSE) <!-- TODO: Add LICENSE file -->

**AI-powered agri-tech platform designed to address limited digital access and lack of intelligent decision support for farmers.**

[Live Demo](https://plantify-mern-ml-1.vercel.app/) | [Documentation](<!-- TODO: Add link to dedicated documentation if available -->)

</div>

## 📖 Overview

Plantify is an innovative, AI-powered agri-tech platform that integrates a full-stack marketplace with real-time communication capabilities and a sophisticated Machine Learning (ML) microservice. Designed to empower farmers, Plantify tackles crucial challenges such as limited digital access and the absence of intelligent decision support.

The platform leverages deep learning models for accurate crop recommendation and disease detection, aiming to improve agricultural productivity and enhance market access for farmers. Built on the MERN (MongoDB, Express.js, React, Node.js) stack, it provides a robust and scalable solution for modern agriculture.

## ✨ Features

-   🎯 **AI-Powered Crop Recommendation:** Utilizes deep learning models to suggest optimal crops based on various environmental factors.
-   🌱 **Intelligent Disease Detection:** Advanced image processing with deep learning for early and accurate identification of plant diseases.
-   🛍️ **Full-Stack Marketplace:** A comprehensive platform for farmers to buy and sell agricultural products directly.
-   💬 **Real-time Communication:** Integrated chat functionality for seamless interaction between buyers and sellers.
-   🔐 **User Authentication & Authorization:** Secure login, registration, and role-based access for farmers, buyers, and sellers.
-   📈 **Product Management:** Tools for sellers to list, update, and manage their agricultural products.
-   ⚙️ **Scalable Architecture:** Built with a modular MERN stack and an independent ML microservice for robust performance.
-   📱 **Responsive User Interface:** A modern and intuitive design accessible across various devices.

## 🖥️ Screenshots

<!-- TODO: Add actual screenshots of the Plantify application showcasing its key features (e.g., marketplace, crop recommendation, disease detection, chat). -->

![Screenshot 1 - Homepage](https://via.placeholder.com/800x450?text=Plantify+Homepage)

![Screenshot 2 - Marketplace](https://via.placeholder.com/800x450?text=Plantify+Marketplace)

![Screenshot 3 - Disease Detection Interface](https://via.placeholder.com/800x450?text=Plantify+Disease+Detection)

![Screenshot 4 - Mobile View](https://via.placeholder.com/400x700?text=Plantify+Mobile)

## 🛠️ Tech Stack

**Frontend:**

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) <!-- TODO: Verify Tailwind CSS usage in Frontend -->

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**Backend:**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

[![Mongoose](https://img.shields.io/badge/Mongoose-800000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)

[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)

[![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)

**Machine Learning Microservice:**

[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)

[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/)

[![Keras](https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white)](https://keras.io/)

[![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/) <!-- TODO: Verify if Flask or FastAPI is used for ML service -->

**DevOps & Deployment:**

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://docs.github.com/en/actions)

## 🚀 Quick Start

Follow these steps to get Plantify up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

-   **Node.js**: `v18.x` or higher (recommended)
-   **npm** or **Yarn**: For package management
-   **MongoDB**: Local instance or a cloud-hosted service (e.g., MongoDB Atlas)
-   **Python**: `v3.8` or higher (for the ML microservice)
-   **pip**: Python package installer

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/Darshan1915/Plantify-MERN-ML.git
    cd Plantify-MERN-ML
    ```

2.  **Setup Frontend**

    ```bash
    cd Frontend
    npm install # or yarn install
    ```

3.  **Setup Backend**

    ```bash
    cd ../Backend
    npm install # or yarn install
    ```

4.  **Setup ML Microservice** (located inside `Backend/ml_service` - *path assumed, adjust if different*)

    ```bash
    cd Backend/ml_service
    pip install -r requirements.txt
    ```

5.  **Environment Configuration**

    Each part of the application (Frontend, Backend, ML Microservice) requires its own environment variables.

    *   **Frontend**:
        Create a `.env` file in the `Frontend/` directory:
        ```bash
        cp Frontend/.env.example Frontend/.env
        # Open Frontend/.env and configure:
        VITE_APP_API_URL=http://localhost:5000/api # URL of your backend API
        ```

    *   **Backend**:
        Create a `.env` file in the `Backend/` directory:
        ```bash
        cp Backend/.env.example Backend/.env
        # Open Backend/.env and configure:
        PORT=5000
        MONGO_URI=mongodb://localhost:27017/plantify # Your MongoDB connection string
        JWT_SECRET=your_jwt_secret_key # A strong, unique secret key
        ML_SERVICE_URL=http://localhost:8000 # URL of your ML microservice
        # Add other environment variables as specified in Backend/.env.example
        ```
    *   **ML Microservice**:
        Create a `.env` file in the `Backend/ml_service/` directory:
        ```bash
        cp Backend/ml_service/.env.example Backend/ml_service/.env
        # Open Backend/ml_service/.env and configure:
        FLASK_RUN_PORT=8000 # Or FastAPI port if applicable
        # Add any other ML specific environment variables
        ```

6.  **Database Setup**

    Ensure your MongoDB instance is running. The Backend will connect to it using the `MONGO_URI` provided in `Backend/.env`. No specific migration commands are usually needed for Mongoose; schemas are applied on connect.

### Running the Application

1.  **Start ML Microservice**
    From the `Backend/ml_service/` directory:
    ```bash
    python app.py # Or flask run, uvicorn app:app --port 8000
    ```

2.  **Start Backend Server**
    From the `Backend/` directory:
    ```bash
    npm run dev # Or npm start
    ```
    The backend server will typically run on `http://localhost:5000`.

3.  **Start Frontend Development Server**
    From the `Frontend/` directory:
    ```bash
    npm run dev # Or npm start
    ```
    The frontend application will typically run on `http://localhost:5173` (Vite default) or `http://localhost:3000` (Create React App default).

4.  **Open your browser**
    Visit `http://localhost:[detected frontend port]` (e.g., `http://localhost:5173`) to access the Plantify application.

## 📁 Project Structure

```
Plantify-MERN-ML/
├── .gitignore
├── Backend/                 # Node.js/Express.js API
│   ├── node_modules/
│   ├── config/              # Database connection, JWT setup, env configs
│   ├── controllers/         # Logic for handling API requests
│   ├── models/              # Mongoose schemas for MongoDB
│   ├── middleware/          # Express middleware (e.g., authentication)
│   ├── routes/              # API endpoint definitions
│   ├── utils/               # Utility functions
│   ├── ml_service/          # Python-based Machine Learning Microservice
│   │   ├── models/          # Trained deep learning models (e.g., .h5 files)
│   │   ├── app.py           # ML service entry point (Flask/FastAPI)
│   │   ├── requirements.txt # Python dependencies
│   │   └── ...
│   ├── server.js            # Main Express application entry point
│   ├── package.json         # Backend dependencies and scripts
│   └── .env.example         # Example environment variables for Backend
├── Frontend/                # React.js Web Application
│   ├── node_modules/
│   ├── public/              # Static assets (index.html, images)
│   ├── src/
│   │   ├── assets/          # Images, icons, static files
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # React Context API for global state (if used)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── pages/           # Main application views/routes
│   │   ├── api/             # Frontend API client (e.g., Axios instance)
│   │   ├── styles/          # CSS files, Tailwind directives
│   │   └── App.jsx          # Root React component
│   ├── index.html           # Main HTML file
│   ├── package.json         # Frontend dependencies and scripts
│   ├── vite.config.js       # Vite configuration (or webpack.config.js)
│   └── .env.example         # Example environment variables for Frontend
└── README.md
```

## ⚙️ Configuration

### Environment Variables

The application relies on environment variables for sensitive information and configuration. Please refer to the `.env.example` files in both `Frontend`, `Backend`, and `Backend/ml_service` directories.

| Variable          | Description                                  | Default             | Required | Location              |

| :---------------- | :------------------------------------------- | :------------------ | :------- | :-------------------- |

| `VITE_APP_API_URL`| Base URL for the backend API                 | `http://localhost:5000/api` | Yes      | `Frontend/.env`       |

| `PORT`            | Port for the Node.js backend server          | `5000`              | Yes      | `Backend/.env`        |

| `MONGO_URI`       | MongoDB connection string                    | `mongodb://localhost:27017/plantify` | Yes      | `Backend/.env`        |

| `JWT_SECRET`      | Secret key for signing JWTs                  | `your_jwt_secret_key` | Yes      | `Backend/.env`        |

| `ML_SERVICE_URL`  | URL of the ML Microservice                   | `http://localhost:8000` | Yes      | `Backend/.env`        |

| `FLASK_RUN_PORT`  | Port for the Python ML microservice          | `8000`              | Yes      | `Backend/ml_service/.env`|

| `NODE_ENV`        | Application environment (`development`/`production`) | `development`       | No       | `Backend/.env`        |

### Configuration Files

-   **`Backend/config/*.js`**: Contains database connection logic and other backend-specific configurations.
-   **`vite.config.js` (Frontend)**: Configuration for the Vite build tool.

## 🔧 Development

### Available Scripts

These scripts are defined in the `package.json` files for both Frontend and Backend.

**Frontend (in `Frontend/` directory):**

| Command         | Description                              |

| :-------------- | :--------------------------------------- |

| `npm run dev`   | Starts the development server            |

| `npm run build` | Builds the application for production    |

| `npm run lint`  | Runs ESLint for code quality checks      |

| `npm run preview`| Serves the production build locally     |

**Backend (in `Backend/` directory):**

| Command        | Description                               |

| :------------- | :---------------------------------------- |

| `npm run dev`  | Starts the backend server with Nodemon for auto-restarts |

| `npm start`    | Starts the backend server (production mode) |

| `npm test`     | Runs backend tests (if configured)        |

**ML Microservice (in `Backend/ml_service/` directory):**

| Command        | Description                               |

| :------------- | :---------------------------------------- |

| `python app.py`| Starts the Flask/FastAPI ML server        |

### Development Workflow

1.  Open three separate terminal windows.
2.  In the first, navigate to `Backend/ml_service/` and run `python app.py`.
3.  In the second, navigate to `Backend/` and run `npm run dev`.
4.  In the third, navigate to `Frontend/` and run `npm run dev`.
5.  All changes in the respective directories will trigger hot-reloads or server restarts automatically.

## 🧪 Testing

<!-- TODO: Add specific testing instructions based on detected testing frameworks. If no tests are currently implemented, state that. -->
This project currently does not have explicit testing scripts configured in the `package.json` files.
Contributions including comprehensive unit and integration tests are highly welcome!

## 🚀 Deployment

### Production Build

To create a production-ready build of the frontend application:

```bash
cd Frontend
npm run build
```
This will generate optimized static assets in the `Frontend/dist` directory.

### Deployment Options

-   **Frontend (Vercel)**: The frontend is configured for easy deployment to Vercel, as indicated by the `homepage` URL. Simply connect your GitHub repository to Vercel, and it will automatically build and deploy changes from your `master` branch.

-   **Backend**: The Node.js backend can be deployed to various cloud providers like Heroku, AWS EC2, Google Cloud Run, or a custom VPS. Ensure your environment variables (e.g., `MONGO_URI`, `JWT_SECRET`, `ML_SERVICE_URL`) are correctly set in the production environment.

-   **ML Microservice**: The Python ML microservice can be deployed independently, for example, using Flask/FastAPI's production servers (Gunicorn, Uvicorn) on a cloud VM or as a containerized service (e.g., Docker on AWS ECS, GCP Cloud Run).

## 📚 API Reference

The backend provides a RESTful API for the marketplace functionalities, user management, and integrates with the ML microservice.

### Authentication

-   Users register and log in to obtain a JSON Web Token (JWT).
-   This JWT must be included in the `Authorization` header as a Bearer token for accessing protected routes.

### Marketplace Endpoints

-   `POST /api/auth/register`: Register a new user.
-   `POST /api/auth/login`: Authenticate user and get JWT.
-   `GET /api/products`: Get all available products.
-   `POST /api/products`: Create a new product (requires authentication).
-   `GET /api/products/:id`: Get a specific product by ID.
-   `PUT /api/products/:id`: Update a product by ID (requires authentication and ownership).
-   `DELETE /api/products/:id`: Delete a product by ID (requires authentication and ownership).
-   `GET /api/users/:id`: Get user profile details.

### Communication Endpoints

-   **WebSocket (Socket.IO)**:
    -   `connection`: Establishes a real-time connection.
    -   `sendMessage`: Sends a new chat message.
    -   `receiveMessage`: Receives incoming chat messages.
    -   `joinRoom`, `leaveRoom`: For managing chat rooms (e.g., per product).

### ML Microservice Endpoints

-   `POST /ml/recommend-crop`: Receives agricultural parameters and returns crop recommendations.
-   `POST /ml/detect-disease`: Receives an image of a plant and returns disease detection results.

<!-- TODO: Provide more detailed API documentation (request/response examples) if available in the codebase or a dedicated API doc. -->

## 🤝 Contributing

We welcome contributions to Plantify! If you're interested in improving the platform, please follow these guidelines:

1.  **Fork the repository**.
2.  **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name`
3.  **Make your changes**.
4.  **Commit your changes** with clear and descriptive commit messages.
5.  **Push your branch** to your forked repository.
6.  **Open a Pull Request** to the `master` branch of this repository, describing your changes in detail.

### Development Setup for Contributors

Follow the "Quick Start" guide above to set up your local development environment. Ensure all three services (Frontend, Backend, ML Microservice) are running correctly.

## 📄 License

This project is currently without a specified license. Please add a `LICENSE` file to clarify usage terms. <!-- TODO: Add a LICENSE file (e.g., MIT, Apache 2.0) -->

## 🙏 Acknowledgments

-   Built upon the robust **MERN stack**.
-   Leverages **Deep Learning models** for intelligent decision support.
-   Inspired by the need for accessible agri-tech solutions for farmers.
-   Thanks to all dependencies and open-source projects that make this possible.

## 📞 Support & Contact

-   📧 Email: [darshan1915@example.com] <!-- TODO: Add an actual contact email for Darshan1915 -->
-   🐛 Issues: [Report bugs or suggest features on GitHub Issues](https://github.com/Darshan1915/Plantify-MERN-ML/issues)
-   💬 Discussions: <!-- TODO: Add link to GitHub Discussions if enabled -->

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by darshanbankar1915@gmail.com

</div>

