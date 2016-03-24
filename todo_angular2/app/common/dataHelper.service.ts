import {Injectable} from "angular2/core";
import {GenericResponse} from "../model/common/genericResponse";

let STATUS_OK = "OK";
let STATUS_KO = "KO";

@Injectable()
export class DataHelperService {

    constructor() {

    }

    public validateGenericResponse(response:GenericResponse) {

        return response.statusCode === STATUS_OK;
    }
}