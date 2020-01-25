# HyperoneClient.VaultApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vaultActionResize**](VaultApi.md#vaultActionResize) | **POST** /vault/{vaultId}/actions/resize | /actions/resize
[**vaultActionSnapshot**](VaultApi.md#vaultActionSnapshot) | **POST** /vault/{vaultId}/actions/snapshot | /actions/snapshot
[**vaultActionStart**](VaultApi.md#vaultActionStart) | **POST** /vault/{vaultId}/actions/start | /actions/start
[**vaultActionStop**](VaultApi.md#vaultActionStop) | **POST** /vault/{vaultId}/actions/stop | /actions/stop
[**vaultCreate**](VaultApi.md#vaultCreate) | **POST** /vault | Create
[**vaultDelete**](VaultApi.md#vaultDelete) | **DELETE** /vault/{vaultId} | Delete
[**vaultDeleteAccessrightsIdentity**](VaultApi.md#vaultDeleteAccessrightsIdentity) | **DELETE** /vault/{vaultId}/accessrights/{identity} | /accessrights/:identity
[**vaultDeleteCredentialId**](VaultApi.md#vaultDeleteCredentialId) | **DELETE** /vault/{vaultId}/credential/{id} | /credential/:id
[**vaultDeleteCredentialcertificateId**](VaultApi.md#vaultDeleteCredentialcertificateId) | **DELETE** /vault/{vaultId}/credential/certificate/{id} | /credential/certificate/:id
[**vaultDeleteCredentialpasswordId**](VaultApi.md#vaultDeleteCredentialpasswordId) | **DELETE** /vault/{vaultId}/credential/password/{id} | /credential/password/:id
[**vaultDeleteTagKey**](VaultApi.md#vaultDeleteTagKey) | **DELETE** /vault/{vaultId}/tag/{key} | /tag/:key
[**vaultGetCredentialId**](VaultApi.md#vaultGetCredentialId) | **GET** /vault/{vaultId}/credential/{id} | /credential/:id
[**vaultGetCredentialcertificateId**](VaultApi.md#vaultGetCredentialcertificateId) | **GET** /vault/{vaultId}/credential/certificate/{id} | /credential/certificate/:id
[**vaultGetCredentialpasswordId**](VaultApi.md#vaultGetCredentialpasswordId) | **GET** /vault/{vaultId}/credential/password/{id} | /credential/password/:id
[**vaultGetServicesServiceId**](VaultApi.md#vaultGetServicesServiceId) | **GET** /vault/{vaultId}/services/{serviceId} | /services/:serviceId
[**vaultGetTag**](VaultApi.md#vaultGetTag) | **GET** /vault/{vaultId}/tag | /tag
[**vaultList**](VaultApi.md#vaultList) | **GET** /vault | List
[**vaultListAccessrights**](VaultApi.md#vaultListAccessrights) | **GET** /vault/{vaultId}/accessrights | /accessrights
[**vaultListCredential**](VaultApi.md#vaultListCredential) | **GET** /vault/{vaultId}/credential | /credential
[**vaultListCredentialcertificate**](VaultApi.md#vaultListCredentialcertificate) | **GET** /vault/{vaultId}/credential/certificate | /credential/certificate
[**vaultListCredentialpassword**](VaultApi.md#vaultListCredentialpassword) | **GET** /vault/{vaultId}/credential/password | /credential/password
[**vaultListQueue**](VaultApi.md#vaultListQueue) | **GET** /vault/{vaultId}/queue | /queue
[**vaultListServices**](VaultApi.md#vaultListServices) | **GET** /vault/{vaultId}/services | /services
[**vaultPatchCredentialId**](VaultApi.md#vaultPatchCredentialId) | **PATCH** /vault/{vaultId}/credential/{id} | /credential/:id
[**vaultPatchCredentialcertificateId**](VaultApi.md#vaultPatchCredentialcertificateId) | **PATCH** /vault/{vaultId}/credential/certificate/{id} | /credential/certificate/:id
[**vaultPatchCredentialpasswordId**](VaultApi.md#vaultPatchCredentialpasswordId) | **PATCH** /vault/{vaultId}/credential/password/{id} | /credential/password/:id
[**vaultPatchTag**](VaultApi.md#vaultPatchTag) | **PATCH** /vault/{vaultId}/tag | /tag
[**vaultPostAccessrights**](VaultApi.md#vaultPostAccessrights) | **POST** /vault/{vaultId}/accessrights | /accessrights
[**vaultPostCredential**](VaultApi.md#vaultPostCredential) | **POST** /vault/{vaultId}/credential | /credential
[**vaultPostCredentialcertificate**](VaultApi.md#vaultPostCredentialcertificate) | **POST** /vault/{vaultId}/credential/certificate | /credential/certificate
[**vaultPostCredentialpassword**](VaultApi.md#vaultPostCredentialpassword) | **POST** /vault/{vaultId}/credential/password | /credential/password
[**vaultPutTag**](VaultApi.md#vaultPutTag) | **PUT** /vault/{vaultId}/tag | /tag
[**vaultShow**](VaultApi.md#vaultShow) | **GET** /vault/{vaultId} | Get
[**vaultUpdate**](VaultApi.md#vaultUpdate) | **PATCH** /vault/{vaultId} | Update



## vaultActionResize

> Vault vaultActionResize(vaultId, vaultActionResize, opts)

/actions/resize

Action resize

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let vaultActionResize = new HyperoneClient.VaultActionResize(); // VaultActionResize | 
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.vaultActionResize(vaultId, vaultActionResize, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **vaultActionResize** | [**VaultActionResize**](VaultActionResize.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Vault**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vaultActionSnapshot

> Vault vaultActionSnapshot(vaultId, vaultActionSnapshot, opts)

/actions/snapshot

Action snapshot

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let vaultActionSnapshot = new HyperoneClient.VaultActionSnapshot(); // VaultActionSnapshot | 
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.vaultActionSnapshot(vaultId, vaultActionSnapshot, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **vaultActionSnapshot** | [**VaultActionSnapshot**](VaultActionSnapshot.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Vault**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vaultActionStart

> Vault vaultActionStart(vaultId, opts)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.vaultActionStart(vaultId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Vault**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultActionStop

> Vault vaultActionStop(vaultId, opts)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.vaultActionStop(vaultId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Vault**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultCreate

> Vault vaultCreate(vaultCreate, opts)

Create

Create vault

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultCreate = new HyperoneClient.VaultCreate(); // VaultCreate | 
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.vaultCreate(vaultCreate, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultCreate** | [**VaultCreate**](VaultCreate.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Vault**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vaultDelete

> vaultDelete(vaultId, vaultDelete)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let vaultDelete = new HyperoneClient.VaultDelete(); // VaultDelete | 
apiInstance.vaultDelete(vaultId, vaultDelete).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **vaultDelete** | [**VaultDelete**](VaultDelete.md)|  | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vaultDeleteAccessrightsIdentity

> Vault vaultDeleteAccessrightsIdentity(vaultId, identity)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let identity = "identity_example"; // String | identity
apiInstance.vaultDeleteAccessrightsIdentity(vaultId, identity).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **identity** | **String**| identity | 

### Return type

[**Vault**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultDeleteCredentialId

> Vault vaultDeleteCredentialId(vaultId, id)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let id = "id_example"; // String | id
apiInstance.vaultDeleteCredentialId(vaultId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **id** | **String**| id | 

### Return type

[**Vault**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultDeleteCredentialcertificateId

> InlineResponse2003 vaultDeleteCredentialcertificateId(vaultId, id)

/credential/certificate/:id

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let id = "id_example"; // String | id
apiInstance.vaultDeleteCredentialcertificateId(vaultId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **id** | **String**| id | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultDeleteCredentialpasswordId

> Vault vaultDeleteCredentialpasswordId(vaultId, id)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let id = "id_example"; // String | id
apiInstance.vaultDeleteCredentialpasswordId(vaultId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **id** | **String**| id | 

### Return type

[**Vault**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultDeleteTagKey

> {String: String} vaultDeleteTagKey(vaultId, key)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let key = "key_example"; // String | key
apiInstance.vaultDeleteTagKey(vaultId, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **key** | **String**| key | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultGetCredentialId

> Credential vaultGetCredentialId(vaultId, id)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let id = "id_example"; // String | id
apiInstance.vaultGetCredentialId(vaultId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **id** | **String**| id | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultGetCredentialcertificateId

> Credential vaultGetCredentialcertificateId(vaultId, id)

/credential/certificate/:id

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let id = "id_example"; // String | id
apiInstance.vaultGetCredentialcertificateId(vaultId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **id** | **String**| id | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultGetCredentialpasswordId

> Credential vaultGetCredentialpasswordId(vaultId, id)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let id = "id_example"; // String | id
apiInstance.vaultGetCredentialpasswordId(vaultId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **id** | **String**| id | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultGetServicesServiceId

> VaultServices vaultGetServicesServiceId(vaultId, serviceId)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let serviceId = "serviceId_example"; // String | serviceId
apiInstance.vaultGetServicesServiceId(vaultId, serviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **serviceId** | **String**| serviceId | 

### Return type

[**VaultServices**](VaultServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultGetTag

> {String: String} vaultGetTag(vaultId)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultGetTag(vaultId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultList

> [Vault] vaultList(opts)

List

List vault

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

let apiInstance = new HyperoneClient.VaultApi();
let opts = {
  'name': "name_example", // String | Filter by name
  'tag': {key: "null"} // {String: String} | Filter by tag
};
apiInstance.vaultList(opts).then((data) => {
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

[**[Vault]**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultListAccessrights

> [String] vaultListAccessrights(vaultId)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultListAccessrights(vaultId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultListCredential

> [Credential] vaultListCredential(vaultId)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultListCredential(vaultId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 

### Return type

[**[Credential]**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultListCredentialcertificate

> [Credential] vaultListCredentialcertificate(vaultId)

/credential/certificate

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultListCredentialcertificate(vaultId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 

### Return type

[**[Credential]**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultListCredentialpassword

> [Credential] vaultListCredentialpassword(vaultId)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultListCredentialpassword(vaultId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 

### Return type

[**[Credential]**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultListQueue

> [Event] vaultListQueue(vaultId, opts)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let opts = {
  'limit': 3.4, // Number | $limit
  'skip': 3.4 // Number | $skip
};
apiInstance.vaultListQueue(vaultId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **limit** | **Number**| $limit | [optional] 
 **skip** | **Number**| $skip | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultListServices

> [VaultServices] vaultListServices(vaultId)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultListServices(vaultId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 

### Return type

[**[VaultServices]**](VaultServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultPatchCredentialId

> Credential vaultPatchCredentialId(vaultId, id, vaultPatchCredentialId)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let id = "id_example"; // String | id
let vaultPatchCredentialId = new HyperoneClient.VaultPatchCredentialId(); // VaultPatchCredentialId | 
apiInstance.vaultPatchCredentialId(vaultId, id, vaultPatchCredentialId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **id** | **String**| id | 
 **vaultPatchCredentialId** | [**VaultPatchCredentialId**](VaultPatchCredentialId.md)|  | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vaultPatchCredentialcertificateId

> Credential vaultPatchCredentialcertificateId(vaultId, id, vaultPatchCredentialcertificateId)

/credential/certificate/:id

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let id = "id_example"; // String | id
let vaultPatchCredentialcertificateId = new HyperoneClient.VaultPatchCredentialcertificateId(); // VaultPatchCredentialcertificateId | 
apiInstance.vaultPatchCredentialcertificateId(vaultId, id, vaultPatchCredentialcertificateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **id** | **String**| id | 
 **vaultPatchCredentialcertificateId** | [**VaultPatchCredentialcertificateId**](VaultPatchCredentialcertificateId.md)|  | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vaultPatchCredentialpasswordId

> Credential vaultPatchCredentialpasswordId(vaultId, id, vaultPatchCredentialpasswordId)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let id = "id_example"; // String | id
let vaultPatchCredentialpasswordId = new HyperoneClient.VaultPatchCredentialpasswordId(); // VaultPatchCredentialpasswordId | 
apiInstance.vaultPatchCredentialpasswordId(vaultId, id, vaultPatchCredentialpasswordId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **id** | **String**| id | 
 **vaultPatchCredentialpasswordId** | [**VaultPatchCredentialpasswordId**](VaultPatchCredentialpasswordId.md)|  | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vaultPatchTag

> {String: String} vaultPatchTag(vaultId, requestBody)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let requestBody = {key: "null"}; // {String: String} | 
apiInstance.vaultPatchTag(vaultId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vaultPostAccessrights

> Vault vaultPostAccessrights(vaultId, vaultPostAccessrights)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let vaultPostAccessrights = new HyperoneClient.VaultPostAccessrights(); // VaultPostAccessrights | 
apiInstance.vaultPostAccessrights(vaultId, vaultPostAccessrights).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **vaultPostAccessrights** | [**VaultPostAccessrights**](VaultPostAccessrights.md)|  | 

### Return type

[**Vault**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vaultPostCredential

> Credential vaultPostCredential(vaultId, vaultPostCredential)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let vaultPostCredential = new HyperoneClient.VaultPostCredential(); // VaultPostCredential | 
apiInstance.vaultPostCredential(vaultId, vaultPostCredential).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **vaultPostCredential** | [**VaultPostCredential**](VaultPostCredential.md)|  | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vaultPostCredentialcertificate

> Credential vaultPostCredentialcertificate(vaultId, vaultPostCredentialcertificate)

/credential/certificate

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let vaultPostCredentialcertificate = new HyperoneClient.VaultPostCredentialcertificate(); // VaultPostCredentialcertificate | 
apiInstance.vaultPostCredentialcertificate(vaultId, vaultPostCredentialcertificate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **vaultPostCredentialcertificate** | [**VaultPostCredentialcertificate**](VaultPostCredentialcertificate.md)|  | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vaultPostCredentialpassword

> Credential vaultPostCredentialpassword(vaultId, vaultPostCredentialpassword)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let vaultPostCredentialpassword = new HyperoneClient.VaultPostCredentialpassword(); // VaultPostCredentialpassword | 
apiInstance.vaultPostCredentialpassword(vaultId, vaultPostCredentialpassword).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **vaultPostCredentialpassword** | [**VaultPostCredentialpassword**](VaultPostCredentialpassword.md)|  | 

### Return type

[**Credential**](Credential.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vaultPutTag

> {String: String} vaultPutTag(vaultId, requestBody)

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let requestBody = {key: "null"}; // {String: String} | 
apiInstance.vaultPutTag(vaultId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## vaultShow

> Vault vaultShow(vaultId)

Get

Returns a single vault

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultShow(vaultId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 

### Return type

[**Vault**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## vaultUpdate

> Vault vaultUpdate(vaultId, vaultUpdate)

Update

Returns modified vault

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

let apiInstance = new HyperoneClient.VaultApi();
let vaultId = "vaultId_example"; // String | ID of vault
let vaultUpdate = new HyperoneClient.VaultUpdate(); // VaultUpdate | 
apiInstance.vaultUpdate(vaultId, vaultUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **vaultUpdate** | [**VaultUpdate**](VaultUpdate.md)|  | 

### Return type

[**Vault**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

