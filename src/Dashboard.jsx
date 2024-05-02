import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaChartBar, FaUsers, FaFileAlt, FaRoad, FaUndo, FaSignOutAlt } from 'react-icons/fa';
import { Avatar, Space , Popover ,Button , Popconfirm} from 'antd';
import './Dashboard.css';

// Importar el componente General desde la ubicación correcta
import General from './conponet/General'; // Asegúrate de que la ruta sea correcta y coincida con la ubicación real del archivo General.jsx
import SociosChoferes from './conponet/SociosChoferes';
import Usuarios from './conponet/Usuarios';
import Reportaje from './conponet/Reportaje';
import HojaRuta from './conponet/HojaRuta';

const Dashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('General');

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  const menuItems = [
    { label: 'General', icon: <FaUser /> },
    { label: 'Socios y Choferes', icon: <FaChartBar /> },
    { label: 'Usuario', icon: <FaUsers /> },
    { label: 'Reportajes', icon: <FaFileAlt /> },
    { label: 'Hoja de Rutas', icon: <FaRoad /> },
  ];
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
      <Popconfirm
        title="Cerrar Sesion"
        description="Desea Cerrar Sesion?"
        okText="Si "
        cancelText="No"
      >
        <Button danger color='danger' size="small"><FaSignOutAlt/>Salir</Button>
      </Popconfirm>
    </div>
  );
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="avatar">
          <Popover content={content} title="Title" trigger="click">
            <Avatar  size={64} style={{ backgroundColor: '#fde3cf', color: '#f56a00' , cursor:"pointer"}}>U</Avatar>
          </Popover>
        </div>
        <nav className="menu">
          <ul>
            {menuItems.map((item) => (
              <motion.li
                key={item.label}
                className={`menu-item ${selectedMenuItem === item.label ? 'active' : ''}`}
                onClick={() => handleMenuItemClick(item.label)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
                {item.label}
              </motion.li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="content-header">
          <h2 style={{ fontSize: '24px', margin: '0', padding: '10px' }}>{selectedMenuItem}</h2>
        </header>
        <section className="content">
         
          {selectedMenuItem === 'General' && <General />}
          {selectedMenuItem === 'Socios y Choferes' && <SociosChoferes />}
          {selectedMenuItem === 'Usuario' && <Usuarios />}
          {selectedMenuItem === 'Reportajes' && <Reportaje />}
          
          {selectedMenuItem === 'Hoja de Rutas' && <HojaRuta />}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
