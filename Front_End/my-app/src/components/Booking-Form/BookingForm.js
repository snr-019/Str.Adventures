// BookingForm.js

import React, { useState } from 'react';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    photo: '',
    name: '',
    fatherName: '',
    residence: '',
    gender: '',
    ageGroup: '',
    contact: '',
    profession: '',
    emergencyContact: '',
    emergencyRelation: '',
    drugsTaken: '',
    medication: '',
    allergies: '',
    previousTreks: '',
    diagnosedAMS: '',
    riskAgreement: false,
    fitnessAgreement: false,
    itineraryAgreement: false,
    permissionAgreement: false,
    safetyAgreement: false,
    medicalCertificate: '',
    idProof: '',
    suggestions: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className={styles.bookingForm}>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Upload a recent color PP size photo:</label>
          <input
            type="file"
            name="photo"
            onChange={handleInputChange}
            accept="image/*"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Name of Participant:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Father's Name:</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Residence:</label>
          <input
            type="text"
            name="residence"
            value={formData.residence}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Contact Details:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Profession:</label>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
            required
          >
            <option value="">Select...</option>
            <option value="Student">Student</option>
            <option value="Employed">Employed</option>
            <option value="Self Employed">Self Employed</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Emergency Contact Number:</label>
          <input
            type="text"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Relation with Emergency Contact Number:</label>
          <input
            type="text"
            name="emergencyRelation"
            value={formData.emergencyRelation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Did you undergo any drugs or have taken any for the past days?</label>
          <input
            type="text"
            name="drugsTaken"
            value={formData.drugsTaken}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Are you taking any medication since long time? If yes, name it and describe for what you are taking it:</label>
          <textarea
            name="medication"
            value={formData.medication}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label>If you are allergic to any food or medicines, kindly mention:</label>
          <textarea
            name="allergies"
            value={formData.allergies}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label>Previous Treks done if any, name here:</label>
          <textarea
            name="previousTreks"
            value={formData.previousTreks}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label>Have you ever been diagnosed of AMS on a trek?</label>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="diagnosedAMS"
                value="Yes"
                checked={formData.diagnosedAMS === "Yes"}
                onChange={handleInputChange}
                required
              /> Yes
            </label>
            <label>
              <input
                type="radio"
                name="diagnosedAMS"
                value="No"
                checked={formData.diagnosedAMS === "No"}
                onChange={handleInputChange}
                required
              /> No
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          {formData.diagnosedAMS === 'Yes' && (
            <>
              <label>Trek Date:</label>
              <input
                type="text"
                name="amsTrekDate"
                value={formData.amsTrekDate}
                onChange={handleInputChange}
                required
              />
              <label>Trek Name:</label>
              <input
                type="text"
                name="amsTrekName"
                value={formData.amsTrekName}
                onChange={handleInputChange}
                required
              />
              <label>Highest Altitude Reached:</label>
              <input
                type="text"
                name="amsHighestAltitude"
                value={formData.amsHighestAltitude}
                onChange={handleInputChange}
                required
              />
            </>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>
            That I am participating in the trek on my own risk and responsibility and shall not hold organiser responsible for any mishaps, leading to injury or death during the event.
          </label>
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="riskAgreement"
                checked={formData.riskAgreement}
                onChange={handleInputChange}
                required
              /> I Agree
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>
            That I declare that I am physically and mentally fit to undertake adventure activities such as hiking & trekking.
          </label>
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="fitnessAgreement"
                checked={formData.fitnessAgreement}
                onChange={handleInputChange}
                required
              /> I Agree
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>
            That I shall accept & adhere to the decision that team leader may make to modify the original itinerary in order to secure the safety of the individual or group.
          </label>
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="itineraryAgreement"
                checked={formData.itineraryAgreement}
                onChange={handleInputChange}
                required
              /> I Agree
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>
            That I am participating in the trek on my own accord and with due permission of my Parents/Guardians and must carry all the necessary gear required by me during the trek.
          </label>
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="permissionAgreement"
                checked={formData.permissionAgreement}
                onChange={handleInputChange}
                required
              /> I Agree
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>
            I take responsibility of ensuring my safety during the trek and follow all safety protocols during the entire trip. I will also adhere to the guidelines shared by our trek lead from time to time to ensure the safety of the entire group.
          </label>
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="safetyAgreement"
                checked={formData.safetyAgreement}
                onChange={handleInputChange}
                required
              /> I Agree
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>Upload your medical / physical fitness certificate:</label>
          <input
            type="file"
            name="medicalCertificate"
            onChange={handleInputChange}
            accept=".pdf,.doc,.docx"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Upload your Aadhaar Card / Passport:</label>
          <input
            type="file"
            name="idProof"
            onChange={handleInputChange}
            accept=".pdf,.jpg,.jpeg,.png"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Any other suggestions for your trek lead to help you during the event:</label>
          <textarea
            name="suggestions"
            value={formData.suggestions}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
