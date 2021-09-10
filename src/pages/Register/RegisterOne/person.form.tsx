import * as yup from "yup";

export const personForm = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),

  confirmEmail: yup
    .string()
    .required("Confirmação de e-mail é obrigatório")
    .email("E-mail inválido")
    .oneOf([yup.ref("email"), null], "E-mail não estão iguais"),

  password: yup
    .string()
    .required("Informar senha")
    .min(8, "Deve conter 8 caracteres")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
      "Deve conter um número e um caractere especial."
    )
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),

  confirmPassword: yup
    .string()
    .required("Confirmação de senha é obrigatório")
    .min(8, "Deve conter 8 caracteres")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
      "Deve um número e um caractere especial."
    )
    .oneOf([yup.ref("password"), null], "As senhas não estão iguais"),

  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Telefone inválido"
    ),

  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(
      10,
      "Nome completo"
    ),
});
