import { UserInfo } from "./12UserInfo"

// export const UserCard = ({name},{age},{city},{email}) => {
//     return (
//         <div>
//             <h2>User Details</h2>
//             <UserInfo name={name} age={age} city={city} email = {email}/>
//         </div>
//     )
// }

// Instead of writing different props multiple time, we should use spread operator


// export const UserCard = (props) => {
//     return (
//         <div>
//             <h2>User Details</h2>
//             <UserInfo {...props}/>
//         </div>
//     )
// }

// also if we need to pass all props and except 1 or 2 prop, in that case we can use spread and rest like below: 


export const UserCard = ({id, ...rest}) => {
    return (
        <div>
            <h2>User {id} Details</h2>
            <UserInfo {...rest}/>
        </div>
    )
}