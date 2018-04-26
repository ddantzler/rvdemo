import api from "./api";

it("returns data", () => {
  api.fetch("dealers");
  api.fetch("zipcode");
});
