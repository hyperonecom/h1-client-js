# HyperOneApi.Payment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**services** | **String** |  | [optional] 
**flavour** | **String** |  | [optional] 
**modifiedOn** | **Date** |  | [optional] 
**modifiedBy** | **String** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**createdOn** | **Date** |  | [optional] 
**accessRights** | **String** |  | [optional] 
**processing** | **String** |  | [optional] 
**created** | **Boolean** |  | [optional] 
**queue** | [**[Event]**](Event.md) |  | [optional] 
**state** | **String** |  | [optional] 
**tag** | [**Object**](.md) |  | [optional] 
**project** | **String** |  | [optional] 
**creditsFree** | **Number** |  | [optional] 
**credits** | **Number** |  | [optional] 
**channel** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**type** | **String** |  | [optional] 


<a name="ChannelEnum"></a>
## Enum: ChannelEnum


* `bank` (value: `"bank"`)

* `dotpay` (value: `"dotpay"`)

* `promo` (value: `"promo"`)

* `paypal` (value: `"paypal"`)

* `ecard` (value: `"ecard"`)

* `przelewy24` (value: `"przelewy24"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `bonus` (value: `"bonus"`)

* `refund` (value: `"refund"`)

* `money` (value: `"money"`)




