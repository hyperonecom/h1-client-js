**hyperone**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / IamOrganisationPolicyApi

# Class: IamOrganisationPolicyApi

IamOrganisationPolicyApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **IamOrganisationPolicyApi**

## Index

### Constructors

* [constructor](_api_.iamorganisationpolicyapi.md#constructor)

### Properties

* [axios](_api_.iamorganisationpolicyapi.md#axios)
* [basePath](_api_.iamorganisationpolicyapi.md#basepath)
* [configuration](_api_.iamorganisationpolicyapi.md#configuration)

### Methods

* [iamOrganisationPolicyActorCreate](_api_.iamorganisationpolicyapi.md#iamorganisationpolicyactorcreate)
* [iamOrganisationPolicyActorDelete](_api_.iamorganisationpolicyapi.md#iamorganisationpolicyactordelete)
* [iamOrganisationPolicyActorGet](_api_.iamorganisationpolicyapi.md#iamorganisationpolicyactorget)
* [iamOrganisationPolicyActorList](_api_.iamorganisationpolicyapi.md#iamorganisationpolicyactorlist)
* [iamOrganisationPolicyCreate](_api_.iamorganisationpolicyapi.md#iamorganisationpolicycreate)
* [iamOrganisationPolicyDelete](_api_.iamorganisationpolicyapi.md#iamorganisationpolicydelete)
* [iamOrganisationPolicyEventGet](_api_.iamorganisationpolicyapi.md#iamorganisationpolicyeventget)
* [iamOrganisationPolicyEventList](_api_.iamorganisationpolicyapi.md#iamorganisationpolicyeventlist)
* [iamOrganisationPolicyGet](_api_.iamorganisationpolicyapi.md#iamorganisationpolicyget)
* [iamOrganisationPolicyList](_api_.iamorganisationpolicyapi.md#iamorganisationpolicylist)
* [iamOrganisationPolicyServiceGet](_api_.iamorganisationpolicyapi.md#iamorganisationpolicyserviceget)
* [iamOrganisationPolicyServiceList](_api_.iamorganisationpolicyapi.md#iamorganisationpolicyservicelist)
* [iamOrganisationPolicyTagCreate](_api_.iamorganisationpolicyapi.md#iamorganisationpolicytagcreate)
* [iamOrganisationPolicyTagDelete](_api_.iamorganisationpolicyapi.md#iamorganisationpolicytagdelete)
* [iamOrganisationPolicyTagGet](_api_.iamorganisationpolicyapi.md#iamorganisationpolicytagget)
* [iamOrganisationPolicyTagList](_api_.iamorganisationpolicyapi.md#iamorganisationpolicytaglist)
* [iamOrganisationPolicyTagPut](_api_.iamorganisationpolicyapi.md#iamorganisationpolicytagput)
* [iamOrganisationPolicyUpdate](_api_.iamorganisationpolicyapi.md#iamorganisationpolicyupdate)

## Constructors

### constructor

\+ **new IamOrganisationPolicyApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [IamOrganisationPolicyApi](_api_.iamorganisationpolicyapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [IamOrganisationPolicyApi](_api_.iamorganisationpolicyapi.md)

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

### iamOrganisationPolicyActorCreate

▸ **iamOrganisationPolicyActorCreate**(`organisationId`: string, `policyId`: string, `iamActor`: [IamActor](../interfaces/_api_.iamactor.md), `options?`: any): Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)>>

*Defined in api.ts:26655*

Create iam/policy.actor

**`summary`** Create iam/policy.actor

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`iamActor` | [IamActor](../interfaces/_api_.iamactor.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)>>

___

### iamOrganisationPolicyActorDelete

▸ **iamOrganisationPolicyActorDelete**(`organisationId`: string, `policyId`: string, `actorId`: string, `options?`: any): Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)>>

*Defined in api.ts:26669*

Delete iam/policy.actor

**`summary`** Delete iam/policy.actor

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`actorId` | string | actorId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)>>

___

### iamOrganisationPolicyActorGet

▸ **iamOrganisationPolicyActorGet**(`organisationId`: string, `policyId`: string, `actorId`: string, `options?`: any): Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)>>

*Defined in api.ts:26683*

Get iam/policy.actor

**`summary`** Get iam/policy.actor

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`actorId` | string | actorId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)>>

___

### iamOrganisationPolicyActorList

▸ **iamOrganisationPolicyActorList**(`organisationId`: string, `policyId`: string, `options?`: any): Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)[]>>

*Defined in api.ts:26696*

List iam/policy.actor

**`summary`** List iam/policy.actor

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[IamActor](../interfaces/_api_.iamactor.md)[]>>

___

### iamOrganisationPolicyCreate

▸ **iamOrganisationPolicyCreate**(`organisationId`: string, `iamProjectPolicyCreate`: [IamProjectPolicyCreate](../interfaces/_api_.iamprojectpolicycreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)>>

*Defined in api.ts:26710*

Create policy

**`summary`** Create iam/policy

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`iamProjectPolicyCreate` | [IamProjectPolicyCreate](../interfaces/_api_.iamprojectpolicycreate.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)>>

___

### iamOrganisationPolicyDelete

▸ **iamOrganisationPolicyDelete**(`organisationId`: string, `policyId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:26723*

Delete policy

**`summary`** Delete iam/policy

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamOrganisationPolicyEventGet

▸ **iamOrganisationPolicyEventGet**(`organisationId`: string, `policyId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:26737*

Get iam/policy.event

**`summary`** Get iam/policy.event

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### iamOrganisationPolicyEventList

▸ **iamOrganisationPolicyEventList**(`organisationId`: string, `policyId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:26752*

List iam/policy.event

**`summary`** List iam/policy.event

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### iamOrganisationPolicyGet

▸ **iamOrganisationPolicyGet**(`organisationId`: string, `policyId`: string, `options?`: any): Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)>>

*Defined in api.ts:26765*

Returns a single policy

**`summary`** Get iam/policy

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)>>

___

### iamOrganisationPolicyList

▸ **iamOrganisationPolicyList**(`organisationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)[]>>

*Defined in api.ts:26780*

List policy

**`summary`** List iam/policy

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)[]>>

___

### iamOrganisationPolicyServiceGet

▸ **iamOrganisationPolicyServiceGet**(`organisationId`: string, `policyId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:26794*

Get iam/policy.service

**`summary`** Get iam/policy.service

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### iamOrganisationPolicyServiceList

▸ **iamOrganisationPolicyServiceList**(`organisationId`: string, `policyId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:26807*

List iam/policy.service

**`summary`** List iam/policy.service

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### iamOrganisationPolicyTagCreate

▸ **iamOrganisationPolicyTagCreate**(`organisationId`: string, `policyId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:26821*

Create iam/policy.tag

**`summary`** Create iam/policy.tag

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### iamOrganisationPolicyTagDelete

▸ **iamOrganisationPolicyTagDelete**(`organisationId`: string, `policyId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:26835*

Delete iam/policy.tag

**`summary`** Delete iam/policy.tag

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### iamOrganisationPolicyTagGet

▸ **iamOrganisationPolicyTagGet**(`organisationId`: string, `policyId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:26849*

Get iam/policy.tag

**`summary`** Get iam/policy.tag

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### iamOrganisationPolicyTagList

▸ **iamOrganisationPolicyTagList**(`organisationId`: string, `policyId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:26862*

List iam/policy.tag

**`summary`** List iam/policy.tag

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### iamOrganisationPolicyTagPut

▸ **iamOrganisationPolicyTagPut**(`organisationId`: string, `policyId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:26876*

Replace iam/policy.tag

**`summary`** Replace iam/policy.tag

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### iamOrganisationPolicyUpdate

▸ **iamOrganisationPolicyUpdate**(`organisationId`: string, `policyId`: string, `iamProjectPolicyUpdate`: [IamProjectPolicyUpdate](../interfaces/_api_.iamprojectpolicyupdate.md), `options?`: any): Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)>>

*Defined in api.ts:26890*

Returns modified policy

**`summary`** Update iam/policy

**`throws`** {RequiredError}

**`memberof`** IamOrganisationPolicyApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`organisationId` | string | Organisation Id |
`policyId` | string | Policy Id |
`iamProjectPolicyUpdate` | [IamProjectPolicyUpdate](../interfaces/_api_.iamprojectpolicyupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Policy](../interfaces/_api_.policy.md)>>
