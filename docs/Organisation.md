# HyperOneApi.Organisation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**services** | **String** |  | [optional] 
**flavour** | **String** |  | [optional] 
**modifiedOn** | **Date** |  | [optional] 
**modifiedBy** | **String** |  | [optional] [default to &#39;&#39;]
**createdBy** | **String** |  | [optional] [default to &#39;&#39;]
**createdOn** | **Date** |  | [optional] 
**accessRights** | [**[ProjectAccessRights]**](ProjectAccessRights.md) |  | [optional] 
**processing** | **Boolean** |  | [optional] 
**created** | **Boolean** |  | [optional] 
**queue** | [**[Event]**](Event.md) |  | [optional] 
**state** | **String** |  | [optional] 
**tag** | [**Object**](.md) |  | [optional] 
**project** | **String** |  | [optional] 
**billing** | [**OrganisationBilling**](OrganisationBilling.md) |  | [optional] 
**verified** | **Number** |  | [optional] [default to 0]
**limit** | [**OrganisationLimit**](OrganisationLimit.md) |  | [optional] 
**roles** | [**[ProjectRoles]**](ProjectRoles.md) |  | [optional] 
**transfer** | [**OrganisationTransfer**](OrganisationTransfer.md) |  | [optional] 
**bankAccount** | **String** |  | [optional] 



## Enum: StateEnum


* `Active` (value: `"Active"`)

* `Inactive` (value: `"Inactive"`)

* `Limited` (value: `"Limited"`)




