export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  intro: string[];
  sections: BlogSection[];
  relatedServices: string[];
  image?: string;
  gallery?: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "how-workflow-automation-saves-time",
    title: "How Workflow Automation Saves Small Business Owners Time Every Week",
    description:
      "A practical look at where small businesses lose time to manual, repetitive tasks — and how workflow automation gets those hours back.",
    excerpt:
      "Manual, repetitive tasks quietly eat hours every week. Here's how to find them and what automating them actually looks like.",
    category: "Automation",
    publishedAt: "2026-06-02",
    author: "Harrison Ferrell",
    intro: [
      "If you asked most small business owners where their time goes, few would say \"manual data entry\" or \"forwarding emails to the right person.\" But those small, repetitive tasks are often exactly where the hours disappear — not in one dramatic time sink, but in dozens of two- and three-minute tasks scattered across the week.",
    ],
    sections: [
      {
        heading: "Doing the math on a single process",
        paragraphs: [
          "Take a simple example: a new client fills out an intake form, and someone on your team copies that information into a scheduling system, sends a confirmation email, and adds a reminder to follow up in a week. That whole sequence might take five minutes. If it happens ten times a week, that's under an hour — easy to overlook.",
          "Now stack a few of these processes on top of each other: intake, invoicing, appointment reminders, weekly reporting, and onboarding new employees or vendors. Each one has its own small, repeated sequence of manual steps. It's not unusual for a growing business to be running six or seven of these processes at once, and for the combined total to add up to several hours a week — sometimes more, depending on how many of these steps are already manual.",
        ],
      },
      {
        heading: "Why these tasks are easy to miss",
        paragraphs: [
          "Repetitive tasks don't feel like a problem in the moment because each individual instance is small. The cost only becomes visible when you add it up over a month, or when you try to figure out why a straightforward week suddenly felt overwhelming. It's also common for these tasks to be split across different people, so no single person sees the full picture of how much manual work the process actually involves.",
        ],
      },
      {
        heading: "What automation actually changes",
        paragraphs: [
          "Workflow automation doesn't mean replacing your team or making decisions that require judgment. It means taking the parts of a process that follow the same steps every time — data entry, notifications, routing a document to the right person, updating a status — and letting software handle them consistently, without someone having to remember to do it.",
          "In practice, this usually looks like connecting the tools you already use (a form, a scheduling app, email, a spreadsheet or database) so that information flows between them automatically instead of being retyped by hand. The tools involved — Zapier, Make, Power Automate, or a custom integration — matter less than mapping out the process correctly first.",
        ],
      },
      {
        heading: "Where to start",
        list: [
          "Pick the process that happens most often, not the one that seems most complex",
          "Write out every manual step involved, including the small ones",
          "Look for the points where information is copied from one place to another by hand",
          "Automate the repetitive middle steps first, and keep a human checkpoint wherever judgment is genuinely required",
        ],
      },
      {
        heading: "The real payoff",
        paragraphs: [
          "The value of automation isn't just the time saved — it's consistency. An automated process runs the same way every time, whether it's the first task of the day or the last, and whether the person who normally handles it is in the office or not. For a small business, that consistency is often worth more than the hours themselves.",
        ],
      },
    ],
    relatedServices: ["workflow-automation", "digital-forms-document-management"],
  },
  {
    slug: "custom-software-vs-off-the-shelf",
    title: "Custom Software vs. Off-the-Shelf: How to Choose",
    description:
      "A framework for deciding when an off-the-shelf tool is the right call for your business, and when custom software actually makes more sense.",
    excerpt:
      "Off-the-shelf software isn't wrong for most businesses — but it's wrong for some processes. Here's how to tell the difference.",
    category: "Software Development",
    publishedAt: "2026-06-23",
    author: "Harrison Ferrell",
    intro: [
      "Every business eventually asks the same question: should we buy an off-the-shelf tool, or build something custom? The honest answer is that off-the-shelf software is the right call most of the time — it's cheaper, faster to set up, and maintained by someone else. The real question isn't which option is generally better. It's whether your specific process is one of the exceptions.",
    ],
    sections: [
      {
        heading: "When off-the-shelf makes sense",
        paragraphs: [
          "If your process looks like most other businesses in your industry — standard invoicing, common scheduling needs, typical customer relationship tracking — an established tool has almost certainly already solved that problem well, and probably more cheaply than a custom build would. There's no reason to reinvent a solved problem.",
        ],
      },
      {
        heading: "When off-the-shelf starts to break down",
        list: [
          "Your team has built a workaround — a spreadsheet, a shared document, a manual step — because the software you bought doesn't quite fit your process",
          "You're paying for a tool with a dozen features you don't use, because the one feature you need doesn't exist in a plan you can afford",
          "You need two or more tools to talk to each other, and there's no reliable integration between them",
          "Your process is actually a meaningful part of what makes your business different, and forcing it into a generic tool flattens that advantage",
        ],
      },
      {
        heading: "The real cost comparison",
        paragraphs: [
          "It's tempting to compare the sticker price of a software subscription to the cost of a custom build and stop there. But that comparison misses the ongoing cost of a workaround: the time your team spends every week working around a tool's limitations, the errors that come from manual data entry between two disconnected systems, and the opportunity cost of a process that could be faster but isn't.",
          "Custom software has a higher upfront cost, but it removes those recurring costs entirely, because the software is built to match your process instead of the other way around.",
        ],
      },
      {
        heading: "A simple way to decide",
        paragraphs: [
          "Ask whether the workaround your team is using today is a minor inconvenience or a real drag on how the business runs. If it's minor, an off-the-shelf tool — possibly a different one than you're using now — is probably still the right call. If the workaround has become part of your team's daily routine and shows no sign of going away, that's usually a sign the process is specific enough to your business to justify something custom.",
        ],
      },
    ],
    relatedServices: ["custom-software-development", "data-analytics-reporting"],
  },
  {
    slug: "small-business-guide-to-the-cloud",
    title: "A Small Business's Guide to the Cloud",
    description:
      "What moving to the cloud actually means for a small business, why it matters, and how to do it without creating a new set of problems.",
    excerpt:
      "Cloud platforms solve real problems around access and backup — but only if they're set up with some care. Here's what to know before you move.",
    category: "Cloud Solutions",
    publishedAt: "2026-07-14",
    author: "Harrison Ferrell",
    intro: [
      "\"The cloud\" gets used as a buzzword often enough that it's easy to lose track of what it actually means for a small business: your files, software, and systems live on servers you access over the internet, rather than on a single computer or an on-site server in your office.",
    ],
    sections: [
      {
        heading: "The problem the cloud actually solves",
        paragraphs: [
          "If your business files live on one laptop, in a folder on someone's desktop, or on a server in a back office, you have a single point of failure. A lost laptop, a failed hard drive, or a break-in can mean losing records that took years to build, with no way to get them back. Cloud storage and cloud-based software solve this by keeping your data on infrastructure that's backed up, redundant, and accessible from more than one device.",
          "The second problem it solves is collaboration. If your team works from more than one location, or needs to access files outside normal office hours, cloud tools make that possible without emailing files back and forth or relying on a VPN into a physical office server.",
        ],
      },
      {
        heading: "What moving to the cloud actually involves",
        list: [
          "Choosing a platform (commonly Microsoft 365 or Google Workspace) based on what your team already uses and how you collaborate",
          "Migrating existing files and folders without losing the organization you've already built",
          "Setting up permissions so the right people can access the right files — and no one else can",
          "Configuring backup and recovery so a lost device doesn't mean lost data",
        ],
      },
      {
        heading: "The mistake most businesses make",
        paragraphs: [
          "Moving to the cloud without a plan tends to just relocate the same disorganization — files still scattered, sharing permissions set inconsistently, and no real backup strategy beyond \"it's in the cloud now.\" The value of the cloud comes from how it's set up, not just where the files live. A rushed migration often creates a new mess instead of solving the old one.",
        ],
      },
      {
        heading: "A reasonable starting point",
        paragraphs: [
          "Start with an inventory: what files and systems does your business actually rely on today, and where do they currently live? From there, a cloud migration can be planned around your real usage instead of guessing. It's also worth deciding upfront who should have access to what — it's much easier to set permissions correctly from the start than to untangle them later.",
        ],
      },
    ],
    relatedServices: ["cloud-solutions", "it-support"],
  },
  {
    slug: "signs-your-business-needs-automation",
    title: "5 Signs Your Business Is Ready for Workflow Automation",
    description:
      "Five practical signs that manual processes are starting to hold your business back, and it's time to consider automating them.",
    excerpt:
      "Not every business needs automation right away. These five signs are a reasonable indication that yours might.",
    category: "Automation",
    publishedAt: "2026-08-04",
    author: "Harrison Ferrell",
    intro: [
      "Automation isn't the right first move for every business at every stage. But there are a handful of fairly reliable signs that a business has outgrown its manual processes and is likely to benefit from automating at least part of how it operates.",
    ],
    sections: [
      {
        heading: "1. The same task happens the same way, over and over",
        paragraphs: [
          "If a task follows an identical sequence of steps every time it runs — the same form, the same email, the same update to a spreadsheet — it's a strong candidate for automation. Tasks that vary each time and require judgment are a poor fit; tasks that are identical every time are exactly what automation is built for.",
        ],
      },
      {
        heading: "2. Things are getting missed",
        paragraphs: [
          "When a process depends entirely on someone remembering to do the next step, it's only a matter of time before a step gets missed — a follow-up that never happens, a form that doesn't get filed, a client who doesn't hear back. If this is starting to happen more than occasionally, it's a sign the process has outgrown manual handling.",
        ],
      },
      {
        heading: "3. Growth is making the current process harder, not easier",
        paragraphs: [
          "A process that worked fine at a smaller scale often starts to strain as a business grows — not because anyone is doing anything wrong, but because manual processes don't scale the way automated ones do. If your team feels like they're falling further behind as the business grows, that's a signal worth paying attention to.",
        ],
      },
      {
        heading: "4. Information is being re-typed between systems",
        paragraphs: [
          "If someone on your team regularly copies information from one system into another by hand — from a form into a spreadsheet, from an email into a scheduling tool — that's a manual bridge between two systems that could be connected directly.",
        ],
      },
      {
        heading: "5. You can't get a straight answer without pulling numbers manually",
        paragraphs: [
          "If answering a basic question about your business — how many new clients came in last month, how many jobs are currently open — requires manually compiling numbers from more than one place, that's usually a sign your reporting, not just your operations, could benefit from automation.",
        ],
      },
      {
        heading: "If none of these apply yet",
        paragraphs: [
          "That's a legitimate answer too. Automation is worth the investment when it solves a real, recurring problem — not as a default upgrade. If your current processes are working and your team isn't straining against them, there's no need to force it.",
        ],
      },
    ],
    relatedServices: ["workflow-automation", "data-analytics-reporting"],
  },
  {
    slug: "healthcare-automation-without-sacrificing-compliance",
    title: "How Healthcare Providers Can Automate Administrative Work Without Sacrificing Compliance",
    description:
      "How healthcare providers, home care agencies, and counseling practices can automate intake and documentation while keeping compliance and privacy front of mind.",
    excerpt:
      "Automation and compliance aren't in conflict — done well, automation usually makes compliance easier to maintain, not harder.",
    category: "Healthcare",
    publishedAt: "2026-08-25",
    author: "Harrison Ferrell",
    intro: [
      "Healthcare providers, home care agencies, and counseling practices are often more cautious about automation than other small businesses, and for good reason — the documentation involved is sensitive, and the consequences of getting it wrong are more serious than in most industries. The good news is that automation, implemented carefully, usually strengthens compliance rather than working against it.",
    ],
    sections: [
      {
        heading: "Why paper and spreadsheets are actually the bigger risk",
        paragraphs: [
          "It's easy to assume paper forms and manual filing are the \"safe\" option because they're familiar. In practice, they tend to create more compliance risk than a well-built digital system: handwritten forms get misfiled or lost, there's no record of who accessed a file or when, and spreadsheets are rarely access-controlled in any meaningful way. A digital system with proper access controls and an audit trail is usually the more defensible approach, not the riskier one.",
        ],
      },
      {
        heading: "Where automation fits without adding risk",
        list: [
          "Digital intake and consent forms with secure storage, replacing paper forms that anyone in the office could physically access",
          "Automated routing of completed forms to the right staff member, reducing how many hands touch sensitive information along the way",
          "Appointment reminders and scheduling automation, which don't involve sensitive clinical information at all",
          "Automated backups and organized digital recordkeeping, so records are recoverable and searchable rather than sitting in a single filing cabinet",
        ],
      },
      {
        heading: "What to be careful about",
        paragraphs: [
          "Not every general-purpose automation tool is appropriate for sensitive healthcare data — some consumer-grade apps aren't built with the access controls or data handling agreements healthcare organizations need. This is where it matters to work with someone who understands both the technology and the environment it's being used in, rather than defaulting to whatever automation tool is most popular for general business use.",
          "It's also worth being honest about what automation does and doesn't do: it doesn't make an organization compliant on its own. It supports compliance by making documentation more consistent and access more controlled — the underlying policies and training still matter.",
        ],
      },
      {
        heading: "A reasonable starting point",
        paragraphs: [
          "For most of the healthcare, home care, and counseling organizations we've worked with, intake is the natural place to start: it's high-volume, highly repetitive, and usually still paper-based. Moving intake to a secure digital form is a contained first step that demonstrates the approach before expanding into scheduling, documentation, or reporting.",
        ],
      },
    ],
    relatedServices: ["digital-forms-document-management", "workflow-automation"],
  },
  {
    slug: "it-support-in-house-outsourced-or-hybrid",
    title: "IT Support: In-House, Outsourced, or Hybrid? A Small Business Guide",
    description:
      "A practical comparison of in-house, outsourced, and hybrid IT support models to help small businesses figure out what fits their size and budget.",
    excerpt:
      "Most small businesses don't need a full-time IT department — but they do need a real plan for who handles technology problems when they come up.",
    category: "IT Support",
    publishedAt: "2026-09-05",
    author: "Harrison Ferrell",
    intro: [
      "Most small businesses eventually hit a point where \"whoever's good with computers\" isn't a sustainable IT strategy anymore. The question at that point isn't whether you need support — it's what form that support should take.",
    ],
    sections: [
      {
        heading: "In-house IT",
        paragraphs: [
          "Hiring a full-time IT employee makes sense when a business has enough recurring technical work — and enough complexity — to justify a dedicated role. The advantage is having someone who knows your systems intimately and is available immediately. The downside for most small businesses is cost: a full-time hire is a significant fixed expense, and there often isn't enough day-to-day IT work to fully justify it.",
        ],
      },
      {
        heading: "Outsourced IT support",
        paragraphs: [
          "Outsourcing — working with an outside consultant or firm as issues come up, or under an ongoing support arrangement — gives a business access to technical expertise without the cost of a full-time salary. The tradeoff is that an outside consultant needs time to get familiar with your systems, and availability depends on the terms of the arrangement.",
        ],
      },
      {
        heading: "A hybrid approach",
        paragraphs: [
          "Many small businesses land somewhere in between: an internal person (often the owner or an operations lead) handles day-to-day basics, while an outside consultant is available for larger projects, recurring maintenance, and technology decisions that need more specialized knowledge. This tends to be the most cost-effective model for businesses that have some technical needs but not enough to justify a full-time hire.",
        ],
      },
      {
        heading: "How to decide",
        list: [
          "If technical issues come up daily and require someone on-site, in-house support is more likely to be worth the cost",
          "If issues come up occasionally and don't require someone physically present, outsourced or hybrid support is usually more cost-effective",
          "If you're not sure how much support you actually need, start with an outside consultant and let that experience inform whether a full-time hire eventually makes sense",
        ],
      },
      {
        heading: "The real goal",
        paragraphs: [
          "Whatever model you choose, the goal is the same: technical problems get resolved without eating into time that should go toward running the business, and technology decisions are made with good information instead of guesswork.",
        ],
      },
    ],
    relatedServices: ["it-support", "cloud-solutions"],
  },
  {
    slug: "compudopt-computer-giveaway-75-computers",
    title: "Nixon Home Care x Compudopt x H.F. Tech Consulting: 75 Computers Given Away",
    description:
      "Nixon Home Care, Compudopt, and H.F. Tech Consulting teamed up today to give away 75 computers to individuals and families in the Houston community, helping close the digital divide one household at a time.",
    excerpt:
      "Today, Nixon Home Care, Compudopt, and H.F. Tech Consulting partnered to put 75 computers into the hands of Houston-area families — recapping the day in photos.",
    category: "Community",
    publishedAt: "2026-09-17",
    author: "Harrison Ferrell",
    image: "/blog/compudopt-giveaway/compudopt-24.jpg",
    gallery: [
      "/blog/compudopt-giveaway/compudopt-24.jpg",
      "/blog/compudopt-giveaway/compudopt-23.jpg",
      "/blog/compudopt-giveaway/compudopt-14.jpg",
      "/blog/compudopt-giveaway/compudopt-01.jpg",
      "/blog/compudopt-giveaway/compudopt-02.jpg",
      "/blog/compudopt-giveaway/compudopt-03.jpg",
      "/blog/compudopt-giveaway/compudopt-04.jpg",
      "/blog/compudopt-giveaway/compudopt-05.jpg",
      "/blog/compudopt-giveaway/compudopt-06.jpg",
      "/blog/compudopt-giveaway/compudopt-07.jpg",
      "/blog/compudopt-giveaway/compudopt-08.jpg",
      "/blog/compudopt-giveaway/compudopt-09.jpg",
      "/blog/compudopt-giveaway/compudopt-10.jpg",
      "/blog/compudopt-giveaway/compudopt-11.jpg",
      "/blog/compudopt-giveaway/compudopt-12.jpg",
      "/blog/compudopt-giveaway/compudopt-13.jpg",
      "/blog/compudopt-giveaway/compudopt-15.jpg",
      "/blog/compudopt-giveaway/compudopt-16.jpg",
      "/blog/compudopt-giveaway/compudopt-17.jpg",
      "/blog/compudopt-giveaway/compudopt-18.jpg",
      "/blog/compudopt-giveaway/compudopt-19.jpg",
      "/blog/compudopt-giveaway/compudopt-20.jpg",
      "/blog/compudopt-giveaway/compudopt-21.jpg",
      "/blog/compudopt-giveaway/compudopt-22.jpg",
    ],
    intro: [
      "Today, Nixon Home Care, Compudopt, and H.F. Tech Consulting teamed up for a computer giveaway event in the Houston community — and by the end of the day, 75 computers had gone home with individuals and families who needed them.",
    ],
    sections: [
      {
        heading: "About the partnership",
        paragraphs: [
          "Nixon Home Care hosted the event and helped connect the giveaway with the individuals and families who needed it most. Compudopt is a nonprofit focused on closing the digital divide — its mission, printed right on the side of the van we worked out of today, is \"Empowering youth through technology. Power. Learn. Thrive.\" Every recipient walked away with a Compudopt tote bag, connected by AT&T, containing a refurbished computer ready to use.",
          "Access to a reliable computer affects far more than convenience — it's schoolwork, job applications, telehealth appointments, and staying connected with family. Events like today's put that access directly into the hands of people who need it most, at no cost to them.",
        ],
      },
      {
        heading: "75 computers, one afternoon",
        paragraphs: [
          "Volunteers spent the day checking in registrants, unloading and organizing devices from the Compudopt van, and walking each recipient through pickup. It was a steady stream of people all afternoon — a reminder of just how much demand there is for something a lot of us take for granted.",
          "For H.F. Tech Consulting, it was also a natural fit. Our day-to-day work is about making technology more accessible for the businesses we serve; today was a chance to do the same thing for our own community, alongside partners like Nixon Home Care and Compudopt who see that need firsthand.",
        ],
      },
      {
        heading: "Thank you",
        paragraphs: [
          "Thank you to Nixon Home Care for hosting and helping organize the day, to Compudopt for providing the computers, to every volunteer who gave up their afternoon, and most of all to the 75 individuals and families who joined us today. We're already looking forward to the next one.",
        ],
      },
    ],
    relatedServices: [],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getSortedPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function estimateReadingTime(post: BlogPost): number {
  const words = [
    ...post.intro,
    ...post.sections.flatMap((section) => [
      section.heading,
      ...(section.paragraphs ?? []),
      ...(section.list ?? []),
    ]),
  ].join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
