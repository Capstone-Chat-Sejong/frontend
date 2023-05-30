import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;

  -ms-overflow-style: none; /* Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    /*Chrome */
    display: none;
  }
`;
