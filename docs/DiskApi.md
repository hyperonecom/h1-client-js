# HyperoneClient.DiskApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**diskActionClone**](DiskApi.md#diskActionClone) | **POST** /disk/{diskId}/actions/clone | /actions/clone
[**diskActionResize**](DiskApi.md#diskActionResize) | **POST** /disk/{diskId}/actions/resize | /actions/resize
[**diskActionTransfer**](DiskApi.md#diskActionTransfer) | **POST** /disk/{diskId}/actions/transfer | /actions/transfer
[**diskCreate**](DiskApi.md#diskCreate) | **POST** /disk | Create
[**diskDelete**](DiskApi.md#diskDelete) | **DELETE** /disk/{diskId} | Delete
[**diskDeleteAccessrightsIdentity**](DiskApi.md#diskDeleteAccessrightsIdentity) | **DELETE** /disk/{diskId}/accessrights/{identity} | /accessrights/:identity
[**diskDeleteTagKey**](DiskApi.md#diskDeleteTagKey) | **DELETE** /disk/{diskId}/tag/{key} | /tag/:key
[**diskGetDownload**](DiskApi.md#diskGetDownload) | **GET** /disk/{diskId}/download | /download
[**diskGetServicesServiceId**](DiskApi.md#diskGetServicesServiceId) | **GET** /disk/{diskId}/services/{serviceId} | /services/:serviceId
[**diskGetTag**](DiskApi.md#diskGetTag) | **GET** /disk/{diskId}/tag | /tag
[**diskList**](DiskApi.md#diskList) | **GET** /disk | List
[**diskListAccessrights**](DiskApi.md#diskListAccessrights) | **GET** /disk/{diskId}/accessrights | /accessrights
[**diskListQueue**](DiskApi.md#diskListQueue) | **GET** /disk/{diskId}/queue | /queue
[**diskListServices**](DiskApi.md#diskListServices) | **GET** /disk/{diskId}/services | /services
[**diskPatchTag**](DiskApi.md#diskPatchTag) | **PATCH** /disk/{diskId}/tag | /tag
[**diskPostAccessrights**](DiskApi.md#diskPostAccessrights) | **POST** /disk/{diskId}/accessrights | /accessrights
[**diskPutTag**](DiskApi.md#diskPutTag) | **PUT** /disk/{diskId}/tag | /tag
[**diskShow**](DiskApi.md#diskShow) | **GET** /disk/{diskId} | Get
[**diskUpdate**](DiskApi.md#diskUpdate) | **PATCH** /disk/{diskId} | Update



## diskActionClone

> Disk diskActionClone(diskId, diskActionClone, opts)

/actions/clone

Action clone

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
var diskActionClone = new HyperoneClient.DiskActionClone(); // DiskActionClone | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.diskActionClone(diskId, diskActionClone, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 
 **diskActionClone** | [**DiskActionClone**](DiskActionClone.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Disk**](Disk.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## diskActionResize

> Disk diskActionResize(diskId, diskActionResize, opts)

/actions/resize

Action resize

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
var diskActionResize = new HyperoneClient.DiskActionResize(); // DiskActionResize | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.diskActionResize(diskId, diskActionResize, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 
 **diskActionResize** | [**DiskActionResize**](DiskActionResize.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Disk**](Disk.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## diskActionTransfer

> Disk diskActionTransfer(diskId, diskActionTransfer, opts)

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
var diskActionTransfer = new HyperoneClient.DiskActionTransfer(); // DiskActionTransfer | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.diskActionTransfer(diskId, diskActionTransfer, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 
 **diskActionTransfer** | [**DiskActionTransfer**](DiskActionTransfer.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Disk**](Disk.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## diskCreate

> Disk diskCreate(diskCreate, opts)

Create

Create disk

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

var apiInstance = new HyperoneClient.DiskApi();
var diskCreate = new HyperoneClient.DiskCreate(); // DiskCreate | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.diskCreate(diskCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskCreate** | [**DiskCreate**](DiskCreate.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Disk**](Disk.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## diskDelete

> diskDelete(diskId)

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
apiInstance.diskDelete(diskId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## diskDeleteAccessrightsIdentity

> Disk diskDeleteAccessrightsIdentity(diskId, identity)

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
var identity = "identity_example"; // String | identity
apiInstance.diskDeleteAccessrightsIdentity(diskId, identity).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 
 **identity** | **String**| identity | 

### Return type

[**Disk**](Disk.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## diskDeleteTagKey

> {String: String} diskDeleteTagKey(diskId, key)

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
var key = "key_example"; // String | key
apiInstance.diskDeleteTagKey(diskId, key).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 
 **key** | **String**| key | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## diskGetDownload

> diskGetDownload(diskId)

/download

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
apiInstance.diskGetDownload(diskId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## diskGetServicesServiceId

> DiskServices diskGetServicesServiceId(diskId, serviceId)

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
var serviceId = "serviceId_example"; // String | serviceId
apiInstance.diskGetServicesServiceId(diskId, serviceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 
 **serviceId** | **String**| serviceId | 

### Return type

[**DiskServices**](DiskServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## diskGetTag

> {String: String} diskGetTag(diskId)

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
apiInstance.diskGetTag(diskId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## diskList

> [Disk] diskList(opts)

List

List disk

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

var apiInstance = new HyperoneClient.DiskApi();
var opts = {
  'name': "name_example", // String | Filter by name
  'tag': {key: "null"} // {String: String} | Filter by tag
};
apiInstance.diskList(opts).then(function(data) {
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

[**[Disk]**](Disk.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## diskListAccessrights

> [String] diskListAccessrights(diskId)

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
apiInstance.diskListAccessrights(diskId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## diskListQueue

> [Event] diskListQueue(diskId, opts)

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
var opts = {
  'limit': 100, // Number | $limit
  'skip': 3.4 // Number | $skip
};
apiInstance.diskListQueue(diskId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 
 **limit** | **Number**| $limit | [optional] [default to 100]
 **skip** | **Number**| $skip | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## diskListServices

> [DiskServices] diskListServices(diskId)

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
apiInstance.diskListServices(diskId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 

### Return type

[**[DiskServices]**](DiskServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## diskPatchTag

> {String: String} diskPatchTag(diskId, requestBody)

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.diskPatchTag(diskId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## diskPostAccessrights

> Disk diskPostAccessrights(diskId, diskPostAccessrights)

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
var diskPostAccessrights = new HyperoneClient.DiskPostAccessrights(); // DiskPostAccessrights | 
apiInstance.diskPostAccessrights(diskId, diskPostAccessrights).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 
 **diskPostAccessrights** | [**DiskPostAccessrights**](DiskPostAccessrights.md)|  | 

### Return type

[**Disk**](Disk.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## diskPutTag

> {String: String} diskPutTag(diskId, requestBody)

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.diskPutTag(diskId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## diskShow

> Disk diskShow(diskId)

Get

Returns a single disk

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
apiInstance.diskShow(diskId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 

### Return type

[**Disk**](Disk.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## diskUpdate

> Disk diskUpdate(diskId, diskUpdate)

Update

Returns modified disk

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

var apiInstance = new HyperoneClient.DiskApi();
var diskId = "diskId_example"; // String | ID of disk
var diskUpdate = new HyperoneClient.DiskUpdate(); // DiskUpdate | 
apiInstance.diskUpdate(diskId, diskUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **diskId** | **String**| ID of disk | 
 **diskUpdate** | [**DiskUpdate**](DiskUpdate.md)|  | 

### Return type

[**Disk**](Disk.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

