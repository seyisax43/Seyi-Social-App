import Share from './share/Share'
import Post from '../post/Post'
import './Feed.css'
import { posts } from '../../dummyData'

function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
        
       
     </div>
    </div>
  )
}

export default Feed;