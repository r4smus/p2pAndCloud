import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AzureRestService {
  private baseUrl = 'https://ussouthcentral.services.azureml.net/workspaces/e3ed17fd7e11483bb250fba7825fd758/services/0c0bcd6bbf4b477cbc29989853475c93/execute?api-version=2.0&details=true';
  private headers = new Headers({
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer mxsVIJi7sBzLL09rsrvbqRkU7DxB8tob9vnDgmi+3cqDOBIfO6B7LEnGlwEJm/6karFTwTFfsHAlCVaAOTV1Yw=='});
  constructor(private http: Http) { }

  getSummary() {
    var data = {
      "Inputs": {
        "input1": {
          "ColumnNames": [
            "Precip Type",
            "Temperature (C)",
            "Apparent Temperature (C)",
            "Humidity",
            "Wind Speed (km/h)",
            "Wind Bearing (degrees)",
            "Visibility (km)",
            "Pressure (millibars)"
          ],
          "Values": [
            [
              "rain",
              "7350000000000000",
              "3555555555555550",
              "88",
              "24955000000000000",
              "190",
              "58443000000000000",
              "100708"
            ]
          ]
        }
      },
      "GlobalParameters": {}
    }
      this.http.post(this.baseUrl, data, { headers: this.headers })
      .toPromise().then(response => response.json())
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }

}
