import data from "./dealers.json";

export default class api {
  static fetch(endpoint) {
    return data[endpoint];
  }
}
