// Rendering Lists in react

// export const ProductList = () => {
//     const products = [
//         {
//             id: 1,
//             name: "Laptop",
//             price: 999
//         },
//         {
//             id: 2,
//             name: "Phone",
//             price: 699
//         },
//         {
//             id: 3,
//             name: "Tab",
//             price: 499
//         }
//     ]
    
//     return (
//         <div>
//             <h2>Product List</h2>
//             {
//                 products.map((product) => {
//                     return (
//                         <div>
//                             {product.name}
//                             <p>Price: ${product.price}</p>
//                         </div>
//                     )
//                 })}
//         </div>
//     )
// }

// Note: We can also store the results of map method in a seperate variable to make code cleaner.

// example:

export const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 999
        },
        {
            id: 2,
            name: "Phone",
            price: 699
        },
        {
            id: 3,
            name: "Tab",
            price: 499
        }
    ]

    const productElements = products.map((product) => {
        return (
            <div>
                {product.name}
                <p>Price: ${product.price}</p>
            </div>
        )
    })

    return (
        <div>
            <h2>Product List</h2>
            {productElements} 
        </div>
    )
}