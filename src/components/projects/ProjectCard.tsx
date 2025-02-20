import Link from 'next/link';

const ProjectCard = ({ index, project }) => {
  return (
    <div
      key={index}
      className="col-md-4 portfolio-item category-1"
    >
      <Link
        href={`/projects/${project._id}`}
        style={{ cursor: 'pointer', textDecoration: 'none' }}
        className="work-popup"
      >
        <div
          className="portfolio-box"
          style={{ position: 'relative', overflow: 'hidden', height: '40vh' }}
        >
          {/* Blurred background image */}
          <img
            src={project.thumbnail}
            alt=""
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'blur(20px)',
              transform: 'scale(1.1)',
              zIndex: 1
            }}
          />

          {/* Main contained image */}
          <img
            src={project.thumbnail}
            alt=""
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              zIndex: 1
            }}
          />

          {/* Full-card gradient overlay (hidden by default, shown on hover) */}
          <div
            className="gradient-overlay"
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              width: '100%',
              height: '50%',
              background:
                'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
              zIndex: 2,
              opacity: 0,
              transition: 'opacity 0.3s'
            }}
          />

          <span
            className="portfolio-category"
            style={{ position: 'absolute', top: 10, right: 10, zIndex: 3 }}
          >
            {project.technology.split(',').map((tech) => tech.trim())[0]}
          </span>
          <div
            className="portfolio-caption"
            style={{
              position: 'absolute',
              bottom: 10,
              left: 10,
              zIndex: 3,
              padding: '10px'
            }}
          >
            <h1
              style={{
                margin: 0,
                color: '#fff'
                // textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}
            >
              {project.title}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
