import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi, my name is Abraham. I am a dedicated and efficient full stack
          developer with 6 months experience in software development. I
          specialize in MERNG stack and their frameworks.
        </SectionText>
        <Button
          onClick={() =>
            (window.location = 'https://www.linkedin.com/in/abrahamfsantoso/')
          }
        >
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
