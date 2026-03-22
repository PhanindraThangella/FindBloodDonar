
import styles from "../css/ContributionsBoard.module.css";
function ContributionsBoard(){
    return (
        <div className={styles.mainDiv}>
        <div className={styles.noCondiv}>
            <h1 className={styles.noconh}>No Contributions Yet!.</h1>
            <p className={styles.noconp}>Start Today By Donating Blood,Every Drop Saves a Life.</p>
        </div>
        </div>
    );
}

export default ContributionsBoard;