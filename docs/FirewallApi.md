# HyperOneApi.FirewallApi

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
[**firewallShow**](FirewallApi.md#firewallShow) | **GET** /firewall/{firewallId} | Get
[**firewallUpdate**](FirewallApi.md#firewallUpdate) | **PATCH** /firewall/{firewallId} | Update


<a name="firewallActionAttach"></a>
# **firewallActionAttach**
> Firewall firewallActionAttach(firewallId, firewallActionAttach)

/actions/attach

Action attach

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

let apiInstance = new HyperOneApi.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let firewallActionAttach = new HyperOneApi.FirewallActionAttach(); // FirewallActionAttach | 
apiInstance.firewallActionAttach(firewallId, firewallActionAttach).then((data) => {
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

### Return type

[**Firewall**](Firewall.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="firewallActionDetach"></a>
# **firewallActionDetach**
> Firewall firewallActionDetach(firewallId)

/actions/detach

Action detach

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

let apiInstance = new HyperOneApi.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallActionDetach(firewallId).then((data) => {
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

<a name="firewallActionTransfer"></a>
# **firewallActionTransfer**
> Firewall firewallActionTransfer(firewallId, firewallActionTransfer)

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

let apiInstance = new HyperOneApi.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let firewallActionTransfer = new HyperOneApi.FirewallActionTransfer(); // FirewallActionTransfer | 
apiInstance.firewallActionTransfer(firewallId, firewallActionTransfer).then((data) => {
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

### Return type

[**Firewall**](Firewall.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="firewallCreate"></a>
# **firewallCreate**
> Firewall firewallCreate(firewallCreate)

Create

Create firewall

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

let apiInstance = new HyperOneApi.FirewallApi();
let firewallCreate = new HyperOneApi.FirewallCreate(); // FirewallCreate | 
apiInstance.firewallCreate(firewallCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallCreate** | [**FirewallCreate**](FirewallCreate.md)|  | 

### Return type

[**Firewall**](Firewall.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="firewallDelete"></a>
# **firewallDelete**
> firewallDelete(firewallId)

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

let apiInstance = new HyperOneApi.FirewallApi();
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
 - **Accept**: Not defined

<a name="firewallDeleteAccessrightsIdentity"></a>
# **firewallDeleteAccessrightsIdentity**
> Firewall firewallDeleteAccessrightsIdentity(firewallId, identity)

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

let apiInstance = new HyperOneApi.FirewallApi();
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

<a name="firewallDeleteEgressRuleId"></a>
# **firewallDeleteEgressRuleId**
> InlineResponse200 firewallDeleteEgressRuleId(firewallId, ruleId)

/egress/:ruleId

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

let apiInstance = new HyperOneApi.FirewallApi();
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="firewallDeleteIngressRuleId"></a>
# **firewallDeleteIngressRuleId**
> InlineResponse200 firewallDeleteIngressRuleId(firewallId, ruleId)

/ingress/:ruleId

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

let apiInstance = new HyperOneApi.FirewallApi();
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="firewallDeleteTagKey"></a>
# **firewallDeleteTagKey**
> Object firewallDeleteTagKey(firewallId, key)

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

let apiInstance = new HyperOneApi.FirewallApi();
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

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="firewallGetEgressRuleId"></a>
# **firewallGetEgressRuleId**
> InlineResponse200 firewallGetEgressRuleId(firewallId, ruleId)

/egress/:ruleId

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

let apiInstance = new HyperOneApi.FirewallApi();
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="firewallGetIngressRuleId"></a>
# **firewallGetIngressRuleId**
> InlineResponse200 firewallGetIngressRuleId(firewallId, ruleId)

/ingress/:ruleId

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

let apiInstance = new HyperOneApi.FirewallApi();
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="firewallGetServicesServiceId"></a>
# **firewallGetServicesServiceId**
> FirewallServices firewallGetServicesServiceId(firewallId, serviceId)

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

let apiInstance = new HyperOneApi.FirewallApi();
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

<a name="firewallGetTag"></a>
# **firewallGetTag**
> Object firewallGetTag(firewallId)

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

let apiInstance = new HyperOneApi.FirewallApi();
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

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="firewallList"></a>
# **firewallList**
> [Firewall] firewallList(opts)

List

List firewall

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

let apiInstance = new HyperOneApi.FirewallApi();
let opts = {
  'name': "name_example" // String | Filter by name
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

### Return type

[**[Firewall]**](Firewall.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="firewallListAccessrights"></a>
# **firewallListAccessrights**
> [String] firewallListAccessrights(firewallId)

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

let apiInstance = new HyperOneApi.FirewallApi();
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

<a name="firewallListEgress"></a>
# **firewallListEgress**
> [InlineResponse200] firewallListEgress(firewallId)

/egress

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

let apiInstance = new HyperOneApi.FirewallApi();
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

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="firewallListIngress"></a>
# **firewallListIngress**
> [InlineResponse200] firewallListIngress(firewallId)

/ingress

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

let apiInstance = new HyperOneApi.FirewallApi();
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

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="firewallListQueue"></a>
# **firewallListQueue**
> [Event] firewallListQueue(firewallId)

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

let apiInstance = new HyperOneApi.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
apiInstance.firewallListQueue(firewallId).then((data) => {
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

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="firewallListServices"></a>
# **firewallListServices**
> [FirewallServices] firewallListServices(firewallId)

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

let apiInstance = new HyperOneApi.FirewallApi();
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

<a name="firewallPatchTag"></a>
# **firewallPatchTag**
> Object firewallPatchTag(firewallId, body)

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

let apiInstance = new HyperOneApi.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let body = null; // Object | 
apiInstance.firewallPatchTag(firewallId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewallId** | **String**| ID of firewall | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="firewallPostAccessrights"></a>
# **firewallPostAccessrights**
> String firewallPostAccessrights(firewallId, firewallPostAccessrights)

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

let apiInstance = new HyperOneApi.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let firewallPostAccessrights = new HyperOneApi.FirewallPostAccessrights(); // FirewallPostAccessrights | 
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

**String**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="firewallPostEgress"></a>
# **firewallPostEgress**
> InlineResponse200 firewallPostEgress(firewallId, firewallPostEgress)

/egress

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

let apiInstance = new HyperOneApi.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let firewallPostEgress = new HyperOneApi.FirewallPostEgress(); // FirewallPostEgress | 
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="firewallPostIngress"></a>
# **firewallPostIngress**
> InlineResponse200 firewallPostIngress(firewallId, firewallPostIngress)

/ingress

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

let apiInstance = new HyperOneApi.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let firewallPostIngress = new HyperOneApi.FirewallPostIngress(); // FirewallPostIngress | 
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="firewallShow"></a>
# **firewallShow**
> Firewall firewallShow(firewallId)

Get

Returns a single firewall

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

let apiInstance = new HyperOneApi.FirewallApi();
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

<a name="firewallUpdate"></a>
# **firewallUpdate**
> Firewall firewallUpdate(firewallId, firewallUpdate)

Update

Returns modified firewall

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

let apiInstance = new HyperOneApi.FirewallApi();
let firewallId = "firewallId_example"; // String | ID of firewall
let firewallUpdate = new HyperOneApi.FirewallUpdate(); // FirewallUpdate | 
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

