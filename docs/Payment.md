# HyperoneClient.Payment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
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
**creditsFree** | **Number** |  | [optional] 
**credits** | **Number** |  | [optional] 
**channel** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**type** | **String** |  | [optional] 



## Enum: ChannelEnum


* `bank` (value: `"bank"`)

* `dotpay` (value: `"dotpay"`)

* `promo` (value: `"promo"`)

* `paypal` (value: `"paypal"`)

* `ecard` (value: `"ecard"`)

* `przelewy24` (value: `"przelewy24"`)





## Enum: TypeEnum


* `bonus` (value: `"bonus"`)

* `refund` (value: `"refund"`)

* `money` (value: `"money"`)




