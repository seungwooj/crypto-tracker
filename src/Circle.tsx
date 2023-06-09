import { useState } from "react";
import { text } from "stream/consumers";
import styled from "styled-components";

// interface: explanis how the obj will look
interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

// <> : used when extend another component
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: ${(props) => props.bgColor};
    border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

function Circle({ bgColor, borderColor, text = "default" }: CircleProps) {
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    );
}

interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: PlayerShape) => {
    return `Hello ${playerObj.name} you are ${playerObj.age} years old`;
};

sayHello({ name: "jang", age: 12 });

export default Circle;
