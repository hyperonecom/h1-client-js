# HyperoneClient.ServiceApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serviceList**](ServiceApi.md#serviceList) | **GET** /service | List
[**serviceShow**](ServiceApi.md#serviceShow) | **GET** /service/{serviceId} | Get



## serviceList

> [Service] serviceList(opts)

List

List service

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

let apiInstance = new HyperoneClient.ServiceApi();
let opts = {
  'type': "type_example", // String | Filter by type
  'resource': "resource_example", // String | Filter by resource
  'name': "name_example" // String | Filter by name
};
apiInstance.serviceList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Filter by type | [optional] 
 **resource** | **String**| Filter by resource | [optional] 
 **name** | **String**| Filter by name | [optional] 

### Return type

[**[Service]**](Service.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## serviceShow

> Service serviceShow(serviceId)

Get

Returns a single service

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

let apiInstance = new HyperoneClient.ServiceApi();
let serviceId = "serviceId_example"; // String | ID of service
apiInstance.serviceShow(serviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**| ID of service | 

### Return type

[**Service**](Service.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

