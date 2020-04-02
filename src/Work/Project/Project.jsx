import React from 'react';
import styles from './Project.module.css';

function Project(props) {
    return (
    <div className={styles.project}>
        <div className={styles.photo}>
            <a href="">Смотреть</a>
        </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
    </div>
    );
}

export default Project;
