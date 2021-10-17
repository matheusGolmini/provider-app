
import api from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IPerson } from "../../interfaces/person";

export interface ICreateRating {
    ratingPerson?: string;
    ratedPerson: string;
    contract: string;
    rating: number;
}

export interface IUpdateRating extends Partial<ICreateRating> {}

export interface IRatingResponse {
    ratingPerson: string;
    ratedPerson: string;
    contract: string;
    rating: number;
    id: string;
}

export class RatingService {
    static async createRating(data: ICreateRating): Promise<IRatingResponse> {
        const personString = String(await AsyncStorage.getItem("person"));
        const person = JSON.parse(personString) as IPerson;
        data.ratingPerson = person.id;
        const jwt = await this.getJwt();
        const res = await api.post<IRatingResponse>(`rating`, data, {headers: {Authorization: jwt}});
        return res.data;
    };

    static async updateRating(data: IUpdateRating, ratingID: string): Promise<void> {
        const jwt = await this.getJwt();
        await api.patch<void>(`rating/${ratingID}`, data, {headers: {Authorization: jwt}});
    };

    static async getRatingByContractId(contractId: string): Promise<IRatingResponse> {
        const jwt = await this.getJwt();
        const res = await api.get<IRatingResponse>(`rating/contract/${contractId}`, {headers: {Authorization: jwt}});
        return res.data;
    };

    private static async getJwt(): Promise<string> {
        return `Bearer ${ await AsyncStorage.getItem("TOKEN")}`
    };
}