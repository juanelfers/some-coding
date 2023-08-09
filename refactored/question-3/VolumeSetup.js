class VolumeSetup {
    #elementsMap = {
        FIRSTCCY: $('#tickervolccy_0'),
        USD: $('#tickervolccy_USD'),
        BTC: $('#tickervolccy_BTC'),
        ETH: $('#tickervolccy_ETH')
    };

    #settingsUtil = window.APP.util;

    setup() {
        const volumeUnit = this.#settingsUtil.getSettings('ticker_vol_unit').toUpperCase();
        const element = this.#elementsMap[volumeUnit];

        if (element) {
            element.prop("checked", true);
        }

        return this.#settingsUtil.initCurrenciesList();
    }

    getSettings() {
        return this.#settingsUtil;
    }

    getElementsMap() {
        return this.#elementsMap;
    }

    setSettings(settings) {
        this.#settingsUtil = settings;
        return this;
    }

    setElementsMap(elementsMap) {
        this.#elementsMap = elementsMap;
        return this;
    }
}

const volumeSetup = new VolumeSetup();
const result = volumeSetup.setup();
