import { Layout, Menu, Breadcrumb } from "antd";
import "./home.css";
import { CarOutlined,DeleteRowOutlined, FireOutlined, 
  NotificationOutlined,UnlockOutlined,ThunderboltOutlined,
  EnvironmentOutlined, LockOutlined, LinkedinOutlined, BulbOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
function Home() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item disabled key="2">Sobre</Menu.Item>
          <Menu.Item disabled key="3">
            Monitoramento (Em breve...)
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <div className="home">
            <h1 className="text">
              <UnlockOutlined /> TranCar <CarOutlined />
            </h1>
            <h2>Tenha os dados do seu carro na palma da sua mão:</h2>
            <h4><LockOutlined /> Trancado/Destrancado </h4>
            <h4><EnvironmentOutlined /> Localização em tempo real </h4>
            <h4><DeleteRowOutlined /> Nível do tanque</h4>
            <h4><ThunderboltOutlined /> Nível de bateria </h4>
            <h4><NotificationOutlined /> Ligado/desligado (alarme)</h4>
            <h4><FireOutlined /> Temperatura</h4>
            <h4><BulbOutlined /> Novas funcionalidades em breve...</h4>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
     <h3>
        <strong> Autores: Rodrigo Rafael <a target="_blank" href='https://www.linkedin.com/in/rodrigo-rafael/'> <LinkedinOutlined/></a>- 
        Bruno Alves <a target="_blank" href='https://www.linkedin.com/in/bruno-alves-3b8b82205/'> <LinkedinOutlined/></a></strong>
        <p>  IFMG - Betim </p>
       </h3>  
      </Footer>
        <p>Beta</p>
    </Layout>
  );
}

export default Home;
