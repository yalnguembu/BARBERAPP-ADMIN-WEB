/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceDTO } from '../models/ServiceDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ServiceService {

    /**
     * fetch Service details
     * fetch Service details
     * @returns ServiceDTO informations successfully fecthed
     * @throws ApiError
     */
    public static getById({
        id,
    }: {
        /**
         * the service id to delet
         */
        id: string,
    }): CancelablePromise<ServiceDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/service/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `unauthorize`,
            },
        });
    }

    /**
     * delete Service details
     * delete Service details
     * @returns any services successfully delete
     * @throws ApiError
     */
    public static deleteById({
        id,
    }: {
        /**
         * the service id to delet
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/service/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `unauthorize`,
            },
        });
    }

}
