import './login.css'

function Login() {
  return (
      <div className='login'>
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h3 className='loginLogo'>SeyiSocial</h3>
                  <span className="loginDesc">Connect with Friends And
                      The World Around You On SeyiSocial.</span>
              </div>
              <div className="loginRight">
                  <div className="loginBox">
                      <input placeholder='Email' className="inputLoginInput" />
                      <input placeholder='Password' className="inputLoginInput" />
                      <button className='loginButton'>Log In</button>
                      <span className="loginForgot">Forgot Password?</span>
                      <button className="loginRegisterButton">Create A New Account</button>
                  </div>
              </div>
          </div>

          </div>
  )
}

export default Login