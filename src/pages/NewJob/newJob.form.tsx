import * as yup from "yup";

export const newJobForm = yup.object().shape({
    email: yup.string()
    .required("E-mail é obrigatório")
    .email('E-mail inválido'),

    confirmEmail: yup.string()
    .required("Confirmação de e-mail é obrigatório")
    .email('E-mail inválido')
    .oneOf([yup.ref('email'), null], 'E-mail não estão iguais'),

    sortDescription: yup.string().required("Descrição curta é obrigatório"),

    description: yup.string().required("Descrição completa é obrigatório"),

    serviceValue: yup.number().required("Valor do serviço é obrigatório"),

});
