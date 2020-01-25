# HyperoneClient.Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**queued** | **Date** |  | [optional] 
**state** | **String** |  | [optional] [default to &#39;pending&#39;]
**stage** | **String** |  | [optional] 
**resource** | [**EventResource**](EventResource.md) |  | [optional] 



## Enum: StateEnum


* `pending` (value: `"pending"`)

* `processing` (value: `"processing"`)

* `finished` (value: `"finished"`)

* `error` (value: `"error"`)




