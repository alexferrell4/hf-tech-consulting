export type Faq = { question: string; answer: string };
export type FaqCategory = { category: string; faqs: Faq[] };

export const faqCategories: FaqCategory[] = [
  {
    category: "General",
    faqs: [
      {
        question: "What does a technology consultant do for a small business?",
        answer:
          "A technology consultant reviews a business's existing systems and workflows, then recommends and implements tools—such as automation, cloud platforms, custom software, and IT support—that reduce manual work, cut costs, and support growth.",
      },
      {
        question: "When should a business hire an IT consultant?",
        answer:
          "Businesses typically bring in an IT consultant when manual processes are consuming too much staff time, when growth is outpacing existing systems, when compliance or data security needs increase, or when they need a website or software built and maintained without a full in-house IT team.",
      },
      {
        question: "Do you work with businesses outside of Houston?",
        answer:
          "H.F. Tech Consulting is based in Houston, Texas, and works with businesses throughout the Greater Houston area and across Texas. Because most of what we do—automation, custom software, cloud setup, and IT support—can be delivered remotely, we're also able to support clients beyond Texas where it makes sense.",
      },
    ],
  },
  {
    category: "Services & Pricing",
    faqs: [
      {
        question: "How much does business automation cost?",
        answer:
          "Cost depends on how many processes are automated and how complex the systems involved are. Most engagements start with a discovery consultation to scope the work and provide a project-based or ongoing support quote tailored to your budget.",
      },
      {
        question: "What is workflow automation?",
        answer:
          "Workflow automation uses software to handle repetitive, rule-based tasks—like sending notifications, routing documents, or updating records—automatically, so staff can focus on higher-value work instead of manual data entry.",
      },
      {
        question: "Do you offer ongoing support, or only one-time projects?",
        answer:
          "Both. Some clients need a defined project—like a new website or a single automated workflow—while others prefer ongoing support to maintain systems, add features over time, and handle IT issues as they come up.",
      },
    ],
  },
  {
    category: "Process",
    faqs: [
      {
        question: "What happens during the first consultation?",
        answer:
          "The first consultation is a conversation about how your business currently operates—what's manual, what's slow, and where technology could help. From there, you'll get a recommendation for the smallest solution that solves the real problem, along with a scope and estimate.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Timelines vary by scope. A single automated workflow might take a few days to a couple of weeks, while a custom software build or full website can take several weeks to a few months. You'll get a realistic timeline as part of the project scope before work begins.",
      },
      {
        question: "Will I work directly with the person doing the work?",
        answer:
          "Yes. The person who scopes your project is the same person who builds it, and the same person you call when something needs to change—there's no rotating account team or hand-offs between departments.",
      },
    ],
  },
  {
    category: "Healthcare & Industries",
    faqs: [
      {
        question: "How can healthcare organizations automate administrative workflows?",
        answer:
          "Healthcare providers, home care agencies, and counseling practices can automate intake forms, appointment reminders, document management, and compliance tracking with secure digital forms and workflow automation, reducing administrative burden while keeping records organized and audit-ready.",
      },
      {
        question: "Can workflow automation help with HIPAA-related documentation requirements?",
        answer:
          "Automation itself doesn't make an organization compliant, but well-designed digital workflows—secure forms, controlled access, and organized, searchable records—make it easier to maintain the consistent documentation and audit trail that compliance requirements call for, compared to paper files or scattered spreadsheets.",
      },
      {
        question: "Do you work with small healthcare practices, or only larger organizations?",
        answer:
          "Most of the healthcare, home care, and counseling organizations we work with are small to midsize—practices and agencies that need better systems but don't have an in-house IT or compliance department.",
      },
    ],
  },
];

export const faqs: Faq[] = faqCategories.flatMap((category) => category.faqs);
