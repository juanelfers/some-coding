const UrlGenerator = require('./UrlGenerator'); // Update the path if needed

describe('UrlGenerator', () => {
    test('should generate a valid URL', () => {
        const urlBuilder = new UrlGenerator();
        const generatedUrl = urlBuilder
            .addParams({
                width: 360,
                height: 300,
                locale: 'en',
                toolbar_bg: '',
                interval: '3h',
                pair: 'BTC_USD',
            })
            .generate();

        const expectedUrl = 'http://testurl.bitfinx.com/?height=300&interval=3h&locale=en&pair=BTC_USD&width=360';

        expect(generatedUrl).toBe(expectedUrl);
    });
});
