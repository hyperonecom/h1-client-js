# HyperOneApi.Container

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
**tag** | [**Object**](.md) |  | [optional] 
**project** | **String** |  | [optional] 
**image** | **String** |  | [optional] 
**command** | **String** |  | [optional] 
**volumes** | [**[ContainerVolumes]**](ContainerVolumes.md) |  | [optional] 
**expose** | [**[ContainerExpose]**](ContainerExpose.md) |  | [optional] 
**env** | **[String]** |  | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `Running` (value: `"Running"`)

* `Off` (value: `"Off"`)

* `Unknown` (value: `"Unknown"`)




