import React from 'react';
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUser, faCut, faList } from '@fortawesome/free-solid-svg-icons';

export function HomeHeader() {
  return (
    <div className="container">
      <header className="headerr">
        <div className="header-tl">
          <h1 className="welcome-text">Bem-vindo,</h1>
          <h2 className="welcome-name">Uber Taradão</h2>
        </div>
        <button className="settings-button">
          <FontAwesomeIcon icon={faCog} size="3x" />
        </button>
      </header>

      <div className="main-buttons">
        <button className="main-button">
          <FontAwesomeIcon icon={faUser} />
          <span>Barbeiros</span>
        </button>
        <button className="main-button">
          <FontAwesomeIcon icon={faCut} />
          <span>Cortes/Serviços</span>
        </button>
        <button className="main-button">
          <FontAwesomeIcon icon={faList} />
          <span>Reservas</span>
        </button>
      </div>
    </div>
  );
}
