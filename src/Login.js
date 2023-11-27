
//const myfirstelement = <h1>Hello React!</h1>
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth/AuthProvider";
import DefaultLayout from "./layout/DefaultLayout";
import {useState} from "react";

    
function Login(){

    //use state for inputs
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    //Authentication redirect
    const auth = useAuth();
    if (auth.isAuthenticated) {
        return <Navigate to="/Dashboard"/>
    }
    //Login
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
            <form id="user_login" action="login.php" method="post">
             <h2>Sign in</h2>
             
             <input 
             className="input_index" 
             type="email" 
             name="e_mail" 
             id="e_mail" 
             placeholder="Your e_mail" 
             value={email} onChange={(e) => setEmail(e.target.value)}/> <br></br>

             <input className="input_index" 
             type="password" 
             name="password" 
             id="password" 
             placeholder="Your password" 
             value={password} onChange={(e) => setPassword(e.target.value)}/> <br></br><br></br>

             <input className="button_index" type= "submit" name="submit" value="Go!"/>
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