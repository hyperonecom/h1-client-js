# HyperoneClient.ReservationApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reservationActionAssign**](ReservationApi.md#reservationActionAssign) | **POST** /reservation/{reservationId}/actions/assign | /actions/assign
[**reservationActionExtend**](ReservationApi.md#reservationActionExtend) | **POST** /reservation/{reservationId}/actions/extend | /actions/extend
[**reservationCreate**](ReservationApi.md#reservationCreate) | **POST** /reservation | Create
[**reservationDelete**](ReservationApi.md#reservationDelete) | **DELETE** /reservation/{reservationId} | Delete
[**reservationDeleteAccessrightsIdentity**](ReservationApi.md#reservationDeleteAccessrightsIdentity) | **DELETE** /reservation/{reservationId}/accessrights/{identity} | /accessrights/:identity
[**reservationDeleteTagKey**](ReservationApi.md#reservationDeleteTagKey) | **DELETE** /reservation/{reservationId}/tag/{key} | /tag/:key
[**reservationGetServicesServiceId**](ReservationApi.md#reservationGetServicesServiceId) | **GET** /reservation/{reservationId}/services/{serviceId} | /services/:serviceId
[**reservationGetTag**](ReservationApi.md#reservationGetTag) | **GET** /reservation/{reservationId}/tag | /tag
[**reservationList**](ReservationApi.md#reservationList) | **GET** /reservation | List
[**reservationListAccessrights**](ReservationApi.md#reservationListAccessrights) | **GET** /reservation/{reservationId}/accessrights | /accessrights
[**reservationListQueue**](ReservationApi.md#reservationListQueue) | **GET** /reservation/{reservationId}/queue | /queue
[**reservationListServices**](ReservationApi.md#reservationListServices) | **GET** /reservation/{reservationId}/services | /services
[**reservationPatchTag**](ReservationApi.md#reservationPatchTag) | **PATCH** /reservation/{reservationId}/tag | /tag
[**reservationPostAccessrights**](ReservationApi.md#reservationPostAccessrights) | **POST** /reservation/{reservationId}/accessrights | /accessrights
[**reservationPutTag**](ReservationApi.md#reservationPutTag) | **PUT** /reservation/{reservationId}/tag | /tag
[**reservationShow**](ReservationApi.md#reservationShow) | **GET** /reservation/{reservationId} | Get
[**reservationUpdate**](ReservationApi.md#reservationUpdate) | **PATCH** /reservation/{reservationId} | Update



## reservationActionAssign

> Reservation reservationActionAssign(reservationId, reservationActionAssign, opts)

/actions/assign

Action assign

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var reservationActionAssign = new HyperoneClient.ReservationActionAssign(); // ReservationActionAssign | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.reservationActionAssign(reservationId, reservationActionAssign, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 
 **reservationActionAssign** | [**ReservationActionAssign**](ReservationActionAssign.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reservationActionExtend

> Reservation reservationActionExtend(reservationId, opts)

/actions/extend

Action extend

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.reservationActionExtend(reservationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reservationCreate

> Reservation reservationCreate(reservationCreate, opts)

Create

Create reservation

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationCreate = new HyperoneClient.ReservationCreate(); // ReservationCreate | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.reservationCreate(reservationCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationCreate** | [**ReservationCreate**](ReservationCreate.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reservationDelete

> reservationDelete(reservationId)

Delete

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
apiInstance.reservationDelete(reservationId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reservationDeleteAccessrightsIdentity

> Reservation reservationDeleteAccessrightsIdentity(reservationId, identity)

/accessrights/:identity

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var identity = "identity_example"; // String | identity
apiInstance.reservationDeleteAccessrightsIdentity(reservationId, identity).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 
 **identity** | **String**| identity | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reservationDeleteTagKey

> {String: String} reservationDeleteTagKey(reservationId, key)

/tag/:key

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var key = "key_example"; // String | key
apiInstance.reservationDeleteTagKey(reservationId, key).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 
 **key** | **String**| key | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reservationGetServicesServiceId

> ReservationServices reservationGetServicesServiceId(reservationId, serviceId)

/services/:serviceId

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var serviceId = "serviceId_example"; // String | serviceId
apiInstance.reservationGetServicesServiceId(reservationId, serviceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 
 **serviceId** | **String**| serviceId | 

### Return type

[**ReservationServices**](ReservationServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reservationGetTag

> {String: String} reservationGetTag(reservationId)

/tag

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
apiInstance.reservationGetTag(reservationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reservationList

> [Reservation] reservationList(opts)

List

List reservation

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var opts = {
  'name': "name_example", // String | Filter by name
  'tag': {key: "null"} // {String: String} | Filter by tag
};
apiInstance.reservationList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filter by name | [optional] 
 **tag** | [**{String: String}**](String.md)| Filter by tag | [optional] 

### Return type

[**[Reservation]**](Reservation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reservationListAccessrights

> [String] reservationListAccessrights(reservationId)

/accessrights

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
apiInstance.reservationListAccessrights(reservationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reservationListQueue

> [Event] reservationListQueue(reservationId, opts)

/queue

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var opts = {
  'limit': 100, // Number | $limit
  'skip': 3.4 // Number | $skip
};
apiInstance.reservationListQueue(reservationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 
 **limit** | **Number**| $limit | [optional] [default to 100]
 **skip** | **Number**| $skip | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reservationListServices

> [ReservationServices] reservationListServices(reservationId)

/services

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
apiInstance.reservationListServices(reservationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 

### Return type

[**[ReservationServices]**](ReservationServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reservationPatchTag

> {String: String} reservationPatchTag(reservationId, requestBody)

/tag

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.reservationPatchTag(reservationId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reservationPostAccessrights

> Reservation reservationPostAccessrights(reservationId, reservationPostAccessrights)

/accessrights

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var reservationPostAccessrights = new HyperoneClient.ReservationPostAccessrights(); // ReservationPostAccessrights | 
apiInstance.reservationPostAccessrights(reservationId, reservationPostAccessrights).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 
 **reservationPostAccessrights** | [**ReservationPostAccessrights**](ReservationPostAccessrights.md)|  | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reservationPutTag

> {String: String} reservationPutTag(reservationId, requestBody)

/tag

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.reservationPutTag(reservationId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reservationShow

> Reservation reservationShow(reservationId)

Get

Returns a single reservation

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
apiInstance.reservationShow(reservationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reservationUpdate

> Reservation reservationUpdate(reservationId, reservationUpdate)

Update

Returns modified reservation

### Example

```javascript
var HyperoneClient = require('hyperone-client');
var defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperoneClient.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var reservationUpdate = new HyperoneClient.ReservationUpdate(); // ReservationUpdate | 
apiInstance.reservationUpdate(reservationId, reservationUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 
 **reservationUpdate** | [**ReservationUpdate**](ReservationUpdate.md)|  | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

