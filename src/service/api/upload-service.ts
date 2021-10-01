
import api from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IReponseUpload {
    webContentLink: string;
    webViewLink: string;
}


export class UploadService {
    static async uploadImage(data: any): Promise<string> {
        const value = await api.post<IReponseUpload>('upload', data, {headers: {'Content-Type': 'multipart/form-data'}});
        return value.data.webViewLink;
    }
}