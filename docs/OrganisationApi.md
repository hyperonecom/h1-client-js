# HyperOneApi.OrganisationApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organisationActionPaymentAssign**](OrganisationApi.md#organisationActionPaymentAssign) | **POST** /organisation/{organisationId}/actions/payment_assign | /actions/payment_assign
[**organisationActionTransferAccept**](OrganisationApi.md#organisationActionTransferAccept) | **POST** /organisation/{organisationId}/actions/transfer_accept | /actions/transfer_accept
[**organisationCreate**](OrganisationApi.md#organisationCreate) | **POST** /organisation | Create
[**organisationDeleteAccessrightsId**](OrganisationApi.md#organisationDeleteAccessrightsId) | **DELETE** /organisation/{organisationId}/accessrights/{id} | /accessrights/:id
[**organisationDeleteTagKey**](OrganisationApi.md#organisationDeleteTagKey) | **DELETE** /organisation/{organisationId}/tag/{key} | /tag/:key
[**organisationGetTag**](OrganisationApi.md#organisationGetTag) | **GET** /organisation/{organisationId}/tag | /tag
[**organisationList**](OrganisationApi.md#organisationList) | **GET** /organisation | List
[**organisationListAccessrights**](OrganisationApi.md#organisationListAccessrights) | **GET** /organisation/{organisationId}/accessrights | /accessrights
[**organisationListQueue**](OrganisationApi.md#organisationListQueue) | **GET** /organisation/{organisationId}/queue | /queue
[**organisationPatchTag**](OrganisationApi.md#organisationPatchTag) | **PATCH** /organisation/{organisationId}/tag | /tag
[**organisationPostAccessrights**](OrganisationApi.md#organisationPostAccessrights) | **POST** /organisation/{organisationId}/accessrights | /accessrights
[**organisationShow**](OrganisationApi.md#organisationShow) | **GET** /organisation/{organisationId} | Get
[**organisationUpdate**](OrganisationApi.md#organisationUpdate) | **PATCH** /organisation/{organisationId} | Update



## organisationActionPaymentAssign

> Organisation organisationActionPaymentAssign(organisationId, organisationActionPaymentAssign)

/actions/payment_assign

Action payment_assign

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

var apiInstance = new HyperOneApi.OrganisationApi();
var organisationId = "organisationId_example"; // String | ID of organisation
var organisationActionPaymentAssign = new HyperOneApi.OrganisationActionPaymentAssign(); // OrganisationActionPaymentAssign | 
apiInstance.organisationActionPaymentAssign(organisationId, organisationActionPaymentAssign).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| ID of organisation | 
 **organisationActionPaymentAssign** | [**OrganisationActionPaymentAssign**](OrganisationActionPaymentAssign.md)|  | 

### Return type

[**Organisation**](Organisation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## organisationActionTransferAccept

> Organisation organisationActionTransferAccept(organisationId, organisationActionTransferAccept)

/actions/transfer_accept

Action transfer_accept

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

var apiInstance = new HyperOneApi.OrganisationApi();
var organisationId = "organisationId_example"; // String | ID of organisation
var organisationActionTransferAccept = new HyperOneApi.OrganisationActionTransferAccept(); // OrganisationActionTransferAccept | 
apiInstance.organisationActionTransferAccept(organisationId, organisationActionTransferAccept).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| ID of organisation | 
 **organisationActionTransferAccept** | [**OrganisationActionTransferAccept**](OrganisationActionTransferAccept.md)|  | 

### Return type

[**Organisation**](Organisation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## organisationCreate

> Organisation organisationCreate(organisationCreate)

Create

Create organisation

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

var apiInstance = new HyperOneApi.OrganisationApi();
var organisationCreate = new HyperOneApi.OrganisationCreate(); // OrganisationCreate | 
apiInstance.organisationCreate(organisationCreate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationCreate** | [**OrganisationCreate**](OrganisationCreate.md)|  | 

### Return type

[**Organisation**](Organisation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## organisationDeleteAccessrightsId

> organisationDeleteAccessrightsId(organisationId, id)

/accessrights/:id

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

var apiInstance = new HyperOneApi.OrganisationApi();
var organisationId = "organisationId_example"; // String | ID of organisation
var id = "id_example"; // String | id
apiInstance.organisationDeleteAccessrightsId(organisationId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| ID of organisation | 
 **id** | **String**| id | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organisationDeleteTagKey

> Object organisationDeleteTagKey(organisationId, key)

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

var apiInstance = new HyperOneApi.OrganisationApi();
var organisationId = "organisationId_example"; // String | ID of organisation
var key = "key_example"; // String | key
apiInstance.organisationDeleteTagKey(organisationId, key).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| ID of organisation | 
 **key** | **String**| key | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organisationGetTag

> Object organisationGetTag(organisationId)

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

var apiInstance = new HyperOneApi.OrganisationApi();
var organisationId = "organisationId_example"; // String | ID of organisation
apiInstance.organisationGetTag(organisationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| ID of organisation | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organisationList

> [Organisation] organisationList(opts)

List

List organisation

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

var apiInstance = new HyperOneApi.OrganisationApi();
var opts = {
  'name': "name_example", // String | Filter by name
  'billingCompany': "billingCompany_example", // String | Filter by billing.company
  'limit': 3.4, // Number | Filter by $limit
  'active': true, // Boolean | Filter by active
  'accessRightsId': "accessRightsId_example", // String | Filter by accessRights.id
  'tag': {key: "null"} // {String: String} | Filter by tag
};
apiInstance.organisationList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filter by name | [optional] 
 **billingCompany** | **String**| Filter by billing.company | [optional] 
 **limit** | **Number**| Filter by $limit | [optional] 
 **active** | **Boolean**| Filter by active | [optional] 
 **accessRightsId** | **String**| Filter by accessRights.id | [optional] 
 **tag** | [**{String: String}**](String.md)| Filter by tag | [optional] 

### Return type

[**[Organisation]**](Organisation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organisationListAccessrights

> [AccessrightsUserRole] organisationListAccessrights(organisationId)

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

var apiInstance = new HyperOneApi.OrganisationApi();
var organisationId = "organisationId_example"; // String | ID of organisation
apiInstance.organisationListAccessrights(organisationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| ID of organisation | 

### Return type

[**[AccessrightsUserRole]**](AccessrightsUserRole.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organisationListQueue

> [Event] organisationListQueue(organisationId)

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

var apiInstance = new HyperOneApi.OrganisationApi();
var organisationId = "organisationId_example"; // String | ID of organisation
apiInstance.organisationListQueue(organisationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| ID of organisation | 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organisationPatchTag

> Object organisationPatchTag(organisationId, requestBody)

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

var apiInstance = new HyperOneApi.OrganisationApi();
var organisationId = "organisationId_example"; // String | ID of organisation
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.organisationPatchTag(organisationId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| ID of organisation | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## organisationPostAccessrights

> organisationPostAccessrights(organisationId, organisationPostAccessrights)

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

var apiInstance = new HyperOneApi.OrganisationApi();
var organisationId = "organisationId_example"; // String | ID of organisation
var organisationPostAccessrights = new HyperOneApi.OrganisationPostAccessrights(); // OrganisationPostAccessrights | 
apiInstance.organisationPostAccessrights(organisationId, organisationPostAccessrights).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| ID of organisation | 
 **organisationPostAccessrights** | [**OrganisationPostAccessrights**](OrganisationPostAccessrights.md)|  | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## organisationShow

> Organisation organisationShow(organisationId)

Get

Returns a single organisation

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

var apiInstance = new HyperOneApi.OrganisationApi();
var organisationId = "organisationId_example"; // String | ID of organisation
apiInstance.organisationShow(organisationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| ID of organisation | 

### Return type

[**Organisation**](Organisation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organisationUpdate

> Organisation organisationUpdate(organisationId, organisationUpdate)

Update

Returns modified organisation

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

var apiInstance = new HyperOneApi.OrganisationApi();
var organisationId = "organisationId_example"; // String | ID of organisation
var organisationUpdate = new HyperOneApi.OrganisationUpdate(); // OrganisationUpdate | 
apiInstance.organisationUpdate(organisationId, organisationUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | **String**| ID of organisation | 
 **organisationUpdate** | [**OrganisationUpdate**](OrganisationUpdate.md)|  | 

### Return type

[**Organisation**](Organisation.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

