import styled from "@emotion/styled";
import { FullBlockButton } from "../../component/sementic/Button";
import { Main } from "../../layout/Main";

const img =
  "https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2FsbHBhcGVyc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60";

const _img = styled.img`
  margin: 5%;
  width: 90%;
  height: 85vw;

  border-radius: 5px;
  box-shadow: 0px 0px 30px 0px rgba(94, 80, 108, 0.75);
`;

const _form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  input[type="file"] {
    height: 0px;
  }

  label {
    display: inline-block;
    padding: 0.5em 0.75em;
    color: #999;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-radius: 0.25em;
  }
`;

export default function UploadImage() {
  return (
    <Main>
      <_img src={img} />
      <_form>
        <label htmlFor="file">사진 선택하기</label>
        <input type="file" id="file"></input>
        <a href="/write/write">
          <FullBlockButton>업로드</FullBlockButton>
        </a>
      </_form>
    </Main>
  );
}
