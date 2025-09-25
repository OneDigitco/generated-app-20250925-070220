import { Briefcase, Gavel, Home, Landmark, Scale, ShieldCheck, BookOpen, FileText, ClipboardCheck, Building, HardHat, Tractor, Plane, Factory, Construction, University } from 'lucide-react';
import { BlogPost, TrainingWorkshop, LegalResource, HealthCheckQuestion, Industry, PropertyTrackerData } from './types';
export const firmInfo = {
  name: "CD Maseko Attorneys & Conveyancers",
  shortName: "CD Maseko",
  headline: "Excellence in Legal Solutions",
  subheadline: "Comprehensive legal services for employment, property, and litigation matters across Mpumalanga and beyond.",
  cta: "Book Appointment",
  description: "CD Maseko Attorneys & Conveyancers is Mpumalanga's premier full-service legal practice, combining deep expertise in employment law and property transactions with comprehensive litigation capabilities. For over 18 years, we have served businesses, organizations, and individuals throughout the province, delivering practical legal solutions that drive success and protect interests. Our firm uniquely bridges the gap between complex employment matters and property transactions, making us the go-to legal partner for businesses expanding in Mpumalanga's dynamic economy.",
};
export const keyStatistics = [
  { value: "18+", label: "Years of Legal Excellence" },
  { value: "2,000+", label: "Employment Matters Handled" },
  { value: "1,500+", label: "Property Transactions Completed" },
  { value: "300+", label: "Disciplinary Hearings Chaired" },
];
export const aboutUsContent = {
  history: "CD Maseko Attorneys & Conveyancers was established in 2005 by Advocate Comfort Daniel Maseko, who recognized the growing need for specialized legal services in Mpumalanga's rapidly developing economy. As the province experienced significant growth in mining, agriculture, and tourism sectors, there was a clear demand for legal expertise that could handle both the employment complexities of expanding businesses and the property transactions fueling development. Starting with a focus on employment law, the firm quickly expanded to include conveyancing services as clients needed comprehensive legal support for their business operations. Today, CD Maseko Attorneys & Conveyancers is recognized as one of Mpumalanga's most versatile and reliable legal practices. The firm has grown from a single-attorney practice to a dynamic team of specialists, but maintains its founding principle of providing practical, results-oriented legal services that understand the unique challenges and opportunities of doing business in Mpumalanga.",
  mission: "To provide comprehensive, practical legal solutions that empower businesses and individuals to thrive in Mpumalanga's dynamic economy while ensuring full legal compliance and protection.",
  philosophy: {
    title: '"Doing What is Right"',
    text: "This siSwati principle guides every aspect of our practice. We believe that good legal advice must be both technically sound and practically achievable, always serving the best interests of our clients while maintaining the highest ethical standards."
  },
  values: [
    { title: "Excellence", description: "Striving for outstanding results in every matter" },
    { title: "Reliability", description: "Consistent, dependable service our clients can count on" },
    { title: "Understanding", description: "Deep comprehension of client needs and local context" },
    { title: "Care", description: "Genuine concern for client success and well-being" },
    { title: "Collaboration", description: "Working together with clients to achieve goals" },
    { title: "Integrity", description: "Honest, ethical practice in all circumstances" },
  ]
};
export const teamMembers = [
  {
    name: "Adv. Comfort Daniel B. Maseko",
    role: "Founder & Managing Partner",
    email: "comfort@cdmaseko-attorneys.co.za",
    specializations: "Employment Law, High Court Litigation, Business Law",
    education: "LLB (Wits), LLM Labor Law (UCT), Cert. in Advanced Litigation (Wits)",
    admitted: 2003,
    bio: "Comfort is a distinguished employment law specialist with over 20 years of experience. He regularly appears before the Labour Court and has handled some of Mpumalanga's most significant employment disputes. He is also a certified chairperson for disciplinary hearings.",
    achievements: [
      "Successfully defended major mining company in R50 million retrenchment dispute (2019)",
      "Chaired over 300 disciplinary hearings with 98% procedural compliance rate",
      "Developed employment policies for 50+ Mpumalanga businesses"
    ],
    imageUrl: `https://i.pravatar.cc/500?u=comfort`
  },
  {
    name: "Adv. Nomsa Beauty T. Nkambule",
    role: "Senior Partner",
    email: "nomsa@cdmaseko-attorneys.co.za",
    specializations: "Conveyancing, Property Law, Commercial Property Transactions",
    education: "LLB (UKZN), LLM Property Law (Wits), Cert. in Advanced Conveyancing",
    admitted: 2007,
    bio: "Nomsa leads our property law division and is one of Mpumalanga's most experienced conveyancers. She has facilitated property transactions worth over R2 billion and specializes in commercial and agricultural property transfers.",
    achievements: [],
    imageUrl: `https://i.pravatar.cc/500?u=nomsa`
  },
  {
    name: "Adv. Sipho Raymond K. Dlamini",
    role: "Partner",
    email: "sipho@cdmaseko-attorneys.co.za",
    specializations: "Civil Litigation, Contract Law, Commercial Disputes",
    education: "LLB (Wits), LLM Commercial Litigation (UCT)",
    admitted: 2009,
    bio: "Sipho is our head of litigation with extensive experience in commercial disputes and civil trials. He has appeared in numerous High Court cases and is known for his strategic approach to complex litigation matters.",
    achievements: [],
    imageUrl: `https://i.pravatar.cc/500?u=sipho`
  },
  {
    name: "Adv. Thandi Grace M. Magagula",
    role: "Senior Associate",
    email: "thandi@cdmaseko-attorneys.co.za",
    specializations: "Occupational Health & Safety, Employment Compliance, Risk Management",
    education: "LLB (UNISA), LLM Occupational Health Law (Wits), Cert. in Safety Management",
    admitted: 2012,
    bio: "Thandi specializes in occupational health and safety law, helping businesses achieve compliance with complex safety regulations. She conducts regular training workshops for employers across various industries.",
    achievements: [],
    imageUrl: `https://i.pravatar.cc/500?u=thandi`
  },
  {
    name: "Adv. Mandla Justice P. Mthembu",
    role: "Associate",
    email: "mandla@cdmaseko-attorneys.co.za",
    specializations: "Contract Management, Employment Training, Corporate Compliance",
    education: "LLB (UKZN), LLM Corporate Law (UCT)",
    admitted: 2015,
    bio: "Mandla focuses on contract management and corporate compliance. He regularly conducts training sessions on employment-related matters and has developed compliance programs for numerous Mpumalanga businesses.",
    achievements: [],
    imageUrl: `https://i.pravatar.cc/500?u=mandla`
  },
  {
    name: "Adv. Lindiwe Faith S. Shongwe",
    role: "Junior Associate",
    email: "lindiwe@cdmaseko-attorneys.co.za",
    specializations: "Property Transfers, Residential Conveyancing, Estate Administration",
    education: "LLB (University of Mpumalanga), Currently pursuing LLM Property Law",
    admitted: 2019,
    bio: "Lindiwe handles residential property transfers and estate administration matters. She is passionate about making property ownership accessible to first-time buyers and emerging businesses.",
    achievements: [],
    imageUrl: `https://i.pravatar.cc/500?u=lindiwe`
  }
];
export const services = [
  {
    title: "Employment Law",
    icon: Briefcase,
    description: "Our employment law practice is the most comprehensive in Mpumalanga, serving businesses from small enterprises to major corporations. We provide both advisory services and representation in disputes, always focusing on practical solutions that protect our clients' interests.",
    items: [
      "Employment contract drafting and review",
      "Disciplinary procedure development and implementation",
      "Retrenchment planning and execution",
      "Employment equity compliance and planning",
      "Skills development act compliance",
      "BBBEE employment strategies",
      "Collective bargaining support",
      "Union recognition and agreements",
      "Employment dispute resolution",
      "Labour Court and CCMA representation",
    ]
  },
  {
    title: "Disciplinary Hearing Services",
    icon: Gavel,
    description: "We provide expert, independent chairing of disciplinary hearings to ensure procedural fairness and mitigate legal risks for employers.",
    items: [
      "Independent disciplinary hearing chairpersons",
      "Disciplinary procedure design and training",
      "Investigation management",
      "Appeal hearing chairing",
      "Misconduct case evaluation",
      "Procedural compliance audits",
    ]
  },
  {
    title: "Civil Litigation & High Court",
    icon: Scale,
    description: "Our litigation team handles complex commercial and civil disputes with a track record of success in both High Court and Magistrate Court proceedings. We provide strategic litigation management from initial assessment through to final resolution.",
    items: [
      "Commercial dispute resolution",
      "Contract breach litigation",
      "Property-related disputes",
      "Debt recovery and collection",
      "Professional negligence claims",
      "Urgent court applications and interdicts",
    ]
  },
  {
    title: "Property Law & Conveyancing",
    icon: Home,
    description: "Our property division handles all aspects of property transactions, from residential transfers to major commercial developments. We ensure smooth, legally compliant transactions while protecting our clients' investments.",
    items: [
      "Residential property transfers",
      "Commercial property transactions",
      "Agricultural land transfers",
      "Sectional title developments",
      "Mortgage bond registrations",
      "Estate property administration",
    ]
  },
  {
    title: "Occupational Health & Safety",
    icon: ShieldCheck,
    description: "We help businesses navigate complex occupational health and safety regulations while creating safer workplaces. Our approach combines legal compliance with practical safety management.",
    items: [
      "OHS compliance audits and assessments",
      "Safety policy development and implementation",
      "Accident investigation and reporting",
      "Mine Health and Safety Act compliance",
      "Risk assessment and management",
      "Regulatory compliance monitoring",
    ]
  },
  {
    title: "Contract & Business Law",
    icon: Landmark,
    description: "We provide comprehensive contract services that protect business interests and ensure legal compliance. Our contract management approach focuses on preventing disputes while maximizing business opportunities.",
    items: [
      "Contract drafting and review",
      "Supplier and vendor agreements",
      "Commercial lease agreements",
      "Joint venture and partnership agreements",
      "Terms and conditions development",
      "Business structure advice",
    ]
  },
  {
    title: "Training & Development",
    icon: BookOpen,
    description: "Our training division provides practical, engaging training on employment and legal matters, delivered by experienced attorneys who understand both the law and business realities.",
    items: [
      "Employment law fundamentals for managers",
      "Disciplinary hearing procedures and practices",
      "Occupational health and safety compliance",
      "Contract management essentials",
      "Labour relations and dispute resolution",
      "Performance management and documentation",
    ]
  }
];
export const testimonials = [
  {
    quote: "When we faced a major employment dispute, CD Maseko Attorneys provided both legal expertise and practical guidance. Their understanding of local business conditions made all the difference.",
    author: "Mining Company Executive",
    location: "Mpumalanga",
    title: "Kutsi Ngalokuhle - They Do What's Right"
  },
  {
    quote: "Our commercial property acquisition was complex, but Advocate Nkambule made it seamless. Her attention to detail and efficiency saved us both time and money.",
    author: "Property Developer",
    location: "Mbombela",
    title: "Exceptional Property Services"
  },
  {
    quote: "Advocate Dlamini's strategic approach to our contract dispute resulted in a settlement that exceeded our expectations. Professional service throughout.",
    author: "Manufacturing Company",
    location: "Nelspruit",
    title: "Outstanding Litigation Results"
  }
];
export const contactInfo = {
  email: "info@cdmaseko-attorneys.co.za",
  phone: "+27 13 752 1234", // Placeholder
  physicalAddress: {
    line1: "8th Floor, Nedbank Building",
    line2: "1129 Brown Street",
    city: "Mbombela, 1200",
    province: "Mpumalanga"
  },
  postalAddress: {
    line1: "P.O. Box 76543",
    city: "Mbombela, 1200"
  },
  officeHours: {
    weekdays: "Monday - Friday: 07:30 - 17:00",
    saturday: "Saturday: 08:00 - 12:00 (Urgent matters and property signings)",
    sunday: "Sunday: Closed"
  },
  departments: [
    { name: "General Enquiries", email: "info@cdmaseko-attorneys.co.za" },
    { name: "Employment Law", email: "employment@cdmaseko-attorneys.co.za" },
    { name: "Property Transfers", email: "property@cdmaseko-attorneys.co.za" },
    { name: "Litigation Matters", email: "litigation@cdmaseko-attorneys.co.za" },
    { name: "Training Bookings", email: "training@cdmaseko-attorneys.co.za" },
    { name: "Urgent Legal Matters", email: "urgent@cdmaseko-attorneys.co.za" },
  ]
};
export const blogPosts: BlogPost[] = [
  {
    slug: "new-employment-equity-regulations",
    title: "New Employment Equity Regulations: What Mpumalanga Businesses Need to Know",
    author: "Adv. Comfort Daniel B. Maseko",
    date: "August 15, 2023",
    excerpt: "The latest amendments to the Employment Equity Act have significant implications for businesses in Mpumalanga. We break down the key changes and what you need to do to ensure compliance.",
    content: `
      <p>The recent amendments to the Employment Equity Act (EEA) introduce sectoral numerical targets, a significant shift from the previous framework. This change aims to accelerate transformation across various industries by setting specific demographic goals for different occupational levels.</p>
      <h3 class="font-bold mt-4 mb-2">Key Changes for Mpumalanga Businesses:</h3>
      <ul>
        <li><strong>Sectoral Targets:</strong> Businesses with more than 50 employees must now develop and submit employment equity plans that align with the five-year sectoral targets set by the Minister of Employment and Labour.</li>
        <li><strong>Compliance Certificates:</strong> A valid Employment Equity Compliance Certificate is now a prerequisite for doing business with the state. This affects any company in Mpumalanga bidding for government tenders.</li>
        <li><strong>Consultation is Crucial:</strong> The amendments emphasize the need for meaningful consultation with employees and trade unions when developing EE plans.</li>
      </ul>
      <p class="mt-4">Our firm can assist your business in auditing your current EE status, developing a compliant plan, and navigating the consultation process to ensure you meet the new requirements and contribute positively to economic transformation in the region.</p>
    `,
    tags: ["Employment Law", "Compliance", "Mpumalanga Business"]
  },
  {
    slug: "property-investment-in-mpumalanga",
    title: "Property Investment in Mpumalanga: Legal Considerations for Developers",
    author: "Adv. Nomsa Beauty T. Nkambule",
    date: "July 28, 2023",
    excerpt: "Mpumalanga's property market is booming, but developers must navigate a complex legal landscape. Here are the key legal considerations for a successful property development project.",
    content: `
      <p>Mpumalanga offers immense opportunities for property developers, particularly in the tourism, agriculture, and commercial sectors. However, successful investment requires careful legal planning.</p>
      <h3 class="font-bold mt-4 mb-2">Essential Legal Steps:</h3>
      <ol>
        <li><strong>Due Diligence:</strong> Before purchase, conduct a thorough due diligence investigation. This includes verifying title deeds, checking for land claims, and understanding zoning regulations and land use rights.</li>
        <li><strong>Environmental Compliance:</strong> Many areas in Mpumalanga are environmentally sensitive. An Environmental Impact Assessment (EIA) is often required, and failure to comply can lead to significant fines and project delays.</li>
        <li><strong>Development Approvals:</strong> Securing approvals from local municipalities for subdivisions, consolidations, and building plans is a critical step that requires meticulous preparation of documents.</li>
      </ol>
      <p class="mt-4">Our conveyancing and property law division has extensive experience guiding developers through every stage of this process, from land acquisition to final registration, ensuring your investment is secure and legally sound.</p>
    `,
    tags: ["Property Law", "Conveyancing", "Investment", "Development"]
  },
  {
    slug: "disciplinary-hearings-procedural-fairness",
    title: "Disciplinary Hearings: Best Practices for Procedural Fairness",
    author: "Adv. Sipho Raymond K. Dlamini",
    date: "June 12, 2023",
    excerpt: "Ensuring procedural fairness in disciplinary hearings is not just good practice—it's a legal requirement. We outline the essential steps to protect your business from unfair dismissal claims.",
    content: `
      <p>A procedurally unfair disciplinary hearing can result in a CCMA or Labour Court ruling against an employer, even if there was a valid reason for the dismissal. To mitigate this risk, employers must follow a fair process.</p>
      <h3 class="font-bold mt-4 mb-2">Core Principles of Procedural Fairness:</h3>
      <ul>
        <li><strong>Notice:</strong> The employee must be given reasonable, written notice of the charges against them, in a language they understand.</li>
        <li><strong>Right to be Heard:</strong> The employee must have the opportunity to state their case, present evidence, and call witnesses.</li>
        <li><strong>Representation:</strong> The employee has the right to be represented by a fellow employee or a trade union representative.</li>
        <li><strong>Impartial Chairperson:</strong> The hearing must be overseen by an impartial chairperson who has not been involved in the case prior to the hearing.</li>
      </ul>
      <p class="mt-4">Using an independent, external chairperson from our firm can significantly enhance the impartiality and fairness of your disciplinary proceedings, providing a robust defense against potential legal challenges.</p>
    `,
    tags: ["Disciplinary Hearings", "Employment Law", "Risk Management"]
  }
];
export const trainingWorkshops: TrainingWorkshop[] = [
  {
    title: "Employment Law Fundamentals for Managers",
    description: "Equip your management team with the essential knowledge to handle day-to-day HR issues confidently and legally.",
    date: "October 25, 2023",
    duration: "Full Day",
    instructor: "Adv. Comfort Daniel B. Maseko",
    topics: ["Contracts of Employment", "Basic Conditions of Employment Act", "Disciplinary Procedures", "Performance Management"]
  },
  {
    title: "Advanced Disciplinary Hearing Procedures",
    description: "A deep dive into the complexities of chairing hearings, evidence assessment, and ensuring procedural fairness in complex cases.",
    date: "November 15, 2023",
    duration: "Full Day",
    instructor: "Adv. Sipho Raymond K. Dlamini",
    topics: ["Initiating an Inquiry", "Leading Evidence", "Cross-Examination", "Sanctioning", "Crafting the Outcome"]
  },
  {
    title: "OHS Compliance for the Construction Industry",
    description: "Navigate the specific challenges and legal requirements of the Occupational Health and Safety Act within the construction sector.",
    date: "December 5, 2023",
    duration: "Half Day",
    instructor: "Adv. Thandi Grace M. Magagula",
    topics: ["Construction Regulations 2014", "Risk Assessments", "Fall Protection Plans", "Incident Investigation"]
  },
  {
    title: "Contract Management Essentials for Business",
    description: "Learn how to draft, review, and manage commercial contracts to minimize risk and maximize business outcomes.",
    date: "January 22, 2024",
    duration: "Half Day",
    instructor: "Adv. Mandla Justice P. Mthembu",
    topics: ["Key Contractual Clauses", "Negotiation Strategies", "Breach of Contract", "Dispute Resolution"]
  }
];
export const legalResources: LegalResource[] = [
  {
    title: "Employment Law Handbook for Managers",
    description: "A comprehensive guide covering the essentials of South African employment law for line managers and HR professionals.",
    category: "Employment Law",
    fileUrl: "/resources/employment-law-handbook.pdf",
    icon: Briefcase,
  },
  {
    title: "Property Transfer Process Guide",
    description: "An easy-to-follow guide that demystifies the property transfer and conveyancing process for buyers and sellers.",
    category: "Property Law",
    fileUrl: "/resources/property-transfer-guide.pdf",
    icon: Home,
  },
  {
    title: "OHS Compliance Checklist",
    description: "A practical checklist to help businesses conduct a basic audit of their Occupational Health and Safety compliance.",
    category: "Occupational Health & Safety",
    fileUrl: "/resources/ohs-compliance-checklist.pdf",
    icon: ShieldCheck,
  },
  {
    title: "Contract Management Best Practices",
    description: "Key principles and best practices for effective contract lifecycle management to minimize risk and maximize value.",
    category: "Contract & Business Law",
    fileUrl: "/resources/contract-management-practices.pdf",
    icon: Landmark,
  },
  {
    title: "Disciplinary Hearing Procedure Template",
    description: "A template to guide employers in conducting procedurally fair disciplinary hearings.",
    category: "Employment Law",
    fileUrl: "/resources/disciplinary-hearing-template.pdf",
    icon: Gavel,
  },
];
export const healthCheckQuestions: HealthCheckQuestion[] = [
  {
    id: 'q1',
    category: 'Employment Law',
    text: 'Do all your employees have written contracts of employment that are compliant with the Basic Conditions of Employment Act?',
    options: [
      { text: 'Yes, all of them', riskScore: 0 },
      { text: 'Most of them do', riskScore: 2 },
      { text: 'Only some have them', riskScore: 4 },
      { text: 'No, we don’t use written contracts', riskScore: 5 },
    ],
  },
  {
    id: 'q2',
    category: 'Employment Law',
    text: 'Do you have a formal, written disciplinary code and procedure that is accessible to all employees?',
    options: [
      { text: 'Yes, and it\'s regularly updated', riskScore: 0 },
      { text: 'Yes, but it might be outdated', riskScore: 2 },
      { text: 'No, we handle issues informally', riskScore: 5 },
    ],
  },
  {
    id: 'q3',
    category: 'Contract & Business Law',
    text: 'Are your standard client and supplier agreements reviewed by a legal professional?',
    options: [
      { text: 'Yes, always', riskScore: 0 },
      { text: 'Sometimes, for large contracts', riskScore: 2 },
      { text: 'No, we use standard templates from the internet', riskScore: 4 },
      { text: 'We don\'t have standard agreements', riskScore: 5 },
    ],
  },
  {
    id: 'q4',
    category: 'Corporate Compliance',
    text: 'Is your company registered with CIPC and are your annual returns up to date?',
    options: [
      { text: 'Yes, everything is current', riskScore: 0 },
      { text: 'I believe so, but I\'m not certain', riskScore: 2 },
      { text: 'No, we are behind on filings', riskScore: 5 },
    ],
  },
  {
    id: 'q5',
    category: 'Occupational Health & Safety',
    text: 'Have you conducted a formal OHS risk assessment for your workplace in the last 2 years?',
    options: [
      { text: 'Yes, and we have an active OHS committee', riskScore: 0 },
      { text: 'We did one a while ago', riskScore: 3 },
      { text: 'No, we have not', riskScore: 5 },
    ],
  },
];
export const industryExpertise: Industry[] = [
  {
    name: "Mining & Resources",
    icon: HardHat,
    description: "We provide specialized legal support for Mpumalanga's core industry, navigating complex regulations in employment, safety, and property for major mining houses and suppliers.",
    services: ["Mine Health and Safety Act compliance", "Retrenchment planning for large-scale operations", "Property acquisitions for mining expansions", "Environmental compliance and rehabilitation funds"],
    image: "https://images.unsplash.com/photo-1516822495602-49dbe433940f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Agriculture",
    icon: Tractor,
    description: "Our firm supports Mpumalanga's agricultural backbone, from family farms to large agribusinesses, with expertise in land transactions, labor relations, and regulatory compliance.",
    services: ["Agricultural land transfers and leases", "Seasonal worker employment contracts", "Water rights and usage agreements", "Supply chain and export contract management"],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Tourism & Hospitality",
    icon: Plane,
    description: "We cater to the legal needs of the vibrant tourism sector, assisting lodges, tour operators, and hotels with employment matters, property development, and commercial contracts.",
    services: ["Hospitality employment law", "Commercial leases for tourism properties", "Regulatory compliance for tour operators", "Joint venture agreements for tourism projects"],
    image: "https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Manufacturing",
    icon: Factory,
    description: "We assist manufacturing clients with industrial relations, safety compliance, and commercial disputes, helping them maintain productivity and mitigate legal risks.",
    services: ["Union negotiations and collective bargaining", "OHS compliance for factory environments", "Commercial dispute resolution", "Supplier and distribution agreements"],
    image: "https://images.unsplash.com/photo-1580982327042-5726855b41ce?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Construction",
    icon: Construction,
    description: "Our legal services for the construction industry cover safety regulations, contracts, and property development, ensuring projects are built on a solid legal foundation.",
    services: ["Construction Regulations compliance", "JBCC and FIDIC contract advisory", "Property development legal support", "Dispute resolution and arbitration"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Government & Parastatals",
    icon: University,
    description: "We have extensive experience advising government departments and state-owned entities on employment compliance, procurement contracts, and administrative law.",
    services: ["Public sector employment law", "Procurement and tender legal review", "Service Level Agreement (SLA) drafting", "Litigation and dispute resolution"],
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2070&auto=format&fit=crop"
  }
];
export const affiliations = [
  { name: "The Legal Practice Council", logoUrl: "/logos/lpc-logo.png" },
  { name: "Kruger Lowveld Chamber of Business and Tourism", logoUrl: "/logos/klcbt-logo.png" },
  { name: "South African Society for Labour Law", logoUrl: "/logos/saslaw-logo.png" },
  { name: "Mpumalanga Show", logoUrl: "/logos/mpumalanga-show-logo.png" },
];
export const mockPropertyTrackerData: Record<string, PropertyTrackerData> = {
  "CDM12345": {
    reference: "CDM12345",
    propertyDescription: "Erf 456, Riverside Park, Mbombela",
    seller: "J. Smith",
    buyer: "P. Nkosi",
    status: "Lodged at Deeds Office",
    estimatedCompletion: "2023-12-15",
    stages: [
      { name: "Instruction Received & FICA", status: "completed", date: "2023-10-05", details: "All parties' FICA documentation received and verified." },
      { name: "Drafting of Transfer Documents", status: "completed", date: "2023-10-12", details: "Transfer documents drafted and sent to parties for signature." },
      { name: "Documents Signed", status: "completed", date: "2023-10-20", details: "All transfer documents signed by both seller and purchaser." },
      { name: "Transfer Duty Receipt Received", status: "completed", date: "2023-11-02", details: "Payment made to SARS and receipt obtained." },
      { name: "Rates Clearance Certificate", status: "completed", date: "2023-11-10", details: "Application made and certificate received from the municipality." },
      { name: "Lodged at Deeds Office", status: "in_progress", date: "2023-11-15", details: "Documents have been lodged with the Mpumalanga Deeds Office for examination." },
      { name: "Registration of Transfer", status: "pending", date: null, details: "Awaiting completion of examination by the Deeds Office." },
      { name: "Final Accounts & Payout", status: "pending", date: null, details: "To be completed after successful registration." },
    ]
  }
};
export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      team: "Our Team",
      contact: "Contact",
      blog: "Blog",
    },
    home: {
      headline: "Excellence in Legal Solutions",
      subheadline: "Comprehensive legal services for employment, property, and litigation matters across Mpumalanga and beyond.",
      cta: "Book Appointment",
      overviewTitle: "Mpumalanga's Premier Legal Practice",
      overviewText: "CD Maseko Attorneys & Conveyancers is Mpumalanga's premier full-service legal practice, combining deep expertise in employment law and property transactions with comprehensive litigation capabilities. For over 18 years, we have served businesses, organizations, and individuals throughout the province, delivering practical legal solutions that drive success and protect interests. Our firm uniquely bridges the gap between complex employment matters and property transactions, making us the go-to legal partner for businesses expanding in Mpumalanga's dynamic economy.",
      servicesTitle: "Our Areas of Expertise",
      servicesSubtitle: "Delivering specialized legal solutions across key practice areas.",
      exploreServices: "Explore All Services",
      testimonialsTitle: "What Our Clients Say",
      testimonialsSubtitle: "Building lasting relationships through trust and exceptional results.",
      ctaBottomTitle: "Partner with Mpumalanga's Legal Experts",
      ctaBottomSubtitle: "Let us help you navigate your legal challenges with confidence. Schedule a consultation today to discuss your needs.",
      ctaBottomButton: "Request a Consultation",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "We are here to provide expert legal guidance. Reach out to us to schedule a consultation.",
      formTitle: "Send us a Message",
      formName: "Your Name",
      formEmail: "Your Email",
      formSubject: "Subject",
      formMessage: "Your Message",
      formSend: "Send Message",
      formSending: "Sending...",
      successMessage: "Thank you! Your message has been sent.",
      errorMessage: "An error occurred. Please try again.",
    }
  },
  ss: {
    nav: {
      home: "Likhaya",
      about: "Mayelana Natsi",
      services: "Tinsita Tetfu",
      team: "Licembu Letfu",
      contact: "Sitsintse",
      blog: "Tibhalo",
    },
    home: {
      headline: "Buchwepheshe Kutetixazululo Temtsetfo",
      subheadline: "Tinsita temtsetfo letiphelele temisebenti, tipropathi, kanye netindzaba tekutekula kuyo yonkhe iMpumalanga nangetulu.",
      cta: "Bhuka Kuhlangana",
      overviewTitle: "Luhlangotsi Lwetemtsetfo Loluhamba Embili eMpumalanga",
      overviewText: "CD Maseko Attorneys & Conveyancers luhlangotsi lwetemtsetfo loluhamba embili eMpumalanga, luhlanganisa bucwepheshe lobujulile emtsetfweni wetemisebenti kanye nasekudlulisweni kwetipropathi kanye nemakhono ekutekula. Sekuphele iminyaka lengetulu kwa-18 sisita emabhizinisi, tinhlangano, kanye nebantfu kuso sonkhe sifundza, siniketa tixazululo temtsetfo letisebentako letiletfusa imphumelelo futsi tivikele tintsandvo. Luhlangotsi lwetfu luhlanganisa ngendlela lehlukile tindzaba letiyinkimbinkimbi tetemisebenti kanye nekudluliswa kwetipropathi, lokusenta sibe ngumlingani wetemtsetfo wekucala emabhizinisini lakhulako emnotfweni weMpumalanga lotsintsekako.",
      servicesTitle: "Tindzawo Tetfu Tebuchwepheshe",
      servicesSubtitle: "Kunikeza tixazululo temtsetfo letikhetsekile kuto tonkhe tindzawo letisemqoka.",
      exploreServices: "Hlola Tonkhe Tinsita",
      testimonialsTitle: "Lokushiwo NgemaKlayenti Etfu",
      testimonialsSubtitle: "Kwakha buhlobo lobuhlala njalo ngekwetsembeka kanye nemiphumela lemihle kakhulu.",
      ctaBottomTitle: "Sebentisana Nebachwepheshe Betemtsetfo baseMpumalanga",
      ctaBottomSubtitle: "Asikusite ungene etinkingeni takho temtsetfo ngekwetsemba. Hlela kuhlangana natsi lamuhla kute sicocisane ngetidzingo takho.",
      ctaBottomButton: "Cela Kuhlangana Natsi",
    },
    contact: {
      title: "Sitsintse",
      subtitle: "Silapha kute sinikete seluleko setemtsetfo lesibucwepheshe. Sitsintse kute uhlele kuhlangana.",
      formTitle: "Sitfumelele Umlayeto",
      formName: "Libito Lakho",
      formEmail: "I-imeyili Yakho",
      formSubject: "Sihloko",
      formMessage: "Umlayeto Wakho",
      formSend: "Tfumela Umlayeto",
      formSending: "Kuyatfunyelwa...",
      successMessage: "Siyabonga! Umlayeto wakho usutfunyelwe.",
      errorMessage: "Kwenzeke liphutsa. Sicela uzame futsi.",
    }
  }
};