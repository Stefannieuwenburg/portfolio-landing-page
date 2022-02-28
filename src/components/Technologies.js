import { FaDatabase, FaReact, FaTools } from "react-icons/fa";


export default function Technologies() {
    return (
        <div className="tech-background">
            <h1>Technologies</h1>
            <br />
            <h5>
                I have worked with a range a technologies in the web
                development world. From Front-End to Back-end plus Design
            </h5>
            <br />
            <FaReact style={{ color: "blue" }} />
            Front-End Experience with:
            <br />
            <br /> Html 5
            <br /> Css
            <br /> Scss
            <br /> Bootstrap
            <br /> React.js
            <br /> Github
            <br />
            <FaDatabase style={{ color: "green" }} />
            Back-End Experience with:
            <br />
            <br />
            Sqlite
            <br /> Database
            <br /> Django
            <br /> Flask
            <br /> Python
            <br />
            <FaTools style={{ color: "red" }} />
            Tools Experience with:
            <br />
            Figma
            <br />
            Visual Studio code
            <br />
        </div>
    );
}
