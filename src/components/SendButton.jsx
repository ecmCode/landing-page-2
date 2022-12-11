import components from './Components.module.css'

const SendButton = () => {
    const handleClick = (e) => {
      e.preventDefault();
      console.log('Form sent');
    }
    return(
      <button type='submit' className={components.btn} onClick={(e) => handleClick(e)}>
        Send
      </button>
    )
  }


export default SendButton