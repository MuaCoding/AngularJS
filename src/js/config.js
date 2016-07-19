angular.module("AngularJS").constant("config", {
	url: "http://",
	imageUrl: "http://",
	request: {
		"SUCCESS": "200",
		"TOKEN_INVALID": "405"
	},
	response: {
		"SUCCESS": 1
	},
	common_params: {
		invoke: "h5",
		app_sign: "123456"
	},
	interceptor: [
		"index",
		"edit",
	]
});