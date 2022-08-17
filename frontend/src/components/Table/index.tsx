import axios from "axios";
import { useEffect, useState } from "react";
import { Sale } from "../../models/sales";
import { BASE_URL } from "../../utils/request";
import BtnIcon from "../ButtonIcon";
import './styles.css';

type Props= {
  dmin:string;
  dmax:string;
}

export default function Table({dmin, dmax}: Props) {

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/sale?minDate=${dmin}&maxDate=${dmax}`)
      .then(resp => {
        setSales(resp.data.content);
      })
  }, [dmin, dmax])

  return (
    <div>
      <table id="container-table">
        <thead>
          <tr>
            <th className="show-data">Data</th>
            <th>Vendedor</th>
            <th>Total</th>
            <th>Notificar</th>
          </tr>
        </thead>

        <tbody>
          {sales.map((sale, index) => {
            return (<tr key={index}>
              <td className="show-data">{new Date(sale.date).toLocaleDateString()}</td>
              <td>{sale.seller_name}</td>
              <td>R$: {sale.amount.toFixed(2)}</td>
              <td>
                <div className="container-btn-notification">
                  <BtnIcon idSale={sale.id}/>
                </div>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
