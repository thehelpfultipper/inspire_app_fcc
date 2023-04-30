import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardFoot from "./CardFoot";

import styles from "./Card.module.css";

const Card = () => {
    return (
        <div className={styles.card_wrapper}>
            <CardHead />
            <CardBody />
            <CardFoot />
        </div>
    )
}

export default Card;