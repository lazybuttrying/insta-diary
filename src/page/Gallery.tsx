import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Main } from "../layout/Main";
import { FullBlockButton } from "../component/sementic/Button";
import { ImageGrid } from "../component/ImageGrid";

const vertical =
  "https://images.unsplash.com/photo-1656182774365-a11215264103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60";
const horizon =
  "https://images.unsplash.com/photo-1656189384867-8cbd70280682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60";

export default function Gallery() {
  return (
    <Main>
      <Link to="/write/upload-image">
        <FullBlockButton> 게시물 올리기</FullBlockButton>
      </Link>

      <ImageGrid>
        <a href="/view/1">
          <img src={vertical} alt="사진" />
        </a>
        <a href="/view/2">
          <img src={horizon} alt="사진" />
        </a>
        <a href="/view/3">
          <img src={vertical} alt="사진" />
        </a>
        <a>
          <img src={horizon} alt="사진" />
        </a>
        <a>
          <img src={vertical} alt="사진" />
        </a>
        <a>
          <img src={horizon} alt="사진" />
        </a>
        <a>
          <img src={vertical} alt="사진" />
        </a>
        <a>
          <img src={horizon} alt="사진" />
        </a>
      </ImageGrid>
    </Main>
  );
}
