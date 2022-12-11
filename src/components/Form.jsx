import components from './Components.module.css'
import SendButton from './SendButton';
const Form = () => {
  return (
        <form method='POST' className={components.form}>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <textarea placeholder="Message"></textarea>
            <span>
                <SendButton/>
            </span>
        </form>)
};

export default Form