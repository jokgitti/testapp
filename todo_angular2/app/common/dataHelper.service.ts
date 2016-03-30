import {Injectable} from "angular2/core";
import {GenericResponse} from "../model/common/genericResponse";
import {Response} from "angular2/http";
import {Observable} from "rxjs/Observable";

let STATUS_OK = "OK";
let STATUS_KO = "KO";

@Injectable()
export class DataHelperService {

    constructor() {

    }

    public validateGenericResponse(response:GenericResponse) {

        return response.statusCode === STATUS_OK;
    }
    public handleResponseError(error:Response){

        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}