import './styles.css';
import icon from '../../assets/icon-notification.svg';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { toast } from 'react-toastify';

type Props = {
    idSale: number;
}

function handleClick(id: number){
    axios(`${BASE_URL}/sale/${id}/notification`)
    .then(respo =>{
        toast.info("SMS enviado com sucesso!")
    });
}

export default function BtnIcon({idSale}: Props){
    return(
        <div className="btn-notification" onClick={() => handleClick(idSale)}>
            <img src={icon} alt="icon-notification"/>
        </div>    
    )
}