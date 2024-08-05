import './profile.css'
import Topbar from '../../components/topbar/topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Profile() {
  return (
     <>
            <Topbar />
            <div className="profile">
        <Sidebar />
        <div className="profileRight">
       
          <div className="profileRightTop">
            <div className="profileCover">
            <img className='profileCoverImg' src="/Assets/posts/post 3.jpg" alt="" />
             <img className='profileUserImg' src="/Assets/Images/profile pic.jpg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className='profileInfoName'>Oluwaseyi Akanmu</h4>
              <span className='profileInfoDesc'>Hello Friends!</span>
            </div>
            
          </div>
          <div className="profileRightBottom">

       <Feed />
       <Rightbar profile/>
          </div>
      
        </div>

    
                
            </div>
           
        </>
  )
}
