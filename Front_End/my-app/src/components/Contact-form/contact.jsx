/************************************using nodemailer ******************************************** */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './ContactForm.css'; 

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);

      await axios.post('http://localhost:8082/api/send', {
        name,
        email,
        subject,
        message
      });

      toggleAlert('Thanks for Contacting Us! We have recieved your message.', 'success');
    } catch (e) {
      console.error(e);
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div className='contact_img'>
      <h1 className='contact_1 heading_card'>CONTACT US</h1>
      <div className='ContactForm'>
        <div className='contactForm'>
          <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='row formRow'>
              <div className='col-12'>
                <input
                  type='text'
                  name='name'
                  {...register('name', {
                    required: { value: true, message: 'Please enter your name' },
                    maxLength: {
                      value: 30,
                      message: 'Please use 30 characters or less'
                    }
                  })}
                  className='form-control formInput'
                  placeholder='Name'
                ></input>
                {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
              </div>
            </div>
            <div className='row formRow'>
              <div className='col-12'>
                <input
                  type='email'
                  name='email'
                  {...register('email', {
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  })}
                  className='form-control formInput'
                  placeholder='Email address'
                ></input>
                {errors.email && (
                  <span className='errorMessage'>Please enter a valid email address</span>
                )}
              </div>
            </div>
            <div className='row formRow'>
              <div className='col-12'>
                <input
                  type='text'
                  name='subject'
                  {...register('subject', {
                    required: { value: true, message: 'Please enter a subject' },
                    maxLength: {
                      value: 75,
                      message: 'Subject cannot exceed 75 characters'
                    }
                  })}
                  className='form-control formInput'
                  placeholder='Subject'
                ></input>
                {errors.subject && (
                  <span className='errorMessage'>{errors.subject.message}</span>
                )}
              </div>
            </div>
            <div className='row formRow'>
              <div className='col-12'>
                <textarea
                  rows={3}
                  name='message'
                  {...register('message', {
                    required: true
                  })}
                  className='form-control formInput'
                  placeholder='Message'
                ></textarea>
                {errors.message && <span className='errorMessage'>Please enter a message</span>}
              </div>
            </div>
            <button className='submit-btn' type='submit' disabled={disabled}>
              
              SUBMIT
            </button>
          </form>
        </div>
        {alertInfo.display && (
          <div className={`alert alert-${alertInfo.type} alert-dismissible mt-5`} role='alert'>
            {alertInfo.message}
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='alert'
              aria-label='Close'
              onClick={() => setAlertInfo({ display: false, message: '', type: '' })}
            ></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;



