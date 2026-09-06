import React from "react"

// Use of React.Fragment to wrap up the multiple elements in a parent container to avoid using div element so css or other properties can be applied properly
export const UserProfile = () => {
    return(
        <React.Fragment>
            <h1>This is user profile of user1</h1>
            <p>User name is Sonu</p>
        </React.Fragment>
    )
}

// We can use empty angle brackets"<> </>" to avoid typing React.Fragment and importing react

export const UserProfile2 = () => {
    return(
        <>
          <h1>This is user profile of user2</h1>
            <p>User name is Rudra</p>    
        </>   
    )
}
