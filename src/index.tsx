import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme = {
    textColor: "whitesmoke",
    backgroundColor: "#111",
};

const lightTheme = {
    textColor: "#111",
    backgroundColor: "whitesmoke",
};

// Theme : ThemeProvider를 통해서 theme을 App에 전달 (props)
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
