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
          <div className="row">
            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-title">About Me</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>
                  "I’m Christopher William, a programmer and AI analyst based in
                  Jakarta, Indonesia, with a B.S. in Computer Science from The
                  University of Western Australia. I specialize in AI
                  optimization, business intelligence, and workflow automation,
                  helping businesses enhance performance with cutting-edge
                  technology. Proficient in TypeScript, Python, and Rust, I
                  leverage modern tools like AI Agents, Next.js, and Tauri,
                  backed by a strong foundation in data analysis and machine
                  learning. Fluent in English, Mandarin, and Bahasa Indonesia, I
                  combine technical expertise with strategic problem-solving to
                  drive smarter business solutions."
                </p>
              </div>
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
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
        </div>
      </section>
    </>
  );
}
