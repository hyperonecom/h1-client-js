# HyperoneClient.DatabaseApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**databaseActionStart**](DatabaseApi.md#databaseActionStart) | **POST** /database/{databaseId}/actions/start | /actions/start
[**databaseActionStop**](DatabaseApi.md#databaseActionStop) | **POST** /database/{databaseId}/actions/stop | /actions/stop
[**databaseActionTransfer**](DatabaseApi.md#databaseActionTransfer) | **POST** /database/{databaseId}/actions/transfer | /actions/transfer
[**databaseCreate**](DatabaseApi.md#databaseCreate) | **POST** /database | Create
[**databaseDelete**](DatabaseApi.md#databaseDelete) | **DELETE** /database/{databaseId} | Delete
[**databaseDeleteAccessrightsIdentity**](DatabaseApi.md#databaseDeleteAccessrightsIdentity) | **DELETE** /database/{databaseId}/accessrights/{identity} | /accessrights/:identity
[**databaseDeleteCredentialId**](DatabaseApi.md#databaseDeleteCredentialId) | **DELETE** /database/{databaseId}/credential/{id} | /credential/:id
[**databaseDeleteCredentialpasswordId**](DatabaseApi.md#databaseDeleteCredentialpasswordId) | **DELETE** /database/{databaseId}/credential/password/{id} | /credential/password/:id
[**databaseDeleteTagKey**](DatabaseApi.md#databaseDeleteTagKey) | **DELETE** /database/{databaseId}/tag/{key} | /tag/:key
[**databaseGetCredentialId**](DatabaseApi.md#databaseGetCredentialId) | **GET** /database/{databaseId}/credential/{id} | /credential/:id
[**databaseGetCredentialpasswordId**](DatabaseApi.md#databaseGetCredentialpasswordId) | **GET** /database/{databaseId}/credential/password/{id} | /credential/password/:id
[**databaseGetServicesServiceId**](DatabaseApi.md#databaseGetServicesServiceId) | **GET** /database/{databaseId}/services/{serviceId} | /services/:serviceId
[**databaseGetTag**](DatabaseApi.md#databaseGetTag) | **GET** /database/{databaseId}/tag | /tag
[**databaseList**](DatabaseApi.md#databaseList) | **GET** /database | List
[**databaseListAccessrights**](DatabaseApi.md#databaseListAccessrights) | **GET** /database/{databaseId}/accessrights | /accessrights
[**databaseListCredential**](DatabaseApi.md#databaseListCredential) | **GET** /database/{databaseId}/credential | /credential
[**databaseListCredentialpassword**](DatabaseApi.md#databaseListCredentialpassword) | **GET** /database/{databaseId}/credential/password | /credential/password
[**databaseListQueue**](DatabaseApi.md#databaseListQueue) | **GET** /database/{databaseId}/queue | /queue
[**databaseListServices**](DatabaseApi.md#databaseListServices) | **GET** /database/{databaseId}/services | /services
[**databasePatchCredentialId**](DatabaseApi.md#databasePatchCredentialId) | **PATCH** /database/{databaseId}/credential/{id} | /credential/:id
[**databasePatchCredentialpasswordId**](DatabaseApi.md#databasePatchCredentialpasswordId) | **PATCH** /database/{databaseId}/credential/password/{id} | /credential/password/:id
[**databasePatchTag**](DatabaseApi.md#databasePatchTag) | **PATCH** /database/{databaseId}/tag | /tag
[**databasePostAccessrights**](DatabaseApi.md#databasePostAccessrights) | **POST** /database/{databaseId}/accessrights | /accessrights
[**databasePostCredential**](DatabaseApi.md#databasePostCredential) | **POST** /database/{databaseId}/credential | /credential
[**databasePostCredentialpassword**](DatabaseApi.md#databasePostCredentialpassword) | **POST** /database/{databaseId}/credential/password | /credential/password
[**databasePutTag**](DatabaseApi.md#databasePutTag) | **PUT** /database/{databaseId}/tag | /tag
[**databaseShow**](DatabaseApi.md#databaseShow) | **GET** /database/{databaseId} | Get
[**databaseUpdate**](DatabaseApi.md#databaseUpdate) | **PATCH** /database/{databaseId} | Update



## databaseActionStart

> Database databaseActionStart(databaseId, opts)

/actions/start

Action start

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.databaseActionStart(databaseId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Database**](Database.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseActionStop

> Database databaseActionStop(databaseId, opts)

/actions/stop

Action stop

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.databaseActionStop(databaseId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Database**](Database.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseActionTransfer

> Database databaseActionTransfer(databaseId, databaseActionTransfer, opts)

/actions/transfer

Action transfer

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var databaseActionTransfer = new HyperoneClient.DatabaseActionTransfer(); // DatabaseActionTransfer | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.databaseActionTransfer(databaseId, databaseActionTransfer, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **databaseActionTransfer** | [**DatabaseActionTransfer**](DatabaseActionTransfer.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Database**](Database.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## databaseCreate

> Database databaseCreate(databaseCreate, opts)

Create

Create database

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseCreate = new HyperoneClient.DatabaseCreate(); // DatabaseCreate | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.databaseCreate(databaseCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseCreate** | [**DatabaseCreate**](DatabaseCreate.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Database**](Database.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## databaseDelete

> databaseDelete(databaseId)

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
apiInstance.databaseDelete(databaseId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseDeleteAccessrightsIdentity

> Database databaseDeleteAccessrightsIdentity(databaseId, identity)

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var identity = "identity_example"; // String | identity
apiInstance.databaseDeleteAccessrightsIdentity(databaseId, identity).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **identity** | **String**| identity | 

### Return type

[**Database**](Database.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseDeleteCredentialId

> Database databaseDeleteCredentialId(databaseId, id)

/credential/:id

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var id = "id_example"; // String | id
apiInstance.databaseDeleteCredentialId(databaseId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **id** | **String**| id | 

### Return type

[**Database**](Database.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseDeleteCredentialpasswordId

> Database databaseDeleteCredentialpasswordId(databaseId, id)

/credential/password/:id

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var id = "id_example"; // String | id
apiInstance.databaseDeleteCredentialpasswordId(databaseId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **id** | **String**| id | 

### Return type

[**Database**](Database.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseDeleteTagKey

> {String: String} databaseDeleteTagKey(databaseId, key)

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var key = "key_example"; // String | key
apiInstance.databaseDeleteTagKey(databaseId, key).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **key** | **String**| key | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseGetCredentialId

> Credential databaseGetCredentialId(databaseId, id)

/credential/:id

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var id = "id_example"; // String | id
apiInstance.databaseGetCredentialId(databaseId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **id** | **String**| id | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseGetCredentialpasswordId

> Credential databaseGetCredentialpasswordId(databaseId, id)

/credential/password/:id

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var id = "id_example"; // String | id
apiInstance.databaseGetCredentialpasswordId(databaseId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **id** | **String**| id | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseGetServicesServiceId

> DatabaseServices databaseGetServicesServiceId(databaseId, serviceId)

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var serviceId = "serviceId_example"; // String | serviceId
apiInstance.databaseGetServicesServiceId(databaseId, serviceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **serviceId** | **String**| serviceId | 

### Return type

[**DatabaseServices**](DatabaseServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseGetTag

> {String: String} databaseGetTag(databaseId)

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
apiInstance.databaseGetTag(databaseId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseList

> [Database] databaseList(opts)

List

List database

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

var apiInstance = new HyperoneClient.DatabaseApi();
var opts = {
  'name': "name_example", // String | Filter by name
  'tag': {key: "null"} // {String: String} | Filter by tag
};
apiInstance.databaseList(opts).then(function(data) {
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

[**[Database]**](Database.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseListAccessrights

> [String] databaseListAccessrights(databaseId)

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
apiInstance.databaseListAccessrights(databaseId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseListCredential

> [Credential] databaseListCredential(databaseId)

/credential

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
apiInstance.databaseListCredential(databaseId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 

### Return type

[**[Credential]**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseListCredentialpassword

> [Credential] databaseListCredentialpassword(databaseId)

/credential/password

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
apiInstance.databaseListCredentialpassword(databaseId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 

### Return type

[**[Credential]**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseListQueue

> [Event] databaseListQueue(databaseId, opts)

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var opts = {
  'limit': 100, // Number | $limit
  'skip': 3.4 // Number | $skip
};
apiInstance.databaseListQueue(databaseId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **limit** | **Number**| $limit | [optional] [default to 100]
 **skip** | **Number**| $skip | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseListServices

> [DatabaseServices] databaseListServices(databaseId)

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
apiInstance.databaseListServices(databaseId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 

### Return type

[**[DatabaseServices]**](DatabaseServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databasePatchCredentialId

> Credential databasePatchCredentialId(databaseId, id, databasePatchCredentialId)

/credential/:id

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var id = "id_example"; // String | id
var databasePatchCredentialId = new HyperoneClient.DatabasePatchCredentialId(); // DatabasePatchCredentialId | 
apiInstance.databasePatchCredentialId(databaseId, id, databasePatchCredentialId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **id** | **String**| id | 
 **databasePatchCredentialId** | [**DatabasePatchCredentialId**](DatabasePatchCredentialId.md)|  | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## databasePatchCredentialpasswordId

> Credential databasePatchCredentialpasswordId(databaseId, id, databasePatchCredentialpasswordId)

/credential/password/:id

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var id = "id_example"; // String | id
var databasePatchCredentialpasswordId = new HyperoneClient.DatabasePatchCredentialpasswordId(); // DatabasePatchCredentialpasswordId | 
apiInstance.databasePatchCredentialpasswordId(databaseId, id, databasePatchCredentialpasswordId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **id** | **String**| id | 
 **databasePatchCredentialpasswordId** | [**DatabasePatchCredentialpasswordId**](DatabasePatchCredentialpasswordId.md)|  | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## databasePatchTag

> {String: String} databasePatchTag(databaseId, requestBody)

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.databasePatchTag(databaseId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## databasePostAccessrights

> Database databasePostAccessrights(databaseId, databasePostAccessrights)

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var databasePostAccessrights = new HyperoneClient.DatabasePostAccessrights(); // DatabasePostAccessrights | 
apiInstance.databasePostAccessrights(databaseId, databasePostAccessrights).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **databasePostAccessrights** | [**DatabasePostAccessrights**](DatabasePostAccessrights.md)|  | 

### Return type

[**Database**](Database.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## databasePostCredential

> Credential databasePostCredential(databaseId, databasePostCredential)

/credential

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var databasePostCredential = new HyperoneClient.DatabasePostCredential(); // DatabasePostCredential | 
apiInstance.databasePostCredential(databaseId, databasePostCredential).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **databasePostCredential** | [**DatabasePostCredential**](DatabasePostCredential.md)|  | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## databasePostCredentialpassword

> Credential databasePostCredentialpassword(databaseId, databasePostCredentialpassword)

/credential/password

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var databasePostCredentialpassword = new HyperoneClient.DatabasePostCredentialpassword(); // DatabasePostCredentialpassword | 
apiInstance.databasePostCredentialpassword(databaseId, databasePostCredentialpassword).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **databasePostCredentialpassword** | [**DatabasePostCredentialpassword**](DatabasePostCredentialpassword.md)|  | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## databasePutTag

> {String: String} databasePutTag(databaseId, requestBody)

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.databasePutTag(databaseId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## databaseShow

> Database databaseShow(databaseId)

Get

Returns a single database

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
apiInstance.databaseShow(databaseId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 

### Return type

[**Database**](Database.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## databaseUpdate

> Database databaseUpdate(databaseId, databaseUpdate)

Update

Returns modified database

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

var apiInstance = new HyperoneClient.DatabaseApi();
var databaseId = "databaseId_example"; // String | ID of database
var databaseUpdate = new HyperoneClient.DatabaseUpdate(); // DatabaseUpdate | 
apiInstance.databaseUpdate(databaseId, databaseUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | **String**| ID of database | 
 **databaseUpdate** | [**DatabaseUpdate**](DatabaseUpdate.md)|  | 

### Return type

[**Database**](Database.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

