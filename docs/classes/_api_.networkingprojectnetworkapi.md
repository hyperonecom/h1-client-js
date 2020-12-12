**h1-client-ts**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / NetworkingProjectNetworkApi

# Class: NetworkingProjectNetworkApi

NetworkingProjectNetworkApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **NetworkingProjectNetworkApi**

## Index

### Constructors

* [constructor](_api_.networkingprojectnetworkapi.md#constructor)

### Properties

* [axios](_api_.networkingprojectnetworkapi.md#axios)
* [basePath](_api_.networkingprojectnetworkapi.md#basepath)
* [configuration](_api_.networkingprojectnetworkapi.md#configuration)

### Methods

* [networkingProjectNetworkCreate](_api_.networkingprojectnetworkapi.md#networkingprojectnetworkcreate)
* [networkingProjectNetworkDelete](_api_.networkingprojectnetworkapi.md#networkingprojectnetworkdelete)
* [networkingProjectNetworkEventGet](_api_.networkingprojectnetworkapi.md#networkingprojectnetworkeventget)
* [networkingProjectNetworkEventList](_api_.networkingprojectnetworkapi.md#networkingprojectnetworkeventlist)
* [networkingProjectNetworkGet](_api_.networkingprojectnetworkapi.md#networkingprojectnetworkget)
* [networkingProjectNetworkList](_api_.networkingprojectnetworkapi.md#networkingprojectnetworklist)
* [networkingProjectNetworkServiceGet](_api_.networkingprojectnetworkapi.md#networkingprojectnetworkserviceget)
* [networkingProjectNetworkServiceList](_api_.networkingprojectnetworkapi.md#networkingprojectnetworkservicelist)
* [networkingProjectNetworkTagCreate](_api_.networkingprojectnetworkapi.md#networkingprojectnetworktagcreate)
* [networkingProjectNetworkTagDelete](_api_.networkingprojectnetworkapi.md#networkingprojectnetworktagdelete)
* [networkingProjectNetworkTagGet](_api_.networkingprojectnetworkapi.md#networkingprojectnetworktagget)
* [networkingProjectNetworkTagList](_api_.networkingprojectnetworkapi.md#networkingprojectnetworktaglist)
* [networkingProjectNetworkTagPut](_api_.networkingprojectnetworkapi.md#networkingprojectnetworktagput)
* [networkingProjectNetworkUpdate](_api_.networkingprojectnetworkapi.md#networkingprojectnetworkupdate)

## Constructors

### constructor

\+ **new NetworkingProjectNetworkApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [NetworkingProjectNetworkApi](_api_.networkingprojectnetworkapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [NetworkingProjectNetworkApi](_api_.networkingprojectnetworkapi.md)

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

### networkingProjectNetworkCreate

▸ **networkingProjectNetworkCreate**(`projectId`: string, `locationId`: string, `networkingProjectNetworkCreate`: [NetworkingProjectNetworkCreate](../interfaces/_api_.networkingprojectnetworkcreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Network](../interfaces/_api_.network.md)>>

*Defined in api.ts:52334*

Create network

**`summary`** Create networking/network

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetworkApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkingProjectNetworkCreate` | [NetworkingProjectNetworkCreate](../interfaces/_api_.networkingprojectnetworkcreate.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Network](../interfaces/_api_.network.md)>>

___

### networkingProjectNetworkDelete

▸ **networkingProjectNetworkDelete**(`projectId`: string, `locationId`: string, `networkId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:52348*

Delete network

**`summary`** Delete networking/network

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetworkApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkId` | string | Network Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### networkingProjectNetworkEventGet

▸ **networkingProjectNetworkEventGet**(`projectId`: string, `locationId`: string, `networkId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:52363*

Get networking/network.event

**`summary`** Get networking/network.event

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetworkApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkId` | string | Network Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### networkingProjectNetworkEventList

▸ **networkingProjectNetworkEventList**(`projectId`: string, `locationId`: string, `networkId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:52379*

List networking/network.event

**`summary`** List networking/network.event

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetworkApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkId` | string | Network Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### networkingProjectNetworkGet

▸ **networkingProjectNetworkGet**(`projectId`: string, `locationId`: string, `networkId`: string, `options?`: any): Promise\<AxiosResponse\<[Network](../interfaces/_api_.network.md)>>

*Defined in api.ts:52393*

Returns a single network

**`summary`** Get networking/network

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetworkApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkId` | string | Network Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Network](../interfaces/_api_.network.md)>>

___

### networkingProjectNetworkList

▸ **networkingProjectNetworkList**(`projectId`: string, `locationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Network](../interfaces/_api_.network.md)[]>>

*Defined in api.ts:52409*

List network

**`summary`** List networking/network

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetworkApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Network](../interfaces/_api_.network.md)[]>>

___

### networkingProjectNetworkServiceGet

▸ **networkingProjectNetworkServiceGet**(`projectId`: string, `locationId`: string, `networkId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:52424*

Get networking/network.service

**`summary`** Get networking/network.service

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetworkApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkId` | string | Network Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### networkingProjectNetworkServiceList

▸ **networkingProjectNetworkServiceList**(`projectId`: string, `locationId`: string, `networkId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:52438*

List networking/network.service

**`summary`** List networking/network.service

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetworkApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkId` | string | Network Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### networkingProjectNetworkTagCreate

▸ **networkingProjectNetworkTagCreate**(`projectId`: string, `locationId`: string, `networkId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:52453*

Create networking/network.tag

**`summary`** Create networking/network.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetworkApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkId` | string | Network Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### networkingProjectNetworkTagDelete

▸ **networkingProjectNetworkTagDelete**(`projectId`: string, `locationId`: string, `networkId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:52468*

Delete networking/network.tag

**`summary`** Delete networking/network.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetworkApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkId` | string | Network Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### networkingProjectNetworkTagGet

▸ **networkingProjectNetworkTagGet**(`projectId`: string, `locationId`: string, `networkId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:52483*

Get networking/network.tag

**`summary`** Get networking/network.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetworkApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkId` | string | Network Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### networkingProjectNetworkTagList

▸ **networkingProjectNetworkTagList**(`projectId`: string, `locationId`: string, `networkId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:52497*

List networking/network.tag

**`summary`** List networking/network.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetworkApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkId` | string | Network Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### networkingProjectNetworkTagPut

▸ **networkingProjectNetworkTagPut**(`projectId`: string, `locationId`: string, `networkId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:52512*

Replace networking/network.tag

**`summary`** Replace networking/network.tag

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetworkApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkId` | string | Network Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### networkingProjectNetworkUpdate

▸ **networkingProjectNetworkUpdate**(`projectId`: string, `locationId`: string, `networkId`: string, `networkingProjectNetworkUpdate`: [NetworkingProjectNetworkUpdate](../interfaces/_api_.networkingprojectnetworkupdate.md), `options?`: any): Promise\<AxiosResponse\<[Network](../interfaces/_api_.network.md)>>

*Defined in api.ts:52527*

Returns modified network

**`summary`** Update networking/network

**`throws`** {RequiredError}

**`memberof`** NetworkingProjectNetworkApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`networkId` | string | Network Id |
`networkingProjectNetworkUpdate` | [NetworkingProjectNetworkUpdate](../interfaces/_api_.networkingprojectnetworkupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Network](../interfaces/_api_.network.md)>>
