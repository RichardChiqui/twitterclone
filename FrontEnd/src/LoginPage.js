import React, { useEffect } from "react"


import CreatAcctpt1 from "./CreateAcctPt1";

import axios from "axios";


export default function LoginPage(){

    // React.useEffect(()=>{

    //     axios.get('/api')
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err))

    // })



    const [show, setShow] = React.useState(false)

    const styles= {display: show? "block":"none"}
    const backdrop = {filter: show? "brightness(50%)": "brightness(100%)"}

    function createAccount(){
        setShow(!show)
    }
   
    return(
    
        <div className="login" >
           

           
                <div className="blue-divider" style={backdrop}> 
                </div>
                

                <CreatAcctpt1 style={styles}/>
        <div className="login-info" style={backdrop}> 
            
        <div className="login-container">
        <img src="https://img.icons8.com/color/48/000000/twitter--v1.png"  />
   
            <h1>See what's happening in the world right now</h1>
            <h2>Join Twitter Today.</h2>

            <div className="login-btns">
            
                <button type="button" onClick={createAccount} className="signup-btn" > Sign up</button>

                <button type="button" className="login-btn"> Log in </button>
            </div>
        </div>
            </div>

        

                

                
                
            </div>
    
            
    )
}