export interface IGetServiceProviderById {
    accountNumber: null | string,
  approved: boolean,
  cnpj: string,
  descriptionNotApproved: null| string,
  idApprover: null| boolean,
  idServiceProvider: {
    cpf: string,
    email: string
    firstName: string,
    id: string,
    imageProfile: string,
    isAdmin: boolean,
    isBlocked: boolean,
    lastName: string,
    phone: string,
    rg: string,
    sex: string,
  },
  imageDocument: string,
  imageServices: null | string[],
  isBlocked: boolean,
  status: null | string,
  workPlaces: string[]
}