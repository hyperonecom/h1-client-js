# HyperOneApi.ReservationApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionReservationAssign**](ReservationApi.md#actionReservationAssign) | **POST** /reservation/{reservationId}/actions/assign | /actions/assign
[**actionReservationExtend**](ReservationApi.md#actionReservationExtend) | **POST** /reservation/{reservationId}/actions/extend | /actions/extend
[**actionReservationUnassign**](ReservationApi.md#actionReservationUnassign) | **POST** /reservation/{reservationId}/actions/unassign | /actions/unassign
[**createReservation**](ReservationApi.md#createReservation) | **POST** /reservation | Create
[**deleteReservation**](ReservationApi.md#deleteReservation) | **DELETE** /reservation/{reservationId} | Delete
[**listReservation**](ReservationApi.md#listReservation) | **GET** /reservation | List
[**operationReservationDeleteaccessrightsIdentity**](ReservationApi.md#operationReservationDeleteaccessrightsIdentity) | **DELETE** /reservation/{reservationId}/accessrights/{identity} | /accessrights/:identity
[**operationReservationDeletetagKey**](ReservationApi.md#operationReservationDeletetagKey) | **DELETE** /reservation/{reservationId}/tag/{key} | /tag/:key
[**operationReservationGetservicesServiceId**](ReservationApi.md#operationReservationGetservicesServiceId) | **GET** /reservation/{reservationId}/services/{serviceId} | /services/:serviceId
[**operationReservationGettag**](ReservationApi.md#operationReservationGettag) | **GET** /reservation/{reservationId}/tag/ | /tag/
[**operationReservationListaccessrights**](ReservationApi.md#operationReservationListaccessrights) | **GET** /reservation/{reservationId}/accessrights/ | /accessrights/
[**operationReservationListqueue**](ReservationApi.md#operationReservationListqueue) | **GET** /reservation/{reservationId}/queue/ | /queue/
[**operationReservationListservices**](ReservationApi.md#operationReservationListservices) | **GET** /reservation/{reservationId}/services/ | /services/
[**operationReservationPatchtag**](ReservationApi.md#operationReservationPatchtag) | **PATCH** /reservation/{reservationId}/tag/ | /tag/
[**operationReservationPostaccessrights**](ReservationApi.md#operationReservationPostaccessrights) | **POST** /reservation/{reservationId}/accessrights/ | /accessrights/
[**showReservation**](ReservationApi.md#showReservation) | **GET** /reservation/{reservationId} | Get
[**updateReservation**](ReservationApi.md#updateReservation) | **PATCH** /reservation/{reservationId} | Update


<a name="actionReservationAssign"></a>
# **actionReservationAssign**
> Reservation actionReservationAssign(reservationId)

/actions/assign

Action assign

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
apiInstance.actionReservationAssign(reservationId).then(function(data) {
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

<a name="actionReservationExtend"></a>
# **actionReservationExtend**
> Reservation actionReservationExtend(reservationId)

/actions/extend

Action extend

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
apiInstance.actionReservationExtend(reservationId).then(function(data) {
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

<a name="actionReservationUnassign"></a>
# **actionReservationUnassign**
> Reservation actionReservationUnassign(reservationId)

/actions/unassign

Action unassign

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
apiInstance.actionReservationUnassign(reservationId).then(function(data) {
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

<a name="createReservation"></a>
# **createReservation**
> Reservation createReservation(opts)

Create

Create reservation

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var opts = {
  'inlineObject57': new HyperOneApi.InlineObject57() // InlineObject57 | 
};
apiInstance.createReservation(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject57** | [**InlineObject57**](InlineObject57.md)|  | [optional] 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteReservation"></a>
# **deleteReservation**
> deleteReservation(reservationId)

Delete

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
apiInstance.deleteReservation(reservationId).then(function() {
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
 - **Accept**: Not defined

<a name="listReservation"></a>
# **listReservation**
> [Reservation] listReservation(opts)

List

List reservation

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var opts = {
  'name': "name_example" // String | Filter by name
};
apiInstance.listReservation(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filter by name | [optional] 

### Return type

[**[Reservation]**](Reservation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="operationReservationDeleteaccessrightsIdentity"></a>
# **operationReservationDeleteaccessrightsIdentity**
> Reservation operationReservationDeleteaccessrightsIdentity(reservationId, identity)

/accessrights/:identity

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var identity = "identity_example"; // String | identity
apiInstance.operationReservationDeleteaccessrightsIdentity(reservationId, identity).then(function(data) {
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

<a name="operationReservationDeletetagKey"></a>
# **operationReservationDeletetagKey**
> {String: String} operationReservationDeletetagKey(reservationId, key)

/tag/:key

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var key = "key_example"; // String | key
apiInstance.operationReservationDeletetagKey(reservationId, key).then(function(data) {
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

<a name="operationReservationGetservicesServiceId"></a>
# **operationReservationGetservicesServiceId**
> ReservationServices operationReservationGetservicesServiceId(reservationId, serviceId)

/services/:serviceId

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var serviceId = "serviceId_example"; // String | serviceId
apiInstance.operationReservationGetservicesServiceId(reservationId, serviceId).then(function(data) {
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

<a name="operationReservationGettag"></a>
# **operationReservationGettag**
> {String: String} operationReservationGettag(reservationId)

/tag/

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
apiInstance.operationReservationGettag(reservationId).then(function(data) {
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

<a name="operationReservationListaccessrights"></a>
# **operationReservationListaccessrights**
> [String] operationReservationListaccessrights(reservationId)

/accessrights/

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
apiInstance.operationReservationListaccessrights(reservationId).then(function(data) {
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

<a name="operationReservationListqueue"></a>
# **operationReservationListqueue**
> [Event] operationReservationListqueue(reservationId)

/queue/

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
apiInstance.operationReservationListqueue(reservationId).then(function(data) {
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

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="operationReservationListservices"></a>
# **operationReservationListservices**
> [ReservationServices] operationReservationListservices(reservationId)

/services/

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
apiInstance.operationReservationListservices(reservationId).then(function(data) {
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

<a name="operationReservationPatchtag"></a>
# **operationReservationPatchtag**
> {String: String} operationReservationPatchtag(reservationId, requestBody)

/tag/

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.operationReservationPatchtag(reservationId, requestBody).then(function(data) {
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

<a name="operationReservationPostaccessrights"></a>
# **operationReservationPostaccessrights**
> String operationReservationPostaccessrights(reservationId, opts)

/accessrights/

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var opts = {
  'inlineObject59': new HyperOneApi.InlineObject59() // InlineObject59 | 
};
apiInstance.operationReservationPostaccessrights(reservationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 
 **inlineObject59** | [**InlineObject59**](InlineObject59.md)|  | [optional] 

### Return type

**String**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="showReservation"></a>
# **showReservation**
> Reservation showReservation(reservationId)

Get

Returns a single reservation

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
apiInstance.showReservation(reservationId).then(function(data) {
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

<a name="updateReservation"></a>
# **updateReservation**
> Reservation updateReservation(reservationId, opts)

Update

Returns modified reservation

### Example
```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
var Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
var Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

var apiInstance = new HyperOneApi.ReservationApi();
var reservationId = "reservationId_example"; // String | ID of reservation
var opts = {
  'inlineObject58': new HyperOneApi.InlineObject58() // InlineObject58 | 
};
apiInstance.updateReservation(reservationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reservationId** | **String**| ID of reservation | 
 **inlineObject58** | [**InlineObject58**](InlineObject58.md)|  | [optional] 

### Return type

[**Reservation**](Reservation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

