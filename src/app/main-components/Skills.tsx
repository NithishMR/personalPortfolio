interface Skill {
  title: string;
  image: string;
}

const skills: Skill[] = [
  { title: "Java", image: "./java.svg" },
  { title: "Typescript", image: "./typescript.svg" },
  { title: "Next js", image: "./nextjs.svg" },
  { title: "JavaScript", image: "./javascript.svg" },
  { title: "React", image: "./react.svg" },
  { title: "Tailwind CSS", image: "./tailwind.svg" },
  { title: "Node.js", image: "./nodejs.svg" },
  { title: "Express", image: "./express.svg" },
  { title: "PostgreSQL", image: "./postgresql.svg" },
];

export default function Skills() {
  return (
    <div className="mt-16 mb-10">
      <h2 className="text-4xl mb-6 font-extrabold">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <img src={skill.image} alt={skill.title} className="w-6 h-6" />
            <span className="text-sm font-bold text-gray-800">
              {skill.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
