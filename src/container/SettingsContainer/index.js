import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Settings from "../../stories/screens/Settings";

import { showDangerToast } from "../../utils";

@inject("settingsDomain", "settingsView")
@observer
class SettingsContainer extends React.Component {
  setProtocol = () => {
    const { settingsDomain } = this.props;

    if (settingsDomain.protocol !== "https:") {
      settingsDomain.setProtocol("https:");
    } else {
      settingsDomain.setProtocol("http:");
    }
  }

  onPrimary = () => {
    const { isEditing, setIsEditing } = this.props.settingsView;

    if (isEditing) {
      try {
        this._save();
      } catch (err) {
        showDangerToast(err.message, "bottom");
      }
    } else {
      setIsEditing();
    }
  }

  _validate = () => {
    const { tax, setTax } = this.props.settingsDomain;

    if (!parseFloat(tax)) {
        setTax(parseFloat(0).toFixed(2));
    } else {
      setTax(parseFloat(tax).toFixed(2));
    }
  }

  _save = () => {
    const { save } = this.props.settingsDomain;
    const { setIsNotEditing } = this.props.settingsView;

    this._validate();
    save();
    setIsNotEditing();
  }

  render() {
    const {
      navigation,
      settingsView,
      settingsDomain,
    } = this.props;

    return (
      <Settings
        navigation={navigation}

        // SettingsDomain
        host={settingsDomain.host}
        protocol={settingsDomain.protocol}
        queueHost={settingsDomain.queueHost}
        hasPending={settingsDomain.hasPending}
        useDescription={settingsDomain.useDescription}
        setHost={settingsDomain.setHost}
        setQueueHost={settingsDomain.setQueueHost}
        toggleHasPending={settingsDomain.toggleHasPending}
        toggleUseDescription={settingsDomain.toggleUseDescription}
        deviceId={settingsDomain.deviceId}
        setDeviceId={settingsDomain.setDeviceId}
        enablePrint={settingsDomain.enablePrint}
        toggleEnablePrint={settingsDomain.toggleEnablePrint}
        iconSize={settingsDomain.iconSize}
        setIconSize={settingsDomain.setIconSize}
        tax={settingsDomain.tax}
        setTax={settingsDomain.setTax}
        exclusiveTax={settingsDomain.exclusiveTax}
        toggleExclusiveTax={settingsDomain.toggleExclusiveTax}
        roundoff={settingsDomain.roundoff}
        toggleRoundOff={settingsDomain.toggleRoundOff}

        // SettingsView
        isEditing={settingsView.isEditing}
        setIsEditing={settingsView.setIsEditing}

        // Container
        onPrimary={this.onPrimary}
        setProtocol={this.setProtocol}
      />
    );
  }
}

export default SettingsContainer;
