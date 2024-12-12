import axios from "axios";
import { useState } from "react";

const useAxios =()=>{
    const baseUrl = "https://catfact.ninja/fact"
    const [response,setResponse]=useState()
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState()

    const fetchData = async (configObj)=>{
        const {method}=configObj;
        try {
            setLoading(true)
             setResponse("hello")
          const  {data} =await axios[method](baseUrl)
          setResponse(data.fact)

          console.log(data.fact);
          
        } catch (error) {
            setError(error)
        }
        finally{
            console.log("finished");
            setLoading(false);
            console.log(response);
            
        }
    }

    return {loading,error,response,fetchData}
}

export default useAxios;