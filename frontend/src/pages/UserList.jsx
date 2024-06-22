import React, { useState, useEffect } from 'react';
import User from '../components/User'; 

const UserList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch('http://192.168.0.104:3000/user');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    getUser();
  }, []);

  return (
    <div className="container-fluid bg-primary d-flex justify-content-center">
      <div className="row user">
        <div className='col-12 col-sm-8 col-lg-7 col-xl-5 col-xxl-4'>
          <h1 className="text-center text-white pb-5">Pessoas Cadastradas</h1>
          {user.map(user => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
