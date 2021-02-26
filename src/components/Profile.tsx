import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/SirGuiL.png" alt="" draggable="false" />
            <div>
                <strong>Guilherme Lima</strong>
                <p>
                  <img src="icons/level.svg" draggable="false" alt="level"/>
                  Level {level}
                </p>
            </div>
        </div>
    );
}