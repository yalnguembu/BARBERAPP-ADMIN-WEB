/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserDTO } from '../models/UserDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * fecth all users
     * fecth all users
     * @returns UserDTO OK
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<Array<UserDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            errors: {
                401: `unauthorize`,
            },
        });
    }

    /**
     * fetch user details
     * fetch user details
     * @returns UserDTO informations successfully fecthed
     * @throws ApiError
     */
    public static getUserById({
        id,
    }: {
        /**
         * the user id to get
         */
        id: Array<string>,
    }): CancelablePromise<UserDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `unauthorize`,
            },
        });
    }

}
