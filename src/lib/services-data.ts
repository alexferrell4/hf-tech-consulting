export type ServiceIconKey =
  | "Zap"
  | "Code2"
  | "Globe"
  | "Cloud"
  | "BarChart3"
  | "FileText"
  | "Headphones"
  | "Megaphone";

export type ProcessStep = { title: string; description: string };

export type Service = {
  icon: ServiceIconKey;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  features: string[];
  intro: string;
  problem: string[];
  whoFor: string[];
  process: ProcessStep[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    icon: "Zap",
    slug: "workflow-automation",
    title: "Workflow Automation",
    shortTitle: "Workflow Automation",
    description:
      "Automating repetitive tasks, notifications, document management, and business processes using cloud-based solutions like Zapier, Make, Power Automate, and custom integrations.",
    metaDescription:
      "Workflow automation services for Houston businesses: automate repetitive tasks, notifications, and document processes with Zapier, Make, Power Automate, and custom integrations.",
    features: [
      "Process mapping and optimization",
      "Custom automation workflows",
      "System integrations",
      "Automated reporting and notifications",
    ],
    intro:
      "Workflow automation is the use of software to handle repetitive, rule-based business tasks — like data entry, notifications, approvals, and document routing — automatically, without someone having to do it by hand every time.",
    problem: [
      "Most small and midsize businesses run on a patchwork of manual steps: someone copies data from an email into a spreadsheet, another person forwards a form to the right department, a third checks a folder each morning to see what came in overnight. Individually, none of these tasks take long. Added up across a week, they quietly consume hours that could go toward serving customers or growing the business.",
      "The cost isn't just time. Manual handoffs are where things get missed — a follow-up that never happens, a document that gets filed in the wrong place, a client who doesn't hear back because the person who normally handles it was out sick. Automation doesn't replace your team; it removes the parts of the job that are repetitive, error-prone, and forgettable, so people can focus on the parts that actually require judgment.",
    ],
    whoFor: [
      "Businesses where the same multi-step task happens dozens of times a week (intake, onboarding, invoicing, scheduling)",
      "Teams that rely on manual data entry between two or more systems that don't talk to each other",
      "Healthcare providers, home care agencies, and counseling practices with recurring compliance or documentation workflows",
      "Growing businesses whose current processes worked at a smaller scale but are starting to break down",
    ],
    process: [
      {
        title: "Process Discovery",
        description:
          "We walk through your current process step by step — what triggers it, who's involved, and where the friction actually is — before recommending anything.",
      },
      {
        title: "Workflow Design",
        description:
          "We map out what the automated version looks like, including the tools involved (Zapier, Make, Power Automate, or a custom integration) and any exceptions that still need a human in the loop.",
      },
      {
        title: "Build & Test",
        description:
          "We build the automation in a staging environment and run it against real scenarios before it touches live data, so nothing breaks the first time it runs.",
      },
      {
        title: "Launch & Support",
        description:
          "Once live, we monitor the workflow, document how it works, and stay available to adjust it as your process or tools change.",
      },
    ],
    outcomes: [
      "Fewer manual, repetitive tasks pulling staff away from higher-value work",
      "Fewer dropped handoffs between people, departments, or systems",
      "Faster turnaround on routine requests like intake, scheduling, and follow-ups",
      "A documented, repeatable process instead of one that lives in someone's head",
    ],
  },
  {
    icon: "Code2",
    slug: "custom-software-development",
    title: "Custom Software & Application Development",
    shortTitle: "Custom Software Development",
    description:
      "Designing and developing web applications, dashboards, internal business tools, and mobile solutions tailored to organizational needs.",
    metaDescription:
      "Custom software development for small and midsize businesses in Houston, TX — web applications, internal tools, dashboards, and integrations built around your actual workflow.",
    features: [
      "Web applications",
      "Internal business tools",
      "API development",
      "Mobile-responsive design",
    ],
    intro:
      "Custom software development means building an application, tool, or dashboard specifically around how your business actually operates, instead of adapting your process to fit an off-the-shelf product.",
    problem: [
      "Off-the-shelf software is built for the average customer, not your business. It's common to end up paying for a dozen features you'll never use while the one workflow that matters most to your operation still has to be handled in a spreadsheet or on paper. Over time, businesses accumulate a stack of tools that each solve part of the problem, none of which connect to each other.",
      "Custom software closes that gap. Instead of forcing your team to work around a generic tool, the software is designed around the way your business actually runs — the fields you need, the approvals you require, and the reports your team actually looks at.",
    ],
    whoFor: [
      "Businesses whose core process doesn't fit neatly into an off-the-shelf product",
      "Teams currently tracking critical information in spreadsheets that have outgrown them",
      "Organizations that need an internal tool or dashboard specific to their operations",
      "Businesses that need two or more existing systems connected through a custom integration or API",
    ],
    process: [
      {
        title: "Requirements & Scope",
        description:
          "We start by understanding the problem you're solving, not just the features you think you want, and define a clear, realistic scope.",
      },
      {
        title: "Design & Architecture",
        description:
          "We plan the structure of the application — data model, user flow, and integrations — before writing production code.",
      },
      {
        title: "Development",
        description:
          "We build in stages so you can see and test working software along the way, rather than waiting until the very end.",
      },
      {
        title: "Deployment & Ongoing Support",
        description:
          "We deploy, train your team on the new tool, and remain available for updates, fixes, and future enhancements.",
      },
    ],
    outcomes: [
      "A tool built around your actual workflow instead of a generic template",
      "Less reliance on spreadsheets and manual tracking for critical business data",
      "One system your team can rely on instead of several disconnected tools",
      "Software you own and can continue to evolve as your business changes",
    ],
  },
  {
    icon: "Globe",
    slug: "website-management",
    title: "Website Management & Support",
    shortTitle: "Website Management",
    description:
      "Website maintenance, SSL certificate management, hosting support, domain management, security updates, and troubleshooting.",
    metaDescription:
      "Website management and support services in Houston, TX: maintenance, hosting, SSL and domain management, security updates, and troubleshooting for small business websites.",
    features: [
      "Website maintenance",
      "SSL & security management",
      "Hosting & domain support",
      "Performance optimization",
    ],
    intro:
      "Website management is the ongoing maintenance, security, and technical support that keeps a business website running correctly after it's been built — not a one-time project, but a continuous responsibility.",
    problem: [
      "A website is often treated as a project with a finish line: it launches, and then it's forgotten. In reality, websites need ongoing attention — software and plugin updates, SSL certificate renewals, domain renewals, security patches, and periodic checks to make sure forms, links, and pages are still working correctly. Left unmanaged, a site can slowly become slow, insecure, or simply broken, often without the owner noticing until a customer mentions it.",
      "Most small businesses don't have anyone dedicated to watching for this. The result is websites that quietly degrade — an expired SSL certificate that shows visitors a security warning, a contact form that stopped submitting months ago, or a domain that lapses because a renewal email got buried.",
    ],
    whoFor: [
      "Business owners who don't have the time or technical background to maintain their own site",
      "Businesses whose website was built by a freelancer or agency that's no longer available",
      "Sites experiencing slow load times, broken forms, or outdated plugins and themes",
      "Businesses that need someone accountable for hosting, domains, and security, not just design",
    ],
    process: [
      {
        title: "Site Audit",
        description:
          "We review your current site's hosting, security, performance, and functionality to identify what needs attention first.",
      },
      {
        title: "Stabilization",
        description:
          "We fix urgent issues — expired certificates, broken forms, outdated software — before moving to ongoing maintenance.",
      },
      {
        title: "Ongoing Maintenance",
        description:
          "We handle recurring updates, backups, and monitoring so the site stays secure and functional without you having to think about it.",
      },
      {
        title: "Support & Improvements",
        description:
          "We're available for content updates, troubleshooting, and incremental improvements as your business and website needs evolve.",
      },
    ],
    outcomes: [
      "A website that stays secure, updated, and online without you managing it yourself",
      "Fewer surprises like expired certificates, lapsed domains, or broken forms",
      "One point of contact for hosting, domains, and technical issues",
      "A site that keeps working correctly as browsers and technology change",
    ],
  },
  {
    icon: "Cloud",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortTitle: "Cloud Solutions",
    description:
      "Implementation and management of cloud-based platforms, storage solutions, collaboration tools, and business applications.",
    metaDescription:
      "Cloud solutions for small and midsize businesses in Houston, TX — cloud migration, infrastructure setup, and secure collaboration tools tailored to how your team works.",
    features: [
      "Cloud migration",
      "Infrastructure setup",
      "Security configuration",
      "Cost optimization",
    ],
    intro:
      "Cloud solutions cover the platforms, storage, and collaboration tools — like Microsoft 365, Google Workspace, or cloud storage and backup systems — that let your business run and be accessed from anywhere, securely.",
    problem: [
      "Businesses that still rely on local file storage, on-premise servers, or a mix of personal accounts for file sharing tend to run into the same issues: files that only exist on one computer, no reliable backup, and no clear way for a remote or growing team to collaborate. When a laptop is lost or a hard drive fails, there's often no real recovery plan.",
      "Moving to the cloud solves the availability problem, but it introduces a new one if it's done carelessly: misconfigured sharing permissions, unmanaged storage costs, and accounts with no consistent security settings. The goal isn't just to move data to the cloud — it's to do it in a way that's secure, organized, and actually cheaper and easier to manage than what you had before.",
    ],
    whoFor: [
      "Businesses still relying on local storage, personal drives, or no formal backup system",
      "Teams that work remotely, across multiple locations, or need to collaborate in real time",
      "Businesses migrating from an outdated on-premise server or legacy system",
      "Organizations that need clearer control over file access, sharing, and permissions",
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We review your current storage, tools, and team structure to determine the right cloud platform and setup for how you actually work.",
      },
      {
        title: "Migration Planning",
        description:
          "We plan the move to avoid downtime or data loss, including how existing files and permissions will be organized in the new environment.",
      },
      {
        title: "Implementation",
        description:
          "We configure the platform, set up secure sharing and permissions, and migrate your data.",
      },
      {
        title: "Training & Support",
        description:
          "We train your team on the new tools and remain available to adjust configuration and troubleshoot as you settle in.",
      },
    ],
    outcomes: [
      "Files and data accessible securely from anywhere, on any device",
      "A real backup and recovery plan instead of relying on a single computer",
      "Clearer, more consistent control over who can access what",
      "Cloud costs and storage organized around what your business actually needs",
    ],
  },
  {
    icon: "BarChart3",
    slug: "data-analytics-reporting",
    title: "Data Analytics & Reporting",
    shortTitle: "Data Analytics & Reporting",
    description:
      "Developing dashboards, reports, and visualization tools that transform business data into actionable insights.",
    metaDescription:
      "Data analytics and reporting services for small businesses in Houston, TX — custom dashboards, automated reports, and clear visualizations built from your existing data.",
    features: [
      "Custom dashboards",
      "Automated reports",
      "Data visualization",
      "KPI tracking",
    ],
    intro:
      "Data analytics and reporting is the process of turning the information your business already collects — sales, scheduling, operations, finances — into dashboards and reports that make it easy to see what's actually happening.",
    problem: [
      "Most businesses have more data than they realize — it's just scattered across spreadsheets, point-of-sale systems, scheduling software, and accounting tools, none of which talk to each other. Getting a straight answer to a simple question like \"how did last month compare to the month before\" often means pulling numbers manually from three different places.",
      "Without a clear view of the numbers, decisions end up based on gut feeling instead of what's actually happening in the business. A dashboard or reporting system doesn't create new data — it organizes what you already have into something you can actually look at and act on.",
    ],
    whoFor: [
      "Business owners who currently pull reports manually from multiple systems",
      "Teams tracking key numbers in spreadsheets that are hard to keep updated or trust",
      "Businesses that want a clear, recurring view of performance without building it themselves",
      "Organizations that need to report on outcomes to a board, funder, or leadership team",
    ],
    process: [
      {
        title: "Identify Key Metrics",
        description:
          "We work with you to define what actually needs to be tracked, instead of building a dashboard that just looks impressive.",
      },
      {
        title: "Connect Data Sources",
        description:
          "We connect the systems that already hold your data — POS, scheduling, accounting, CRM — into a single reporting source.",
      },
      {
        title: "Build Dashboards & Reports",
        description:
          "We build dashboards and automated reports that present the numbers clearly, on a schedule that matches how you make decisions.",
      },
      {
        title: "Refine & Support",
        description:
          "We adjust reporting as your business changes and stay available to add new metrics or data sources over time.",
      },
    ],
    outcomes: [
      "A clear, current view of the numbers that matter to your business",
      "Less time spent manually pulling and compiling reports each week or month",
      "Decisions grounded in what the data actually shows",
      "Reporting your team can trust and actually understands",
    ],
  },
  {
    icon: "Megaphone",
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    description:
      "Helping businesses grow their online presence through social media management, content creation, SEO, paid advertising, branding, and data-driven marketing strategies.",
    metaDescription:
      "Digital marketing services for small businesses in Houston, TX — SEO, social media management, content creation, and paid advertising built around measurable results.",
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
    intro:
      "Digital marketing covers the channels — search, social media, email, and paid advertising — that help potential customers find and choose your business online.",
    problem: [
      "Many small businesses have a website and a social media page, but no real strategy connecting them: inconsistent posting, no clear message about who they serve, and no way to tell whether any of it is actually bringing in business. Marketing efforts that aren't tied to a plan or measured against results tend to fade out after a few months.",
      "At the same time, businesses don't need to be everywhere at once. Effective digital marketing usually means picking the one or two channels that actually reach your audience and doing them consistently and well, rather than spreading thin across every platform.",
    ],
    whoFor: [
      "Businesses with a website or social presence that isn't generating leads",
      "Local businesses that want to be found more easily in search results",
      "Businesses that want a consistent brand and message across their online presence",
      "Organizations that need marketing efforts tracked against actual performance, not guesswork",
    ],
    process: [
      {
        title: "Audit & Strategy",
        description:
          "We review your current online presence and define a realistic strategy focused on the channels most likely to reach your customers.",
      },
      {
        title: "Content & Setup",
        description:
          "We build out the content, campaigns, and technical SEO foundation needed to execute the strategy.",
      },
      {
        title: "Launch & Manage",
        description:
          "We manage day-to-day execution — posting, campaigns, and optimization — so marketing stays consistent.",
      },
      {
        title: "Measure & Adjust",
        description:
          "We track performance against clear goals and adjust the approach based on what's actually working.",
      },
    ],
    outcomes: [
      "A more consistent, professional online presence across channels",
      "Better visibility in local and organic search results",
      "Marketing activity tied to a strategy instead of one-off posts",
      "Clear reporting on what's working so budget goes where it performs",
    ],
  },
  {
    icon: "FileText",
    slug: "digital-forms-document-management",
    title: "Digital Forms & Document Management",
    shortTitle: "Digital Forms & Document Management",
    description:
      "Creating electronic intake forms, document workflows, automated notifications, and secure record management systems.",
    metaDescription:
      "Digital forms and document management for healthcare providers and small businesses in Houston, TX — electronic intake, e-signatures, and secure, compliance-ready records.",
    features: [
      "Digital form creation",
      "E-signature integration",
      "Document automation",
      "Compliance tracking",
    ],
    intro:
      "Digital forms and document management replace paper intake forms, filing cabinets, and manual document routing with secure electronic forms, e-signatures, and organized digital records.",
    problem: [
      "Paper-based intake and recordkeeping create real operational risk: forms that get lost, handwriting that's hard to read, records that are difficult to search, and no reliable audit trail for who accessed what and when. For healthcare providers, home care agencies, and counseling practices in particular, this isn't just inconvenient — it's a compliance liability.",
      "Digital forms and document workflows solve this by making intake, consent, and recordkeeping consistent every time: the same required fields, automatic routing to the right person, and a searchable, secure record instead of a filing cabinet.",
    ],
    whoFor: [
      "Healthcare providers, home care agencies, and counseling practices with client or patient intake",
      "Businesses that still rely on paper forms, faxes, or manual filing",
      "Organizations that need e-signatures for contracts, consent, or agreements",
      "Teams that need better audit trails and compliance tracking for records",
    ],
    process: [
      {
        title: "Form & Workflow Mapping",
        description:
          "We review your current intake and document process to understand required fields, approvals, and compliance requirements.",
      },
      {
        title: "Digital Form Design",
        description:
          "We build electronic forms and e-signature workflows that match your existing process, so staff and clients don't have to relearn anything.",
      },
      {
        title: "Automation & Routing",
        description:
          "We set up automated notifications and routing so completed forms reach the right person without manual follow-up.",
      },
      {
        title: "Secure Storage & Support",
        description:
          "We organize records in a secure, searchable system and remain available to adjust forms as requirements change.",
      },
    ],
    outcomes: [
      "Consistent, complete intake and consent forms every time",
      "Faster processing with less manual follow-up and re-keying of information",
      "A secure, searchable record system instead of paper filing",
      "A clearer audit trail to support compliance requirements",
    ],
  },
  {
    icon: "Headphones",
    slug: "it-support",
    title: "IT Infrastructure & Technical Support",
    shortTitle: "IT Support",
    description:
      "Providing troubleshooting, system administration, network support, and technology recommendations.",
    metaDescription:
      "IT support and infrastructure services for small businesses in Houston, TX — troubleshooting, system administration, network support, and technology recommendations.",
    features: [
      "Technology assessment",
      "System administration",
      "Network support",
      "Technology recommendations",
    ],
    intro:
      "IT support covers the day-to-day technical help — troubleshooting, system administration, network issues, and technology decisions — that keeps a business's computers, software, and network running.",
    problem: [
      "Small businesses often don't have the volume of IT issues to justify a full-time hire, but they still run into real technical problems: a slow network, a computer that won't connect to a printer, software that needs to be set up correctly for a new employee, or a decision about what hardware or software to buy next. Without support, these issues either go unresolved or eat up time that should go toward running the business.",
      "The alternative to a full in-house IT department isn't doing without support — it's having a consultant available when something breaks or a decision needs to be made, without paying for a full-time role you don't need.",
    ],
    whoFor: [
      "Small businesses without a dedicated in-house IT person",
      "Growing teams that need help onboarding new employees with the right technology",
      "Businesses facing recurring, unresolved technical issues",
      "Organizations that want an outside opinion before making a technology purchase",
    ],
    process: [
      {
        title: "Technology Assessment",
        description:
          "We review your current hardware, software, and network setup to identify existing issues and risks.",
      },
      {
        title: "Recommendations",
        description:
          "We provide clear, practical recommendations — not the most expensive option, but the one that fits your business.",
      },
      {
        title: "Implementation & Support",
        description:
          "We handle setup, troubleshooting, and system administration as issues come up.",
      },
      {
        title: "Ongoing Availability",
        description:
          "We remain available for support, questions, and future technology decisions as your business grows.",
      },
    ],
    outcomes: [
      "Technical issues resolved without hiring a full-time IT employee",
      "Clearer, more confident technology decisions",
      "Less downtime from unresolved network or system issues",
      "A consistent point of contact for IT problems as they come up",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

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
