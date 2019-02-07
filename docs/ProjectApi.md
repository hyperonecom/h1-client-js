# HyperOneApi.ProjectApi

All URIs are relative to *https://api.hyperone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectCreate**](ProjectApi.md#projectCreate) | **POST** /project | Create
[**projectDeleteAccessrightsIdentity**](ProjectApi.md#projectDeleteAccessrightsIdentity) | **DELETE** /project/{projectId}/accessrights/{identity} | /accessrights/:identity
[**projectDeleteTagKey**](ProjectApi.md#projectDeleteTagKey) | **DELETE** /project/{projectId}/tag/{key} | /tag/:key
[**projectGetServicesServiceId**](ProjectApi.md#projectGetServicesServiceId) | **GET** /project/{projectId}/services/{serviceId} | /services/:serviceId
[**projectGetTag**](ProjectApi.md#projectGetTag) | **GET** /project/{projectId}/tag | /tag
[**projectList**](ProjectApi.md#projectList) | **GET** /project | List
[**projectListAccessrights**](ProjectApi.md#projectListAccessrights) | **GET** /project/{projectId}/accessrights | /accessrights
[**projectListQueue**](ProjectApi.md#projectListQueue) | **GET** /project/{projectId}/queue | /queue
[**projectListServices**](ProjectApi.md#projectListServices) | **GET** /project/{projectId}/services | /services
[**projectPatchTag**](ProjectApi.md#projectPatchTag) | **PATCH** /project/{projectId}/tag | /tag
[**projectPostAccessrights**](ProjectApi.md#projectPostAccessrights) | **POST** /project/{projectId}/accessrights | /accessrights
[**projectShow**](ProjectApi.md#projectShow) | **GET** /project/{projectId} | Get
[**projectUpdate**](ProjectApi.md#projectUpdate) | **PATCH** /project/{projectId} | Update


<a name="projectCreate"></a>
# **projectCreate**
> Project projectCreate(projectCreate)

Create

Create project

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

let apiInstance = new HyperOneApi.ProjectApi();
let projectCreate = new HyperOneApi.ProjectCreate(); // ProjectCreate | 
apiInstance.projectCreate(projectCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectCreate** | [**ProjectCreate**](ProjectCreate.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectDeleteAccessrightsIdentity"></a>
# **projectDeleteAccessrightsIdentity**
> Project projectDeleteAccessrightsIdentity(projectId, identity)

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

let apiInstance = new HyperOneApi.ProjectApi();
let projectId = "projectId_example"; // String | ID of project
let identity = "identity_example"; // String | identity
apiInstance.projectDeleteAccessrightsIdentity(projectId, identity).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| ID of project | 
 **identity** | **String**| identity | 

### Return type

[**Project**](Project.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="projectDeleteTagKey"></a>
# **projectDeleteTagKey**
> Object projectDeleteTagKey(projectId, key)

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

let apiInstance = new HyperOneApi.ProjectApi();
let projectId = "projectId_example"; // String | ID of project
let key = "key_example"; // String | key
apiInstance.projectDeleteTagKey(projectId, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| ID of project | 
 **key** | **String**| key | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="projectGetServicesServiceId"></a>
# **projectGetServicesServiceId**
> ProjectServices projectGetServicesServiceId(projectId, serviceId)

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

let apiInstance = new HyperOneApi.ProjectApi();
let projectId = "projectId_example"; // String | ID of project
let serviceId = "serviceId_example"; // String | serviceId
apiInstance.projectGetServicesServiceId(projectId, serviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| ID of project | 
 **serviceId** | **String**| serviceId | 

### Return type

[**ProjectServices**](ProjectServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="projectGetTag"></a>
# **projectGetTag**
> Object projectGetTag(projectId)

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

let apiInstance = new HyperOneApi.ProjectApi();
let projectId = "projectId_example"; // String | ID of project
apiInstance.projectGetTag(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| ID of project | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="projectList"></a>
# **projectList**
> [Project] projectList(opts)

List

List project

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

let apiInstance = new HyperOneApi.ProjectApi();
let opts = {
  'name': "name_example", // String | Filter by name
  'limit': "limit_example", // String | Filter by $limit
  'active': "active_example", // String | Filter by active
  'organisation': "organisation_example" // String | Filter by organisation
};
apiInstance.projectList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filter by name | [optional] 
 **limit** | **String**| Filter by $limit | [optional] 
 **active** | **String**| Filter by active | [optional] 
 **organisation** | **String**| Filter by organisation | [optional] 

### Return type

[**[Project]**](Project.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="projectListAccessrights"></a>
# **projectListAccessrights**
> [ProjectAccessRights] projectListAccessrights(projectId)

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

let apiInstance = new HyperOneApi.ProjectApi();
let projectId = "projectId_example"; // String | ID of project
apiInstance.projectListAccessrights(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| ID of project | 

### Return type

[**[ProjectAccessRights]**](ProjectAccessRights.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="projectListQueue"></a>
# **projectListQueue**
> [Event] projectListQueue(projectId)

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

let apiInstance = new HyperOneApi.ProjectApi();
let projectId = "projectId_example"; // String | ID of project
apiInstance.projectListQueue(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| ID of project | 

### Return type

[**[Event]**](Event.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="projectListServices"></a>
# **projectListServices**
> [ProjectServices] projectListServices(projectId)

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

let apiInstance = new HyperOneApi.ProjectApi();
let projectId = "projectId_example"; // String | ID of project
apiInstance.projectListServices(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| ID of project | 

### Return type

[**[ProjectServices]**](ProjectServices.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="projectPatchTag"></a>
# **projectPatchTag**
> Object projectPatchTag(projectId, body)

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

let apiInstance = new HyperOneApi.ProjectApi();
let projectId = "projectId_example"; // String | ID of project
let body = null; // Object | 
apiInstance.projectPatchTag(projectId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| ID of project | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectPostAccessrights"></a>
# **projectPostAccessrights**
> ProjectAccessRights projectPostAccessrights(projectId, projectPostAccessrights)

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

let apiInstance = new HyperOneApi.ProjectApi();
let projectId = "projectId_example"; // String | ID of project
let projectPostAccessrights = new HyperOneApi.ProjectPostAccessrights(); // ProjectPostAccessrights | 
apiInstance.projectPostAccessrights(projectId, projectPostAccessrights).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| ID of project | 
 **projectPostAccessrights** | [**ProjectPostAccessrights**](ProjectPostAccessrights.md)|  | 

### Return type

[**ProjectAccessRights**](ProjectAccessRights.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="projectShow"></a>
# **projectShow**
> Project projectShow(projectId)

Get

Returns a single project

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

let apiInstance = new HyperOneApi.ProjectApi();
let projectId = "projectId_example"; // String | ID of project
apiInstance.projectShow(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| ID of project | 

### Return type

[**Project**](Project.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="projectUpdate"></a>
# **projectUpdate**
> Project projectUpdate(projectId, projectUpdate)

Update

Returns modified project

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

let apiInstance = new HyperOneApi.ProjectApi();
let projectId = "projectId_example"; // String | ID of project
let projectUpdate = new HyperOneApi.ProjectUpdate(); // ProjectUpdate | 
apiInstance.projectUpdate(projectId, projectUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| ID of project | 
 **projectUpdate** | [**ProjectUpdate**](ProjectUpdate.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[Project](../README.md#Project), [ServiceAccount](../README.md#ServiceAccount), [Session](../README.md#Session)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

