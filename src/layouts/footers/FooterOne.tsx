import Link from 'next/link';

export default function FooterOne() {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top">
                <p> Have a project in mind?</p>
                <h2>
                  <Link href={'/contact'}>lets work</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-6">
              <div>
                <ul className="d-flex flex-row align-items-center list-unstyled">
                  <li className="mx-2">
                    <a
                      target="_blank"
                      href="https://wa.me/+6282113229245"
                    >
                      <i className="ri-whatsapp-line"></i>
                    </a>
                  </li>
                  <li className="mx-2">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/christopherwilliam00/"
                    >
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                  <li className="mx-2">
                    <a
                      target="_blank"
                      href="https://github.com/Chris000600"
                    >
                      <i className="ri-github-fill"></i>
                    </a>
                  </li>
                  <li className="mx-2">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/chris.will.00/"
                    >
                      <i className="ri-facebook-circle-fill"></i>
                    </a>
                  </li>
                  <li className="mx-2">
                    <Link href={'/contact'}>
                      <i className="ri-mail-line"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-6">
              <p className="copy-right-text">
                {' '}
                © Copyright {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
