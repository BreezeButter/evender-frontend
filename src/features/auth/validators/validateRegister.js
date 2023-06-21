import Joi from 'joi';

const registerSchema = Joi.object({
    firstName: Joi.string().trim().required().messages({
        'string.empty':'First name is require.'
    }),
    lastName: Joi.string().trim().required().messages({
        'string.empty':'Last name is require.'
    }),
    email: Joi.string().email({ tlds: false }).required().messages({
        'string.empty':'Email is require.'
    }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required().messages({
        'string.empty':'Password is require.',"string.pattern.base":"Password must be at least 6 characters and contain only alphabet and number"
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).messages({
        'string.empty':'Confirm password is require.',
        'any.only':'Password and confirm password did not match'
    })
   
});

const validateRegister = input => {
    const {error} = registerSchema.validate(input,{abortEarly:false})
    if (error)// มี if ด้วย ป้องกันกรณี ไม่มี error 
    return error.details.reduce((acc,el) => {
        acc[el.path[0]] = el.message; //ยึงตาม ที่โชว์ ใน console มันมาท่านี้ 
        return acc;
    },{});
}

export default validateRegister;