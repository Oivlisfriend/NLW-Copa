import { ReactNode, createContext } from "react";
import * as AuthSession from 'expo-auth-session'
interface UserProps {
    name: string;
    avatarUrl: string;
}
interface AuthProviderProps {
    children: ReactNode;
}
export interface AuthContextDataProps {
    user: UserProps;
    signIn: () => Promise<void>
}
export const AuthContext = createContext({} as AuthContextDataProps);
export function AuthContextProvider({ children }: AuthProviderProps) {
    console.log(AuthSession.makeRedirectUri({ }))
    async function signIn() {
        console.log('Vamos logar!');
    }
    return (
        <AuthContext.Provider value={
            {
                signIn,
                user: {
                    name: 'user',
                    avatarUrl: 'https://github.com/Oivlisfriend.png'
                }
            }}>
            {children}
        </AuthContext.Provider>
    )
}