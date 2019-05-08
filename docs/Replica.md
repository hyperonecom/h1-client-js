# HyperOneApi.Replica

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



## Enum: StateEnum


* `Error` (value: `"Error"`)

* `FailOverWaitingCompletion` (value: `"FailOverWaitingCompletion"`)

* `FailedOver` (value: `"FailedOver"`)

* `NotApplicable` (value: `"NotApplicable"`)

* `ReadyForInitialReplication` (value: `"ReadyForInitialReplication"`)

* `Replicating` (value: `"Replicating"`)

* `Resynchronizing` (value: `"Resynchronizing"`)

* `ResynchronizeSuspended` (value: `"ResynchronizeSuspended"`)

* `Suspended` (value: `"Suspended"`)

* `SyncedReplicationComplete` (value: `"SyncedReplicationComplete"`)

* `WaitingForInitialReplication` (value: `"WaitingForInitialReplication"`)

* `WaitingForStartResynchronize` (value: `"WaitingForStartResynchronize"`)

* `Unknown` (value: `"Unknown"`)




