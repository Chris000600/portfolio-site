import { StaticImageData } from 'next/image';

import portfolio_img_1 from '@/assets/images/projects/img1.png';
import portfolio_img_2 from '@/assets/images/projects/img2.png';
import portfolio_img_3 from '@/assets/images/projects/img3.png';
import portfolio_img_4 from '@/assets/images/projects/img4.png';
import portfolio_img_5 from '@/assets/images/projects/img5.png';
import ProjectCard from './ProjectCard';

interface DataType {
  id: number;
  col: string;
  image: StaticImageData;
  title: string;
  category: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    col: '6',
    image: portfolio_img_1,
    title: 'Glasses-of-Cocktail',
    category: 'Branding'
  },
  {
    id: 2,
    col: '6',
    image: portfolio_img_2,
    title: 'A Branch with Flowers',
    category: 'Mockup'
  },
  {
    id: 3,
    col: '4',
    image: portfolio_img_3,
    title: 'Orange Rose Flower',
    category: 'Video'
  },
  {
    id: 4,
    col: '4',
    image: portfolio_img_4,
    title: 'Green Plant on a Desk',
    category: 'Branding'
  },
  {
    id: 5,
    col: '4',
    image: portfolio_img_5,
    title: 'Orange Rose Flower',
    category: 'Mockup'
  }
];

const ProjectGrid = () => {
  return (
    <>
      <div
        className="projects-area container"
        id="portfolio"
      >
        <div className="container-fluid">
          <div className="row g-5 portfolio-grid">
            {portfolio_data.map((item, i) => (
              <ProjectCard
                key={i}
                item={item}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectGrid;
