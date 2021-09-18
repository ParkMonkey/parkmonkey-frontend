import { createContext, useContext, useState } from "react";

interface otherUserData {
    // add some here if we need it in future
}

interface AuthContextInterface {
    loggedIn: boolean,
    username: string,
    id: string,
    email: string,
    pfpUrl: string,
    otherUserData: otherUserData,
    login: (id:string, email:string, username:string, pfpUrl:string, otherUserData:otherUserData) => any,
    logout: () => any,
};

const AuthContextDefault:AuthContextInterface = {
    loggedIn: false,
    username: "",
    id: "",
    email: "",
    pfpUrl: "",
    otherUserData: {},
    login: (id:string, email:string, username:string, pfpUrl:string, otherUserData:otherUserData) => {},
    logout: () => {},
} 

const AuthContext = createContext<AuthContextInterface>(AuthContextDefault);

export function useAuth() {
    return useContext(AuthContext);
}

interface AuthContextProps {}
const AuthProvider: React.FC<AuthContextProps> = ({children}) => {
    const [data, setData] = useState<AuthContextInterface>(AuthContextDefault);

    const login = (id:string, email:string, username:string, pfpUrl:string, otherUserData:otherUserData) => {
        let temp = {...data};

        temp.loggedIn = true;
        temp.username = username;
        temp.id = id;
        temp.email = email;
        temp.pfpUrl = pfpUrl;
        temp.otherUserData = otherUserData;

        setData(temp);
    }

    const logout = () => setData(AuthContextDefault);

    const {loggedIn, username, id, email, pfpUrl, otherUserData} = data;
    const value = {
        loggedIn,
        username,
        id,
        email,
        pfpUrl,
        otherUserData,
        login,
        logout,
    }

    return (
    <>
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    </>);
}