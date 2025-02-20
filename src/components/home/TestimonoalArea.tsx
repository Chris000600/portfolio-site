// TODO
// make them grid-style like in portfolio area

import Link from 'next/link';

// make long messages "see more"
export default function TestimonoalArea() {
  return (
    <>
      <section className="testimonials-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Recommendations</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <Link
                href={
                  'https://www.linkedin.com/in/christopherwilliam00/details/recommendations/?detailScreenTabIndex=0'
                }
                target="_blank"
              >
                <div className="testimonial-item wow fadeInUp delay-0-2s">
                  <div className="author">
                    <img
                      src="assets/images/testimonials/author6.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="text">
                    Chris exhibits an extraordinary attention to detail,
                    consistently solving problems that others struggle in. His
                    reliability and precision were integral to the smooth
                    execution of our most critical projects. Chris operates with
                    a level of thoroughness and commitment that significantly
                    elevates the quality of any work he undertakes, ensuring
                    nothing is overlooked and every challenge is meticulously
                    addressed.
                  </div>
                  <div className="testi-des">
                    <h5>William Wu</h5>
                    <span>CEO & Founder - Artisse AI</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-md-6">
              <Link
                href={
                  'https://www.linkedin.com/in/christopherwilliam00/details/recommendations/?detailScreenTabIndex=0'
                }
                target="_blank"
              >
                <div className="testimonial-item wow fadeInUp delay-0-6s">
                  <div className="author">
                    <img
                      src="assets/images/testimonials/author8.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="text">
                    I know Chris while I was working at Artisse as an analyst.
                    Chris is one person who can wear many hats. We all know how
                    it is like working in a startup, its fast paced and you need
                    to sometimes do a lot of tasks at the same time. Whether it
                    is data, or working with research teams, or be a part of B2B
                    developments or hiring, Chris can manage it all. He has my
                    highest recommendation!
                  </div>
                  <div className="testi-des">
                    <h5>Hrishita Sarkar</h5>
                    <span>Analyst - Artisse AI</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-12 col-md-12">
              <Link
                href={
                  'https://www.linkedin.com/in/christopherwilliam00/details/recommendations/?detailScreenTabIndex=0'
                }
                target="_blank"
              >
                <div className="testimonial-item wow fadeInUp delay-0-4s">
                  <div className="author">
                    <img
                      src="assets/images/testimonials/author7.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="text">
                    I had the pleasure of working closely with Chris when he
                    joined our team to support AI research and initiatives in
                    the Founders Office. From day one, he brought an impressive
                    mix of technical expertise, strategic thinking, and a
                    proactive attitude. Chris was instrumental in streamlining
                    our AI research and B2B initiatives, and his ability to
                    tackle complex challenges with creativity and focus made a
                    big impact. He didn’t just deliver on tasks—he took
                    ownership, drove results, and was always a step ahead in
                    anticipating what was needed. On top of all that, Chris is a
                    fantastic team player with a positive energy that inspires
                    those around him. Any team would be lucky to have him!
                  </div>
                  <div className="testi-des">
                    <h5>Aditya Nair</h5>
                    <span>Co-Founder & CPO - Artisse AI</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
