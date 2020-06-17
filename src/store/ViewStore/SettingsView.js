import { observable, action } from "mobx";

export default class SettingsView {
  @observable isEditing = false;

  @action
  setIsEditing = () => {
    this.isEditing = true;
  }

  @action
  setIsNotEditing = () => {
    this.isEditing = false;
  }
}
