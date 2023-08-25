import { generatePoint } from '../mock/data.js';
import { POINT_COUNT, DESTINATIONS, OFFERS } from '../const.js';

export default class MockService {
  #destinations = [];
  #points = [];
  #offers = [];

  constructor() {
    this.#destinations = DESTINATIONS;
    this.#offers = OFFERS;
    this.#points = this.#generatePoints();
  }

  getDestinations() {
    return this.#destinations;
  }

  getOffers() {
    return this.#offers;
  }

  getPoints() {
    return this.#points;
  }

  #generatePoints() {
    return Array.from({ length: POINT_COUNT }, () => generatePoint());
  }
}
