
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Upload, ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AvatarUploadProps {
  value: File | string | null;
  onChange: (file: File | null) => void;
  disabled?: boolean;
}

export function AvatarUpload({ value, onChange, disabled }: AvatarUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    typeof value === "string" ? value : null
  );
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (2MB max)
    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Image must be less than 2MB",
        variant: "destructive",
      });
      return;
    }

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onChange(file);
  };

  const getInitials = () => {
    return "SU"; // Stand for "Streamer User" as default
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20 border-2 border-border">
          {previewUrl ? (
            <AvatarImage src={previewUrl} alt="Profile avatar" />
          ) : (
            <AvatarFallback className="text-lg bg-muted">
              {getInitials()}
            </AvatarFallback>
          )}
        </Avatar>

        <div className="space-y-1">
          <FormLabel className="text-sm">Profile Image</FormLabel>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => document.getElementById("avatar-upload")?.click()}
              disabled={disabled}
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload Image
            </Button>

            {previewUrl && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  setPreviewUrl(null);
                  onChange(null);
                }}
                disabled={disabled}
              >
                Remove
              </Button>
            )}
          </div>
          <FormDescription className="text-xs">
            JPG, PNG or GIF. Max 2MB.
          </FormDescription>
        </div>
      </div>

      <input
        id="avatar-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        disabled={disabled}
      />
    </div>
  );
}
