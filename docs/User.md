# HyperOneApi.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**name** | **String** |  | [optional] [default to &#39;&#39;]
**familyName** | **String** |  | [optional] [default to &#39;&#39;]
**createdOn** | **Date** |  | [optional] 
**modifiedOn** | **Date** |  | [optional] 
**passwordReset** | [**UserPasswordReset**](UserPasswordReset.md) |  | [optional] 
**verified** | **Boolean** |  | [optional] [default to false]
**lang** | **String** |  | [optional] [default to &#39;en&#39;]
**phone** | **String** |  | [optional] [default to &#39;&#39;]
**lastLogin** | [**[UserLastLogin]**](UserLastLogin.md) |  | [optional] 
**limit** | [**UserLimit**](UserLimit.md) |  | [optional] 
**credential** | [**UserCredential**](UserCredential.md) |  | [optional] 
**networkAcl** | [**[UserNetworkAcl]**](UserNetworkAcl.md) |  | [optional] 



## Enum: LangEnum


* `en` (value: `"en"`)

* `pl` (value: `"pl"`)




