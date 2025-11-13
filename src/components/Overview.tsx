import { useRef } from "react";

type Skill = { name: string; iconClass?: string  };

const groups: { title: string; items: Skill[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
      { name: "Python",     iconClass: "devicon-python-plain colored" },
      { name: "Kotlin",     iconClass: "devicon-kotlin-plain colored" },
      { name: "Java",       iconClass: "devicon-java-plain colored" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML/CSS",      iconClass: "devicon-html5-plain colored" },
      { name: "React",         iconClass: "devicon-react-original colored" },
      { name: "Angular",       iconClass: "devicon-angularjs-plain colored" },
      { name: "Vue",           iconClass: "devicon-vuejs-plain colored" },
      { name: "TailwindCSS",   iconClass: "devicon-tailwindcss-plain colored" },
      { name: "Framer Motion", iconClass: "devicon-framer-plain colored" },
      { name: "React Native",  iconClass: "devicon-react-original colored" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js",      iconClass: "devicon-nodejs-plain colored" },
      { name: "Next.js",      iconClass: "devicon-nextjs-original" },
      { name: "Express.js",   iconClass: "devicon-express-original" },
      { name: "GraphQL",      iconClass: "devicon-graphql-plain colored" },
      { name: "Spring Boot",  iconClass: "devicon-spring-plain colored" },
      { name: "FastAPI",      iconClass: "devicon-fastapi-plain colored" },
      { name: "Django",       iconClass: "devicon-django-plain colored" },
      { name: "REST API",     iconClass: "devicon-swagger-plain colored" }, // OpenAPI/Swagger
      { name: "Microservices" }, // no devicon; fallback renders
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB",     iconClass: "devicon-mongodb-plain colored" },
      { name: "PostgreSQL",  iconClass: "devicon-postgresql-plain colored" },
      { name: "IBM Cognos TM1" }, // no devicon
      { name: "MySQL",       iconClass: "devicon-mysql-plain colored" },
      { name: "DynamoDB",    iconClass: "devicon-dynamodb-plain colored" },
      { name: "CockroachDB", iconClass: "devicon-cockroachdb-plain colored" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS",        iconClass: "devicon-amazonwebservices-original colored" },
      { name: "GCP",        iconClass: "devicon-googlecloud-plain colored" },
      { name: "Terraform",  iconClass: "devicon-terraform-plain colored" },
      { name: "Docker",     iconClass: "devicon-docker-plain colored" },
      { name: "Kubernetes", iconClass: "devicon-kubernetes-plain colored" },
      { name: "GitLab CI/CD", iconClass: "devicon-gitlab-plain colored" },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "OpenAI",       iconClass: "devicon-openai-plain colored" },
      { name: "BERT" }, // no devicon
      { name: "Hugging Face", iconClass: "devicon-huggingface-plain colored" },
      { name: "LangChain" },  // no devicon
      { name: "RAG" },        // concept; no devicon
      { name: "TensorFlow",   iconClass: "devicon-tensorflow-original colored" },
      { name: "PyTorch",      iconClass: "devicon-pytorch-original colored" },
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
    const rotX = (py - 0.5) * -45; // tilt up/down
    const rotY = (px - 0.5) * 45;  // tilt left/right
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
        <div className="relative -mx-5 -mt-5 mb-4 rounded-t-2xl bg-gradient-to-r from-pink-500 via-rose-400 to-orange-400 px-5 py-3 shadow-sm">
          <h3 className="text-white font-semibold tracking-wide">{title}</h3>
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
          I’m an experienced computer science professional with a Master’s in Computer Science from Clemson University, bringing a solid foundation in software development, data engineering, cloud computing and machine learning. I’m proficient in Python, TypeScript, JavaScript, Java, C#, and Go, and have hands-on experience with frameworks such as Flask, Django, Node.js, Spring Boot, and Express.js.
          <br></br>
I’m a fast learner and collaborative problem-solver who enjoys building efficient, scalable, and user-centric solutions that solve real-world challenges. I’m excited to contribute my skills to impactful projects — let’s connect and explore how we can create something exceptional together!
          </p>

        {/* Grid of skills */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g) => (
            <SkewCard key={g.title} title={g.title}>
              <ul className="space-y-3">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <div className="flex items-center gap-3">
                      {s.iconClass ? (
                        <i className={`${s.iconClass} text-[22px]`} aria-hidden="true" />
                      ) : (
                        // fallback for items without a devicon (e.g., Ollama)
                        <span
                          aria-hidden="true"
                          className="inline-block h-[18px] w-[18px] rounded-sm bg-slate-300"
                          title="icon"
                        />
                      )}
                      <span className="text-slate-800 font-medium">{s.name}</span>
                    </div>
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
