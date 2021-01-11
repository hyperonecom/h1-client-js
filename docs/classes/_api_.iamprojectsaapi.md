**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / IamProjectSaApi

# Class: IamProjectSaApi

IamProjectSaApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **IamProjectSaApi**

## Index

### Constructors

* [constructor](_api_.iamprojectsaapi.md#constructor)

### Properties

* [axios](_api_.iamprojectsaapi.md#axios)
* [basePath](_api_.iamprojectsaapi.md#basepath)
* [configuration](_api_.iamprojectsaapi.md#configuration)

### Methods

* [iamProjectSaCreate](_api_.iamprojectsaapi.md#iamprojectsacreate)
* [iamProjectSaCredentialCreate](_api_.iamprojectsaapi.md#iamprojectsacredentialcreate)
* [iamProjectSaCredentialDelete](_api_.iamprojectsaapi.md#iamprojectsacredentialdelete)
* [iamProjectSaCredentialGet](_api_.iamprojectsaapi.md#iamprojectsacredentialget)
* [iamProjectSaCredentialList](_api_.iamprojectsaapi.md#iamprojectsacredentiallist)
* [iamProjectSaCredentialPatch](_api_.iamprojectsaapi.md#iamprojectsacredentialpatch)
* [iamProjectSaDelete](_api_.iamprojectsaapi.md#iamprojectsadelete)
* [iamProjectSaEventGet](_api_.iamprojectsaapi.md#iamprojectsaeventget)
* [iamProjectSaEventList](_api_.iamprojectsaapi.md#iamprojectsaeventlist)
* [iamProjectSaGet](_api_.iamprojectsaapi.md#iamprojectsaget)
* [iamProjectSaList](_api_.iamprojectsaapi.md#iamprojectsalist)
* [iamProjectSaServiceGet](_api_.iamprojectsaapi.md#iamprojectsaserviceget)
* [iamProjectSaServiceList](_api_.iamprojectsaapi.md#iamprojectsaservicelist)
* [iamProjectSaTagCreate](_api_.iamprojectsaapi.md#iamprojectsatagcreate)
* [iamProjectSaTagDelete](_api_.iamprojectsaapi.md#iamprojectsatagdelete)
* [iamProjectSaTagGet](_api_.iamprojectsaapi.md#iamprojectsatagget)
* [iamProjectSaTagList](_api_.iamprojectsaapi.md#iamprojectsataglist)
* [iamProjectSaTagPut](_api_.iamprojectsaapi.md#iamprojectsatagput)
* [iamProjectSaUpdate](_api_.iamprojectsaapi.md#iamprojectsaupdate)

## Constructors

### constructor

\+ **new IamProjectSaApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [IamProjectSaApi](_api_.iamprojectsaapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [IamProjectSaApi](_api_.iamprojectsaapi.md)

## Properties

### axios

• `Protected` **axios**: AxiosInstance

*Inherited from [BaseAPI](_base_.baseapi.md).[axios](_base_.baseapi.md#axios)*

*Defined in base.ts:52*

___

### basePath

• `Protected` **basePath**: string

*Inherited from [BaseAPI](_base_.baseapi.md).[basePath](_base_.baseapi.md#basepath)*

*Defined in base.ts:52*

___

### configuration

• `Protected` **configuration**: [Configuration](_configuration_.configuration.md) \| undefined

*Inherited from [BaseAPI](_base_.baseapi.md).[configuration](_base_.baseapi.md#configuration)*

*Defined in base.ts:50*

## Methods

### iamProjectSaCreate

▸ **iamProjectSaCreate**(`projectId`: string, `iamProjectSaCreate`: [IamProjectSaCreate](../interfaces/_api_.iamprojectsacreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Sa](../interfaces/_api_.sa.md)>>

*Defined in api.ts:41750*

Create sa

**`summary`** Create iam/sa

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`iamProjectSaCreate` | [IamProjectSaCreate](../interfaces/_api_.iamprojectsacreate.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Sa](../interfaces/_api_.sa.md)>>

___

### iamProjectSaCredentialCreate

▸ **iamProjectSaCredentialCreate**(`projectId`: string, `saId`: string, `saCredential`: [SaCredential](../interfaces/_api_.sacredential.md), `options?`: any): Promise\<AxiosResponse\<[SaCredential](../interfaces/_api_.sacredential.md)>>

*Defined in api.ts:41764*

Create iam/sa.credential

**`summary`** Create iam/sa.credential

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`saCredential` | [SaCredential](../interfaces/_api_.sacredential.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[SaCredential](../interfaces/_api_.sacredential.md)>>

___

### iamProjectSaCredentialDelete

▸ **iamProjectSaCredentialDelete**(`projectId`: string, `saId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[Sa](../interfaces/_api_.sa.md)>>

*Defined in api.ts:41778*

Delete iam/sa.credential

**`summary`** Delete iam/sa.credential

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Sa](../interfaces/_api_.sa.md)>>

___

### iamProjectSaCredentialGet

▸ **iamProjectSaCredentialGet**(`projectId`: string, `saId`: string, `credentialId`: string, `options?`: any): Promise\<AxiosResponse\<[SaCredential](../interfaces/_api_.sacredential.md)>>

*Defined in api.ts:41792*

Get iam/sa.credential

**`summary`** Get iam/sa.credential

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`credentialId` | string | credentialId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[SaCredential](../interfaces/_api_.sacredential.md)>>

___

### iamProjectSaCredentialList

▸ **iamProjectSaCredentialList**(`projectId`: string, `saId`: string, `options?`: any): Promise\<AxiosResponse\<[SaCredential](../interfaces/_api_.sacredential.md)[]>>

*Defined in api.ts:41805*

List iam/sa.credential

**`summary`** List iam/sa.credential

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[SaCredential](../interfaces/_api_.sacredential.md)[]>>

___

### iamProjectSaCredentialPatch

▸ **iamProjectSaCredentialPatch**(`projectId`: string, `saId`: string, `credentialId`: string, `iamProjectSaCredentialPatch`: [IamProjectSaCredentialPatch](../interfaces/_api_.iamprojectsacredentialpatch.md), `options?`: any): Promise\<AxiosResponse\<[SaCredential](../interfaces/_api_.sacredential.md)>>

*Defined in api.ts:41820*

Update iam/sa.credential

**`summary`** Update iam/sa.credential

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`credentialId` | string | credentialId |
`iamProjectSaCredentialPatch` | [IamProjectSaCredentialPatch](../interfaces/_api_.iamprojectsacredentialpatch.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[SaCredential](../interfaces/_api_.sacredential.md)>>

___

### iamProjectSaDelete

▸ **iamProjectSaDelete**(`projectId`: string, `saId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:41833*

Delete sa

**`summary`** Delete iam/sa

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamProjectSaEventGet

▸ **iamProjectSaEventGet**(`projectId`: string, `saId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:41847*

Get iam/sa.event

**`summary`** Get iam/sa.event

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### iamProjectSaEventList

▸ **iamProjectSaEventList**(`projectId`: string, `saId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:41862*

List iam/sa.event

**`summary`** List iam/sa.event

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### iamProjectSaGet

▸ **iamProjectSaGet**(`projectId`: string, `saId`: string, `options?`: any): Promise\<AxiosResponse\<[Sa](../interfaces/_api_.sa.md)>>

*Defined in api.ts:41875*

Returns a single sa

**`summary`** Get iam/sa

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Sa](../interfaces/_api_.sa.md)>>

___

### iamProjectSaList

▸ **iamProjectSaList**(`projectId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Sa](../interfaces/_api_.sa.md)[]>>

*Defined in api.ts:41890*

List sa

**`summary`** List iam/sa

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Sa](../interfaces/_api_.sa.md)[]>>

___

### iamProjectSaServiceGet

▸ **iamProjectSaServiceGet**(`projectId`: string, `saId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:41904*

Get iam/sa.service

**`summary`** Get iam/sa.service

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### iamProjectSaServiceList

▸ **iamProjectSaServiceList**(`projectId`: string, `saId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:41917*

List iam/sa.service

**`summary`** List iam/sa.service

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### iamProjectSaTagCreate

▸ **iamProjectSaTagCreate**(`projectId`: string, `saId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:41931*

Create iam/sa.tag

**`summary`** Create iam/sa.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### iamProjectSaTagDelete

▸ **iamProjectSaTagDelete**(`projectId`: string, `saId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:41945*

Delete iam/sa.tag

**`summary`** Delete iam/sa.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamProjectSaTagGet

▸ **iamProjectSaTagGet**(`projectId`: string, `saId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:41959*

Get iam/sa.tag

**`summary`** Get iam/sa.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### iamProjectSaTagList

▸ **iamProjectSaTagList**(`projectId`: string, `saId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:41972*

List iam/sa.tag

**`summary`** List iam/sa.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### iamProjectSaTagPut

▸ **iamProjectSaTagPut**(`projectId`: string, `saId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:41986*

Replace iam/sa.tag

**`summary`** Replace iam/sa.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### iamProjectSaUpdate

▸ **iamProjectSaUpdate**(`projectId`: string, `saId`: string, `iamProjectSaUpdate`: [IamProjectSaUpdate](../interfaces/_api_.iamprojectsaupdate.md), `options?`: any): Promise\<AxiosResponse\<[Sa](../interfaces/_api_.sa.md)>>

*Defined in api.ts:42000*

Returns modified sa

**`summary`** Update iam/sa

**`throws`** {RequiredError}

**`memberof`** IamProjectSaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`saId` | string | Sa Id |
`iamProjectSaUpdate` | [IamProjectSaUpdate](../interfaces/_api_.iamprojectsaupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Sa](../interfaces/_api_.sa.md)>>
