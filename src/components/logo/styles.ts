import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    height: 100%;
  }

  > span {
    color: ${({ theme }) => theme.colors.cake['200']};
    font-size: 0.75rem;
    line-height: 1.6;
  }

  @media ${({ theme }) => theme.screens.md} {
    flex-direction: column;
    align-items: flex-end;
    gap: 0;

    max-width: 12rem;
  }
`
