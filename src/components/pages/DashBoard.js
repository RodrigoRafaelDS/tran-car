import React, { useState } from "react";
import { Progress } from "antd";
import { LockOutlined, UnlockOutlined } from "@ant-design/icons";
import { Button } from "antd";

function DashBoard() {
  const [statusButton, setStatusButton] = useState(false);
  const handleClickTrancar = () => {
    setStatusButton(!statusButton);
  };
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, height: "600px" }}
    >
      <h1>Carro: Pálio</h1>
      <div style={{ width: 250 }}>
        <div>
          <h3>Bateria:</h3>
          <Progress percent={30} size="small" status="active" />
        </div>
        <div>
          <h3>Gasolina:</h3>
          <Progress percent={50} size="small" status="active" />
        </div>
        <div>
          <h3>Status:</h3>

          <Button
            type="primary"
            icon={statusButton ? <LockOutlined /> : <UnlockOutlined />}
            loading={statusButton}
            onClick={handleClickTrancar}
          >
            {statusButton ? "Trancando..." : "Destrancado"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
