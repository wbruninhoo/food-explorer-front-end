import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 0.5rem;
  inset: 0;
  z-index: 3;
  &[data-dialog-is-open='true'] {
    display: flex;

    aside {
      animation: show 300ms forwards ease-in-out;
    }
  }

  @keyframes show {
    100% {
      transform: translate(0);
    }
  }
`

export const Overlay = styled.div`
  background: rgb(0 0 0 / 0.7);
  position: absolute;
  inset: 0;
`
export const Content = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 25rem;
  background: ${({ theme }) => theme.colors.dark['400']};
  border: 1px solid ${({ theme }) => theme.colors.dark['900']};
  border-radius: 0.5rem;
  gap: 1rem;
  padding: 1rem;
  transform: translateY(-100%);
  transition: transform 300ms;
`
export const Header = styled.div`
  > h1 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  > button {
    width: 100%;
    padding: 1rem 1.25rem;

    span {
      font-size: 0.875rem;
      line-height: 1;
    }

    div:has(svg) {
      height: 0.875rem;
      width: 0.875rem;
    }
  }
`
