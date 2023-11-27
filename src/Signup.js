import { Navigate } from "react-router-dom";
import { useAuth } from "./auth/AuthProvider";
import DefaultLayout from "./layout/DefaultLayout"
import {useState} from "react"
function Signup() {

    //Inputs
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [password_c,setPassword_c] = useState("");

    //Authentication redirect
    const auth = useAuth();
    if (auth.isAuthenticated) {
        return <Navigate to="/Dashboard"/>
    }
    //Signup
    return(
        <>
        <DefaultLayout>
        <div id="container">
        
        <div id="box1" className="child_container">
            <div className="test-1">
            <h2>Welcome!</h2>
            <span className="span_index">Sign up if you havent please.</span>
            </div>
        </div>
    
        <div id="box2" className="child_container">
        
            <div className="test-1">
            <form id="user_login" action="signup.php" method="post">
             <h2>Sign up</h2>
             <input 
             className="input_index" type="text" 
             maxLength="25" 
             name="u_name" 
             id="u_name" 
             placeholder="Your username" 
             value={username} onChange={(e) => setUsername(e.target.value)}/> <br></br>

             <input 
             className="input_index" type="email"
              name="e_mail" id="e_mail" placeholder="Your e_mail" 
              value={email} onChange={(e) => setEmail(e.target.value)}/> <br></br>

             <input className="input_index" type="password" 
             maxLength="13"name="password" id="password" placeholder="Your password" 
             value={password} onChange={(e) => setPassword(e.target.value)}/> <br></br>


             <input className="input_index" type="password" 
             maxLength="13"name="password_c" id="password_c" placeholder="Confirm password" 
             value={password_c} onChange={(e) => setPassword_c(e.target.value)}/> <br></br><br></br>


             <input className="button_index" type= "submit" name="submit" value="Go!"/>
             </form>
            </div>
    
        </div>
        
        
        </div>
    </DefaultLayout>
        </>
    )
}

export default Signup;