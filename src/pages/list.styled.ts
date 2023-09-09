import styled from "styled-components";

export const List = styled.div`
`

export const Item = styled.div`
  padding: 1rem;
  margin-bottom: .5rem;
`

export const Image = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 1rem;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.secondary}
`