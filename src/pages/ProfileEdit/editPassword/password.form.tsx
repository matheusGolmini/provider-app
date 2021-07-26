import * as yup from 'yup';

export const passwordForm = yup.object().shape({
    password: yup.string()
        .required('Informar senha') 
        .min(8, 'Deve conter 8 caracteres')
        .matches( /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/, 'Deve conter um número e um caractere especial.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),

    confirmPassword: yup.string()
        .required("Confirmação de senha é obrigatório")
        .min(8, 'Deve conter 8 caracteres')
        .matches( /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/, 'Deve um número e um caractere especial.')
        .oneOf([yup.ref('password'), null], 'As senhas não estão iguais')
    
})