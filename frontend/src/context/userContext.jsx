// import { createContext, useState } from "react";

// export const UserContext = createContext();

// const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     const updateUser = (userData) => {
//         setUser(userData);
//     };

//     const clearUser = () => {
//         setUser(null);
//     };
//     return (
//         <UserContext.Provider
//             value={{
//                 user,
//                 updateUser,
//                 clearUser
//             }}
//         >
//             {children}
//         </UserContext.Provider>
//     );
// };

// export default UserProvider;

import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("user");
        return saved ? JSON.parse(saved) : null;
    });

    const updateUser = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const clearUser = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && !user) {
            // TODO: verify token via API
            // Example:
            // fetch('/api/verify', { headers: { Authorization: `Bearer ${token}` }})
            //   .then(res => res.json())
            //   .then(data => updateUser(data.user))
        }
    }, [user]);

    return (
        <UserContext.Provider
            value={{
                user,
                updateUser,
                clearUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;