import './register.css'

function Register() {
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
                      <input placeholder='Username' className="inputLoginInput" />
                      <input placeholder='Email' className="inputLoginInput" />
                      <input placeholder='Password' className="inputLoginInput" />
                     <input placeholder='Confirm Password' className="inputLoginInput" />
                      <button className='loginButton'>Sign Up</button>
          
                      <button className="loginRegisterButton">Log Into Your Account</button>
                  </div>
              </div>
          </div>

          </div>
  )
}

export default Register