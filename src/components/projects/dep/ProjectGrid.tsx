import ProjectCard from '../../admin/ProjectCard';
import ProjectForm from '../../admin/ProjectForm';
import Project from '@/type/project';

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <ProjectForm />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <ProjectCard
            key={project._id.toString()} // Use unique ID as key
            project={project}
          />
        ))}
      </div>
    </div>
  );
}
