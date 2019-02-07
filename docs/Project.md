# HyperOneApi.Project

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
**accessRights** | [**ProjectAccessRights**](ProjectAccessRights.md) |  | [optional] 
**processing** | **Boolean** |  | [optional] 
**created** | **Boolean** |  | [optional] 
**queue** | [**[Event]**](Event.md) |  | [optional] 
**state** | **String** |  | [optional] 
**tag** | [**Object**](.md) |  | [optional] 
**project** | **String** |  | [optional] 
**bankAccount** | **String** |  | [optional] 
**organisation** | **String** |  | [optional] 
**billing** | [**ProjectBilling**](ProjectBilling.md) |  | [optional] 
**invoices** | [**ProjectInvoices**](ProjectInvoices.md) |  | [optional] 
**payments** | [**Payment**](Payment.md) |  | [optional] 
**verified** | **String** |  | [optional] 
**active** | **Boolean** |  | [optional] 
**limit** | [**ProjectLimit**](ProjectLimit.md) |  | [optional] 
**threshold** | [**ProjectThreshold**](ProjectThreshold.md) |  | [optional] 
**roles** | [**[ProjectRoles]**](ProjectRoles.md) |  | [optional] 
**networkAcl** | [**ProjectNetworkAcl**](ProjectNetworkAcl.md) |  | [optional] 
**compliance** | [**ProjectCompliance**](ProjectCompliance.md) |  | [optional] 
**transfer** | [**ProjectTransfer**](ProjectTransfer.md) |  | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `Active` (value: `"Active"`)

* `Inactive` (value: `"Inactive"`)

* `Limited` (value: `"Limited"`)




