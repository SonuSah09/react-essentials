export const Products = (props) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <p>Price: ${props.price}</p>
            <p>In Stock: {props.inStock ? "Yes" : "No"}</p>
            <p>Categories: {props.categories.join(", ")}</p>
        </div>
    )
}

// Note: We can use destructring and avoid accessing using props  keyword in react. It's ,most commonly used nowadays:

export const Equipments = ({title, price, inStock, categories}) => {
    return(
        <div>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>In Stock: {inStock ? "Yes" : "No"}</p>
            <p>Categories: {categories.join(", ")}</p>
        </div>
    )
}