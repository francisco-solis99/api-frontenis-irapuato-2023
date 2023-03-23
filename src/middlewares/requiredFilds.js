import AppError from '../errors/AppError.js';

const requiredFields = (fields) => {
  return (req, _res, next) => {
    const missingFields = [];
    const keys = Object.keys(req.body); // Included fields

    // Checks if every required field is in the body
    for (const field of fields) {
      if (!keys.includes(field)) { missingFields.push(field); }
    };

    // If there are missing fields then run next error middleware
    if (missingFields.length) {
      const missingFieldsJoin = missingFields.join(',');
      throw new AppError(`Request must include the fields: ${missingFieldsJoin}.`, 404);
    }

    // If no missing fields then run router code
    return next();
  };
};

export default requiredFields;
