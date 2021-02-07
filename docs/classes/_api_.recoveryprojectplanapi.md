**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / RecoveryProjectPlanApi

# Class: RecoveryProjectPlanApi

RecoveryProjectPlanApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **RecoveryProjectPlanApi**

## Index

### Constructors

* [constructor](_api_.recoveryprojectplanapi.md#constructor)

### Properties

* [axios](_api_.recoveryprojectplanapi.md#axios)
* [basePath](_api_.recoveryprojectplanapi.md#basepath)
* [configuration](_api_.recoveryprojectplanapi.md#configuration)

### Methods

* [recoveryProjectPlanCreate](_api_.recoveryprojectplanapi.md#recoveryprojectplancreate)
* [recoveryProjectPlanDelete](_api_.recoveryprojectplanapi.md#recoveryprojectplandelete)
* [recoveryProjectPlanEventGet](_api_.recoveryprojectplanapi.md#recoveryprojectplaneventget)
* [recoveryProjectPlanEventList](_api_.recoveryprojectplanapi.md#recoveryprojectplaneventlist)
* [recoveryProjectPlanGet](_api_.recoveryprojectplanapi.md#recoveryprojectplanget)
* [recoveryProjectPlanList](_api_.recoveryprojectplanapi.md#recoveryprojectplanlist)
* [recoveryProjectPlanServiceGet](_api_.recoveryprojectplanapi.md#recoveryprojectplanserviceget)
* [recoveryProjectPlanServiceList](_api_.recoveryprojectplanapi.md#recoveryprojectplanservicelist)
* [recoveryProjectPlanTagCreate](_api_.recoveryprojectplanapi.md#recoveryprojectplantagcreate)
* [recoveryProjectPlanTagDelete](_api_.recoveryprojectplanapi.md#recoveryprojectplantagdelete)
* [recoveryProjectPlanTagGet](_api_.recoveryprojectplanapi.md#recoveryprojectplantagget)
* [recoveryProjectPlanTagList](_api_.recoveryprojectplanapi.md#recoveryprojectplantaglist)
* [recoveryProjectPlanTagPut](_api_.recoveryprojectplanapi.md#recoveryprojectplantagput)
* [recoveryProjectPlanUpdate](_api_.recoveryprojectplanapi.md#recoveryprojectplanupdate)

## Constructors

### constructor

\+ **new RecoveryProjectPlanApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [RecoveryProjectPlanApi](_api_.recoveryprojectplanapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [RecoveryProjectPlanApi](_api_.recoveryprojectplanapi.md)

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

### recoveryProjectPlanCreate

▸ **recoveryProjectPlanCreate**(`projectId`: string, `locationId`: string, `recoveryProjectPlanCreate`: [RecoveryProjectPlanCreate](../interfaces/_api_.recoveryprojectplancreate.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Plan](../interfaces/_api_.plan.md)>>

*Defined in api.ts:53334*

Create plan

**`summary`** Create recovery/plan

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectPlanApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`recoveryProjectPlanCreate` | [RecoveryProjectPlanCreate](../interfaces/_api_.recoveryprojectplancreate.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Plan](../interfaces/_api_.plan.md)>>

___

### recoveryProjectPlanDelete

▸ **recoveryProjectPlanDelete**(`projectId`: string, `locationId`: string, `planId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:53348*

Delete plan

**`summary`** Delete recovery/plan

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectPlanApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`planId` | string | Plan Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### recoveryProjectPlanEventGet

▸ **recoveryProjectPlanEventGet**(`projectId`: string, `locationId`: string, `planId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:53363*

Get recovery/plan.event

**`summary`** Get recovery/plan.event

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectPlanApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`planId` | string | Plan Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### recoveryProjectPlanEventList

▸ **recoveryProjectPlanEventList**(`projectId`: string, `locationId`: string, `planId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:53379*

List recovery/plan.event

**`summary`** List recovery/plan.event

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectPlanApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`planId` | string | Plan Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### recoveryProjectPlanGet

▸ **recoveryProjectPlanGet**(`projectId`: string, `locationId`: string, `planId`: string, `options?`: any): Promise\<AxiosResponse\<[Plan](../interfaces/_api_.plan.md)>>

*Defined in api.ts:53393*

Returns a single plan

**`summary`** Get recovery/plan

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectPlanApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`planId` | string | Plan Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Plan](../interfaces/_api_.plan.md)>>

___

### recoveryProjectPlanList

▸ **recoveryProjectPlanList**(`projectId`: string, `locationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Plan](../interfaces/_api_.plan.md)[]>>

*Defined in api.ts:53409*

List plan

**`summary`** List recovery/plan

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectPlanApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Plan](../interfaces/_api_.plan.md)[]>>

___

### recoveryProjectPlanServiceGet

▸ **recoveryProjectPlanServiceGet**(`projectId`: string, `locationId`: string, `planId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:53424*

Get recovery/plan.service

**`summary`** Get recovery/plan.service

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectPlanApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`planId` | string | Plan Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### recoveryProjectPlanServiceList

▸ **recoveryProjectPlanServiceList**(`projectId`: string, `locationId`: string, `planId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:53438*

List recovery/plan.service

**`summary`** List recovery/plan.service

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectPlanApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`planId` | string | Plan Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### recoveryProjectPlanTagCreate

▸ **recoveryProjectPlanTagCreate**(`projectId`: string, `locationId`: string, `planId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:53453*

Create recovery/plan.tag

**`summary`** Create recovery/plan.tag

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectPlanApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`planId` | string | Plan Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### recoveryProjectPlanTagDelete

▸ **recoveryProjectPlanTagDelete**(`projectId`: string, `locationId`: string, `planId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:53468*

Delete recovery/plan.tag

**`summary`** Delete recovery/plan.tag

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectPlanApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`planId` | string | Plan Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### recoveryProjectPlanTagGet

▸ **recoveryProjectPlanTagGet**(`projectId`: string, `locationId`: string, `planId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:53483*

Get recovery/plan.tag

**`summary`** Get recovery/plan.tag

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectPlanApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`planId` | string | Plan Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### recoveryProjectPlanTagList

▸ **recoveryProjectPlanTagList**(`projectId`: string, `locationId`: string, `planId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:53497*

List recovery/plan.tag

**`summary`** List recovery/plan.tag

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectPlanApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`planId` | string | Plan Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### recoveryProjectPlanTagPut

▸ **recoveryProjectPlanTagPut**(`projectId`: string, `locationId`: string, `planId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:53512*

Replace recovery/plan.tag

**`summary`** Replace recovery/plan.tag

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectPlanApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`planId` | string | Plan Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### recoveryProjectPlanUpdate

▸ **recoveryProjectPlanUpdate**(`projectId`: string, `locationId`: string, `planId`: string, `recoveryProjectPlanUpdate`: [RecoveryProjectPlanUpdate](../interfaces/_api_.recoveryprojectplanupdate.md), `options?`: any): Promise\<AxiosResponse\<[Plan](../interfaces/_api_.plan.md)>>

*Defined in api.ts:53527*

Returns modified plan

**`summary`** Update recovery/plan

**`throws`** {RequiredError}

**`memberof`** RecoveryProjectPlanApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`planId` | string | Plan Id |
`recoveryProjectPlanUpdate` | [RecoveryProjectPlanUpdate](../interfaces/_api_.recoveryprojectplanupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Plan](../interfaces/_api_.plan.md)>>
