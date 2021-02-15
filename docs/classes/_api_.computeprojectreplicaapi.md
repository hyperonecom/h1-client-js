**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / ComputeProjectReplicaApi

# Class: ComputeProjectReplicaApi

ComputeProjectReplicaApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **ComputeProjectReplicaApi**

## Index

### Constructors

* [constructor](_api_.computeprojectreplicaapi.md#constructor)

### Properties

* [axios](_api_.computeprojectreplicaapi.md#axios)
* [basePath](_api_.computeprojectreplicaapi.md#basepath)
* [configuration](_api_.computeprojectreplicaapi.md#configuration)

### Methods

* [computeProjectReplicaCreate](_api_.computeprojectreplicaapi.md#computeprojectreplicacreate)
* [computeProjectReplicaDelete](_api_.computeprojectreplicaapi.md#computeprojectreplicadelete)
* [computeProjectReplicaEventGet](_api_.computeprojectreplicaapi.md#computeprojectreplicaeventget)
* [computeProjectReplicaEventList](_api_.computeprojectreplicaapi.md#computeprojectreplicaeventlist)
* [computeProjectReplicaGet](_api_.computeprojectreplicaapi.md#computeprojectreplicaget)
* [computeProjectReplicaList](_api_.computeprojectreplicaapi.md#computeprojectreplicalist)
* [computeProjectReplicaServiceGet](_api_.computeprojectreplicaapi.md#computeprojectreplicaserviceget)
* [computeProjectReplicaServiceList](_api_.computeprojectreplicaapi.md#computeprojectreplicaservicelist)
* [computeProjectReplicaTagCreate](_api_.computeprojectreplicaapi.md#computeprojectreplicatagcreate)
* [computeProjectReplicaTagDelete](_api_.computeprojectreplicaapi.md#computeprojectreplicatagdelete)
* [computeProjectReplicaTagGet](_api_.computeprojectreplicaapi.md#computeprojectreplicatagget)
* [computeProjectReplicaTagList](_api_.computeprojectreplicaapi.md#computeprojectreplicataglist)
* [computeProjectReplicaTagPut](_api_.computeprojectreplicaapi.md#computeprojectreplicatagput)

## Constructors

### constructor

\+ **new ComputeProjectReplicaApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [ComputeProjectReplicaApi](_api_.computeprojectreplicaapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [ComputeProjectReplicaApi](_api_.computeprojectreplicaapi.md)

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

### computeProjectReplicaCreate

▸ **computeProjectReplicaCreate**(`projectId`: string, `locationId`: string, `computeProjectReplicaCreate`: [ComputeProjectReplicaCreate](../interfaces/_api_.computeprojectreplicacreate.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Replica](../interfaces/_api_.replica.md)>>

*Defined in api.ts:11061*

Create replica

**`summary`** Create compute/replica

**`throws`** {RequiredError}

**`memberof`** ComputeProjectReplicaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`computeProjectReplicaCreate` | [ComputeProjectReplicaCreate](../interfaces/_api_.computeprojectreplicacreate.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Replica](../interfaces/_api_.replica.md)>>

___

### computeProjectReplicaDelete

▸ **computeProjectReplicaDelete**(`projectId`: string, `locationId`: string, `replicaId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:11075*

Delete replica

**`summary`** Delete compute/replica

**`throws`** {RequiredError}

**`memberof`** ComputeProjectReplicaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`replicaId` | string | Replica Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### computeProjectReplicaEventGet

▸ **computeProjectReplicaEventGet**(`projectId`: string, `locationId`: string, `replicaId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:11090*

Get compute/replica.event

**`summary`** Get compute/replica.event

**`throws`** {RequiredError}

**`memberof`** ComputeProjectReplicaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`replicaId` | string | Replica Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### computeProjectReplicaEventList

▸ **computeProjectReplicaEventList**(`projectId`: string, `locationId`: string, `replicaId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:11106*

List compute/replica.event

**`summary`** List compute/replica.event

**`throws`** {RequiredError}

**`memberof`** ComputeProjectReplicaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`replicaId` | string | Replica Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### computeProjectReplicaGet

▸ **computeProjectReplicaGet**(`projectId`: string, `locationId`: string, `replicaId`: string, `options?`: any): Promise\<AxiosResponse\<[Replica](../interfaces/_api_.replica.md)>>

*Defined in api.ts:11120*

Returns a single replica

**`summary`** Get compute/replica

**`throws`** {RequiredError}

**`memberof`** ComputeProjectReplicaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`replicaId` | string | Replica Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Replica](../interfaces/_api_.replica.md)>>

___

### computeProjectReplicaList

▸ **computeProjectReplicaList**(`projectId`: string, `locationId`: string, `name?`: string, `options?`: any): Promise\<AxiosResponse\<[Replica](../interfaces/_api_.replica.md)[]>>

*Defined in api.ts:11134*

List replica

**`summary`** List compute/replica

**`throws`** {RequiredError}

**`memberof`** ComputeProjectReplicaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Replica](../interfaces/_api_.replica.md)[]>>

___

### computeProjectReplicaServiceGet

▸ **computeProjectReplicaServiceGet**(`projectId`: string, `locationId`: string, `replicaId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:11149*

Get compute/replica.service

**`summary`** Get compute/replica.service

**`throws`** {RequiredError}

**`memberof`** ComputeProjectReplicaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`replicaId` | string | Replica Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### computeProjectReplicaServiceList

▸ **computeProjectReplicaServiceList**(`projectId`: string, `locationId`: string, `replicaId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:11163*

List compute/replica.service

**`summary`** List compute/replica.service

**`throws`** {RequiredError}

**`memberof`** ComputeProjectReplicaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`replicaId` | string | Replica Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### computeProjectReplicaTagCreate

▸ **computeProjectReplicaTagCreate**(`projectId`: string, `locationId`: string, `replicaId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:11178*

Create compute/replica.tag

**`summary`** Create compute/replica.tag

**`throws`** {RequiredError}

**`memberof`** ComputeProjectReplicaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`replicaId` | string | Replica Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### computeProjectReplicaTagDelete

▸ **computeProjectReplicaTagDelete**(`projectId`: string, `locationId`: string, `replicaId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:11193*

Delete compute/replica.tag

**`summary`** Delete compute/replica.tag

**`throws`** {RequiredError}

**`memberof`** ComputeProjectReplicaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`replicaId` | string | Replica Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### computeProjectReplicaTagGet

▸ **computeProjectReplicaTagGet**(`projectId`: string, `locationId`: string, `replicaId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:11208*

Get compute/replica.tag

**`summary`** Get compute/replica.tag

**`throws`** {RequiredError}

**`memberof`** ComputeProjectReplicaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`replicaId` | string | Replica Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### computeProjectReplicaTagList

▸ **computeProjectReplicaTagList**(`projectId`: string, `locationId`: string, `replicaId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:11222*

List compute/replica.tag

**`summary`** List compute/replica.tag

**`throws`** {RequiredError}

**`memberof`** ComputeProjectReplicaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`replicaId` | string | Replica Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### computeProjectReplicaTagPut

▸ **computeProjectReplicaTagPut**(`projectId`: string, `locationId`: string, `replicaId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:11237*

Replace compute/replica.tag

**`summary`** Replace compute/replica.tag

**`throws`** {RequiredError}

**`memberof`** ComputeProjectReplicaApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`replicaId` | string | Replica Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>
