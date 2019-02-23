

export class AdvertiserModel {

    constructor(data = {}) {

        this.id = data.id;
        this.name = data.name;
        this.createdAt = data.createdAt;
        this.campaignIds = data.campaignIds;
    }

}