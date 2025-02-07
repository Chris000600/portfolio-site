'use client';
import { useEffect } from 'react';

export default function BrandArea() {
  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll('.scroller');
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', 'true');
        const scrollerInner = scroller.querySelector('.scroller__inner');
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div className="company-design-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Companies I Worked With</h2>
              <div className="company-list">
                <div
                  className="scroller"
                  data-direction="left"
                  data-speed="slow"
                >
                  <div className="scroller__inner align-items-center">
                    <img
                      style={{ height: '50px', objectFit: 'contain' }}
                      src="assets/images/client-logos/partner6.png"
                      alt="Emtek"
                    />
                    <img
                      style={{ height: '50px', objectFit: 'contain' }}
                      src="assets/images/client-logos/partner7.png"
                      alt="Vidio"
                    />
                    <img
                      style={{ height: '50px', objectFit: 'contain' }}
                      src="assets/images/client-logos/partner8.png"
                      alt="Artisse"
                    />
                    <img
                      style={{ height: '50px', objectFit: 'contain' }}
                      src="assets/images/client-logos/partner4.png"
                      alt="SF"
                    />
                    <img
                      style={{ height: '100px', objectFit: 'contain' }}
                      src="assets/images/client-logos/partner9.png"
                      alt="Clinic"
                    />
                    <img
                      style={{ height: '100px', objectFit: 'contain' }}
                      src="assets/images/client-logos/partner5.png"
                      alt="VUS"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
