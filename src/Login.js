
//const myfirstelement = <h1>Hello React!</h1>
import { Navigate } from "react-router-dom";
import { AuthContext, useAuth } from "./auth/AuthProvider";
import DefaultLayout from "./layout/DefaultLayout";
import {useState, useEffect, useContext} from "react";



function Login(){
   

    //use state for inputs
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("");
    const [msg, setMessg] = useState("");
    const { login } = useContext(AuthContext);
     //USE EFECT to render the success message for 5 seconds
     useEffect(() => {
        setTimeout(() => {
          setMessg("");
        }, 5000);
      },[msg]);
    //Authentication redirect
    const auth = useAuth();
    if (auth.isAuthenticated) {
        return <Navigate to="/Dashboard"/>
    } ///elseeee
    ///Authentication
    

    //input handler
    const handler = (e,type) => {
        switch(type){
            case "email":
                setError("");
                setEmail(e.target.value);
                if(e.target.value === ""){
                    setError("Username is blank");
                }
                break;

            case "pass":
                setError("");
                setPassword(e.target.value);
                if(e.target.value === ""){
                    setError("Password is blank");
                }
                break;
                default:
        }
    }
    
    //Login
    const handleSubmit = (event) => {
        event.preventDefault()
        if (email !== "" && password != "") {
            var url = "http://localhost:80/Login-React/src/backend/login.php";
            var headers = {"Accept" : "application/json",
                            "Content-type" : "application/json"};
            var Data = {
                email: email,
                password: password
            };
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json()).then((response) => {
                if(!response.value)
                {
                setError(response.result);
                }
                else{
                setMessg(response.result);
                login();
                //useAuth().setIsAuthenticated(response.result);
                }
                console.log(response.result); //deconstructing recived json response for testing purpuses
            }).catch((err) => {
                setError(err);
                console.log(err);
            })
        } else
        {
            setError("All fields are required");
        }
    }
return(
<>
    <DefaultLayout>
        <div id="container">
        
        <div id="box1" className="child_container">
            <div className="test-1">
            <h2>Welcome!</h2>
            <span className="span_index">This is a simple log in that i designed on my free time, feel free to check it out.</span>
            </div>
        </div>
    
        <div id="box2" className="child_container">
        
            <div className="test-1">
                <p>
                    {
                        error !== "" ?
                        <span style={{color: "red"}} className="span_error">{error}</span>:
                        <span style={{color: "green"}} className="span_index">{msg}</span>
                    }
                </p>

            <form>
             <h2>Sign in</h2>
             
             <input 
             className="input_index" 
             type="email" 
             name="e_mail" 
             id="e_mail" 
             placeholder="Your e_mail" 
             value={email} 
             onChange={(e) => handler(e, "email")}/> <br></br>

             <input className="input_index" 
             type="password" 
             name="password" 
             id="password" 
             placeholder="Your password" 
             value={password} 
             onChange={(e) => handler(e, "pass")}/> <br></br><br></br>

             <input className="button_index" 
             type= "submit" 
             name="submit" 
             value="Go!"
             onClick={handleSubmit}/>
             </form>
            </div>
    
        </div>
        
        
        </div>
    </DefaultLayout>
    
</>)
};

/*
function Hello(props) {
  return <h1> Hello React {props.name}! </h1>
}*/

//ReactDOM.render(myfirstelement, document.getElementById('root'));
//ReactDOM.render(<Hello name='Pepe'/>, document.getElementById('root'));
export default Login