import { IDetailService } from '../interfaces/detailService '


const mockServicePayment: IDetailService[] = [
    {
        id: '1',
        combinedContract: 'Pintar uma parede de x tamanho.',
        color: '#00BFFF',
        days: 20,
        imageProvider: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
        nameProvider: 'Matheus',
        phone: '41 99999-9999',
        is_finishing: false,
        service: 'Pintor',
        is_payment: false,
        value: 1000,
        help_open: false
    },
    {
        id: '2',
        combinedContract: 'Construir uma parede super top.',
        color: '#FF8C00',
        days: 30,
        imageProvider: 'https://static9.depositphotos.com/1426074/1172/v/600/depositphotos_11729249-stock-illustration-young-mason-with-trowel.jpg',
        nameProvider: 'Henrique',
        phone: '41 99999-9999',
        is_finishing: false,
        service: 'Pedreiro',
        is_payment: false,
        value: 1500,
        help_open: false
    }
];

const mockServiceInProgress: IDetailService[] = [
    {
        id: '1',
        combinedContract: 'Pintar a parede do quarto de rosa.',
        color: '#00BFFF',
        days: 20,
        imageProvider: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
        nameProvider: 'Matheus',
        phone: '41 99999-9999',
        is_finishing: false,
        service: 'Pintor',
        is_payment: true,
        value: 800,
        start_date: new Date(),
        end_date: new Date(),
        help_open: false
    }
];

const mockServiceServicesFinished: IDetailService[] = [
    {
        id: '1',
        combinedContract: 'Pintar a parede do quarto de rosa.',
        color: '#FF0000',
        days: 20,
        imageProvider: 'https://image.freepik.com/vetores-gratis/mascote-de-canalizador-personagem-de-encanador-desenho-animado-de-trabalhadores_7450-376.jpg',
        nameProvider: 'Vinicius',
        phone: '41 99999-9999',
        is_finishing: true,
        service: 'Encanador',
        is_payment: true,
        value: 800,
        start_date: new Date(),
        end_date: new Date(),
        help_open: false
    }
];

class MockService {
    
    getServicePayment(): IDetailService[] {
       return mockServicePayment;
    }

    getServiceInProgress(): IDetailService[] {
        return mockServiceInProgress;
    }

    getServiceServicesFinished(): IDetailService[]{
        return mockServiceServicesFinished
    }
}



export default new MockService();