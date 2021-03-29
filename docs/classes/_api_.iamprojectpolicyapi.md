**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / IamProjectPolicyApi

# Class: IamProjectPolicyApi

IamProjectPolicyApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **IamProjectPolicyApi**

## Index

### Constructors

* [constructor](_api_.iamprojectpolicyapi.md#constructor)

### Properties

* [axios](_api_.iamprojectpolicyapi.md#axios)
* [basePath](_api_.iamprojectpolicyapi.md#basepath)
* [configuration](_api_.iamprojectpolicyapi.md#configuration)

### Methods

* [iamProjectPolicyActorCreate](_api_.iamprojectpolicyapi.md#iamprojectpolicyactorcreate)
* [iamProjectPolicyActorDelete](_api_.iamprojectpolicyapi.md#iamprojectpolicyactordelete)
* [iamProjectPolicyActorGet](_api_.iamprojectpolicyapi.md#iamprojectpolicyactorget)
* [iamProjectPolicyActorList](_api_.iamprojectpolicyapi.md#iamprojectpolicyactorlist)
* [iamProjectPolicyCreate](_api_.iamprojectpolicyapi.md#iamprojectpolicycreate)
* [iamProjectPolicyDelete](_api_.iamprojectpolicyapi.md#iamprojectpolicydelete)
* [iamProjectPolicyEventGet](_api_.iamprojectpolicyapi.md#iamprojectpolicyeventget)
* [iamProjectPolicyEventList](_api_.iamprojectpolicyapi.md#iamprojectpolicyeventlist)
* [iamProjectPolicyGet](_api_.iamprojectpolicyapi.md#iamprojectpolicyget)
* [iamProjectPolicyList](_api_.iamprojectpolicyapi.md#iamprojectpolicylist)
* [iamProjectPolicyServiceGet](_api_.iamprojectpolicyapi.md#iamprojectpolicyserviceget)
* [iamProjectPolicyServiceList](_api_.iamprojectpolicyapi.md#iamprojectpolicyservicelist)
* [iamProjectPolicyTagCreate](_api_.iamprojectpolicyapi.md#iamprojectpolicytagcreate)
* [iamProjectPolicyTagDelete](_api_.iamprojectpolicyapi.md#iamprojectpolicytagdelete)
* [iamProjectPolicyTagGet](_api_.iamprojectpolicyapi.md#iamprojectpolicytagget)
* [iamProjectPolicyTagList](_api_.iamprojectpolicyapi.md#iamprojectpolicytaglist)
* [iamProjectPolicyTagPut](_api_.iamprojectpolicyapi.md#iamprojectpolicytagput)
* [iamProjectPolicyUpdate](_api_.iamprojectpolicyapi.md#iamprojectpolicyupdate)

## Constructors

### constructor

\+ **new IamProjectPolicyApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [IamProjectPolicyApi](_api_.iamprojectpolicyapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [IamProjectPolicyApi](_api_.iamprojectpolicyapi.md)

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

### iamProjectPolicyActorCreate

▸ **iamProjectPolicyActorCreate**(`projectId`: string, `policyId`: string, `iamActor`: [IamActor](../interfaces/_api_.iamactor.md), `options?`: any): Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)>>

*Defined in api.ts:32613*

Create iam/policy.actor

**`summary`** Create iam/policy.actor

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`iamActor` | [IamActor](../interfaces/_api_.iamactor.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)>>

___

### iamProjectPolicyActorDelete

▸ **iamProjectPolicyActorDelete**(`projectId`: string, `policyId`: string, `actorId`: string, `options?`: any): Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)>>

*Defined in api.ts:32627*

Delete iam/policy.actor

**`summary`** Delete iam/policy.actor

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`actorId` | string | actorId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)>>

___

### iamProjectPolicyActorGet

▸ **iamProjectPolicyActorGet**(`projectId`: string, `policyId`: string, `actorId`: string, `options?`: any): Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)>>

*Defined in api.ts:32641*

Get iam/policy.actor

**`summary`** Get iam/policy.actor

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`actorId` | string | actorId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)>>

___

### iamProjectPolicyActorList

▸ **iamProjectPolicyActorList**(`projectId`: string, `policyId`: string, `options?`: any): Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)[]>>

*Defined in api.ts:32654*

List iam/policy.actor

**`summary`** List iam/policy.actor

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)[]>>

___

### iamProjectPolicyCreate

▸ **iamProjectPolicyCreate**(`projectId`: string, `iamProjectPolicyCreate`: [IamProjectPolicyCreate](../interfaces/_api_.iamprojectpolicycreate.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)>>

*Defined in api.ts:32669*

Create policy

**`summary`** Create iam/policy

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`iamProjectPolicyCreate` | [IamProjectPolicyCreate](../interfaces/_api_.iamprojectpolicycreate.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)>>

___

### iamProjectPolicyDelete

▸ **iamProjectPolicyDelete**(`projectId`: string, `policyId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:32682*

Delete policy

**`summary`** Delete iam/policy

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamProjectPolicyEventGet

▸ **iamProjectPolicyEventGet**(`projectId`: string, `policyId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:32696*

Get iam/policy.event

**`summary`** Get iam/policy.event

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### iamProjectPolicyEventList

▸ **iamProjectPolicyEventList**(`projectId`: string, `policyId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:32711*

List iam/policy.event

**`summary`** List iam/policy.event

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### iamProjectPolicyGet

▸ **iamProjectPolicyGet**(`projectId`: string, `policyId`: string, `options?`: any): Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)>>

*Defined in api.ts:32724*

Returns a single policy

**`summary`** Get iam/policy

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)>>

___

### iamProjectPolicyList

▸ **iamProjectPolicyList**(`projectId`: string, `name?`: string, `resource?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)[]>>

*Defined in api.ts:32740*

List policy

**`summary`** List iam/policy

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`name?` | string | - |
`resource?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)[]>>

___

### iamProjectPolicyServiceGet

▸ **iamProjectPolicyServiceGet**(`projectId`: string, `policyId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:32754*

Get iam/policy.service

**`summary`** Get iam/policy.service

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### iamProjectPolicyServiceList

▸ **iamProjectPolicyServiceList**(`projectId`: string, `policyId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:32767*

List iam/policy.service

**`summary`** List iam/policy.service

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### iamProjectPolicyTagCreate

▸ **iamProjectPolicyTagCreate**(`projectId`: string, `policyId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:32781*

Create iam/policy.tag

**`summary`** Create iam/policy.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### iamProjectPolicyTagDelete

▸ **iamProjectPolicyTagDelete**(`projectId`: string, `policyId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:32795*

Delete iam/policy.tag

**`summary`** Delete iam/policy.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamProjectPolicyTagGet

▸ **iamProjectPolicyTagGet**(`projectId`: string, `policyId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:32809*

Get iam/policy.tag

**`summary`** Get iam/policy.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### iamProjectPolicyTagList

▸ **iamProjectPolicyTagList**(`projectId`: string, `policyId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:32822*

List iam/policy.tag

**`summary`** List iam/policy.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### iamProjectPolicyTagPut

▸ **iamProjectPolicyTagPut**(`projectId`: string, `policyId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:32836*

Replace iam/policy.tag

**`summary`** Replace iam/policy.tag

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### iamProjectPolicyUpdate

▸ **iamProjectPolicyUpdate**(`projectId`: string, `policyId`: string, `iamProjectPolicyUpdate`: [IamProjectPolicyUpdate](../interfaces/_api_.iamprojectpolicyupdate.md), `options?`: any): Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)>>

*Defined in api.ts:32850*

Returns modified policy

**`summary`** Update iam/policy

**`throws`** {RequiredError}

**`memberof`** IamProjectPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`policyId` | string | Policy Id |
`iamProjectPolicyUpdate` | [IamProjectPolicyUpdate](../interfaces/_api_.iamprojectpolicyupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)>>
