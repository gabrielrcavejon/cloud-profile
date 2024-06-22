import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [socialnetwork, setSocialNetwork] = useState('');
  const [curriculum, setCurriculum] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    
    if (file) {
      fileReader.onloadend = () => {
        setImage(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        curriculum,
        socialnetwork,
        image 
      })
    });

    if (response.ok) {
      navigate('/users'); 
      return;
    }
    
    setMessage('Ocorreu um erro ao enviar os dados.');
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-primary size">
      <div className="card p-4"> 
        <h2 className="text-center mb-4">Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" style={{ backgroundColor: '#deeaee' }} required />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Imagem:</label>
            <input  type="file" onChange={handleImageChange} accept="image/*" className="form-control" id="image" style={{ backgroundColor: '#deeaee' }} />
          </div>
          <div className="mb-3">
            <label htmlFor="curriculum" className="form-label">Currículo:</label>
            <textarea rows={3} value={curriculum} onChange={(e) => setCurriculum(e.target.value)} className="form-control" id="curriculum" style={{ backgroundColor: '#deeaee' }} />
          </div>
          <div className="mb-3">
            <label htmlFor="socialnetwork" className="form-label">Link para rede social favorita (opcional):</label>
            <input type="text" value={socialnetwork} onChange={(e) => setSocialNetwork(e.target.value)} className="form-control" id="socialnetwork" style={{ backgroundColor: '#deeaee' }} />
          </div>
          <hr />
          <div className="mt-3 text-center">
            <a href="https://github.com/gabrielrcavejon/cloud-profile" className="text-blue" target="_blank" style={{ fontSize: '17px'}}>
              Clique aqui e veja esse projeto no GitHub!
            </a>
          </div>
          <hr />
          <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
        {message && <p className="mt-3 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
