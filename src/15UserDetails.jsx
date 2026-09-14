//1. coditional rendering (if condition):  in below code, the status will be rendered based on defined conditions

// export const UserDetails = ({ name, isOnline, hideOffline }) => {
//     if(hideOffline && !isOnline){
//         return null // returning null means not render anything at all based on certain condition is true
//     }
//     if (isOnline) {
//         return (
//             <div>
//                 <h3>{name}</h3>
//                 <span>Status: 🟢 Online</span>
//                 <p>Available for chat</p>
//                 <button>Send a message</button>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <h3>{name}</h3>
//                 <span>Status: Offline</span>
//                 <p>Not Available</p>
//                 <small>Check back later</small>
//             </div>
//         )
//     }
// }

// Note: mentioning else condition is not required, the code will work the same.
/* example:
export const abc = () => {
    if(condition){
    return(///)
    }

    return (///)
*/
//2.  conditional rendering using ternary operators: 

// export const UserDetails = ({ name, isOnline, hideOffline }) => {
//     if (hideOffline && !isOnline) {
//         return null
//     }
//     return (
//         <div>
//             <h3>{name}</h3>
//             <span>{isOnline ? "Status: 🟢 Online" : "Status: Ofline"}</span>
//             <p>{isOnline ? "Available for chat" : "Not available"}</p>
//             {isOnline ? (
//                 <button>Send a message</button>
//             ) : (
//                     <small>Check back later</small>
//                 )
//             }
//         </div>
//     )
// }

// 3. Logical AND (&&) rendering:

// export const UserDetails = ({ name, isOnline, hideOffline, isPremium, isNewUser }) => {
//     if (hideOffline && !isOnline) {
//         return null
//     }
//     return (
//         <div>
//             <h3>{name}
//                 {isPremium && <span>⭐</span>}
//                 {isNewUser && <span>🎉</span>}
//             </h3>
//             <span>{isOnline ? "Status: 🟢 Online" : "Status: Ofline"}</span>
//             <p>{isOnline ? "Available for chat" : "Not available"}</p>
//             {isOnline ? (
//                 <button>Send a message</button>
//             ) : (
//                     <small>Check back later</small>
//                 )
//             }
//         </div>
//     )
// }


//4. Variables for complex logic:

export const UserDetails = ({ 
    name, 
    isOnline, 
    hideOffline, 
    isPremium, 
    isNewUser, 
    role
}) => {
    if (hideOffline && !isOnline) {
        return null
    }
let roleBadge = null;
if (role === "Admin") {
    roleBadge = <span>🔑 Admin</span>
} else if (role === "moderator") {
     roleBadge = <span>👲 Moderator</span>
} else if (role === "VIP") {
     roleBadge = <span>💠 Vip</span>
}

    return (
        <div>
            <h3>{name}
                {isPremium && <span>⭐</span>}
                {isNewUser && <span>🎉</span>}
                {roleBadge}
            </h3>
            <span>{isOnline ? "Status: 🟢 Online" : "Status: Ofline"}</span>
            <p>{isOnline ? "Available for chat" : "Not available"}</p>
            {isOnline ? (
                <button>Send a message</button>
            ) : (
                    <small>Check back later</small>
                )
            }
        </div>
    )
}