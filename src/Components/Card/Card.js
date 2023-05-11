import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardFoot from "./CardFoot";

import styles from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={styles.card_wrapper}>
            <CardHead />
            <CardBody quote={props.quote} />
            <CardFoot />
        </div>
    )
}

export default Card;