// import React from 'react';

// const Dialog = ({ isOpen, onClose, details }) => {
//   if (!isOpen || !details) return null;

//   return (
//     <div className="dialog-overlay" 
//          style={{
//            position: 'fixed', /* Ensure it stays on top */
//            top: '57%',
//            left: '50%',
//            transform: 'translate(-50%, -50%)',
//            zIndex: 2000, /* Ensure this is higher than other modals */
//            border: '2px solid #dadce3',
//            padding: '0px',
//            borderRadius: '10px',
//            width:'50%',
//          }}
//     >
//       <div className="dialog-content">
//         <button className="close-button" 
//                 onClick={onClose} 
//                 style={{
//                   border: '1px solid #0f7c6c',
//                   background: '#dadce3',
//                   color: '#0f7c6c',
//                   marginLeft: '1030px'
//                 }}
//         >
//           X
//         </button>
//         <h2 style={{
//           color: '#0f7c6c',
//           padding: '20px 0px',
//           textAlign: 'center',
//           fontFamily: 'inter, sans-serif',
//           fontSize: '30px',
//           fontWeight: '600'
//         }}>
//           Consent Form Details
//         </h2>
//         <div className="consent-form-details" 
//              style={{
//                fontFamily: 'inter, sans-serif',
//                border: '1px solid #0f7c6c',
//                paddingLeft: '10px',
//                borderRadius: '10px'
//              }}
//         >
//           {/* Render consent form details here */}
//           <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Emergency Contact:</strong> {details.emergencyContact}</p>
//           <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Emergency Relation:</strong> {details.emergencyRelation}</p>
//           <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Drugs Taken:</strong> {details.drugsTaken}</p>
//           <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Medication:</strong> {details.medication}</p>
//           <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Allergies:</strong> {details.allergies}</p>
//           <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Previous Treks:</strong> {details.previousTreks}</p>
//           <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Diagnosed AMS:</strong> {details.diagnosedAMS}</p>
//           {details.diagnosedAMS === 'Yes' && (
//             <>
//               <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>AMS Trek Date:</strong> {details.amsTrekDate}</p>
//               <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>AMS Trek Name:</strong> {details.amsTrekName}</p>
//               <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>AMS Highest Altitude:</strong> {details.amsHighestAltitude}</p>
//             </>
//           )}
//           <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Risk Agreement:</strong> {details.riskAgreement ? 'Agreed' : 'Not Agreed'}</p>
//           <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Fitness Agreement:</strong> {details.fitnessAgreement ? 'Agreed' : 'Not Agreed'}</p>
//           <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Itinerary Agreement:</strong> {details.itineraryAgreement ? 'Agreed' : 'Not Agreed'}</p>
//           <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Permission Agreement:</strong> {details.permissionAgreement ? 'Agreed' : 'Not Agreed'}</p>
//           <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Safety Agreement:</strong> {details.safetyAgreement ? 'Agreed' : 'Not Agreed'}</p>
//           {details.suggestions && (
//             <p><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Suggestions:</strong> {details.suggestions}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dialog;


import React from 'react';

const Dialog = ({ isOpen, onClose, details }) => {
  if (!isOpen || !details) return null;

  return (
    <div className="dialog-overlay" style={{width:'500px',marginTop:'35px'}}>
      <div className="dialog-content" style={{padding:'10px 20px'}}>
        <button className="close-button" onClick={onClose} style={{marginTop:'5px'}}>
          X
        </button>
        <h2 style={{
          color: '#0f7c6c',
          textAlign: 'center',
          fontFamily: 'inter, sans-serif',
          fontSize: '25px',
          fontWeight: '600'
        }}>
          Consent Form Details
        </h2>
        <div className="consent-form-details">
          <p style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Emergency Contact:</strong> {details.emergencyContact}</p>
          <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Emergency Relation:</strong> {details.emergencyRelation}</p>
          <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Drugs Taken:</strong> {details.drugsTaken}</p>
          <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Medication:</strong> {details.medication}</p>
          <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Allergies:</strong> {details.allergies}</p>
          <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Previous Treks:</strong> {details.previousTreks}</p>
          <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Diagnosed AMS:</strong> {details.diagnosedAMS}</p>
          {details.diagnosedAMS === 'Yes' && (
            <>
              <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>AMS Trek Date:</strong> {details.amsTrekDate}</p>
              <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>AMS Trek Name:</strong> {details.amsTrekName}</p>
              <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>AMS Highest Altitude:</strong> {details.amsHighestAltitude}</p>
            </>
          )}
          <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Risk Agreement:</strong> {details.riskAgreement ? 'Agreed' : 'Not Agreed'}</p>
          <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Fitness Agreement:</strong> {details.fitnessAgreement ? 'Agreed' : 'Not Agreed'}</p>
          <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Itinerary Agreement:</strong> {details.itineraryAgreement ? 'Agreed' : 'Not Agreed'}</p>
          <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Permission Agreement:</strong> {details.permissionAgreement ? 'Agreed' : 'Not Agreed'}</p>
          <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Safety Agreement:</strong> {details.safetyAgreement ? 'Agreed' : 'Not Agreed'}</p>
          {details.suggestions && (
            <p  style={{marginBottom:'5px'}}><strong style={{color: '#0F7c6c', paddingRight: '10px'}}>Suggestions:</strong> {details.suggestions}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
