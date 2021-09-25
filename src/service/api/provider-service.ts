import AsyncStorage from "@react-native-async-storage/async-storage";
import { IData } from "../../pages/Register";
import { IAddress } from "../../pages/Register/RegisterThree";
import api from "../config";

interface ILogin {
    username: string;
    password: string;
}

interface ILoginResponse {
    access_token: string, 
    name: string
}

interface ILoginToken {
    token: string, 
}

interface ServiceProviderResponse {
    idServiceProvider: string;
    idApprover: string;
    approved: boolean;
    cnpj: string;
    joinDate: Date;
    descriptionNotApproved: string;
}

export class ProviderService {
    static async login(data: ILogin) {
        const res = await api.post<ILoginResponse>('login-provider', data);
        AsyncStorage.setItem("TOKEN", res.data.access_token);
        return res.data;
    }

    static async loginToken(token: ILoginToken) {
        const res = await api.post<ILoginResponse>('login-token', token);
        AsyncStorage.setItem("TOKEN", res.data.access_token);
        return res.data;
    }

    static async createProvider(data: IData): Promise<ServiceProviderResponse> {
        const res = await api.post<ServiceProviderResponse>("provider", data);
        return res.data;
    }

    static async addAddress(id: string, address: IAddress): Promise<void>  {
        await api.post(`person-address/${id}`, address);
    };
}