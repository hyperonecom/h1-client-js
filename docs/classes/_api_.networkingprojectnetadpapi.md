**hyperone**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / NetworkingProjectNetadpApi

# Class: NetworkingProjectNetadpApi

NetworkingProjectNetadpApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **NetworkingProjectNetadpApi**

## Index

### Constructors

* [constructor](_api_.networkingprojectnetadpapi.md#constructor)

### Properties

* [axios](_api_.networkingprojectnetadpapi.md#axios)
* [basePath](_api_.networkingprojectnetadpapi.md#basepath)
* [configuration](_api_.networkingprojectnetadpapi.md#configuration)

### Methods

* [networkingProjectNetadpCreate](_api_.networkingprojectnetadpapi.md#networkingprojectnetadpcreate)
* [networkingProjectNetadpDelete](_api_.networkingprojectnetadpapi.md#networkingprojectnetadpdelete)
* [networkingProjectNetadpEventGet](_api_.networkingprojectnetadpapi.md#networkingprojectnetadpeventget)
* [networkingProjectNetadpEventList](_api_.networkingprojectnetadpapi.md#networkingprojectnetadpeventlist)
* [networkingProjectNetadpGet](_api_.networkingprojectnetadpapi.md#networkingprojectnetadpget)
* [networkingProjectNetadpList](_api_.networkingprojectnetadpapi.md#networkingprojectnetadplist)
* [networkingProjectNetadpMetricGet](_api_.networkingprojectnetadpapi.md#networkingprojectnetadpmetricget)
* [networkingProjectNetadpMetricList](_api_.networkingprojectnetadpapi.md#networkingprojectnetadpmetriclist)
* [networkingProjectNetadpMetricPointList](_api_.networkingprojectnetadpapi.md#networkingprojectnetadpmetricpointlist)
* [networkingProjectNetadpServiceGet](_api_.networkingprojectnetadpapi.md#networkingprojectnetadpserviceget)
* [networkingProjectNetadpServiceList](_api_.networkingprojectnetadpapi.md#networkingprojectnetadpservicelist)
* [networkingProjectNetadpTagCreate](_api_.networkingprojectnetadpapi.md#networkingprojectnetadptagcreate)
* [networkingProjectNetadpTagDelete](_api_.networkingprojectnetadpapi.md#networkingprojectnetadptagdelete)
* [networkingProjectNetadpTagGet](_api_.networkingprojectnetadpapi.md#networkingprojectnetadptagget)
* [networkingProjectNetadpTagList](_api_.networkingprojectnetadpapi.md#networkingprojectnetadptaglist)
* [networkingProjectNetadpTagPut](_api_.networkingprojectnetadpapi.md#networkingprojectnetadptagput)
* [networkingProjectNetadpUpdate](_api_.networkingprojectnetadpapi.md#networkingprojectnetadpupdate)

## Constructors

### constructor

\+ **new NetworkingProjectNetadpApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [NetworkingProjectNetadpApi](_api_.networkingprojectnetadpapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [NetworkingProjectNetadpApi](_api_.networkingprojectnetadpapi.md)

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

### networkingProjectNetadpCreate

▸ **networkingProjectNetadpCreate**(`projectId`: string, `locationId`: string, `networkingProjectNetadpCreate`: [NetworkingProjectNetadpCreate](../interfaces/_api_.networkingprojectnetadpcreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Netadp](../interfaces/_api_.netadp.md)>>

*Defined in api.ts:47677*

Create netadp

**`summary`** Create networking/netadp

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkingProjectNetadpCreate` | [NetworkingProjectNetadpCreate](../interfaces/_api_.networkingprojectnetadpcreate.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Netadp](../interfaces/_api_.netadp.md)>>

___

### networkingProjectNetadpDelete

▸ **networkingProjectNetadpDelete**(`projectId`: string, `locationId`: string, `netadpId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:47691*

Delete netadp

**`summary`** Delete networking/netadp

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### networkingProjectNetadpEventGet

▸ **networkingProjectNetadpEventGet**(`projectId`: string, `locationId`: string, `netadpId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:47706*

Get networking/netadp.event

**`summary`** Get networking/netadp.event

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### networkingProjectNetadpEventList

▸ **networkingProjectNetadpEventList**(`projectId`: string, `locationId`: string, `netadpId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:47722*

List networking/netadp.event

**`summary`** List networking/netadp.event

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### networkingProjectNetadpGet

▸ **networkingProjectNetadpGet**(`projectId`: string, `locationId`: string, `netadpId`: string, `options?`: any): Promise\<AxiosResponse\<[Netadp](../interfaces/_api_.netadp.md)>>

*Defined in api.ts:47736*

Returns a single netadp

**`summary`** Get networking/netadp

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Netadp](../interfaces/_api_.netadp.md)>>

___

### networkingProjectNetadpList

▸ **networkingProjectNetadpList**(`projectId`: string, `locationId`: string, `assignedResource?`: string, `assignedId?`: string, `network?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Netadp](../interfaces/_api_.netadp.md)[]>>

*Defined in api.ts:47754*

List netadp

**`summary`** List networking/netadp

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`assignedResource?` | string | - |
`assignedId?` | string | - |
`network?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Netadp](../interfaces/_api_.netadp.md)[]>>

___

### networkingProjectNetadpMetricGet

▸ **networkingProjectNetadpMetricGet**(`projectId`: string, `locationId`: string, `netadpId`: string, `metricId`: string, `options?`: any): Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)>>

*Defined in api.ts:47769*

Get networking/netadp.metric

**`summary`** Get networking/netadp.metric

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`metricId` | string | metricId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)>>

___

### networkingProjectNetadpMetricList

▸ **networkingProjectNetadpMetricList**(`projectId`: string, `locationId`: string, `netadpId`: string, `options?`: any): Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)[]>>

*Defined in api.ts:47783*

List networking/netadp.metric

**`summary`** List networking/netadp.metric

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)[]>>

___

### networkingProjectNetadpMetricPointList

▸ **networkingProjectNetadpMetricPointList**(`projectId`: string, `locationId`: string, `netadpId`: string, `metricId`: string, `interval?`: string, `timespan?`: string, `options?`: any): Promise\<AxiosResponse\<[Serie](../interfaces/_api_.serie.md)[]>>

*Defined in api.ts:47800*

List networking/netadp.point

**`summary`** List networking/netadp.point

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`metricId` | string | metricId |
`interval?` | string | - |
`timespan?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Serie](../interfaces/_api_.serie.md)[]>>

___

### networkingProjectNetadpServiceGet

▸ **networkingProjectNetadpServiceGet**(`projectId`: string, `locationId`: string, `netadpId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:47815*

Get networking/netadp.service

**`summary`** Get networking/netadp.service

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### networkingProjectNetadpServiceList

▸ **networkingProjectNetadpServiceList**(`projectId`: string, `locationId`: string, `netadpId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:47829*

List networking/netadp.service

**`summary`** List networking/netadp.service

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### networkingProjectNetadpTagCreate

▸ **networkingProjectNetadpTagCreate**(`projectId`: string, `locationId`: string, `netadpId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:47844*

Create networking/netadp.tag

**`summary`** Create networking/netadp.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### networkingProjectNetadpTagDelete

▸ **networkingProjectNetadpTagDelete**(`projectId`: string, `locationId`: string, `netadpId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:47859*

Delete networking/netadp.tag

**`summary`** Delete networking/netadp.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### networkingProjectNetadpTagGet

▸ **networkingProjectNetadpTagGet**(`projectId`: string, `locationId`: string, `netadpId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:47874*

Get networking/netadp.tag

**`summary`** Get networking/netadp.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### networkingProjectNetadpTagList

▸ **networkingProjectNetadpTagList**(`projectId`: string, `locationId`: string, `netadpId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:47888*

List networking/netadp.tag

**`summary`** List networking/netadp.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### networkingProjectNetadpTagPut

▸ **networkingProjectNetadpTagPut**(`projectId`: string, `locationId`: string, `netadpId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:47903*

Replace networking/netadp.tag

**`summary`** Replace networking/netadp.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### networkingProjectNetadpUpdate

▸ **networkingProjectNetadpUpdate**(`projectId`: string, `locationId`: string, `netadpId`: string, `networkingProjectNetadpUpdate`: [NetworkingProjectNetadpUpdate](../interfaces/_api_.networkingprojectnetadpupdate.md), `options?`: any): Promise\<AxiosResponse\<[Netadp](../interfaces/_api_.netadp.md)>>

*Defined in api.ts:47918*

Returns modified netadp

**`summary`** Update networking/netadp

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetadpApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`netadpId` | string | Netadp Id |
`networkingProjectNetadpUpdate` | [NetworkingProjectNetadpUpdate](../interfaces/_api_.networkingprojectnetadpupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Netadp](../interfaces/_api_.netadp.md)>>
