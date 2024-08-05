import './Rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'


const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/Assets/posts/gift png.png" alt="" />
          <span className="birthdayText">
            <b>M Bass</b>  and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className='rightbarAd' src="/Assets/posts/post 8.jpg" alt="" />
        <h4 className="rightbarTittle">Online Friends</h4>
        <ul className="rightbarFriendList">
          
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Nigeria</span>

          </div>
           <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">State:</span>
            <span className="rightbarInfoValue">Oyo</span>

          </div>
           <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Engaged</span>

          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className="rightbarFollowings">
          <div className="righbarFollowing">
            <img src="/Assets/Images/img-9.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Roneb Dolcy</span>
          </div>
             <div className="righbarFollowing">
            <img src="/Assets/Images/img-10.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Bassey</span>
          </div>
             <div className="righbarFollowing">
            <img src="/Assets/Images/img-3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Comfy Somia</span>
          </div>   <div className="righbarFollowing">
            <img src="/Assets/Images/img-4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Terry</span>
          </div>
             <div className="righbarFollowing">
            <img src="/Assets/Images/img-5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ajoke Ruth</span>
          </div>
             <div className="righbarFollowing">
            <img src="/Assets/Images/img-6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Seyi Sax</span>
          </div>
        </div>
      </>
    )
    
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {/* what is here is copied to */}
       {profile ? <ProfileRightbar /> : <HomeRightbar /> }
      </div>
    </div>
  );
}

export default Rightbar
