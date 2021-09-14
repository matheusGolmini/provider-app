import * as yup from "yup";

export const loginForm = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),

  password: yup
    .string()
    .required("Informar senha")
    .min(8, "Deve conter 8 caracteres")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
      "Deve conter um número e um caractere especial."
    )
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});
