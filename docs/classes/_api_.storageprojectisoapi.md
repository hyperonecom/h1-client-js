**hyperone**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / StorageProjectIsoApi

# Class: StorageProjectIsoApi

StorageProjectIsoApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **StorageProjectIsoApi**

## Index

### Constructors

* [constructor](_api_.storageprojectisoapi.md#constructor)

### Properties

* [axios](_api_.storageprojectisoapi.md#axios)
* [basePath](_api_.storageprojectisoapi.md#basepath)
* [configuration](_api_.storageprojectisoapi.md#configuration)

### Methods

* [storageProjectIsoCreate](_api_.storageprojectisoapi.md#storageprojectisocreate)
* [storageProjectIsoDelete](_api_.storageprojectisoapi.md#storageprojectisodelete)
* [storageProjectIsoDetach](_api_.storageprojectisoapi.md#storageprojectisodetach)
* [storageProjectIsoEventGet](_api_.storageprojectisoapi.md#storageprojectisoeventget)
* [storageProjectIsoEventList](_api_.storageprojectisoapi.md#storageprojectisoeventlist)
* [storageProjectIsoGet](_api_.storageprojectisoapi.md#storageprojectisoget)
* [storageProjectIsoList](_api_.storageprojectisoapi.md#storageprojectisolist)
* [storageProjectIsoServiceGet](_api_.storageprojectisoapi.md#storageprojectisoserviceget)
* [storageProjectIsoServiceList](_api_.storageprojectisoapi.md#storageprojectisoservicelist)
* [storageProjectIsoTagCreate](_api_.storageprojectisoapi.md#storageprojectisotagcreate)
* [storageProjectIsoTagDelete](_api_.storageprojectisoapi.md#storageprojectisotagdelete)
* [storageProjectIsoTagGet](_api_.storageprojectisoapi.md#storageprojectisotagget)
* [storageProjectIsoTagList](_api_.storageprojectisoapi.md#storageprojectisotaglist)
* [storageProjectIsoTagPut](_api_.storageprojectisoapi.md#storageprojectisotagput)
* [storageProjectIsoTransfer](_api_.storageprojectisoapi.md#storageprojectisotransfer)
* [storageProjectIsoUpdate](_api_.storageprojectisoapi.md#storageprojectisoupdate)

## Constructors

### constructor

\+ **new StorageProjectIsoApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [StorageProjectIsoApi](_api_.storageprojectisoapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [StorageProjectIsoApi](_api_.storageprojectisoapi.md)

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

### storageProjectIsoCreate

▸ **storageProjectIsoCreate**(`projectId`: string, `locationId`: string, `storageProjectIsoCreate`: [StorageProjectIsoCreate](../interfaces/_api_.storageprojectisocreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)>>

*Defined in api.ts:58880*

Create iso

**`summary`** Create storage/iso

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`storageProjectIsoCreate` | [StorageProjectIsoCreate](../interfaces/_api_.storageprojectisocreate.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)>>

___

### storageProjectIsoDelete

▸ **storageProjectIsoDelete**(`projectId`: string, `locationId`: string, `isoId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:58894*

Delete iso

**`summary`** Delete storage/iso

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`isoId` | string | Iso Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### storageProjectIsoDetach

▸ **storageProjectIsoDetach**(`projectId`: string, `locationId`: string, `isoId`: string, `storageProjectIsoDetach`: [StorageProjectIsoDetach](../interfaces/_api_.storageprojectisodetach.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)>>

*Defined in api.ts:58910*

action detach

**`summary`** Detach storage/iso

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`isoId` | string | Iso Id |
`storageProjectIsoDetach` | [StorageProjectIsoDetach](../interfaces/_api_.storageprojectisodetach.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)>>

___

### storageProjectIsoEventGet

▸ **storageProjectIsoEventGet**(`projectId`: string, `locationId`: string, `isoId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:58925*

Get storage/iso.event

**`summary`** Get storage/iso.event

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`isoId` | string | Iso Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### storageProjectIsoEventList

▸ **storageProjectIsoEventList**(`projectId`: string, `locationId`: string, `isoId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:58941*

List storage/iso.event

**`summary`** List storage/iso.event

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`isoId` | string | Iso Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### storageProjectIsoGet

▸ **storageProjectIsoGet**(`projectId`: string, `locationId`: string, `isoId`: string, `options?`: any): Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)>>

*Defined in api.ts:58955*

Returns a single iso

**`summary`** Get storage/iso

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`isoId` | string | Iso Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)>>

___

### storageProjectIsoList

▸ **storageProjectIsoList**(`projectId`: string, `locationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)[]>>

*Defined in api.ts:58971*

List iso

**`summary`** List storage/iso

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)[]>>

___

### storageProjectIsoServiceGet

▸ **storageProjectIsoServiceGet**(`projectId`: string, `locationId`: string, `isoId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:58986*

Get storage/iso.service

**`summary`** Get storage/iso.service

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`isoId` | string | Iso Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### storageProjectIsoServiceList

▸ **storageProjectIsoServiceList**(`projectId`: string, `locationId`: string, `isoId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:59000*

List storage/iso.service

**`summary`** List storage/iso.service

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`isoId` | string | Iso Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### storageProjectIsoTagCreate

▸ **storageProjectIsoTagCreate**(`projectId`: string, `locationId`: string, `isoId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:59015*

Create storage/iso.tag

**`summary`** Create storage/iso.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`isoId` | string | Iso Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### storageProjectIsoTagDelete

▸ **storageProjectIsoTagDelete**(`projectId`: string, `locationId`: string, `isoId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:59030*

Delete storage/iso.tag

**`summary`** Delete storage/iso.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`isoId` | string | Iso Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### storageProjectIsoTagGet

▸ **storageProjectIsoTagGet**(`projectId`: string, `locationId`: string, `isoId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:59045*

Get storage/iso.tag

**`summary`** Get storage/iso.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`isoId` | string | Iso Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### storageProjectIsoTagList

▸ **storageProjectIsoTagList**(`projectId`: string, `locationId`: string, `isoId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:59059*

List storage/iso.tag

**`summary`** List storage/iso.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`isoId` | string | Iso Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### storageProjectIsoTagPut

▸ **storageProjectIsoTagPut**(`projectId`: string, `locationId`: string, `isoId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:59074*

Replace storage/iso.tag

**`summary`** Replace storage/iso.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`isoId` | string | Iso Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### storageProjectIsoTransfer

▸ **storageProjectIsoTransfer**(`projectId`: string, `locationId`: string, `isoId`: string, `storageProjectIsoTransfer`: [StorageProjectIsoTransfer](../interfaces/_api_.storageprojectisotransfer.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)>>

*Defined in api.ts:59090*

action transfer

**`summary`** Transfer storage/iso

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`isoId` | string | Iso Id |
`storageProjectIsoTransfer` | [StorageProjectIsoTransfer](../interfaces/_api_.storageprojectisotransfer.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)>>

___

### storageProjectIsoUpdate

▸ **storageProjectIsoUpdate**(`projectId`: string, `locationId`: string, `isoId`: string, `storageProjectIsoUpdate`: [StorageProjectIsoUpdate](../interfaces/_api_.storageprojectisoupdate.md), `options?`: any): Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)>>

*Defined in api.ts:59105*

Returns modified iso

**`summary`** Update storage/iso

**`throws`** {RequiredError}

**`memberof`** StorageProjectIsoApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`isoId` | string | Iso Id |
`storageProjectIsoUpdate` | [StorageProjectIsoUpdate](../interfaces/_api_.storageprojectisoupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)>>
