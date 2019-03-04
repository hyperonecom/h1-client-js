# HyperOneApi.VaultApi

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
[**vaultDeleteCredentialcertificateId**](VaultApi.md#vaultDeleteCredentialcertificateId) | **DELETE** /vault/{vaultId}/credential/certificate/{id} | /credential/certificate/:id
[**vaultDeleteCredentialpasswordId**](VaultApi.md#vaultDeleteCredentialpasswordId) | **DELETE** /vault/{vaultId}/credential/password/{id} | /credential/password/:id
[**vaultDeleteTagKey**](VaultApi.md#vaultDeleteTagKey) | **DELETE** /vault/{vaultId}/tag/{key} | /tag/:key
[**vaultGetCredentialcertificateId**](VaultApi.md#vaultGetCredentialcertificateId) | **GET** /vault/{vaultId}/credential/certificate/{id} | /credential/certificate/:id
[**vaultGetCredentialpasswordId**](VaultApi.md#vaultGetCredentialpasswordId) | **GET** /vault/{vaultId}/credential/password/{id} | /credential/password/:id
[**vaultGetServicesServiceId**](VaultApi.md#vaultGetServicesServiceId) | **GET** /vault/{vaultId}/services/{serviceId} | /services/:serviceId
[**vaultGetTag**](VaultApi.md#vaultGetTag) | **GET** /vault/{vaultId}/tag | /tag
[**vaultList**](VaultApi.md#vaultList) | **GET** /vault | List
[**vaultListAccessrights**](VaultApi.md#vaultListAccessrights) | **GET** /vault/{vaultId}/accessrights | /accessrights
[**vaultListCredentialcertificate**](VaultApi.md#vaultListCredentialcertificate) | **GET** /vault/{vaultId}/credential/certificate | /credential/certificate
[**vaultListCredentialpassword**](VaultApi.md#vaultListCredentialpassword) | **GET** /vault/{vaultId}/credential/password | /credential/password
[**vaultListQueue**](VaultApi.md#vaultListQueue) | **GET** /vault/{vaultId}/queue | /queue
[**vaultListServices**](VaultApi.md#vaultListServices) | **GET** /vault/{vaultId}/services | /services
[**vaultPatchCredentialcertificateId**](VaultApi.md#vaultPatchCredentialcertificateId) | **PATCH** /vault/{vaultId}/credential/certificate/{id} | /credential/certificate/:id
[**vaultPatchCredentialpasswordId**](VaultApi.md#vaultPatchCredentialpasswordId) | **PATCH** /vault/{vaultId}/credential/password/{id} | /credential/password/:id
[**vaultPatchTag**](VaultApi.md#vaultPatchTag) | **PATCH** /vault/{vaultId}/tag | /tag
[**vaultPostAccessrights**](VaultApi.md#vaultPostAccessrights) | **POST** /vault/{vaultId}/accessrights | /accessrights
[**vaultPostCredentialcertificate**](VaultApi.md#vaultPostCredentialcertificate) | **POST** /vault/{vaultId}/credential/certificate | /credential/certificate
[**vaultPostCredentialpassword**](VaultApi.md#vaultPostCredentialpassword) | **POST** /vault/{vaultId}/credential/password | /credential/password
[**vaultShow**](VaultApi.md#vaultShow) | **GET** /vault/{vaultId} | Get
[**vaultUpdate**](VaultApi.md#vaultUpdate) | **PATCH** /vault/{vaultId} | Update


<a name="vaultActionResize"></a>
# **vaultActionResize**
> Vault vaultActionResize(vaultId, vaultActionResize)

/actions/resize

Action resize

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var vaultActionResize = new HyperOneApi.VaultActionResize(); // VaultActionResize | 
apiInstance.vaultActionResize(vaultId, vaultActionResize).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **vaultActionResize** | [**VaultActionResize**](VaultActionResize.md)|  | 

### Return type

[**Vault**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vaultActionSnapshot"></a>
# **vaultActionSnapshot**
> Vault vaultActionSnapshot(vaultId, vaultActionSnapshot)

/actions/snapshot

Action snapshot

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var vaultActionSnapshot = new HyperOneApi.VaultActionSnapshot(); // VaultActionSnapshot | 
apiInstance.vaultActionSnapshot(vaultId, vaultActionSnapshot).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **vaultActionSnapshot** | [**VaultActionSnapshot**](VaultActionSnapshot.md)|  | 

### Return type

[**Vault**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vaultActionStart"></a>
# **vaultActionStart**
> Vault vaultActionStart(vaultId)

/actions/start

Action start

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultActionStart(vaultId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="vaultActionStop"></a>
# **vaultActionStop**
> Vault vaultActionStop(vaultId)

/actions/stop

Action stop

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultActionStop(vaultId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="vaultCreate"></a>
# **vaultCreate**
> Vault vaultCreate(vaultCreate)

Create

Create vault

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultCreate = new HyperOneApi.VaultCreate(); // VaultCreate | 
apiInstance.vaultCreate(vaultCreate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultCreate** | [**VaultCreate**](VaultCreate.md)|  | 

### Return type

[**Vault**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vaultDelete"></a>
# **vaultDelete**
> vaultDelete(vaultId, vaultDelete)

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var vaultDelete = new HyperOneApi.VaultDelete(); // VaultDelete | 
apiInstance.vaultDelete(vaultId, vaultDelete).then(function() {
  console.log('API called successfully.');
}, function(error) {
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
 - **Accept**: Not defined

<a name="vaultDeleteAccessrightsIdentity"></a>
# **vaultDeleteAccessrightsIdentity**
> Vault vaultDeleteAccessrightsIdentity(vaultId, identity)

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var identity = "identity_example"; // String | identity
apiInstance.vaultDeleteAccessrightsIdentity(vaultId, identity).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="vaultDeleteCredentialcertificateId"></a>
# **vaultDeleteCredentialcertificateId**
> Vault vaultDeleteCredentialcertificateId(vaultId, id)

/credential/certificate/:id

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var id = "id_example"; // String | id
apiInstance.vaultDeleteCredentialcertificateId(vaultId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="vaultDeleteCredentialpasswordId"></a>
# **vaultDeleteCredentialpasswordId**
> Vault vaultDeleteCredentialpasswordId(vaultId, id)

/credential/password/:id

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var id = "id_example"; // String | id
apiInstance.vaultDeleteCredentialpasswordId(vaultId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="vaultDeleteTagKey"></a>
# **vaultDeleteTagKey**
> Object vaultDeleteTagKey(vaultId, key)

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var key = "key_example"; // String | key
apiInstance.vaultDeleteTagKey(vaultId, key).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **key** | **String**| key | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vaultGetCredentialcertificateId"></a>
# **vaultGetCredentialcertificateId**
> CredentialCertificate vaultGetCredentialcertificateId(vaultId, id)

/credential/certificate/:id

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var id = "id_example"; // String | id
apiInstance.vaultGetCredentialcertificateId(vaultId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **id** | **String**| id | 

### Return type

[**CredentialCertificate**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vaultGetCredentialpasswordId"></a>
# **vaultGetCredentialpasswordId**
> CredentialPassword vaultGetCredentialpasswordId(vaultId, id)

/credential/password/:id

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var id = "id_example"; // String | id
apiInstance.vaultGetCredentialpasswordId(vaultId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **id** | **String**| id | 

### Return type

[**CredentialPassword**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vaultGetServicesServiceId"></a>
# **vaultGetServicesServiceId**
> VaultServices vaultGetServicesServiceId(vaultId, serviceId)

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var serviceId = "serviceId_example"; // String | serviceId
apiInstance.vaultGetServicesServiceId(vaultId, serviceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="vaultGetTag"></a>
# **vaultGetTag**
> Object vaultGetTag(vaultId)

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultGetTag(vaultId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vaultList"></a>
# **vaultList**
> [Vault] vaultList(opts)

List

List vault

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

var apiInstance = new HyperOneApi.VaultApi();
var opts = {
  'name': "name_example" // String | Filter by name
};
apiInstance.vaultList(opts).then(function(data) {
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

[**[Vault]**](Vault.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vaultListAccessrights"></a>
# **vaultListAccessrights**
> [String] vaultListAccessrights(vaultId)

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultListAccessrights(vaultId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="vaultListCredentialcertificate"></a>
# **vaultListCredentialcertificate**
> [CredentialCertificate] vaultListCredentialcertificate(vaultId)

/credential/certificate

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultListCredentialcertificate(vaultId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 

### Return type

[**[CredentialCertificate]**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vaultListCredentialpassword"></a>
# **vaultListCredentialpassword**
> [CredentialPassword] vaultListCredentialpassword(vaultId)

/credential/password

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultListCredentialpassword(vaultId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 

### Return type

[**[CredentialPassword]**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vaultListQueue"></a>
# **vaultListQueue**
> [Event] vaultListQueue(vaultId)

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultListQueue(vaultId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vaultListServices"></a>
# **vaultListServices**
> [VaultServices] vaultListServices(vaultId)

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultListServices(vaultId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="vaultPatchCredentialcertificateId"></a>
# **vaultPatchCredentialcertificateId**
> CredentialCertificate vaultPatchCredentialcertificateId(vaultId, id, vaultPatchCredentialcertificateId)

/credential/certificate/:id

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var id = "id_example"; // String | id
var vaultPatchCredentialcertificateId = new HyperOneApi.VaultPatchCredentialcertificateId(); // VaultPatchCredentialcertificateId | 
apiInstance.vaultPatchCredentialcertificateId(vaultId, id, vaultPatchCredentialcertificateId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

[**CredentialCertificate**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vaultPatchCredentialpasswordId"></a>
# **vaultPatchCredentialpasswordId**
> CredentialPassword vaultPatchCredentialpasswordId(vaultId, id, vaultPatchCredentialpasswordId)

/credential/password/:id

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var id = "id_example"; // String | id
var vaultPatchCredentialpasswordId = new HyperOneApi.VaultPatchCredentialpasswordId(); // VaultPatchCredentialpasswordId | 
apiInstance.vaultPatchCredentialpasswordId(vaultId, id, vaultPatchCredentialpasswordId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

[**CredentialPassword**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vaultPatchTag"></a>
# **vaultPatchTag**
> Object vaultPatchTag(vaultId, requestBody)

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.vaultPatchTag(vaultId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vaultPostAccessrights"></a>
# **vaultPostAccessrights**
> Vault vaultPostAccessrights(vaultId, vaultPostAccessrights)

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var vaultPostAccessrights = new HyperOneApi.VaultPostAccessrights(); // VaultPostAccessrights | 
apiInstance.vaultPostAccessrights(vaultId, vaultPostAccessrights).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="vaultPostCredentialcertificate"></a>
# **vaultPostCredentialcertificate**
> CredentialCertificate vaultPostCredentialcertificate(vaultId, vaultPostCredentialcertificate)

/credential/certificate

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var vaultPostCredentialcertificate = new HyperOneApi.VaultPostCredentialcertificate(); // VaultPostCredentialcertificate | 
apiInstance.vaultPostCredentialcertificate(vaultId, vaultPostCredentialcertificate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **vaultPostCredentialcertificate** | [**VaultPostCredentialcertificate**](VaultPostCredentialcertificate.md)|  | 

### Return type

[**CredentialCertificate**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vaultPostCredentialpassword"></a>
# **vaultPostCredentialpassword**
> CredentialPassword vaultPostCredentialpassword(vaultId, vaultPostCredentialpassword)

/credential/password

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var vaultPostCredentialpassword = new HyperOneApi.VaultPostCredentialpassword(); // VaultPostCredentialpassword | 
apiInstance.vaultPostCredentialpassword(vaultId, vaultPostCredentialpassword).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultId** | **String**| ID of vault | 
 **vaultPostCredentialpassword** | [**VaultPostCredentialpassword**](VaultPostCredentialpassword.md)|  | 

### Return type

[**CredentialPassword**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vaultShow"></a>
# **vaultShow**
> Vault vaultShow(vaultId)

Get

Returns a single vault

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
apiInstance.vaultShow(vaultId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

<a name="vaultUpdate"></a>
# **vaultUpdate**
> Vault vaultUpdate(vaultId, vaultUpdate)

Update

Returns modified vault

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

var apiInstance = new HyperOneApi.VaultApi();
var vaultId = "vaultId_example"; // String | ID of vault
var vaultUpdate = new HyperOneApi.VaultUpdate(); // VaultUpdate | 
apiInstance.vaultUpdate(vaultId, vaultUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

