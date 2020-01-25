# HyperoneClient.Reservation

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
**resource** | **String** |  | [optional] 
**assigned** | **String** |  | [optional] 
**sourceService** | **String** |  | [optional] 



## Enum: StateEnum


* `Detached` (value: `"Detached"`)

* `Attached` (value: `"Attached"`)

* `Expired` (value: `"Expired"`)

* `Billing` (value: `"Billing"`)

* `Unknown` (value: `"Unknown"`)




