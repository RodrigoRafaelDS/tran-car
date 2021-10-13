import { Layout, Menu, Breadcrumb } from 'antd';
import  "./home.css";

const { Header, Content, Footer } = Layout;
function Home() {
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Monitoramento (Em breve...)</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      <div className="home">
      <h1 className="text">TranCar</h1>
      <h2>Tenha os dados do seu carro na palma da sua mão:</h2>
      <li>Localização em tempo real</li>
      <li>Nível do tanque</li>
      <li>Aberto/fechado</li>
      <h5 className='footer'>Autores: Rodrigo - Bruno | IFMG - Betim</h5>
      
    </div>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Autores: Rodrigo - Bruno | IFMG - Betim</Footer>
  </Layout>
  );
}

export default Home;
