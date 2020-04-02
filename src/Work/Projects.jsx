import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project/Project";

function Projects() {
    return (
        <div className={styles.projectsBlock}>
            <div className={styles.container}>
                <h2 className={styles.title}>Мои работы</h2>
                <div className={styles.projects}>
                    <Project title={"React"} description={"BLablabla"}/>
                    <Project title={"Angular"} description={"BuuBuuBuu"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
