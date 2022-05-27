import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'

const ContactInfo = (props) => {
  const id = useLocation().state.id;
  const [user, setUser] = useState();

  return (<div>
    contact_info
  </div>)
}

export default ContactInfo