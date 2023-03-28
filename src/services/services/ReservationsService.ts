/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReservationsService {

    /**
     * fetch all reservations
     * fetch  all reservations
     * @returns any informations successfully fecthed
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/reservations',
            errors: {
                401: `unauthorize`,
            },
        });
    }

}
