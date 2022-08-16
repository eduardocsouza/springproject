import Card from "./components/Card";
import Header from "./components/Header";
import './App.css';

function App() {
  
  return (
    <>
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
