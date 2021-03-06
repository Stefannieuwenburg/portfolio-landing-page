import wd0 from "../img/cafe.png";
import wd1 from "../img/Note.png";
import wd2 from "../img/recipe.png";
import wd3 from "../img/blog.png";
import wd4 from "../img/kidsbookshop.png";
import wd5 from "../img/movie.png";


export default function Projects() {
    const proj0 = () => {
        window.open("https://github.com/Stefannieuwenburg/vite-cafe-project");
    };
    const proj1 = () => {
        window.open("https://github.com/Stefannieuwenburg/vite-project-notes-react");
    };
    const proj2 = () => {
        window.open("https://github.com/Stefannieuwenburg/vite-recipe-app");
    };
    const proj3 = () => {
        window.open("https://github.com/Stefannieuwenburg/React-blog-site");
    };
    const proj4 = () => {
        window.open("https://github.com/Stefannieuwenburg/React-kids-books-shop");
    };
    const proj5 = () => {
        window.open("https://github.com/Stefannieuwenburg/vite-react-movie-database");
    };
    return (
        <div className="works">
            <div className="work-section">
                <div className="cards">
                    <img src={wd0} alt="project0" />
                    <button onClick={proj0}>Code</button>
                </div>

                <div className="cards">
                    <img src={wd1} alt="project1" />
                    <button onClick={proj1}>Code</button>
                </div>

                <div className="cards">
                    <img src={wd2} alt="project2" />
                    <button onClick={proj2}>Code</button>
                </div>

                <div className="cards">
                    <img src={wd3} alt="project3" />
                    <button onClick={proj3}>Code</button>
                </div>

                <div className="cards">
                    <img src={wd4} alt="project4" />
                    <button onClick={proj4}>Code</button>
                </div>

                <div className="cards">
                    <img src={wd5} alt="project5" />
                    <button onClick={proj5}>Code</button>
                </div>
            </div>
        </div>
    );
}



