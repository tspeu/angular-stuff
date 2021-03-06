// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
   production: false,
   affiliatesApiUrl: 'https://api-affiliates-program-test.azurewebsites.net/api/',
   // affiliatesApiUrl: 'https://localhost:5001/api/',
   courseApi: 'https://tech-course-api.azurewebsites.net/api/',
   cdnUrl: 'https://cdn.techtitute.com/techtitute/',
   geoApiUrl: 'https://api-geoapi-test.azurewebsites.net/api/',
   hostTech: 'http://desarrollo2.techtitute.com',
   jwt: {
      whiteListedDomains: ['api-affiliates-program-test.azurewebsites.net'/*, 'localhost:5001'*/],
      blackListedRoutes:  ['api-affiliates-program-test.azurewebsites.net/api/auth/', /*'localhost:5001/api/auth/',*/
                           'tech-course-api.azurewebsites.net',
                           'api-geoapi-test.azurewebsites.net']
   }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
