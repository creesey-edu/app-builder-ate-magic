// src/pages/Moderator.tsx

const ModeratorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full text-center p-6 rounded-xl shadow-xl bg-background border border-muted">
        <h1 className="text-3xl font-bold mb-4">🔒 Moderator Panel</h1>
        <p className="text-muted-foreground text-lg">
          This section is restricted to users with the <strong>Moderator</strong> role.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Role-based permissions and tools for moderation actions will appear here.
        </p>
      </div>
    </div>
  );
};

export default ModeratorPage;
