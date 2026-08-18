export type ServiceIconKey =
  | "Zap"
  | "Code2"
  | "Globe"
  | "Cloud"
  | "BarChart3"
  | "FileText"
  | "Headphones";

export const services: {
  icon: ServiceIconKey;
  title: string;
  description: string;
  features: string[];
}[] = [
  {
    icon: "Zap",
    title: "Workflow Automation",
    description: "Automating repetitive tasks, notifications, document management, and business processes using cloud-based solutions like Zapier, Make, Power Automate, and custom integrations.",
    features: ["Process mapping and optimization", "Custom automation workflows", "System integrations", "Automated reporting and notifications"],
  },
  {
    icon: "Code2",
    title: "Custom Software & Application Development",
    description: "Designing and developing web applications, dashboards, internal business tools, and mobile solutions tailored to organizational needs.",
    features: ["Web applications", "Internal business tools", "API development", "Mobile-responsive design"],
  },
  {
    icon: "Globe",
    title: "Website Management & Support",
    description: "Website maintenance, SSL certificate management, hosting support, domain management, security updates, and troubleshooting.",
    features: ["Website maintenance", "SSL & security management", "Hosting & domain support", "Performance optimization"],
  },
  {
    icon: "Cloud",
    title: "Cloud Solutions",
    description: "Implementation and management of cloud-based platforms, storage solutions, collaboration tools, and business applications.",
    features: ["Cloud migration", "Infrastructure setup", "Security configuration", "Cost optimization"],
  },
  {
    icon: "BarChart3",
    title: "Data Analytics & Reporting",
    description: "Developing dashboards, reports, and visualization tools that transform business data into actionable insights.",
    features: ["Custom dashboards", "Automated reports", "Data visualization", "KPI tracking"],
  },
  {
    icon: "BarChart3",
    title: "Digital Marketing",
    description:
      "Helping businesses grow their online presence through social media management, content creation, SEO, paid advertising, branding, and data-driven marketing strategies.",
    features: [
      "Social media management",
      "Content creation",
      "SEO optimization",
      "Email marketing",
      "Paid advertising",
      "Brand strategy",
      "Analytics & performance tracking",
      "Marketing campaign management",
    ],
  },
  {
    icon: "FileText",
    title: "Digital Forms & Document Management",
    description: "Creating electronic intake forms, document workflows, automated notifications, and secure record management systems.",
    features: ["Digital form creation", "E-signature integration", "Document automation", "Compliance tracking"],
  },
  {
    icon: "Headphones",
    title: "IT Infrastructure & Technical Support",
    description: "Providing troubleshooting, system administration, network support, and technology recommendations.",
    features: ["Technology assessment", "System administration", "Network support", "Technology recommendations"],
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "What does a technology consultant do for a small business?",
    answer:
      "A technology consultant reviews a business's existing systems and workflows, then recommends and implements tools—such as automation, cloud platforms, custom software, and IT support—that reduce manual work, cut costs, and support growth.",
  },
  {
    question: "How much does business automation cost?",
    answer:
      "Cost depends on how many processes are automated and how complex the systems involved are. Most engagements start with a discovery consultation to scope the work and provide a project-based or ongoing support quote tailored to your budget.",
  },
  {
    question: "When should a business hire an IT consultant?",
    answer:
      "Businesses typically bring in an IT consultant when manual processes are consuming too much staff time, when growth is outpacing existing systems, when compliance or data security needs increase, or when they need a website or software built and maintained without a full in-house IT team.",
  },
  {
    question: "How can healthcare organizations automate administrative workflows?",
    answer:
      "Healthcare providers, home care agencies, and counseling practices can automate intake forms, appointment reminders, document management, and compliance tracking with secure digital forms and workflow automation, reducing administrative burden while keeping records organized and audit-ready.",
  },
  {
    question: "What is workflow automation?",
    answer:
      "Workflow automation uses software to handle repetitive, rule-based tasks—like sending notifications, routing documents, or updating records—automatically, so staff can focus on higher-value work instead of manual data entry.",
  },
];
