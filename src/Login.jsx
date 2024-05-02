import React from 'react';
import { Button, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FaUser, FaLock } from 'react-icons/fa'; // Importa los iconos de FontAwesome
import './Login.css'; // Importa los estilos CSS
import Dashboard from './Dashboard';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const handleLogin = () => {
    // Aquí puedes agregar lógica de autenticación si es necesario

    // Redirige al usuario al Dashboard al hacer clic en el botón
    window.location.href = './Dashboard';
  };
  return (
    <div className="contenedor">
    <div className="container">
      <div className="form-container">
        <h1 className="title">Inicia Sesión</h1>

        <div className="input-container">
   
          <Input
            placeholder="Usuario"
            prefix={<FaUser />}
            className="input"
          />
        </div>

        <div className="input-container">
       
          <Input.Password
            placeholder="Contraseña"
            prefix={   <FaLock />}
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            className="input"
          />
        </div>

        <Button    type="primary"
        className="button"
        icon={<FaLock />}
        onClick={handleLogin}
      >
   
        Ingresar
      </Button>

        <p className="footer">
          Sindicato Mixto de Taxis Banderitas verdes
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
