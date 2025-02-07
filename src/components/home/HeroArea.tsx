import Link from 'next/link';

export default function HeroArea() {
  return (
    <>
      <section
        id="home"
        className="main-hero-area"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2>Christopher</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-2s">
                <div className="clienti-reviews">
                  <ul className="clienti-profile">
                    <li>
                      <img
                        className="img-fluid"
                        src="assets/images/avatar/03.png"
                        alt="client"
                      />
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src="assets/images/avatar/02.svg"
                        alt="client"
                      />
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src="assets/images/avatar/01.png"
                        alt="client"
                      />
                    </li>
                  </ul>
                  <div className="reviews">
                    Digitalize <span>your Business</span>
                    <p>
                      Utilize the latest technologies to improve your workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img
                  src="assets/images/about/me1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <p>
                  Hi, I'm Chris—a seasoned programmer helping businesses
                  digitalize, optimize, and run smarter with AI and data.
                </p>

                <Link
                  href={'/contact'}
                  className="theme-btn"
                >
                  Get In touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
