
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Form schemas for different registration types
const playerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  gamerId: z.string().min(2, { message: "Gamer ID must be at least 2 characters" }),
  discordUsername: z.string().optional(),
  agreeToRules: z.boolean().refine(val => val === true, {
    message: "You must agree to the event rules"
  }),
});

const teamFormSchema = z.object({
  teamName: z.string().min(2, { message: "Team name must be at least 2 characters" }),
  captainName: z.string().min(2, { message: "Captain name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  teamMembers: z.string().min(2, { message: "Please enter team member information" }),
  discordUsername: z.string().optional(),
  agreeToRules: z.boolean().refine(val => val === true, {
    message: "You must agree to the event rules"
  }),
});

const coachFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  experienceLevel: z.string().min(1, { message: "Please select your experience level" }),
  specialization: z.string().optional(),
  discordUsername: z.string().optional(),
  agreeToRules: z.boolean().refine(val => val === true, {
    message: "You must agree to the event rules"
  }),
});

interface EventRegistrationFormProps {
  eventId: string;
  eventName: string;
  registrationType: "player" | "team" | "coach";
}

export function EventRegistrationForm({
  eventId,
  eventName,
  registrationType
}: EventRegistrationFormProps) {
  // Determine which form schema to use based on registration type
  let formSchema;
  switch (registrationType) {
    case "player":
      formSchema = playerFormSchema;
      break;
    case "team":
      formSchema = teamFormSchema;
      break;
    case "coach":
      formSchema = coachFormSchema;
      break;
    default:
      formSchema = playerFormSchema;
  }
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...(registrationType === "player" && { name: "", email: "", gamerId: "", discordUsername: "", agreeToRules: false }),
      ...(registrationType === "team" && { teamName: "", captainName: "", email: "", teamMembers: "", discordUsername: "", agreeToRules: false }),
      ...(registrationType === "coach" && { name: "", email: "", experienceLevel: "", specialization: "", discordUsername: "", agreeToRules: false }),
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Registration values:", values);
    
    // In a real app, this would submit to your backend
    toast({
      title: "Registration submitted!",
      description: `You've registered for ${eventName} as a ${registrationType}.`,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
        {/* Player Registration Form */}
        {registrationType === "player" && (
          <>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="gamerId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>In-game ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Your in-game name/ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="discordUsername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discord Username (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="username#1234" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        
        {/* Team Registration Form */}
        {registrationType === "team" && (
          <>
            <FormField
              control={form.control}
              name="teamName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your team name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="captainName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Captain Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Captain's full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Email</FormLabel>
                  <FormControl>
                    <Input placeholder="team@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="teamMembers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Members</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="List team members with their in-game IDs (one per line)" 
                      className="min-h-32"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="discordUsername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discord Username (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="username#1234" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        
        {/* Coach Registration Form */}
        {registrationType === "coach" && (
          <>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="experienceLevel"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Experience Level</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="beginner" id="beginner" />
                        <Label htmlFor="beginner">Beginner (0-1 years)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="intermediate" id="intermediate" />
                        <Label htmlFor="intermediate">Intermediate (1-3 years)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="advanced" id="advanced" />
                        <Label htmlFor="advanced">Advanced (3+ years)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="professional" id="professional" />
                        <Label htmlFor="professional">Professional</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="specialization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specialization (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Strategy, mechanics, teamwork, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="discordUsername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discord Username (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="username#1234" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        
        {/* Common fields for all registration types */}
        <FormField
          control={form.control}
          name="agreeToRules"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to the event rules and code of conduct
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-end">
          <Button type="submit">
            Complete Registration
          </Button>
        </div>
      </form>
    </Form>
  );
}
