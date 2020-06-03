# HyperoneClient.FirewallApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**firewallActionAttach**](FirewallApi.md#firewallActionAttach) | **POST** /firewall/{firewallId}/actions/attach | /actions/attach
[**firewallActionDetach**](FirewallApi.md#firewallActionDetach) | **POST** /firewall/{firewallId}/actions/detach | /actions/detach
[**firewallActionTransfer**](FirewallApi.md#firewallActionTransfer) | **POST** /firewall/{firewallId}/actions/transfer | /actions/transfer
[**firewallCreate**](FirewallApi.md#firewallCreate) | **POST** /firewall | Create
[**firewallDelete**](FirewallApi.md#firewallDelete) | **DELETE** /firewall/{firewallId} | Delete
[**firewallDeleteAccessrightsIdentity**](FirewallApi.md#firewallDeleteAccessrightsIdentity) | **DELETE** /firewall/{firewallId}/accessrights/{identity} | /accessrights/:identity
[**firewallDeleteEgressRuleId**](FirewallApi.md#firewallDeleteEgressRuleId) | **DELETE** /firewall/{firewallId}/egress/{ruleId} | /egress/:ruleId
[**firewallDeleteIngressRuleId**](FirewallApi.md#firewallDeleteIngressRuleId) | **DELETE** /firewall/{firewallId}/ingress/{ruleId} | /ingress/:ruleId
[**firewallDeleteTagKey**](FirewallApi.md#firewallDeleteTagKey) | **DELETE** /firewall/{firewallId}/tag/{key} | /tag/:key
[**firewallGetEgressRuleId**](FirewallApi.md#firewallGetEgressRuleId) | **GET** /firewall/{firewallId}/egress/{ruleId} | /egress/:ruleId
[**firewallGetIngressRuleId**](FirewallApi.md#firewallGetIngressRuleId) | **GET** /firewall/{firewallId}/ingress/{ruleId} | /ingress/:ruleId
[**firewallGetServicesServiceId**](FirewallApi.md#firewallGetServicesServiceId) | **GET** /firewall/{firewallId}/services/{serviceId} | /services/:serviceId
[**firewallGetTag**](FirewallApi.md#firewallGetTag) | **GET** /firewall/{firewallId}/tag | /tag
[**firewallList**](FirewallApi.md#firewallList) | **GET** /firewall | List
[**firewallListAccessrights**](FirewallApi.md#firewallListAccessrights) | **GET** /firewall/{firewallId}/accessrights | /accessrights
[**firewallListEgress**](FirewallApi.md#firewallListEgress) | **GET** /firewall/{firewallId}/egress | /egress
[**firewallListIngress**](FirewallApi.md#firewallListIngress) | **GET** /firewall/{firewallId}/ingress | /ingress
[**firewallListQueue**](FirewallApi.md#firewallListQueue) | **GET** /firewall/{firewallId}/queue | /queue
[**firewallListServices**](FirewallApi.md#firewallListServices) | **GET** /firewall/{firewallId}/services | /services
[**firewallPatchTag**](FirewallApi.md#firewallPatchTag) | **PATCH** /firewall/{firewallId}/tag | /tag
[**firewallPostAccessrights**](FirewallApi.md#firewallPostAccessrights) | **POST** /firewall/{firewallId}/accessrights | /accessrights
[**firewallPostEgress**](FirewallApi.md#firewallPostEgress) | **POST** /firewall/{firewallId}/egress | /egress
[**firewallPostIngress**](FirewallApi.md#firewallPostIngress) | **POST** /firewall/{firewallId}/ingress | /ingress
[**firewallPutEgress**](FirewallApi.md#firewallPutEgress) | **PUT** /firewall/{firewallId}/egress | /egress
[**firewallPutIngress**](FirewallApi.md#firewallPutIngress) | **PUT** /firewall/{firewallId}/ingress | /ingress
[**firewallPutTag**](FirewallApi.md#firewallPutTag) | **PUT** /firewall/{firewallId}/tag | /tag
[**firewallShow**](FirewallApi.md#firewallShow) | **GET** /firewall/{firewallId} | Get
[**firewallUpdate**](FirewallApi.md#firewallUpdate) | **PATCH** /firewall/{firewallId} | Update



## firewallActionAttach

> Firewall firewallActionAttach(firewallId, firewallActionAttach, opts)

/actions/attach

Action attach

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var firewallActionAttach = new HyperoneClient.FirewallActionAttach(); // FirewallActionAttach | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.firewallActionAttach(firewallId, firewallActionAttach, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **firewallActionAttach** | [**FirewallActionAttach**](FirewallActionAttach.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Firewall**](Firewall.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## firewallActionDetach

> Firewall firewallActionDetach(firewallId, opts)

/actions/detach

Action detach

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.firewallActionDetach(firewallId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Firewall**](Firewall.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallActionTransfer

> Firewall firewallActionTransfer(firewallId, firewallActionTransfer, opts)

/actions/transfer

Action transfer

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var firewallActionTransfer = new HyperoneClient.FirewallActionTransfer(); // FirewallActionTransfer | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.firewallActionTransfer(firewallId, firewallActionTransfer, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **firewallActionTransfer** | [**FirewallActionTransfer**](FirewallActionTransfer.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Firewall**](Firewall.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## firewallCreate

> Firewall firewallCreate(firewallCreate, opts)

Create

Create firewall

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallCreate = new HyperoneClient.FirewallCreate(); // FirewallCreate | 
var opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.firewallCreate(firewallCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallCreate** | [**FirewallCreate**](FirewallCreate.md)|  | 
 **xIdempotencyKey** | **String**|  | [optional] 

### Return type

[**Firewall**](Firewall.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## firewallDelete

> firewallDelete(firewallId)

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallDelete(firewallId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 

### Return type

null (empty response body)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallDeleteAccessrightsIdentity

> Firewall firewallDeleteAccessrightsIdentity(firewallId, identity)

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var identity = "identity_example"; // String | identity
apiInstance.firewallDeleteAccessrightsIdentity(firewallId, identity).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **identity** | **String**| identity | 

### Return type

[**Firewall**](Firewall.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallDeleteEgressRuleId

> InlineResponse2005 firewallDeleteEgressRuleId(firewallId, ruleId)

/egress/:ruleId

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var ruleId = "ruleId_example"; // String | ruleId
apiInstance.firewallDeleteEgressRuleId(firewallId, ruleId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **ruleId** | **String**| ruleId | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallDeleteIngressRuleId

> InlineResponse2005 firewallDeleteIngressRuleId(firewallId, ruleId)

/ingress/:ruleId

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var ruleId = "ruleId_example"; // String | ruleId
apiInstance.firewallDeleteIngressRuleId(firewallId, ruleId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **ruleId** | **String**| ruleId | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallDeleteTagKey

> {String: String} firewallDeleteTagKey(firewallId, key)

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var key = "key_example"; // String | key
apiInstance.firewallDeleteTagKey(firewallId, key).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **key** | **String**| key | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallGetEgressRuleId

> InlineResponse2005 firewallGetEgressRuleId(firewallId, ruleId)

/egress/:ruleId

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var ruleId = "ruleId_example"; // String | ruleId
apiInstance.firewallGetEgressRuleId(firewallId, ruleId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **ruleId** | **String**| ruleId | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallGetIngressRuleId

> InlineResponse2005 firewallGetIngressRuleId(firewallId, ruleId)

/ingress/:ruleId

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var ruleId = "ruleId_example"; // String | ruleId
apiInstance.firewallGetIngressRuleId(firewallId, ruleId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **ruleId** | **String**| ruleId | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallGetServicesServiceId

> FirewallServices firewallGetServicesServiceId(firewallId, serviceId)

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var serviceId = "serviceId_example"; // String | serviceId
apiInstance.firewallGetServicesServiceId(firewallId, serviceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **serviceId** | **String**| serviceId | 

### Return type

[**FirewallServices**](FirewallServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallGetTag

> {String: String} firewallGetTag(firewallId)

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallGetTag(firewallId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallList

> [Firewall] firewallList(opts)

List

List firewall

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

var apiInstance = new HyperoneClient.FirewallApi();
var opts = {
  'name': "name_example", // String | Filter by name
  'tag': {key: "null"} // {String: String} | Filter by tag
};
apiInstance.firewallList(opts).then(function(data) {
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

[**[Firewall]**](Firewall.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallListAccessrights

> [String] firewallListAccessrights(firewallId)

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallListAccessrights(firewallId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 

### Return type

**[String]**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallListEgress

> [InlineResponse2005] firewallListEgress(firewallId)

/egress

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallListEgress(firewallId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 

### Return type

[**[InlineResponse2005]**](InlineResponse2005.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallListIngress

> [InlineResponse2005] firewallListIngress(firewallId)

/ingress

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallListIngress(firewallId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 

### Return type

[**[InlineResponse2005]**](InlineResponse2005.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallListQueue

> [Event] firewallListQueue(firewallId, opts)

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var opts = {
  'limit': 100, // Number | $limit
  'skip': 3.4 // Number | $skip
};
apiInstance.firewallListQueue(firewallId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **limit** | **Number**| $limit | [optional] [default to 100]
 **skip** | **Number**| $skip | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallListServices

> [FirewallServices] firewallListServices(firewallId)

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallListServices(firewallId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 

### Return type

[**[FirewallServices]**](FirewallServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallPatchTag

> {String: String} firewallPatchTag(firewallId, requestBody)

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.firewallPatchTag(firewallId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## firewallPostAccessrights

> Firewall firewallPostAccessrights(firewallId, firewallPostAccessrights)

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var firewallPostAccessrights = new HyperoneClient.FirewallPostAccessrights(); // FirewallPostAccessrights | 
apiInstance.firewallPostAccessrights(firewallId, firewallPostAccessrights).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **firewallPostAccessrights** | [**FirewallPostAccessrights**](FirewallPostAccessrights.md)|  | 

### Return type

[**Firewall**](Firewall.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## firewallPostEgress

> InlineResponse2005 firewallPostEgress(firewallId, firewallPostEgress)

/egress

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var firewallPostEgress = new HyperoneClient.FirewallPostEgress(); // FirewallPostEgress | 
apiInstance.firewallPostEgress(firewallId, firewallPostEgress).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **firewallPostEgress** | [**FirewallPostEgress**](FirewallPostEgress.md)|  | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## firewallPostIngress

> InlineResponse2005 firewallPostIngress(firewallId, firewallPostIngress)

/ingress

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var firewallPostIngress = new HyperoneClient.FirewallPostIngress(); // FirewallPostIngress | 
apiInstance.firewallPostIngress(firewallId, firewallPostIngress).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **firewallPostIngress** | [**FirewallPostIngress**](FirewallPostIngress.md)|  | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## firewallPutEgress

> [InlineResponse2005] firewallPutEgress(firewallId, requestBody)

/egress

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var requestBody = [null]; // [Object] | 
apiInstance.firewallPutEgress(firewallId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **requestBody** | [**[Object]**](Object.md)|  | 

### Return type

[**[InlineResponse2005]**](InlineResponse2005.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## firewallPutIngress

> [InlineResponse2005] firewallPutIngress(firewallId, requestBody)

/ingress

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var requestBody = [null]; // [Object] | 
apiInstance.firewallPutIngress(firewallId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **requestBody** | [**[Object]**](Object.md)|  | 

### Return type

[**[InlineResponse2005]**](InlineResponse2005.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## firewallPutTag

> {String: String} firewallPutTag(firewallId, requestBody)

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var requestBody = {key: "null"}; // {String: String} | 
apiInstance.firewallPutTag(firewallId, requestBody).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **requestBody** | [**{String: String}**](String.md)|  | 

### Return type

**{String: String}**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## firewallShow

> Firewall firewallShow(firewallId)

Get

Returns a single firewall

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallShow(firewallId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 

### Return type

[**Firewall**](Firewall.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## firewallUpdate

> Firewall firewallUpdate(firewallId, firewallUpdate)

Update

Returns modified firewall

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

var apiInstance = new HyperoneClient.FirewallApi();
var firewallId = "firewallId_example"; // String | ID of firewall
var firewallUpdate = new HyperoneClient.FirewallUpdate(); // FirewallUpdate | 
apiInstance.firewallUpdate(firewallId, firewallUpdate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **firewallUpdate** | [**FirewallUpdate**](FirewallUpdate.md)|  | 

### Return type

[**Firewall**](Firewall.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

