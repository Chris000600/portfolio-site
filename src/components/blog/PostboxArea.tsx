'use client';
import Link from 'next/link';
import BlogCard from './BlogCard';

// TODO
// - pagination
// - category
// - search?
export default function PostboxArea() {
  const images = [
    '/assets/images/blog/blog1.jpg',
    '/assets/images/blog/blog2.jpg',
    '/assets/images/blog/blog3.jpg'
  ];
  return (
    <>
      <section className="blog-page-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="postbox__wrapper">
                <BlogCard
                  category={'AI Breakthrough'}
                  images={['/assets/images/blog/blog1.jpg']}
                  date={'January 22, 2022'}
                  title={'Create a Landing Page That Performs Great'}
                  summary={
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]'
                  }
                />
                <BlogCard
                  category={'AI Breakthrough'}
                  images={['/assets/images/blog/blog2.jpg']}
                  date={'January 22, 2022'}
                  title={'Starting and Growing a Career in Web Design'}
                  summary={
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat […]'
                  }
                />
                <BlogCard
                  category={'AI Breakthrough'}
                  images={images}
                  date={'January 22, 2022'}
                  title={
                    'Visiting the Ads of the World blog is like visiting museum'
                  }
                  summary={
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat […]'
                  }
                />

                <div className="tp-pagination mt-20">
                  <nav>
                    <ul>
                      <li>
                        <Link
                          href="/blog"
                          className="tp-pagination-prev prev page-numbers"
                        >
                          <svg
                            width="16"
                            height="11"
                            viewBox="0 0 16 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.17749 10.105L1.62499 5.55248L6.17749 0.999981"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.3767 5.55249L1.75421 5.55249"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>{' '}
                          Prev
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">1</Link>
                      </li>
                      <li>
                        <span className="current">2</span>
                      </li>
                      <li>
                        <Link href="/blog">3</Link>
                      </li>
                      <li>
                        <Link
                          href="/blog"
                          className="next page-numbers"
                        >
                          Next{' '}
                          <svg
                            width="16"
                            height="11"
                            viewBox="0 0 16 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.82422 1L14.3767 5.5525L9.82422 10.105"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.625 5.55249H14.2475"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4">
              <div className="blog_sidebar__wrapper pl-40">
                <div className="sidebar__widget mb-20">
                  <div className="sidebar__widget-content">
                    <div className="sidebar__search">
                      <form action="#">
                        <div className="sidebar__search-input">
                          <input
                            type="text"
                            placeholder="Enter your keywords..."
                          />
                          <button type="submit">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M19.0002 19.0002L17.2002 17.2002"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="sidebar__widget mb-45">
                  <div className="sidebar__widget-content">
                    <div className="sidebar__author">
                      <div className="sidebar__author-thumb">
                        <img
                          src="assets/images/blog/author.jpg"
                          alt=""
                        />
                      </div>
                      <div className="sidebar__author-content">
                        <h3 className="sidebar__author-title">
                          Christopher William
                        </h3>
                        <p>Business and Tech Enthusiast</p>
                        <div className="sidebar__author-social d-flex align-items-center justify-content-center">
                          <a
                            target="_blank"
                            href="https://wa.me/+6282113229245"
                          >
                            <i className="ri-whatsapp-line"></i>
                          </a>
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/christopherwilliam00/"
                          >
                            <i className="ri-linkedin-fill"></i>
                          </a>
                          <a
                            target="_blank"
                            href="https://github.com/Chris000600"
                          >
                            <i className="ri-github-fill"></i>
                          </a>
                          <a
                            target="_blank"
                            href="https://www.facebook.com/chris.will.00/"
                          >
                            <i className="ri-facebook-circle-fill"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__widget mb-45">
                  <h3 className="sidebar__widget-title">Category</h3>
                  <div className="sidebar__widget-content">
                    <ul>
                      {/* TODO */}
                      <li>
                        <Link href="/blog">
                          AI Breakthrough <span>10</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          Business Economics <span>08</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          Emerging Technologies <span>24</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          Web Development <span>37</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
