**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / NetworkingProjectIpApi

# Class: NetworkingProjectIpApi

NetworkingProjectIpApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **NetworkingProjectIpApi**

## Index

### Constructors

* [constructor](_api_.networkingprojectipapi.md#constructor)

### Properties

* [axios](_api_.networkingprojectipapi.md#axios)
* [basePath](_api_.networkingprojectipapi.md#basepath)
* [configuration](_api_.networkingprojectipapi.md#configuration)

### Methods

* [networkingProjectIpAssociate](_api_.networkingprojectipapi.md#networkingprojectipassociate)
* [networkingProjectIpCreate](_api_.networkingprojectipapi.md#networkingprojectipcreate)
* [networkingProjectIpDelete](_api_.networkingprojectipapi.md#networkingprojectipdelete)
* [networkingProjectIpDisassociate](_api_.networkingprojectipapi.md#networkingprojectipdisassociate)
* [networkingProjectIpEventGet](_api_.networkingprojectipapi.md#networkingprojectipeventget)
* [networkingProjectIpEventList](_api_.networkingprojectipapi.md#networkingprojectipeventlist)
* [networkingProjectIpGet](_api_.networkingprojectipapi.md#networkingprojectipget)
* [networkingProjectIpList](_api_.networkingprojectipapi.md#networkingprojectiplist)
* [networkingProjectIpPersist](_api_.networkingprojectipapi.md#networkingprojectippersist)
* [networkingProjectIpServiceGet](_api_.networkingprojectipapi.md#networkingprojectipserviceget)
* [networkingProjectIpServiceList](_api_.networkingprojectipapi.md#networkingprojectipservicelist)
* [networkingProjectIpTagCreate](_api_.networkingprojectipapi.md#networkingprojectiptagcreate)
* [networkingProjectIpTagDelete](_api_.networkingprojectipapi.md#networkingprojectiptagdelete)
* [networkingProjectIpTagGet](_api_.networkingprojectipapi.md#networkingprojectiptagget)
* [networkingProjectIpTagList](_api_.networkingprojectipapi.md#networkingprojectiptaglist)
* [networkingProjectIpTagPut](_api_.networkingprojectipapi.md#networkingprojectiptagput)
* [networkingProjectIpTransfer](_api_.networkingprojectipapi.md#networkingprojectiptransfer)
* [networkingProjectIpUpdate](_api_.networkingprojectipapi.md#networkingprojectipupdate)

## Constructors

### constructor

\+ **new NetworkingProjectIpApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [NetworkingProjectIpApi](_api_.networkingprojectipapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [NetworkingProjectIpApi](_api_.networkingprojectipapi.md)

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

### networkingProjectIpAssociate

▸ **networkingProjectIpAssociate**(`projectId`: string, `locationId`: string, `ipId`: string, `networkingProjectIpAssociate`: [NetworkingProjectIpAssociate](../interfaces/_api_.networkingprojectipassociate.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)>>

*Defined in api.ts:50849*

action associate

**`summary`** Associate networking/ip

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`networkingProjectIpAssociate` | [NetworkingProjectIpAssociate](../interfaces/_api_.networkingprojectipassociate.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)>>

___

### networkingProjectIpCreate

▸ **networkingProjectIpCreate**(`projectId`: string, `locationId`: string, `networkingProjectIpCreate`: [NetworkingProjectIpCreate](../interfaces/_api_.networkingprojectipcreate.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)>>

*Defined in api.ts:50865*

Create ip

**`summary`** Create networking/ip

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkingProjectIpCreate` | [NetworkingProjectIpCreate](../interfaces/_api_.networkingprojectipcreate.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)>>

___

### networkingProjectIpDelete

▸ **networkingProjectIpDelete**(`projectId`: string, `locationId`: string, `ipId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:50879*

Delete ip

**`summary`** Delete networking/ip

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### networkingProjectIpDisassociate

▸ **networkingProjectIpDisassociate**(`projectId`: string, `locationId`: string, `ipId`: string, `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)>>

*Defined in api.ts:50895*

action disassociate

**`summary`** Disassociate networking/ip

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)>>

___

### networkingProjectIpEventGet

▸ **networkingProjectIpEventGet**(`projectId`: string, `locationId`: string, `ipId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:50910*

Get networking/ip.event

**`summary`** Get networking/ip.event

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### networkingProjectIpEventList

▸ **networkingProjectIpEventList**(`projectId`: string, `locationId`: string, `ipId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:50926*

List networking/ip.event

**`summary`** List networking/ip.event

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### networkingProjectIpGet

▸ **networkingProjectIpGet**(`projectId`: string, `locationId`: string, `ipId`: string, `options?`: any): Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)>>

*Defined in api.ts:50940*

Returns a single ip

**`summary`** Get networking/ip

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)>>

___

### networkingProjectIpList

▸ **networkingProjectIpList**(`projectId`: string, `locationId`: string, `network?`: string, `associatedNetadp?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)[]>>

*Defined in api.ts:50957*

List ip

**`summary`** List networking/ip

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`network?` | string | - |
`associatedNetadp?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)[]>>

___

### networkingProjectIpPersist

▸ **networkingProjectIpPersist**(`projectId`: string, `locationId`: string, `ipId`: string, `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)>>

*Defined in api.ts:50973*

action persist

**`summary`** Persist networking/ip

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)>>

___

### networkingProjectIpServiceGet

▸ **networkingProjectIpServiceGet**(`projectId`: string, `locationId`: string, `ipId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:50988*

Get networking/ip.service

**`summary`** Get networking/ip.service

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### networkingProjectIpServiceList

▸ **networkingProjectIpServiceList**(`projectId`: string, `locationId`: string, `ipId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:51002*

List networking/ip.service

**`summary`** List networking/ip.service

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### networkingProjectIpTagCreate

▸ **networkingProjectIpTagCreate**(`projectId`: string, `locationId`: string, `ipId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:51017*

Create networking/ip.tag

**`summary`** Create networking/ip.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### networkingProjectIpTagDelete

▸ **networkingProjectIpTagDelete**(`projectId`: string, `locationId`: string, `ipId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:51032*

Delete networking/ip.tag

**`summary`** Delete networking/ip.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### networkingProjectIpTagGet

▸ **networkingProjectIpTagGet**(`projectId`: string, `locationId`: string, `ipId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:51047*

Get networking/ip.tag

**`summary`** Get networking/ip.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### networkingProjectIpTagList

▸ **networkingProjectIpTagList**(`projectId`: string, `locationId`: string, `ipId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:51061*

List networking/ip.tag

**`summary`** List networking/ip.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### networkingProjectIpTagPut

▸ **networkingProjectIpTagPut**(`projectId`: string, `locationId`: string, `ipId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:51076*

Replace networking/ip.tag

**`summary`** Replace networking/ip.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### networkingProjectIpTransfer

▸ **networkingProjectIpTransfer**(`projectId`: string, `locationId`: string, `ipId`: string, `networkingProjectIpTransfer`: [NetworkingProjectIpTransfer](../interfaces/_api_.networkingprojectiptransfer.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)>>

*Defined in api.ts:51093*

action transfer

**`summary`** Transfer networking/ip

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`networkingProjectIpTransfer` | [NetworkingProjectIpTransfer](../interfaces/_api_.networkingprojectiptransfer.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)>>

___

### networkingProjectIpUpdate

▸ **networkingProjectIpUpdate**(`projectId`: string, `locationId`: string, `ipId`: string, `networkingProjectIpUpdate`: [NetworkingProjectIpUpdate](../interfaces/_api_.networkingprojectipupdate.md), `options?`: any): Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)>>

*Defined in api.ts:51108*

Returns modified ip

**`summary`** Update networking/ip

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectIpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`ipId` | string | Ip Id |
`networkingProjectIpUpdate` | [NetworkingProjectIpUpdate](../interfaces/_api_.networkingprojectipupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ip](../interfaces/_api_.ip.md)>>
