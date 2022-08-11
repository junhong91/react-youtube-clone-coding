import * as axios from "axios";

class YoutubeApi {
  baseURL = `${process.env.REACT_APP_GOOGLE_API_URL}/${process.env.REACT_APP_YOUTUBE_API_SERVICE_NAME}/${process.env.REACT_APP_YOUTUBE_API_VERSION}`;
  resource;
  api;

  constructor(resource) {
    if (!resource) throw new Error("Resource is not provided");
    this.resource = resource;
    this.api = axios.create({});
  }

  getURL() {
    return `${this.baseURL}/${this.resource}`;
  }

  handleError(err) {
    console.log({ message: "Errors is handled here", err });
  }
}

class YoutubeSearchApi extends YoutubeApi {
  async getVieos(query) {
    try {
      const resp = await this.api.get(this.getURL(), {
        params: {
          part: "snippet",
          q: query,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          maxResults: 50,
        },
      });
      return resp.data;
    } catch (err) {
      this.handleError(err);
    }
  }
}

export default new YoutubeSearchApi("search");
