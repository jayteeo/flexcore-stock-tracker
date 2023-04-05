import { CoresContext } from "../context/CoreContext";
import { useContext } from "react";

export const useCoresContext = () => {
    const context = useContext(CoresContext);

    return context
}