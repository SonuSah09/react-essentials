import { Children } from "react"

// Nesting the jsx using children prop
export const CardWrapper = ({title, children}) => {
    return(
        <div className="Card">
            <h2>{title}</h2>
            <div className="Card-content">
                Nested Content goes here
                {children}
            </div>
        </div>
    )
}