# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/fbf652e2-f6db-4ce1-8f51-7ab8fff4ac31

## How can I edit this code?

There are several ways of editing your application.


### **Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone git@github.com:creesey-edu/app-builder-ate-magic.git

# Step 2: Navigate to the project directory.
cd app-builder-ate-magic

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev

The development server will be available at http://localhost:4173.
```

### **Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

### **Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- **Vite**: A fast build tool for modern web projects.
- **TypeScript**: A typed superset of JavaScript.
- **React**: A library for building user interfaces.
- **shadcn-ui**: A customizable component library.
- **Tailwind CSS**: A utility-first CSS framework.

## How can I deploy this project?

You can deploy this project using either Docker or npm, depending on your preference.

### **Using Docker**

1. Ensure you have Docker and Docker Compose installed on your system.
2. Build the Docker image using the provided `Dockerfile`:
   ```sh
   docker build -t app-builder-ate-magic .
   ```
3. Start the application using `docker-compose`:
   ```sh
   docker-compose up
   ```
4. The application will be available at [http://localhost:4173](http://localhost:4173).

This method ensures a consistent environment for deployment and testing.

### **Using npm**

If you prefer to run the project locally without Docker:

1. Clone the repository:
   ```sh
   git clone git@github.com:creesey-edu/app-builder-ate-magic.git
   ```
2. Navigate to the project directory:
   ```sh
   cd app-builder-ate-magic
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. The development server will be available at [http://localhost:4173](http://localhost:4173).

This method is ideal for making modifications and testing changes locally.



## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain:

1. Navigate to **Project > Settings > Domains**.
2. Click **Connect Domain**.
3. Follow the instructions to link your custom domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide).

---

### **Recent Improvements**

- Enhanced development server with faster reload times.
- Improved integration with Lovable for seamless updates.
- Updated dependencies for better performance and security.
- Added support for shadcn-ui components.
- Refined Tailwind CSS configuration for easier customization.

Feel free to explore and contribute!
