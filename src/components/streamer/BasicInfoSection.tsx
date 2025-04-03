
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { StreamerProfileFormValues } from "@/types/streamer";

interface BasicInfoSectionProps {
  control: Control<StreamerProfileFormValues>;
}

export const BasicInfoSection = ({ control }: BasicInfoSectionProps) => {
  return (
    <div className="space-y-4 md:col-span-2">
      <h3 className="text-lg font-medium">Basic Information</h3>
      
      <FormField
        control={control}
        name="displayName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Display Name</FormLabel>
            <FormControl>
              <Input placeholder="Your streamer name" {...field} />
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
