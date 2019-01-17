# HyperOneApi.Vm

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
**accessRights** | **[String]** |  | [optional] 
**processing** | **Boolean** |  | [optional] 
**created** | **Boolean** |  | [optional] 
**queue** | [**[Event]**](Event.md) |  | [optional] 
**state** | **String** |  | [optional] 
**tag** | [**Object**](.md) |  | [optional] 
**project** | **String** |  | [optional] 
**sourceImage** | [**VmSourceImage**](VmSourceImage.md) |  | [optional] 
**userMetadata** | **String** |  | [optional] 
**cpu** | **Number** |  | [optional] 
**memory** | **Number** |  | [optional] 
**data** | [**VmData**](VmData.md) |  | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `Other` (value: `"Other"`)

* `Running` (value: `"Running"`)

* `Off` (value: `"Off"`)

* `Stopping` (value: `"Stopping"`)

* `Saved` (value: `"Saved"`)

* `Paused` (value: `"Paused"`)

* `Starting` (value: `"Starting"`)

* `Reset` (value: `"Reset"`)

* `Saving` (value: `"Saving"`)

* `Pausing` (value: `"Pausing"`)

* `Resuming` (value: `"Resuming"`)

* `FastSaved` (value: `"FastSaved"`)

* `FastSaving` (value: `"FastSaving"`)

* `RunningCritical` (value: `"RunningCritical"`)

* `OffCritical` (value: `"OffCritical"`)

* `StoppingCritical` (value: `"StoppingCritical"`)

* `SavedCritical` (value: `"SavedCritical"`)

* `PausedCritical` (value: `"PausedCritical"`)

* `StartingCritical` (value: `"StartingCritical"`)

* `ResetCritical` (value: `"ResetCritical"`)

* `SavingCritical` (value: `"SavingCritical"`)

* `PausingCritical` (value: `"PausingCritical"`)

* `ResumingCritical` (value: `"ResumingCritical"`)

* `FastSavedCritical` (value: `"FastSavedCritical"`)

* `FastSavingCritical` (value: `"FastSavingCritical"`)

* `Unknown` (value: `"Unknown"`)




