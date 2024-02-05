import React,{ useState } from 'react'
import './LoginScreen.css';
import SignupScreen from"./SignupScreen";

function LoginScreen(){
    const [signIn,setSignIn]=useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img className="loginScreen__logo" src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png" alt=""/>
                <button onClick={()=>setSignIn(true)} className='loginScreen__button'>Sgn in</button>
                <div className='loginScreen_gradient'/>
            </div>
            <div className="loginScreen__body">
                {signIn ?(<SignupScreen/>):(
                    <><h1>Unlimited Fillms, Tv programmes and 
                    more.</h1>
                <h2>Watch anywhere. cancel any time</h2>
                
                <h3>Ready to watch? enter your email to create or restsart your membership.</h3>
                <div className='loginScreen__input'>
                    <form>
                        <input type="email" placeholder="Email Adress" />
                        <button onClick={()=>setSignIn(true)} className="loginScreen__getStarted">Get Started</button>
                    </form>
                </div>
                </>
                )}
                
            
            </div>
        </div>
    )
}
export default LoginScreen;