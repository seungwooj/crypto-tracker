import styled from "styled-components";

const Background = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
`;

// Theme : an object of styled-componets which has all the colors

function App() {
    return (
        <Background>
            <Title>Welcome!!</Title>
        </Background>
    );
}

export default App;
