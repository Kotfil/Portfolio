import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={styles.container}>
                <h2 className={styles.title}>Мои скиллы</h2>
                <div className={styles.skills}>
                    <Skill title={"React"} description={"Lorem3"}/>
                    <Skill title={"JS"} description={"Lorem3343"}/>
                    <Skill title={"HTML, CSS"} description={"Lorem333443"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
