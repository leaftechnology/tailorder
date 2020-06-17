import { observable, action, computed } from "mobx";
import { retrieveFromStorage, saveToStorage } from "../../services/storage";

import { SETTINGS_KEY } from "../../model/Settings";

export default class SettingsDomain {
  @observable host = "";
  @observable protocol = "http:";
  @observable queueHost = "";
  @observable hasPending = false;
  @observable useDescription = false;
  @observable deviceId = "";
  @observable enablePrint = false;
  @observable iconSize = "small";
  @observable exclusiveTax = false;
  @observable roundoff = false;


  // Number
  @observable tax = "";

  constructor() {
    retrieveFromStorage(SETTINGS_KEY)
      .then(data => {
        this.host = data.host;
        this.protocol = data.protocol;
        this.deviceId = data.deviceId;
        this.queueHost = data.queueHost;
        this.hasPending = data.hasPending;
        this.useDescription = data.useDescription;
        this.enablePrint = data.enablePrint;
        this.iconSize = data.iconSize;
        this.tax = data.tax;
        this.exclusiveTax = data.exclusiveTax;
        this.roundoff = data.roundoff;
      });
  }

  save = () => {
    saveToStorage(SETTINGS_KEY, {
      host: this.host,
      deviceId: this.deviceId,
      protocol: this.protocol,
      queueHost: this.queueHost,
      hasPending: this.hasPending,
      useDescription: this.useDescription,
      enablePrint: this.enablePrint,
      iconSize: this.iconSize,
      tax: this.tax,
      exclusiveTax: this.exclusiveTax,
        roundoff: this.roundoff,
    });
  }

  @action
  setHost = (host) => {
    this.host = host;
  }

  @action
  setQueueHost = (queueHost) => {
    this.queueHost = queueHost;
  }

  @action
  setProtocol = (protocol) => {
    this.protocol = protocol;
  }

  @action
  setDeviceId = (deviceId) => {
    this.deviceId = deviceId;
  }

  @action
  toggleHasPending = () => {
    this.hasPending = !this.hasPending;
  }

  @action
  toggleUseDescription = () => {
    this.useDescription = !this.useDescription;
  }

  @action
  toggleEnablePrint = () => {
    this.enablePrint = !this.enablePrint;
  }

  @action
  toggleExclusiveTax = () => {
    this.exclusiveTax = !this.exclusiveTax;
  }
  @action
  toggleRoundOff = () => {
    this.roundoff = !this.roundoff;
  }

  @computed
  get getOrigin() {
    return `${this.protocol}//${this.host}`;
  }

  @computed
  get getQueueOrigin() {
    return `http://${this.queueHost}`;
  }

  @computed
  get taxPercentage() {
    return parseFloat(this.tax) / 100.00;
  }

  @action
  setIconSize = (iconSize) => {
    this.iconSize = iconSize;
  }

  @action
  setTax = (tax) => {
    this.tax = tax;
  }
}
