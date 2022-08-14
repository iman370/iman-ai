import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

function Landing() {
    const { scrollYProgress } = useScroll({offset: ["end end", "start start"]});
    const scale = useTransform(scrollYProgress, [0, 9], [0.2, 10]);
    const [isVisible] = useState(true);

    return(
        <div className="landing-container">
            <AnimatePresence>
                {isVisible && (
                <motion.div
                exit={{y:-1000}}
                style={{ scale }}>
                    <h1>iman-ai.tech()</h1>
                    <h2>Computer Science Student</h2>
                </motion.div>)}
            </AnimatePresence>
        </div>
    );
}

export default Landing