import { observable, action } from "mobx";
import { retrieveFromStorage } from "../../services/storage";

import { LOG_KEY } from "../../model/Log";

class LogView {
  @observable lastSync = null;

  constructor() {
    retrieveFromStorage(LOG_KEY)
      .then(data => this._retrieve(data));
  }

  @action
  _retrieve = (data) => {
    this.lastSync = data.lastSync;
  }
}

export default LogView;
