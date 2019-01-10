# HyperOneApi.Disk

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**services** | [**[ContainerServices]**](ContainerServices.md) |  | [optional] 
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
**type** | **String** |  | [optional] 
**size** | **Number** |  | [optional] 
**vm** | **String** |  | [optional] 
**persistent** | **String** |  | [optional] 
**downloadUrl** | **String** |  | [optional] 
**metadata** | [**DiskMetadata1**](DiskMetadata1.md) |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `archive` (value: `"archive"`)

* `volume` (value: `"volume"`)

* `ssd` (value: `"ssd"`)

* `hissd` (value: `"hissd"`)

* `ephemeral-hissd` (value: `"ephemeral-hissd"`)

* `replica` (value: `"replica"`)




