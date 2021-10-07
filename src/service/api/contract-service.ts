
import api from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IPerson } from "../../interfaces";

interface IConstract {
    clientEmail: string,
    longDescription: string,
    briefDescription: string,
    startDate: string,
    endDate: string,
    amountTotal: string;
    agreement: string;
    terminatedServiceProvider: boolean;
}

export interface IConstractResponse extends IConstract {
    status: string;
    id: string;
    Person: IPerson;
    Provider: {
        cnpj: string;
        idServiceProvider: IPerson;
    }
}

export class ConstractService {

    static async createContract(data: IConstract): Promise<void> {
        const jwt = await this.getJwt();
        await api.post<void>('contract', data, {headers: {Authorization: jwt}})
    };

    static async getWaitingSignature(): Promise<IConstractResponse[]> {
        const jwt = await this.getJwt();
        const res = await api.get<IConstractResponse[]>('contract/provider/waiting-signatures', {headers: {Authorization: jwt}});
        return res.data;
    };

    static async getInprogress(): Promise<IConstractResponse[]>{
        const jwt = await this.getJwt();
        const res = await api.get<IConstractResponse[]>('contract/provider/in-progress', {headers: {Authorization: jwt}});
        return res.data;
    }

    static async getFinished(): Promise<IConstractResponse[]> {
        const jwt = await this.getJwt();
        const res = await api.get<IConstractResponse[]>('contract/provider/finished', {headers: {Authorization: jwt}});
        return res.data;
    }

    static async updateStatus(contractId: string, data: {status: string}): Promise<IConstractResponse[]> {
        const jwt = await this.getJwt();
        const res = await api.patch<IConstractResponse[]>(`contract/${contractId}`, data, {headers: {Authorization: jwt}});
        return res.data;
    }

    static async updateFinalizarContrato(contractId: string, terminatedServiceProvider: boolean): Promise<IConstractResponse[]> {
        const jwt = await this.getJwt();
        const res = await api.patch<IConstractResponse[]>(`contract/${contractId}`, {terminatedServiceProvider}, {headers: {Authorization: jwt}});
        return res.data;
    }

    private static async getJwt(): Promise<string> {
        return `Bearer ${ await AsyncStorage.getItem("TOKEN")}`
    };
}