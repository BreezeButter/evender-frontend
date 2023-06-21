import Joi from 'joi';

const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: false }).required().messages({
        'string.empty':'Email is require.'
  }),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{6,30}$/)
  .trim()
  .required().messages({
      'string.empty':'Password is require.',"string.pattern.base":"Password must be at least 6 characters"
  })
});

export default input => {
  const { error } = loginSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};