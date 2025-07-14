# Video Library Application

## Tech Stack

### Frontend

- **TypeScript**
- **React 19**
- **Vite**
- **TailwindCSS**
- **React Router**
- **React Hook Form**
- **Vitest**

### Backend

- **TypeScript**
- **Node.js**
- **Express**
- **Zod**
- **Vitest** with Supertest for API testing

## Setup Instructions

### Prerequisites

**Setup NVM** - https://github.com/nvm-sh/nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

```

> If you find the install script is updating the wrong profile file, set the $PROFILE env var to the profile file’s path, and then rerun the installation script.

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

### Installation

1. **Install Node**

   ```bash
   nvm install
   nvm use
   ```

2. **Install dependencies:**

   ```bash
   npm install
   npm run install:all
   ```

### Development

1. **Start the backend server and frontend development server**

   ```bash
   npm run dev
   ```

   Server runs on http://localhost:3001

   Frontend runs on http://localhost:5173

2. **Access the application:**
   Open http://localhost:5173 in your browser

### Testing

**Run backend and frontend tests:**

```bash
npm test
```

### Building for Production

**Build backend and frontend:**

```bash
npm run build
```

## Future Improvements

### Technical Enhancements

- **Pagination**: Implement pagination for large video collections
- **Database Integration**: Replace in-memory storage with SQL/NoSql solution depending on requirements
- **Authentication**: Add user accounts and video ownership
- **File Upload**: Support actual video file uploads and storage in blob storage
- **Search & Filtering**: Add text search and tag-based filtering
- **Advanced Sorting**: Sort by views, duration, or custom criteria

### Developer Experience

- **ESLint Rules**: Stricter linting configuration
- **Mono Repo**: Switch to a proper monorepo setup
- **Shared Typing**: Make use of monorepo to have a package for types and validation
- **Docker**: Containerize application for easier deployment
- **CI/CD**: GitHub Actions for automated testing and deployment
- **React Testing Libary**: RTL for component testing
- **End-to-End Tests**: Playwright for E2E testing
- **API Documentation**: OpenAPI/Swagger documentation
- **Monitoring**: Application performance monitoring
- **Logging**: Structured logging with correlation IDs
