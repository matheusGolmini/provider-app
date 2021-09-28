import { IPerson } from './index'

export interface IUpdatePerson extends Partial<IPerson>{
    password?: string;
}
