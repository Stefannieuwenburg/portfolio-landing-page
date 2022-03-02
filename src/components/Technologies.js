import { FaDatabase, FaReact, FaTools } from "react-icons/fa";


export default function Technologies() {
    return (
        <>
            <div className="tech-background">
                <h1>Technologies</h1>

                <h5>
                    I have worked with a range a technologies in the web
                    development world. From Front-End to Back-end plus Design
                </h5>
            </div>

            <section className="description">
                <ul>
                    <FaReact style={{ color: "blue" }} />
                    <p>Front-End Experience with:</p>
                    <li>Html5</li>
                    <li>Css</li>
                    <li>Scss</li>
                    <li>Bootstrap</li>
                    <li>Redux</li>
                    <li>React.js</li>
                    <li>Github</li>
                    <li>Node.js</li>
                    <li>Npm</li>
                    <li>API</li>
                    <li>Scrum</li>
                    <li>Jest</li>
                </ul>
                <ul>
                    <FaDatabase style={{ color: "green" }} />
                    <p>Back-End Experience with:</p>
                    <li>Sqlite</li>
                    <li>SQL Database</li>
                    <li>ORM</li>
                    <li>Django</li>
                    <li>Flask</li>
                    <li>Python</li>
                    <li>VPS</li>
                    <li>APT</li>
                    <li>WSGI and Gunicorn</li>
                </ul>
                <ul>
                    <FaTools style={{ color: "red" }} />
                    <p>Tools Experience with:</p>
                    <li>Github</li>
                    <li>Figma</li>
                    <li>Visual Studio code</li>
                    <li>Slack</li>
                    <li>POSTman</li>
                </ul>
            </section>
        </>
    );
}
