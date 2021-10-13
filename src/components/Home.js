import { Layout, Menu, Breadcrumb } from "antd";
import React, { useState } from 'react';
import "./home.css";
import { CarOutlined,DeleteRowOutlined, FireOutlined, 
  NotificationOutlined,UnlockOutlined,ThunderboltOutlined,
  EnvironmentOutlined, LockOutlined, LinkedinOutlined, BulbOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const HomePage=()=>{
  return(
<div
          className="site-layout-background"
          style={{ padding: 24, height: "800px" }}
        >
          <div className="home">
          <LogoPage></LogoPage>
            <h1><strong>Tenha os dados do seu carro na palma da sua mão: </strong></h1>
            <h2><LockOutlined /> Trancado/Destrancado </h2>
            <h2><EnvironmentOutlined /> Localização em tempo real </h2>
            <h2><DeleteRowOutlined /> Nível do tanque</h2>
            <h2><ThunderboltOutlined /> Nível de bateria </h2>
            <h2><NotificationOutlined /> Ligado/Desligado (alarme)</h2>
            <h2><FireOutlined /> Temperatura</h2>
            <h2><BulbOutlined /> Novas funcionalidades em breve...</h2>
          </div>
        </div>
  )
}
const Sobre=()=>{
  return(
      <div className="site-layout-background" style={{ padding: 24, height: "800px" }}>
           <LogoPage></LogoPage>
            <h1> A <strong>TranCar</strong> oferece um sistema capaz de monitorar seu automóvel
            remotamente listando dados importantes para manter o cuidado e segurança do seu veículo.
            </h1>
      </div>
     
  )
}
const LogoPage=()=>{
  return(
    <h1 className="text">
    <UnlockOutlined /> TranCar <CarOutlined />
  </h1>
     
  )
}
function Home() {
  const [selectPage, setselectPage] = useState(false);
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item  onClick={()=>setselectPage(true)} key="1">Home</Menu.Item>
          <Menu.Item onClick={()=>{setselectPage(false); console.log('test')}} key="2">Sobre</Menu.Item>
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
        {selectPage ? (<HomePage></HomePage>) : (<Sobre></Sobre>)}
        
      </Content>
      <Footer style={{ textAlign: "center" }}>
     <h3>
        <strong>Rodrigo Rafael <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/rodrigo-rafael/'> <LinkedinOutlined/></a>  ||  Bruno Alves <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/bruno-alves-3b8b82205/'> <LinkedinOutlined/></a></strong>
        <p>  IFMG - Betim </p>
       </h3>  
      </Footer>
        <p>Beta</p>
    </Layout>
  );
}

export default Home;
