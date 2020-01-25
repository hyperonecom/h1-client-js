# HyperoneClient.Container

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
**image** | **String** |  | [optional] 
**command** | **String** |  | [optional] 
**volumes** | [**[ContainerVolumes]**](ContainerVolumes.md) |  | [optional] 
**expose** | [**[ContainerExpose]**](ContainerExpose.md) |  | [optional] 
**env** | **[String]** |  | [optional] 
**fqdn** | **String** |  | [optional] 



## Enum: StateEnum


* `Running` (value: `"Running"`)

* `Off` (value: `"Off"`)

* `Unknown` (value: `"Unknown"`)




