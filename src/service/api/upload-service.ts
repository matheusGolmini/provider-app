
import api from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IReponseUpload {
    webContentLink: string;
    webViewLink: string;
}


export class UploadService {

    static async uploadImage(data: any): Promise<string> {
        const jwt = await this.getJwt();
        const value = await api.post<IReponseUpload>('upload', data, {headers: {Authorization: jwt, 'Content-Type': 'multipart/form-data'}});
        return value.data.webViewLink;
    }

    private static async getJwt(): Promise<string> {
        return `Bearer ${ await AsyncStorage.getItem("TOKEN")}`
    }
}