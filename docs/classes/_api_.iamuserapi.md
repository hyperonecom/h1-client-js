**h1-client-ts**

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

* [iamUserCredentialAuthtokenDelete](_api_.iamuserapi.md#iamusercredentialauthtokendelete)
* [iamUserCredentialAuthtokenGet](_api_.iamuserapi.md#iamusercredentialauthtokenget)
* [iamUserCredentialAuthtokenList](_api_.iamuserapi.md#iamusercredentialauthtokenlist)
* [iamUserCredentialCreate](_api_.iamuserapi.md#iamusercredentialcreate)
* [iamUserCredentialDelete](_api_.iamuserapi.md#iamusercredentialdelete)
* [iamUserCredentialGet](_api_.iamuserapi.md#iamusercredentialget)
* [iamUserCredentialList](_api_.iamuserapi.md#iamusercredentiallist)
* [iamUserCredentialPatch](_api_.iamuserapi.md#iamusercredentialpatch)
* [iamUserGet](_api_.iamuserapi.md#iamuserget)
* [iamUserServiceGet](_api_.iamuserapi.md#iamuserserviceget)
* [iamUserServiceList](_api_.iamuserapi.md#iamuserservicelist)
* [iamUserUpdate](_api_.iamuserapi.md#iamuserupdate)

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

### iamUserCredentialAuthtokenDelete

▸ **iamUserCredentialAuthtokenDelete**(`userId`: string, `authtokenId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:40131*

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

### iamUserCredentialAuthtokenGet

▸ **iamUserCredentialAuthtokenGet**(`userId`: string, `authtokenId`: string, `options?`: any): Promise\<AxiosResponse\<[AuthToken](../interfaces/_api_.authtoken.md)>>

*Defined in api.ts:40144*

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

### iamUserCredentialAuthtokenList

▸ **iamUserCredentialAuthtokenList**(`userId`: string, `options?`: any): Promise\<AxiosResponse\<[AuthToken](../interfaces/_api_.authtoken.md)[]>>

*Defined in api.ts:40156*

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

### iamUserCredentialCreate

▸ **iamUserCredentialCreate**(`userId`: string, `userCredential`: [UserCredential](../interfaces/_api_.usercredential.md), `options?`: any): Promise\<AxiosResponse\<[UserCredential](../interfaces/_api_.usercredential.md)>>

*Defined in api.ts:40169*

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

### iamUserCredentialDelete

▸ **iamUserCredentialDelete**(`userId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[User](../interfaces/_api_.user.md)>>

*Defined in api.ts:40182*

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

### iamUserCredentialGet

▸ **iamUserCredentialGet**(`userId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[UserCredential](../interfaces/_api_.usercredential.md)>>

*Defined in api.ts:40195*

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

### iamUserCredentialList

▸ **iamUserCredentialList**(`userId`: string, `options?`: any): Promise\<AxiosResponse\<[UserCredential](../interfaces/_api_.usercredential.md)[]>>

*Defined in api.ts:40207*

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

### iamUserCredentialPatch

▸ **iamUserCredentialPatch**(`userId`: string, `credentialId`: string, `iamUserCredentialPatch`: [IamUserCredentialPatch](../interfaces/_api_.iamusercredentialpatch.md), `options?`: any): Promise\<AxiosResponse\<[UserCredential](../interfaces/_api_.usercredential.md)>>

*Defined in api.ts:40221*

Update iam/user.credential

**`summary`** Update iam/user.credential

**`throws`** {RequiredError}

**`memberof`** IamUserApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | User Id |
`credentialId` | string | credentialId |
`iamUserCredentialPatch` | [IamUserCredentialPatch](../interfaces/_api_.iamusercredentialpatch.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[UserCredential](../interfaces/_api_.usercredential.md)>>

___

### iamUserGet

▸ **iamUserGet**(`userId`: string, `options?`: any): Promise\<AxiosResponse\<[User](../interfaces/_api_.user.md)>>

*Defined in api.ts:40233*

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

### iamUserServiceGet

▸ **iamUserServiceGet**(`userId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:40246*

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

### iamUserServiceList

▸ **iamUserServiceList**(`userId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:40258*

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

### iamUserUpdate

▸ **iamUserUpdate**(`userId`: string, `iamUserUpdate`: [IamUserUpdate](../interfaces/_api_.iamuserupdate.md), `options?`: any): Promise\<AxiosResponse\<[User](../interfaces/_api_.user.md)>>

*Defined in api.ts:40271*

Returns modified user

**`summary`** Update iam/user

**`throws`** {RequiredError}

**`memberof`** IamUserApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | User Id |
`iamUserUpdate` | [IamUserUpdate](../interfaces/_api_.iamuserupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[User](../interfaces/_api_.user.md)>>
