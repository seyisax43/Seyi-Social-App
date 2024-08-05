import './post.css'
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../dummyData'
import { useState } from 'react'
export default function Post({ post }) {
    
    // const user = Users.filter(u=>u.id===1)
    // console.log(user[0].userName);
    const [like, setLike] = useState(post.like)
    const [isLike, setIsLike] = useState(false)

    const likeHandler = () => {
        setLike(isLike ? like - 1 : like + 1)
        setIsLike(!isLike)
    }
  return (
      <div className='post'>
          <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
                      <img className='postProfileImg'
                          src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                          alt="" />  
                      <span className='postUserName'>
                          {Users.filter((u) => u.id === post?.userId)[0].userName}
                      </span>
                    <span className='postDate'>{post.date}</span>
                  </div>
                  <div className="postTopRight">
                      <MoreVert />
                  </div>
              </div>
              <div className="postCenter">
                  <span className="postText">{ post?.desc}</span>
                   <img className='postImg' src={post.photo} alt="" />
              </div>
              <div className="postBottom">
                  <div className="postBottomLeft">
                      <img className='likeIcon' src="/Assets/posts/like png.png" onClick={likeHandler} alt="" />   
                      <img className='likeIcon' src="/Assets/posts/heartpng.png" onClick={likeHandler} alt="" />  
                      <span className="postLikeCounter">{like}people like it</span>
                  </div>
                  <div className="postBottomRight">
                      <span className="postCommentText">{post.comment} comments</span>
                  </div>
              </div>
          </div>
    
    </div>
  )
}
