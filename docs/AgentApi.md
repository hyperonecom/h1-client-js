# HyperOneApi.AgentApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agentCreate**](AgentApi.md#agentCreate) | **POST** /agent | Create
[**agentDelete**](AgentApi.md#agentDelete) | **DELETE** /agent/{agentId} | Delete
[**agentDeleteAccessrightsIdentity**](AgentApi.md#agentDeleteAccessrightsIdentity) | **DELETE** /agent/{agentId}/accessrights/{identity} | /accessrights/:identity
[**agentDeleteCredentialcertificateId**](AgentApi.md#agentDeleteCredentialcertificateId) | **DELETE** /agent/{agentId}/credential/certificate/{id} | /credential/certificate/:id
[**agentDeleteTagKey**](AgentApi.md#agentDeleteTagKey) | **DELETE** /agent/{agentId}/tag/{key} | /tag/:key
[**agentGetCredentialcertificateId**](AgentApi.md#agentGetCredentialcertificateId) | **GET** /agent/{agentId}/credential/certificate/{id} | /credential/certificate/:id
[**agentGetServicesServiceId**](AgentApi.md#agentGetServicesServiceId) | **GET** /agent/{agentId}/services/{serviceId} | /services/:serviceId
[**agentGetTag**](AgentApi.md#agentGetTag) | **GET** /agent/{agentId}/tag | /tag
[**agentList**](AgentApi.md#agentList) | **GET** /agent | List
[**agentListAccessrights**](AgentApi.md#agentListAccessrights) | **GET** /agent/{agentId}/accessrights | /accessrights
[**agentListCredentialcertificate**](AgentApi.md#agentListCredentialcertificate) | **GET** /agent/{agentId}/credential/certificate | /credential/certificate
[**agentListEnabledServices**](AgentApi.md#agentListEnabledServices) | **GET** /agent/{agentId}/enabledServices | /enabledServices
[**agentListQueue**](AgentApi.md#agentListQueue) | **GET** /agent/{agentId}/queue | /queue
[**agentListResource**](AgentApi.md#agentListResource) | **GET** /agent/{agentId}/resource | /resource
[**agentListServices**](AgentApi.md#agentListServices) | **GET** /agent/{agentId}/services | /services
[**agentPatchCredentialcertificateId**](AgentApi.md#agentPatchCredentialcertificateId) | **PATCH** /agent/{agentId}/credential/certificate/{id} | /credential/certificate/:id
[**agentPatchTag**](AgentApi.md#agentPatchTag) | **PATCH** /agent/{agentId}/tag | /tag
[**agentPostAccessrights**](AgentApi.md#agentPostAccessrights) | **POST** /agent/{agentId}/accessrights | /accessrights
[**agentPostCredentialcertificate**](AgentApi.md#agentPostCredentialcertificate) | **POST** /agent/{agentId}/credential/certificate | /credential/certificate
[**agentPutEnabledServices**](AgentApi.md#agentPutEnabledServices) | **PUT** /agent/{agentId}/enabledServices | /enabledServices
[**agentShow**](AgentApi.md#agentShow) | **GET** /agent/{agentId} | Get
[**agentUpdate**](AgentApi.md#agentUpdate) | **PATCH** /agent/{agentId} | Update


<a name="agentCreate"></a>
# **agentCreate**
> Agent agentCreate(agentCreate)

Create

Create agent

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

var apiInstance = new HyperOneApi.AgentApi();
var agentCreate = new HyperOneApi.AgentCreate(); // AgentCreate | 
apiInstance.agentCreate(agentCreate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentCreate** | [**AgentCreate**](AgentCreate.md)|  | 

### Return type

[**Agent**](Agent.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentDelete"></a>
# **agentDelete**
> agentDelete(agentId)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
apiInstance.agentDelete(agentId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="agentDeleteAccessrightsIdentity"></a>
# **agentDeleteAccessrightsIdentity**
> Agent agentDeleteAccessrightsIdentity(agentId, identity)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
var identity = "identity_example"; // String | identity
apiInstance.agentDeleteAccessrightsIdentity(agentId, identity).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 
 **identity** | **String**| identity | 

### Return type

[**Agent**](Agent.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agentDeleteCredentialcertificateId"></a>
# **agentDeleteCredentialcertificateId**
> Agent agentDeleteCredentialcertificateId(agentId, id)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
var id = "id_example"; // String | id
apiInstance.agentDeleteCredentialcertificateId(agentId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 
 **id** | **String**| id | 

### Return type

[**Agent**](Agent.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agentDeleteTagKey"></a>
# **agentDeleteTagKey**
> Object agentDeleteTagKey(agentId, key)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
var key = "key_example"; // String | key
apiInstance.agentDeleteTagKey(agentId, key).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 
 **key** | **String**| key | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agentGetCredentialcertificateId"></a>
# **agentGetCredentialcertificateId**
> CredentialCertificate agentGetCredentialcertificateId(agentId, id)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
var id = "id_example"; // String | id
apiInstance.agentGetCredentialcertificateId(agentId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 
 **id** | **String**| id | 

### Return type

[**CredentialCertificate**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agentGetServicesServiceId"></a>
# **agentGetServicesServiceId**
> AgentServices agentGetServicesServiceId(agentId, serviceId)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
var serviceId = "serviceId_example"; // String | serviceId
apiInstance.agentGetServicesServiceId(agentId, serviceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 
 **serviceId** | **String**| serviceId | 

### Return type

[**AgentServices**](AgentServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agentGetTag"></a>
# **agentGetTag**
> Object agentGetTag(agentId)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
apiInstance.agentGetTag(agentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agentList"></a>
# **agentList**
> [Agent] agentList(opts)

List

List agent

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

var apiInstance = new HyperOneApi.AgentApi();
var opts = {
  'name': "name_example" // String | Filter by name
};
apiInstance.agentList(opts).then(function(data) {
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

[**[Agent]**](Agent.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agentListAccessrights"></a>
# **agentListAccessrights**
> [String] agentListAccessrights(agentId)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
apiInstance.agentListAccessrights(agentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agentListCredentialcertificate"></a>
# **agentListCredentialcertificate**
> [CredentialCertificate] agentListCredentialcertificate(agentId)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
apiInstance.agentListCredentialcertificate(agentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 

### Return type

[**[CredentialCertificate]**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agentListEnabledServices"></a>
# **agentListEnabledServices**
> [String] agentListEnabledServices(agentId)

/enabledServices

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
apiInstance.agentListEnabledServices(agentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agentListQueue"></a>
# **agentListQueue**
> [Event] agentListQueue(agentId)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
apiInstance.agentListQueue(agentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agentListResource"></a>
# **agentListResource**
> [AgentResource] agentListResource(agentId)

/resource

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
apiInstance.agentListResource(agentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 

### Return type

[**[AgentResource]**](AgentResource.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agentListServices"></a>
# **agentListServices**
> [AgentServices] agentListServices(agentId)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
apiInstance.agentListServices(agentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 

### Return type

[**[AgentServices]**](AgentServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agentPatchCredentialcertificateId"></a>
# **agentPatchCredentialcertificateId**
> CredentialCertificate agentPatchCredentialcertificateId(agentId, id, agentPatchCredentialcertificateId)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
var id = "id_example"; // String | id
var agentPatchCredentialcertificateId = new HyperOneApi.AgentPatchCredentialcertificateId(); // AgentPatchCredentialcertificateId | 
apiInstance.agentPatchCredentialcertificateId(agentId, id, agentPatchCredentialcertificateId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 
 **id** | **String**| id | 
 **agentPatchCredentialcertificateId** | [**AgentPatchCredentialcertificateId**](AgentPatchCredentialcertificateId.md)|  | 

### Return type

[**CredentialCertificate**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentPatchTag"></a>
# **agentPatchTag**
> Object agentPatchTag(agentId, requestBody)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.agentPatchTag(agentId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentPostAccessrights"></a>
# **agentPostAccessrights**
> Agent agentPostAccessrights(agentId, agentPostAccessrights)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
var agentPostAccessrights = new HyperOneApi.AgentPostAccessrights(); // AgentPostAccessrights | 
apiInstance.agentPostAccessrights(agentId, agentPostAccessrights).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 
 **agentPostAccessrights** | [**AgentPostAccessrights**](AgentPostAccessrights.md)|  | 

### Return type

[**Agent**](Agent.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentPostCredentialcertificate"></a>
# **agentPostCredentialcertificate**
> CredentialCertificate agentPostCredentialcertificate(agentId, agentPostCredentialcertificate)

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
var agentPostCredentialcertificate = new HyperOneApi.AgentPostCredentialcertificate(); // AgentPostCredentialcertificate | 
apiInstance.agentPostCredentialcertificate(agentId, agentPostCredentialcertificate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 
 **agentPostCredentialcertificate** | [**AgentPostCredentialcertificate**](AgentPostCredentialcertificate.md)|  | 

### Return type

[**CredentialCertificate**](CredentialCertificate.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentPutEnabledServices"></a>
# **agentPutEnabledServices**
> [String] agentPutEnabledServices(agentId, requestBody)

/enabledServices

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
var requestBody = ["null"]; // [String] | 
apiInstance.agentPutEnabledServices(agentId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 
 **requestBody** | [**[String]**](Array.md)|  | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agentShow"></a>
# **agentShow**
> Agent agentShow(agentId)

Get

Returns a single agent

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
apiInstance.agentShow(agentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 

### Return type

[**Agent**](Agent.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agentUpdate"></a>
# **agentUpdate**
> Agent agentUpdate(agentId, agentUpdate)

Update

Returns modified agent

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

var apiInstance = new HyperOneApi.AgentApi();
var agentId = "agentId_example"; // String | ID of agent
var agentUpdate = new HyperOneApi.AgentUpdate(); // AgentUpdate | 
apiInstance.agentUpdate(agentId, agentUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| ID of agent | 
 **agentUpdate** | [**AgentUpdate**](AgentUpdate.md)|  | 

### Return type

[**Agent**](Agent.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

