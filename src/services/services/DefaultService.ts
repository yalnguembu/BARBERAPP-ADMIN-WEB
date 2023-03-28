/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccesTokenDTO } from '../models/AccesTokenDTO';
import type { AuthDTO } from '../models/AuthDTO';
import type { AuthResponseDTO } from '../models/AuthResponseDTO';
import type { CreateServiceDTO } from '../models/CreateServiceDTO';
import type { ServiceDTO } from '../models/ServiceDTO';
import type { UserDTO } from '../models/UserDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * login user
     * login user
     * @returns AuthResponseDTO updated successfully
     * @throws ApiError
     */
    public static login({
        requestBody,
    }: {
        /**
         * fields need for autenticate user
         */
        requestBody: AuthDTO,
    }): CancelablePromise<AuthResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `invalid crudentials`,
                403: `wrong crudentials`,
            },
        });
    }

    /**
     * create user account
     * create user account
     * @returns AuthResponseDTO updated successfully
     * @throws ApiError
     */
    public static register({
        requestBody,
    }: {
        /**
         * fields need for create user account
         */
        requestBody: AuthDTO,
    }): CancelablePromise<AuthResponseDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `invalid crudentials`,
                409: `email address already taken`,
            },
        });
    }

    /**
     * verify a use token
     * verify a use token
     * @returns any token validated
     * @throws ApiError
     */
    public static verifyToken({
        requestBody,
    }: {
        /**
         * fields need for verify a use token
         */
        requestBody: AccesTokenDTO,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/verify-token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `invalid token`,
            },
        });
    }

    /**
     * update user informations
     * update user informations
     * @returns any updated successfully
     * @throws ApiError
     */
    public static putUser({
        id,
        requestBody,
    }: {
        /**
         * the user id to get
         */
        id: Array<string>,
        /**
         * fields need for update user informations
         */
        requestBody: UserDTO,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * create new services
     * create new services
     * @returns ServiceDTO updated successfully
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        /**
         * fields need for create services informations
         */
        requestBody: CreateServiceDTO,
    }): CancelablePromise<ServiceDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/service',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * update services informations
     * update services informations
     * @returns ServiceDTO updated successfully
     * @throws ApiError
     */
    public static putService({
        id,
        requestBody,
    }: {
        /**
         * the service id to get
         */
        id: string,
        /**
         * fields need for update services informations
         */
        requestBody: CreateServiceDTO,
    }): CancelablePromise<ServiceDTO> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/service/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
