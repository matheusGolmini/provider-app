import * as yup from "yup";
import { cpf, cnpj } from "cpf-cnpj-validator";

export const registerTwoForm = yup.object().shape({
  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .test("", "CPF inválido", (value: any): boolean => {
      return cpf.isValid(value);
    }),

  rg: yup.string().required("RG é obrigatório").min(6, "RG inválido"),

  cnpj: yup
    .string()
    .required("CPNJ é obrigatório")
    .test("", "CNPJ inválido", (value: any): boolean => {
      return cnpj.isValid(value);
    }),

  accountNumber: yup
    .string()
    .required("Número da conta  é obrigatório")
    .min(6, "Número inválido"),
});
