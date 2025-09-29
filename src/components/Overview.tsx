import { useRef } from "react";

type Skill = { name: string; level?: number; note?: string };

const groups: { title: string; items: Skill[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 90 },
      { name: "Kotlin", level: 75 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML/CSS", level: 90 },
      { name: "React", level: 90, note: "Hooks, Vite" },
      { name: "Angular", level: 90, note: "Hooks, Vite" },
      { name: "Vue", level: 90, note: "Hooks, Vite" },
      { name: "TailwindCSS", level: 90 },
      { name: "Framer Motion", level: 75 },
      { name: "React Native", level: 70 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Next.js", level: 75 },
      { name: "Express.js", level: 80 },
      { name: "GraphQL", level: 70 },
      { name: "SpringBoot", level: 75 },
      { name: "FastAPI", level: 80 },
      { name: "Django", level: 80 },
      { name: "Rest API", level: 75 },
      { name: "Microservices", level: 70 },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 70 },
      { name: "IBM Cognos TM1", level: 55 },
      { name: "MySQL", level: 65 },
      { name: "DynamoDB", level: 65 },
      { name: "CockroachDB", level: 65 },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", level: 90 },
      { name: "GCP", level: 85 },
      { name: "Terraform", level: 60 },
      { name: "Docker", level: 70 },
      { name: "Kubernetes", level: 55 },
      { name: "Gitlab CI/CD", level: 65 },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "OpenAI", level: 75 },
      { name: "BERT", level: 70 },
      { name: "Hugging Face", level: 60 },
      { name: "Langchain", level: 60 },
      { name: "RAG", level: 60 },
      { name: "TensorFlow", level: 50 },
      { name: "PyTorch", level: 50 }, 
    ],
  },
];

function SkewCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0..1
    const py = (e.clientY - rect.top) / rect.height;  // 0..1
    const rotX = (py - 0.5) * -10; // tilt up/down
    const rotY = (px - 0.5) * 10;  // tilt left/right
    el.style.setProperty("--rx", `${rotX}deg`);
    el.style.setProperty("--ry", `${rotY}deg`);
    el.style.setProperty("--px", `${px * 100}%`);
    el.style.setProperty("--py", `${py * 100}%`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="
        pointer-events-auto
        group relative rounded-2xl border border-slate-200/70 bg-white/80
        shadow-sm hover:shadow-lg transition
        [transform-style:preserve-3d]
        will-change-transform
      "
      style={{
        transform: "perspective(800px) rotateX(var(--rx,0)) rotateY(var(--ry,0))",
      }}
    >
      {/* gradient border glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition
                   bg-gradient-to-r from-pink-500/20 via-rose-400/20 to-orange-400/20 blur"
      />
      {/* shine */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition"
        style={{
          background:
            "radial-gradient(300px circle at var(--px,50%) var(--py,50%), rgba(255,255,255,0.35), transparent 40%)",
        }}
      />

      <div className="relative p-5">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <h3 className="font-semibold text-slate-900">{title}</h3>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function Overview() {
  return (
    <section id="overview" className="relative py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 w-[48rem]
                   bg-gradient-to-r from-pink-300/30 via-rose-300/30 to-orange-300/30 blur-3xl"
      />
      <div className="pointer-events-auto relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Overview
        </h2>

        {/* Description above the grid */}
        <p className="pointer-events-auto mt-4 text-slate-700 max-w-3xl">
          I build scalable web, mobile, and AI applications end-to-end. My focus is on clean UX,
          robust APIs, and cloud-ready architectures. I work across React/TypeScript, Node/Express,
          and PostgreSQL, with AWS, Docker/Kubernetes, and CI/CD to ship secure, reliable software.
          Recently, I’ve explored RAG-based assistants and real-time security workflows.
        </p>

        {/* Grid of skills */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g) => (
            <SkewCard key={g.title} title={g.title}>
              <ul className="space-y-3">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-800 font-medium">{s.name}</span>
                      {typeof s.level === "number" && (
                        <span className="text-xs text-slate-500 tabular-nums">
                          {s.level}%
                        </span>
                      )}
                    </div>
                    {/* {typeof s.level === "number" && (
                      <div className="mt-2 h-2 w-full rounded-full bg-slate-200/70 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-pink-500 to-orange-400 rounded-full transition-[width] duration-700"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    )} */}
                    {s.note && (
                      <p className="mt-1 text-xs text-slate-500">{s.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </SkewCard>
          ))}
        </div>
      </div>
    </section>
  );
}
