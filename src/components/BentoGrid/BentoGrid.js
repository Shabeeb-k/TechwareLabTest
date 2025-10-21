import React from 'react';
import './BentoGrid.scss';
import Logo from '../../assets/images/Logo.png';
import Logo1 from '../../assets/images/Logo (1).png';
import Logo2 from '../../assets/images/Logo (2).png';
import Logo3 from '../../assets/images/Logo (3).png';
import Group11 from '../../assets/images/Group 11.png';

const BentoGrid = () => {
  const logos = [
     { name: 'Group 11', image: Group11, type: 'light' },
    { name: 'Logo', image: Logo, type: 'light' },
    { name: 'Logo 1', image: Logo1, type: 'dark' },
    { name: 'Logo 2', image: Logo2, type: 'light' },
    { name: 'Logo 3', image: Logo3, type: 'dark' },
   
  ];

  const getLogoClass = (index) => {
    const logoClasses = ['first-logo', 'second-logo', 'third-logo', 'fourth-logo', 'fifth-logo'];
    return logoClasses[index] || '';
  };

  return (
    <section className="logo-grid-section">
      <div className="container">
        <div className="logo-grid">
          {logos.map((logo, index) => (
            <div key={index} className={`logo-item ${logo.type} ${getLogoClass(index)}`}>
              <div className="logo-placeholder">
                <img src={logo.image} alt={logo.name} className="logo-img" />
              </div>
              {index === 1 && (
                <span className="logo-text-below">LOGOIPSUM</span>
              )}
              {index === 3 && (
                <span className="logo-text-below fourth-logo-text">LOGOIPSUM</span>
              )}
              {index === 4 && (
                <span className="logo-text-below fifth-logo-text">LOGOIPSUM</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;