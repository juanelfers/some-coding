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

class UrlGenerator {
    constructor(baseUrl = 'http://testurl.bitfinx.com/') {
        this.baseUrl = baseUrl;
        this.params = {};
    }

    addParams(params) {
        Object.entries(params).forEach(([key, value]) => this.addParam(key, value));
        return this;
    }

    addParam(key, value) {
        if (value) {
            this.params[key] = value;
        }
        return this;
    }

    generate() {
        const sortedParams = Object.keys(this.params)
            .sort((a, b) => (a > b ? 1 : -1))
            .reduce((sorted, key) => {
                sorted[key] = this.params[key];
                return sorted;
            }, {});

        const queryString = new URLSearchParams(sortedParams).toString();

        return this.baseUrl + '?' + queryString;
    }
}

module.exports = UrlGenerator;
