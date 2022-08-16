import './styles.css';
import icon from '../../assets/icon-notification.svg';

export default function BtnIcon(){
    return(
        <div className="btn-notification">
            <img src={icon} alt="icon-notification"/>
        </div>    
    )
}