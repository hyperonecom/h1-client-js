# HyperOneApi.VolumeApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**volumeCreate**](VolumeApi.md#volumeCreate) | **POST** /volume | Create
[**volumeDelete**](VolumeApi.md#volumeDelete) | **DELETE** /volume/{volumeId} | Delete
[**volumeDeleteAccessrightsIdentity**](VolumeApi.md#volumeDeleteAccessrightsIdentity) | **DELETE** /volume/{volumeId}/accessrights/{identity} | /accessrights/:identity
[**volumeDeleteTagKey**](VolumeApi.md#volumeDeleteTagKey) | **DELETE** /volume/{volumeId}/tag/{key} | /tag/:key
[**volumeGetServicesServiceId**](VolumeApi.md#volumeGetServicesServiceId) | **GET** /volume/{volumeId}/services/{serviceId} | /services/:serviceId
[**volumeGetTag**](VolumeApi.md#volumeGetTag) | **GET** /volume/{volumeId}/tag | /tag
[**volumeList**](VolumeApi.md#volumeList) | **GET** /volume | List
[**volumeListAccessrights**](VolumeApi.md#volumeListAccessrights) | **GET** /volume/{volumeId}/accessrights | /accessrights
[**volumeListQueue**](VolumeApi.md#volumeListQueue) | **GET** /volume/{volumeId}/queue | /queue
[**volumeListServices**](VolumeApi.md#volumeListServices) | **GET** /volume/{volumeId}/services | /services
[**volumePatchTag**](VolumeApi.md#volumePatchTag) | **PATCH** /volume/{volumeId}/tag | /tag
[**volumePostAccessrights**](VolumeApi.md#volumePostAccessrights) | **POST** /volume/{volumeId}/accessrights | /accessrights
[**volumeShow**](VolumeApi.md#volumeShow) | **GET** /volume/{volumeId} | Get
[**volumeUpdate**](VolumeApi.md#volumeUpdate) | **PATCH** /volume/{volumeId} | Update


<a name="volumeCreate"></a>
# **volumeCreate**
> Volume volumeCreate(volumeCreate)

Create

Create volume

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

var apiInstance = new HyperOneApi.VolumeApi();
var volumeCreate = new HyperOneApi.VolumeCreate(); // VolumeCreate | 
apiInstance.volumeCreate(volumeCreate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeCreate** | [**VolumeCreate**](VolumeCreate.md)|  | 

### Return type

[**Volume**](Volume.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="volumeDelete"></a>
# **volumeDelete**
> volumeDelete(volumeId)

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

var apiInstance = new HyperOneApi.VolumeApi();
var volumeId = "volumeId_example"; // String | ID of volume
apiInstance.volumeDelete(volumeId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **String**| ID of volume | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="volumeDeleteAccessrightsIdentity"></a>
# **volumeDeleteAccessrightsIdentity**
> Volume volumeDeleteAccessrightsIdentity(volumeId, identity)

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

var apiInstance = new HyperOneApi.VolumeApi();
var volumeId = "volumeId_example"; // String | ID of volume
var identity = "identity_example"; // String | identity
apiInstance.volumeDeleteAccessrightsIdentity(volumeId, identity).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **String**| ID of volume | 
 **identity** | **String**| identity | 

### Return type

[**Volume**](Volume.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="volumeDeleteTagKey"></a>
# **volumeDeleteTagKey**
> Object volumeDeleteTagKey(volumeId, key)

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

var apiInstance = new HyperOneApi.VolumeApi();
var volumeId = "volumeId_example"; // String | ID of volume
var key = "key_example"; // String | key
apiInstance.volumeDeleteTagKey(volumeId, key).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **String**| ID of volume | 
 **key** | **String**| key | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="volumeGetServicesServiceId"></a>
# **volumeGetServicesServiceId**
> VolumeServices volumeGetServicesServiceId(volumeId, serviceId)

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

var apiInstance = new HyperOneApi.VolumeApi();
var volumeId = "volumeId_example"; // String | ID of volume
var serviceId = "serviceId_example"; // String | serviceId
apiInstance.volumeGetServicesServiceId(volumeId, serviceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **String**| ID of volume | 
 **serviceId** | **String**| serviceId | 

### Return type

[**VolumeServices**](VolumeServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="volumeGetTag"></a>
# **volumeGetTag**
> Object volumeGetTag(volumeId)

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

var apiInstance = new HyperOneApi.VolumeApi();
var volumeId = "volumeId_example"; // String | ID of volume
apiInstance.volumeGetTag(volumeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **String**| ID of volume | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="volumeList"></a>
# **volumeList**
> [Volume] volumeList(opts)

List

List volume

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

var apiInstance = new HyperOneApi.VolumeApi();
var opts = {
  'name': "name_example" // String | Filter by name
};
apiInstance.volumeList(opts).then(function(data) {
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

[**[Volume]**](Volume.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="volumeListAccessrights"></a>
# **volumeListAccessrights**
> [String] volumeListAccessrights(volumeId)

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

var apiInstance = new HyperOneApi.VolumeApi();
var volumeId = "volumeId_example"; // String | ID of volume
apiInstance.volumeListAccessrights(volumeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **String**| ID of volume | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="volumeListQueue"></a>
# **volumeListQueue**
> [Event] volumeListQueue(volumeId)

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

var apiInstance = new HyperOneApi.VolumeApi();
var volumeId = "volumeId_example"; // String | ID of volume
apiInstance.volumeListQueue(volumeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **String**| ID of volume | 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="volumeListServices"></a>
# **volumeListServices**
> [VolumeServices] volumeListServices(volumeId)

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

var apiInstance = new HyperOneApi.VolumeApi();
var volumeId = "volumeId_example"; // String | ID of volume
apiInstance.volumeListServices(volumeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **String**| ID of volume | 

### Return type

[**[VolumeServices]**](VolumeServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="volumePatchTag"></a>
# **volumePatchTag**
> Object volumePatchTag(volumeId, requestBody)

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

var apiInstance = new HyperOneApi.VolumeApi();
var volumeId = "volumeId_example"; // String | ID of volume
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.volumePatchTag(volumeId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **String**| ID of volume | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="volumePostAccessrights"></a>
# **volumePostAccessrights**
> Volume volumePostAccessrights(volumeId, volumePostAccessrights)

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

var apiInstance = new HyperOneApi.VolumeApi();
var volumeId = "volumeId_example"; // String | ID of volume
var volumePostAccessrights = new HyperOneApi.VolumePostAccessrights(); // VolumePostAccessrights | 
apiInstance.volumePostAccessrights(volumeId, volumePostAccessrights).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **String**| ID of volume | 
 **volumePostAccessrights** | [**VolumePostAccessrights**](VolumePostAccessrights.md)|  | 

### Return type

[**Volume**](Volume.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="volumeShow"></a>
# **volumeShow**
> Volume volumeShow(volumeId)

Get

Returns a single volume

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

var apiInstance = new HyperOneApi.VolumeApi();
var volumeId = "volumeId_example"; // String | ID of volume
apiInstance.volumeShow(volumeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **String**| ID of volume | 

### Return type

[**Volume**](Volume.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="volumeUpdate"></a>
# **volumeUpdate**
> Volume volumeUpdate(volumeId, volumeUpdate)

Update

Returns modified volume

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

var apiInstance = new HyperOneApi.VolumeApi();
var volumeId = "volumeId_example"; // String | ID of volume
var volumeUpdate = new HyperOneApi.VolumeUpdate(); // VolumeUpdate | 
apiInstance.volumeUpdate(volumeId, volumeUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **volumeId** | **String**| ID of volume | 
 **volumeUpdate** | [**VolumeUpdate**](VolumeUpdate.md)|  | 

### Return type

[**Volume**](Volume.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

