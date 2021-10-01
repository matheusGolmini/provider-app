
import api from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ISkill {
    name: string;
    description: string;
    imageUrl: string;
}

export class SkillService {

    static async getAllSkills(): Promise<ISkill[]> {
        const value = await api.get<ISkill[]>('skill');
        return value.data;
    }
}