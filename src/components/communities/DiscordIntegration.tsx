
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ShieldCheck, BadgeCheck, Shield } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import DiscordLogo from "@/components/ui/icons/DiscordLogo";

export const DiscordIntegration = () => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Discord Integration with Management Bot</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our powerful Discord bot helps you automate moderation, engage members, and create a seamless experience with built-in verification capabilities
        </p>
      </div>
      
      <Tabs defaultValue="features" className="w-full">
        <TabsList className="w-full grid grid-cols-3 max-w-lg mx-auto mb-6">
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
          <TabsTrigger value="custom">Custom Development</TabsTrigger>
        </TabsList>
        
        <TabsContent value="features" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-indigo-600 rounded-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">The Angry Gamer Bot Features</h3>
              <ul className="space-y-3">
                {[
                  "Welcome new members with custom messages",
                  "Auto-assign roles based on achievements",
                  "Schedule and announce community events",
                  "Moderation tools with customizable filters",
                  "Server analytics and activity tracking",
                  "Game stat integration with popular titles",
                  "Custom commands and responses",
                  "Member XP and leveling system",
                  "Music player for voice channels",
                  "Regular updates and new features"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-6 bg-white text-indigo-600 hover:bg-gray-100">
                Add to Discord
              </Button>
            </div>
          </div>
          
          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-bold">Custom Bot Development</h3>
            <p>Need something more specific for your community? Our development team can create custom Discord bot features tailored to your needs.</p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Check className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium">Custom Commands</h4>
                  <p className="text-sm text-muted-foreground">Unique commands specific to your community's needs</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Check className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium">Game Integrations</h4>
                  <p className="text-sm text-muted-foreground">Connect with specific games for stats, updates, and more</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Check className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium">Automations</h4>
                  <p className="text-sm text-muted-foreground">Streamline community management with custom workflows</p>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="mt-4">Get Custom Development</Button>
          </Card>
        </TabsContent>
        
        <TabsContent value="verification" className="space-y-6">
          <Card className="p-6 border-indigo-200">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-xl font-bold">Compliance-Ready Verification</h3>
                </div>
                
                <p>Our verification system is designed to meet stringent compliance requirements including government and industry standards:</p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">FRA</Badge>
                    <span>Federal Records Act compliance capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">NARA</Badge>
                    <span>National Archives and Records Administration guidelines support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">CUI</Badge>
                    <span>Controlled Unclassified Information framework compatibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">DoD</Badge>
                    <span>DoD 5015.2-STD records management capabilities</span>
                  </li>
                </ul>
                
                <Alert variant="default" className="bg-indigo-50 border-indigo-200 mt-4">
                  <BadgeCheck className="h-4 w-4 text-indigo-600" />
                  <AlertDescription className="text-indigo-700 text-sm">
                    For organizations requiring additional compliance certifications, we offer custom implementation services.
                  </AlertDescription>
                </Alert>
              </div>
              
              <div className="md:w-1/2 space-y-4">
                <h4 className="font-medium text-lg">Verification Process</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">1</div>
                    <div>
                      <h5 className="font-medium">Identity Verification</h5>
                      <p className="text-sm text-muted-foreground">Users authenticate through approved identity providers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">2</div>
                    <div>
                      <h5 className="font-medium">Records Management</h5>
                      <p className="text-sm text-muted-foreground">Secure storage with compliant record-keeping capabilities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">3</div>
                    <div>
                      <h5 className="font-medium">Role Assignment</h5>
                      <p className="text-sm text-muted-foreground">Automatic Discord role assignment based on verification status</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">4</div>
                    <div>
                      <h5 className="font-medium">Ongoing Compliance</h5>
                      <p className="text-sm text-muted-foreground">Regular audit checks and verification renewal processes</p>
                    </div>
                  </div>
                </div>
                
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700">
                      <Shield className="mr-2 h-4 w-4" />
                      Learn More About Verification
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle className="flex items-center gap-2">
                        <DiscordLogo className="h-5 w-5 text-indigo-500" />
                        Discord Verification System
                      </SheetTitle>
                      <SheetDescription>
                        Our comprehensive verification system designed for government and enterprise compliance
                      </SheetDescription>
                    </SheetHeader>
                    
                    <div className="mt-6 space-y-6">
                      <div>
                        <h4 className="text-lg font-medium mb-2">Supported Verification Standards</h4>
                        <ul className="space-y-3">
                          <li className="border-l-2 border-indigo-600 pl-3 py-1">
                            <strong>Federal Records Act (FRA)</strong>
                            <p className="text-sm text-muted-foreground">Complete record-keeping capabilities for federal requirements</p>
                          </li>
                          <li className="border-l-2 border-indigo-600 pl-3 py-1">
                            <strong>DoD 5015.2-STD</strong>
                            <p className="text-sm text-muted-foreground">Electronic Records Management Software Applications Design Criteria Standard compliance</p>
                          </li>
                          <li className="border-l-2 border-indigo-600 pl-3 py-1">
                            <strong>NARA Guidelines</strong>
                            <p className="text-sm text-muted-foreground">National Archives and Records Administration guidelines compatibility</p>
                          </li>
                          <li className="border-l-2 border-indigo-600 pl-3 py-1">
                            <strong>ISO 15489</strong>
                            <p className="text-sm text-muted-foreground">Information and documentation – Records management international standard</p>
                          </li>
                          <li className="border-l-2 border-indigo-600 pl-3 py-1">
                            <strong>FOIA and Privacy Act</strong>
                            <p className="text-sm text-muted-foreground">Freedom of Information Act compliance capabilities</p>
                          </li>
                          <li className="border-l-2 border-indigo-600 pl-3 py-1">
                            <strong>CUI Frameworks</strong>
                            <p className="text-sm text-muted-foreground">Controlled Unclassified Information handling protocols</p>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium mb-2">Discord Integration Features</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Role-based access control with automatic role assignment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Verified member channels with compliance logging</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Audit trail and verification expiration management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Custom verification badge and member identification</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium mb-2">Implementation Process</h4>
                        <ol className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0 mt-0.5">1</div>
                            <div>
                              <h5 className="font-medium">Consultation</h5>
                              <p className="text-sm text-muted-foreground">Our compliance team will assess your specific requirements</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0 mt-0.5">2</div>
                            <div>
                              <h5 className="font-medium">System Configuration</h5>
                              <p className="text-sm text-muted-foreground">Custom setup of verification workflows and compliance measures</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0 mt-0.5">3</div>
                            <div>
                              <h5 className="font-medium">Discord Integration</h5>
                              <p className="text-sm text-muted-foreground">Setup of verification roles and server configuration</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0 mt-0.5">4</div>
                            <div>
                              <h5 className="font-medium">Training & Documentation</h5>
                              <p className="text-sm text-muted-foreground">Comprehensive training and compliance documentation</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0 mt-0.5">5</div>
                            <div>
                              <h5 className="font-medium">Ongoing Support</h5>
                              <p className="text-sm text-muted-foreground">Continuous compliance monitoring and system updates</p>
                            </div>
                          </li>
                        </ol>
                      </div>
                      
                      <div className="pt-4">
                        <Button className="w-full">Schedule a Compliance Consultation</Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-5 border-indigo-100">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <h4 className="font-bold">Government Agencies</h4>
                <p className="text-sm text-muted-foreground">Verification for federal, state, and local government personnel</p>
                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">FRA Compliant</Badge>
              </div>
            </Card>
            
            <Card className="p-5 border-indigo-100">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <h4 className="font-bold">Military Personnel</h4>
                <p className="text-sm text-muted-foreground">Secure verification for active duty, reserve, and veterans</p>
                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">DoD Compliant</Badge>
              </div>
            </Card>
            
            <Card className="p-5 border-indigo-100">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <h4 className="font-bold">Educational Institutions</h4>
                <p className="text-sm text-muted-foreground">Verification for educational staff and students</p>
                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">FERPA Compliant</Badge>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="custom" className="grid grid-cols-1 gap-8">
          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-bold">Custom Verification Solutions</h3>
            <p>Our development team can create tailored verification workflows to meet your specific compliance requirements.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-indigo-600" />
                  <h4 className="font-medium">Custom Identity Verification</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Integration with specialized identity providers and verification services tailored to your compliance needs.
                </p>
              </div>
              
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-indigo-600" />
                  <h4 className="font-medium">Record Management Systems</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Custom record-keeping solutions designed for specific regulatory frameworks and retention policies.
                </p>
              </div>
              
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-indigo-600" />
                  <h4 className="font-medium">Specialized Role Systems</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Advanced role management with hierarchical permissions and segregation of duties.
                </p>
              </div>
              
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-indigo-600" />
                  <h4 className="font-medium">Compliance Reporting</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Automated reporting tools for audit requirements and compliance documentation.
                </p>
              </div>
            </div>
            
            <Button className="w-full mt-4">Request Custom Development Quote</Button>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};