import { getProjects } from '@/lib/projects';
import Count from '../common/Count';

// HTML
// CSS
// TailwindCSS
// Typescript
// Javascript
// NEXT
// React
// React Native
// SQL
// GraphQL
// cypherQL
// SurrealQL
// python
// java
// C
// C++
// C#
// Rust
// nodeJS

export default async function AboutArea() {
  const response = await getProjects();
  const projects = JSON.parse(response);
  const projectLength = projects.length;

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
      title: 'Completed Projects',
      count: projectLength,
      cls: ''
    }
  ];

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
                    I’m Chris, a Jakarta-based AI analyst and programmer with a
                    B.S. in Computer Science. I specialize in AI optimization,
                    business intelligence, and workflow automation to help
                    businesses operate more efficiently.
                  </p>
                  <p>
                    With expertise in modern tech stacks like Next.js, React
                    Native, and Python, I also leverage emerging technologies
                    such as AI Agents, LLMs, and HubSpot CRM. This allows me to
                    develop data-driven solutions that drive smarter business
                    decisions.
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
