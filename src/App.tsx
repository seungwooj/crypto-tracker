import { useState } from "react";

// check ReactJS form event
function App() {
    const [value, setValue] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setValue(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("event", event);
        console.log("hello", value);
        console.log("hello", event.target[0].value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    placeholder="username"
                />
                <button>Log in</button>
            </form>
        </div>
    );
}

export default App;
