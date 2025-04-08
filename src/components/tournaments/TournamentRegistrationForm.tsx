
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { TournamentPackage } from "@/types/tournament";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { TournamentPackageCard } from "@/components/tournaments/TournamentPackageCard";

const commonFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  discordUsername: z.string().optional(),
  agreeToRules: z.boolean().refine(val => val === true, {
    message: "You must agree to the tournament rules"
  }),
});

const playerFormSchema = commonFormSchema.extend({
  gamerId: z.string().min(2, { message: "Gamer ID must be at least 2 characters" }),
  packageId: z.string().min(1, { message: "Please select a registration package" }),
});

const teamFormSchema = commonFormSchema.extend({
  teamName: z.string().min(2, { message: "Team name must be at least 2 characters" }),
  teamMembers: z.string().min(2, { message: "Please enter team member information" }),
  packageId: z.string().min(1, { message: "Please select a registration package" }),
});

const coachFormSchema = commonFormSchema.extend({
  experienceLevel: z.string().min(1, { message: "Please select your experience level" }),
  specialization: z.string().optional(),
  packageId: z.string().min(1, { message: "Please select a registration package" }),
});

const organizationFormSchema = commonFormSchema.extend({
  organizationName: z.string().min(2, { message: "Organization name must be at least 2 characters" }),
  website: z.string().url({ message: "Please enter a valid URL" }).optional(),
  packageId: z.string().min(1, { message: "Please select a registration package" }),
  specialRequests: z.string().optional(),
});

interface TournamentRegistrationFormProps {
  tournamentId: string;
  tournamentName: string;
  packages: TournamentPackage[];
  registrationType: "player" | "team" | "coach" | "organization";
}

export function TournamentRegistrationForm({
  tournamentId,
  tournamentName,
  packages,
  registrationType
}: TournamentRegistrationFormProps) {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const navigate = useNavigate();
  
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
    case "organization":
      formSchema = organizationFormSchema;
      break;
    default:
      formSchema = playerFormSchema;
  }
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      discordUsername: "",
      agreeToRules: false,
      ...(registrationType === "player" && { gamerId: "" }),
      ...(registrationType === "team" && { teamName: "", teamMembers: "" }),
      ...(registrationType === "coach" && { experienceLevel: "", specialization: "" }),
      ...(registrationType === "organization" && { organizationName: "", website: "", specialRequests: "" }),
      packageId: "",
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Registration values:", values);
    
    // In a real app, this would submit to your backend
    toast({
      title: "Registration submitted!",
      description: `You've registered for ${tournamentName} as a ${registrationType}.`,
    });
    
    // Navigate to a confirmation page
    navigate(`/tournaments/${tournamentId}/confirmation`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Personal Information</h3>
              
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
            </div>
            
            {/* Registration type specific fields */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">
                {registrationType === "player" && "Player Information"}
                {registrationType === "team" && "Team Information"}
                {registrationType === "coach" && "Coach Information"}
                {registrationType === "organization" && "Organization Information"}
              </h3>
              
              {registrationType === "player" && (
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
              )}
              
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
                </>
              )}
              
              {registrationType === "coach" && (
                <>
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
                </>
              )}
              
              {registrationType === "organization" && (
                <>
                  <FormField
                    control={form.control}
                    name="organizationName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your organization name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="specialRequests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Special Requests (optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any special requirements or requests" 
                            className="min-h-20"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
            </div>
            
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
                      I agree to the tournament rules and code of conduct
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Choose Registration Package</h3>
              
              <FormField
                control={form.control}
                name="packageId"
                render={({ field }) => (
                  <FormItem>
                    <div className="space-y-4">
                      {packages.map((pkg) => (
                        <FormControl key={pkg.id}>
                          <TournamentPackageCard
                            pkg={pkg}
                            isSelected={field.value === pkg.id}
                            onSelect={() => {
                              field.onChange(pkg.id);
                              setSelectedPackage(pkg.id);
                            }}
                          />
                        </FormControl>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-8">
          <Button type="submit" size="lg">
            Complete Registration
          </Button>
        </div>
      </form>
    </Form>
  );
}
