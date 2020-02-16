import {Image} from "../entities/Image";

const axios = require('axios');

let baseUrl = 'https://0zo6202t5l.execute-api.eu-west-1.amazonaws.com/Prod/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default class PhotoboothApi {

  public async getImages(year: string, month: string, day: string): Promise<Image[]> {
    try {
      const url = baseUrl + 'images/' + year + '/' + month + '/' + day + '/';
      console.log(url, "URL");
      const result = await axios.get(url);
      return result.data;
    } catch (error) {
      console.log(error, "ERROR");
      return [];
    }
  }

}