import ProjectForm from './ProjectForm';
import ProjectCard from './ProjectCard';

export default function ProjectsAdmin({ projects }) {
  return (
    <div className="container-fluid">
      <ProjectForm />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-4">
        {projects.map((project) => (
          <div
            className="col"
            key={project._id.toString()}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
