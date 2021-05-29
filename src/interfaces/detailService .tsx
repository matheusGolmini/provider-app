export interface IDetailService {
    id: string
    service: string;
    nameProvider: string;
    combinedContract: string;
    is_finishing: boolean;
    is_payment: boolean;
    days: number;
    value: number;
    phone: string;
    imageProvider:string;
    start_date?: Date;
    end_date?: Date;
    color: string;
    help_open: boolean;
}