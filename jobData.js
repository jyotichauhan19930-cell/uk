// Job data generator - deterministically generates 100,000 jobs for United Kingdom
const TOTAL_JOBS = 100000;

const jobTitles = [
  "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Data Analyst", "Data Scientist", "Machine Learning Engineer", "DevOps Engineer",
  "Cloud Architect", "Mobile Developer", "Android Developer", "iOS Developer",
  "Product Manager", "Project Manager", "Scrum Master", "Business Analyst",
  "UI/UX Designer", "Graphic Designer", "Brand Designer", "Web Designer",
  "Marketing Manager", "Digital Marketing Specialist", "SEO Specialist", "Content Writer",
  "Copywriter", "Social Media Manager", "Community Manager", "Growth Hacker",
  "Sales Manager", "Account Manager", "Business Development Manager", "Sales Executive",
  "Financial Analyst", "Accountant", "Finance Manager", "Auditor",
  "HR Manager", "HR Generalist", "Recruiter", "Talent Acquisition Specialist",
  "Operations Manager", "Supply Chain Manager", "Logistics Coordinator", "Procurement Officer",
  "Customer Success Manager", "Customer Support Specialist", "Technical Support Engineer",
  "Network Engineer", "Cybersecurity Analyst", "Information Security Officer",
  "Database Administrator", "Systems Administrator", "IT Manager", "CTO",
  "Legal Counsel", "Compliance Officer", "Risk Manager", "Contract Manager",
  "Healthcare Administrator", "Clinical Research Associate", "Pharmacist", "Nurse",
  "Teacher", "Education Consultant", "Instructional Designer", "Training Manager",
  "Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Structural Engineer",
  "Architect", "Urban Planner", "Environmental Consultant", "Safety Officer",
  "Real Estate Agent", "Property Manager", "Facilities Manager", "Construction Manager",
  "Research Analyst", "Policy Analyst", "Communications Manager", "Public Relations Officer",
  "Executive Assistant", "Administrative Officer", "Office Manager", "Receptionist",
  "Video Editor", "Motion Graphics Designer", "Content Strategist", "Brand Manager",
  "Partnerships Manager", "Customer Experience Manager", "Data Engineer", "BI Developer",
  "Scrum Master", "Agile Coach", "Release Manager", "Site Reliability Engineer",
  "Penetration Tester", "Cloud Engineer", "Platform Engineer", "API Developer",
  "Hotel Manager", "Restaurant Manager", "Chef", "Sommelier", "Event Manager",
  "Aviation Engineer", "Pilot", "Flight Attendant", "Airport Manager",
  "Financial Advisor", "Wealth Manager", "Investment Analyst", "Actuary"
];

// 75+ UK based companies + global companies with UK presence + your added companies
const companies = [
  // UK based
  "HSBC", "Barclays", "Lloyds Banking Group", "NatWest Group", "Standard Chartered",
  "AstraZeneca", "GlaxoSmithKline (GSK)", "Unilever", "Reckitt Benckiser", "Diageo",
  "BP", "Shell", "Centrica", "National Grid", "SSE",
  "BT Group", "Vodafone", "EE", "O2", "Three",
  "Tesco", "Sainsbury's", "Asda", "Morrisons", "Waitrose",
  "Marks & Spencer", "Next", "Primark", "John Lewis", "House of Fraser",
  "BAE Systems", "Rolls-Royce", "Airbus UK", "Leonardo", "QinetiQ",
  "Jaguar Land Rover", "Aston Martin", "Bentley", "McLaren", "Lotus",
  "British Airways", "Virgin Atlantic", "easyJet", "Ryanair UK", "Jet2",
  "Sky UK", "ITV", "BBC", "Channel 4", "The Guardian",
  "Reed Elsevier", "Pearson", "RELX", "Informa", "Taylor & Francis",
  "Associated British Foods", "Greggs", "Pret A Manger", "Costa Coffee", "Caffè Nero",
  "Gymshark", "ASOS", "Boohoo", "Missguided", "PrettyLittleThing",
  "Tate & Lyle", "Premier Foods", "Weetabix", "Quaker Oats", "Hovis",
  
  // Global with UK presence
  "Google UK", "Amazon UK", "Microsoft UK", "Apple UK", "Meta UK",
  "IBM UK", "Oracle UK", "Cisco UK", "Dell UK", "HP UK",
  "SAP UK", "Salesforce UK", "Accenture UK", "Deloitte UK",
  "PwC UK", "KPMG UK", "EY UK", "McKinsey UK",
  "Goldman Sachs UK", "JPMorgan UK", "Citigroup UK", "Morgan Stanley UK",
  "Pfizer UK", "Novartis UK", "Roche UK", "Johnson & Johnson UK",
  "Samsung UK", "LG UK", "Sony UK", "Panasonic UK",
  "Toyota UK", "Honda UK", "Nissan UK", "BMW UK", "Mercedes UK",
  "LVMH UK", "Chanel UK", "Gucci UK", "Rolex UK",
  
  // ─── YOUR ADDED COMPANIES ──────────────────────────────────────────────────
  "Netflix", "YouTube", "Delta Airlines", "Southwest Airlines", "American Airlines",
  "Tesla", "Apple", "Amazon", "Google", "CostCo",
  "Disney", "United Airlines", "Wayfair", "Starbucks", "Walmart",
  "American Express", "Wells Fargo", "Aetna", "Twitter", "CVS",
  "Hobby Lobby", "Home Depot", "Target", "Yelp", "Crocs",
  "Xbox", "Dell", "Anthem", "LabCorp", "TTEC",
  "Polaris", "UCHealth", "Hulu", "NDT", "CrunchyRoll",
  "Eddie Bauer", "USPS", "JetBlue Airlines", "UPS", "Chewy",
  "Automattic", "GitLab", "Zapier", "Shopify", "Buffer",
  "InVision", "Toptal", "Basecamp", "Doist", "HubSpot",
  "Atlassian", "Trello", "CrowdStrike", "Elastic", "Twilio",
  "GitHub", "Dropbox", "LinkedIn", "Upwork", "FlexJobs",
  "GitKraken", "Salesforce", "Slack", "Indeed", "Pinterest",
  "Zendesk", "Squarespace", "Stripe", "WeWork", "Calendly",
  "TaxJar", "Front", "Cloudflare", "Automox", "Veeva Systems",
  "MURAL"
];

const ukLocations = [
  // England
  "London, England", "Manchester, England", "Birmingham, England", "Leeds, England",
  "Sheffield, England", "Liverpool, England", "Bristol, England", "Newcastle, England",
  "Nottingham, England", "Southampton, England", "Portsmouth, England", "Leicester, England",
  "Coventry, England", "Bradford, England", "Kingston upon Hull, England",
  "Stoke-on-Trent, England", "Wolverhampton, England", "Derby, England",
  "Salford, England", "York, England", "Cambridge, England", "Oxford, England",
  "Canterbury, England", "Bath, England", "Brighton, England", "Reading, England",
  "Slough, England", "Luton, England", "Milton Keynes, England", "Swindon, England",
  
  // Greater London Areas
  "City of London, England", "Westminster, London", "Camden, London", "Islington, London",
  "Hackney, London", "Tower Hamlets, London", "Southwark, London", "Lambeth, London",
  "Wandsworth, London", "Hammersmith, London", "Kensington, London", "Chelsea, London",
  "Mayfair, London", "Soho, London", "Shoreditch, London", "Canary Wharf, London",
  
  // Scotland
  "Edinburgh, Scotland", "Glasgow, Scotland", "Aberdeen, Scotland", "Dundee, Scotland",
  "Inverness, Scotland", "Perth, Scotland", "Stirling, Scotland", "Paisley, Scotland",
  
  // Wales
  "Cardiff, Wales", "Swansea, Wales", "Newport, Wales", "Bangor, Wales",
  "Wrexham, Wales", "Llandudno, Wales",
  
  // Northern Ireland
  "Belfast, Northern Ireland", "Derry, Northern Ireland", "Lisburn, Northern Ireland",
  "Newry, Northern Ireland", "Armagh, Northern Ireland",
  
  // Remote
  "Remote — UK", "Remote — London, UK"
];

const salaryRanges = [
  { display: "£2,000 – 3,000/month", min: 2000, max: 3000 },
  { display: "£3,000 – 4,500/month", min: 3000, max: 4500 },
  { display: "£4,500 – 6,000/month", min: 4500, max: 6000 },
  { display: "£6,000 – 8,000/month", min: 6000, max: 8000 },
  { display: "£8,000 – 10,000/month", min: 8000, max: 10000 },
  { display: "£10,000 – 13,000/month", min: 10000, max: 13000 },
  { display: "£13,000 – 16,000/month", min: 13000, max: 16000 },
  { display: "£16,000 – 20,000/month", min: 16000, max: 20000 },
  { display: "£20,000+/month", min: 20000, max: 28000 },
  { display: "£1,500 – 2,500/month", min: 1500, max: 2500 }
];

const jobTypes = ["FULL_TIME", "CONTRACTOR", "PART_TIME", "INTERN", "TEMPORARY"];
const jobTypeDisplay = { 
  "FULL_TIME": "Full-time", 
  "CONTRACTOR": "Contract", 
  "PART_TIME": "Part-time", 
  "INTERN": "Internship", 
  "TEMPORARY": "Temporary" 
};

const experienceLevels = [
  { display: "Entry Level", schema: "no requirements" },
  { display: "Mid Level",   schema: "2 years experience" },
  { display: "Senior Level",schema: "5 years experience" },
  { display: "Lead",        schema: "7 years experience" },
  { display: "Manager",     schema: "5 years experience" },
  { display: "Director",    schema: "8 years experience" },
  { display: "Executive",   schema: "10 years experience" }
];

const industries = [
  "Technology", "Fintech", "E-commerce", "Banking & Finance", "Oil & Gas",
  "Real Estate", "Healthcare", "Education", "Consulting", "Aviation",
  "Construction", "Logistics & Shipping", "Hospitality", "Retail", "Media & Entertainment",
  "Renewable Energy", "Automotive", "Telecommunications", "Legal", "Government",
  "Pharmaceuticals", "Aerospace & Defence"
];

const jobDescriptions = [
  (title, company, isRemote, location) => `We are seeking a talented ${title} to join the team at ${company} in the UK. ${isRemote ? "This is a fully remote role open to qualified candidates across the United Kingdom." : `This role is based in ${location}.`}

You will be responsible for delivering high-quality work that drives business outcomes and contributes to ${company}'s growing operations in the UK and European markets.

Key Responsibilities:
• Lead and execute core ${title.toLowerCase()} functions across the organization
• Collaborate with cross-functional teams to deliver on strategic objectives
• Analyze data and provide actionable insights to improve performance
• Mentor junior team members and contribute to knowledge sharing
• Ensure best practices are followed in all deliverables

Requirements:
• 3–5 years of experience in a similar ${title.toLowerCase()} role
• Strong communication and problem-solving skills
• Experience working in fast-paced global business environment
• Bachelor's degree in a relevant field
• Proficiency with modern tools and platforms

What We Offer:
• Competitive salary in GBP (£)
• Comprehensive health benefits
• 28 days annual leave
• Remote work allowance
• Annual performance bonus
• Professional development budget
• Pension scheme`,

  (title, company, isRemote, location) => `${company} is hiring a ${title}! We are a leading company in the UK looking for experienced professionals to scale our impact across the country.

${isRemote ? "This remote-first position allows you to work from anywhere in the UK with flexible hours." : `You will work from our ${location} office with a dynamic, ambitious team.`}

About the Role:
As a ${title} at ${company}, you will play a key role in shaping our products and services. You'll work closely with leadership and peers to execute on our mission.

What You'll Do:
• Drive key ${title.toLowerCase()} initiatives from planning to execution
• Build and maintain relationships with key stakeholders
• Report on KPIs and contribute to strategic planning
• Stay updated on industry trends globally and in the UK
• Represent ${company} with professionalism and integrity

What You Bring:
• 2–6 years proven experience as a ${title.toLowerCase()}
• Strong analytical and communication skills
• Team player with a growth mindset
• Relevant certification or degree preferred

Compensation & Benefits:
• Competitive GBP salary • Health benefits • Annual leave (28 days) • Pension scheme • Performance bonus`,

  (title, company, isRemote, location) => `Join ${company} as a ${title} and be part of one of the UK's most exciting companies!

${isRemote ? "🌐 Remote | Work from anywhere in the UK" : `📍 ${location}`}

We're building the future of business in the UK and need exceptional talent like you. This is a rare opportunity to work with a world-class brand.

The Opportunity:
You'll be taking on the ${title} role at a critical growth stage. Your work will directly impact millions of customers across the UK and beyond.

Day-to-Day Responsibilities:
• Execute and improve key workflows within the ${title.toLowerCase()} function
• Collaborate with product, engineering, and business teams
• Track metrics and optimize for performance
• Contribute to a culture of excellence and innovation
• Support senior leadership with reporting and strategy

Your Profile:
• 3+ years in ${title.toLowerCase()} or related field
• Comfortable in a fast-moving business ecosystem
• Strong interpersonal skills and professional work ethic
• Degree in relevant discipline (Master's is a plus)

Perks at ${company}:
Competitive salary | Health & dental benefits | Pension scheme | Annual bonus | 28 days leave | Learning budget | Flexible hours`
];

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function getJobData(id) {
  const seed = id * 7919;
  const r = (offset = 0) => seededRandom(seed + offset);

  const isRemote = id <= TOTAL_JOBS / 2;

  const companyIndex = Math.floor((id - 1) / Math.ceil(TOTAL_JOBS / companies.length)) % companies.length;

  const titleIndex   = Math.floor(r(1) * jobTitles.length);
  const locationIndex= Math.floor(r(3) * ukLocations.length);
  const salaryIndex  = Math.floor(r(4) * salaryRanges.length);
  const jobTypeIndex = Math.floor(r(5) * jobTypes.length);
  const expIndex     = Math.floor(r(6) * experienceLevels.length);
  const industryIndex= Math.floor(r(7) * industries.length);
  const descIndex    = Math.floor(r(8) * jobDescriptions.length);

  const title    = jobTitles[titleIndex];
  const company  = companies[companyIndex];
  const location = isRemote ? "Remote — UK" : ukLocations[locationIndex];
  const salary   = salaryRanges[salaryIndex];
  const jobType  = jobTypes[jobTypeIndex];
  const exp      = experienceLevels[expIndex];
  const industry = industries[industryIndex];
  const description = jobDescriptions[descIndex](title, company, isRemote, ukLocations[locationIndex]);

  const daysAgo = Math.floor(r(9) * 60);
  const postedDate = new Date();
  postedDate.setDate(postedDate.getDate() - daysAgo);
  const validThrough = new Date(postedDate);
  validThrough.setDate(validThrough.getDate() + 90);

  return {
    id,
    title,
    company,
    location,
    salary: salary.display,
    salaryMin: salary.min,
    salaryMax: salary.max,
    jobType,
    jobTypeDisplay: jobTypeDisplay[jobType],
    experience: exp.display,
    experienceSchema: exp.schema,
    industry,
    isRemote,
    description,
    postedDate: postedDate.toISOString().split('T')[0],
    validThrough: validThrough.toISOString().split('T')[0],
    slug: `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`
  };
}

function getJobSchema(job) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": job.company,
      "value": `JOB-UK-${String(job.id).padStart(6, '0')}`
    },
    "datePosted": job.postedDate,
    "validThrough": `${job.validThrough}T00:00:00Z`,
    "employmentType": job.jobType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": `https://www.google.com/search?q=${encodeURIComponent(job.company)}`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.isRemote ? "UK" : job.location.split(',')[0],
        "addressCountry": "GB"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "GBP",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.salaryMin,
        "maxValue": job.salaryMax,
        "unitText": "MONTH"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": job.experienceSchema === "no requirements" ? 0
        : parseInt(job.experienceSchema) * 12
    },
    "industry": job.industry,
    "url": `/jobs/${job.id}`,
    "directApply": true
  };

  if (job.isRemote) {
    schema.jobLocationType = "TELECOMMUTE";
  }

  return schema;
}

module.exports = { getJobData, getJobSchema, TOTAL_JOBS, jobTitles, companies, ukLocations, industries };
