
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Main Application Component",
 *   "phase": "Core Infrastructure",
 *   "tags": ["app", "routing", "providers", "authentication"],
 *   "version": "v1.0.3",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-07-19",
 *   "description": "Main application component with routing, authentication, and global providers"
 * }
 */

import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { router } from "@/routes/index";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="tags-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
