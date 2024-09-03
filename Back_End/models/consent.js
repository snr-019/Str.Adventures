import mongoose from 'mongoose'

const ConsentFormSchema = new mongoose.Schema({
  emergencyContact: {
    type: String,
    required: true,
  },
  emergencyRelation: {
    type: String,
    required: true,
  },
  drugsTaken: {
    type: String,
    required: true,
  },
  medication: {
    type: String,
    required: true,
  },
  allergies: {
    type: String,
    required: true,
  },
  previousTreks: {
    type: String,
    required: true,
  },
  diagnosedAMS: {
    type: String,
    enum: ['Yes', 'No'],
    required: true,
  },
  amsTrekDate: {
    type: String,
    required: function() { return this.diagnosedAMS === 'Yes'; },
  },
  amsTrekName: {
    type: String,
    required: function() { return this.diagnosedAMS === 'Yes'; },
  },
  amsHighestAltitude: {
    type: String,
    required: function() { return this.diagnosedAMS === 'Yes'; },
  },
  riskAgreement: {
    type: Boolean,
    required: true,
  },
  fitnessAgreement: {
    type: Boolean,
    required: true,
  },
  itineraryAgreement: {
    type: Boolean,
    required: true,
  },
  permissionAgreement: {
    type: Boolean,
    required: true,
  },
  safetyAgreement: {
    type: Boolean,
    required: true,
  },
  suggestions: {
    type: String,
    required: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ConsentForms',
    }
 
});

const ConsentModel= mongoose.model('ConsentForms', ConsentFormSchema);
export default ConsentModel
