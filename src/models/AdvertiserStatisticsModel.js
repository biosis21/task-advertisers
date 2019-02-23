

export class AdvertiserStatisticsModel {

    constructor(data = {}) {

        this.advertiserId = data.advertiserId;
        this.clicks = data.clicks;
        this.impressions = data.impressions;
    }

}