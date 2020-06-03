# HyperoneClient.VmApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vmActionFlavour**](VmApi.md#vmActionFlavour) | **POST** /vm/{vmId}/actions/flavour | /actions/flavour
[**vmActionImage**](VmApi.md#vmActionImage) | **POST** /vm/{vmId}/actions/image | /actions/image
[**vmActionPasswordReset**](VmApi.md#vmActionPasswordReset) | **POST** /vm/{vmId}/actions/password_reset | /actions/password_reset
[**vmActionRename**](VmApi.md#vmActionRename) | **POST** /vm/{vmId}/actions/rename | /actions/rename
[**vmActionRestart**](VmApi.md#vmActionRestart) | **POST** /vm/{vmId}/actions/restart | /actions/restart
[**vmActionStart**](VmApi.md#vmActionStart) | **POST** /vm/{vmId}/actions/start | /actions/start
[**vmActionStop**](VmApi.md#vmActionStop) | **POST** /vm/{vmId}/actions/stop | /actions/stop
[**vmActionTurnoff**](VmApi.md#vmActionTurnoff) | **POST** /vm/{vmId}/actions/turnoff | /actions/turnoff
[**vmCreate**](VmApi.md#vmCreate) | **POST** /vm | Create
[**vmDelete**](VmApi.md#vmDelete) | **DELETE** /vm/{vmId} | Delete
[**vmDeleteAccessrightsIdentity**](VmApi.md#vmDeleteAccessrightsIdentity) | **DELETE** /vm/{vmId}/accessrights/{identity} | /accessrights/:identity
[**vmDeleteHddDiskId**](VmApi.md#vmDeleteHddDiskId) | **DELETE** /vm/{vmId}/hdd/{diskId} | /hdd/:diskId
[**vmDeleteNetadpNetadpId**](VmApi.md#vmDeleteNetadpNetadpId) | **DELETE** /vm/{vmId}/netadp/{netadpId} | /netadp/:netadpId
[**vmDeleteTagKey**](VmApi.md#vmDeleteTagKey) | **DELETE** /vm/{vmId}/tag/{key} | /tag/:key
[**vmGetConsole**](VmApi.md#vmGetConsole) | **GET** /vm/{vmId}/console | /console
[**vmGetServicesServiceId**](VmApi.md#vmGetServicesServiceId) | **GET** /vm/{vmId}/services/{serviceId} | /services/:serviceId
[**vmGetTag**](VmApi.md#vmGetTag) | **GET** /vm/{vmId}/tag | /tag
[**vmList**](VmApi.md#vmList) | **GET** /vm | List
[**vmListAccessrights**](VmApi.md#vmListAccessrights) | **GET** /vm/{vmId}/accessrights | /accessrights
[**vmListHdd**](VmApi.md#vmListHdd) | **GET** /vm/{vmId}/hdd | /hdd
[**vmListNetadp**](VmApi.md#vmListNetadp) | **GET** /vm/{vmId}/netadp | /netadp
[**vmListQueue**](VmApi.md#vmListQueue) | **GET** /vm/{vmId}/queue | /queue
[**vmListServices**](VmApi.md#vmListServices) | **GET** /vm/{vmId}/services | /services
[**vmPatchTag**](VmApi.md#vmPatchTag) | **PATCH** /vm/{vmId}/tag | /tag
[**vmPostAccessrights**](VmApi.md#vmPostAccessrights) | **POST** /vm/{vmId}/accessrights | /accessrights
[**vmPostHdd**](VmApi.md#vmPostHdd) | **POST** /vm/{vmId}/hdd | /hdd
[**vmPostNetadp**](VmApi.md#vmPostNetadp) | **POST** /vm/{vmId}/netadp | /netadp
[**vmPutTag**](VmApi.md#vmPutTag) | **PUT** /vm/{vmId}/tag | /tag
[**vmShow**](VmApi.md#vmShow) | **GET** /vm/{vmId} | Get
[**vmUpdate**](VmApi.md#vmUpdate) | **PATCH** /vm/{vmId} | Update



## vmActionFlavour

> Vm vmActionFlavour(vmId, vmActionFlavour, opts)

/actions/flavour

Action flavour

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var vmActionFlavour = new HyperoneClient.VmActionFlavour(); // VmActionFlavour | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.vmActionFlavour(vmId, vmActionFlavour, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmActionFlavour** | [**VmActionFlavour**](VmActionFlavour.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vmActionImage

> Vm vmActionImage(vmId, vmActionImage, opts)

/actions/image

Action image

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var vmActionImage = new HyperoneClient.VmActionImage(); // VmActionImage | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.vmActionImage(vmId, vmActionImage, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmActionImage** | [**VmActionImage**](VmActionImage.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vmActionPasswordReset

> Vm vmActionPasswordReset(vmId, vmActionPasswordReset, opts)

/actions/password_reset

Action password_reset

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var vmActionPasswordReset = new HyperoneClient.VmActionPasswordReset(); // VmActionPasswordReset | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.vmActionPasswordReset(vmId, vmActionPasswordReset, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmActionPasswordReset** | [**VmActionPasswordReset**](VmActionPasswordReset.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vmActionRename

> Vm vmActionRename(vmId, vmActionRename, opts)

/actions/rename

Action rename

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var vmActionRename = new HyperoneClient.VmActionRename(); // VmActionRename | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.vmActionRename(vmId, vmActionRename, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmActionRename** | [**VmActionRename**](VmActionRename.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vmActionRestart

> Vm vmActionRestart(vmId, opts)

/actions/restart

Action restart

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.vmActionRestart(vmId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmActionStart

> Vm vmActionStart(vmId, opts)

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.vmActionStart(vmId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmActionStop

> Vm vmActionStop(vmId, opts)

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.vmActionStop(vmId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmActionTurnoff

> Vm vmActionTurnoff(vmId, opts)

/actions/turnoff

Action turnoff

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.vmActionTurnoff(vmId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmCreate

> Vm vmCreate(vmCreate, opts)

Create

Create vm

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

var apiInstance = new HyperoneClient.VmApi();
var vmCreate = new HyperoneClient.VmCreate(); // VmCreate | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.vmCreate(vmCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmCreate** | [**VmCreate**](VmCreate.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vmDelete

> vmDelete(vmId, vmDelete)

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var vmDelete = new HyperoneClient.VmDelete(); // VmDelete | 
apiInstance.vmDelete(vmId, vmDelete).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmDelete** | [**VmDelete**](VmDelete.md)|  | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vmDeleteAccessrightsIdentity

> Vm vmDeleteAccessrightsIdentity(vmId, identity)

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var identity = "identity_example"; // String | identity
apiInstance.vmDeleteAccessrightsIdentity(vmId, identity).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **identity** | **String**| identity | 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmDeleteHddDiskId

> Hdd vmDeleteHddDiskId(vmId, diskId)

/hdd/:diskId

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var diskId = "diskId_example"; // String | diskId
apiInstance.vmDeleteHddDiskId(vmId, diskId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **diskId** | **String**| diskId | 

### Return type

[**Hdd**](Hdd.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmDeleteNetadpNetadpId

> Netadp vmDeleteNetadpNetadpId(vmId, netadpId)

/netadp/:netadpId

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var netadpId = "netadpId_example"; // String | netadpId
apiInstance.vmDeleteNetadpNetadpId(vmId, netadpId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **netadpId** | **String**| netadpId | 

### Return type

[**Netadp**](Netadp.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmDeleteTagKey

> {String: String} vmDeleteTagKey(vmId, key)

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var key = "key_example"; // String | key
apiInstance.vmDeleteTagKey(vmId, key).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **key** | **String**| key | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmGetConsole

> vmGetConsole(vmId)

/console

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
apiInstance.vmGetConsole(vmId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmGetServicesServiceId

> VmServices vmGetServicesServiceId(vmId, serviceId)

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var serviceId = "serviceId_example"; // String | serviceId
apiInstance.vmGetServicesServiceId(vmId, serviceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **serviceId** | **String**| serviceId | 

### Return type

[**VmServices**](VmServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmGetTag

> {String: String} vmGetTag(vmId)

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
apiInstance.vmGetTag(vmId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmList

> [Vm] vmList(opts)

List

List vm

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

var apiInstance = new HyperoneClient.VmApi();
var opts = {
  'name': "name_example", // String | Filter by name
  'tag': {key: "null"} // {String: String} | Filter by tag
};
apiInstance.vmList(opts).then(function(data) {
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

[**[Vm]**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmListAccessrights

> [String] vmListAccessrights(vmId)

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
apiInstance.vmListAccessrights(vmId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmListHdd

> [Hdd] vmListHdd(vmId)

/hdd

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
apiInstance.vmListHdd(vmId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 

### Return type

[**[Hdd]**](Hdd.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmListNetadp

> [Netadp] vmListNetadp(vmId)

/netadp

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
apiInstance.vmListNetadp(vmId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 

### Return type

[**[Netadp]**](Netadp.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmListQueue

> [Event] vmListQueue(vmId, opts)

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var opts = {
  'limit': 100, // Number | $limit
  'skip': 3.4 // Number | $skip
};
apiInstance.vmListQueue(vmId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **limit** | **Number**| $limit | [optional] [default to 100]
 **skip** | **Number**| $skip | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmListServices

> [VmServices] vmListServices(vmId)

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
apiInstance.vmListServices(vmId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 

### Return type

[**[VmServices]**](VmServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmPatchTag

> {String: String} vmPatchTag(vmId, requestBody)

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.vmPatchTag(vmId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vmPostAccessrights

> Vm vmPostAccessrights(vmId, vmPostAccessrights)

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var vmPostAccessrights = new HyperoneClient.VmPostAccessrights(); // VmPostAccessrights | 
apiInstance.vmPostAccessrights(vmId, vmPostAccessrights).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmPostAccessrights** | [**VmPostAccessrights**](VmPostAccessrights.md)|  | 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vmPostHdd

> Hdd vmPostHdd(vmId, vmPostHdd)

/hdd

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var vmPostHdd = new HyperoneClient.VmPostHdd(); // VmPostHdd | 
apiInstance.vmPostHdd(vmId, vmPostHdd).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmPostHdd** | [**VmPostHdd**](VmPostHdd.md)|  | 

### Return type

[**Hdd**](Hdd.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vmPostNetadp

> Netadp vmPostNetadp(vmId, vmPostNetadp)

/netadp

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var vmPostNetadp = new HyperoneClient.VmPostNetadp(); // VmPostNetadp | 
apiInstance.vmPostNetadp(vmId, vmPostNetadp).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmPostNetadp** | [**VmPostNetadp**](VmPostNetadp.md)|  | 

### Return type

[**Netadp**](Netadp.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vmPutTag

> {String: String} vmPutTag(vmId, requestBody)

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.vmPutTag(vmId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vmShow

> Vm vmShow(vmId)

Get

Returns a single vm

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
apiInstance.vmShow(vmId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vmUpdate

> Vm vmUpdate(vmId, vmUpdate)

Update

Returns modified vm

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

var apiInstance = new HyperoneClient.VmApi();
var vmId = "vmId_example"; // String | ID of vm
var vmUpdate = new HyperoneClient.VmUpdate(); // VmUpdate | 
apiInstance.vmUpdate(vmId, vmUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmUpdate** | [**VmUpdate**](VmUpdate.md)|  | 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

