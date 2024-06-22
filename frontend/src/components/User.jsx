import React from 'react';

const User = ({ user }) => (
  <div className="card m-3 p-1 user-card">
    {user.image && <img src={user.image} alt={user.name}/>} 
    <div className="m-3 text-center">
      <h3 className="card-title font-weight-bold">{user.name}</h3>
    </div>
    {(user.curriculum || user.socialnetwork) && <hr />} 
    {user.curriculum && 
      <div className="m-3">
        <h4 className="card-title text-center font-weight-bold">Currículo:</h4>
        <h5 className="card-title text-center">{user.curriculum}</h5>
      </div>
    } 
    {(user.curriculum && user.socialnetwork) && <hr />} 
    {user.socialnetwork && 
      <div className="m-3 text-center">
        <a href={user.socialnetwork} target="_blank" className="font-weight-bold" style={{ fontSize: '20px' }}>
          Rede Social
        </a>
      </div>
    } 
  </div>
);

export default User;
