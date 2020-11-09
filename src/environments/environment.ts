// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: "http://localhost:8084",
  API_URL_PAYMENT_SERVICE: "http://localhost:8092",
  API_URL_OAUTH_SERVICE: "http://localhost:8094",
  paymentPublicKey: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5kO7zrdqNNPlILPN5Gpy3r3//NVv8p15vziaok+mkba6CCxEM79hr3Xld4mkkwzAdvyct4v8ZEHmSMgGfIETep8CCq5i58XPA6BAQMCuUGgnM6k6139zgxS+YSn4TCZmpcH/1SSbn9B122MKVOybd6+QA8xp1VSyQzqnW0fThCQIDAQAB",
  encryptionEnabled: false,
  API_URL_ORDER: 'http://localhost:8093'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
