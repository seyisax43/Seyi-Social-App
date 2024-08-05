import './Share.css'
import { PermMedia, Label, Room, EmojiEmotions,} from '@mui/icons-material'
const share = () => {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className='shareProfileImg' src="/Assets/Images/img-2.jpg" alt="" />
          <input placeholder="what's in your mind Seyi" className='shareInput' />
        </div>
        <hr className='shareHr' />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
            <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Photos Or Videos</span>
            </div>
            <div className="shareOption">
            <Label htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className="shareOption">
            <Room htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Locations</span>
            </div>
            <div className="shareOption">
            <EmojiEmotions htmlColor='goldenRod' className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
              </div>
          </div>
          <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default share
