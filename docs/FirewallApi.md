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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let firewallActionAttach = new HyperoneClient.FirewallActionAttach(); // FirewallActionAttach | 
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.firewallActionAttach(firewallId, firewallActionAttach, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.firewallActionDetach(firewallId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let firewallActionTransfer = new HyperoneClient.FirewallActionTransfer(); // FirewallActionTransfer | 
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.firewallActionTransfer(firewallId, firewallActionTransfer, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallCreate = new HyperoneClient.FirewallCreate(); // FirewallCreate | 
let opts = {
  'xIdempotencyKey': "xIdempotencyKey_example" // String | 
};
apiInstance.firewallCreate(firewallCreate, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallDelete(firewallId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let identity = "identity_example"; // String | identity
apiInstance.firewallDeleteAccessrightsIdentity(firewallId, identity).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let ruleId = "ruleId_example"; // String | ruleId
apiInstance.firewallDeleteEgressRuleId(firewallId, ruleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let ruleId = "ruleId_example"; // String | ruleId
apiInstance.firewallDeleteIngressRuleId(firewallId, ruleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let key = "key_example"; // String | key
apiInstance.firewallDeleteTagKey(firewallId, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let ruleId = "ruleId_example"; // String | ruleId
apiInstance.firewallGetEgressRuleId(firewallId, ruleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let ruleId = "ruleId_example"; // String | ruleId
apiInstance.firewallGetIngressRuleId(firewallId, ruleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let serviceId = "serviceId_example"; // String | serviceId
apiInstance.firewallGetServicesServiceId(firewallId, serviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallGetTag(firewallId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let opts = {
  'name': "name_example", // String | Filter by name
  'tag': {key: "null"} // {String: String} | Filter by tag
};
apiInstance.firewallList(opts).then((data) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallListAccessrights(firewallId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallListEgress(firewallId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallListIngress(firewallId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let opts = {
  'limit': 3.4, // Number | $limit
  'skip': 3.4 // Number | $skip
};
apiInstance.firewallListQueue(firewallId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **limit** | **Number**| $limit | [optional] 
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallListServices(firewallId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let requestBody = {key: "null"}; // {String: String} | 
apiInstance.firewallPatchTag(firewallId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let firewallPostAccessrights = new HyperoneClient.FirewallPostAccessrights(); // FirewallPostAccessrights | 
apiInstance.firewallPostAccessrights(firewallId, firewallPostAccessrights).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let firewallPostEgress = new HyperoneClient.FirewallPostEgress(); // FirewallPostEgress | 
apiInstance.firewallPostEgress(firewallId, firewallPostEgress).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let firewallPostIngress = new HyperoneClient.FirewallPostIngress(); // FirewallPostIngress | 
apiInstance.firewallPostIngress(firewallId, firewallPostIngress).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let requestBody = [null]; // [Object] | 
apiInstance.firewallPutEgress(firewallId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let requestBody = [null]; // [Object] | 
apiInstance.firewallPutIngress(firewallId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let requestBody = {key: "null"}; // {String: String} | 
apiInstance.firewallPutTag(firewallId, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallShow(firewallId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

let apiInstance = new HyperoneClient.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let firewallUpdate = new HyperoneClient.FirewallUpdate(); // FirewallUpdate | 
apiInstance.firewallUpdate(firewallId, firewallUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

