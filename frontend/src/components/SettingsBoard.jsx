import styles from "../css/SettingsBoard.module.css";
function SettingsBoard()
{
    return(
        <div className={styles.mainDiv}>
        <div className={styles.settingsDiv}>
            <h1 className={styles.notifTag}>Notifications</h1>
            <hr></hr>
            <div className={styles.eachNotificationDiv}>
                <h3 className={styles.notificationLabel}>Whatsapp Notifications</h3>
                <label className={styles.switch}>
                    <input type="checkbox"></input>
                    <span className={styles.sliderRound}></span>
                </label>
            </div>
            <div className={styles.eachNotificationDiv}>
                <h3 className={styles.notificationLabel}>Email Notifications</h3>
                <label className={styles.switch}>
                    <input type="checkbox"></input>
                    <span className={styles.sliderRound}></span>
                </label>
            </div>
            <div className={styles.eachNotificationDiv}>
                <h3 className={styles.notificationLabel}>Allow PopUp Messages</h3>
                <label className={styles.switch}>
                    <input type="checkbox"></input>
                    <span className={styles.sliderRound}></span>
                </label>
            </div>
        </div>
        </div>
    );
}
export default SettingsBoard;