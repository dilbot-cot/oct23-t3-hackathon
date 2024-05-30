import '../styles/homepage.css'
import headshot from '../assets/headshot.jpeg'

export default function HomePage() {

    return (
        <div className="wrapper">
            <h1>Dillon's Portfolio</h1>
            <div className="main-content">
                <div className="image-content">
                    <img src={headshot} />
                </div>
                <div className="word-content">
                    <h4>An Introduction</h4>
                    <p>A Product Lead and Subject matter expert of digital execution and digitial forms within Finance.</p>
                    <p>Leading Bendigo Banks Docusign and Temenos platforms for the past 2 years, constantly working to make digital first designs and customer friendly experiences.</p>
                    <p>I am now in the final stretch of completing a full stack developer boot camp to supplement my skills with my platforms, and to continue to drive innovation within our organisation.</p>
                    <p>This page is a showcase of what I have learnt in my time at coder academy for school and personal projects.</p>
                </div>
            </div>
        </div>
    )
}