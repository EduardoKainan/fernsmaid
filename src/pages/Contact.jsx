import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page-container" style={{ backgroundColor: 'var(--background-light)', padding: '80px 0' }}>
      <div className="container">
        <h1 className="section-title text-center" style={{ marginBottom: '40px' }}>Contact Us</h1>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
          
          <div style={{ flex: '1', minWidth: '300px', maxWidth: '500px', backgroundColor: 'var(--white)', padding: '40px', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>Get in Touch</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>Ready for a cleaner home? Contact us today for a free quote or to schedule your first cleaning.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(31, 154, 116, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary-color)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: 'var(--text-dark)' }}>Phone</h4>
                  <a href="tel:+16153002559" style={{ color: 'var(--secondary-color)', fontWeight: '600' }}>(615) 300-2559</a>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(31, 154, 116, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary-color)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: 'var(--text-dark)' }}>Email</h4>
                  <a href="mailto:fernsmaidservices@outlook.com" style={{ color: 'var(--secondary-color)', fontWeight: '600' }}>fernsmaidservices@outlook.com</a>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(31, 154, 116, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary-color)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: 'var(--text-dark)' }}>Service Area</h4>
                  <p style={{ margin: 0, color: 'var(--text-light)' }}>Middle Tennessee (Nashville & Surrounding)</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
