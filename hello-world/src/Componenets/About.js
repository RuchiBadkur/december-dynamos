import dandelion from '../assets/dandelion.webp';
const About = () => (
    <div className="about">
        <h2>About</h2>

        {/* <img src="https://images.pexels.com/photos/19248752/pexels-photo-19248752/free-photo-of-a-woman-leaning-against-a-tree-with-her-hand-on-her-hip.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="A girl" /> */}

        <img src={dandelion} alt='dandelion' />

        <p>
        An aspiring frontend web developer learning frontend technologies like HTML 5, CSS 3, Javascript, ES6, react, version control and other backend technologies. Bilingual in English and Hindi. Seeking a position in a growth oriented company where I can use my skills to the advantages of the company while having the scope to develop my own skills. A curious and creative thinker willingness to adapt, collaborate and learn from others so that I can expose myself to different perspective and technologies, loves to experiment with colors and typography and making simple, beautifully great and efficient user interfaces.
        </p>
    </div>
)

export default About;