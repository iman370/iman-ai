import React from 'react';

function Landing() {
    //const { scrollYProgress } = useScroll({offset: ["end end", "start start"]});
    //const scale = useTransform(scrollYProgress, [0, 9], [0.2, 10]);
    //const [isVisible] = useState(true);

    return(
        <div className="landing-container">
            <div className='typewriter'>
                <h1>iman-ai.tech()</h1>
                <h2>Computer Science Student</h2>
            </div>
        </div>
    );
}

export default Landing