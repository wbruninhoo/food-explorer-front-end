import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 0.5rem;
  inset: 0;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    color: ${({ theme }) => theme.colors.light['100']};
    font-size: 3rem;
    font-weight: 700;
  }
`
