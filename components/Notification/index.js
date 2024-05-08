// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)
  return (
    <div className="notification-container">
      <div className="notification-content-container">
        <h1 className={`${children[0].props.children}`}>
          {children[0].props.children}
        </h1>
        <p className="notification-description">{children[1].props.children}</p>
      </div>
      <GrFormClose className="close-icon" />
    </div>
  )
}
export default Notification
