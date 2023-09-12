import ProjectCard from "./projectCard";
import placeholder from "../img/82062770_p0.png";
import mdImg from "../img/mdbot.png";
import mlImg from "../img/catcam.jpeg";

const dubercoreDesc = `ICS4UE - AP Computer Science summative project. 2D arcade game with procedural generation and destructible terrain. Inspired by Deep Rock Galactic.`;
const dubercoreTags = ["Java", "LibGDX", "SQLite"];
const dubercoreLink = "https://github.com/chitsbits/dubercore";

const mangaDexDesc = `Discord bot for MangaDex, with an alert feature when your following list is updated.`;
const mangaDexTags = ["Node.js", "Axios", "JavaScript", "Heroku"];
const mangaDexLink = "https://github.com/chitsbits/mangadex-bot";

const mlDesc = `Deep learning project involving training a convolutional neural network object dectector.`;
const mlTags = ["Python", "TensorFlow", "Flask", "Raspberry PI"];
const mlLink = "https://github.com/chitsbits/ml-food-dispenser";

const sneak100Desc = `ICS3UE - Pre-AP Computer Science summative project.`;
const sneak100Tags = ["Java", "Swing"];
const sneak100Link = "https://github.com/chitsbits/Sneak100";

const dankSoulsDesc = `ICS2OG - Gr. 10 Computer Science summative project.`;
const dankSoulsTags = ["Python", "Pygame"];
const dankSoulsLink = "https://github.com/chitsbits/danksoulsiv";

const Projects = () => {
    return (
        <div className="projects">
            <div className="page-description text">
                Here you can find some of my publicly available projects. These
                range from school assignments to hobby projects, and include
                things written in Java, Python, Javascript and C++.
            </div>
            <div>&#8203;</div>
            <div className="project-cards-container">
                <ProjectCard
                    image={mlImg}
                    title={"ML Food Dispenser"}
                    description={mlDesc}
                    tags={mlTags}
					link={mlLink}
                ></ProjectCard>
                <ProjectCard
                    image={mdImg}
                    title={"MangaDex Bot"}
                    description={mangaDexDesc}
                    tags={mangaDexTags}
					link={mangaDexLink}
                ></ProjectCard>
                <ProjectCard
                    image={placeholder}
                    title={"Dubercore"}
                    description={dubercoreDesc}
                    tags={dubercoreTags}
					link={dubercoreLink}
                ></ProjectCard>
                <ProjectCard
                    image={placeholder}
                    title={"Sneak 100"}
                    description={sneak100Desc}
                    tags={sneak100Tags}
					link={sneak100Link}
                ></ProjectCard>
                <ProjectCard
                    image={placeholder}
                    title={"Dank Souls IV"}
                    description={dankSoulsDesc}
                    tags={dankSoulsTags}
					link={dankSoulsLink}
                ></ProjectCard>
            </div>
        </div>
    );
};

export default Projects;
