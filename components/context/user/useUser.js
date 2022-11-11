import {useContext} from "react";
import UserContext from "./UserContext";

export default () => {
    const context = useContext(UserContext);

    return context;
}