
import api from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IConstract {
    clientEmail: string,
    longDescription: string,
    briefDescription: string,
    startDate: string,
    endDate: string,
    amountTotal: string;
    agreement: string
}

export class ConstractService {

    static async createContract(data: IConstract): Promise<void> {
        const jwt = await this.getJwt();
        await api.post<void>('contract', data, {headers: {Authorization: jwt}})
    }

    private static async getJwt(): Promise<string> {
        return `Bearer ${ await AsyncStorage.getItem("TOKEN")}`
    }
}