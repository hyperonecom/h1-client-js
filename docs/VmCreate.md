# HyperOneApi.VmCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**image** | **String** |  | [optional] 
**iso** | **String** |  | [optional] 
**service** | **String** |  | 
**username** | **String** |  | [optional] 
**password** | [**VmCreatePassword**](VmCreatePassword.md) |  | [optional] 
**sshKeys** | **[String]** | - user credential (by id or name) - project credential (by id or name) - raw openssh public key (starting with &#x60;ssh-rsa &#x60;) | [optional] 
**userMetadata** | **String** |  | [optional] 
**disk** | [**[VmCreateDisk]**](VmCreateDisk.md) |  | [optional] 
**netadp** | [**[VmCreateNetadp]**](VmCreateNetadp.md) |  | [optional] 
**boot** | **Boolean** |  | [optional] 
**cloud** | **String** |  | [optional] 
**tag** | [**Object**](.md) |  | [optional] 


