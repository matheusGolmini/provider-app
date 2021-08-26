import * as yup from 'yup';

export const editEmailForm = yup.object().shape({
    cep: yup.string()
        .required("E-mail é obrigatório")
        .email('E-mail inválido'),

    confirmEmail: yup.string()
    .required("Confirmação de e-mail é obrigatório")
    .email('E-mail inválido')
    .oneOf([yup.ref('email'), null], 'E-mail não estão iguais')
    
})