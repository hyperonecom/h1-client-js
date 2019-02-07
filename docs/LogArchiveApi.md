# HyperOneApi.LogArchiveApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logArchiveActionTransfer**](LogArchiveApi.md#logArchiveActionTransfer) | **POST** /logArchive/{logArchiveId}/actions/transfer | /actions/transfer
[**logArchiveCreate**](LogArchiveApi.md#logArchiveCreate) | **POST** /logArchive | Create
[**logArchiveDelete**](LogArchiveApi.md#logArchiveDelete) | **DELETE** /logArchive/{logArchiveId} | Delete
[**logArchiveDeleteAccessrightsIdentity**](LogArchiveApi.md#logArchiveDeleteAccessrightsIdentity) | **DELETE** /logArchive/{logArchiveId}/accessrights/{identity} | /accessrights/:identity
[**logArchiveDeleteCredentialcertificateId**](LogArchiveApi.md#logArchiveDeleteCredentialcertificateId) | **DELETE** /logArchive/{logArchiveId}/credential/certificate/{id} | /credential/certificate/:id
[**logArchiveDeleteCredentialpasswordId**](LogArchiveApi.md#logArchiveDeleteCredentialpasswordId) | **DELETE** /logArchive/{logArchiveId}/credential/password/{id} | /credential/password/:id
[**logArchiveDeleteTagKey**](LogArchiveApi.md#logArchiveDeleteTagKey) | **DELETE** /logArchive/{logArchiveId}/tag/{key} | /tag/:key
[**logArchiveGetCredentialcertificateId**](LogArchiveApi.md#logArchiveGetCredentialcertificateId) | **GET** /logArchive/{logArchiveId}/credential/certificate/{id} | /credential/certificate/:id
[**logArchiveGetCredentialpasswordId**](LogArchiveApi.md#logArchiveGetCredentialpasswordId) | **GET** /logArchive/{logArchiveId}/credential/password/{id} | /credential/password/:id
[**logArchiveGetServicesServiceId**](LogArchiveApi.md#logArchiveGetServicesServiceId) | **GET** /logArchive/{logArchiveId}/services/{serviceId} | /services/:serviceId
[**logArchiveGetTag**](LogArchiveApi.md#logArchiveGetTag) | **GET** /logArchive/{logArchiveId}/tag | /tag
[**logArchiveList**](LogArchiveApi.md#logArchiveList) | **GET** /logArchive | List
[**logArchiveListAccessrights**](LogArchiveApi.md#logArchiveListAccessrights) | **GET** /logArchive/{logArchiveId}/accessrights | /accessrights
[**logArchiveListCredentialcertificate**](LogArchiveApi.md#logArchiveListCredentialcertificate) | **GET** /logArchive/{logArchiveId}/credential/certificate | /credential/certificate
[**logArchiveListCredentialpassword**](LogArchiveApi.md#logArchiveListCredentialpassword) | **GET** /logArchive/{logArchiveId}/credential/password | /credential/password
[**logArchiveListQueue**](LogArchiveApi.md#logArchiveListQueue) | **GET** /logArchive/{logArchiveId}/queue | /queue
[**logArchiveListServices**](LogArchiveApi.md#logArchiveListServices) | **GET** /logArchive/{logArchiveId}/services | /services
[**logArchivePatchCredentialcertificateId**](LogArchiveApi.md#logArchivePatchCredentialcertificateId) | **PATCH** /logArchive/{logArchiveId}/credential/certificate/{id} | /credential/certificate/:id
[**logArchivePatchCredentialpasswordId**](LogArchiveApi.md#logArchivePatchCredentialpasswordId) | **PATCH** /logArchive/{logArchiveId}/credential/password/{id} | /credential/password/:id
[**logArchivePatchTag**](LogArchiveApi.md#logArchivePatchTag) | **PATCH** /logArchive/{logArchiveId}/tag | /tag
[**logArchivePostAccessrights**](LogArchiveApi.md#logArchivePostAccessrights) | **POST** /logArchive/{logArchiveId}/accessrights | /accessrights
[**logArchivePostCredentialcertificate**](LogArchiveApi.md#logArchivePostCredentialcertificate) | **POST** /logArchive/{logArchiveId}/credential/certificate | /credential/certificate
[**logArchivePostCredentialpassword**](LogArchiveApi.md#logArchivePostCredentialpassword) | **POST** /logArchive/{logArchiveId}/credential/password | /credential/password
[**logArchiveShow**](LogArchiveApi.md#logArchiveShow) | **GET** /logArchive/{logArchiveId} | Get
[**logArchiveUpdate**](LogArchiveApi.md#logArchiveUpdate) | **PATCH** /logArchive/{logArchiveId} | Update


<a name="logArchiveActionTransfer"></a>
# **logArchiveActionTransfer**
> LogArchive logArchiveActionTransfer(logArchiveId, logArchiveActionTransfer)

/actions/transfer

Action transfer

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let logArchiveActionTransfer = new HyperOneApi.LogArchiveActionTransfer(); // LogArchiveActionTransfer | 
apiInstance.logArchiveActionTransfer(logArchiveId, logArchiveActionTransfer).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **logArchiveActionTransfer** | [**LogArchiveActionTransfer**](LogArchiveActionTransfer.md)|  | 

### Return type

[**LogArchive**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logArchiveCreate"></a>
# **logArchiveCreate**
> LogArchive logArchiveCreate(logArchiveCreate)

Create

Create logArchive

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveCreate = new HyperOneApi.LogArchiveCreate(); // LogArchiveCreate | 
apiInstance.logArchiveCreate(logArchiveCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveCreate** | [**LogArchiveCreate**](LogArchiveCreate.md)|  | 

### Return type

[**LogArchive**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logArchiveDelete"></a>
# **logArchiveDelete**
> logArchiveDelete(logArchiveId)

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveDelete(logArchiveId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="logArchiveDeleteAccessrightsIdentity"></a>
# **logArchiveDeleteAccessrightsIdentity**
> LogArchive logArchiveDeleteAccessrightsIdentity(logArchiveId, identity)

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let identity = "identity_example"; // String | identity
apiInstance.logArchiveDeleteAccessrightsIdentity(logArchiveId, identity).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **identity** | **String**| identity | 

### Return type

[**LogArchive**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchiveDeleteCredentialcertificateId"></a>
# **logArchiveDeleteCredentialcertificateId**
> LogArchive logArchiveDeleteCredentialcertificateId(logArchiveId, id)

/credential/certificate/:id

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let id = "id_example"; // String | id
apiInstance.logArchiveDeleteCredentialcertificateId(logArchiveId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **id** | **String**| id | 

### Return type

[**LogArchive**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchiveDeleteCredentialpasswordId"></a>
# **logArchiveDeleteCredentialpasswordId**
> LogArchive logArchiveDeleteCredentialpasswordId(logArchiveId, id)

/credential/password/:id

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let id = "id_example"; // String | id
apiInstance.logArchiveDeleteCredentialpasswordId(logArchiveId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **id** | **String**| id | 

### Return type

[**LogArchive**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchiveDeleteTagKey"></a>
# **logArchiveDeleteTagKey**
> Object logArchiveDeleteTagKey(logArchiveId, key)

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let key = "key_example"; // String | key
apiInstance.logArchiveDeleteTagKey(logArchiveId, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **key** | **String**| key | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchiveGetCredentialcertificateId"></a>
# **logArchiveGetCredentialcertificateId**
> CredentialCertificate logArchiveGetCredentialcertificateId(logArchiveId, id)

/credential/certificate/:id

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let id = "id_example"; // String | id
apiInstance.logArchiveGetCredentialcertificateId(logArchiveId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **id** | **String**| id | 

### Return type

[**CredentialCertificate**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchiveGetCredentialpasswordId"></a>
# **logArchiveGetCredentialpasswordId**
> CredentialPassword logArchiveGetCredentialpasswordId(logArchiveId, id)

/credential/password/:id

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let id = "id_example"; // String | id
apiInstance.logArchiveGetCredentialpasswordId(logArchiveId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **id** | **String**| id | 

### Return type

[**CredentialPassword**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchiveGetServicesServiceId"></a>
# **logArchiveGetServicesServiceId**
> LogArchiveServices logArchiveGetServicesServiceId(logArchiveId, serviceId)

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let serviceId = "serviceId_example"; // String | serviceId
apiInstance.logArchiveGetServicesServiceId(logArchiveId, serviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **serviceId** | **String**| serviceId | 

### Return type

[**LogArchiveServices**](LogArchiveServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchiveGetTag"></a>
# **logArchiveGetTag**
> Object logArchiveGetTag(logArchiveId)

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveGetTag(logArchiveId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchiveList"></a>
# **logArchiveList**
> [LogArchive] logArchiveList(opts)

List

List logArchive

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let opts = {
  'name': "name_example" // String | Filter by name
};
apiInstance.logArchiveList(opts).then((data) => {
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

[**[LogArchive]**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchiveListAccessrights"></a>
# **logArchiveListAccessrights**
> [String] logArchiveListAccessrights(logArchiveId)

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveListAccessrights(logArchiveId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchiveListCredentialcertificate"></a>
# **logArchiveListCredentialcertificate**
> [CredentialCertificate] logArchiveListCredentialcertificate(logArchiveId)

/credential/certificate

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveListCredentialcertificate(logArchiveId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

[**[CredentialCertificate]**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchiveListCredentialpassword"></a>
# **logArchiveListCredentialpassword**
> [CredentialPassword] logArchiveListCredentialpassword(logArchiveId)

/credential/password

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveListCredentialpassword(logArchiveId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

[**[CredentialPassword]**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchiveListQueue"></a>
# **logArchiveListQueue**
> [Event] logArchiveListQueue(logArchiveId)

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveListQueue(logArchiveId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchiveListServices"></a>
# **logArchiveListServices**
> [LogArchiveServices] logArchiveListServices(logArchiveId)

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveListServices(logArchiveId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

[**[LogArchiveServices]**](LogArchiveServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchivePatchCredentialcertificateId"></a>
# **logArchivePatchCredentialcertificateId**
> CredentialCertificate logArchivePatchCredentialcertificateId(logArchiveId, id, logArchivePatchCredentialcertificateId)

/credential/certificate/:id

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let id = "id_example"; // String | id
let logArchivePatchCredentialcertificateId = new HyperOneApi.LogArchivePatchCredentialcertificateId(); // LogArchivePatchCredentialcertificateId | 
apiInstance.logArchivePatchCredentialcertificateId(logArchiveId, id, logArchivePatchCredentialcertificateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **id** | **String**| id | 
 **logArchivePatchCredentialcertificateId** | [**LogArchivePatchCredentialcertificateId**](LogArchivePatchCredentialcertificateId.md)|  | 

### Return type

[**CredentialCertificate**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logArchivePatchCredentialpasswordId"></a>
# **logArchivePatchCredentialpasswordId**
> CredentialPassword logArchivePatchCredentialpasswordId(logArchiveId, id, logArchivePatchCredentialpasswordId)

/credential/password/:id

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let id = "id_example"; // String | id
let logArchivePatchCredentialpasswordId = new HyperOneApi.LogArchivePatchCredentialpasswordId(); // LogArchivePatchCredentialpasswordId | 
apiInstance.logArchivePatchCredentialpasswordId(logArchiveId, id, logArchivePatchCredentialpasswordId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **id** | **String**| id | 
 **logArchivePatchCredentialpasswordId** | [**LogArchivePatchCredentialpasswordId**](LogArchivePatchCredentialpasswordId.md)|  | 

### Return type

[**CredentialPassword**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logArchivePatchTag"></a>
# **logArchivePatchTag**
> Object logArchivePatchTag(logArchiveId, body)

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let body = null; // Object | 
apiInstance.logArchivePatchTag(logArchiveId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logArchivePostAccessrights"></a>
# **logArchivePostAccessrights**
> String logArchivePostAccessrights(logArchiveId, logArchivePostAccessrights)

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let logArchivePostAccessrights = new HyperOneApi.LogArchivePostAccessrights(); // LogArchivePostAccessrights | 
apiInstance.logArchivePostAccessrights(logArchiveId, logArchivePostAccessrights).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **logArchivePostAccessrights** | [**LogArchivePostAccessrights**](LogArchivePostAccessrights.md)|  | 

### Return type

**String**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logArchivePostCredentialcertificate"></a>
# **logArchivePostCredentialcertificate**
> CredentialCertificate logArchivePostCredentialcertificate(logArchiveId, logArchivePostCredentialcertificate)

/credential/certificate

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let logArchivePostCredentialcertificate = new HyperOneApi.LogArchivePostCredentialcertificate(); // LogArchivePostCredentialcertificate | 
apiInstance.logArchivePostCredentialcertificate(logArchiveId, logArchivePostCredentialcertificate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **logArchivePostCredentialcertificate** | [**LogArchivePostCredentialcertificate**](LogArchivePostCredentialcertificate.md)|  | 

### Return type

[**CredentialCertificate**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logArchivePostCredentialpassword"></a>
# **logArchivePostCredentialpassword**
> CredentialPassword logArchivePostCredentialpassword(logArchiveId, logArchivePostCredentialpassword)

/credential/password

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let logArchivePostCredentialpassword = new HyperOneApi.LogArchivePostCredentialpassword(); // LogArchivePostCredentialpassword | 
apiInstance.logArchivePostCredentialpassword(logArchiveId, logArchivePostCredentialpassword).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **logArchivePostCredentialpassword** | [**LogArchivePostCredentialpassword**](LogArchivePostCredentialpassword.md)|  | 

### Return type

[**CredentialPassword**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logArchiveShow"></a>
# **logArchiveShow**
> LogArchive logArchiveShow(logArchiveId)

Get

Returns a single logArchive

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
apiInstance.logArchiveShow(logArchiveId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 

### Return type

[**LogArchive**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="logArchiveUpdate"></a>
# **logArchiveUpdate**
> LogArchive logArchiveUpdate(logArchiveId, logArchiveUpdate)

Update

Returns modified logArchive

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

let apiInstance = new HyperOneApi.LogArchiveApi();
let logArchiveId = "logArchiveId_example"; // String | ID of logArchive
let logArchiveUpdate = new HyperOneApi.LogArchiveUpdate(); // LogArchiveUpdate | 
apiInstance.logArchiveUpdate(logArchiveId, logArchiveUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logArchiveId** | **String**| ID of logArchive | 
 **logArchiveUpdate** | [**LogArchiveUpdate**](LogArchiveUpdate.md)|  | 

### Return type

[**LogArchive**](LogArchive.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

