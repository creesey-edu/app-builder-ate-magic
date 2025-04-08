
# Discord Authentication Backend Configuration Checklist

## Discord OAuth2 Configuration
1. **Discord Application Setup**
   - Create a Discord application in the [Discord Developer Portal](https://discord.com/developers/applications)
   - Set the proper redirect URI (`{your-domain}/auth/discord/callback`)
   - Client ID (currently using placeholder: `YOUR_DISCORD_CLIENT_ID`)
   - Client Secret (must be kept secure on the backend)
   - Needed OAuth2 scopes: `identify`, `email`, `guilds`, `guilds.members.read`

### User Authentication Flow
1. **Token Exchange Endpoint**
   - Backend route to exchange the OAuth code for access tokens
   - Endpoint: `POST /api/auth/discord/token`
   - Securely handle Discord API requests with client secret

2. **User Information Retrieval**
   - Endpoints needed to fetch:
     - User profile (`/api/v10/users/@me`)
     - User's guilds (`/api/v10/users/@me/guilds`)
     - User's roles in specific guilds (`/api/v10/users/@me/guilds/{guild.id}/member`)

### Role-Based Access Control
1. **Key Guild and Role IDs**
   - Admin Server Guild ID: `997603496637513928`
   - Admin Role ID: `1004399549051326525`
   - Verified Role ID: `1150725589123456789`
   - Government Role ID: `1150725589123498765`
   - Military Role ID: `1150725589123412345`
   - Education Role ID: `1150725589123433221`

2. **Verification System**
   - Endpoint to process verification requests
   - Storage for verification status (pending, approved, rejected)
   - Webhook or notification system for admins to review verification requests

### Session Management
1. **Session Handling**
   - JWT token generation and validation
   - Token refresh mechanism
   - User session timeout settings

2. **User Data Storage**
   - User schema matching the frontend interface:
     ```typescript
     interface DiscordUser {
       id: string;
       username: string;
       email: string;
       avatar: string;
       isAdmin: boolean;
       guilds: DiscordGuild[];
     }

     interface DiscordGuild {
       id: string;
       name: string;
       roles: string[];
     }
     ```

### Security Considerations
1. **Environment Variables**
   - Store all sensitive information in environment variables
   - Never expose the Discord Client Secret on the frontend

2. **Cross-Origin Resource Sharing (CORS)**
   - Configure to allow requests only from your frontend domain

3. **Rate Limiting**
   - Implement rate limiting to prevent abuse

### Required Endpoints
1. `POST /api/auth/discord/token` - Exchange code for token
2. `GET /api/auth/user` - Get current user information
3. `POST /api/auth/logout` - Logout user
4. `POST /api/verification/request` - Submit verification request
5. `GET /api/verification/status` - Check verification status
