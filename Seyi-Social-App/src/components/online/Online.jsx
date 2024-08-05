import './online.css'

export default function Online({user}) {
  return (
<li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={user.profilePicture} alt="" /> 
              <span className="rightbarOnline"></span>
            </div>
          <div className="rightbarUserName">{ user.userName}</div>
          </li>
  )
}
