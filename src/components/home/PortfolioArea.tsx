import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import portfolio_img_1 from '@/assets/images/projects/img1.png';
import portfolio_img_2 from '@/assets/images/projects/img2.png';
import portfolio_img_3 from '@/assets/images/projects/img3.png';
import portfolio_img_4 from '@/assets/images/projects/img4.png';
import portfolio_img_5 from '@/assets/images/projects/img5.png';

interface DataType {
  id: number;
  col: string;
  image: StaticImageData;
  title: string;
  category: string;
}

// TODO
const portfolio_data: DataType[] = [
  {
    id: 1,
    col: '6',
    image: portfolio_img_1,
    title: 'Glasses of Cocktail',
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

export default function PortfolioArea() {
  return (
    <>
      <div
        className="projects-area container"
        id="portfolio"
      >
        <div className="custom-icon">
          <img
            src="assets/images/custom/work-scribble.svg"
            alt="custom"
          />
        </div>
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid">
            {portfolio_data.map((item, i) => (
              <div
                key={i}
                className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
