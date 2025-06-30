import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Edit, User, Mail, Code, Database, Terminal, Upload } from 'lucide-react';

interface ProfileData {
  name: string;
  email: string;
  image: string;
  profession: string;
  skills: string[];
  experience: string;
}

const PROFESSION_SKILLS = {
  // IT Fields
  'Software Developer': ['JavaScript', 'Python', 'React', 'Node.js', 'Git', 'API Integration', 'Problem Solving'],
  'Data Scientist': ['Python', 'R', 'Machine Learning', 'SQL', 'Pandas', 'NumPy', 'Data Visualization'],
  'DevOps Engineer': ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux', 'Terraform', 'Monitoring'],
  'UI/UX Designer': ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems'],
  'Cybersecurity Analyst': ['Network Security', 'Penetration Testing', 'Risk Assessment', 'SIEM', 'Incident Response'],
  'Database Administrator': ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Database Design', 'Performance Tuning'],
  'Mobile Developer': ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android', 'Mobile UI'],
  'Cloud Architect': ['AWS', 'Azure', 'GCP', 'Microservices', 'Serverless', 'Cloud Security', 'Cost Optimization'],
  
  // Non-IT Fields
  'Marketing Manager': ['Digital Marketing', 'SEO', 'Content Strategy', 'Social Media', 'Analytics', 'Brand Management'],
  'Financial Analyst': ['Financial Modeling', 'Excel', 'Risk Analysis', 'Investment Analysis', 'Budgeting', 'Forecasting'],
  'Sales Representative': ['CRM', 'Lead Generation', 'Negotiation', 'Customer Relations', 'Sales Strategy', 'Presentations'],
  'Human Resources': ['Recruitment', 'Employee Relations', 'Performance Management', 'Training', 'HR Policies'],
  'Project Manager': ['Agile', 'Scrum', 'Risk Management', 'Stakeholder Management', 'Budget Planning', 'Team Leadership'],
  'Graphic Designer': ['Adobe Creative Suite', 'Branding', 'Typography', 'Color Theory', 'Print Design', 'Web Design'],
  'Content Writer': ['SEO Writing', 'Copywriting', 'Content Strategy', 'Research', 'Editing', 'Social Media Content'],
  'Business Analyst': ['Requirements Analysis', 'Process Mapping', 'Stakeholder Management', 'Documentation', 'Problem Solving'],
  'Accountant': ['QuickBooks', 'Excel', 'Tax Preparation', 'Financial Reporting', 'Auditing', 'Bookkeeping'],
  'Teacher/Educator': ['Curriculum Development', 'Classroom Management', 'Assessment', 'Educational Technology', 'Student Engagement'],
  'Healthcare Professional': ['Patient Care', 'Medical Knowledge', 'Communication', 'Emergency Response', 'Healthcare Systems'],
  'Operations Manager': ['Process Optimization', 'Supply Chain', 'Quality Control', 'Team Management', 'Cost Reduction'],
  'Consultant': ['Strategic Planning', 'Problem Solving', 'Client Management', 'Research', 'Presentation Skills', 'Industry Knowledge']
};

const ProfileCardGenerator = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Shiva T',
    email: 'john.doe@example.com',
    image: '/lovable-uploads/8e8975ce-0767-41e1-868e-22abbd73411f.png',
    profession: '',
    skills: ['Python', 'PostgreSQL'],
    experience: ''
  });
  
  const [currentSkill, setCurrentSkill] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bootSequence = [
      '> Initializing Profile Card Generator v2.0.0...',
      '> Loading profession database...',
      '> Skills mapping system online...',
      '> Terminal ready.',
      '> Type "help" for available commands.'
    ];
    
    bootSequence.forEach((line, index) => {
      setTimeout(() => {
        setTerminalOutput(prev => [...prev, line]);
      }, index * 500);
    });
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData(prev => ({
          ...prev,
          image: e.target?.result as string
        }));
        setTerminalOutput(prev => [...prev, '> Image uploaded successfully.']);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfessionChange = (profession: string) => {
    const professionSkills = PROFESSION_SKILLS[profession as keyof typeof PROFESSION_SKILLS] || [];
    setProfileData(prev => ({
      ...prev,
      profession,
      skills: professionSkills
    }));
    setTerminalOutput(prev => [...prev, `> Profession set to: ${profession}`, `> Auto-loaded ${professionSkills.length} relevant skills`]);
  };

  const addSkill = () => {
    if (currentSkill.trim() && !profileData.skills.includes(currentSkill.trim())) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()]
      }));
      setTerminalOutput(prev => [...prev, `> Added custom skill: ${currentSkill}`]);
      setCurrentSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
    setTerminalOutput(prev => [...prev, `> Removed skill: ${skillToRemove}`]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentSkill.trim()) {
      addSkill();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 relative scanlines">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        
        {/* Terminal Control Panel */}
        <div className="space-y-4">
          <div className="border border-primary/30 bg-card/50 backdrop-blur">
            <div className="border-b border-primary/30 px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-muted-foreground">profile-generator-v2.sh</span>
            </div>
            
            <div className="p-4 space-y-4">
              <div className="text-primary text-sm font-mono">
                ┌─── PROFILE CARD GENERATOR v2.0 ───┐
                │ [ESC] Exit  [TAB] Navigate        │
                │ [ENTER] Execute                  │
                └───────────────────────────────────┘
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-muted-foreground mb-1">
                    $ set name --value
                  </label>
                  <Input
                    value={profileData.name}
                    onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-input border-primary/30 text-foreground font-mono"
                    placeholder="Enter name..."
                  />
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-1">
                    $ set email --value
                  </label>
                  <Input
                    value={profileData.email}
                    onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-input border-primary/30 text-foreground font-mono"
                    placeholder="Enter email..."
                  />
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-1">
                    $ set profession --select
                  </label>
                  <Select onValueChange={handleProfessionChange}>
                    <SelectTrigger className="bg-input border-primary/30 text-foreground font-mono">
                      <SelectValue placeholder="Select profession..." />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-primary/30 font-mono max-h-60">
                      <div className="text-xs text-primary font-bold px-2 py-1">IT & Technology</div>
                      <SelectItem value="Software Developer">Software Developer</SelectItem>
                      <SelectItem value="Data Scientist">Data Scientist</SelectItem>
                      <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
                      <SelectItem value="UI/UX Designer">UI/UX Designer</SelectItem>
                      <SelectItem value="Cybersecurity Analyst">Cybersecurity Analyst</SelectItem>
                      <SelectItem value="Database Administrator">Database Administrator</SelectItem>
                      <SelectItem value="Mobile Developer">Mobile Developer</SelectItem>
                      <SelectItem value="Cloud Architect">Cloud Architect</SelectItem>
                      
                      <div className="text-xs text-primary font-bold px-2 py-1 mt-2">Business & Management</div>
                      <SelectItem value="Project Manager">Project Manager</SelectItem>
                      <SelectItem value="Business Analyst">Business Analyst</SelectItem>
                      <SelectItem value="Operations Manager">Operations Manager</SelectItem>
                      <SelectItem value="Consultant">Consultant</SelectItem>
                      
                      <div className="text-xs text-primary font-bold px-2 py-1 mt-2">Marketing & Sales</div>
                      <SelectItem value="Marketing Manager">Marketing Manager</SelectItem>
                      <SelectItem value="Sales Representative">Sales Representative</SelectItem>
                      <SelectItem value="Content Writer">Content Writer</SelectItem>
                      
                      <div className="text-xs text-primary font-bold px-2 py-1 mt-2">Finance & Accounting</div>
                      <SelectItem value="Financial Analyst">Financial Analyst</SelectItem>
                      <SelectItem value="Accountant">Accountant</SelectItem>
                      
                      <div className="text-xs text-primary font-bold px-2 py-1 mt-2">Other Fields</div>
                      <SelectItem value="Human Resources">Human Resources</SelectItem>
                      <SelectItem value="Graphic Designer">Graphic Designer</SelectItem>
                      <SelectItem value="Teacher/Educator">Teacher/Educator</SelectItem>
                      <SelectItem value="Healthcare Professional">Healthcare Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-1">
                    $ upload avatar --file
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="bg-input border-primary/30 text-foreground font-mono"
                    />
                    <Button size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                      <Upload className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-1">
                    $ add custom-skill --name
                  </label>
                  <div className="flex gap-2">
                    <Input
                      value={currentSkill}
                      onChange={(e) => setCurrentSkill(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="bg-input border-primary/30 text-foreground font-mono"
                      placeholder="Add custom skill..."
                    />
                    <Button 
                      onClick={addSkill}
                      size="sm" 
                      className="bg-primary text-primary-foreground hover:bg-primary/80"
                    >
                      ADD
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-muted-foreground mb-1">
                    $ set experience --value
                  </label>
                  <Input
                    value={profileData.experience}
                    onChange={(e) => setProfileData(prev => ({ ...prev, experience: e.target.value }))}
                    className="bg-input border-primary/30 text-foreground font-mono"
                    placeholder="Enter experience (e.g. 5 years, 2+ years in React, etc.)..."
                  />
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">$ list skills --all</div>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {profileData.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 cursor-pointer"
                        onClick={() => removeSkill(skill)}
                      >
                        {skill} ✕
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Output */}
          <div className="border border-primary/30 bg-card/50 backdrop-blur">
            <div className="border-b border-primary/30 px-4 py-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">terminal</span>
            </div>
            <div className="p-4 h-48 overflow-y-auto font-mono text-sm">
              {terminalOutput.map((line, index) => (
                <div key={index} className="text-primary/80">
                  {line}
                </div>
              ))}
              <div className="flex items-center text-primary">
                <span>{'>'}</span>
                <span className="terminal-cursor ml-1">_</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Card Preview */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-primary mb-2 font-mono">
              ╔══════════════════════════════╗
              ║   PROFILE CARD GENERATOR v2  ║
              ╚══════════════════════════════╝
            </h1>
          </div>

          <div ref={cardRef} className="w-full max-w-sm">
            <Card className="w-full bg-card/80 backdrop-blur border-primary/30 overflow-hidden">
              <div className="relative">
                <img
                  src={profileData.image}
                  alt="Profile"
                  className="w-full h-64 object-cover filter sepia contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="text-center">
                  <h2 className="text-xl font-bold text-primary mb-1">
                    {profileData.name}
                  </h2>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-2">
                    <Mail className="w-4 h-4" />
                    <span className="font-mono">{profileData.email}</span>
                  </div>
                  {profileData.profession && (
                    <div className="text-accent font-mono text-sm">
                      {profileData.profession}
                    </div>
                  )}
                  {profileData.experience && (
                    <div className="text-muted-foreground font-mono text-xs mt-1">
                      Experience: {profileData.experience}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground font-mono">
                    $ cat skills.txt
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-primary/20 text-primary border-primary/30 font-mono text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-primary/30">
                  <div className="text-xs text-muted-foreground font-mono text-center">
                    generated_at: {new Date().toISOString()}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardGenerator;
