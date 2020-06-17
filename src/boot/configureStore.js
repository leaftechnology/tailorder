// DomainStore (Data)
// import MainStore from "../store/DomainStore/HomeStore
import HomeDomain from "../store/DomainStore/HomeDomain";
import SettingsDomain from "../store/DomainStore/SettingsDomain";

// ViewStore (UI, Loadings and Others)
import HomeView from "../store/ViewStore/HomeView";
import SettingsView from "../store/ViewStore/SettingsView";
import LogView from "../store/ViewStore/LogView";
import PendingView from "../store/ViewStore/PendingView";

export default function() {
	const homeView = new HomeView();
	const homeDomain = new HomeDomain();
	const settingsView = new SettingsView();
	const settingsDomain = new SettingsDomain();
	const logView = new LogView();
	const pendingView = new PendingView();

	return {
		homeView,
		homeDomain,
		settingsView,
		settingsDomain,
		logView,
		pendingView,
	};
}
