import axios from "axios";
import * as yup from "yup";

export const editAddressForm = yup.object().shape({
  cep: yup
    .string()
    .required("CEP é obrigatório")
    .test("", "CEP inválido", async (value): Promise<boolean> => {
      try {
        if (value === undefined || value.length < 8) return false;
        await axios.get(`https://viacep.com.br/ws/${value}/json/`);
        return true;
      } catch (err) {
        return false;
      }
    }),
  logradouro: yup.string().required("Rua é obrigatório"),
  bairro: yup.string().required("Bairro é obrigatório"),
  cidade: yup.string().required("Cidade é obrigatório"),
  uf: yup.string().required("Estado é obrigatório"),
  numero: yup.string().required("Número é obrigatório"),
});
