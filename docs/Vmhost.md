# HyperoneClient.Vmhost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**services** | [**[ProjectServices]**](ProjectServices.md) |  | [optional] 
**flavour** | **String** |  | [optional] 
**modifiedOn** | **Date** |  | [optional] 
**modifiedBy** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**createdOn** | **Date** |  | [optional] 
**accessRights** | **[String]** |  | [optional] 
**processing** | **Boolean** |  | [optional] 
**created** | **Boolean** |  | [optional] 
**queue** | [**[Event]**](Event.md) |  | [optional] 
**state** | **String** |  | [optional] 
**tag** | **{String: String}** |  | [optional] 
**project** | **String** |  | [optional] 
**enabledServices** | **[String]** |  | [optional] 
**type** | **String** |  | [optional] [default to &#39;compute&#39;]



## Enum: StateEnum


* `Running` (value: `"Running"`)

* `Unknown` (value: `"Unknown"`)





## Enum: TypeEnum


* `compute` (value: `"compute"`)

* `network` (value: `"network"`)

* `vault` (value: `"vault"`)

* `container` (value: `"container"`)




