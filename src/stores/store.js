import { observable, action, computed } from "mobx";
import _ from "lodash";

export default class AppStore {
  @observable dealers = [];
  @observable selected = {};
  @observable
  filters = {
    isCommercial: false,
    isService: true,
    isResidential: true,
    isInstallation: true
  };
  @observable showMenu = false;
  @observable showContact = false;
  @observable showFilters = true;

  @computed
  get filteredDealers() {
    return _.filter(
      this.dealers,
      item =>
        (this.filters.isInstallation &&
          item.data.certifications.includes("Installation Pro")) ||
        (this.filters.isCommercial &&
          item.data.certifications.includes("Commercial Pro")) ||
        (this.filters.isResidential &&
          item.data.certifications.includes("Residential Pro")) ||
        (this.filters.isService &&
          item.data.certifications.includes("Service Pro"))
    );
  }
}
