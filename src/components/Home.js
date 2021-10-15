import { Layout, Menu, Breadcrumb } from "antd";
import React, { useState } from 'react';
import "./home.css";
import { CarOutlined,DeleteRowOutlined, FireOutlined, 
  NotificationOutlined,UnlockOutlined,ThunderboltOutlined,
  EnvironmentOutlined, LockOutlined, LinkedinOutlined, BulbOutlined,
  VideoCameraOutlined, AlertOutlined } from "@ant-design/icons";
import APP from './pages/AAP'
import Monitoramento from './pages/Monitoramento'
const { Header, Content, Footer } = Layout;
const HomePage=()=>{
  return(
<div
          className="site-layout-background"
          style={{ padding: 24, height: "600px" }}
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
            <h2><AlertOutlined /> Alertas personalizados</h2>
            <h2><BulbOutlined /> Novas funcionalidades em breve...</h2>
          </div>
        </div>
  )
}
const Sobre=()=>{
  return(
      <div className="site-layout-background" style={{ padding: 24, height: "600px" }}>
           <LogoPage></LogoPage>
            <h1> A <strong>TranCar</strong> oferece um sistema capaz de monitorar seu automóvel
            remotamente listando dados importantes para manter o cuidado e segurança do seu veículo.
            </h1>
      </div>
     
  )
}
const LogoPage=()=>{
  return(
    <h1 className="logo">
    <UnlockOutlined /> TranCar <CarOutlined />
  </h1>
     
  )
}
const VídeoPage=()=>{
  return(
    <div>
    <VideoCameraOutlined />
  </div>
     
  )
}
function Home() {
  const [selectPage, setselectPage] = useState(0);

  const RenderSelect=[<HomePage/>,<Sobre/>, <APP/>,'video','contato',<Monitoramento/>];
  
  const RenderSelectDescription=['Home','Sobre','IFMG | AAP',<VídeoPage />,'Contato','Monitoramento'];
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item onClick={()=>setselectPage(0)} key="1">{RenderSelectDescription[0]}</Menu.Item>
          <Menu.Item onClick={()=>{setselectPage(1); console.log('test')}} key="2">{RenderSelectDescription[1]}</Menu.Item>
          <Menu.Item onClick={()=>{setselectPage(2); console.log('test')}} key="3">{RenderSelectDescription[2]}</Menu.Item>
          <Menu.Item disabled onClick={()=>{setselectPage(3); console.log('test')}} key="4">{RenderSelectDescription[3]}</Menu.Item>
          <Menu.Item disabled onClick={()=>{setselectPage(4); console.log('test')}} key="5">{RenderSelectDescription[4]}</Menu.Item>
          <Menu.Item onClick={()=>{setselectPage(5); console.log('test')}} key="6">{RenderSelectDescription[5]}</Menu.Item>
          
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64}}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>{RenderSelectDescription[selectPage]}</Breadcrumb.Item>
        </Breadcrumb>
        {RenderSelect[selectPage]}
        
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
