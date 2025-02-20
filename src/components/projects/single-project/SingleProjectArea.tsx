'use client';
import { useEffect, useState } from 'react';
import markdownit from 'markdown-it';
import ImagePopup from '@/modals/ImagePopup';
import Project from '@/types/project';
import Link from 'next/link';

const md = markdownit();

export default function SingleProjectArea({ project }: { project: Project }) {
  const parsedContent = md.render(project?.description || '');

  // Track window width to check if mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 767);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImagePopup = (i: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  let images: string[] = [];
  images.push(project.thumbnail);
  project.images.map((image) => images.push(image));
  console.log(images);

  return (
    <>
      <div className="single-project-page-design">
        <div className="container pt-60 pb-40">
          {isMobile ? (
            <div className="row">
              <div className="col-lg-8">
                <div className="single-project-page-right wow fadeInUp delay-0-4s">
                  {parsedContent ? (
                    <article
                      className="prose max-w-4xl font-work-sans break-all"
                      dangerouslySetInnerHTML={{ __html: parsedContent }}
                    />
                  ) : (
                    <p className="no-result">No details provided</p>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-project-page-left wow fadeInUp delay-0-2s">
                  <div className="single-info">
                    <p>Date</p>
                    <h3>{project.date}</h3>
                  </div>
                  <div className="single-info">
                    <p>Tech</p>
                    <h3>{project.technology}</h3>
                  </div>
                  {project.link && (
                    <div className="single-info ">
                      <p>Link</p>
                      <Link
                        href={project.link}
                        target="_blank"
                      >
                        <h3>Visit Live Link</h3>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-4">
                <div className="single-project-page-left wow fadeInUp delay-0-2s">
                  <div className="single-info">
                    <p>Date</p>
                    <h3>{project.date}</h3>
                  </div>
                  <div className="single-info">
                    <p>Tech</p>
                    <h3>{project.technology}</h3>
                  </div>
                  {project.link && (
                    <div className="single-info ">
                      <p>Link</p>
                      <Link
                        href={project.link}
                        target="_blank"
                      >
                        <h3>Visit Live Link</h3>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-8">
                <div className="single-project-page-right wow fadeInUp delay-0-4s">
                  {parsedContent ? (
                    <article
                      className="prose max-w-4xl font-work-sans break-all"
                      dangerouslySetInnerHTML={{ __html: parsedContent }}
                    />
                  ) : (
                    <p className="no-result">No details provided</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="row pt-60">
            {images.map((image, i) => (
              <div
                className="col-md-4"
                key={i}
              >
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleImagePopup(i)}
                  className="work-popup"
                >
                  <div
                    className="portfolio-box single-image wow fadeInUp delay-0-2s"
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      height: '40vh'
                    }}
                  >
                    {/* Blurred background image */}
                    <img
                      src={image}
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
                      src={image}
                      alt=""
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        zIndex: 1
                      }}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <ImagePopup
          images={images}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </>
  );
}
