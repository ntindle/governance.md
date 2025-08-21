import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/CodeBlock";
import { FeatureCard } from "@/components/FeatureCard";
import { 
  FileText, 
  Users, 
  Calendar, 
  MapPin, 
  HelpCircle, 
  Settings, 
  GitBranch, 
  BookOpen,
  Shield,
  CheckCircle,
  ArrowRight,
  Lightbulb
} from "lucide-react";

const Index = () => {
  const governanceExample = `# Project Governance

## Project Overview
This project follows a community-driven governance model to ensure transparent decision-making and inclusive participation.

## Decision Making Process
- **Consensus Building**: All major decisions require community discussion
- **Voting**: Technical decisions use majority vote among maintainers
- **Escalation**: Disputed decisions escalated to steering committee

## Roles and Responsibilities
### Maintainers
- Review and merge pull requests
- Triage issues and manage releases
- Ensure code quality and project direction

### Contributors
- Submit pull requests and bug reports
- Participate in community discussions
- Follow contribution guidelines

## Communication Channels
- **Issues**: Bug reports and feature requests
- **Discussions**: General project discussion
- **Slack**: Real-time communication (#project-governance)

## Code of Conduct
All participants must adhere to our Code of Conduct to maintain a welcoming and inclusive environment.

## Meeting Schedule
- Weekly maintainer sync: Tuesdays 2PM UTC
- Monthly community call: First Friday of each month
- Quarterly planning: End of each quarter

## Contact Information
- Lead Maintainer: @username
- Governance Questions: governance@project.org
- Security Issues: security@project.org`;

  const badExample = `# Governance

We have some rules. Ask John if you have questions.

## Rules
- Don't break things
- Be nice
- Follow the process (see wiki)

Contact: john@email.com`;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-8">
            <GitBranch className="h-4 w-4" />
            Best Practices
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Master Governance.md for
            <span className="block text-white/90">Your Open Source Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Learn the 5Ws and How of creating effective governance files that bring clarity, 
            structure, and trust to your open source projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white bg-white/10 hover:bg-white/20">
              <FileText className="mr-2 h-5 w-5" />
              View Examples
            </Button>
          </div>
        </div>
      </section>

      {/* What is Governance.md */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">What</Badge>
            <h2 className="text-4xl font-bold mb-6">What is Governance.md?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A governance file is your project's constitution—defining how decisions are made, 
              who has what responsibilities, and how your community operates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FeatureCard
              title="Project Constitution"
              description="Establishes the fundamental rules and principles that guide your project's development and community interactions."
              icon={Shield}
            />
            <FeatureCard
              title="Decision Framework"
              description="Creates clear processes for making decisions, from small code changes to major project direction shifts."
              icon={Settings}
            />
            <FeatureCard
              title="Community Structure"
              description="Defines roles, responsibilities, and how contributors can participate and grow within the project."
              icon={Users}
            />
            <FeatureCard
              title="Transparency Tool"
              description="Provides visibility into how the project operates, building trust with contributors and users."
              icon={CheckCircle}
            />
          </div>
        </div>
      </section>

      {/* The 5 Ws Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The 5 Ws of Governance</h2>
            <p className="text-xl text-muted-foreground">
              Understanding the fundamental questions your governance file should answer
            </p>
          </div>

          <div className="grid gap-8">
            {/* Who */}
            <FeatureCard
              title="Who - Roles and People"
              description="Define who has what responsibilities and authority in your project"
              icon={Users}
            >
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <h4 className="font-semibold mb-2">Maintainers</h4>
                    <p className="text-muted-foreground">Core team with commit access and decision-making authority</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <h4 className="font-semibold mb-2">Contributors</h4>
                    <p className="text-muted-foreground">Community members who submit code, docs, or other improvements</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <h4 className="font-semibold mb-2">Steering Committee</h4>
                    <p className="text-muted-foreground">Leadership group for strategic decisions and conflict resolution</p>
                  </div>
                </div>
              </div>
            </FeatureCard>

            {/* What */}
            <FeatureCard
              title="What - Scope and Decisions"
              description="Clarify what types of decisions need governance and what processes apply"
              icon={FileText}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technical Decisions</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Architecture changes</li>
                    <li>• API modifications</li>
                    <li>• Dependency updates</li>
                    <li>• Security policies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Project Decisions</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Roadmap planning</li>
                    <li>• Release schedules</li>
                    <li>• Community guidelines</li>
                    <li>• Licensing changes</li>
                  </ul>
                </div>
              </div>
            </FeatureCard>

            {/* When */}
            <FeatureCard
              title="When - Timing and Schedules"
              description="Establish when decisions are made and how timing affects the process"
              icon={Calendar}
            >
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Regular Meetings</h4>
                  <p className="text-sm text-muted-foreground mb-3">Scheduled decision-making sessions</p>
                  <Badge variant="secondary">Weekly/Monthly</Badge>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Emergency Decisions</h4>
                  <p className="text-sm text-muted-foreground mb-3">Fast-track for urgent issues</p>
                  <Badge variant="secondary">24-48 hours</Badge>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Major Changes</h4>
                  <p className="text-sm text-muted-foreground mb-3">Extended discussion period</p>
                  <Badge variant="secondary">2-4 weeks</Badge>
                </Card>
              </div>
            </FeatureCard>

            {/* Where */}
            <FeatureCard
              title="Where - Communication Channels"
              description="Specify where discussions happen and decisions are documented"
              icon={MapPin}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Discussion Venues</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <GitBranch className="h-4 w-4 text-primary" />
                      <span>GitHub Issues & Discussions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-primary rounded-sm flex items-center justify-center text-white text-xs">#</span>
                      <span>Slack/Discord channels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-primary rounded-sm flex items-center justify-center text-white text-xs">📧</span>
                      <span>Mailing lists</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Documentation</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span>Meeting minutes in wiki</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Decision logs in docs/</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4 text-primary" />
                      <span>Process docs in .github/</span>
                    </div>
                  </div>
                </div>
              </div>
            </FeatureCard>

            {/* Why */}
            <FeatureCard
              title="Why - Purpose and Principles"
              description="Explain the reasoning behind your governance structure and its benefits"
              icon={HelpCircle}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Core Benefits
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Reduces conflicts through clear processes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Encourages community participation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Builds trust with transparent decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Scales project leadership effectively</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Key Principles</h4>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <strong>Transparency:</strong> All decisions and processes are visible to the community
                    </div>
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <strong>Inclusivity:</strong> Everyone can participate regardless of background or experience
                    </div>
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <strong>Accountability:</strong> Clear responsibilities and consequences for actions
                    </div>
                  </div>
                </div>
              </div>
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* How Section - The Main Focus */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 text-white">How - The Implementation</Badge>
            <h2 className="text-4xl font-bold mb-6">How to Create Your Governance.md</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Step-by-step guide to writing an effective governance file for your GitHub project
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h3 className="text-2xl font-bold">File Location & Setup</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Create your governance file in the root directory of your repository as <code className="px-2 py-1 bg-code-bg rounded text-sm">GOVERNANCE.md</code></p>
                  <p>This ensures maximum visibility and follows GitHub conventions for important project documentation.</p>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Pro Tips:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Use ALL CAPS for the filename</li>
                      <li>• Link to it from your README.md</li>
                      <li>• Add it to your .github/ folder templates</li>
                    </ul>
                  </div>
                </div>
              </div>
              <CodeBlock 
                filename="Repository Structure"
                code={`your-project/
├── README.md
├── GOVERNANCE.md      ← Create this file
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
└── src/`}
              />
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h3 className="text-2xl font-bold">Structure Your Content</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Follow a logical structure that covers all essential governance aspects. Start with an overview and progressively dive into specific processes.</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>Project Overview & Mission</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>Roles & Responsibilities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>Decision-Making Process</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>Communication Guidelines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>Meeting Schedules</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>Contact Information</span>
                    </div>
                  </div>
                </div>
              </div>
              <CodeBlock 
                filename="GOVERNANCE.md Template"
                code={`# Project Governance

## Table of Contents
- [Project Overview](#overview)
- [Roles and Responsibilities](#roles)
- [Decision Making Process](#decisions)
- [Communication](#communication)
- [Meetings](#meetings)
- [Contact Information](#contact)

## Project Overview {#overview}
Brief description of project goals...

## Roles and Responsibilities {#roles}
### Maintainers
- Authority and responsibilities
### Contributors  
- How to contribute and grow

## Decision Making Process {#decisions}
Step-by-step process for different types of decisions...`}
              />
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h3 className="text-2xl font-bold">Define Clear Processes</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Specify exact steps for common scenarios. The more specific you are, the less confusion there will be later.</p>
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold mb-2 text-foreground">Essential Processes to Define:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• How to propose major changes</li>
                      <li>• Pull request review requirements</li>
                      <li>• Conflict resolution procedures</li>
                      <li>• How to become a maintainer</li>
                      <li>• Release decision process</li>
                    </ul>
                  </div>
                </div>
              </div>
              <CodeBlock 
                filename="Process Example"
                code={`## Decision Making Process

### Technical Decisions
1. **Proposal**: Submit RFC via GitHub issue
2. **Discussion**: 7-day community feedback period  
3. **Review**: Maintainer technical review
4. **Vote**: Simple majority of active maintainers
5. **Implementation**: Approved changes merged

### Major Changes (Breaking changes, new features)
1. **RFC Document**: Detailed proposal with impact analysis
2. **Community Input**: 14-day public comment period
3. **Maintainer Review**: Technical feasibility assessment  
4. **Steering Committee**: Final approval for major impact
5. **Announcement**: Public notification before implementation

### Emergency Fixes
- Maintainers can merge critical security/bug fixes
- Must notify community within 24 hours
- Post-hoc review in next scheduled meeting`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Good vs Bad Examples</h2>
            <p className="text-xl text-muted-foreground">
              Learn from real examples of what makes governance documentation effective
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-2xl font-bold text-green-600">✅ Good Example</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Comprehensive, clear, and actionable governance documentation
              </p>
              <div className="group">
                <CodeBlock 
                  filename="GOVERNANCE.md"
                  code={governanceExample}
                />
              </div>
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">What makes this good:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Clear role definitions with specific responsibilities</li>
                  <li>• Detailed decision-making processes</li>
                  <li>• Multiple communication channels specified</li>
                  <li>• Regular meeting schedules</li>
                  <li>• Specific contact information</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-6 w-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">✗</span>
                <h3 className="text-2xl font-bold text-red-600">❌ Bad Example</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Vague, incomplete, and not actionable
              </p>
              <CodeBlock 
                filename="governance.md"
                code={badExample}
              />
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Problems with this example:</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• No clear processes or procedures</li>
                  <li>• Vague rules without explanations</li>
                  <li>• Single point of contact (bus factor of 1)</li>
                  <li>• No role definitions or responsibilities</li>
                  <li>• References external documentation without links</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 text-white">Ready-to-Use Templates</Badge>
            <h2 className="text-4xl font-bold mb-6">Download Governance Templates</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started quickly with pre-written governance templates tailored to your team size and structure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-lg transition-all duration-smooth group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Solo Developer</CardTitle>
                <p className="text-muted-foreground text-sm">Perfect for personal projects and single maintainer repositories</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Simple decision-making process</li>
                  <li>• Community contribution guidelines</li>
                  <li>• Personal availability and contact info</li>
                  <li>• Project goals and priorities</li>
                </ul>
                <Button asChild className="w-full">
                  <a href="/templates/governance-solo-developer.md" download="GOVERNANCE.md">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Template
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-lg transition-all duration-smooth group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Two-Person Team</CardTitle>
                <p className="text-muted-foreground text-sm">Ideal for co-founder or partner development teams</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Consensus-based decisions</li>
                  <li>• Role division and expertise areas</li>
                  <li>• Conflict resolution process</li>
                  <li>• Shared responsibilities framework</li>
                </ul>
                <Button asChild className="w-full">
                  <a href="/templates/governance-two-person-team.md" download="GOVERNANCE.md">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Template
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-lg transition-all duration-smooth group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Small Team</CardTitle>
                <p className="text-muted-foreground text-sm">Great for 3-5 maintainer teams with defined roles</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Structured team roles</li>
                  <li>• Majority voting system</li>
                  <li>• Regular meeting schedules</li>
                  <li>• Contributor advancement path</li>
                </ul>
                <Button asChild className="w-full">
                  <a href="/templates/governance-small-team.md" download="GOVERNANCE.md">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Template
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-lg transition-all duration-smooth group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Large Organization</CardTitle>
                <p className="text-muted-foreground text-sm">For projects with 10+ maintainers and working groups</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Steering committee structure</li>
                  <li>• Working group organization</li>
                  <li>• Formal decision processes</li>
                  <li>• Enterprise-grade procedures</li>
                </ul>
                <Button asChild className="w-full">
                  <a href="/templates/governance-large-team.md" download="GOVERNANCE.md">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Template
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="flex items-start gap-4">
              <Lightbulb className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Customization Tips</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  These templates are starting points - customize them for your specific project needs. 
                  Replace placeholder text with your actual information, adjust processes to match your workflow, 
                  and add sections relevant to your community and project goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Governance File?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start building trust and clarity in your open source project today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <GitBranch className="mr-2 h-5 w-5" />
              Create GOVERNANCE.md
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="#templates" className="no-underline">
                <FileText className="mr-2 h-5 w-5" />
                Download Template
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;