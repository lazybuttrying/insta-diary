import styled from "@emotion/styled";
import { FullBlockButton } from "../../component/sementic/Button";

const TextareaForm = styled.form`
  font-size: 1em;
  font-weight: bold;

  textarea {
    padding: 10px;
    max-width: 100%;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #736f6f86;
    color: white;
    box-shadow: 10px #918bd3;
    width: 95%;
    height: 50vh;
  }

  label {
    font-size: 1.5em;
    display: block;
    margin-bottom: 10px;
  }
`;

export default function Write() {
  return (
    <TextareaForm>
      <label htmlFor="story">Tell us your story</label>

      <textarea
        id="story"
        name="story"
        defaultValue="content"
        placeholder="It was a dark and stormy night..."
      ></textarea>

      <FullBlockButton>완성하기</FullBlockButton>
    </TextareaForm>
  );
}
