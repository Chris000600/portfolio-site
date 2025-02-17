import Count from '../common/Count';

// TODO
const counter_data = [
  {
    id: 1,
    title: 'Years Of Coding Experience',
    count: 10,
    cls: 'plus'
  },
  {
    id: 2,
    title: 'Programming Languages',
    count: 19,
    cls: ''
  },
  {
    id: 3,
    title: 'Projects',
    count: 32,
    cls: 'plus'
  }
];

export default function AboutArea() {
  return (
    <>
      <section
        id="about"
        className="about-area"
      >
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-lg-3 col-sm-3">
              <div className="d-flex flex-column h-100">
                <div className="hero-counter-area flex-fill d-flex flex-column justify-content-between align-items-center wow fadeInUp delay-0-4s">
                  {counter_data.map((item, i) => (
                    <div
                      key={i}
                      className="counter-item counter-text-wrap"
                    >
                      <span className={`count-text ${item.cls}`}>
                        <Count number={item.count} />
                      </span>
                      <span className="counter-title">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="d-flex flex-column h-100">
                <div className="about-content-part flex-fill wow fadeInUp delay-0-2s">
                  <p>
                    I’m Chris, a programmer and AI analyst based in Jakarta,
                    Indonesia, with a B.S. in Computer Science from The
                    University of Western Australia. I specialize in AI
                    optimization, business intelligence, and workflow
                    automation; helping businesses enhance performance with
                    cutting-edge technology.
                  </p>
                  <p>
                    Proficient in modern coding languages like TypeScript,
                    Python, and Rust, I leverage new technologies such as AI
                    Agents, Next.js, and Tauri to build data-driven solutions
                    that drive smarter business outcomes."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
