# HyperOneApi.Netadp

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
**macaddress** | **String** |  | [optional] 
**speed** | **Number** |  | [optional] 
**fqdn** | **String** |  | [optional] 
**network** | [**Network**](Network.md) |  | [optional] 
**ip** | [**[Ip]**](Ip.md) |  | [optional] 
**assigned** | [**NetadpAssigned**](NetadpAssigned.md) |  | [optional] 



## Enum: StateEnum


* `Online` (value: `"Online"`)

* `Deallocated` (value: `"Deallocated"`)

* `Unknown` (value: `"Unknown"`)




