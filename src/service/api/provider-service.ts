import AsyncStorage from "@react-native-async-storage/async-storage";
import { IPerson, IUpdatePerson, IGetServiceProviderById } from "../../interfaces";
import { IData } from "../../pages/Register";
import { IAddress } from "../../pages/Register/RegisterThree";
import api from "../config";

interface ILogin {
    username: string;
    password: string;
}

interface ILoginResponse {
    access_token: string, 
    name: string,
    person: IPerson
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

interface UpdateServiceProvider {
    imageServices: string[];
}

export class ProviderService {
    static async login(data: ILogin) {
        const res = await api.post<ILoginResponse>('login-provider', data);
        AsyncStorage.setItem("TOKEN", res.data.access_token);
        AsyncStorage.setItem("person", JSON.stringify(res.data.person));
        return res.data;
    }

    static async loginToken(token: ILoginToken) {
        const res = await api.post<ILoginResponse>('login-token', token);
        await AsyncStorage.setItem("TOKEN", res.data.access_token);
        await AsyncStorage.setItem("person", JSON.stringify(res.data.person));
        return res.data;
    }

    static async createProvider(data: IData): Promise<ServiceProviderResponse> {
        const res = await api.post<ServiceProviderResponse>("provider", data);
        return res.data;
    }

    static async addAddress(id: string, address: IAddress): Promise<void>  {
        await api.post(`person-address/${id}`, address);
    };

    static async upadatePerson(data: IUpdatePerson): Promise<void>  {
        const personString = String(await AsyncStorage.getItem("person"));
        const person = JSON.parse(personString) as IPerson;
        const jwt = await this.getJwt();
        await api.patch(`client/${person.id}`, data,{headers: {Authorization: jwt}});

        Object.assign(person, data);
        AsyncStorage.setItem("person", JSON.stringify(person));
        
    };

    static async upadateServiceProvider(data: UpdateServiceProvider): Promise<void>  {
        const personString = String(await AsyncStorage.getItem("person"));
        const person = JSON.parse(personString) as IPerson;
        const jwt = await this.getJwt();
        await api.patch(`provider/${person.id}`, data,{headers: {Authorization: jwt}});
    };

    static async getServiceProviderById(id: string): Promise<IGetServiceProviderById>  {
        const jwt = await this.getJwt();
        const res = await api.get<IGetServiceProviderById>(`provider/${id}`,{headers: {Authorization: jwt}});
        return res.data;
    };

    private static async getJwt(): Promise<string> {
        return `Bearer ${ await AsyncStorage.getItem("TOKEN")}`
    }
}