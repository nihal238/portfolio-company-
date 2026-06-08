export const NAV_ITEMS = [
  { label:"Home",      path:"/" },
  { label:"About",     path:"/about" },
  { label:"Services",  path:"/services" },
  { label:"Portfolio", path:"/portfolio" },
  { label:"Team",      path:"/team" },
  { label:"Blog",      path:"/blog" },
  { label:"Careers",   path:"/careers" },
  { label:"Contact",   path:"/contact" },
];

export const SERVICES = [
  { icon:"💻", title:"Custom Software",  color:"#6C63FF", desc:"Tailored enterprise applications built from the ground up to fit your unique workflows and business logic." },
  { icon:"📱", title:"Mobile Apps",      color:"#00D9A5", desc:"Cross-platform iOS & Android apps with pixel-perfect UIs and seamless native performance." },
  { icon:"☁️", title:"Cloud Solutions",  color:"#FF6B6B", desc:"Scalable cloud architecture on AWS, Azure & GCP — from migration to full DevOps pipelines." },
  { icon:"🤖", title:"AI & Automation",  color:"#FFB547", desc:"ML models, intelligent bots, and workflow automations that save time and reduce cost." },
  { icon:"🔐", title:"Cybersecurity",    color:"#C471ED", desc:"End-to-end security audits, penetration testing, and compliance frameworks." },
  { icon:"📊", title:"Data Analytics",   color:"#3DD6F5", desc:"Turn raw data into actionable insight with dashboards, BI tools, and predictive models." },
];

export const PROJECTS = [
  { id:1, title:"FinFlow ERP",             category:"Web Apps",   client:"ManufactureX Ltd",       year:"2024", duration:"8 months",  team:"12 engineers",                   tags:["React","Node.js","PostgreSQL","AWS"],     color:"#6C63FF", accent:"#A89CFF", emoji:"🏭", summary:"End-to-end ERP covering procurement, inventory, HR, and finance for a 500-person manufacturer.", impact:["40% faster reporting","Zero downtime migration","₹2.4Cr annual savings"] },
  { id:2, title:"NeuralCare Diagnostics",  category:"AI / ML",    client:"HealthBridge India",     year:"2024", duration:"10 months", team:"8 engineers + 3 data scientists", tags:["Python","TensorFlow","FastAPI","React"], color:"#00D9A5", accent:"#00F5BC", emoji:"🧠", summary:"AI-powered diagnostic assistant flagging anomalies in radiology scans with 97.3% accuracy.",   impact:["97.3% detection accuracy","70% faster diagnosis","14 hospitals"] },
  { id:3, title:"ShopSphere",              category:"E-Commerce", client:"Retail Ventures Pvt Ltd",year:"2023", duration:"6 months",  team:"9 engineers",                    tags:["Next.js","Shopify API","Stripe","Redis"], color:"#FF6B6B", accent:"#FF9F9F", emoji:"🛍️",summary:"High-performance multi-vendor platform handling 10K+ daily orders with real-time inventory.",     impact:["10K+ daily orders","99.98% uptime","3× conversion lift"] },
  { id:4, title:"LogiTrack Mobile",        category:"Mobile",     client:"FastMove Logistics",     year:"2023", duration:"5 months",  team:"6 engineers",                    tags:["React Native","Firebase","Maps API"],    color:"#FFB547", accent:"#FFD080", emoji:"🚚", summary:"Cross-platform driver & dispatch app with live GPS, route optimization, and proof-of-delivery.",  impact:["35% fuel savings","Real-time tracking","4.8★ App Store"] },
  { id:5, title:"PredictIQ",               category:"AI / ML",    client:"Apex Fintech",           year:"2023", duration:"7 months",  team:"5 engineers + 4 data scientists", tags:["Python","PyTorch","Kafka","GCP"],        color:"#00BFFF", accent:"#66DEFF", emoji:"📈", summary:"Real-time fraud detection & credit-risk scoring engine processing 2M+ transactions per day.",   impact:["₹18Cr fraud prevented","2M+ daily txns","<50ms latency"] },
  { id:6, title:"CampusConnect",           category:"Mobile",     client:"EduSphere Network",      year:"2022", duration:"4 months",  team:"5 engineers",                    tags:["Flutter","Django","WebSockets"],         color:"#C471ED", accent:"#E0A0FF", emoji:"🎓", summary:"University super-app: timetables, hostel, canteen orders, and campus events — all in one.",       impact:["50K active students","4.9★ rating","12 universities"] },
  { id:7, title:"LuxeCart",                category:"E-Commerce", client:"Prestige Lifestyle Co.", year:"2022", duration:"5 months",  team:"7 engineers",                    tags:["Vue.js","Magento 2","Elasticsearch"],    color:"#D4AF37", accent:"#F0D060", emoji:"💎", summary:"Luxury D2C storefront with AR try-on, personalised recommendations, and white-glove checkout.", impact:["220% revenue growth","AR try-on","₹4.2Cr GMV/mo"] },
  { id:8, title:"CityPulse Dashboard",     category:"Web Apps",   client:"Smart City Mission",     year:"2022", duration:"9 months",  team:"14 engineers",                   tags:["React","D3.js","Python","PostgreSQL"],   color:"#3DD6F5", accent:"#80EAFF", emoji:"🏙️", summary:"Real-time smart city monitoring — traffic, utilities, air quality, and citizen grievances.",     impact:["18 departments","Live IoT data","Govt. award winner"] },
];

export const TEAM = [
  { name:"Arjun Mehta",  role:"CEO & Co-Founder",        init:"AM", color:"#6C63FF", bio:"15 years in enterprise software. Previously at Infosys & TCS. Drives strategy and client relationships." },
  { name:"Priya Sharma", role:"CTO & Lead Architect",    init:"PS", color:"#00D9A5", bio:"Ex-Google SWE. Specialises in distributed systems, cloud-native architecture, and AI integration." },
  { name:"Rahul Desai",  role:"Head of Product",         init:"RD", color:"#FF6B6B", bio:"Product veteran with 10+ years building SaaS tools. Obsessed with user experience and outcome metrics." },
  { name:"Neha Patel",   role:"Director of Engineering", init:"NP", color:"#FFB547", bio:"Full-stack engineering leader. Scaled teams from 5 to 50. Champion of agile delivery and code quality." },
  { name:"Vikram Joshi", role:"Head of AI & Data",       init:"VJ", color:"#00BFFF", bio:"ML researcher turned practitioner. Published in NeurIPS. Leads our AI & automation practice." },
  { name:"Meera Iyer",   role:"Head of Design",          init:"MI", color:"#C471ED", bio:"UX strategist with a background in human-computer interaction. Shapes how all Softonex products feel." },
];

export const STATS = [
  { val:"12+",  label:"Years Experience" },
  { val:"300+", label:"Projects Delivered" },
  { val:"98%",  label:"Client Retention" },
  { val:"50+",  label:"Expert Engineers" },
];

export const TESTIMONIALS = [
  { quote:"Softonex transformed our entire operations with a custom ERP. Delivery was on time, on budget — and the quality was exceptional.", name:"Sanjay Kulkarni", company:"ManufactureX Ltd",  avatar:"SK" },
  { quote:"Their AI automation suite cut our processing time by 70%. The team is incredibly responsive and technically brilliant.",            name:"Deepa Nair",       company:"HealthBridge India", avatar:"DN" },
  { quote:"We've worked with many vendors. None come close to the strategic thinking and execution quality Softonex brings.",                  name:"Michael Torres",   company:"Apex Fintech",       avatar:"MT" },
];

export const BLOG_POSTS = [
  { id:1, title:"Building Production-Ready AI Pipelines in 2024",            category:"AI / ML",       date:"May 12, 2024",  read:"7 min", color:"#00D9A5", emoji:"🤖", excerpt:"From data ingestion to model serving — how we architect ML systems that hold up under real load." },
  { id:2, title:"Why React Native Still Wins for Cross-Platform in 2024",    category:"Mobile",        date:"Apr 3, 2024",   read:"5 min", color:"#6C63FF", emoji:"📱", excerpt:"We ran the numbers across 10 projects. Here's when Flutter wins, and when React Native is the right call." },
  { id:3, title:"The Hidden Costs of Legacy ERP Systems",                    category:"Enterprise",    date:"Mar 18, 2024",  read:"6 min", color:"#FF6B6B", emoji:"🏭", excerpt:"Three real migrations we led — and what CFOs wished they'd known before the project kicked off." },
  { id:4, title:"Micro-Frontend Architecture: Lessons from a 2-Year Journey",category:"Web Apps",      date:"Feb 27, 2024",  read:"8 min", color:"#FFB547", emoji:"🧩", excerpt:"What we got right, what broke in production, and why we'd still choose micro-frontends for large teams." },
  { id:5, title:"Securing SaaS: A Practical Checklist for Startups",         category:"Cybersecurity", date:"Jan 14, 2024",  read:"6 min", color:"#C471ED", emoji:"🔐", excerpt:"The 20-point security review we run on every client codebase before launch. No fluff, just steps." },
  { id:6, title:"Data Dashboards That Actually Get Used",                    category:"Analytics",     date:"Dec 5, 2023",   read:"5 min", color:"#3DD6F5", emoji:"📊", excerpt:"Most dashboards are built for demos, not decisions. Here's the design process we use to flip that." },
];

export const JOBS = [
  { id:1, title:"Senior React Developer",      dept:"Engineering",  location:"Rajkot / Remote", type:"Full-time", color:"#6C63FF",
    desc:"Build complex, scalable frontend applications for our enterprise clients. You'll own architecture decisions and mentor junior devs.",
    req:["5+ years React","TypeScript","REST & GraphQL","Testing (Jest/Cypress)"] },
  { id:2, title:"ML Engineer",                 dept:"AI & Data",    location:"Rajkot / Remote", type:"Full-time", color:"#00D9A5",
    desc:"Design and deploy machine learning pipelines for healthcare and fintech clients. Work on real-world high-stakes AI systems.",
    req:["Python","PyTorch or TensorFlow","MLOps","Production deployment experience"] },
  { id:3, title:"React Native Developer",      dept:"Mobile",       location:"Rajkot",          type:"Full-time", color:"#FFB547",
    desc:"Craft beautiful, performant mobile apps for both iOS and Android. You care deeply about animation and UX detail.",
    req:["3+ years React Native","Native modules","App Store deployment","Strong UI instincts"] },
  { id:4, title:"UI/UX Designer",              dept:"Design",       location:"Rajkot / Remote", type:"Full-time", color:"#C471ED",
    desc:"Own the design process from research to high-fidelity prototypes. You'll work directly with clients and engineering teams.",
    req:["Figma expert","User research","Design systems","Motion design a plus"] },
  { id:5, title:"DevOps / Cloud Engineer",     dept:"Infrastructure",location:"Remote",         type:"Full-time", color:"#FF6B6B",
    desc:"Manage and evolve our cloud infrastructure on AWS and GCP. Own CI/CD pipelines, monitoring, and incident response.",
    req:["AWS or GCP certified","Terraform","Kubernetes","Strong scripting skills"] },
  { id:6, title:"Business Development Manager",dept:"Sales",        location:"Rajkot / Mumbai", type:"Full-time", color:"#3DD6F5",
    desc:"Drive new client relationships across India and the Middle East. You understand technology well enough to sell it credibly.",
    req:["5+ years in tech sales","Strong network","CRM tools","Excellent communication"] },
];
