# HyperoneClient.Project

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
**accessRights** | [**[ProjectAccessRights]**](ProjectAccessRights.md) |  | [optional] 
**processing** | **Boolean** |  | [optional] 
**created** | **Boolean** |  | [optional] 
**queue** | [**[Event]**](Event.md) |  | [optional] 
**state** | **String** |  | [optional] 
**tag** | **{String: String}** |  | [optional] 
**project** | **String** |  | [optional] 
**bankAccount** | **String** |  | [optional] 
**organisation** | **String** |  | [optional] 
**billing** | [**ProjectBilling**](ProjectBilling.md) |  | [optional] 
**verified** | **String** |  | [optional] 
**active** | **Boolean** |  | [optional] [default to true]
**limit** | [**ProjectLimit**](ProjectLimit.md) |  | [optional] 
**threshold** | [**ProjectThreshold**](ProjectThreshold.md) |  | [optional] 
**roles** | [**[ProjectRoles]**](ProjectRoles.md) |  | [optional] 
**networkAcl** | [**[UserNetworkAcl]**](UserNetworkAcl.md) |  | [optional] 
**compliance** | [**ProjectCompliance**](ProjectCompliance.md) |  | [optional] 
**transfer** | [**ProjectTransfer**](ProjectTransfer.md) |  | [optional] 



## Enum: StateEnum


* `Active` (value: `"Active"`)

* `Inactive` (value: `"Inactive"`)

* `Limited` (value: `"Limited"`)




