import Link from 'next/link';

const ProjectCard = ({ index, project }) => {
  return (
    <div
      key={index}
      className="col-md-6 portfolio-item category-1"
    >
      <Link
        href={`/projects/${project.title}`}
        style={{ cursor: 'pointer' }}
        className="work-popup"
      >
        <div className="portfolio-box">
          <img
            src={project.thumbnail}
            alt=""
            style={{
              height: '40vh',
              objectFit: 'cover'
            }}
          />
          <span className="portfolio-category">
            {project.technology.split(',').map((tech) => tech.trim())[0]}
          </span>
          <div className="portfolio-caption">
            <h1>{project.title}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
