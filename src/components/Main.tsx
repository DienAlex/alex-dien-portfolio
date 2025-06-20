import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import { Typewriter } from 'react-simple-typewriter';

// @ts-ignore
import { particlesJS } from 'particles.js';

function Main() {
  const [typingKey, setTypingKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingKey((prev) => prev + 1);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    try {
      // ✅ Load config from public folder
      particlesJS.load('particles-js', '/assets/particles/particles-config.json', () => {
        console.log('✅ Particles.js config loaded successfully');
      });
    } catch (err) {
      console.error('❌ Particles.js failed to load:', err);
    }
  }, []);

  return (
    <div className="container">
      <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}></div>
      <div className="about-section" style={{ position: 'relative', zIndex: 1 }}>
        <div className="image-wrapper">
          <img
            src="https://media.licdn.com/dms/image/v2/C4E03AQGPy8HyCimEXg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1648074839629?e=1755129600&v=beta&t=e5wbgIWMadiHpSVdkb3z7BumtU8vkHtRP5z8jBi99iw"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/DienAlex" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/alex-dien/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Alex Dien</h1>
          <p className="typing-text">
            <Typewriter
              key={typingKey}
              words={[
                'Product Management / Marketing / Data',
                'Creating Stories Using Data'
              ]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

          <a
            href="https://drive.google.com/file/d/1kR1LyGdTsEK79UtN3-FbALZ-OcsNoMAx/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="resume-button"
          >
            View Resume
          </a>

          <div className="mobile_social_icons">
            <a href="https://github.com/DienAlex" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/alex-dien/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
