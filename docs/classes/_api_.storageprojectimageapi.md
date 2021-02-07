**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / StorageProjectImageApi

# Class: StorageProjectImageApi

StorageProjectImageApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **StorageProjectImageApi**

## Index

### Constructors

* [constructor](_api_.storageprojectimageapi.md#constructor)

### Properties

* [axios](_api_.storageprojectimageapi.md#axios)
* [basePath](_api_.storageprojectimageapi.md#basepath)
* [configuration](_api_.storageprojectimageapi.md#configuration)

### Methods

* [storageProjectImageCreate](_api_.storageprojectimageapi.md#storageprojectimagecreate)
* [storageProjectImageDelete](_api_.storageprojectimageapi.md#storageprojectimagedelete)
* [storageProjectImageDiskList](_api_.storageprojectimageapi.md#storageprojectimagedisklist)
* [storageProjectImageEventGet](_api_.storageprojectimageapi.md#storageprojectimageeventget)
* [storageProjectImageEventList](_api_.storageprojectimageapi.md#storageprojectimageeventlist)
* [storageProjectImageGet](_api_.storageprojectimageapi.md#storageprojectimageget)
* [storageProjectImageList](_api_.storageprojectimageapi.md#storageprojectimagelist)
* [storageProjectImageServiceGet](_api_.storageprojectimageapi.md#storageprojectimageserviceget)
* [storageProjectImageServiceList](_api_.storageprojectimageapi.md#storageprojectimageservicelist)
* [storageProjectImageTagCreate](_api_.storageprojectimageapi.md#storageprojectimagetagcreate)
* [storageProjectImageTagDelete](_api_.storageprojectimageapi.md#storageprojectimagetagdelete)
* [storageProjectImageTagGet](_api_.storageprojectimageapi.md#storageprojectimagetagget)
* [storageProjectImageTagList](_api_.storageprojectimageapi.md#storageprojectimagetaglist)
* [storageProjectImageTagPut](_api_.storageprojectimageapi.md#storageprojectimagetagput)
* [storageProjectImageTransfer](_api_.storageprojectimageapi.md#storageprojectimagetransfer)
* [storageProjectImageUpdate](_api_.storageprojectimageapi.md#storageprojectimageupdate)

## Constructors

### constructor

\+ **new StorageProjectImageApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [StorageProjectImageApi](_api_.storageprojectimageapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [StorageProjectImageApi](_api_.storageprojectimageapi.md)

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

### storageProjectImageCreate

▸ **storageProjectImageCreate**(`projectId`: string, `locationId`: string, `storageProjectImageCreate`: [StorageProjectImageCreate](../interfaces/_api_.storageprojectimagecreate.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Image](../interfaces/_api_.image.md)>>

*Defined in api.ts:57553*

Create image

**`summary`** Create storage/image

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`storageProjectImageCreate` | [StorageProjectImageCreate](../interfaces/_api_.storageprojectimagecreate.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Image](../interfaces/_api_.image.md)>>

___

### storageProjectImageDelete

▸ **storageProjectImageDelete**(`projectId`: string, `locationId`: string, `imageId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:57567*

Delete image

**`summary`** Delete storage/image

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`imageId` | string | Image Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### storageProjectImageDiskList

▸ **storageProjectImageDiskList**(`projectId`: string, `locationId`: string, `imageId`: string, `options?`: any): Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)[]>>

*Defined in api.ts:57581*

List storage/image.disk

**`summary`** List storage/image.disk

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`imageId` | string | Image Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)[]>>

___

### storageProjectImageEventGet

▸ **storageProjectImageEventGet**(`projectId`: string, `locationId`: string, `imageId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:57596*

Get storage/image.event

**`summary`** Get storage/image.event

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`imageId` | string | Image Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### storageProjectImageEventList

▸ **storageProjectImageEventList**(`projectId`: string, `locationId`: string, `imageId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:57612*

List storage/image.event

**`summary`** List storage/image.event

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`imageId` | string | Image Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### storageProjectImageGet

▸ **storageProjectImageGet**(`projectId`: string, `locationId`: string, `imageId`: string, `options?`: any): Promise\<AxiosResponse\<[Image](../interfaces/_api_.image.md)>>

*Defined in api.ts:57626*

Returns a single image

**`summary`** Get storage/image

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`imageId` | string | Image Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Image](../interfaces/_api_.image.md)>>

___

### storageProjectImageList

▸ **storageProjectImageList**(`projectId`: string, `locationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Image](../interfaces/_api_.image.md)[]>>

*Defined in api.ts:57642*

List image

**`summary`** List storage/image

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Image](../interfaces/_api_.image.md)[]>>

___

### storageProjectImageServiceGet

▸ **storageProjectImageServiceGet**(`projectId`: string, `locationId`: string, `imageId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:57657*

Get storage/image.service

**`summary`** Get storage/image.service

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`imageId` | string | Image Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### storageProjectImageServiceList

▸ **storageProjectImageServiceList**(`projectId`: string, `locationId`: string, `imageId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:57671*

List storage/image.service

**`summary`** List storage/image.service

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`imageId` | string | Image Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### storageProjectImageTagCreate

▸ **storageProjectImageTagCreate**(`projectId`: string, `locationId`: string, `imageId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:57686*

Create storage/image.tag

**`summary`** Create storage/image.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`imageId` | string | Image Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### storageProjectImageTagDelete

▸ **storageProjectImageTagDelete**(`projectId`: string, `locationId`: string, `imageId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:57701*

Delete storage/image.tag

**`summary`** Delete storage/image.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`imageId` | string | Image Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### storageProjectImageTagGet

▸ **storageProjectImageTagGet**(`projectId`: string, `locationId`: string, `imageId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:57716*

Get storage/image.tag

**`summary`** Get storage/image.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`imageId` | string | Image Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### storageProjectImageTagList

▸ **storageProjectImageTagList**(`projectId`: string, `locationId`: string, `imageId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:57730*

List storage/image.tag

**`summary`** List storage/image.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`imageId` | string | Image Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### storageProjectImageTagPut

▸ **storageProjectImageTagPut**(`projectId`: string, `locationId`: string, `imageId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:57745*

Replace storage/image.tag

**`summary`** Replace storage/image.tag

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`imageId` | string | Image Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### storageProjectImageTransfer

▸ **storageProjectImageTransfer**(`projectId`: string, `locationId`: string, `imageId`: string, `storageProjectImageTransfer`: [StorageProjectImageTransfer](../interfaces/_api_.storageprojectimagetransfer.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Image](../interfaces/_api_.image.md)>>

*Defined in api.ts:57762*

action transfer

**`summary`** Transfer storage/image

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`imageId` | string | Image Id |
`storageProjectImageTransfer` | [StorageProjectImageTransfer](../interfaces/_api_.storageprojectimagetransfer.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Image](../interfaces/_api_.image.md)>>

___

### storageProjectImageUpdate

▸ **storageProjectImageUpdate**(`projectId`: string, `locationId`: string, `imageId`: string, `storageProjectImageUpdate`: [StorageProjectImageUpdate](../interfaces/_api_.storageprojectimageupdate.md), `options?`: any): Promise\<AxiosResponse\<[Image](../interfaces/_api_.image.md)>>

*Defined in api.ts:57777*

Returns modified image

**`summary`** Update storage/image

**`throws`** {RequiredError}

**`memberof`** StorageProjectImageApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`imageId` | string | Image Id |
`storageProjectImageUpdate` | [StorageProjectImageUpdate](../interfaces/_api_.storageprojectimageupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Image](../interfaces/_api_.image.md)>>
