# HyperoneClient.RegistryApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registryActionStart**](RegistryApi.md#registryActionStart) | **POST** /registry/{registryId}/actions/start | /actions/start
[**registryActionStop**](RegistryApi.md#registryActionStop) | **POST** /registry/{registryId}/actions/stop | /actions/stop
[**registryActionTransfer**](RegistryApi.md#registryActionTransfer) | **POST** /registry/{registryId}/actions/transfer | /actions/transfer
[**registryActionUpdateDomain**](RegistryApi.md#registryActionUpdateDomain) | **POST** /registry/{registryId}/actions/update_domain | /actions/update_domain
[**registryCreate**](RegistryApi.md#registryCreate) | **POST** /registry | Create
[**registryDelete**](RegistryApi.md#registryDelete) | **DELETE** /registry/{registryId} | Delete
[**registryDeleteAccessrightsIdentity**](RegistryApi.md#registryDeleteAccessrightsIdentity) | **DELETE** /registry/{registryId}/accessrights/{identity} | /accessrights/:identity
[**registryDeleteCredentialId**](RegistryApi.md#registryDeleteCredentialId) | **DELETE** /registry/{registryId}/credential/{id} | /credential/:id
[**registryDeleteCredentialpasswordId**](RegistryApi.md#registryDeleteCredentialpasswordId) | **DELETE** /registry/{registryId}/credential/password/{id} | /credential/password/:id
[**registryDeleteRepositoryRepositoryIdtagTagId**](RegistryApi.md#registryDeleteRepositoryRepositoryIdtagTagId) | **DELETE** /registry/{registryId}/repository/{repositoryId}/tag/{tagId} | /repository/:repositoryId/tag/:tagId
[**registryDeleteTagKey**](RegistryApi.md#registryDeleteTagKey) | **DELETE** /registry/{registryId}/tag/{key} | /tag/:key
[**registryGetCredentialId**](RegistryApi.md#registryGetCredentialId) | **GET** /registry/{registryId}/credential/{id} | /credential/:id
[**registryGetCredentialpasswordId**](RegistryApi.md#registryGetCredentialpasswordId) | **GET** /registry/{registryId}/credential/password/{id} | /credential/password/:id
[**registryGetRepositoryRepositoryId**](RegistryApi.md#registryGetRepositoryRepositoryId) | **GET** /registry/{registryId}/repository/{repositoryId} | /repository/:repositoryId
[**registryGetRepositoryRepositoryIdtagTagId**](RegistryApi.md#registryGetRepositoryRepositoryIdtagTagId) | **GET** /registry/{registryId}/repository/{repositoryId}/tag/{tagId} | /repository/:repositoryId/tag/:tagId
[**registryGetServicesServiceId**](RegistryApi.md#registryGetServicesServiceId) | **GET** /registry/{registryId}/services/{serviceId} | /services/:serviceId
[**registryGetTag**](RegistryApi.md#registryGetTag) | **GET** /registry/{registryId}/tag | /tag
[**registryList**](RegistryApi.md#registryList) | **GET** /registry | List
[**registryListAccessrights**](RegistryApi.md#registryListAccessrights) | **GET** /registry/{registryId}/accessrights | /accessrights
[**registryListCredential**](RegistryApi.md#registryListCredential) | **GET** /registry/{registryId}/credential | /credential
[**registryListCredentialpassword**](RegistryApi.md#registryListCredentialpassword) | **GET** /registry/{registryId}/credential/password | /credential/password
[**registryListQueue**](RegistryApi.md#registryListQueue) | **GET** /registry/{registryId}/queue | /queue
[**registryListRepository**](RegistryApi.md#registryListRepository) | **GET** /registry/{registryId}/repository | /repository
[**registryListRepositoryRepositoryIdtag**](RegistryApi.md#registryListRepositoryRepositoryIdtag) | **GET** /registry/{registryId}/repository/{repositoryId}/tag | /repository/:repositoryId/tag
[**registryListServices**](RegistryApi.md#registryListServices) | **GET** /registry/{registryId}/services | /services
[**registryPatchCredentialId**](RegistryApi.md#registryPatchCredentialId) | **PATCH** /registry/{registryId}/credential/{id} | /credential/:id
[**registryPatchCredentialpasswordId**](RegistryApi.md#registryPatchCredentialpasswordId) | **PATCH** /registry/{registryId}/credential/password/{id} | /credential/password/:id
[**registryPatchTag**](RegistryApi.md#registryPatchTag) | **PATCH** /registry/{registryId}/tag | /tag
[**registryPostAccessrights**](RegistryApi.md#registryPostAccessrights) | **POST** /registry/{registryId}/accessrights | /accessrights
[**registryPostCredential**](RegistryApi.md#registryPostCredential) | **POST** /registry/{registryId}/credential | /credential
[**registryPostCredentialpassword**](RegistryApi.md#registryPostCredentialpassword) | **POST** /registry/{registryId}/credential/password | /credential/password
[**registryPutTag**](RegistryApi.md#registryPutTag) | **PUT** /registry/{registryId}/tag | /tag
[**registryShow**](RegistryApi.md#registryShow) | **GET** /registry/{registryId} | Get
[**registryUpdate**](RegistryApi.md#registryUpdate) | **PATCH** /registry/{registryId} | Update



## registryActionStart

> Registry registryActionStart(registryId, opts)

/actions/start

Action start

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.registryActionStart(registryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Registry**](Registry.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryActionStop

> Registry registryActionStop(registryId, opts)

/actions/stop

Action stop

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.registryActionStop(registryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Registry**](Registry.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryActionTransfer

> Registry registryActionTransfer(registryId, registryActionTransfer, opts)

/actions/transfer

Action transfer

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let registryActionTransfer = new HyperoneClient.RegistryActionTransfer(); // RegistryActionTransfer | 
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.registryActionTransfer(registryId, registryActionTransfer, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **registryActionTransfer** | [**RegistryActionTransfer**](RegistryActionTransfer.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Registry**](Registry.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registryActionUpdateDomain

> Registry registryActionUpdateDomain(registryId, registryActionUpdateDomain, opts)

/actions/update_domain

Action update_domain

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let registryActionUpdateDomain = new HyperoneClient.RegistryActionUpdateDomain(); // RegistryActionUpdateDomain | 
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.registryActionUpdateDomain(registryId, registryActionUpdateDomain, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **registryActionUpdateDomain** | [**RegistryActionUpdateDomain**](RegistryActionUpdateDomain.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Registry**](Registry.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registryCreate

> Registry registryCreate(registryCreate, opts)

Create

Create registry

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryCreate = new HyperoneClient.RegistryCreate(); // RegistryCreate | 
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.registryCreate(registryCreate, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryCreate** | [**RegistryCreate**](RegistryCreate.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Registry**](Registry.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registryDelete

> registryDelete(registryId)

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
apiInstance.registryDelete(registryId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryDeleteAccessrightsIdentity

> Registry registryDeleteAccessrightsIdentity(registryId, identity)

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let identity = "identity_example"; // String | identity
apiInstance.registryDeleteAccessrightsIdentity(registryId, identity).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **identity** | **String**| identity | 

### Return type

[**Registry**](Registry.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryDeleteCredentialId

> Registry registryDeleteCredentialId(registryId, id)

/credential/:id

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let id = "id_example"; // String | id
apiInstance.registryDeleteCredentialId(registryId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **id** | **String**| id | 

### Return type

[**Registry**](Registry.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryDeleteCredentialpasswordId

> Registry registryDeleteCredentialpasswordId(registryId, id)

/credential/password/:id

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let id = "id_example"; // String | id
apiInstance.registryDeleteCredentialpasswordId(registryId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **id** | **String**| id | 

### Return type

[**Registry**](Registry.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryDeleteRepositoryRepositoryIdtagTagId

> registryDeleteRepositoryRepositoryIdtagTagId(registryId, repositoryId, tagId)

/repository/:repositoryId/tag/:tagId

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let repositoryId = "repositoryId_example"; // String | repositoryId
let tagId = "tagId_example"; // String | tagId
apiInstance.registryDeleteRepositoryRepositoryIdtagTagId(registryId, repositoryId, tagId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **repositoryId** | **String**| repositoryId | 
 **tagId** | **String**| tagId | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryDeleteTagKey

> {String: String} registryDeleteTagKey(registryId, key)

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let key = "key_example"; // String | key
apiInstance.registryDeleteTagKey(registryId, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **key** | **String**| key | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryGetCredentialId

> Credential registryGetCredentialId(registryId, id)

/credential/:id

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let id = "id_example"; // String | id
apiInstance.registryGetCredentialId(registryId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **id** | **String**| id | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryGetCredentialpasswordId

> Credential registryGetCredentialpasswordId(registryId, id)

/credential/password/:id

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let id = "id_example"; // String | id
apiInstance.registryGetCredentialpasswordId(registryId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **id** | **String**| id | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryGetRepositoryRepositoryId

> registryGetRepositoryRepositoryId(registryId, repositoryId)

/repository/:repositoryId

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let repositoryId = "repositoryId_example"; // String | repositoryId
apiInstance.registryGetRepositoryRepositoryId(registryId, repositoryId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **repositoryId** | **String**| repositoryId | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryGetRepositoryRepositoryIdtagTagId

> registryGetRepositoryRepositoryIdtagTagId(registryId, repositoryId, tagId)

/repository/:repositoryId/tag/:tagId

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let repositoryId = "repositoryId_example"; // String | repositoryId
let tagId = "tagId_example"; // String | tagId
apiInstance.registryGetRepositoryRepositoryIdtagTagId(registryId, repositoryId, tagId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **repositoryId** | **String**| repositoryId | 
 **tagId** | **String**| tagId | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryGetServicesServiceId

> RegistryServices registryGetServicesServiceId(registryId, serviceId)

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let serviceId = "serviceId_example"; // String | serviceId
apiInstance.registryGetServicesServiceId(registryId, serviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **serviceId** | **String**| serviceId | 

### Return type

[**RegistryServices**](RegistryServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryGetTag

> {String: String} registryGetTag(registryId)

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
apiInstance.registryGetTag(registryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryList

> [Registry] registryList(opts)

List

List registry

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

let apiInstance = new HyperoneClient.RegistryApi();
let opts = {
  'name': "name_example", // String | Filter by name
  'tag': {key: "null"} // {String: String} | Filter by tag
};
apiInstance.registryList(opts).then((data) => {
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

[**[Registry]**](Registry.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryListAccessrights

> [String] registryListAccessrights(registryId)

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
apiInstance.registryListAccessrights(registryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryListCredential

> [Credential] registryListCredential(registryId)

/credential

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
apiInstance.registryListCredential(registryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 

### Return type

[**[Credential]**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryListCredentialpassword

> [Credential] registryListCredentialpassword(registryId)

/credential/password

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
apiInstance.registryListCredentialpassword(registryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 

### Return type

[**[Credential]**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryListQueue

> [Event] registryListQueue(registryId, opts)

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let opts = {
  'limit': 3.4, // Number | $limit
  'skip': 3.4 // Number | $skip
};
apiInstance.registryListQueue(registryId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **limit** | **Number**| $limit | [optional] 
 **skip** | **Number**| $skip | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryListRepository

> registryListRepository(registryId)

/repository

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
apiInstance.registryListRepository(registryId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryListRepositoryRepositoryIdtag

> registryListRepositoryRepositoryIdtag(registryId, repositoryId)

/repository/:repositoryId/tag

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let repositoryId = "repositoryId_example"; // String | repositoryId
apiInstance.registryListRepositoryRepositoryIdtag(registryId, repositoryId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **repositoryId** | **String**| repositoryId | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryListServices

> [RegistryServices] registryListServices(registryId)

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
apiInstance.registryListServices(registryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 

### Return type

[**[RegistryServices]**](RegistryServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryPatchCredentialId

> Credential registryPatchCredentialId(registryId, id, registryPatchCredentialId)

/credential/:id

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let id = "id_example"; // String | id
let registryPatchCredentialId = new HyperoneClient.RegistryPatchCredentialId(); // RegistryPatchCredentialId | 
apiInstance.registryPatchCredentialId(registryId, id, registryPatchCredentialId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **id** | **String**| id | 
 **registryPatchCredentialId** | [**RegistryPatchCredentialId**](RegistryPatchCredentialId.md)|  | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registryPatchCredentialpasswordId

> Credential registryPatchCredentialpasswordId(registryId, id, registryPatchCredentialpasswordId)

/credential/password/:id

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let id = "id_example"; // String | id
let registryPatchCredentialpasswordId = new HyperoneClient.RegistryPatchCredentialpasswordId(); // RegistryPatchCredentialpasswordId | 
apiInstance.registryPatchCredentialpasswordId(registryId, id, registryPatchCredentialpasswordId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **id** | **String**| id | 
 **registryPatchCredentialpasswordId** | [**RegistryPatchCredentialpasswordId**](RegistryPatchCredentialpasswordId.md)|  | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registryPatchTag

> {String: String} registryPatchTag(registryId, requestBody)

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let requestBody = {key: "null"}; // {String: String} | 
apiInstance.registryPatchTag(registryId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registryPostAccessrights

> Registry registryPostAccessrights(registryId, registryPostAccessrights)

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let registryPostAccessrights = new HyperoneClient.RegistryPostAccessrights(); // RegistryPostAccessrights | 
apiInstance.registryPostAccessrights(registryId, registryPostAccessrights).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **registryPostAccessrights** | [**RegistryPostAccessrights**](RegistryPostAccessrights.md)|  | 

### Return type

[**Registry**](Registry.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registryPostCredential

> Credential registryPostCredential(registryId, registryPostCredential)

/credential

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let registryPostCredential = new HyperoneClient.RegistryPostCredential(); // RegistryPostCredential | 
apiInstance.registryPostCredential(registryId, registryPostCredential).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **registryPostCredential** | [**RegistryPostCredential**](RegistryPostCredential.md)|  | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registryPostCredentialpassword

> Credential registryPostCredentialpassword(registryId, registryPostCredentialpassword)

/credential/password

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let registryPostCredentialpassword = new HyperoneClient.RegistryPostCredentialpassword(); // RegistryPostCredentialpassword | 
apiInstance.registryPostCredentialpassword(registryId, registryPostCredentialpassword).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **registryPostCredentialpassword** | [**RegistryPostCredentialpassword**](RegistryPostCredentialpassword.md)|  | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registryPutTag

> {String: String} registryPutTag(registryId, requestBody)

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let requestBody = {key: "null"}; // {String: String} | 
apiInstance.registryPutTag(registryId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registryShow

> Registry registryShow(registryId)

Get

Returns a single registry

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
apiInstance.registryShow(registryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 

### Return type

[**Registry**](Registry.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registryUpdate

> Registry registryUpdate(registryId, registryUpdate)

Update

Returns modified registry

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

let apiInstance = new HyperoneClient.RegistryApi();
let registryId = "registryId_example"; // String | ID of registry
let registryUpdate = new HyperoneClient.RegistryUpdate(); // RegistryUpdate | 
apiInstance.registryUpdate(registryId, registryUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registryId** | **String**| ID of registry | 
 **registryUpdate** | [**RegistryUpdate**](RegistryUpdate.md)|  | 

### Return type

[**Registry**](Registry.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

