import wd0 from "../img/wd0.jpg";
import wd1 from "../img/wd1.jpg";
import wd2 from "../img/wd2.jpg";
import wd3 from "../img/wd3.jpg";
import wd4 from "../img/wd4.jpg";
import wd5 from "../img/wd5.jpg";




export default function Projects() {
    const proj1 = () => {
        window.open("https://github.com/Stefannieuwenburg?tab=repositories");
    };
    const proj2 = () => {
        window.open("https://github.com/Stefannieuwenburg?tab=repositories");
    };
    const proj3 = () => {
        window.open("https://github.com/Stefannieuwenburg?tab=repositories");
    };
    const proj4 = () => {
        window.open("https://github.com/Stefannieuwenburg?tab=repositories");
    };
    const proj5 = () => {
        window.open("https://github.com/Stefannieuwenburg?tab=repositories");
    };
    const proj6 = () => {
        window.open("https://github.com/Stefannieuwenburg?tab=repositories");
    };
    return (
        <div className="works">
            <div className="work-section">
                <div className="cards">
                    <img src={wd0} alt="img" />
                    <button onClick={proj1}>Code</button>
                </div>

                <div className="cards">
                    <img src={wd1} alt="img" />
                    <button onClick={proj2}>Code</button>
                </div>

                <div className="cards">
                    <img src={wd2} alt="img" />
                    <button onClick={proj3}>Code</button>
                </div>

                <div className="cards">
                    <img src={wd3} alt="img" />
                    <button onClick={proj4}>Code</button>
                </div>

                <div className="cards">
                    <img src={wd4} alt="img" />
                    <button onClick={proj5} >Code</button>
                </div>

                <div className="cards">
                    <img src={wd5} alt="img" />
                    <button onClick={proj6} >Code</button>
                </div>
            </div>
        </div>
    );
}



