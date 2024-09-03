import React, { useState } from "react";
import axios from "axios";
import styles from "./consent.module.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    emergencyContact: "",
    emergencyRelation: "",
    drugsTaken: "",
    medication: "",
    allergies: "",
    previousTreks: "",
    diagnosedAMS: "",
    riskAgreement: false,
    fitnessAgreement: false,
    itineraryAgreement: false,
    permissionAgreement: false,
    safetyAgreement: false,
    suggestions: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(""); 

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken');
  
      const response = await axios.post(
        `http://localhost:${process.env.REACT_APP_API_PORT}/api/consent-form`, 
        formData,
        {headers: {
          'Authorization': `Bearer ${token}`
    }});
      console.log(response.data);
      setSubmissionStatus("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error.response.data);
      setSubmissionStatus("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className={styles.bookingForm}>
      <h2>Consent Form</h2>
      <form onSubmit={handleSubmit}>
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
          <label>
            Are you taking any medication since long time? If yes, name it and
            describe for what you are taking it:
          </label>
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
          <label>Have you ever been diagnosed with AMS on a trek?</label>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="diagnosedAMS"
                value="Yes"
                checked={formData.diagnosedAMS === "Yes"}
                onChange={handleInputChange}
                required
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="diagnosedAMS"
                value="No"
                checked={formData.diagnosedAMS === "No"}
                onChange={handleInputChange}
                required
              />{" "}
              No
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          {formData.diagnosedAMS === "Yes" && (
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
            That I am participating in the trek on my own risk and
            responsibility and shall not hold organiser responsible for any
            mishaps, leading to injury or death during the event.
          </label>
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="riskAgreement"
                checked={formData.riskAgreement}
                onChange={handleInputChange}
                required
              />{" "}
              I Agree
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>
            That I declare that I am physically and mentally fit to undertake
            adventure activities such as hiking & trekking.
          </label>
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="fitnessAgreement"
                checked={formData.fitnessAgreement}
                onChange={handleInputChange}
                required
              />{" "}
              I Agree
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>
            That I shall accept & adhere to the decision that team leader may
            make to modify the original itinerary in order to secure the safety
            of the individual or group.
          </label>
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="itineraryAgreement"
                checked={formData.itineraryAgreement}
                onChange={handleInputChange}
                required
              />{" "}
              I Agree
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>
            That I am participating in the trek on my own accord and with due
            permission of my Parents/Guardians and must carry all the necessary
            gear required by me during the trek.
          </label>
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="permissionAgreement"
                checked={formData.permissionAgreement}
                onChange={handleInputChange}
                required
              />{" "}
              I Agree
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>
            I take responsibility of ensuring my safety during the trek and
            follow all safety protocols during the entire trip. I will also
            adhere to the guidelines shared by our trek lead from time to time
            to ensure the safety of the entire group.
          </label>
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="safetyAgreement"
                checked={formData.safetyAgreement}
                onChange={handleInputChange}
                required
              />{" "}
              I Agree
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>
            Any other suggestions for your trek lead to help you during the
            event:
          </label>
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
        {submissionStatus && <p>{submissionStatus}</p>}
      </form>
      </div>
  );
};

export default BookingForm;