import {initBotId} from 'botid/client/core';

initBotId({
	protect: [
		{
			path: '/',
			method: 'POST'
		},
		{
			path: '/stadguide',
			method: 'POST'
		},
		{
			path: '/fragor-och-svar',
			method: 'POST'
		},
		{
			path: '/priser',
			method: 'POST'
		},
		{
			path: '/varfor-oss',
			method: 'POST'
		}
	]
});
