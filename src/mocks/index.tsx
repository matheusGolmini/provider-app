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

export const types = ['Eletricista', 'Pedreiro', 'Encanador', 'Encanador1', 'Encanador3', 'Encanador4', 'Encanador5'];
export const states = [
    "Acre - AC",
    "Alagoas - AL",
    "Amapá - AP",
    "Amazonas - AM",
    "Bahia - BA",
    "Ceará - CE",
    "Distrito Federal - DF",
    "Espírito Santo - ES",
    "Goiás - GO",
    "Maranhão - MA",
    "Mato Grosso - MT",
    "Mato Grosso do Sul - MS",
    "Minas Gerais - MG",
    "Pará - PA",
    "Paraíba - PB",
    "Paraná - PR",
    "Pernambuco - PE",
    "Piauí - PI",
    "Rio de Janeiro - RJ",
    "Rio Grande do Norte - RN",
    "Rio Grande do Sul - RS",
    "Rondônia - RO",
    "Roraima - RR",
    "Santa Catarina - SC",
    "São Paulo - SP",
    "Sergipe - SE",
    "Tocantins - TO"
]

export const isSaveAddress = false;


export const text = `CONTRATO DE PRESTAÇÃO DE SERVIÇO
CONTRATANTE: Reparo-Rápido S/A, Nome Fantasia:
Reparo-Rápido, CNPJ nº:0000000-01,
ReparoRapido@email.com, com sede na rua das mimosas - 571,
Bairro: Centro, CEP 000-00, Curitiba - PR.
Neste ato representada por: José da Silva, na qualidade de CEO,
CPF 70707070, Documento de Identificação Carteira de
Identidade (RG) nº 09928922, expedida pela Secretaria de
Estado da Segurança Pública.
CONTRATADO: RAZÃO SOCIAL, CNPJ nº:
______________, E-mail, com sede em logradouro, número,
complemento, Bairro, CEP nº, Cidade - UF.
Neste ato representada por: Nome completo, na qualidade de
Proprietário, CPF nº ______________, Documento de
Identificação Carteira de Identidade (RG) nº
______________, expedida por ______________.
CLÁUSULA 1ª - DO OBJETO
O CONTRATADO, por meio do presente contrato, se
compromete a prestar ao CONTRATANTE os seguintes
serviços: Indique os serviços que serão prestados
CLÁUSULA 2ª - DO PRAZO
Este contrato tem prazo de: ____
Parágrafo único. Ao final deste prazo, o contrato poderá ser
renovado, por igual ou inferior período de tempo. 
CLÁUSULA 3ª - DA RETRIBUIÇÃO
Em retribuição pelos serviços, o CONTRATANTE se
compromete a pagar ao CONTRATADO o seguinte valor em
dinheiro: R$ ____ (____).
§ 1º. Tal valor será pago em parcela única com vencimento em
dd/mm/aaaa.
CLÁUSULA 4ª - DAS OBRIGAÇÕES DO CONTRATADO
São obrigações do CONTRATADO:
I. Prestar, com a devida dedicação e seriedade e da forma e do
modo ajustados, os serviços descritos neste contrato;
II. Respeitar as normas, as especificações técnicas e as
condições de segurança aplicáveis à espécie de serviços
prestados;
III. Fornecer as notas fiscais referentes aos pagamentos
efetuados pelo CONTRATANTE;
IV. Se responsabilizar pelos atos e omissões praticados por seus
subordinados, bem como por quaisquer danos que os mesmos
ou ele venha a sofrer ou causar para o contratante ou terceiros;
V. Arcar devidamente, nos termos da legislação trabalhista, com
a remuneração e demais verbas laborais devidas a seus
subordinados, inclusive encargos fiscais e previdenciários
referentes às relações de trabalho; 
VI. Arcar com as despesas e obrigações de natureza tributária
que sejam de sua responsabilidade, nos termos da legislação
vigente, relacionadas aos serviços especificados neste contrato;
VII. Cumprir todas as determinações impostas pelas
autoridades públicas competentes, referentes a estes serviços;
VIII. Manter sigilosas, mesmo após findo este contrato, as
informações privilegiadas de qualquer natureza que teve acesso
em virtude da execução destes serviços;
IX. Providenciar os meios e os equipamentos necessários à
correta execução do serviço.
CLÁUSULA 5ª - DAS OBRIGAÇÕES DO
CONTRATANTE
São obrigações do CONTRATANTE:
I. Efetuar o pagamento, nas datas e nos termos definidos neste
contrato;
II. Comunicar imediatamente o CONTRATADO sobre eventuais
reclamações feitas contra seus subordinados, assim como sobre
danos por ele causados;
IV. Arcar com as eventuais despesas e obrigações de natureza
tributária que sejam de sua responsabilidade, nos termos da
legislação vigente, relacionadas aos serviços especificados neste
contrato. 
CLÁUSULA 6ª - DA RESCISÃO
A qualquer momento, poderão as partes rescindir este contrato,
desde que avisem previamente à outra parte, de acordo com os
prazos seguintes:
I. Com antecedência de 8 (oito) dias, se a retribuição pela
prestação dos serviços for ajustada por mês ou mais;
II. Com antecedência de 4 (quatro) dias, se a retribuição pela
prestação dos serviços for ajustada por semana ou quinzena;
III. Na véspera, quando se tenha contratado por menos de 7
(sete) dias.
§ 1º. A rescisão sem justa causa por parte do CONTRATADO
não retira dele o direito ao recebimento de retribuição vencida,
porém sujeita-o ao pagamento de perdas e danos ao
CONTRATANTE.
§ 2º. Não serão aplicáveis os prazos fixados nesta cláusula às
rescisões por justa causa.
§ 3º. A rescisão com justa causa, realizada por qualquer uma
das partes, não exime o CONTRATANTE do pagamento das
retribuições já vencidas.
§ 4º. A rescisão com justa causa por parte do CONTRATANTE
obriga a devolução, pelo CONTRATADO, dos eventuais valores
já pagos referentes a serviços não desenvolvidos. 
CLÁUSULA 7ª - DA EXTINÇÃO DO CONTRATO
O presente contrato extingue-se mediante a ocorrência se uma
das seguintes hipóteses:
I. Morte, se pessoa física, ou extinção, se pessoa jurídica, de
qualquer das partes;
II. Pelo escoamento do prazo;
III. Conclusão do serviço;
IV. Rescisão do contrato mediante aviso prévio, por
inadimplemento de qualquer das partes ou pela impossibilidade
da continuação do contrato, motivada por força maior
Parágrafo único. Ainda que a extinção do contrato tenha sido
realizada pelo CONTRATADO sem justo motivo, ele terá direito
a exigir da CONTRATANTE a declaração de que o contrato está
findo.
CLÁUSULA 8ª - DO DESCUMPRIMENTO
O descumprimento de quaisquer das obrigações e das cláusulas
fixadas neste contrato, seja pelo CONTRATANTE ou pelo
CONTRATADO, ensejará sua imediata rescisão, por justa causa,
e sujeitará o infrator ao pagamento de multa correspondente a
100% (por cento) da retribuição total, sem prejuízo de
indenização ou reparação por eventuais perdas e danos. 
CLÁUSULA 9ª - DO FORO
As partes elegem o foro da Comarca de Curitiba para dirimir
eventuais litígios decorrentes deste.
E assim, por estarem de justo acordo, as partes assinam este
instrumento em 02 (duas) vias de idêntico teor e forma, na
presença de 02 (duas) testemunhas, ao fim arroladas.
data
CONTRATANTE: Reparo-Rápido S/A, neste ato representada
por
José da Silva
CPF nº 70707070
CONTRATADO: nome + cpf, neste ato representada por
Nome do cara
CPF nº 
TESTEMUNHAS:
Nome completo: Pedro da Silva
CPF nº 000085-74
Nome completo: Maria Nunes
CPF nº 0012548-4`