# HyperoneClient.Disk

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
**type** | **String** |  | [optional] 
**size** | **Number** |  | [optional] 
**vm** | **String** |  | [optional] 
**persistent** | **Boolean** |  | [optional] 
**metadata** | [**DiskMetadata**](DiskMetadata.md) |  | [optional] 



## Enum: StateEnum


* `Uploading` (value: `"Uploading"`)

* `Online` (value: `"Online"`)

* `Attached` (value: `"Attached"`)

* `Detached` (value: `"Detached"`)

* `Unknown` (value: `"Unknown"`)





## Enum: TypeEnum


* `archive` (value: `"archive"`)

* `volume` (value: `"volume"`)

* `ssd` (value: `"ssd"`)

* `hissd` (value: `"hissd"`)

* `ephemeral-hissd` (value: `"ephemeral-hissd"`)

* `replica` (value: `"replica"`)




