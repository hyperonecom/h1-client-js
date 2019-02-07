# HyperOneApi.VmApi

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
[**vmShow**](VmApi.md#vmShow) | **GET** /vm/{vmId} | Get
[**vmUpdate**](VmApi.md#vmUpdate) | **PATCH** /vm/{vmId} | Update


<a name="vmActionFlavour"></a>
# **vmActionFlavour**
> Vm vmActionFlavour(vmId, vmActionFlavour)

/actions/flavour

Action flavour

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let vmActionFlavour = new HyperOneApi.VmActionFlavour(); // VmActionFlavour | 
apiInstance.vmActionFlavour(vmId, vmActionFlavour).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmActionFlavour** | [**VmActionFlavour**](VmActionFlavour.md)|  | 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmActionImage"></a>
# **vmActionImage**
> Vm vmActionImage(vmId, vmActionImage)

/actions/image

Action image

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let vmActionImage = new HyperOneApi.VmActionImage(); // VmActionImage | 
apiInstance.vmActionImage(vmId, vmActionImage).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmActionImage** | [**VmActionImage**](VmActionImage.md)|  | 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmActionPasswordReset"></a>
# **vmActionPasswordReset**
> Vm vmActionPasswordReset(vmId, vmActionPasswordReset)

/actions/password_reset

Action password_reset

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let vmActionPasswordReset = new HyperOneApi.VmActionPasswordReset(); // VmActionPasswordReset | 
apiInstance.vmActionPasswordReset(vmId, vmActionPasswordReset).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmActionPasswordReset** | [**VmActionPasswordReset**](VmActionPasswordReset.md)|  | 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmActionRename"></a>
# **vmActionRename**
> Vm vmActionRename(vmId, vmActionRename)

/actions/rename

Action rename

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let vmActionRename = new HyperOneApi.VmActionRename(); // VmActionRename | 
apiInstance.vmActionRename(vmId, vmActionRename).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmActionRename** | [**VmActionRename**](VmActionRename.md)|  | 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmActionRestart"></a>
# **vmActionRestart**
> Vm vmActionRestart(vmId)

/actions/restart

Action restart

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
apiInstance.vmActionRestart(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="vmActionStart"></a>
# **vmActionStart**
> Vm vmActionStart(vmId)

/actions/start

Action start

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
apiInstance.vmActionStart(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="vmActionStop"></a>
# **vmActionStop**
> Vm vmActionStop(vmId)

/actions/stop

Action stop

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
apiInstance.vmActionStop(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="vmActionTurnoff"></a>
# **vmActionTurnoff**
> Vm vmActionTurnoff(vmId)

/actions/turnoff

Action turnoff

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
apiInstance.vmActionTurnoff(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="vmCreate"></a>
# **vmCreate**
> Vm vmCreate(vmCreate)

Create

Create vm

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmCreate = new HyperOneApi.VmCreate(); // VmCreate | 
apiInstance.vmCreate(vmCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmCreate** | [**VmCreate**](VmCreate.md)|  | 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmDelete"></a>
# **vmDelete**
> vmDelete(vmId, vmDelete)

Delete

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let vmDelete = new HyperOneApi.VmDelete(); // VmDelete | 
apiInstance.vmDelete(vmId, vmDelete).then(() => {
  console.log('API called successfully.');
}, (error) => {
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
 - **Accept**: Not defined

<a name="vmDeleteAccessrightsIdentity"></a>
# **vmDeleteAccessrightsIdentity**
> Vm vmDeleteAccessrightsIdentity(vmId, identity)

/accessrights/:identity

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let identity = "identity_example"; // String | identity
apiInstance.vmDeleteAccessrightsIdentity(vmId, identity).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="vmDeleteHddDiskId"></a>
# **vmDeleteHddDiskId**
> Vm vmDeleteHddDiskId(vmId, diskId)

/hdd/:diskId

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let diskId = "diskId_example"; // String | diskId
apiInstance.vmDeleteHddDiskId(vmId, diskId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **diskId** | **String**| diskId | 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmDeleteNetadpNetadpId"></a>
# **vmDeleteNetadpNetadpId**
> Vm vmDeleteNetadpNetadpId(vmId, netadpId)

/netadp/:netadpId

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let netadpId = "netadpId_example"; // String | netadpId
apiInstance.vmDeleteNetadpNetadpId(vmId, netadpId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **netadpId** | **String**| netadpId | 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmDeleteTagKey"></a>
# **vmDeleteTagKey**
> Object vmDeleteTagKey(vmId, key)

/tag/:key

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let key = "key_example"; // String | key
apiInstance.vmDeleteTagKey(vmId, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **key** | **String**| key | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmGetServicesServiceId"></a>
# **vmGetServicesServiceId**
> VmServices vmGetServicesServiceId(vmId, serviceId)

/services/:serviceId

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let serviceId = "serviceId_example"; // String | serviceId
apiInstance.vmGetServicesServiceId(vmId, serviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="vmGetTag"></a>
# **vmGetTag**
> Object vmGetTag(vmId)

/tag

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
apiInstance.vmGetTag(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmList"></a>
# **vmList**
> [Vm] vmList(opts)

List

List vm

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let opts = {
  'name': "name_example" // String | Filter by name
};
apiInstance.vmList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filter by name | [optional] 

### Return type

[**[Vm]**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmListAccessrights"></a>
# **vmListAccessrights**
> [String] vmListAccessrights(vmId)

/accessrights

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
apiInstance.vmListAccessrights(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="vmListHdd"></a>
# **vmListHdd**
> [Hdd] vmListHdd(vmId)

/hdd

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
apiInstance.vmListHdd(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="vmListNetadp"></a>
# **vmListNetadp**
> [Netadp] vmListNetadp(vmId)

/netadp

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
apiInstance.vmListNetadp(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="vmListQueue"></a>
# **vmListQueue**
> [Event] vmListQueue(vmId)

/queue

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
apiInstance.vmListQueue(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vmListServices"></a>
# **vmListServices**
> [VmServices] vmListServices(vmId)

/services

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
apiInstance.vmListServices(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="vmPatchTag"></a>
# **vmPatchTag**
> Object vmPatchTag(vmId, body)

/tag

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let body = null; // Object | 
apiInstance.vmPatchTag(vmId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmPostAccessrights"></a>
# **vmPostAccessrights**
> String vmPostAccessrights(vmId, vmPostAccessrights)

/accessrights

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let vmPostAccessrights = new HyperOneApi.VmPostAccessrights(); // VmPostAccessrights | 
apiInstance.vmPostAccessrights(vmId, vmPostAccessrights).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmPostAccessrights** | [**VmPostAccessrights**](VmPostAccessrights.md)|  | 

### Return type

**String**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmPostHdd"></a>
# **vmPostHdd**
> Vm vmPostHdd(vmId, vmPostHdd)

/hdd

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let vmPostHdd = new HyperOneApi.VmPostHdd(); // VmPostHdd | 
apiInstance.vmPostHdd(vmId, vmPostHdd).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmPostHdd** | [**VmPostHdd**](VmPostHdd.md)|  | 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmPostNetadp"></a>
# **vmPostNetadp**
> Vm vmPostNetadp(vmId, vmPostNetadp)

/netadp

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let vmPostNetadp = new HyperOneApi.VmPostNetadp(); // VmPostNetadp | 
apiInstance.vmPostNetadp(vmId, vmPostNetadp).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmId** | **String**| ID of vm | 
 **vmPostNetadp** | [**VmPostNetadp**](VmPostNetadp.md)|  | 

### Return type

[**Vm**](Vm.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmShow"></a>
# **vmShow**
> Vm vmShow(vmId)

Get

Returns a single vm

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
apiInstance.vmShow(vmId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="vmUpdate"></a>
# **vmUpdate**
> Vm vmUpdate(vmId, vmUpdate)

Update

Returns modified vm

### Example
```javascript
import HyperOneApi from 'hyper_one_api';
let defaultClient = HyperOneApi.ApiClient.instance;
// Configure API key authorization: Project
let Project = defaultClient.authentications['Project'];
Project.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Project.apiKeyPrefix = 'Token';
// Configure API key authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ServiceAccount.apiKeyPrefix = 'Token';
// Configure API key authorization: Session
let Session = defaultClient.authentications['Session'];
Session.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Session.apiKeyPrefix = 'Token';

let apiInstance = new HyperOneApi.VmApi();
let vmId = "vmId_example"; // String | ID of vm
let vmUpdate = new HyperOneApi.VmUpdate(); // VmUpdate | 
apiInstance.vmUpdate(vmId, vmUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

