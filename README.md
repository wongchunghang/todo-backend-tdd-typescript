# Todo App Backend

## Introduction

Welcome to the **Todo App**! This application is designed to help you manage your daily tasks efficiently. Built with React and Ant Design, it provides a simple and intuitive interface for adding, viewing, and deleting tasks.

### Purpose

The primary purpose of this Todo App is to offer a minimal yet functional setup for managing tasks. It leverages modern web development tools and practices, including React for building the user interface, Vite for fast development and build processes, and TypeScript for type safety.

## General Requirements

- It must be able to perform read, create, and update operations.
- The code is published in a public git repository where anybody can clone the solution.
- A `README.md` file is written with clear instructions on how to run the solution. In the case of the frontend project, provide screenshots.
- Build and serve commands must run on all operating systems (Windows, macOS, and Linux).
- Production-ready software, meaning readability and observability.
- Design the structure, architecture, and layers to grow the codebase and become a large system with more functionality.
- Correct error communication and error handling.
- Testing using Jest (frontend & backend).
- Omit any user authentication; the TODO list will be visible to any user.

## Frontend Requirements

- A frontend developed in React written in TypeScript in strict mode, using hooks that render the list of duties retrieved from the backend and allow the user to create new ones and/or modify existing ones.
- Must include form validations.
- The frontend project must be independent of the backend project.
- Do not use server-side implementation in the frontend, only client-side implementation; consequently, avoid solutions like Next.js or similar.
- Avoid any state management solution like Redux, the React’s hook `useReducer` or similar.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Usage](#usage)
- [Testing](#testing)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:

```sh
git clone https://github.com/yourusername/todo-backend-tdd-typescript.git
cd todo-backend-tdd-typescript
npm install
```

## Scripts

The following scripts are available in this project:

- **`test`**: Runs the test suite using Jest.
  ```sh
  npm run test
  ```

- **`build`**: Compiles the TypeScript files.
  ```sh
  npm run build
  ```

- **`dev`**: Starts the development server using `ts-node-dev`.
  ```sh
  npm run dev
  ```

- **`start`**: Runs the compiled JavaScript files.
  ```sh
  npm run start
  ```

## Usage

### Development

To start the development server, run:

```sh
npm run dev
```

This will start the server using `ts-node-dev` and watch for any changes in the source files.

### Production

To build and start the application for production, run:

```sh
npm run build
npm run start
```

This will compile the TypeScript files and start the server using the compiled JavaScript files.

## Testing

To run the tests, use:

```sh
npm run test
```

This will execute the test suite using Jest and detect any open handles.

## Dependencies

- `cors`: ^2.8.5
- `express`: ^4.19.2
- `pg`: ^8.12.0
- `swagger-jsdoc`: ^6.2.8
- `swagger-ui-express`: ^5.0.1
- `typescript`: ^5.5.3

## Dev Dependencies

- `@types/cors`: ^2.8.17
- `@types/express`: ^4.17.21
- `@types/jest`: ^29.5.12
- `@types/pg`: ^8.11.6
- `@types/supertest`: ^6.0.2
- `@types/swagger-jsdoc`: ^6.0.4
- `@types/swagger-ui-express`: ^4.1.6
- `jest`: ^29.7.0
- `supertest`: ^7.0.0
- `ts-jest`: ^29.2.3

## License

This project is licensed under the ISC License.

---

Feel free to customize this README further to fit your project's specific needs! If you need any more help, just let me know.
