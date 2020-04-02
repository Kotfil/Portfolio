import React from 'react';
import styles from './Skill.module.css';

function Skill(props) {
    return (
        <div className={styles.skill}>
            <img className={styles.logo} src="" alt=""/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>

    );
}

export default Skill;
