import styled from "@emotion/styled";

const ImageGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3px;

  img {
    width: 100%;
    height: 100%;
    max-height: 30vw;
    object-fit: cover;
    object-position: center;
  }
`;

export { ImageGrid };
