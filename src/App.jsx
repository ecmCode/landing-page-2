import { useState } from 'react'
import DownloadButton from "./components/DownloadButton";
import Form from './components/Form';
import {p1,p2,p3,p4} from './assets'
import style from './App.module.css'

const WelcomePage = ({ name, setName }) => {
  return(
      <div className={style.welcomePage}>
        <header className={style.welcomePageHeader}>
          Lo<span className={style.strong}>Go</span>
        </header>
        <div className={style.title}>
          <h3>I am {name}.</h3>
          <h1>I make websites</h1>
          <p>I'm a graphic designer and web developer</p>
          <DownloadButton setName={setName}/>
        </div>
      </div>
  )
}

const Portfolio = () => {
  return(
    <div className={style.portfolio}>
        <header className={style.portfolioHeader}>
          Portfolio
        </header>
        <div className={style.portfolioImage}>
          <img src={p1} alt="portfolio image"/>
          <img src={p2} alt="portfolio image"/>
          <img src={p3} alt="portfolio image"/>
          <img src={p4} alt="portfolio image"/>
        </div>
    </div>
  )
}

const Contact = () => {
  return(
    <div className={style.contact}>
        <header className={style.contactHeader}>
          Let's make a new amazing project?
        </header>
        <div className={style.contactIndex}>
          <div className={style.contactInfo}>
            <h4>You can find me around here!</h4>
            <b>Social</b>
            <p>If you want to follow and know a little more about my life and work routine, follow me on my social media!</p>
            <b>Direct Contact</b>
            <p>Do you want a quick aswer? Call to me and let's a chat!</p>
            <p><b>Phone:</b> +33 (000) 0000-0000</p>
            <p><b>WhatsApp:</b> +33 (000) 0000-0000</p>
          </div>
          <div className={style.form}>
            <b>Send me a message!</b>
            <p>Send me an email and I'll get back to you as soon as possible, I promise!</p>
            <Form/>
          </div>
        </div>
      </div>
  )
}

function App() {
  const [name,setName] = useState('Anonymous')
  return (
    <div className={style.app}>
      <WelcomePage name={name} setName={setName}/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App