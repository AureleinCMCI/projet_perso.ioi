import React, { useEffect, useRef, useState } from 'react';
import devImage from '../image_video/dev.jpg';
import '../style/skill.css';

const skills = [
  { name: 'Python', level: 50 },
  { name: 'React/JS', level: 40 },
  { name: 'HTML/CSS', level: 85 },
  { name: 'Node.js', level: 30 },
  { name: 'flask', level: 50 },
];

function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Animation une seule fois
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className='progresse'> 
    <section className="skills-section" ref={sectionRef}>
      <div className="skills-bars">
        <h2>Mes compétences</h2>
        {skills.map(skill => (
          <div className="skill" key={skill.name}>
            <div className="skill-label">
              {skill.name}
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: visible ? `${skill.level}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="skills-image">
        <img src={devImage} alt="Développeur" />
      </div>
  
    </section>
    </div>
  );
}

export default Skills;
