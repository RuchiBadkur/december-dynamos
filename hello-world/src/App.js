// import Home from './Componenets/Home';
import Navbar from './Componenets/Navbar';
import About from './Componenets/About';
import Section from './Componenets/Section';
import Footer from './Componenets/Footer';

const sectionData = [
    {
        title:"Skills",
        des:"Basic Linux System Commands.Basic Linux System CommandsHTML5 Cascading Style Sheets (CSS)GitHubGitHub GitGit Java"
    },
    {
        title:"Qualifications",
            des:"Education Jawahar Navodaya Vidyalaya (JNV)High School Diploma, Physics, Chemistry, BiologyOct 2012 - May 2019O2012 - 2019 AccioJobAccioJobFull Stack Web Develop course, MERN stackStack Web Development cou MERN stackJan 2023 - Dec 2023"
    },
    {

        title:"Projects",
        des:"Description -  Acciojob is a platform dedicated to launching tech careers from scratch. Recreated few sections of the AccioJob landing page. Using HTML,CSS and bootstrap.  Major learnings - Website is responsive, color sch and typography. Features -Good user experience, ensuring smo navigation and clear content presentation.  Tech stack - HTML | CSS | Bootstrap Description Blinkit is a hyper-fast delivery service, and t will demonstrate how to recreate its website us simple HTML and CSS.  Features - Visually impressive website, Respons Web Design  Major learnings -  HTML Semantic Markup, CSS Styl Techniques Tech stack - HTML  | CSS  | BOOTSTRAP"
    }
]
const App = () => {

    

    return (
        <>
            <Navbar />
            <About />
            {
                sectionData.map(item=>(
                    <Section 
                        title = {item.title}
                        des = {item.des}
                    />
                ))
            }
            {/* <Section 
                
            />
            <Section 
                
            />
            <Section 
            /> */}
            <Footer />
        </>
    )
}

export default App;
