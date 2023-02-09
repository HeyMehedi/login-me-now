import apiFetch from '@wordpress/api-fetch';

const setInitialState = (store) => {
	apiFetch({
		path: '/login-me-now/v1/admin/settings/',
	}).then((data) => {
		const initialState = {
			settingsSavedNotification: '',
			magicLinkPopup: '',
			initialStateSetFlag: true,
			activeSettingsNavigationTab: 'global-settings',
			enableLoadFontsLocally: data.self_hosted_gfonts,
			enableLogs: data.logs,
			enablePreloadLocalFonts: data.preload_local_fonts,
			blocksStatuses: data.pro_addons,
		};

		store.dispatch({ type: 'UPDATE_INITIAL_STATE', payload: initialState });
	});
};

export default setInitialState;
