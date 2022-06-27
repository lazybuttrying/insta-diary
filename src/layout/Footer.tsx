import styled from "@emotion/styled";

let FooterWrapper = styled.footer`
  /* background-color: grey; */
  border-top: 1px solid #ddd;
  min-height: 5vh;
  padding: 20px 0;
  text-align: center;
  font-size: 12px;
  bottom: 0;
  width: 100%;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>Copyright ⓒ 2022 이게 뭐냐</p>
    </FooterWrapper>
  );
}
