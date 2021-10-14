import schema from './user.schema';

const options = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
};

class Validators {
  validateUserCreation(draft) {
    const { error } = schema.validate(draft, options);
    if (error) {
      error.status = 422;
      throw error;
    }
  }
}

const validators = new Validators();

export default validators;
