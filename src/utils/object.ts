export class UtilsObject {
    static removeKeyUndefined<T>(data: Partial<any>): Partial<T> {
        Object.keys(data).forEach(
            (key) => data[key] === undefined || data[key] === '' 
            && delete data[key]
        );
        return data;
    }
}