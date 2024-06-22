import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
  <div className="container-fluid bg-primary text-center size notfound">
      <h2 className="text-white" >Pagina não encontrada</h2>
      <Link to="/users">
        <button className="btn btn-light" >Voltar para Usuários</button>
      </Link>
    </div>
  );
};

export default NotFound;
