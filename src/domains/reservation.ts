import { ReservationDTO } from "../services";

export class Reservation {
  reservation: ReservationDTO;
  constructor(data: ReservationDTO) {
    this.reservation = data;
  }

  get id() {
    return this.reservation._id;
  }

  get date() {
    return this.reservation.date;
  }

  get clientName() {
    return this.reservation.client?.username;
  }

  get fullDate() {
    return this.reservation.date;
  }

  get duration() {
    return this.reservation.duration ?? "";
  }

  get serviceName() {
    return this.reservation.service?.name ?? "";
  }

  get serviceDuration() {
    return this.reservation.service?.duration ?? "";
  }

  get serviceDescription() {
    return this.reservation.service?.description ?? "";
  }

  get servicePrice() {
    return this.reservation.service?.price ?? "";
  }

  get isCanceled() {
    return this.reservation.isCanceled ?? "";
  }
}
