# HyperoneClient.NetgwApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**netgwActionAttach**](NetgwApi.md#netgwActionAttach) | **POST** /netgw/{netgwId}/actions/attach | /actions/attach
[**netgwActionDetach**](NetgwApi.md#netgwActionDetach) | **POST** /netgw/{netgwId}/actions/detach | /actions/detach
[**netgwCreate**](NetgwApi.md#netgwCreate) | **POST** /netgw | Create
[**netgwDelete**](NetgwApi.md#netgwDelete) | **DELETE** /netgw/{netgwId} | Delete
[**netgwDeleteAccessrightsIdentity**](NetgwApi.md#netgwDeleteAccessrightsIdentity) | **DELETE** /netgw/{netgwId}/accessrights/{identity} | /accessrights/:identity
[**netgwDeleteTagKey**](NetgwApi.md#netgwDeleteTagKey) | **DELETE** /netgw/{netgwId}/tag/{key} | /tag/:key
[**netgwGetServicesServiceId**](NetgwApi.md#netgwGetServicesServiceId) | **GET** /netgw/{netgwId}/services/{serviceId} | /services/:serviceId
[**netgwGetTag**](NetgwApi.md#netgwGetTag) | **GET** /netgw/{netgwId}/tag | /tag
[**netgwList**](NetgwApi.md#netgwList) | **GET** /netgw | List
[**netgwListAccessrights**](NetgwApi.md#netgwListAccessrights) | **GET** /netgw/{netgwId}/accessrights | /accessrights
[**netgwListQueue**](NetgwApi.md#netgwListQueue) | **GET** /netgw/{netgwId}/queue | /queue
[**netgwListServices**](NetgwApi.md#netgwListServices) | **GET** /netgw/{netgwId}/services | /services
[**netgwPatchTag**](NetgwApi.md#netgwPatchTag) | **PATCH** /netgw/{netgwId}/tag | /tag
[**netgwPostAccessrights**](NetgwApi.md#netgwPostAccessrights) | **POST** /netgw/{netgwId}/accessrights | /accessrights
[**netgwPutTag**](NetgwApi.md#netgwPutTag) | **PUT** /netgw/{netgwId}/tag | /tag
[**netgwShow**](NetgwApi.md#netgwShow) | **GET** /netgw/{netgwId} | Get
[**netgwUpdate**](NetgwApi.md#netgwUpdate) | **PATCH** /netgw/{netgwId} | Update



## netgwActionAttach

> Netgw netgwActionAttach(netgwId, netgwActionAttach, opts)

/actions/attach

Action attach

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
let netgwActionAttach = new HyperoneClient.NetgwActionAttach(); // NetgwActionAttach | 
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.netgwActionAttach(netgwId, netgwActionAttach, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 
 **netgwActionAttach** | [**NetgwActionAttach**](NetgwActionAttach.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Netgw**](Netgw.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## netgwActionDetach

> Netgw netgwActionDetach(netgwId, opts)

/actions/detach

Action detach

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.netgwActionDetach(netgwId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Netgw**](Netgw.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## netgwCreate

> Netgw netgwCreate(netgwCreate, opts)

Create

Create netgw

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwCreate = new HyperoneClient.NetgwCreate(); // NetgwCreate | 
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.netgwCreate(netgwCreate, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwCreate** | [**NetgwCreate**](NetgwCreate.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Netgw**](Netgw.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## netgwDelete

> netgwDelete(netgwId)

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
apiInstance.netgwDelete(netgwId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## netgwDeleteAccessrightsIdentity

> Netgw netgwDeleteAccessrightsIdentity(netgwId, identity)

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
let identity = "identity_example"; // String | identity
apiInstance.netgwDeleteAccessrightsIdentity(netgwId, identity).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 
 **identity** | **String**| identity | 

### Return type

[**Netgw**](Netgw.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## netgwDeleteTagKey

> {String: String} netgwDeleteTagKey(netgwId, key)

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
let key = "key_example"; // String | key
apiInstance.netgwDeleteTagKey(netgwId, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 
 **key** | **String**| key | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## netgwGetServicesServiceId

> NetgwServices netgwGetServicesServiceId(netgwId, serviceId)

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
let serviceId = "serviceId_example"; // String | serviceId
apiInstance.netgwGetServicesServiceId(netgwId, serviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 
 **serviceId** | **String**| serviceId | 

### Return type

[**NetgwServices**](NetgwServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## netgwGetTag

> {String: String} netgwGetTag(netgwId)

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
apiInstance.netgwGetTag(netgwId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## netgwList

> [Netgw] netgwList(opts)

List

List netgw

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

let apiInstance = new HyperoneClient.NetgwApi();
let opts = {
  'name': "name_example", // String | Filter by name
  'tag': {key: "null"} // {String: String} | Filter by tag
};
apiInstance.netgwList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filter by name | [optional] 
 **tag** | [**{String: String}**](String.md)| Filter by tag | [optional] 

### Return type

[**[Netgw]**](Netgw.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## netgwListAccessrights

> [String] netgwListAccessrights(netgwId)

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
apiInstance.netgwListAccessrights(netgwId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## netgwListQueue

> [Event] netgwListQueue(netgwId, opts)

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
let opts = {
  'limit': 3.4, // Number | $limit
  'skip': 3.4 // Number | $skip
};
apiInstance.netgwListQueue(netgwId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 
 **limit** | **Number**| $limit | [optional] 
 **skip** | **Number**| $skip | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## netgwListServices

> [NetgwServices] netgwListServices(netgwId)

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
apiInstance.netgwListServices(netgwId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 

### Return type

[**[NetgwServices]**](NetgwServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## netgwPatchTag

> {String: String} netgwPatchTag(netgwId, requestBody)

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
let requestBody = {key: "null"}; // {String: String} | 
apiInstance.netgwPatchTag(netgwId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## netgwPostAccessrights

> Netgw netgwPostAccessrights(netgwId, netgwPostAccessrights)

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
let netgwPostAccessrights = new HyperoneClient.NetgwPostAccessrights(); // NetgwPostAccessrights | 
apiInstance.netgwPostAccessrights(netgwId, netgwPostAccessrights).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 
 **netgwPostAccessrights** | [**NetgwPostAccessrights**](NetgwPostAccessrights.md)|  | 

### Return type

[**Netgw**](Netgw.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## netgwPutTag

> {String: String} netgwPutTag(netgwId, requestBody)

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
let requestBody = {key: "null"}; // {String: String} | 
apiInstance.netgwPutTag(netgwId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## netgwShow

> Netgw netgwShow(netgwId)

Get

Returns a single netgw

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
apiInstance.netgwShow(netgwId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 

### Return type

[**Netgw**](Netgw.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## netgwUpdate

> Netgw netgwUpdate(netgwId, netgwUpdate)

Update

Returns modified netgw

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

let apiInstance = new HyperoneClient.NetgwApi();
let netgwId = "netgwId_example"; // String | ID of netgw
let netgwUpdate = new HyperoneClient.NetgwUpdate(); // NetgwUpdate | 
apiInstance.netgwUpdate(netgwId, netgwUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netgwId** | **String**| ID of netgw | 
 **netgwUpdate** | [**NetgwUpdate**](NetgwUpdate.md)|  | 

### Return type

[**Netgw**](Netgw.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

