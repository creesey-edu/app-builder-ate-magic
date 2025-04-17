// src/pages/StreamerVerification.tsx

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, XCircle, Clock, ExternalLink } from "lucide-react";
import { mockPendingStreamers, VerificationStatus, StreamerProfileWithVerification } from "@/types/streamer";
import { VerificationBadge } from "@/components/streamer/VerificationBadge";
import { useToast } from "@/components/ui/use-toast";

const StreamerVerification = () => {
  const [streamers, setStreamers] = useState<StreamerProfileWithVerification[]>(mockPendingStreamers);
  const [selectedStreamer, setSelectedStreamer] = useState<StreamerProfileWithVerification | null>(null);
  const [rejectionReason, setRejectionReason] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("pending");
  const { toast } = useToast();

  const handleSelectStreamer = (streamer: StreamerProfileWithVerification) => {
    setSelectedStreamer(streamer);
    setRejectionReason("");
  };

  const handleVerify = () => {
    if (!selectedStreamer) return;
    
    const updatedStreamers = streamers.map(s => 
      s.id === selectedStreamer.id 
        ? { ...s, verificationStatus: VerificationStatus.VERIFIED, verifiedAt: new Date() } 
        : s
    );
    
    setStreamers(updatedStreamers);
    setSelectedStreamer(null);
    
    toast({
      title: "Streamer verified",
      description: `${selectedStreamer.displayName} has been verified successfully.`,
    });
  };

  const handleReject = () => {
    if (!selectedStreamer) return;
    
    const updatedStreamers = streamers.map(s => 
      s.id === selectedStreamer.id 
        ? { 
            ...s, 
            verificationStatus: VerificationStatus.REJECTED, 
            rejectionReason 
          } 
        : s
    );
    
    setStreamers(updatedStreamers);
    setSelectedStreamer(null);
    
    toast({
      title: "Streamer rejected",
      description: `${selectedStreamer.displayName}'s verification request has been rejected.`,
      variant: "destructive",
    });
  };

  const filteredStreamers = streamers.filter(streamer => {
    if (activeTab === "pending") return streamer.verificationStatus === VerificationStatus.PENDING;
    if (activeTab === "verified") return streamer.verificationStatus === VerificationStatus.VERIFIED;
    if (activeTab === "rejected") return streamer.verificationStatus === VerificationStatus.REJECTED;
    return true;
  });

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  return (
    <PageLayout
      title="Streamer Verification"
      description="Review and verify streamer profile applications"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Verification Queue</CardTitle>
              <CardDescription>
                Review streamer applications and verify their profiles
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
                <div className="px-6 pb-2">
                  <TabsList className="w-full">
                    <TabsTrigger value="pending" className="flex-1">
                      <Clock className="h-4 w-4 mr-1" />
                      Pending
                      <Badge variant="secondary" className="ml-2 bg-amber-100 text-amber-800">
                        {streamers.filter(s => s.verificationStatus === VerificationStatus.PENDING).length}
                      </Badge>
                    </TabsTrigger>
                    <TabsTrigger value="verified" className="flex-1">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Verified
                    </TabsTrigger>
                    <TabsTrigger value="rejected" className="flex-1">
                      <XCircle className="h-4 w-4 mr-1" />
                      Rejected
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="pending" className="mt-0">
                  <div className="divide-y">
                    {filteredStreamers.length > 0 ? (
                      filteredStreamers.map(streamer => (
                        <div 
                          key={streamer.id} 
                          className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors ${selectedStreamer?.id === streamer.id ? 'bg-muted' : ''}`}
                          onClick={() => handleSelectStreamer(streamer)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <div className="bg-primary/10 flex items-center justify-center w-full h-full text-primary font-medium">
                                  {streamer.displayName.charAt(0)}
                                </div>
                              </Avatar>
                              <div>
                                <p className="font-medium">{streamer.displayName}</p>
                                <p className="text-sm text-muted-foreground">Applied {formatDate(streamer.createdAt)}</p>
                              </div>
                            </div>
                            <VerificationBadge status={streamer.verificationStatus} />
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-6 text-center text-muted-foreground">
                        No streamers to review
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="verified" className="mt-0">
                  <div className="divide-y">
                    {filteredStreamers.length > 0 ? (
                      filteredStreamers.map(streamer => (
                        <div 
                          key={streamer.id} 
                          className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors ${selectedStreamer?.id === streamer.id ? 'bg-muted' : ''}`}
                          onClick={() => handleSelectStreamer(streamer)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <div className="bg-primary/10 flex items-center justify-center w-full h-full text-primary font-medium">
                                  {streamer.displayName.charAt(0)}
                                </div>
                              </Avatar>
                              <div>
                                <p className="font-medium">{streamer.displayName}</p>
                                <p className="text-sm text-muted-foreground">Verified {streamer.verifiedAt ? formatDate(streamer.verifiedAt) : "N/A"}</p>
                              </div>
                            </div>
                            <VerificationBadge status={streamer.verificationStatus} />
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-6 text-center text-muted-foreground">
                        No verified streamers
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="rejected" className="mt-0">
                  <div className="divide-y">
                    {filteredStreamers.length > 0 ? (
                      filteredStreamers.map(streamer => (
                        <div 
                          key={streamer.id} 
                          className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors ${selectedStreamer?.id === streamer.id ? 'bg-muted' : ''}`}
                          onClick={() => handleSelectStreamer(streamer)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <div className="bg-primary/10 flex items-center justify-center w-full h-full text-primary font-medium">
                                  {streamer.displayName.charAt(0)}
                                </div>
                              </Avatar>
                              <div>
                                <p className="font-medium">{streamer.displayName}</p>
                                <p className="text-sm text-muted-foreground">Rejected: {streamer.rejectionReason ? streamer.rejectionReason.substring(0, 20) + "..." : "No reason provided"}</p>
                              </div>
                            </div>
                            <VerificationBadge status={streamer.verificationStatus} />
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-6 text-center text-muted-foreground">
                        No rejected streamers
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          {selectedStreamer ? (
            <Card>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      {selectedStreamer.displayName}
                      <VerificationBadge status={selectedStreamer.verificationStatus} />
                    </CardTitle>
                    <CardDescription>
                      Applied on {formatDate(selectedStreamer.createdAt)}
                    </CardDescription>
                  </div>
                  {selectedStreamer.verificationStatus === VerificationStatus.PENDING && (
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                        onClick={handleReject}
                      >
                        <XCircle className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={handleVerify}
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Verify
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Bio</h3>
                    <p>{selectedStreamer.bio}</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Streaming Platforms</h3>
                      <div className="space-y-2">
                        {selectedStreamer.twitchUsername && (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 flex items-center justify-center bg-purple-100 text-purple-800 rounded mr-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43z" />
                                </svg>
                              </div>
                              <span>Twitch: {selectedStreamer.twitchUsername}</span>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                              <a href={`https://twitch.tv/${selectedStreamer.twitchUsername}`} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        )}
                        
                        {selectedStreamer.youtubeChannelId && (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 flex items-center justify-center bg-red-100 text-red-800 rounded mr-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
                                </svg>
                              </div>
                              <span>YouTube Channel ID: {selectedStreamer.youtubeChannelId}</span>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                              <a href={`https://youtube.com/channel/${selectedStreamer.youtubeChannelId}`} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        )}
                        
                        {selectedStreamer.kickUsername && (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 flex items-center justify-center bg-green-100 text-green-800 rounded mr-2">
                                <span className="text-xs font-bold">K</span>
                              </div>
                              <span>Kick: {selectedStreamer.kickUsername}</span>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                              <a href={`https://kick.com/${selectedStreamer.kickUsername}`} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        )}
                        
                        {!selectedStreamer.twitchUsername && !selectedStreamer.youtubeChannelId && !selectedStreamer.kickUsername && (
                          <p className="text-sm text-muted-foreground italic">No streaming platforms provided</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">Discord Information</h3>
                      <div className="flex items-center">
                        <div className="w-6 h-6 flex items-center justify-center bg-indigo-100 text-indigo-800 rounded mr-2">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                          </svg>
                        </div>
                        <span>Discord: {selectedStreamer.discordUsername}</span>
                      </div>
                    </div>
                  </div>
                  
                  {selectedStreamer.verificationStatus === VerificationStatus.PENDING && (
                    <>
                      <Separator />
                      
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Rejection Reason (optional)</h3>
                        <Textarea 
                          placeholder="Provide a reason if you're rejecting this streamer..."
                          value={rejectionReason}
                          onChange={(e) => setRejectionReason(e.target.value)}
                          className="resize-none"
                        />
                      </div>
                    </>
                  )}
                  
                  {selectedStreamer.verificationStatus === VerificationStatus.REJECTED && selectedStreamer.rejectionReason && (
                    <>
                      <Separator />
                      
                      <div>
                        <h3 className="text-sm font-medium text-red-500 mb-2">Rejection Reason</h3>
                        <p className="bg-red-50 text-red-800 p-3 rounded border border-red-200 text-sm">
                          {selectedStreamer.rejectionReason}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
              
              {selectedStreamer.verificationStatus === VerificationStatus.PENDING && (
                <CardFooter className="flex justify-between bg-muted/50">
                  <Button variant="ghost" onClick={() => setSelectedStreamer(null)}>
                    Cancel
                  </Button>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                      onClick={handleReject}
                    >
                      <XCircle className="h-4 w-4 mr-1" />
                      Reject Application
                    </Button>
                    <Button onClick={handleVerify}>
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Verify Streamer
                    </Button>
                  </div>
                </CardFooter>
              )}
            </Card>
          ) : (
            <div className="h-full flex items-center justify-center bg-muted/50 rounded-lg p-12">
              <div className="text-center">
                <Clock className="h-12 w-12 text-muted-foreground mb-4 mx-auto" />
                <h3 className="text-lg font-medium">Select a Streamer</h3>
                <p className="text-muted-foreground">
                  Choose a streamer from the list to review their profile
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default StreamerVerification;