import React from 'react';
import { Project, LinkButton, ProjectFooter,ProjectsSection, ProjectName, Container, Header, HeaderText, ProjectDescription, ProjectBoxContent, ProjectImagePreview, } from './style';

import OrderSummaryComponentPreview from '../projects/OrderSummaryComponent/design/desktop-preview.jpg';

const App = () => {
  return (
    <Container>
      <Header>
        <HeaderText>Projects</HeaderText>
      </Header>
      <ProjectsSection>
        <Project>
          <ProjectImagePreview src={OrderSummaryComponentPreview} alt='Order summary component preview' />
          <ProjectBoxContent>
            <ProjectName>
              Order summary Component
            </ProjectName>
            <ProjectDescription>
              A perfect project for newbies who are starting to build confidence with layouts!
            </ProjectDescription>
            <ProjectFooter>
              <LinkButton bgColor='hsl(245, 75%, 52%)'>Access</LinkButton>
            </ProjectFooter>
          </ProjectBoxContent>
        </Project>
      </ProjectsSection>
    </Container>
  );
}

export const AppPath = '/';
export default App;
