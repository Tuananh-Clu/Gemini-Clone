import { createContext, useState } from "react";
import main from "../config/config"; 
export const Context=createContext();

const ContextProvider=(props)=>{
const [input,setinput]=useState('');
const [result,setResult]=useState(false);
const [isLoading,setiSloading]=useState(false);
const [prevPrompts,setprevPrompts]=useState([]);
const [resultData,setresultData]=useState("");
const [recentPrompts,setrecentPromps]=useState("")






const onSent = async (prompt) => {
    setResult(true);
    setiSloading(true);
    setresultData("");

    let response;

    if (prompt !== undefined) {
        response = await main(prompt);
        setrecentPromps(prompt);
    } else {
        setprevPrompts((prev) => [...prev, input]);
        setrecentPromps(input);
        response = await main(input);
    }

    function delayparam(index, nextword) {
        setTimeout(() => {
            setresultData((prev) => prev + nextword + " ");
        }, 75 * index);
    }

    // Format the response: bold text between ** and replace * with <br>
    let newRespone = response.split("**");
    let responseArray = "";

    for (let i = 0; i < newRespone.length; i++) {
        if (i % 2 === 1) {
            responseArray += "<b>" + newRespone[i] + "</b>";
        } else {
            responseArray += newRespone[i];
        }
    }

    let newresponse2 = responseArray.split("*").join("</br>");
    let newresponse3 = newresponse2.split(" ");

    for (let i = 0; i < newresponse3.length; i++) {
        const nextword = newresponse3[i];
        delayparam(i, nextword);
    }

    setiSloading(false);
    setinput("");
};



    const ContextValue={
        input,
        setinput,
        result,
        resultData,
        prevPrompts,
        setprevPrompts,
        isLoading,
        onSent,
        recentPrompts,
        setrecentPromps,
        


    }
    return(
        <Context.Provider value={ContextValue}>
            {props.children}
    </Context.Provider>
    )
}
export default ContextProvider;
