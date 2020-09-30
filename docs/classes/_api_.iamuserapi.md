**hyperone**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / IamUserApi

# Class: IamUserApi

IamUserApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **IamUserApi**

## Index

### Constructors

* [constructor](_api_.iamuserapi.md#constructor)

### Properties

* [axios](_api_.iamuserapi.md#axios)
* [basePath](_api_.iamuserapi.md#basepath)
* [configuration](_api_.iamuserapi.md#configuration)

### Methods

* [userCredentialAuthtokenDelete](_api_.iamuserapi.md#usercredentialauthtokendelete)
* [userCredentialAuthtokenGet](_api_.iamuserapi.md#usercredentialauthtokenget)
* [userCredentialAuthtokenList](_api_.iamuserapi.md#usercredentialauthtokenlist)
* [userCredentialCreate](_api_.iamuserapi.md#usercredentialcreate)
* [userCredentialDelete](_api_.iamuserapi.md#usercredentialdelete)
* [userCredentialGet](_api_.iamuserapi.md#usercredentialget)
* [userCredentialList](_api_.iamuserapi.md#usercredentiallist)
* [userCredentialPatch](_api_.iamuserapi.md#usercredentialpatch)
* [userGet](_api_.iamuserapi.md#userget)
* [userServiceGet](_api_.iamuserapi.md#userserviceget)
* [userServiceList](_api_.iamuserapi.md#userservicelist)
* [userUpdate](_api_.iamuserapi.md#userupdate)

## Constructors

### constructor

\+ **new IamUserApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [IamUserApi](_api_.iamuserapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [IamUserApi](_api_.iamuserapi.md)

## Properties

### axios

• `Protected` **axios**: AxiosInstance

*Inherited from [BaseAPI](_base_.baseapi.md).[axios](_base_.baseapi.md#axios)*

*Defined in base.ts:51*

___

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](_base_.baseapi.md).[basePath](_base_.baseapi.md#basepath)*

*Defined in base.ts:51*

___

### configuration

• `Protected` **configuration**: [Configuration](_configuration_.configuration.md) \| undefined

*Inherited from [BaseAPI](_base_.baseapi.md).[configuration](_base_.baseapi.md#configuration)*

*Defined in base.ts:49*

## Methods

### userCredentialAuthtokenDelete

▸ **userCredentialAuthtokenDelete**(`userId`: string, `authtokenId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:38006*

Delete iam/user.credential

**`summary`** Delete iam/user.credential

**`throws`** {RequiredError}

**`memberof`** IamUserApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | User Id |
`authtokenId` | string | authtokenId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### userCredentialAuthtokenGet

▸ **userCredentialAuthtokenGet**(`userId`: string, `authtokenId`: string, `options?`: any): Promise\<AxiosResponse\<[AuthToken](../interfaces/_api_.authtoken.md)>>

*Defined in api.ts:38019*

Get iam/user.credential

**`summary`** Get iam/user.credential

**`throws`** {RequiredError}

**`memberof`** IamUserApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | User Id |
`authtokenId` | string | authtokenId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[AuthToken](../interfaces/_api_.authtoken.md)>>

___

### userCredentialAuthtokenList

▸ **userCredentialAuthtokenList**(`userId`: string, `options?`: any): Promise\<AxiosResponse\<[AuthToken](../interfaces/_api_.authtoken.md)[]>>

*Defined in api.ts:38031*

List iam/user.credential

**`summary`** List iam/user.credential

**`throws`** {RequiredError}

**`memberof`** IamUserApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | User Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[AuthToken](../interfaces/_api_.authtoken.md)[]>>

___

### userCredentialCreate

▸ **userCredentialCreate**(`userId`: string, `userCredential`: [UserCredential](../interfaces/_api_.usercredential.md), `options?`: any): Promise\<AxiosResponse\<[UserCredential](../interfaces/_api_.usercredential.md)>>

*Defined in api.ts:38044*

Create iam/user.credential

**`summary`** Create iam/user.credential

**`throws`** {RequiredError}

**`memberof`** IamUserApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | User Id |
`userCredential` | [UserCredential](../interfaces/_api_.usercredential.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[UserCredential](../interfaces/_api_.usercredential.md)>>

___

### userCredentialDelete

▸ **userCredentialDelete**(`userId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[User](../interfaces/_api_.user.md)>>

*Defined in api.ts:38057*

Delete iam/user.credential

**`summary`** Delete iam/user.credential

**`throws`** {RequiredError}

**`memberof`** IamUserApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | User Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[User](../interfaces/_api_.user.md)>>

___

### userCredentialGet

▸ **userCredentialGet**(`userId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[UserCredential](../interfaces/_api_.usercredential.md)>>

*Defined in api.ts:38070*

Get iam/user.credential

**`summary`** Get iam/user.credential

**`throws`** {RequiredError}

**`memberof`** IamUserApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | User Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[UserCredential](../interfaces/_api_.usercredential.md)>>

___

### userCredentialList

▸ **userCredentialList**(`userId`: string, `options?`: any): Promise\<AxiosResponse\<[UserCredential](../interfaces/_api_.usercredential.md)[]>>

*Defined in api.ts:38082*

List iam/user.credential

**`summary`** List iam/user.credential

**`throws`** {RequiredError}

**`memberof`** IamUserApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | User Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[UserCredential](../interfaces/_api_.usercredential.md)[]>>

___

### userCredentialPatch

▸ **userCredentialPatch**(`userId`: string, `credentialId`: string, `userCredentialPatch`: [UserCredentialPatch](../interfaces/_api_.usercredentialpatch.md), `options?`: any): Promise\<AxiosResponse\<[UserCredential](../interfaces/_api_.usercredential.md)>>

*Defined in api.ts:38096*

Update iam/user.credential

**`summary`** Update iam/user.credential

**`throws`** {RequiredError}

**`memberof`** IamUserApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | User Id |
`credentialId` | string | credentialId |
`userCredentialPatch` | [UserCredentialPatch](../interfaces/_api_.usercredentialpatch.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[UserCredential](../interfaces/_api_.usercredential.md)>>

___

### userGet

▸ **userGet**(`userId`: string, `options?`: any): Promise\<AxiosResponse\<[User](../interfaces/_api_.user.md)>>

*Defined in api.ts:38108*

Returns a single user

**`summary`** Get iam/user

**`throws`** {RequiredError}

**`memberof`** IamUserApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | User Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[User](../interfaces/_api_.user.md)>>

___

### userServiceGet

▸ **userServiceGet**(`userId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:38121*

Get iam/user.service

**`summary`** Get iam/user.service

**`throws`** {RequiredError}

**`memberof`** IamUserApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | User Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### userServiceList

▸ **userServiceList**(`userId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:38133*

List iam/user.service

**`summary`** List iam/user.service

**`throws`** {RequiredError}

**`memberof`** IamUserApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | User Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### userUpdate

▸ **userUpdate**(`userId`: string, `userUpdate`: [UserUpdate](../interfaces/_api_.userupdate.md), `options?`: any): Promise\<AxiosResponse\<[User](../interfaces/_api_.user.md)>>

*Defined in api.ts:38146*

Returns modified user

**`summary`** Update iam/user

**`throws`** {RequiredError}

**`memberof`** IamUserApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | User Id |
`userUpdate` | [UserUpdate](../interfaces/_api_.userupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[User](../interfaces/_api_.user.md)>>
