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
