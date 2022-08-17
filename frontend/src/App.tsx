import Card from "./components/Card";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  
  return (
    <>

      <ToastContainer/>
      <Header/>
      <main>
        <section id="sessao-vendas">
          <div id="container-card">
            <Card/>
          </div>          
        </section>
       </main>     
    </>
  )
}

export default App
