# HyperOneApi.Ip

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**services** | [**[ProjectServices]**](ProjectServices.md) |  | [optional] 
**flavour** | **String** |  | [optional] 
**modifiedOn** | **Date** |  | [optional] 
**modifiedBy** | **String** |  | [optional] [default to &#39;&#39;]
**createdBy** | **String** |  | [optional] [default to &#39;&#39;]
**createdOn** | **Date** |  | [optional] 
**accessRights** | **[String]** |  | [optional] 
**processing** | **Boolean** |  | [optional] 
**created** | **Boolean** |  | [optional] 
**queue** | [**[Event]**](Event.md) |  | [optional] 
**state** | **String** |  | [optional] 
**tag** | [**Object**](.md) |  | [optional] 
**project** | **String** |  | [optional] 
**address** | **String** |  | [optional] 
**fqdn** | **String** |  | [optional] 
**network** | **String** |  | [optional] 
**ptrRecord** | **String** |  | [optional] 
**persistent** | **Boolean** |  | [optional] 
**associated** | [**IpAssociated**](IpAssociated.md) |  | [optional] 



## Enum: StateEnum


* `Associated` (value: `"Associated"`)

* `Allocated` (value: `"Allocated"`)

* `Unallocated` (value: `"Unallocated"`)




