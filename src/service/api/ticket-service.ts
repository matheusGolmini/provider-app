import AsyncStorage from "@react-native-async-storage/async-storage";
import { IPerson } from "../../interfaces";
import api from "../config";

interface Ticket {
    description: string;
    type: string;
    idService?: string;
}

export class TicketService {
    static async createTicket(data: Ticket): Promise<void>  {
        const personString = String(await AsyncStorage.getItem("person"));
        const person = JSON.parse(personString) as IPerson;
        const jwt = await this.getJwt();
   
        await api.post<Promise<void>>(`ticket`, {...data, status: 'Aberto', idPerson: person.id}, {headers: {Authorization: jwt}});
    };

    private static async getJwt(): Promise<string> {
        return `Bearer ${ await AsyncStorage.getItem("TOKEN")}`
    }
}