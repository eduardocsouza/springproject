import { useState } from "react";
import DatePicker, { ReactDatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Table from "../Table";
import './styles.css';

export default function Card() {

  const [minDate, setMinDate] = useState(new Date(new Date().setDate(new Date().getDate() - 365)));
  const [maxDate, setMaxDate] = useState(new Date);

  return (
    <div id="card">
      <h2 id="title-vendas">Vendas</h2>
      <div>
        <div className="container-input">

          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="input-area"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="container-input">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="input-area"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <Table />
    </div>
  );
}
