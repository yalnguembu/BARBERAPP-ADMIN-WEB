import { ServiceDTO } from "../services";

export class Service {
  private readonly service: ServiceDTO;

  constructor(data: ServiceDTO) {
    this.service = data;
  }

  get id() {
    return this.service._id;
  }

  get name() {
    return this.service.name;
  }

  set name(value: string) {
    this.service.name = value;
  }

  get category() {
    return this.service.category;
  }

  set category(value: string) {
    this.service.category = value;
  }

  get description() {
    return this.service.description ?? "";
  }

  set description(value: string) {
    this.service.description = value;
  }

  get price() {
    return this.service.price;
  }

  set price(value: number) {
    this.service.price = value;
  }

  get picture() {
    return this.service.picture;
  }

  set picture(value: string) {
    this.service.picture = value ?? "service-default.png";
  }

  get duration() {
    return this.service.duration;
  }

  set duration(value: number) {
    this.service.duration = value;
  }
}

export const nullService = () =>
  new Service({
    _id: "",
    name: "",
    category: "",
    price: 0,
    picture: "",
    duration: 0,
  });
