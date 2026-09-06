import React from "react"

export const HelloJsx = () => {
    return <div id="container">
        <h1>Hello Sonu, here's the component with JSX</h1>
    </div>
}

export const HelloWithoutJsx = () => {
    // return React.createElement("div", { id: "container" }, "Hey Sonu, it's a component without a JSX"); // Here the String is not a h1 and in order to make it h1, we need to cll createElement method again and there we can pass h1 and it'll work.
    return React.createElement(
        "div", 
        { id: "container" }, 
        React.createElement("h1", null, "Hey Sonu, it's a component without a JSX")
    );
} 