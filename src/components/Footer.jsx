import "../styles/footer.css"
import githubLogo from "../assets/github.svg"
import linkedInLogo from "../assets/linkedin.svg"
import sendLogo from "../assets/send.png"
import { Button } from "react-bootstrap"

export default function Footer() {

    const handleMailClicker = () => {
        window.location.href = "mailto:14582@coderacademy.edu.au"
    }

    return(
        <div className="footer">
            <div className="footer-left">
                <a href="https://github.com/dilbot-cot">
                    <img src={githubLogo} alt="The github Logo" />
                </a>
                <a href="https://www.linkedin.com/in/dillon-cotter-a94516194/">
                    <img src={linkedInLogo} alt="The LinkedIn Logo" />
                </a>
            </div>
            <div className="footer-right">
                <Button variant="outline-dark" onClick={handleMailClicker}>
                    <img src={sendLogo} alt="" id="send-logo"/>
                    Contact Me
                </Button>
            </div>

        </div>
    )
}