import styled, { keyframes } from "styled-components";

// backtick 안은 모두 무조건 css
// styled-component안에서 props로 value전달이 가능하다
// styled-component를 extend해서 component 재사용이 가능하다 (styled(Box))
const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

// as : component의 htmlTag를 지정한 htmlTag로 바꿔 사용할 수 있음
// button -> href link
// attrs : styled-component를 정의할 때, 특정 attribute를 전달할 수 있음
const Btn = styled.button.attrs({ required: true })`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Wrapper = styled.div`
  display: flex;
`;

// keyframes : adding animation to the component
// selector : can select and html tag and apply css inside the styled-component
// you can write css like scss in the selector
const rotateAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
  }
50% {
  transform: rotate(180deg);
  border-radius: 100px;
  }
100% {
  transform: rotate(360deg);
  border-radius: 0px;
  }
`;
// You can select styled-component inside another styled-component
const Emoji = styled.span`
  font-size: 40px;
`;

const Text = styled.span`
  color: tomato;
`;

const NewBox = styled.div`
  height: 200px;
  width: 200px;
  background-color: purple;
  animation: ${rotateAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 100px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <>
      <Father>
        <Box bgColor="teal">
          <Btn>Bye</Btn>
          <Btn as="a" href="/">
            Hello
          </Btn>
          <Text />
          <span style={{ color: "red" }} />
        </Box>
        <Circle bgColor="tomato" />
      </Father>
      <Wrapper>
        <NewBox>
          <Emoji>😂</Emoji>
        </NewBox>
      </Wrapper>
    </>
  );
}

export default App;
