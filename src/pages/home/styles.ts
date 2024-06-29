import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`
export const Content = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  flex: 1;
  margin: 0 auto;
  max-width: 70rem;
  width: 100%;
`
export const HeroPC = styled.div`
  display: none;
  flex: 1;

  > img {
    width: 100%;
  }

  @media ${({ theme }) => theme.screens.sm} {
    display: block;
  }
`
export const HeroMobile = styled.div`
  display: block;
  flex: 1;

  > img {
    width: 100%;
  }

  @media ${({ theme }) => theme.screens.sm} {
    display: none;
  }
`
export const EmptyDishes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;
  min-height: 10rem;
  margin-bottom: 3rem;

  > img {
    max-width: 15rem;
    margin-bottom: 1rem;

    opacity: 0.6;
  }

  > div {
    margin-top: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.cake['200']};
    text-decoration: underline;
    text-transform: uppercase;
  }
`
