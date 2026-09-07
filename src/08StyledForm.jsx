
// JSX rule-- attriburte names must be written in camelCase to avid conflicts with javascript keywords--

export const StyledForm = () => {
    return(
        <form class="contact-form">
            <label for="Username">Username:</label> 
            <input type="text" name="" id="username" className="form-input" />
            <br />
            <label htmlFor="Email">Email:</label>
            <input type="email" id="email" className="form-input" tabindex="1" />
        </form>
    )
}
// Here, we will see console errors because-- class should be className, for should be htmlFor and tabindex should be tabIndex.