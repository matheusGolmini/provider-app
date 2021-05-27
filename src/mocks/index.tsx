export interface UserService {
    name: string;
    image: string;
    ratingNumber: number;
    services: Service[];
    monthValue: number[];

}

export interface Service {
   type: string;
   color: string;
   serviceAmount: number;
}


export function getUserMock() : UserService {
    return {
        name: 'Matheus',
        image: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
        ratingNumber: 3,
        services: [
            {
                type: 'pintura', 
                color: '#37b7dc',
                serviceAmount: 7,
            },
            {
                type: 'pedreiro', 
                color: '#ffae00',
                serviceAmount: 5,
            }
        ],
        monthValue: [
            0,
            600,
            1000,
            1200,
            1000,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ],

    }
}

export const text = 'Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista,Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista,Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista,Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista,Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista,Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista, Eletricista,Eletricista, Eletricista, Eletricista, Eletricista'