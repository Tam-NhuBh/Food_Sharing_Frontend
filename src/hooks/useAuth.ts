import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useAuth() {
    const auth = useContext(AuthContext);
    return {user: auth?.user, loading: auth?.loading}
}