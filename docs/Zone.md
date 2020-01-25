# HyperoneClient.Zone

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
**rrsets** | [**[ZoneRrsets]**](ZoneRrsets.md) |  | [optional] 
**dnsName** | **String** |  | [optional] 
**recordset** | [**[ZoneRecordset]**](ZoneRecordset.md) |  | [optional] 
**nameserver** | **[String]** |  | [optional] 
**fqdn** | **String** |  | [optional] 



## Enum: StateEnum


* `Online` (value: `"Online"`)

* `Offline` (value: `"Offline"`)

* `Unknown` (value: `"Unknown"`)




