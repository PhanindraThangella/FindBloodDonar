
import styles from '../css/RequestsBoard.module.css';
function RequestsBoard(){
    return(
        <div className={styles.mainDiv}>
            <div className={styles.noReqdiv}>
                <h1 className={styles.noReqh}>No Recent Requests</h1>
                <p className={styles.noReqp}>We Will Intimate You If Any.</p>
            </div>
        </div>
    );
}

export default RequestsBoard;