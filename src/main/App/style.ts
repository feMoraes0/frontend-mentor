import styled from 'styled-components';

export const Container = styled.main``;

export const Header = styled.header`
  margin: 2rem auto;
  text-align: center;
  width: 100%;
`;

export const HeaderText = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  line-height: 3rem;
`;

export const ArticlesBox = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin-top: 5rem;
`;

export const Article = styled.article`
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 .25rem .5rem rgba(0,0,0,.075);
  padding: 2rem;
`
