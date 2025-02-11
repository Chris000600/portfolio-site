import Link from 'next/link';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface BlogCardProps {
  images?: string[];
  date: string;
  category: string;
  title: string;
  summary: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  images,
  date,
  title,
  summary,
  category
}) => {
  return (
    <article className="postbox__item format-image mb-50 transition-3">
      {images && (
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          navigation={{
            nextEl: '.postbox-slider-button-next',
            prevEl: '.postbox-slider-button-prev'
          }}
          modules={[Navigation, Autoplay]}
          className="postbox__thumb postbox__slider swiper-container w-img p-relative"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="postbox__slider-item swiper-slide"
            >
              <img
                src={image}
                alt=""
              />
            </SwiperSlide>
          ))}

          <div className="postbox__nav">
            <button className="postbox-slider-button-next">
              <i className="fa-regular fa-angle-right"></i>
            </button>
            <button className="postbox-slider-button-prev">
              <i className="fa-regular fa-angle-left"></i>
            </button>
          </div>
        </Swiper>
      )}
      <div className="postbox__content">
        <div className="postbox__meta">
          <span>
            <a href="">
              <i className="fa-light fa-clock"></i>
              {date}
            </a>
          </span>
          <span>
            <a href="">
              <i className="fa-light fa-layer-group"></i>
              {category}
            </a>
          </span>
        </div>
        <h3 className="postbox__title">
          <Link href="/blog-details">{title}</Link>
        </h3>
        <div className="postbox__text">
          <p>{summary}</p>
        </div>
        <div className="postbox__read-more">
          <Link
            href="/blog-details"
            className="theme-btn"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
