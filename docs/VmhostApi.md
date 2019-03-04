# HyperOneApi.VmhostApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vmhostActionMoveDisk**](VmhostApi.md#vmhostActionMoveDisk) | **POST** /vmhost/{vmhostId}/actions/moveDisk | /actions/moveDisk
[**vmhostActionMoveISO**](VmhostApi.md#vmhostActionMoveISO) | **POST** /vmhost/{vmhostId}/actions/moveISO | /actions/moveISO
[**vmhostActionMoveImage**](VmhostApi.md#vmhostActionMoveImage) | **POST** /vmhost/{vmhostId}/actions/moveImage | /actions/moveImage
[**vmhostActionMoveVM**](VmhostApi.md#vmhostActionMoveVM) | **POST** /vmhost/{vmhostId}/actions/moveVM | /actions/moveVM
[**vmhostDelete**](VmhostApi.md#vmhostDelete) | **DELETE** /vmhost/{vmhostId} | Delete
[**vmhostDeleteAccessrightsIdentity**](VmhostApi.md#vmhostDeleteAccessrightsIdentity) | **DELETE** /vmhost/{vmhostId}/accessrights/{identity} | /accessrights/:identity
[**vmhostDeleteTagKey**](VmhostApi.md#vmhostDeleteTagKey) | **DELETE** /vmhost/{vmhostId}/tag/{key} | /tag/:key
[**vmhostGetServicesServiceId**](VmhostApi.md#vmhostGetServicesServiceId) | **GET** /vmhost/{vmhostId}/services/{serviceId} | /services/:serviceId
[**vmhostGetTag**](VmhostApi.md#vmhostGetTag) | **GET** /vmhost/{vmhostId}/tag | /tag
[**vmhostList**](VmhostApi.md#vmhostList) | **GET** /vmhost | List
[**vmhostListAccessrights**](VmhostApi.md#vmhostListAccessrights) | **GET** /vmhost/{vmhostId}/accessrights | /accessrights
[**vmhostListQueue**](VmhostApi.md#vmhostListQueue) | **GET** /vmhost/{vmhostId}/queue | /queue
[**vmhostListServices**](VmhostApi.md#vmhostListServices) | **GET** /vmhost/{vmhostId}/services | /services
[**vmhostPatchTag**](VmhostApi.md#vmhostPatchTag) | **PATCH** /vmhost/{vmhostId}/tag | /tag
[**vmhostPostAccessrights**](VmhostApi.md#vmhostPostAccessrights) | **POST** /vmhost/{vmhostId}/accessrights | /accessrights
[**vmhostShow**](VmhostApi.md#vmhostShow) | **GET** /vmhost/{vmhostId} | Get
[**vmhostUpdate**](VmhostApi.md#vmhostUpdate) | **PATCH** /vmhost/{vmhostId} | Update


<a name="vmhostActionMoveDisk"></a>
# **vmhostActionMoveDisk**
> Vmhost vmhostActionMoveDisk(vmhostId, vmhostActionMoveDisk)

/actions/moveDisk

Action moveDisk

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
var vmhostActionMoveDisk = new HyperOneApi.VmhostActionMoveDisk(); // VmhostActionMoveDisk | 
apiInstance.vmhostActionMoveDisk(vmhostId, vmhostActionMoveDisk).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **vmhostActionMoveDisk** | [**VmhostActionMoveDisk**](VmhostActionMoveDisk.md)|  | 

### Return type

[**Vmhost**](Vmhost.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmhostActionMoveISO"></a>
# **vmhostActionMoveISO**
> Vmhost vmhostActionMoveISO(vmhostId, vmhostActionMoveISO)

/actions/moveISO

Action moveISO

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
var vmhostActionMoveISO = new HyperOneApi.VmhostActionMoveISO(); // VmhostActionMoveISO | 
apiInstance.vmhostActionMoveISO(vmhostId, vmhostActionMoveISO).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **vmhostActionMoveISO** | [**VmhostActionMoveISO**](VmhostActionMoveISO.md)|  | 

### Return type

[**Vmhost**](Vmhost.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmhostActionMoveImage"></a>
# **vmhostActionMoveImage**
> Vmhost vmhostActionMoveImage(vmhostId, vmhostActionMoveImage)

/actions/moveImage

Action moveImage

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
var vmhostActionMoveImage = new HyperOneApi.VmhostActionMoveImage(); // VmhostActionMoveImage | 
apiInstance.vmhostActionMoveImage(vmhostId, vmhostActionMoveImage).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **vmhostActionMoveImage** | [**VmhostActionMoveImage**](VmhostActionMoveImage.md)|  | 

### Return type

[**Vmhost**](Vmhost.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmhostActionMoveVM"></a>
# **vmhostActionMoveVM**
> Vmhost vmhostActionMoveVM(vmhostId, vmhostActionMoveVM)

/actions/moveVM

Action moveVM

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
var vmhostActionMoveVM = new HyperOneApi.VmhostActionMoveVM(); // VmhostActionMoveVM | 
apiInstance.vmhostActionMoveVM(vmhostId, vmhostActionMoveVM).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **vmhostActionMoveVM** | [**VmhostActionMoveVM**](VmhostActionMoveVM.md)|  | 

### Return type

[**Vmhost**](Vmhost.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmhostDelete"></a>
# **vmhostDelete**
> vmhostDelete(vmhostId)

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
apiInstance.vmhostDelete(vmhostId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="vmhostDeleteAccessrightsIdentity"></a>
# **vmhostDeleteAccessrightsIdentity**
> Vmhost vmhostDeleteAccessrightsIdentity(vmhostId, identity)

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
var identity = "identity_example"; // String | identity
apiInstance.vmhostDeleteAccessrightsIdentity(vmhostId, identity).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **identity** | **String**| identity | 

### Return type

[**Vmhost**](Vmhost.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmhostDeleteTagKey"></a>
# **vmhostDeleteTagKey**
> Object vmhostDeleteTagKey(vmhostId, key)

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
var key = "key_example"; // String | key
apiInstance.vmhostDeleteTagKey(vmhostId, key).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **key** | **String**| key | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmhostGetServicesServiceId"></a>
# **vmhostGetServicesServiceId**
> VmhostServices vmhostGetServicesServiceId(vmhostId, serviceId)

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
var serviceId = "serviceId_example"; // String | serviceId
apiInstance.vmhostGetServicesServiceId(vmhostId, serviceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **serviceId** | **String**| serviceId | 

### Return type

[**VmhostServices**](VmhostServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmhostGetTag"></a>
# **vmhostGetTag**
> Object vmhostGetTag(vmhostId)

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
apiInstance.vmhostGetTag(vmhostId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmhostList"></a>
# **vmhostList**
> [Vmhost] vmhostList(opts)

List

List vmhost

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

var apiInstance = new HyperOneApi.VmhostApi();
var opts = {
  'enabledServices': "enabledServices_example" // String | Filter by enabledServices
};
apiInstance.vmhostList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enabledServices** | **String**| Filter by enabledServices | [optional] 

### Return type

[**[Vmhost]**](Vmhost.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmhostListAccessrights"></a>
# **vmhostListAccessrights**
> [String] vmhostListAccessrights(vmhostId)

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
apiInstance.vmhostListAccessrights(vmhostId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmhostListQueue"></a>
# **vmhostListQueue**
> [Event] vmhostListQueue(vmhostId)

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
apiInstance.vmhostListQueue(vmhostId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmhostListServices"></a>
# **vmhostListServices**
> [VmhostServices] vmhostListServices(vmhostId)

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
apiInstance.vmhostListServices(vmhostId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 

### Return type

[**[VmhostServices]**](VmhostServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmhostPatchTag"></a>
# **vmhostPatchTag**
> Object vmhostPatchTag(vmhostId, requestBody)

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.vmhostPatchTag(vmhostId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmhostPostAccessrights"></a>
# **vmhostPostAccessrights**
> Vmhost vmhostPostAccessrights(vmhostId, vmhostPostAccessrights)

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
var vmhostPostAccessrights = new HyperOneApi.VmhostPostAccessrights(); // VmhostPostAccessrights | 
apiInstance.vmhostPostAccessrights(vmhostId, vmhostPostAccessrights).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **vmhostPostAccessrights** | [**VmhostPostAccessrights**](VmhostPostAccessrights.md)|  | 

### Return type

[**Vmhost**](Vmhost.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmhostShow"></a>
# **vmhostShow**
> Vmhost vmhostShow(vmhostId)

Get

Returns a single vmhost

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
apiInstance.vmhostShow(vmhostId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 

### Return type

[**Vmhost**](Vmhost.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmhostUpdate"></a>
# **vmhostUpdate**
> Vmhost vmhostUpdate(vmhostId, vmhostUpdate)

Update

Returns modified vmhost

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

var apiInstance = new HyperOneApi.VmhostApi();
var vmhostId = "vmhostId_example"; // String | ID of vmhost
var vmhostUpdate = new HyperOneApi.VmhostUpdate(); // VmhostUpdate | 
apiInstance.vmhostUpdate(vmhostId, vmhostUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **vmhostUpdate** | [**VmhostUpdate**](VmhostUpdate.md)|  | 

### Return type

[**Vmhost**](Vmhost.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

