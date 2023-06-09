/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReservationDTO } from '../models/ReservationDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReservationService {

    /**
     * fetch Reservation details
     * fetch Reservation details
     * @returns ReservationDTO informations successfully fecthed
     * @throws ApiError
     */
    public static getReservationById({
        id,
    }: {
        /**
         * the service id to delet
         */
        id: string,
    }): CancelablePromise<ReservationDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/reservation/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `unauthorize`,
            },
        });
    }

    /**
     * cancel reservation
     * cancel reservation
     * @returns any reservation successfully cancel
     * @throws ApiError
     */
    public static cancelReservation({
        id,
    }: {
        /**
         * the service id to delet
         */
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/reservation/{id}/cancel',
            path: {
                'id': id,
            },
            errors: {
                401: `unauthorize`,
            },
        });
    }

}
