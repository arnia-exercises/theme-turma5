import styled from "styled-components";

export const HeaderStyle = styled.div`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`