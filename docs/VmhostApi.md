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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
let vmhostActionMoveDisk = new HyperOneApi.VmhostActionMoveDisk(); // VmhostActionMoveDisk | 
apiInstance.vmhostActionMoveDisk(vmhostId, vmhostActionMoveDisk).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
let vmhostActionMoveISO = new HyperOneApi.VmhostActionMoveISO(); // VmhostActionMoveISO | 
apiInstance.vmhostActionMoveISO(vmhostId, vmhostActionMoveISO).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
let vmhostActionMoveImage = new HyperOneApi.VmhostActionMoveImage(); // VmhostActionMoveImage | 
apiInstance.vmhostActionMoveImage(vmhostId, vmhostActionMoveImage).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
let vmhostActionMoveVM = new HyperOneApi.VmhostActionMoveVM(); // VmhostActionMoveVM | 
apiInstance.vmhostActionMoveVM(vmhostId, vmhostActionMoveVM).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
apiInstance.vmhostDelete(vmhostId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
let identity = "identity_example"; // String | identity
apiInstance.vmhostDeleteAccessrightsIdentity(vmhostId, identity).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
let key = "key_example"; // String | key
apiInstance.vmhostDeleteTagKey(vmhostId, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
let serviceId = "serviceId_example"; // String | serviceId
apiInstance.vmhostGetServicesServiceId(vmhostId, serviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
apiInstance.vmhostGetTag(vmhostId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperOneApi.VmhostApi();
let opts = {
  'enabledServices': "enabledServices_example" // String | Filter by enabledServices
};
apiInstance.vmhostList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
apiInstance.vmhostListAccessrights(vmhostId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
apiInstance.vmhostListQueue(vmhostId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
apiInstance.vmhostListServices(vmhostId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
> Object vmhostPatchTag(vmhostId, body)

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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
let body = null; // Object | 
apiInstance.vmhostPatchTag(vmhostId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vmhostPostAccessrights"></a>
# **vmhostPostAccessrights**
> String vmhostPostAccessrights(vmhostId, vmhostPostAccessrights)

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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
let vmhostPostAccessrights = new HyperOneApi.VmhostPostAccessrights(); // VmhostPostAccessrights | 
apiInstance.vmhostPostAccessrights(vmhostId, vmhostPostAccessrights).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vmhostId** | **String**| ID of vmhost | 
 **vmhostPostAccessrights** | [**VmhostPostAccessrights**](VmhostPostAccessrights.md)|  | 

### Return type

**String**

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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
apiInstance.vmhostShow(vmhostId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperOneApi.VmhostApi();
let vmhostId = "vmhostId_example"; // String | ID of vmhost
let vmhostUpdate = new HyperOneApi.VmhostUpdate(); // VmhostUpdate | 
apiInstance.vmhostUpdate(vmhostId, vmhostUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

