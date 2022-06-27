import styled from "@emotion/styled";

let HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  /* background-color: grey; */
  padding: 20px;
  min-height: 10vh;

  a {
    text-decoration: none;
  }
  a:visited {
    color: white;
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
  }
`;

let Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  line-height: 3em;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <a href="/">
        <h1>눈물의 별그램</h1>
      </a>
      <nav>
        <Ul>
          <li>눈물</li>
          <li>콧물</li>
          <li>줄줄</li>
        </Ul>
      </nav>
    </HeaderWrapper>
  );
}
