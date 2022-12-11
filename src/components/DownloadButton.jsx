import components from './Components.module.css'
import downloadIcon from '../assets/downloadIcon.svg'
import {names} from '../assets/names'
const DownloadButton = ({setName}) => {
    const random = Math.floor(Math.random() * names.length);
    return(
      <button className={components.btn} onClick={() => setName(names[random])}>
        Download Resume
        <img src={downloadIcon} alt="download icon"/>
      </button>
    )
  }


export default DownloadButton