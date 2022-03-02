import { FaDatabase, FaReact, FaTools } from "react-icons/fa";


export default function Technologies() {
    return (
        <>
            <div className="tech-background">
                <h1>Technologies</h1>
                
                <h5>
                    I have worked with a range a technologies in the web development
                    world. From Front-End to Back-end plus Design
                </h5>
            </div>   
            
            <section className="description">
                <FaReact style={{ color: "blue" }} />
                Front-End Experience with:
                <br />
                <br /> Html 5
                <br /> Css
                <br /> Scss
                <br /> Bootstrap
                <br /> Redux
                <br /> React.js
                <br /> Github
                <br />
                Node.js
                <br />
                Npm
                <br />
                API
                <br />
                Scrum
                <br />
                Jest
                <FaDatabase style={{ color: "green" }} />
                Back-End Experience with:
                <br />
                <br />
                Sqlite
                <br /> SQL Database
                <br /> ORM
                <br />
                Django
                <br />
                Flask
                <br />
                Python
                <br />
                VPS
                <br />
                APT
                <br />
                WSGI and Gunicorn
                <FaTools style={{ color: "red" }} />
                Tools Experience with:
                <br />
                <br />
                Github
                <br />
                Figma
                <br />
                Visual Studio code
                <br />
                Slack
                <br />
                POSTman
                <br />
            </section>
        </>
    );
}
