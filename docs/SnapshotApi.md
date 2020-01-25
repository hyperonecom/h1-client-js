# HyperoneClient.SnapshotApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**snapshotCreate**](SnapshotApi.md#snapshotCreate) | **POST** /snapshot | Create
[**snapshotDelete**](SnapshotApi.md#snapshotDelete) | **DELETE** /snapshot/{snapshotId} | Delete
[**snapshotDeleteAccessrightsIdentity**](SnapshotApi.md#snapshotDeleteAccessrightsIdentity) | **DELETE** /snapshot/{snapshotId}/accessrights/{identity} | /accessrights/:identity
[**snapshotDeleteTagKey**](SnapshotApi.md#snapshotDeleteTagKey) | **DELETE** /snapshot/{snapshotId}/tag/{key} | /tag/:key
[**snapshotGetServicesServiceId**](SnapshotApi.md#snapshotGetServicesServiceId) | **GET** /snapshot/{snapshotId}/services/{serviceId} | /services/:serviceId
[**snapshotGetTag**](SnapshotApi.md#snapshotGetTag) | **GET** /snapshot/{snapshotId}/tag | /tag
[**snapshotList**](SnapshotApi.md#snapshotList) | **GET** /snapshot | List
[**snapshotListAccessrights**](SnapshotApi.md#snapshotListAccessrights) | **GET** /snapshot/{snapshotId}/accessrights | /accessrights
[**snapshotListQueue**](SnapshotApi.md#snapshotListQueue) | **GET** /snapshot/{snapshotId}/queue | /queue
[**snapshotListServices**](SnapshotApi.md#snapshotListServices) | **GET** /snapshot/{snapshotId}/services | /services
[**snapshotPatchTag**](SnapshotApi.md#snapshotPatchTag) | **PATCH** /snapshot/{snapshotId}/tag | /tag
[**snapshotPostAccessrights**](SnapshotApi.md#snapshotPostAccessrights) | **POST** /snapshot/{snapshotId}/accessrights | /accessrights
[**snapshotPutTag**](SnapshotApi.md#snapshotPutTag) | **PUT** /snapshot/{snapshotId}/tag | /tag
[**snapshotShow**](SnapshotApi.md#snapshotShow) | **GET** /snapshot/{snapshotId} | Get
[**snapshotUpdate**](SnapshotApi.md#snapshotUpdate) | **PATCH** /snapshot/{snapshotId} | Update



## snapshotCreate

> Snapshot snapshotCreate(snapshotCreate, opts)

Create

Create snapshot

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let snapshotCreate = new HyperoneClient.SnapshotCreate(); // SnapshotCreate | 
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.snapshotCreate(snapshotCreate, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotCreate** | [**SnapshotCreate**](SnapshotCreate.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## snapshotDelete

> snapshotDelete(snapshotId)

Delete

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let snapshotId = "snapshotId_example"; // String | ID of snapshot
apiInstance.snapshotDelete(snapshotId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| ID of snapshot | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snapshotDeleteAccessrightsIdentity

> Snapshot snapshotDeleteAccessrightsIdentity(snapshotId, identity)

/accessrights/:identity

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let snapshotId = "snapshotId_example"; // String | ID of snapshot
let identity = "identity_example"; // String | identity
apiInstance.snapshotDeleteAccessrightsIdentity(snapshotId, identity).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| ID of snapshot | 
 **identity** | **String**| identity | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snapshotDeleteTagKey

> {String: String} snapshotDeleteTagKey(snapshotId, key)

/tag/:key

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let snapshotId = "snapshotId_example"; // String | ID of snapshot
let key = "key_example"; // String | key
apiInstance.snapshotDeleteTagKey(snapshotId, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| ID of snapshot | 
 **key** | **String**| key | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snapshotGetServicesServiceId

> SnapshotServices snapshotGetServicesServiceId(snapshotId, serviceId)

/services/:serviceId

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let snapshotId = "snapshotId_example"; // String | ID of snapshot
let serviceId = "serviceId_example"; // String | serviceId
apiInstance.snapshotGetServicesServiceId(snapshotId, serviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| ID of snapshot | 
 **serviceId** | **String**| serviceId | 

### Return type

[**SnapshotServices**](SnapshotServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snapshotGetTag

> {String: String} snapshotGetTag(snapshotId)

/tag

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let snapshotId = "snapshotId_example"; // String | ID of snapshot
apiInstance.snapshotGetTag(snapshotId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| ID of snapshot | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snapshotList

> [Snapshot] snapshotList(opts)

List

List snapshot

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let opts = {
  'name': "name_example", // String | Filter by name
  'vault': "vault_example", // String | Filter by vault
  'tag': {key: "null"} // {String: String} | Filter by tag
};
apiInstance.snapshotList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filter by name | [optional] 
 **vault** | **String**| Filter by vault | [optional] 
 **tag** | [**{String: String}**](String.md)| Filter by tag | [optional] 

### Return type

[**[Snapshot]**](Snapshot.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snapshotListAccessrights

> [String] snapshotListAccessrights(snapshotId)

/accessrights

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let snapshotId = "snapshotId_example"; // String | ID of snapshot
apiInstance.snapshotListAccessrights(snapshotId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| ID of snapshot | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snapshotListQueue

> [Event] snapshotListQueue(snapshotId, opts)

/queue

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let snapshotId = "snapshotId_example"; // String | ID of snapshot
let opts = {
  'limit': 3.4, // Number | $limit
  'skip': 3.4 // Number | $skip
};
apiInstance.snapshotListQueue(snapshotId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| ID of snapshot | 
 **limit** | **Number**| $limit | [optional] 
 **skip** | **Number**| $skip | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snapshotListServices

> [SnapshotServices] snapshotListServices(snapshotId)

/services

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let snapshotId = "snapshotId_example"; // String | ID of snapshot
apiInstance.snapshotListServices(snapshotId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| ID of snapshot | 

### Return type

[**[SnapshotServices]**](SnapshotServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snapshotPatchTag

> {String: String} snapshotPatchTag(snapshotId, requestBody)

/tag

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let snapshotId = "snapshotId_example"; // String | ID of snapshot
let requestBody = {key: "null"}; // {String: String} | 
apiInstance.snapshotPatchTag(snapshotId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| ID of snapshot | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## snapshotPostAccessrights

> Snapshot snapshotPostAccessrights(snapshotId, snapshotPostAccessrights)

/accessrights

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let snapshotId = "snapshotId_example"; // String | ID of snapshot
let snapshotPostAccessrights = new HyperoneClient.SnapshotPostAccessrights(); // SnapshotPostAccessrights | 
apiInstance.snapshotPostAccessrights(snapshotId, snapshotPostAccessrights).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| ID of snapshot | 
 **snapshotPostAccessrights** | [**SnapshotPostAccessrights**](SnapshotPostAccessrights.md)|  | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## snapshotPutTag

> {String: String} snapshotPutTag(snapshotId, requestBody)

/tag

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let snapshotId = "snapshotId_example"; // String | ID of snapshot
let requestBody = {key: "null"}; // {String: String} | 
apiInstance.snapshotPutTag(snapshotId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| ID of snapshot | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## snapshotShow

> Snapshot snapshotShow(snapshotId)

Get

Returns a single snapshot

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let snapshotId = "snapshotId_example"; // String | ID of snapshot
apiInstance.snapshotShow(snapshotId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| ID of snapshot | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snapshotUpdate

> Snapshot snapshotUpdate(snapshotId, snapshotUpdate)

Update

Returns modified snapshot

### Example

```javascript
import HyperoneClient from 'hyperone-client';
let defaultClient = HyperoneClient.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = "YOUR ACCESS TOKEN"
// Configure Bearer access token for authorization: Session
let Session = defaultClient.authentications['Session'];
Session.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new HyperoneClient.SnapshotApi();
let snapshotId = "snapshotId_example"; // String | ID of snapshot
let snapshotUpdate = new HyperoneClient.SnapshotUpdate(); // SnapshotUpdate | 
apiInstance.snapshotUpdate(snapshotId, snapshotUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| ID of snapshot | 
 **snapshotUpdate** | [**SnapshotUpdate**](SnapshotUpdate.md)|  | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

