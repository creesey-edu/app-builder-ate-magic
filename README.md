
# The Angry Gamer Show - Gaming Community Platform

This is a modern web application for The Angry Gamer Show, a gaming community platform built with React, TypeScript, and Tailwind CSS.

## Boards

| ![Stories](https://img.shields.io/badge/Board-Stories-blue?style=for-the-badge) |![Features](https://img.shields.io/badge/Board-Features-orange?style=for-the-badge) | ![Epics](https://img.shields.io/badge/Board-Epics-purple?style=for-the-badge) |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| [![Stories Status](https://dev.azure.com/theangrygamer/54711ea8-2db5-4719-b8bb-cb9e5c5ecc48/f542accb-d587-4b96-a891-49bb04524365/_apis/work/boardbadge/068b0873-41d0-480a-8e78-24ff4d54d9c9?columnOptions=1)](https://dev.azure.com/theangrygamer/54711ea8-2db5-4719-b8bb-cb9e5c5ecc48/_boards/board/t/f542accb-d587-4b96-a891-49bb04524365/Stories/) | [![Features Status](https://dev.azure.com/theangrygamer/54711ea8-2db5-4719-b8bb-cb9e5c5ecc48/f542accb-d587-4b96-a891-49bb04524365/_apis/work/boardbadge/8ede3356-bf15-4602-8d2f-b3d25d14a6e0?columnOptions=1)](https://dev.azure.com/theangrygamer/54711ea8-2db5-4719-b8bb-cb9e5c5ecc48/_boards/board/t/f542accb-d587-4b96-a891-49bb04524365/Features/) | [![Epics Status](https://dev.azure.com/theangrygamer/54711ea8-2db5-4719-b8bb-cb9e5c5ecc48/f542accb-d587-4b96-a891-49bb04524365/_apis/work/boardbadge/96644af8-fa5d-4581-836a-240ef7d7dc57?columnOptions=1)](https://dev.azure.com/theangrygamer/54711ea8-2db5-4719-b8bb-cb9e5c5ecc48/_boards/board/t/f542accb-d587-4b96-a891-49bb04524365/Epics/) |

## Join our Communities

| [![TAGS Community Discord](https://img.shields.io/discord/997603496637513928?label=TAGS%20Community&logo=discord&style=for-the-badge&color=5865F2)](https://discord.gg/uqDv4RmAQ6) | [![TAGS Developer Discord](https://img.shields.io/discord/1065367728992571444?label=TAGS%20Developer&logo=discord&style=for-the-badge&color=5865F2)](https://discord.gg/dbzBzh4r3f) | [![Squadron of Gamers Discord](https://img.shields.io/discord/1334643874844643389?label=Squadron%20of%20Gamers&logo=discord&style=for-the-badge&color=5865F2)](https://discord.gg/dbzBzh4r3f) |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|

## Donations  

[![Donate](https://img.shields.io/badge/paypal-donate-yellow.svg?style=for-the-badge&logo=paypal)](https://paypal.me/reesey275?country.x=US&locale.x=en_US/)

---

## Features

- **User Authentication**: Sign in/up with email or Discord integration
- **Gaming Communities**: Browse and join gaming communities
- **Streamer Features**: Streamer profiles, verification, and analytics
- **Content Management**: News, tournaments, and community events
- **Admin Dashboard**: Complete admin control panel for site management

## Getting Started

### Prerequisites

- Node.js 18+ - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm 9+ or [pnpm](https://pnpm.io/installation) or [Yarn](https://yarnpkg.com/getting-started/install)

### Installation

```sh
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd angry-gamer-show

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at http://localhost:8080

## Discord Authentication

This application supports Discord OAuth for user authentication. To set it up:

1. **Create a Discord Application**:
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications)
   - Click "New Application" and provide a name
   - Navigate to the "OAuth2" section
   - Add a redirect URL: `http://localhost:8080/auth/discord/callback` for development
   - Save your changes

2. **Configure Environment Variables**:
   - Open `src/utils/discordAuth.ts`
   - Replace `YOUR_DISCORD_CLIENT_ID` with your actual Discord Client ID

3. **Usage**:
   - The Discord login button is available on both sign-in and sign-up pages
   - Click the button to initiate the OAuth flow
   - After authorization, users will be redirected back to the application

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── admin/      # Admin dashboard components
│   │   ├── auth/       # Authentication components
│   │   ├── streamer/   # Streamer-related components
│   │   ├── ui/         # UI component library (shadcn/ui)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and helpers
│   ├── pages/          # Application pages/routes
│   ├── providers/      # React context providers
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
```

## Key Technologies

- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library based on Radix UI
- **React Router**: Client-side routing
- **React Query**: Data fetching and state management
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation
- **Lucide Icons**: Icon library
- **Recharts**: Charting library

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## Deployment

This project can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
