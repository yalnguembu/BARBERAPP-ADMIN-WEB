/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReservationDTO = {
    _id: string;
    service?: {
        id?: string;
        name?: string;
        description?: string;
        duration?: string;
        price?: string;
    };
    client?: {
        id?: string;
        username?: string;
        email?: string;
    };
    date?: string;
    picture: string;
    price: number;
    duration: number;
    isCanceled?: boolean;
};

