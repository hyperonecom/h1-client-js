# HyperOneApi.WebsiteApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**websiteActionStart**](WebsiteApi.md#websiteActionStart) | **POST** /website/{websiteId}/actions/start | /actions/start
[**websiteActionStop**](WebsiteApi.md#websiteActionStop) | **POST** /website/{websiteId}/actions/stop | /actions/stop
[**websiteActionUpdateDomain**](WebsiteApi.md#websiteActionUpdateDomain) | **POST** /website/{websiteId}/actions/update_domain | /actions/update_domain
[**websiteCreate**](WebsiteApi.md#websiteCreate) | **POST** /website | Create
[**websiteDelete**](WebsiteApi.md#websiteDelete) | **DELETE** /website/{websiteId} | Delete
[**websiteDeleteAccessrightsIdentity**](WebsiteApi.md#websiteDeleteAccessrightsIdentity) | **DELETE** /website/{websiteId}/accessrights/{identity} | /accessrights/:identity
[**websiteDeleteCredentialcertificateId**](WebsiteApi.md#websiteDeleteCredentialcertificateId) | **DELETE** /website/{websiteId}/credential/certificate/{id} | /credential/certificate/:id
[**websiteDeleteCredentialpasswordId**](WebsiteApi.md#websiteDeleteCredentialpasswordId) | **DELETE** /website/{websiteId}/credential/password/{id} | /credential/password/:id
[**websiteDeleteTagKey**](WebsiteApi.md#websiteDeleteTagKey) | **DELETE** /website/{websiteId}/tag/{key} | /tag/:key
[**websiteGetCredentialcertificateId**](WebsiteApi.md#websiteGetCredentialcertificateId) | **GET** /website/{websiteId}/credential/certificate/{id} | /credential/certificate/:id
[**websiteGetCredentialpasswordId**](WebsiteApi.md#websiteGetCredentialpasswordId) | **GET** /website/{websiteId}/credential/password/{id} | /credential/password/:id
[**websiteGetServicesServiceId**](WebsiteApi.md#websiteGetServicesServiceId) | **GET** /website/{websiteId}/services/{serviceId} | /services/:serviceId
[**websiteGetTag**](WebsiteApi.md#websiteGetTag) | **GET** /website/{websiteId}/tag | /tag
[**websiteList**](WebsiteApi.md#websiteList) | **GET** /website | List
[**websiteListAccessrights**](WebsiteApi.md#websiteListAccessrights) | **GET** /website/{websiteId}/accessrights | /accessrights
[**websiteListCredentialcertificate**](WebsiteApi.md#websiteListCredentialcertificate) | **GET** /website/{websiteId}/credential/certificate | /credential/certificate
[**websiteListCredentialpassword**](WebsiteApi.md#websiteListCredentialpassword) | **GET** /website/{websiteId}/credential/password | /credential/password
[**websiteListQueue**](WebsiteApi.md#websiteListQueue) | **GET** /website/{websiteId}/queue | /queue
[**websiteListServices**](WebsiteApi.md#websiteListServices) | **GET** /website/{websiteId}/services | /services
[**websitePatchCredentialcertificateId**](WebsiteApi.md#websitePatchCredentialcertificateId) | **PATCH** /website/{websiteId}/credential/certificate/{id} | /credential/certificate/:id
[**websitePatchCredentialpasswordId**](WebsiteApi.md#websitePatchCredentialpasswordId) | **PATCH** /website/{websiteId}/credential/password/{id} | /credential/password/:id
[**websitePatchTag**](WebsiteApi.md#websitePatchTag) | **PATCH** /website/{websiteId}/tag | /tag
[**websitePostAccessrights**](WebsiteApi.md#websitePostAccessrights) | **POST** /website/{websiteId}/accessrights | /accessrights
[**websitePostCredentialcertificate**](WebsiteApi.md#websitePostCredentialcertificate) | **POST** /website/{websiteId}/credential/certificate | /credential/certificate
[**websitePostCredentialpassword**](WebsiteApi.md#websitePostCredentialpassword) | **POST** /website/{websiteId}/credential/password | /credential/password
[**websiteShow**](WebsiteApi.md#websiteShow) | **GET** /website/{websiteId} | Get
[**websiteUpdate**](WebsiteApi.md#websiteUpdate) | **PATCH** /website/{websiteId} | Update



## websiteActionStart

> Website websiteActionStart(websiteId)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
apiInstance.websiteActionStart(websiteId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 

### Return type

[**Website**](Website.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteActionStop

> Website websiteActionStop(websiteId)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
apiInstance.websiteActionStop(websiteId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 

### Return type

[**Website**](Website.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteActionUpdateDomain

> Website websiteActionUpdateDomain(websiteId, websiteActionUpdateDomain)

/actions/update_domain

Action update_domain

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var websiteActionUpdateDomain = new HyperOneApi.WebsiteActionUpdateDomain(); // WebsiteActionUpdateDomain | 
apiInstance.websiteActionUpdateDomain(websiteId, websiteActionUpdateDomain).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **websiteActionUpdateDomain** | [**WebsiteActionUpdateDomain**](WebsiteActionUpdateDomain.md)|  | 

### Return type

[**Website**](Website.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## websiteCreate

> Website websiteCreate(websiteCreate)

Create

Create website

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteCreate = new HyperOneApi.WebsiteCreate(); // WebsiteCreate | 
apiInstance.websiteCreate(websiteCreate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteCreate** | [**WebsiteCreate**](WebsiteCreate.md)|  | 

### Return type

[**Website**](Website.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## websiteDelete

> websiteDelete(websiteId)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
apiInstance.websiteDelete(websiteId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteDeleteAccessrightsIdentity

> Website websiteDeleteAccessrightsIdentity(websiteId, identity)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var identity = "identity_example"; // String | identity
apiInstance.websiteDeleteAccessrightsIdentity(websiteId, identity).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **identity** | **String**| identity | 

### Return type

[**Website**](Website.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteDeleteCredentialcertificateId

> CredentialCertificate websiteDeleteCredentialcertificateId(websiteId, id)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var id = "id_example"; // String | id
apiInstance.websiteDeleteCredentialcertificateId(websiteId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **id** | **String**| id | 

### Return type

[**CredentialCertificate**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteDeleteCredentialpasswordId

> Website websiteDeleteCredentialpasswordId(websiteId, id)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var id = "id_example"; // String | id
apiInstance.websiteDeleteCredentialpasswordId(websiteId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **id** | **String**| id | 

### Return type

[**Website**](Website.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteDeleteTagKey

> Object websiteDeleteTagKey(websiteId, key)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var key = "key_example"; // String | key
apiInstance.websiteDeleteTagKey(websiteId, key).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **key** | **String**| key | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteGetCredentialcertificateId

> CredentialCertificate websiteGetCredentialcertificateId(websiteId, id)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var id = "id_example"; // String | id
apiInstance.websiteGetCredentialcertificateId(websiteId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **id** | **String**| id | 

### Return type

[**CredentialCertificate**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteGetCredentialpasswordId

> CredentialPassword websiteGetCredentialpasswordId(websiteId, id)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var id = "id_example"; // String | id
apiInstance.websiteGetCredentialpasswordId(websiteId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **id** | **String**| id | 

### Return type

[**CredentialPassword**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteGetServicesServiceId

> WebsiteServices websiteGetServicesServiceId(websiteId, serviceId)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var serviceId = "serviceId_example"; // String | serviceId
apiInstance.websiteGetServicesServiceId(websiteId, serviceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **serviceId** | **String**| serviceId | 

### Return type

[**WebsiteServices**](WebsiteServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteGetTag

> Object websiteGetTag(websiteId)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
apiInstance.websiteGetTag(websiteId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteList

> [Website] websiteList(opts)

List

List website

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.WebsiteApi();
var opts = {
  'name': "name_example", // String | Filter by name
  'tag': {key: "null"} // {String: String} | Filter by tag
};
apiInstance.websiteList(opts).then(function(data) {
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

[**[Website]**](Website.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteListAccessrights

> [String] websiteListAccessrights(websiteId)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
apiInstance.websiteListAccessrights(websiteId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteListCredentialcertificate

> [CredentialCertificate] websiteListCredentialcertificate(websiteId)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
apiInstance.websiteListCredentialcertificate(websiteId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 

### Return type

[**[CredentialCertificate]**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteListCredentialpassword

> [CredentialPassword] websiteListCredentialpassword(websiteId)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
apiInstance.websiteListCredentialpassword(websiteId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 

### Return type

[**[CredentialPassword]**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteListQueue

> [Event] websiteListQueue(websiteId)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
apiInstance.websiteListQueue(websiteId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteListServices

> [WebsiteServices] websiteListServices(websiteId)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
apiInstance.websiteListServices(websiteId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 

### Return type

[**[WebsiteServices]**](WebsiteServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websitePatchCredentialcertificateId

> CredentialCertificate websitePatchCredentialcertificateId(websiteId, id, websitePatchCredentialcertificateId)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var id = "id_example"; // String | id
var websitePatchCredentialcertificateId = new HyperOneApi.WebsitePatchCredentialcertificateId(); // WebsitePatchCredentialcertificateId | 
apiInstance.websitePatchCredentialcertificateId(websiteId, id, websitePatchCredentialcertificateId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **id** | **String**| id | 
 **websitePatchCredentialcertificateId** | [**WebsitePatchCredentialcertificateId**](WebsitePatchCredentialcertificateId.md)|  | 

### Return type

[**CredentialCertificate**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## websitePatchCredentialpasswordId

> CredentialPassword websitePatchCredentialpasswordId(websiteId, id, websitePatchCredentialpasswordId)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var id = "id_example"; // String | id
var websitePatchCredentialpasswordId = new HyperOneApi.WebsitePatchCredentialpasswordId(); // WebsitePatchCredentialpasswordId | 
apiInstance.websitePatchCredentialpasswordId(websiteId, id, websitePatchCredentialpasswordId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **id** | **String**| id | 
 **websitePatchCredentialpasswordId** | [**WebsitePatchCredentialpasswordId**](WebsitePatchCredentialpasswordId.md)|  | 

### Return type

[**CredentialPassword**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## websitePatchTag

> Object websitePatchTag(websiteId, requestBody)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.websitePatchTag(websiteId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## websitePostAccessrights

> Website websitePostAccessrights(websiteId, websitePostAccessrights)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var websitePostAccessrights = new HyperOneApi.WebsitePostAccessrights(); // WebsitePostAccessrights | 
apiInstance.websitePostAccessrights(websiteId, websitePostAccessrights).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **websitePostAccessrights** | [**WebsitePostAccessrights**](WebsitePostAccessrights.md)|  | 

### Return type

[**Website**](Website.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## websitePostCredentialcertificate

> CredentialCertificate websitePostCredentialcertificate(websiteId, websitePostCredentialcertificate)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var websitePostCredentialcertificate = new HyperOneApi.WebsitePostCredentialcertificate(); // WebsitePostCredentialcertificate | 
apiInstance.websitePostCredentialcertificate(websiteId, websitePostCredentialcertificate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **websitePostCredentialcertificate** | [**WebsitePostCredentialcertificate**](WebsitePostCredentialcertificate.md)|  | 

### Return type

[**CredentialCertificate**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## websitePostCredentialpassword

> CredentialPassword websitePostCredentialpassword(websiteId, websitePostCredentialpassword)

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
// Configure Bearer access token for authorization: ServiceAccount
var ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';
// Configure Bearer access token for authorization: Session
var Session = defaultClient.authentications['Session'];
Session.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var websitePostCredentialpassword = new HyperOneApi.WebsitePostCredentialpassword(); // WebsitePostCredentialpassword | 
apiInstance.websitePostCredentialpassword(websiteId, websitePostCredentialpassword).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **websitePostCredentialpassword** | [**WebsitePostCredentialpassword**](WebsitePostCredentialpassword.md)|  | 

### Return type

[**CredentialPassword**](CredentialPassword.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## websiteShow

> Website websiteShow(websiteId)

Get

Returns a single website

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
apiInstance.websiteShow(websiteId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 

### Return type

[**Website**](Website.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## websiteUpdate

> Website websiteUpdate(websiteId, websiteUpdate)

Update

Returns modified website

### Example

```javascript
var HyperOneApi = require('hyper_one_api');
var defaultClient = HyperOneApi.ApiClient.instance;
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

var apiInstance = new HyperOneApi.WebsiteApi();
var websiteId = "websiteId_example"; // String | ID of website
var websiteUpdate = new HyperOneApi.WebsiteUpdate(); // WebsiteUpdate | 
apiInstance.websiteUpdate(websiteId, websiteUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **websiteId** | **String**| ID of website | 
 **websiteUpdate** | [**WebsiteUpdate**](WebsiteUpdate.md)|  | 

### Return type

[**Website**](Website.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

