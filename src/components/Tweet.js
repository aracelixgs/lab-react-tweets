import ProfileImage from "./ProfileImage.js";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  //const { timestamp, message } = props.tweet
  //const {name, image, handle } = props.tweet.user
  // const tweet = props.tweet;
  // console.log(tweet);

  return (
    <div className="tweet">
      {/* <img src="https://i.imgur.com/9yw1Fyw.jpg" className="profile" alt="profile" /> */}
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          
            
          <User userData={props.tweet.user} />

          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Actions />
        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
