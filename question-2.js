/* 2) Create a function `generateUrl`

	# Input
	{
		width: 360,
		height: 300,
		locale: 'en',
		toolbar_bg: '',
		interval: '3h',
		pair: 'BTC_USD',
	}

	# Output
	'http://testurl.bitfinx.com/?height=300&interval=3h&locale=en&pair=BTC_USD&width=360'
*/

function generateUrl(params, baseUrl = 'http://testurl.bitfinx.com/') {
	// Keep non-empty params
	const filteredParams = {};
	for (const key in params) {
		if (params[key]) {
			filteredParams[key] = params[key];
		}
	}

	// Sort params
	const sortedParams = {};
	Object.keys(filteredParams)
		.sort((a, b) => a > b)
		.forEach((key) => sortedParams[key] = filteredParams[key]);

	// Finally get query string
	const queryString = new URLSearchParams(sortedParams).toString();

	return baseUrl + '?' + queryString;
}
