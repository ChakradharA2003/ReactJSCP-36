// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification/index'

import './index.css'

const AlertNotifications = () => (
  <div className="bg-container">
    <h1 className="heading">Alert Notifications</h1>
    <Notification>
      <h1>Success</h1>
      <p>You can access all the files in the folder</p>
      <AiFillCheckCircle />
    </Notification>
    <Notification>
      <h1>Error</h1>
      <p>Sorry,you are not authorized to have access to delete the file</p>

      <RiErrorWarningFill />
    </Notification>
    <Notification>
      <h1>Warning</h1>
      <p>Viewers of this file can see comments and suggestions</p>

      <MdWarning />
    </Notification>
    <Notification>
      <h1>Info</h1>
      <p>Anyone on the internet can view these files</p>

      <MdInfo />
    </Notification>
  </div>
)
export default AlertNotifications
