import  "./home.css";
import Logo from '../imgs/Logo.jpeg'
function Home() {
  return (
    <div className="home">
      <h1 className="text">TranCar</h1>
      <img className="img" src={Logo}></img>
      <h3>Tenha os dados do seu carro na palma da sua mão</h3>
      <h3>Localização em tempo real</h3>
      <h3>Nível do tanque</h3>
      <h3>Aberto/fechado</h3>
      <h5 className='footer'>Autores: Rodrigo - Bruno | IFMG - Betim</h5>
      
    </div>
  );
}

export default Home;
