import { useSelector } from "react-redux";
import { RootState } from "../store";
import { noti } from "../reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector<RootState, noti>(state => state.noti);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }



  return (
    <div>
      { notification?.expiredTime - notification?.currentTime > 0 && 
        
        <p style={style}>{notification.action === "vote" ? "you voted " : "new anecdote " } {notification.content} </p>
        
        
      }
    </div>
  )
}

export default Notification

