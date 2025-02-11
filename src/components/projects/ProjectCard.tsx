import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ index, item }) => {
  return (
    <div
      key={index}
      className="col-md-6 portfolio-item category-1"
    >
      <Link
        href={`/projects/${item.title}`}
        style={{ cursor: 'pointer' }}
        className="work-popup"
      >
        <div className="portfolio-box">
          <Image
            src={item.image}
            alt=""
            style={{
              height: '40vh',
              objectFit: 'cover'
            }}
            data-rjs="2"
          />
          <span className="portfolio-category">{item.category}</span>
          <div className="portfolio-caption">
            <h1>{item.title}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
