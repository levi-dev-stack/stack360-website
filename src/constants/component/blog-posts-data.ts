/** In-site blog posts — edit this file to add or update articles. */

export type BlogSection = {
  heading: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  intro: string;
  sections: readonly BlogSection[];
  conclusion: {
    heading: string;
    paragraphs: readonly string[];
  };
};

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: 'mastering-python-important-features',
    title: 'Mastering Python: Important Features and How to Use Them',
    excerpt:
      'Python’s feature set and simple syntax make it one of the most widely used languages — here are the crucial capabilities and how to use them well.',
    date: '2026-07-13',
    category: 'Engineering',
    readTime: '8 min',
    intro:
      'Python is one of the most widely used programming languages in the world because of its extensive feature set and simple syntax. Its many features help both novice and expert programmers alike, adding to the smooth experience it offers. I will be discussing some of Python’s most crucial features and discussing how to utilize them efficiently.',
    sections: [
      {
        heading: 'Simple Syntax',
        body: 'Python’s simple syntax is arguably its most appealing feature. Its readability enables beginners to pick up the language swiftly, facilitating comprehension. In Python, the use of English keywords instead of punctuations makes it feel natural and less like a traditional programming language.',
      },
      {
        heading: 'Dynamic Typing',
        body: 'Python uses dynamic typing which means you don’t need to state the data type of a variable when declaring it. The interpreter infers the data type, providing flexibility when coding. However, keep an eye out for unexpected behaviours if data types change unexpectedly.',
      },
      {
        heading: 'Indentation for Code Blocks',
        body: 'Instead of using brackets or specific keywords to define a block of code, Python uses indentation. Consistent use of indentation improves code readability, reducing confusion.',
      },
      {
        heading: 'Python Libraries and Frameworks',
        body: 'Python is popular for its robust libraries and frameworks which enable speedy application development. Whether you’re working on machine learning projects, web development, or data analysis, Python has a library or framework to simplify the task. Remember to explore Python’s diverse selection of libraries to expedite your project.',
      },
      {
        heading: 'Interactive Shell',
        body: 'Python provides an interactive shell for experimenting and debugging, proving advantageous for beginners to understand code behaviours. You can access Python’s interactive shell directly from your terminal by typing ‘python’.',
      },
      {
        heading: 'Cross-Platform Compatibility',
        body: 'Python is compatible with a variety of operating systems like Windows, Linux, macOS, and Unix. That’s why there is no need to modify the programming syntax when transferring between operating systems. It improves portability and makes cross-platform debugging easier.',
      },
      {
        heading: 'File Handling',
        body: 'Python comes with simple file handling methods. You can create, read, write, or append a file using in-built functions like open(), read(), write(), and close() respectively. Remember to close files after performing the operations to prevent memory leaks.',
      },
      {
        heading: 'Object-Oriented Programming',
        body: 'Python supports object-oriented programming (OOP) principles. It provides another layer of simplicity and effectiveness in programming structure. Class and Object, the two pillars of OOP in Python, streamline coding through reusability.',
      },
    ],
    conclusion: {
      heading: 'Conclusion',
      paragraphs: [
        'Using these Python features, programming tasks become relatively more comfortable. They enable a beginner-friendly approach to programming while still providing powerful tools for more advanced tasks.',
        'Experiment with these features as you become more proficient with Python and use its capabilities to deliver impressive, efficient coding projects.',
      ],
    },
  },
  {
    slug: 'designing-systems-that-survive-growth',
    title: 'Designing Systems That Survive Growth',
    excerpt:
      'Early architecture choices either absorb traffic and team growth — or force a rewrite. Here is how we decide what to harden now versus what to leave flexible.',
    date: '2026-06-28',
    category: 'Architecture',
    readTime: '6 min',
    intro:
      'Most systems do not fail because the first version was wrong. They fail because the first version assumed growth would never change the shape of the problem. At Stack360 we treat early architecture as a set of deliberate bets: what must stay stable, what can flex, and what we refuse to invent until the product proves it needs it.',
    sections: [
      {
        heading: 'Start from the load that matters',
        body: 'Before drawing boxes, name the load that would actually hurt: concurrent writes, report queries at month-end, file uploads, webhook bursts. Design for that load first. Everything else can be simpler until evidence says otherwise.',
      },
      {
        heading: 'Separate durable contracts from replaceable insides',
        body: 'APIs, event schemas, and data ownership boundaries should be boring and versioned. Internal modules, queues, and caches should stay replaceable. When those two layers blur, every refactor becomes a migration.',
      },
      {
        heading: 'Make failure visible early',
        body: 'Retries, timeouts, and dead-letter paths are not polish — they are how you learn where the system breaks. Ship observability with the first production path so growth shows up as a signal, not a surprise outage.',
      },
      {
        heading: 'Leave escape hatches, not speculative platforms',
        body: 'A thin adapter, a feature flag, or a clear seam for a future service is cheaper than a premature microservices mesh. Prefer seams you can cut later over platforms you must staff forever.',
      },
    ],
    conclusion: {
      heading: 'Conclusion',
      paragraphs: [
        'Systems that survive growth are rarely the most elaborate on day one. They are the ones with clear contracts, honest load assumptions, and room to evolve without rewriting the business.',
        'If you are planning a rebuild or a first architecture pass, start with the load and the contracts — the rest follows.',
      ],
    },
  },
  {
    slug: 'quality-as-a-release-gate',
    title: 'Quality as a Release Gate, Not a Phase',
    excerpt:
      'QA that starts after “dev is done” always loses. Treat checks as gates in the delivery path — and ship with fewer late surprises.',
    date: '2026-05-20',
    category: 'Delivery',
    readTime: '5 min',
    intro:
      'Teams still talk about “QA phase” as if quality is a station the build visits once. In practice, defects that reach that station are already expensive. We treat quality as a sequence of gates: each one must pass before the work can move closer to production.',
    sections: [
      {
        heading: 'Define done before work starts',
        body: 'Acceptance criteria, edge cases, and non-functional expectations belong in the ticket — not in a Slack thread after merge. When “done” is fuzzy, every gate becomes a negotiation.',
      },
      {
        heading: 'Automate the boring checks',
        body: 'Lint, typecheck, unit coverage on critical paths, and smoke tests on the happy path should run on every pull request. Humans should spend attention on judgment calls, not on catching typos the pipeline already knows how to find.',
      },
      {
        heading: 'Keep a human gate for risk',
        body: 'Exploratory testing, permission matrices, and migration rehearsals still need people. Gate them by risk: money movement, auth, data deletion, and irreversible ops get explicit review before release.',
      },
      {
        heading: 'Close the loop after ship',
        body: 'A release gate without post-deploy checks is incomplete. Smoke the critical flows in production, watch error budgets, and feed what broke back into the next ticket’s definition of done.',
      },
    ],
    conclusion: {
      heading: 'Conclusion',
      paragraphs: [
        'Quality as a gate means the build cannot advance until the right checks pass — automated where possible, human where the risk demands it.',
        'That discipline is what lets delivery stay fast without treating production as the first real test environment.',
      ],
    },
  },
] as const;

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
