import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './QuoteForm.css';

const QuoteForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // IMPORTANTE: O usuário precisará substituir estas chaves pelas suas próprias no painel do EmailJS (https://www.emailjs.com/)
    // 1. Crie uma conta no EmailJS e adicione um Email Service (ex: Gmail)
    // 2. Crie um Email Template com as variáveis exatas que estão no atributo "name" dos inputs abaixo (ex: {{user_name}}, {{user_email}}, etc)
    // 3. Pegue seu Service ID, Template ID e Public Key e coloque aqui:
    const SERVICE_ID = 'service_g1o7nfc';
    const TEMPLATE_ID = 'template_pwv3nzq';
    const PUBLIC_KEY = '_M1M0aep8-q2RYQph';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setSubmitStatus('success');
          setTimeout(() => {
            const formData = new FormData(form.current);
            const data = Object.fromEntries(formData.entries());
            const messageBody = encodeURIComponent(`Hi! My name is ${data.user_name || ''}. I would like to get a quote for a ${data.cleaning_type || ''} (${data.frequency || ''}) for my ${data.home_size || ''}. My email is ${data.user_email || ''}.`);
            form.current.reset();
            window.location.href = `sms:+16153002559?body=${messageBody}`;
          }, 500);
      }, (error) => {
          console.log(error.text);
          setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="quote-form-container" id="quote-form">
      <div className="quote-form-header">
        <h3>Get Your Free Quote</h3>
        <p>Fill out the form below and we'll get back to you shortly.</p>
      </div>

      {submitStatus === 'success' && (
        <div className="quote-form-success">
          Thank you! Your quote request has been sent successfully. We will contact you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="quote-form-error">
          Oops! Something went wrong. Please try again later or contact us directly.
        </div>
      )}

      <form className="quote-form" ref={form} onSubmit={handleSubmit} style={{ display: submitStatus === 'success' ? 'none' : 'block' }}>
        <div className="form-group">
          <input type="text" name="user_name" placeholder="Full Name" required />
        </div>
        <div className="form-group row">
          <input type="tel" name="user_phone" placeholder="Phone Number" required />
          <input type="email" name="user_email" placeholder="Email Address" required />
        </div>
        <div className="form-group">
          <select name="cleaning_type" required defaultValue="">
            <option value="" disabled>Select Cleaning Type</option>
            <option value="House Cleaning">House Cleaning</option>
            <option value="Deep Cleaning">Deep Cleaning</option>
            <option value="Move In-Out">Move In-Out</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
        <div className="form-group row">
          <select name="frequency" required defaultValue="">
            <option value="" disabled>Frequency</option>
            <option value="One-Time">One-Time</option>
            <option value="Weekly">Weekly</option>
            <option value="Biweekly">Biweekly</option>
            <option value="Monthly">Monthly</option>
          </select>
          <select name="home_size" required defaultValue="">
            <option value="" disabled>Home Size</option>
            <option value="Studio">Studio</option>
            <option value="1BR">1BR</option>
            <option value="2BR">2BR</option>
            <option value="3BR">3BR</option>
            <option value="4BR+">4BR+</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-large w-100" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
