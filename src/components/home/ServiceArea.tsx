import Link from 'next/link';

export default function ServiceArea() {
  return (
    <>
      <section
        id="services"
        className="services-area"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <Link href={'/contact/1'}>
                <div className="service-item wow fadeInUp delay-0-2s">
                  <i className="ri-arrow-right-up-line"></i>
                  <h5>01</h5>
                  <h4>Dynamic Web Solutions</h4>
                  <p>
                    Crafting high-performance, visually stunning websites with
                    cutting-edge technology for a scalable and optimized digital
                    presence.
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-5">
              <Link href={'/contact/2'}>
                <div className="service-item wow fadeInUp delay-0-4s">
                  <i className="ri-arrow-right-up-line"></i>
                  <h5>02</h5>
                  <h4>1-on-1 Consulting</h4>
                  <p>
                    Improving business efficiency through data-driven
                    strategies.
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-5">
              <Link href={'/contact/3'}>
                <div className="service-item wow fadeInUp delay-0-6s">
                  <i className="ri-arrow-right-up-line"></i>
                  <h5>03</h5>
                  <h4>AI-Powered Optimization</h4>
                  <p>
                    Leveraging AI Agents to boost workflow productivity and
                    reduce inefficiencies.
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-lg-8 col-md-7">
              <Link href={'/contact/4'}>
                <div className="service-item wow fadeInUp delay-0-8s">
                  <i className="ri-arrow-right-up-line"></i>
                  <h5>04</h5>
                  <h4>Smart Systems Design</h4>
                  <p>
                    Developing tailored business systems, from mini-ERP to
                    enterprise solutions, ensuring security, efficiency, and
                    seamless integration.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
