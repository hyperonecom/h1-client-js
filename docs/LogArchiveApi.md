# HyperOneApi.LogArchiveApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logArchiveActionTransfer**](LogArchiveApi.md#logArchiveActionTransfer) | **POST** /logArchive/{logArchiveId}/actions/transfer | /actions/transfer
[**logArchiveCreate**](LogArchiveApi.md#logArchiveCreate) | **POST** /logArchive | Create
[**logArchiveDelete**](LogArchiveApi.md#logArchiveDelete) | **DELETE** /logArchive/{logArchiveId} | Delete
[**logArchiveDeleteAccessrightsIdentity**](LogArchiveApi.md#logArchiveDeleteAccessrightsIdentity) | **DELETE** /logArchive/{logArchiveId}/accessrights/{identity} | /accessrights/:identity
[**logArchiveDeleteCredentialpasswordId**](LogArchiveApi.md#logArchiveDeleteCredentialpasswordId) | **DELETE** /logArchive/{logArchiveId}/credential/password/{id} | /credential/password/:id
[**logArchiveDeleteTagKey**](LogArchiveApi.md#logArchiveDeleteTagKey) | **DELETE** /logArchive/{logArchiveId}/tag/{key} | /tag/:key
[**logArchiveGetCredentialpasswordId**](LogArchiveApi.md#logArchiveGetCredentialpasswordId) | **GET** /logArchive/{logArchiveId}/credential/password/{id} | /credential/password/:id
[**logArchiveGetServicesServiceId**](LogArchiveApi.md#logArchiveGetServicesServiceId) | **GET** /logArchive/{logArchiveId}/services/{serviceId} | /services/:serviceId
[**logArchiveGetTag**](LogArchiveApi.md#logArchiveGetTag) | **GET** /logArchive/{logArchiveId}/tag | /tag
[**logArchiveList**](LogArchiveApi.md#logArchiveList) | **GET** /logArchive | List
[**logArchiveListAccessrights**](LogArchiveApi.md#logArchiveListAccessrights) | **GET** /logArchive/{logArchiveId}/accessrights | /accessrights
[**logArchiveListCredentialpassword**](LogArchiveApi.md#logArchiveListCredentialpassword) | **GET** /logArchive/{logArchiveId}/credential/password | /credential/password
[**logArchiveListQueue**](LogArchiveApi.md#logArchiveListQueue) | **GET** /logArchive/{logArchiveId}/queue | /queue
[**logArchiveListServices**](LogArchiveApi.md#logArchiveListServices) | **GET** /logArchive/{logArchiveId}/services | /services
[**logArchivePatchCredentialpasswordId**](LogArchiveApi.md#logArchivePatchCredentialpasswordId) | **PATCH** /logArchive/{logArchiveId}/credential/password/{id} | /credential/password/:id
[**logArchivePatchTag**](LogArchiveApi.md#logArchivePatchTag) | **PATCH** /logArchive/{logArchiveId}/tag | /tag
[**logArchivePostAccessrights**](LogArchiveApi.md#logArchivePostAccessrights) | **POST** /logArchive/{logArchiveId}/accessrights | /accessrights
[**logArchivePostCredentialpassword**](LogArchiveApi.md#logArchivePostCredentialpassword) | **POST** /logArchive/{logArchiveId}/credential/password | /credential/password
[**logArchiveShow**](LogArchiveApi.md#logArchiveShow) | **GET** /logArchive/{logArchiveId} | Get
[**logArchiveUpdate**](LogArchiveApi.md#logArchiveUpdate) | **PATCH** /logArchive/{logArchiveId} | Update



## logArchiveActionTransfer

> LogArchive logArchiveActionTransfer(logArchiveId, logArchiveActionTransfer)

/actions/transfer

Action transfer

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
var logArchiveActionTransfer = new HyperOneApi.LogArchiveActionTransfer(); // LogArchiveActionTransfer | 
apiInstance.logArchiveActionTransfer(logArchiveId, logArchiveActionTransfer).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **logArchiveActionTransfer** | [**LogArchiveActionTransfer**](LogArchiveActionTransfer.md)|  | 

### Return type

[**LogArchive**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## logArchiveCreate

> LogArchive logArchiveCreate(logArchiveCreate)

Create

Create logArchive

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveCreate = new HyperOneApi.LogArchiveCreate(); // LogArchiveCreate | 
apiInstance.logArchiveCreate(logArchiveCreate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveCreate** | [**LogArchiveCreate**](LogArchiveCreate.md)|  | 

### Return type

[**LogArchive**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## logArchiveDelete

> logArchiveDelete(logArchiveId)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveDelete(logArchiveId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logArchiveDeleteAccessrightsIdentity

> LogArchive logArchiveDeleteAccessrightsIdentity(logArchiveId, identity)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
var identity = "identity_example"; // String | identity
apiInstance.logArchiveDeleteAccessrightsIdentity(logArchiveId, identity).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **identity** | **String**| identity | 

### Return type

[**LogArchive**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logArchiveDeleteCredentialpasswordId

> LogArchive logArchiveDeleteCredentialpasswordId(logArchiveId, id)

/credential/password/:id

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
var id = "id_example"; // String | id
apiInstance.logArchiveDeleteCredentialpasswordId(logArchiveId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **id** | **String**| id | 

### Return type

[**LogArchive**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logArchiveDeleteTagKey

> Object logArchiveDeleteTagKey(logArchiveId, key)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
var key = "key_example"; // String | key
apiInstance.logArchiveDeleteTagKey(logArchiveId, key).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **key** | **String**| key | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logArchiveGetCredentialpasswordId

> CredentialPassword logArchiveGetCredentialpasswordId(logArchiveId, id)

/credential/password/:id

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
var id = "id_example"; // String | id
apiInstance.logArchiveGetCredentialpasswordId(logArchiveId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **id** | **String**| id | 

### Return type

[**CredentialPassword**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logArchiveGetServicesServiceId

> LogArchiveServices logArchiveGetServicesServiceId(logArchiveId, serviceId)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
var serviceId = "serviceId_example"; // String | serviceId
apiInstance.logArchiveGetServicesServiceId(logArchiveId, serviceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **serviceId** | **String**| serviceId | 

### Return type

[**LogArchiveServices**](LogArchiveServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logArchiveGetTag

> Object logArchiveGetTag(logArchiveId)

/tag

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveGetTag(logArchiveId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logArchiveList

> [LogArchive] logArchiveList(opts)

List

List logArchive

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var opts = {
  'name': "name_example", // String | Filter by name
  'tag': {key: "null"} // {String: String} | Filter by tag
};
apiInstance.logArchiveList(opts).then(function(data) {
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

[**[LogArchive]**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logArchiveListAccessrights

> [String] logArchiveListAccessrights(logArchiveId)

/accessrights

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveListAccessrights(logArchiveId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logArchiveListCredentialpassword

> [CredentialPassword] logArchiveListCredentialpassword(logArchiveId)

/credential/password

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveListCredentialpassword(logArchiveId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

[**[CredentialPassword]**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logArchiveListQueue

> [Event] logArchiveListQueue(logArchiveId)

/queue

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveListQueue(logArchiveId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logArchiveListServices

> [LogArchiveServices] logArchiveListServices(logArchiveId)

/services

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveListServices(logArchiveId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

[**[LogArchiveServices]**](LogArchiveServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logArchivePatchCredentialpasswordId

> CredentialPassword logArchivePatchCredentialpasswordId(logArchiveId, id, logArchivePatchCredentialpasswordId)

/credential/password/:id

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
var id = "id_example"; // String | id
var logArchivePatchCredentialpasswordId = new HyperOneApi.LogArchivePatchCredentialpasswordId(); // LogArchivePatchCredentialpasswordId | 
apiInstance.logArchivePatchCredentialpasswordId(logArchiveId, id, logArchivePatchCredentialpasswordId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **id** | **String**| id | 
 **logArchivePatchCredentialpasswordId** | [**LogArchivePatchCredentialpasswordId**](LogArchivePatchCredentialpasswordId.md)|  | 

### Return type

[**CredentialPassword**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## logArchivePatchTag

> Object logArchivePatchTag(logArchiveId, requestBody)

/tag

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.logArchivePatchTag(logArchiveId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## logArchivePostAccessrights

> LogArchive logArchivePostAccessrights(logArchiveId, logArchivePostAccessrights)

/accessrights

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
var logArchivePostAccessrights = new HyperOneApi.LogArchivePostAccessrights(); // LogArchivePostAccessrights | 
apiInstance.logArchivePostAccessrights(logArchiveId, logArchivePostAccessrights).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **logArchivePostAccessrights** | [**LogArchivePostAccessrights**](LogArchivePostAccessrights.md)|  | 

### Return type

[**LogArchive**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## logArchivePostCredentialpassword

> CredentialPassword logArchivePostCredentialpassword(logArchiveId, logArchivePostCredentialpassword)

/credential/password

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
var logArchivePostCredentialpassword = new HyperOneApi.LogArchivePostCredentialpassword(); // LogArchivePostCredentialpassword | 
apiInstance.logArchivePostCredentialpassword(logArchiveId, logArchivePostCredentialpassword).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **logArchivePostCredentialpassword** | [**LogArchivePostCredentialpassword**](LogArchivePostCredentialpassword.md)|  | 

### Return type

[**CredentialPassword**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## logArchiveShow

> LogArchive logArchiveShow(logArchiveId)

Get

Returns a single logArchive

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveShow(logArchiveId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

[**LogArchive**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logArchiveUpdate

> LogArchive logArchiveUpdate(logArchiveId, logArchiveUpdate)

Update

Returns modified logArchive

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.LogArchiveApi();
var logArchiveId = "logArchiveId_example"; // String | ID of logArchive
var logArchiveUpdate = new HyperOneApi.LogArchiveUpdate(); // LogArchiveUpdate | 
apiInstance.logArchiveUpdate(logArchiveId, logArchiveUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **logArchiveUpdate** | [**LogArchiveUpdate**](LogArchiveUpdate.md)|  | 

### Return type

[**LogArchive**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

