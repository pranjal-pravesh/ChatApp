import { useSelector } from "react-redux";
import CallDetails from "./callDetails";
import { CallThreads } from "./callThreads";

export default function CallTab(){
    var theme = useSelector(state => state.theme);
    return(
        <>
        <CallThreads/>
        <CallDetails theme={theme}/>
        </>
        
    )
}