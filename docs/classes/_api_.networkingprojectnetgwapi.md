**hyperone**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / NetworkingProjectNetgwApi

# Class: NetworkingProjectNetgwApi

NetworkingProjectNetgwApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **NetworkingProjectNetgwApi**

## Index

### Constructors

* [constructor](_api_.networkingprojectnetgwapi.md#constructor)

### Properties

* [axios](_api_.networkingprojectnetgwapi.md#axios)
* [basePath](_api_.networkingprojectnetgwapi.md#basepath)
* [configuration](_api_.networkingprojectnetgwapi.md#configuration)

### Methods

* [networkingProjectNetgwAttach](_api_.networkingprojectnetgwapi.md#networkingprojectnetgwattach)
* [networkingProjectNetgwCreate](_api_.networkingprojectnetgwapi.md#networkingprojectnetgwcreate)
* [networkingProjectNetgwDelete](_api_.networkingprojectnetgwapi.md#networkingprojectnetgwdelete)
* [networkingProjectNetgwDetach](_api_.networkingprojectnetgwapi.md#networkingprojectnetgwdetach)
* [networkingProjectNetgwEventGet](_api_.networkingprojectnetgwapi.md#networkingprojectnetgweventget)
* [networkingProjectNetgwEventList](_api_.networkingprojectnetgwapi.md#networkingprojectnetgweventlist)
* [networkingProjectNetgwGet](_api_.networkingprojectnetgwapi.md#networkingprojectnetgwget)
* [networkingProjectNetgwList](_api_.networkingprojectnetgwapi.md#networkingprojectnetgwlist)
* [networkingProjectNetgwServiceGet](_api_.networkingprojectnetgwapi.md#networkingprojectnetgwserviceget)
* [networkingProjectNetgwServiceList](_api_.networkingprojectnetgwapi.md#networkingprojectnetgwservicelist)
* [networkingProjectNetgwTagCreate](_api_.networkingprojectnetgwapi.md#networkingprojectnetgwtagcreate)
* [networkingProjectNetgwTagDelete](_api_.networkingprojectnetgwapi.md#networkingprojectnetgwtagdelete)
* [networkingProjectNetgwTagGet](_api_.networkingprojectnetgwapi.md#networkingprojectnetgwtagget)
* [networkingProjectNetgwTagList](_api_.networkingprojectnetgwapi.md#networkingprojectnetgwtaglist)
* [networkingProjectNetgwTagPut](_api_.networkingprojectnetgwapi.md#networkingprojectnetgwtagput)
* [networkingProjectNetgwUpdate](_api_.networkingprojectnetgwapi.md#networkingprojectnetgwupdate)

## Constructors

### constructor

\+ **new NetworkingProjectNetgwApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [NetworkingProjectNetgwApi](_api_.networkingprojectnetgwapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [NetworkingProjectNetgwApi](_api_.networkingprojectnetgwapi.md)

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

### networkingProjectNetgwAttach

▸ **networkingProjectNetgwAttach**(`projectId`: string, `locationId`: string, `netgwId`: string, `networkingProjectNetgwAttach`: [NetworkingProjectNetgwAttach](../interfaces/_api_.networkingprojectnetgwattach.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Netgw](../interfaces/_api_.netgw.md)>>

*Defined in api.ts:49481*

action attach

**`summary`** Attach networking/netgw

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netgwId` | string | Netgw Id |
`networkingProjectNetgwAttach` | [NetworkingProjectNetgwAttach](../interfaces/_api_.networkingprojectnetgwattach.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Netgw](../interfaces/_api_.netgw.md)>>

___

### networkingProjectNetgwCreate

▸ **networkingProjectNetgwCreate**(`projectId`: string, `locationId`: string, `networkingProjectNetgwCreate`: [NetworkingProjectNetgwCreate](../interfaces/_api_.networkingprojectnetgwcreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Netgw](../interfaces/_api_.netgw.md)>>

*Defined in api.ts:49496*

Create netgw

**`summary`** Create networking/netgw

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkingProjectNetgwCreate` | [NetworkingProjectNetgwCreate](../interfaces/_api_.networkingprojectnetgwcreate.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Netgw](../interfaces/_api_.netgw.md)>>

___

### networkingProjectNetgwDelete

▸ **networkingProjectNetgwDelete**(`projectId`: string, `locationId`: string, `netgwId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:49510*

Delete netgw

**`summary`** Delete networking/netgw

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netgwId` | string | Netgw Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### networkingProjectNetgwDetach

▸ **networkingProjectNetgwDetach**(`projectId`: string, `locationId`: string, `netgwId`: string, `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Netgw](../interfaces/_api_.netgw.md)>>

*Defined in api.ts:49525*

action detach

**`summary`** Detach networking/netgw

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netgwId` | string | Netgw Id |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Netgw](../interfaces/_api_.netgw.md)>>

___

### networkingProjectNetgwEventGet

▸ **networkingProjectNetgwEventGet**(`projectId`: string, `locationId`: string, `netgwId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:49540*

Get networking/netgw.event

**`summary`** Get networking/netgw.event

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netgwId` | string | Netgw Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### networkingProjectNetgwEventList

▸ **networkingProjectNetgwEventList**(`projectId`: string, `locationId`: string, `netgwId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:49556*

List networking/netgw.event

**`summary`** List networking/netgw.event

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netgwId` | string | Netgw Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### networkingProjectNetgwGet

▸ **networkingProjectNetgwGet**(`projectId`: string, `locationId`: string, `netgwId`: string, `options?`: any): Promise\<AxiosResponse\<[Netgw](../interfaces/_api_.netgw.md)>>

*Defined in api.ts:49570*

Returns a single netgw

**`summary`** Get networking/netgw

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netgwId` | string | Netgw Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Netgw](../interfaces/_api_.netgw.md)>>

___

### networkingProjectNetgwList

▸ **networkingProjectNetgwList**(`projectId`: string, `locationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Netgw](../interfaces/_api_.netgw.md)[]>>

*Defined in api.ts:49586*

List netgw

**`summary`** List networking/netgw

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Netgw](../interfaces/_api_.netgw.md)[]>>

___

### networkingProjectNetgwServiceGet

▸ **networkingProjectNetgwServiceGet**(`projectId`: string, `locationId`: string, `netgwId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:49601*

Get networking/netgw.service

**`summary`** Get networking/netgw.service

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netgwId` | string | Netgw Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### networkingProjectNetgwServiceList

▸ **networkingProjectNetgwServiceList**(`projectId`: string, `locationId`: string, `netgwId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:49615*

List networking/netgw.service

**`summary`** List networking/netgw.service

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netgwId` | string | Netgw Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### networkingProjectNetgwTagCreate

▸ **networkingProjectNetgwTagCreate**(`projectId`: string, `locationId`: string, `netgwId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:49630*

Create networking/netgw.tag

**`summary`** Create networking/netgw.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netgwId` | string | Netgw Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### networkingProjectNetgwTagDelete

▸ **networkingProjectNetgwTagDelete**(`projectId`: string, `locationId`: string, `netgwId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:49645*

Delete networking/netgw.tag

**`summary`** Delete networking/netgw.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netgwId` | string | Netgw Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### networkingProjectNetgwTagGet

▸ **networkingProjectNetgwTagGet**(`projectId`: string, `locationId`: string, `netgwId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:49660*

Get networking/netgw.tag

**`summary`** Get networking/netgw.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netgwId` | string | Netgw Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### networkingProjectNetgwTagList

▸ **networkingProjectNetgwTagList**(`projectId`: string, `locationId`: string, `netgwId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:49674*

List networking/netgw.tag

**`summary`** List networking/netgw.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netgwId` | string | Netgw Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### networkingProjectNetgwTagPut

▸ **networkingProjectNetgwTagPut**(`projectId`: string, `locationId`: string, `netgwId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:49689*

Replace networking/netgw.tag

**`summary`** Replace networking/netgw.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netgwId` | string | Netgw Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### networkingProjectNetgwUpdate

▸ **networkingProjectNetgwUpdate**(`projectId`: string, `locationId`: string, `netgwId`: string, `networkingProjectNetgwUpdate`: [NetworkingProjectNetgwUpdate](../interfaces/_api_.networkingprojectnetgwupdate.md), `options?`: any): Promise\<AxiosResponse\<[Netgw](../interfaces/_api_.netgw.md)>>

*Defined in api.ts:49704*

Returns modified netgw

**`summary`** Update networking/netgw

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetgwApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netgwId` | string | Netgw Id |
`networkingProjectNetgwUpdate` | [NetworkingProjectNetgwUpdate](../interfaces/_api_.networkingprojectnetgwupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Netgw](../interfaces/_api_.netgw.md)>>
