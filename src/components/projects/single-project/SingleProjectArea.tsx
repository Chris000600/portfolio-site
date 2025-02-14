'use client';
import { useState } from 'react';
import img_1 from '@/assets/images/projects/img1.png';
import img_2 from '@/assets/images/projects/img2.png';
import img_3 from '@/assets/images/projects/img3.png';
import img_4 from '@/assets/images/projects/img4.png';
import markdownit from 'markdown-it';
import ImagePopup from '@/modals/ImagePopup';
import Project from '@/types/project';
import Link from 'next/link';

const md = markdownit();

export default function SingleProjectArea({ project }: { project: Project }) {
  const parsedContent = md.render(project?.description || '');

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
                <h2>Description</h2>
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

          <div className="row pt-60">
            {images.map((image, i) => (
              <div
                className="col-lg-6"
                key={i}
              >
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleImagePopup(i)}
                  className="work-popup"
                >
                  <div className="single-image wow fadeInUp delay-0-2s">
                    <img
                      src={image}
                      style={{
                        height: '40vh',
                        width: '100%',
                        objectFit: 'cover',
                        border: '2px solid #272727', // Added border style
                        borderRadius: '1rem'
                      }}
                      alt="gallery"
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
