import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.dark['200']};
  border: solid 1px ${({ theme }) => theme.colors.dark['300']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 29rem;
  width: 100%;
  border-radius: 8px;
  gap: 0.75rem;
  padding: 1.5rem;
  overflow: hidden;

  position: relative;
  cursor: pointer;

  &:hover {
    img {
      filter: saturate(1);
    }
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  border-radius: 100%;

  &,
  > img {
    width: 100%;
    max-width: 10rem;
  }

  > img {
    filter: saturate(0.6);
    transition: filter 300ms;
  }
`

export const Title = styled.strong`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
`

export const Description = styled.p`
  display: none;
  padding-inline: 1rem;

  @media ${({ theme }) => theme.screens.md} {
    display: block;

    color: ${({ theme }) => theme.colors.light['400']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.6;
    text-align: center;
  }
`

export const Price = styled.span`
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.cake['200']};
  font-size: 2rem;
  line-height: 1.6;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  & > :last-child {
    padding: 0.5rem 1.5rem;

    > span {
      line-height: 1;
    }
  }

  @media ${({ theme }) => theme.screens.md} {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & > :last-child {
      padding: 0.75rem 1.5rem;

      > span {
        line-height: 1.5rem;
      }
    }
  }
`

export const IconButton = styled.button`
  background: none;
  border: none;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  &,
  > svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  > svg {
    transition: filter 200ms;
  }

  &:hover {
    > svg {
      filter: brightness(0.8);
    }
  }
`
