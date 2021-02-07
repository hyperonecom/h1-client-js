**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / DnsProjectZoneApi

# Class: DnsProjectZoneApi

DnsProjectZoneApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **DnsProjectZoneApi**

## Index

### Constructors

* [constructor](_api_.dnsprojectzoneapi.md#constructor)

### Properties

* [axios](_api_.dnsprojectzoneapi.md#axios)
* [basePath](_api_.dnsprojectzoneapi.md#basepath)
* [configuration](_api_.dnsprojectzoneapi.md#configuration)

### Methods

* [dnsProjectZoneCreate](_api_.dnsprojectzoneapi.md#dnsprojectzonecreate)
* [dnsProjectZoneDelete](_api_.dnsprojectzoneapi.md#dnsprojectzonedelete)
* [dnsProjectZoneEventGet](_api_.dnsprojectzoneapi.md#dnsprojectzoneeventget)
* [dnsProjectZoneEventList](_api_.dnsprojectzoneapi.md#dnsprojectzoneeventlist)
* [dnsProjectZoneGet](_api_.dnsprojectzoneapi.md#dnsprojectzoneget)
* [dnsProjectZoneList](_api_.dnsprojectzoneapi.md#dnsprojectzonelist)
* [dnsProjectZoneRecordsetCreate](_api_.dnsprojectzoneapi.md#dnsprojectzonerecordsetcreate)
* [dnsProjectZoneRecordsetDelete](_api_.dnsprojectzoneapi.md#dnsprojectzonerecordsetdelete)
* [dnsProjectZoneRecordsetGet](_api_.dnsprojectzoneapi.md#dnsprojectzonerecordsetget)
* [dnsProjectZoneRecordsetList](_api_.dnsprojectzoneapi.md#dnsprojectzonerecordsetlist)
* [dnsProjectZoneRecordsetPatch](_api_.dnsprojectzoneapi.md#dnsprojectzonerecordsetpatch)
* [dnsProjectZoneRecordsetRecordCreate](_api_.dnsprojectzoneapi.md#dnsprojectzonerecordsetrecordcreate)
* [dnsProjectZoneRecordsetRecordDelete](_api_.dnsprojectzoneapi.md#dnsprojectzonerecordsetrecorddelete)
* [dnsProjectZoneRecordsetRecordGet](_api_.dnsprojectzoneapi.md#dnsprojectzonerecordsetrecordget)
* [dnsProjectZoneRecordsetRecordList](_api_.dnsprojectzoneapi.md#dnsprojectzonerecordsetrecordlist)
* [dnsProjectZoneRecordsetRecordPut](_api_.dnsprojectzoneapi.md#dnsprojectzonerecordsetrecordput)
* [dnsProjectZoneServiceGet](_api_.dnsprojectzoneapi.md#dnsprojectzoneserviceget)
* [dnsProjectZoneServiceList](_api_.dnsprojectzoneapi.md#dnsprojectzoneservicelist)
* [dnsProjectZoneTagCreate](_api_.dnsprojectzoneapi.md#dnsprojectzonetagcreate)
* [dnsProjectZoneTagDelete](_api_.dnsprojectzoneapi.md#dnsprojectzonetagdelete)
* [dnsProjectZoneTagGet](_api_.dnsprojectzoneapi.md#dnsprojectzonetagget)
* [dnsProjectZoneTagList](_api_.dnsprojectzoneapi.md#dnsprojectzonetaglist)
* [dnsProjectZoneTagPut](_api_.dnsprojectzoneapi.md#dnsprojectzonetagput)
* [dnsProjectZoneUpdate](_api_.dnsprojectzoneapi.md#dnsprojectzoneupdate)

## Constructors

### constructor

\+ **new DnsProjectZoneApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [DnsProjectZoneApi](_api_.dnsprojectzoneapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:50*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [DnsProjectZoneApi](_api_.dnsprojectzoneapi.md)

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

### dnsProjectZoneCreate

▸ **dnsProjectZoneCreate**(`projectId`: string, `locationId`: string, `dnsProjectZoneCreate`: [DnsProjectZoneCreate](../interfaces/_api_.dnsprojectzonecreate.md), `xIdempotencyKey?`: string, `xDryRun?`: string, `options?`: any): Promise\<AxiosResponse\<[Zone](../interfaces/_api_.zone.md)>>

*Defined in api.ts:21365*

Create zone

**`summary`** Create dns/zone

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`dnsProjectZoneCreate` | [DnsProjectZoneCreate](../interfaces/_api_.dnsprojectzonecreate.md) |  |
`xIdempotencyKey?` | string | - |
`xDryRun?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Zone](../interfaces/_api_.zone.md)>>

___

### dnsProjectZoneDelete

▸ **dnsProjectZoneDelete**(`projectId`: string, `locationId`: string, `zoneId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:21379*

Delete zone

**`summary`** Delete dns/zone

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### dnsProjectZoneEventGet

▸ **dnsProjectZoneEventGet**(`projectId`: string, `locationId`: string, `zoneId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:21394*

Get dns/zone.event

**`summary`** Get dns/zone.event

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### dnsProjectZoneEventList

▸ **dnsProjectZoneEventList**(`projectId`: string, `locationId`: string, `zoneId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:21410*

List dns/zone.event

**`summary`** List dns/zone.event

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### dnsProjectZoneGet

▸ **dnsProjectZoneGet**(`projectId`: string, `locationId`: string, `zoneId`: string, `options?`: any): Promise\<AxiosResponse\<[Zone](../interfaces/_api_.zone.md)>>

*Defined in api.ts:21424*

Returns a single zone

**`summary`** Get dns/zone

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Zone](../interfaces/_api_.zone.md)>>

___

### dnsProjectZoneList

▸ **dnsProjectZoneList**(`projectId`: string, `locationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Zone](../interfaces/_api_.zone.md)[]>>

*Defined in api.ts:21440*

List zone

**`summary`** List dns/zone

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Zone](../interfaces/_api_.zone.md)[]>>

___

### dnsProjectZoneRecordsetCreate

▸ **dnsProjectZoneRecordsetCreate**(`projectId`: string, `locationId`: string, `zoneId`: string, `dnsRecordset`: [DnsRecordset](../interfaces/_api_.dnsrecordset.md), `options?`: any): Promise\<AxiosResponse\<[DnsRecordset](../interfaces/_api_.dnsrecordset.md)>>

*Defined in api.ts:21455*

Create dns/zone.recordset

**`summary`** Create dns/zone.recordset

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`dnsRecordset` | [DnsRecordset](../interfaces/_api_.dnsrecordset.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[DnsRecordset](../interfaces/_api_.dnsrecordset.md)>>

___

### dnsProjectZoneRecordsetDelete

▸ **dnsProjectZoneRecordsetDelete**(`projectId`: string, `locationId`: string, `zoneId`: string, `recordsetId`: string, `options?`: any): Promise\<AxiosResponse\<[Zone](../interfaces/_api_.zone.md)>>

*Defined in api.ts:21470*

Delete dns/zone.recordset

**`summary`** Delete dns/zone.recordset

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`recordsetId` | string | recordsetId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Zone](../interfaces/_api_.zone.md)>>

___

### dnsProjectZoneRecordsetGet

▸ **dnsProjectZoneRecordsetGet**(`projectId`: string, `locationId`: string, `zoneId`: string, `recordsetId`: string, `options?`: any): Promise\<AxiosResponse\<[DnsRecordset](../interfaces/_api_.dnsrecordset.md)>>

*Defined in api.ts:21485*

Get dns/zone.recordset

**`summary`** Get dns/zone.recordset

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`recordsetId` | string | recordsetId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[DnsRecordset](../interfaces/_api_.dnsrecordset.md)>>

___

### dnsProjectZoneRecordsetList

▸ **dnsProjectZoneRecordsetList**(`projectId`: string, `locationId`: string, `zoneId`: string, `options?`: any): Promise\<AxiosResponse\<[DnsRecordset](../interfaces/_api_.dnsrecordset.md)[]>>

*Defined in api.ts:21499*

List dns/zone.recordset

**`summary`** List dns/zone.recordset

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[DnsRecordset](../interfaces/_api_.dnsrecordset.md)[]>>

___

### dnsProjectZoneRecordsetPatch

▸ **dnsProjectZoneRecordsetPatch**(`projectId`: string, `locationId`: string, `zoneId`: string, `recordsetId`: string, `dnsProjectZoneRecordsetPatch`: [DnsProjectZoneRecordsetPatch](../interfaces/_api_.dnsprojectzonerecordsetpatch.md), `options?`: any): Promise\<AxiosResponse\<[DnsRecordset](../interfaces/_api_.dnsrecordset.md)>>

*Defined in api.ts:21515*

Update dns/zone.recordset

**`summary`** Update dns/zone.recordset

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`recordsetId` | string | recordsetId |
`dnsProjectZoneRecordsetPatch` | [DnsProjectZoneRecordsetPatch](../interfaces/_api_.dnsprojectzonerecordsetpatch.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[DnsRecordset](../interfaces/_api_.dnsrecordset.md)>>

___

### dnsProjectZoneRecordsetRecordCreate

▸ **dnsProjectZoneRecordsetRecordCreate**(`projectId`: string, `locationId`: string, `zoneId`: string, `recordsetId`: string, `dnsRecord`: [DnsRecord](../interfaces/_api_.dnsrecord.md), `options?`: any): Promise\<AxiosResponse\<[DnsRecord](../interfaces/_api_.dnsrecord.md)>>

*Defined in api.ts:21531*

Create dns/zone.record

**`summary`** Create dns/zone.record

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`recordsetId` | string | recordsetId |
`dnsRecord` | [DnsRecord](../interfaces/_api_.dnsrecord.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[DnsRecord](../interfaces/_api_.dnsrecord.md)>>

___

### dnsProjectZoneRecordsetRecordDelete

▸ **dnsProjectZoneRecordsetRecordDelete**(`projectId`: string, `locationId`: string, `zoneId`: string, `recordsetId`: string, `recordId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:21547*

Delete dns/zone.record

**`summary`** Delete dns/zone.record

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`recordsetId` | string | recordsetId |
`recordId` | string | recordId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### dnsProjectZoneRecordsetRecordGet

▸ **dnsProjectZoneRecordsetRecordGet**(`projectId`: string, `locationId`: string, `zoneId`: string, `recordsetId`: string, `recordId`: string, `options?`: any): Promise\<AxiosResponse\<[DnsRecord](../interfaces/_api_.dnsrecord.md)>>

*Defined in api.ts:21563*

Get dns/zone.record

**`summary`** Get dns/zone.record

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`recordsetId` | string | recordsetId |
`recordId` | string | recordId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[DnsRecord](../interfaces/_api_.dnsrecord.md)>>

___

### dnsProjectZoneRecordsetRecordList

▸ **dnsProjectZoneRecordsetRecordList**(`projectId`: string, `locationId`: string, `zoneId`: string, `recordsetId`: string, `options?`: any): Promise\<AxiosResponse\<[DnsRecord](../interfaces/_api_.dnsrecord.md)[]>>

*Defined in api.ts:21578*

List dns/zone.record

**`summary`** List dns/zone.record

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`recordsetId` | string | recordsetId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[DnsRecord](../interfaces/_api_.dnsrecord.md)[]>>

___

### dnsProjectZoneRecordsetRecordPut

▸ **dnsProjectZoneRecordsetRecordPut**(`projectId`: string, `locationId`: string, `zoneId`: string, `recordsetId`: string, `dnsRecord`: Array\<[DnsRecord](../interfaces/_api_.dnsrecord.md)>, `options?`: any): Promise\<AxiosResponse\<[DnsRecord](../interfaces/_api_.dnsrecord.md)[]>>

*Defined in api.ts:21594*

Replace dns/zone.record

**`summary`** Replace dns/zone.record

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`recordsetId` | string | recordsetId |
`dnsRecord` | Array\<[DnsRecord](../interfaces/_api_.dnsrecord.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[DnsRecord](../interfaces/_api_.dnsrecord.md)[]>>

___

### dnsProjectZoneServiceGet

▸ **dnsProjectZoneServiceGet**(`projectId`: string, `locationId`: string, `zoneId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:21609*

Get dns/zone.service

**`summary`** Get dns/zone.service

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### dnsProjectZoneServiceList

▸ **dnsProjectZoneServiceList**(`projectId`: string, `locationId`: string, `zoneId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:21623*

List dns/zone.service

**`summary`** List dns/zone.service

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### dnsProjectZoneTagCreate

▸ **dnsProjectZoneTagCreate**(`projectId`: string, `locationId`: string, `zoneId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:21638*

Create dns/zone.tag

**`summary`** Create dns/zone.tag

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### dnsProjectZoneTagDelete

▸ **dnsProjectZoneTagDelete**(`projectId`: string, `locationId`: string, `zoneId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:21653*

Delete dns/zone.tag

**`summary`** Delete dns/zone.tag

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### dnsProjectZoneTagGet

▸ **dnsProjectZoneTagGet**(`projectId`: string, `locationId`: string, `zoneId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:21668*

Get dns/zone.tag

**`summary`** Get dns/zone.tag

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### dnsProjectZoneTagList

▸ **dnsProjectZoneTagList**(`projectId`: string, `locationId`: string, `zoneId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:21682*

List dns/zone.tag

**`summary`** List dns/zone.tag

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### dnsProjectZoneTagPut

▸ **dnsProjectZoneTagPut**(`projectId`: string, `locationId`: string, `zoneId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:21697*

Replace dns/zone.tag

**`summary`** Replace dns/zone.tag

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### dnsProjectZoneUpdate

▸ **dnsProjectZoneUpdate**(`projectId`: string, `locationId`: string, `zoneId`: string, `dnsProjectZoneUpdate`: [DnsProjectZoneUpdate](../interfaces/_api_.dnsprojectzoneupdate.md), `options?`: any): Promise\<AxiosResponse\<[Zone](../interfaces/_api_.zone.md)>>

*Defined in api.ts:21712*

Returns modified zone

**`summary`** Update dns/zone

**`throws`** {RequiredError}

**`memberof`** DnsProjectZoneApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`zoneId` | string | Zone Id |
`dnsProjectZoneUpdate` | [DnsProjectZoneUpdate](../interfaces/_api_.dnsprojectzoneupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Zone](../interfaces/_api_.zone.md)>>
