import React, { useState } from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUser, faBell, faBox, faImage, faCog, faChevronRight, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import logo from "/public/img/logo.png";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleItemClick = (event) => {
    // Remover a classe 'active' de todos os itens
    const sideItems = document.querySelectorAll('.side-item');
    sideItems.forEach(item => {
      item.classList.remove('active');
    });

    // Adicionar a classe 'active' apenas no item clicado
    const currentItem = event.currentTarget.closest('.side-item');
    currentItem.classList.add('active');
  };

  return (
    <>
    <nav className='containerNav'>
      <div id="sidebar" className={openSidebar ? 'open-sidebar' : ''}>
        <div id="sidebar_content">
          <div id="user">
            <img src={logo} id="user_avatar" alt="Avatar" />
            <p id="user_infos">
              <span className="item-description">Stoken</span>
            </p>
          </div>

          <ul id="side_items">
            <li className="side-item active" onClick={handleItemClick}>
              <a href="#">
                <FontAwesomeIcon icon={faChartLine} className="white-icon"/>
                <span className="item-description">Dashboard</span>
              </a>
            </li>

            <li className="side-item" onClick={handleItemClick}>
              <a href="#">
                <FontAwesomeIcon icon={faUser} className="white-icon"/>
                <span className="item-description">Usuários</span>
              </a>
            </li>

            <li className="side-item" onClick={handleItemClick}>
              <a href="#">
                <FontAwesomeIcon icon={faBell} className="white-icon"/>
                <span className="item-description">Notificações</span>
              </a>
            </li>

            <li className="side-item" onClick={handleItemClick}>
              <a href="#">
                <FontAwesomeIcon icon={faBox} className="white-icon"/>
                <span className="item-description">Produtos</span>
              </a>
            </li>

            <li className="side-item" onClick={handleItemClick}>
              <a href="#">
                <FontAwesomeIcon icon={faImage} className="white-icon"/>
                <span className="item-description">Imagens</span>
              </a>
            </li>

            <li className="side-item" onClick={handleItemClick}>
              <a href="#">
                <FontAwesomeIcon icon={faCog} className="white-icon"/>
                <span className="item-description">Configurações</span>
              </a>
            </li>
          </ul>

          <button id="open_btn" onClick={handleSidebarToggle}>
            <FontAwesomeIcon icon={faChevronRight} id="open_btn_icon" />
          </button>
        </div>

        <div id="logout">
          <button id="logout_btn">
            <FontAwesomeIcon icon={faRightFromBracket} className="white-icon"/>
            <span className="item-description">Logout</span>
          </button>
        </div>
      </div>
      </nav>
    </>
  );
};

export default Sidebar;
