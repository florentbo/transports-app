/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  StopDto,
} from '../models';
import {
    StopDtoFromJSON,
    StopDtoToJSON,
} from '../models';

export interface WaitingPointsGETRequest {
    waitingPoints: Array<number>;
}

export interface WaitingPointsPOSTRequest {
    requestBody?: Array<number>;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * waitingPoints function
     */
    async waitingPointsGETRaw(requestParameters: WaitingPointsGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<StopDto>>> {
        if (requestParameters.waitingPoints === null || requestParameters.waitingPoints === undefined) {
            throw new runtime.RequiredError('waitingPoints','Required parameter requestParameters.waitingPoints was null or undefined when calling waitingPointsGET.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/waitingPoints/{waitingPoints}`.replace(`{${"waitingPoints"}}`, encodeURIComponent(String(requestParameters.waitingPoints))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StopDtoFromJSON));
    }

    /**
     * waitingPoints function
     */
    async waitingPointsGET(requestParameters: WaitingPointsGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<StopDto>> {
        const response = await this.waitingPointsGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * waitingPoints function
     */
    async waitingPointsPOSTRaw(requestParameters: WaitingPointsPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<StopDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/waitingPoints`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StopDtoFromJSON));
    }

    /**
     * waitingPoints function
     */
    async waitingPointsPOST(requestParameters: WaitingPointsPOSTRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<StopDto>> {
        const response = await this.waitingPointsPOSTRaw(requestParameters, initOverrides);
        return await response.value();
    }

}