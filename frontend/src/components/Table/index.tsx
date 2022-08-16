import BtnIcon from "../ButtonIcon";
import './styles.css';

export default function Table() {
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
          <tr>
            <td className="show-data">10/07/2022</td>
            <td>Anakin</td>
            <td>R$ 55300.00</td>
            <td>
              <div className="container-btn-notification">
                <BtnIcon />
              </div>
            </td>
          </tr>
          <tr>
            <td className="show-data">10/07/2022</td>
            <td>Anakin</td>
            <td>R$ 55300.00</td>
            <td>
              <div className="container-btn-notification">
                <BtnIcon />
              </div>
            </td>
          </tr>
          <tr>
            <td className="show-data">10/07/2022</td>
            <td>Anakin</td>
            <td>R$ 55300.00</td>
            <td>
              <div className="container-btn-notification">
                <BtnIcon />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
