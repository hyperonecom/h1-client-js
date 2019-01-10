# HyperOneApi.VmhostApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionVmhostMoveDisk**](VmhostApi.md#actionVmhostMoveDisk) | **POST** /vmhost/{vmhostId}/actions/moveDisk | Action :: moveDisk
[**actionVmhostMoveISO**](VmhostApi.md#actionVmhostMoveISO) | **POST** /vmhost/{vmhostId}/actions/moveISO | Action :: moveISO
[**actionVmhostMoveImage**](VmhostApi.md#actionVmhostMoveImage) | **POST** /vmhost/{vmhostId}/actions/moveImage | Action :: moveImage
[**actionVmhostMoveVM**](VmhostApi.md#actionVmhostMoveVM) | **POST** /vmhost/{vmhostId}/actions/moveVM | Action :: moveVM
[**deleteVmhost**](VmhostApi.md#deleteVmhost) | **DELETE** /vmhost/{vmhostId} | Delete by ID
[**listVmhost**](VmhostApi.md#listVmhost) | **GET** /vmhost | List
[**showVmhost**](VmhostApi.md#showVmhost) | **GET** /vmhost/{vmhostId} | Find by ID
[**updateVmhost**](VmhostApi.md#updateVmhost) | **PATCH** /vmhost/{vmhostId} | Update by ID


<a name="actionVmhostMoveDisk"></a>
# **actionVmhostMoveDisk**
> Vmhost actionVmhostMoveDisk(vmhostId, opts)

Action :: moveDisk

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
var opts = {
  'inlineObject51': new HyperOneApi.InlineObject51() // InlineObject51 | 
};
apiInstance.actionVmhostMoveDisk(vmhostId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **inlineObject51** | [**InlineObject51**](InlineObject51.md)|  | [optional] 

### Return type

[**Vmhost**](Vmhost.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="actionVmhostMoveISO"></a>
# **actionVmhostMoveISO**
> Vmhost actionVmhostMoveISO(vmhostId, opts)

Action :: moveISO

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
var opts = {
  'inlineObject52': new HyperOneApi.InlineObject52() // InlineObject52 | 
};
apiInstance.actionVmhostMoveISO(vmhostId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **inlineObject52** | [**InlineObject52**](InlineObject52.md)|  | [optional] 

### Return type

[**Vmhost**](Vmhost.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="actionVmhostMoveImage"></a>
# **actionVmhostMoveImage**
> Vmhost actionVmhostMoveImage(vmhostId, opts)

Action :: moveImage

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
var opts = {
  'inlineObject53': new HyperOneApi.InlineObject53() // InlineObject53 | 
};
apiInstance.actionVmhostMoveImage(vmhostId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **inlineObject53** | [**InlineObject53**](InlineObject53.md)|  | [optional] 

### Return type

[**Vmhost**](Vmhost.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="actionVmhostMoveVM"></a>
# **actionVmhostMoveVM**
> Vmhost actionVmhostMoveVM(vmhostId, opts)

Action :: moveVM

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
var opts = {
  'inlineObject50': new HyperOneApi.InlineObject50() // InlineObject50 | 
};
apiInstance.actionVmhostMoveVM(vmhostId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **inlineObject50** | [**InlineObject50**](InlineObject50.md)|  | [optional] 

### Return type

[**Vmhost**](Vmhost.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteVmhost"></a>
# **deleteVmhost**
> deleteVmhost(vmhostId)

Delete by ID

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
apiInstance.deleteVmhost(vmhostId).then(function() {
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

<a name="listVmhost"></a>
# **listVmhost**
> [Vmhost] listVmhost(opts)

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
apiInstance.listVmhost(opts).then(function(data) {
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

<a name="showVmhost"></a>
# **showVmhost**
> Vmhost showVmhost(vmhostId)

Find by ID

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
apiInstance.showVmhost(vmhostId).then(function(data) {
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

<a name="updateVmhost"></a>
# **updateVmhost**
> Vmhost updateVmhost(vmhostId, opts)

Update by ID

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
var opts = {
  'inlineObject49': new HyperOneApi.InlineObject49() // InlineObject49 | 
};
apiInstance.updateVmhost(vmhostId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **inlineObject49** | [**InlineObject49**](InlineObject49.md)|  | [optional] 

### Return type

[**Vmhost**](Vmhost.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

