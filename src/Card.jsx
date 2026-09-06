import React from "react"

// With JSX- clean and readable
export const Card = () => {
   return (
    <div id="card">
        <h2>Welcome Card</h2>
        <p>
            This is a <span id="hifghlight">paragraph</span> with text
        </p>
        <button>Click Me</button>
    </div>
   ) 
}


// Without JSX - looks messy

export const CardWithoutJsx = () => {
    return (
        React.createElement(
            "div", 
            {id: "card"}, 
            React.createElement("h2", null, "Welcome Card 2"),
            React.createElement(
                "p",
                null,
                "This is a ",
                React.createElement("span", {id: "highlight"}, "new paragraph "), 
                "with text"
            ),
            React.createElement("button", null, "Click it")
        )
    )
}