import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../democomponents/GoogleClone.css';

const GoogleClone = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // You can expand this logic if needed
    console.log('Search triggered');
  };

  return (
    <div className="gc-container">
      <div className="gc-logo">🔵🟥🟢🟡</div>

      <form onSubmit={handleSearch} className="gc-search-form">
        <input
          type="text"
          placeholder="Search Google..."
          className="gc-search-input"
        />
        <button type="submit" className="gc-search-button">Search</button>
      </form>

      <div className="gc-results">
        <div className="gc-result-item" onClick={() => navigate('/sony')}>Sony</div>
        <div className="gc-result-item" onClick={() => navigate('/samsung')}>Samsung</div>
        <div className="gc-result-item" onClick={() => navigate('/lg')}>LG</div>
        <div className="gc-result-item" onClick={() => navigate('/ifb')}>IFB</div>
        <div className="gc-result-item" onClick={() => navigate('/whirlpool')}>WHIRLPOOL</div>
        <div className="gc-result-item" onClick={() => navigate('/onida')}>ONIDA</div>
        {/* <div className="gc-result-item" onClick={() => navigate('/phillips')}>PHILLIPS</div> */}
      </div>
    </div>
  );
};

export default GoogleClone;
