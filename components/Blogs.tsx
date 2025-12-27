import React, { useState } from 'react';

const LINKEDIN_POSTS = [
  {
    id: '3',
    title: "Echo (v0): Why AI-Native Email is Hard",
    excerpt: "Exploring the gap between AI extensions and a truly AI-native email interface.",
    fullContent: `Over the last few weeks, I’ve been experimenting with a question that’s been nagging me for a while: Why doesn’t a truly AI-native email client exist yet?

Not an extension. Not an automation hack. A proper email interface where AI handles context, summarization, prioritization, and replies end-to-end.

So I tried building one. Here’s Echo (v0) - a prototype exploring what “AI-first email” could look like: https://lnkd.in/gytdUaZk

Echo connects to Gmail, pulls threads, extracts recent deltas, summarizes them using an LLM, and assigns “attention priority.” The goal: turn “50 unread emails” into “5 things you actually need to do.”

But building Echo exposed why AI email isn’t a real product yet:
1. LLM latency stacks up quickly: Summaries + prioritization for every email get expensive and slow.
2. Gmail’s API isn’t built for this: Thread reconstruction is slow, especially when mixing old and new messages.
3. Infra costs spike way before PMF: Continuous sync, queues, vector storage, and GPU/API inference get pricey fast.
4. Local inference still isn’t viable: Most laptops can’t run 7B+ models fast enough to process inbox-scale workloads.
5. Privacy/storage tradeoffs are messy: Caching embeddings or summaries demands serious security boundaries.

Echo was a fun build and a solid learning experience. The space has huge potential as LLM infra improves.`,
    date: "Dec 2025",
    link: "https://www.linkedin.com/posts/shrayashbarnwal_echo-activity-7410365741465796608-uZd0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYqHeMBV1wJ05hiBb5RRkP1ImmvYhgQrfw",
    tag: "AI Integration",
    color: "#8B5CF6"
  },
  {
    id: '2',
    title: "Why Expensive Coffee Still Makes Sense",
    excerpt: "High margins, modest profits, and a surprisingly valuable product: a temporary ecosystem of focus, familiarity, and calm.",
    fullContent: `6:30 AM. Tim Hortons, Bengaluru Airport.
Winter break had just ended.
Laptop open. Caramel cold brew in hand. Internship deadlines staring back at me.

Somewhere between boarding calls and suitcase wheels rolling across the floor, I found myself... oddly focused.
That’s when it clicked:
We criticize ₹300 coffee for being overpriced, but we’re not really paying for the coffee, are we?

We’re paying for what it creates around us.
→ A chair no one reserved.
 → Lighting curated to keep you calm.
 → Just enough background buzz to help you concentrate.
 → Charging ports, WiFi—and maybe, a bit of structured stillness before the chaos resumes.

Cafés like these aren’t just selling coffee-they’re selling context.
And the truth is, people will pay for that context. For a temporary ecosystem of order and clarity.

The numbers back it up too:
Margins are high, profits are modest-but the experience? That’s where the value lies.

In a world running on noise, coffee shops offer a different kind of currency: focus, familiarity, presence.

That morning at the airport wasn’t remarkable. The takeaway?
They’re not selling coffee. They’re selling focus on demand.

Follow for more reflections on the small things that shape how we work, live, and learn.
More soon 🚀.`,
    date: "June 2025",
    link: "https://linkedin.com",
    tag: "Life & Work",
    color: "#00FF9C"
  },
  {
    id: '1',
    title: "Still Figuring It Out—and That’s the Point",
    excerpt: "New cities, new schools, new beginnings taught me one thing early: you don’t need to have it all figured out—you just need to stay teachable.",
    fullContent: `Most of my life, I’ve had to adapt fast.

 New cities, new schools, new people. Every couple of years, I’d find myself starting from scratch.
Starting over wasn’t an exception—it was the norm. It became instinct.
So by the time I got to BITS Pilani, I had already learned how to be uncomfortable.
 And more importantly—how to be okay with not knowing everything.
Because I’ve never been the person who had it all figured out.
But I’ve always been the one who’s asking, trying, failing, repeating.
That’s what’s shaped me more than any one environment.
I’ve realized:
1. Being unsure is a good place to start — It keeps you hungry, humble, and in motion.
2. You don’t need to be the best to get better — You just need to show up consistently.
3. The freedom to make mistakes is underrated — That’s where the best lessons live.

And if I’ve gained one advantage from all this—it’s the ability to stay teachable.

Follow for more reflections, experiments, and a student’s POV on figuring it out in real time.

More soon 🚀`,
    date: "June 2025",
    link: "https://www.linkedin.com/posts/shrayashbarnwal_growthinprogress-activity-7341121409911267330-Xo7z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYqHeMBV1wJ05hiBb5RRkP1ImmvYhgQrfw",
    tag: "Life & Work",
    color: "#D4AF37"
  }
];

const Blogs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'linkedin' | 'others'>('linkedin');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-obsidian text-paper pt-40 px-8 pb-32">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-2">
             <span className="text-violet">blogs_</span>
          </h1>
          <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.4em]">
            Insights//Reflections//Experiments
          </p>
        </header>

        {/* Tab Toggle */}
        <div className="flex gap-8 border-b border-white/10 mb-12">
          <button 
            onClick={() => setActiveTab('linkedin')}
            className={`pb-4 font-mono text-[11px] uppercase tracking-widest transition-colors ${activeTab === 'linkedin' ? 'text-mint border-b border-mint' : 'text-gray-500'}`}
          >
            01. LinkedIn_Logs
          </button>
          <button 
            onClick={() => setActiveTab('others')}
            className={`pb-4 font-mono text-[11px] uppercase tracking-widest transition-colors ${activeTab === 'others' ? 'text-gold border-b border-gold' : 'text-gray-400'}`}
          >
            02. More_Stuff
          </button>
        </div>

        {activeTab === 'linkedin' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {LINKEDIN_POSTS.map((post) => {
              const isExpanded = expandedId === post.id;
              return (
                <div 
                  key={post.id}
                  className={`brutalist-border p-6 bg-[#0A0A0A] border-white/10 transition-all ${isExpanded ? 'md:col-span-2' : 'col-span-1'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-[9px] uppercase font-bold px-2 py-1 bg-white/5" style={{ color: post.color }}>
                      // {post.tag}
                    </span>
                    <a href={post.link} target="_blank" className="opacity-20 hover:opacity-100 text-white">↗</a>
                  </div>

                  <h3 className="text-lg font-black uppercase mb-3 leading-tight tracking-tight">
                    {post.title}
                  </h3>

                  <div className="text-xs font-mono text-gray-400 mb-8 leading-relaxed whitespace-pre-line">
                    {isExpanded ? post.fullContent : post.excerpt}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <span className="font-mono text-[9px] text-gray-600 uppercase">{post.date}</span>
                    <button 
                      onClick={() => setExpandedId(isExpanded ? null : post.id)}
                      className="text-[10px] font-black uppercase tracking-widest text-paper hover:text-mint transition-colors"
                    >
                      {isExpanded ? '[ Collapse ]' : '[ Read Full ]'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="brutalist-border border-dashed p-16 text-center opacity-30">
            <div className="text-xl font-black uppercase mb-2">Coming Soon</div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
              Synchronizing research documentation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;