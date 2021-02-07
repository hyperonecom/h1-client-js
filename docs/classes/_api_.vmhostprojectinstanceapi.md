**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / VmhostProjectInstanceApi

# Class: VmhostProjectInstanceApi

VmhostProjectInstanceApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **VmhostProjectInstanceApi**

## Index

### Constructors

* [constructor](_api_.vmhostprojectinstanceapi.md#constructor)

### Properties

* [axios](_api_.vmhostprojectinstanceapi.md#axios)
* [basePath](_api_.vmhostprojectinstanceapi.md#basepath)
* [configuration](_api_.vmhostprojectinstanceapi.md#configuration)

### Methods

* [vmhostProjectInstanceEventGet](_api_.vmhostprojectinstanceapi.md#vmhostprojectinstanceeventget)
* [vmhostProjectInstanceEventList](_api_.vmhostprojectinstanceapi.md#vmhostprojectinstanceeventlist)
* [vmhostProjectInstanceGet](_api_.vmhostprojectinstanceapi.md#vmhostprojectinstanceget)
* [vmhostProjectInstanceList](_api_.vmhostprojectinstanceapi.md#vmhostprojectinstancelist)
* [vmhostProjectInstanceServiceGet](_api_.vmhostprojectinstanceapi.md#vmhostprojectinstanceserviceget)
* [vmhostProjectInstanceServiceList](_api_.vmhostprojectinstanceapi.md#vmhostprojectinstanceservicelist)
* [vmhostProjectInstanceTagCreate](_api_.vmhostprojectinstanceapi.md#vmhostprojectinstancetagcreate)
* [vmhostProjectInstanceTagDelete](_api_.vmhostprojectinstanceapi.md#vmhostprojectinstancetagdelete)
* [vmhostProjectInstanceTagGet](_api_.vmhostprojectinstanceapi.md#vmhostprojectinstancetagget)
* [vmhostProjectInstanceTagList](_api_.vmhostprojectinstanceapi.md#vmhostprojectinstancetaglist)
* [vmhostProjectInstanceTagPut](_api_.vmhostprojectinstanceapi.md#vmhostprojectinstancetagput)

## Constructors

### constructor

\+ **new VmhostProjectInstanceApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [VmhostProjectInstanceApi](_api_.vmhostprojectinstanceapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [VmhostProjectInstanceApi](_api_.vmhostprojectinstanceapi.md)

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

### vmhostProjectInstanceEventGet

▸ **vmhostProjectInstanceEventGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:63514*

Get vmhost/instance.event

**`summary`** Get vmhost/instance.event

**`throws`** {RequiredError}

**`memberof`** VmhostProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### vmhostProjectInstanceEventList

▸ **vmhostProjectInstanceEventList**(`projectId`: string, `locationId`: string, `instanceId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:63530*

List vmhost/instance.event

**`summary`** List vmhost/instance.event

**`throws`** {RequiredError}

**`memberof`** VmhostProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### vmhostProjectInstanceGet

▸ **vmhostProjectInstanceGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[Vmhost](../interfaces/_api_.vmhost.md)>>

*Defined in api.ts:63544*

Returns a single instance

**`summary`** Get vmhost/instance

**`throws`** {RequiredError}

**`memberof`** VmhostProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vmhost](../interfaces/_api_.vmhost.md)>>

___

### vmhostProjectInstanceList

▸ **vmhostProjectInstanceList**(`projectId`: string, `locationId`: string, `enabledServices?`: string, `options?`: any): Promise\<AxiosResponse\<[Vmhost](../interfaces/_api_.vmhost.md)[]>>

*Defined in api.ts:63558*

List instance

**`summary`** List vmhost/instance

**`throws`** {RequiredError}

**`memberof`** VmhostProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`enabledServices?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vmhost](../interfaces/_api_.vmhost.md)[]>>

___

### vmhostProjectInstanceServiceGet

▸ **vmhostProjectInstanceServiceGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:63573*

Get vmhost/instance.service

**`summary`** Get vmhost/instance.service

**`throws`** {RequiredError}

**`memberof`** VmhostProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### vmhostProjectInstanceServiceList

▸ **vmhostProjectInstanceServiceList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:63587*

List vmhost/instance.service

**`summary`** List vmhost/instance.service

**`throws`** {RequiredError}

**`memberof`** VmhostProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### vmhostProjectInstanceTagCreate

▸ **vmhostProjectInstanceTagCreate**(`projectId`: string, `locationId`: string, `instanceId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:63602*

Create vmhost/instance.tag

**`summary`** Create vmhost/instance.tag

**`throws`** {RequiredError}

**`memberof`** VmhostProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### vmhostProjectInstanceTagDelete

▸ **vmhostProjectInstanceTagDelete**(`projectId`: string, `locationId`: string, `instanceId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:63617*

Delete vmhost/instance.tag

**`summary`** Delete vmhost/instance.tag

**`throws`** {RequiredError}

**`memberof`** VmhostProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### vmhostProjectInstanceTagGet

▸ **vmhostProjectInstanceTagGet**(`projectId`: string, `locationId`: string, `instanceId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:63632*

Get vmhost/instance.tag

**`summary`** Get vmhost/instance.tag

**`throws`** {RequiredError}

**`memberof`** VmhostProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### vmhostProjectInstanceTagList

▸ **vmhostProjectInstanceTagList**(`projectId`: string, `locationId`: string, `instanceId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:63646*

List vmhost/instance.tag

**`summary`** List vmhost/instance.tag

**`throws`** {RequiredError}

**`memberof`** VmhostProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### vmhostProjectInstanceTagPut

▸ **vmhostProjectInstanceTagPut**(`projectId`: string, `locationId`: string, `instanceId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:63661*

Replace vmhost/instance.tag

**`summary`** Replace vmhost/instance.tag

**`throws`** {RequiredError}

**`memberof`** VmhostProjectInstanceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`instanceId` | string | Instance Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>
