
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { StreamerProfileFormValues } from "@/types/streamer";
import { AvatarUpload } from "./AvatarUpload";

interface BasicInfoSectionProps {
  control: Control<StreamerProfileFormValues>;
  disabled?: boolean;
}

export const BasicInfoSection = ({ control, disabled = false }: BasicInfoSectionProps) => {
  return (
    <div className="space-y-4 md:col-span-2">
      <h3 className="text-lg font-medium">Basic Information</h3>
      
      <FormField
        control={control}
        name="profileImage"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <AvatarUpload
                value={field.value}
                onChange={field.onChange}
                disabled={disabled}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="displayName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Display Name</FormLabel>
            <FormControl>
              <Input placeholder="Your streamer name" {...field} disabled={disabled} />
            </FormControl>
            <FormDescription>
              This is how you'll appear on our streamers page
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bio</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Tell the community about yourself and your content" 
                {...field} 
                className="resize-none"
                rows={4}
                disabled={disabled}
              />
            </FormControl>
            <FormDescription>
              Maximum 300 characters
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};