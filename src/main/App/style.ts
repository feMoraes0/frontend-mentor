import styled from 'styled-components';

export const Container = styled.main``;

export const Header = styled.header`
  margin: 2rem auto;
  text-align: center;
  width: 100%;
`;

export const HeaderText = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  line-height: 3rem;
`;

export const ProjectsSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 5rem;
`;

export const Project = styled.article`
  width: 100%;
  border-radius: 1rem;
  border: .1rem solid #ccc;
`;

export const ProjectImagePreview = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const ProjectBoxContent = styled.div`
  padding: 2rem;
`;

export const ProjectName = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
`;

export const ProjectDescription = styled.p`
  font-size: 1.4rem;
  letter-spacing: .05rem;
  color: #aaa;
  font-weight: 300;
  margin-top: 1.5rem;
`;

export const ProjectFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
`;

interface LinkButtonInterface {
  bgColor: String|any;
}

export const LinkButton = styled.a<LinkButtonInterface>`
  border-radius: .5rem;
  border: none;
  font-size: 1.4rem;
  padding: 1rem 1.5rem;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  color: #FFFFFF;
  font-weight: 300;
  text-align: center;
  cursor: pointer;
`;
