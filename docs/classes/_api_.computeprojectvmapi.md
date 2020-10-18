**hyperone**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / ComputeProjectVmApi

# Class: ComputeProjectVmApi

ComputeProjectVmApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **ComputeProjectVmApi**

## Index

### Constructors

* [constructor](_api_.computeprojectvmapi.md#constructor)

### Properties

* [axios](_api_.computeprojectvmapi.md#axios)
* [basePath](_api_.computeprojectvmapi.md#basepath)
* [configuration](_api_.computeprojectvmapi.md#configuration)

### Methods

* [computeProjectVmConsole](_api_.computeprojectvmapi.md#computeprojectvmconsole)
* [computeProjectVmCreate](_api_.computeprojectvmapi.md#computeprojectvmcreate)
* [computeProjectVmDelete](_api_.computeprojectvmapi.md#computeprojectvmdelete)
* [computeProjectVmDiskCreate](_api_.computeprojectvmapi.md#computeprojectvmdiskcreate)
* [computeProjectVmDiskList](_api_.computeprojectvmapi.md#computeprojectvmdisklist)
* [computeProjectVmEventGet](_api_.computeprojectvmapi.md#computeprojectvmeventget)
* [computeProjectVmEventList](_api_.computeprojectvmapi.md#computeprojectvmeventlist)
* [computeProjectVmFlavour](_api_.computeprojectvmapi.md#computeprojectvmflavour)
* [computeProjectVmGet](_api_.computeprojectvmapi.md#computeprojectvmget)
* [computeProjectVmIsoCreate](_api_.computeprojectvmapi.md#computeprojectvmisocreate)
* [computeProjectVmIsoList](_api_.computeprojectvmapi.md#computeprojectvmisolist)
* [computeProjectVmList](_api_.computeprojectvmapi.md#computeprojectvmlist)
* [computeProjectVmMetricGet](_api_.computeprojectvmapi.md#computeprojectvmmetricget)
* [computeProjectVmMetricList](_api_.computeprojectvmapi.md#computeprojectvmmetriclist)
* [computeProjectVmMetricPointList](_api_.computeprojectvmapi.md#computeprojectvmmetricpointlist)
* [computeProjectVmPasswordReset](_api_.computeprojectvmapi.md#computeprojectvmpasswordreset)
* [computeProjectVmRestart](_api_.computeprojectvmapi.md#computeprojectvmrestart)
* [computeProjectVmSerialport](_api_.computeprojectvmapi.md#computeprojectvmserialport)
* [computeProjectVmServiceGet](_api_.computeprojectvmapi.md#computeprojectvmserviceget)
* [computeProjectVmServiceList](_api_.computeprojectvmapi.md#computeprojectvmservicelist)
* [computeProjectVmStart](_api_.computeprojectvmapi.md#computeprojectvmstart)
* [computeProjectVmStop](_api_.computeprojectvmapi.md#computeprojectvmstop)
* [computeProjectVmTagCreate](_api_.computeprojectvmapi.md#computeprojectvmtagcreate)
* [computeProjectVmTagDelete](_api_.computeprojectvmapi.md#computeprojectvmtagdelete)
* [computeProjectVmTagGet](_api_.computeprojectvmapi.md#computeprojectvmtagget)
* [computeProjectVmTagList](_api_.computeprojectvmapi.md#computeprojectvmtaglist)
* [computeProjectVmTagPut](_api_.computeprojectvmapi.md#computeprojectvmtagput)
* [computeProjectVmTurnoff](_api_.computeprojectvmapi.md#computeprojectvmturnoff)
* [computeProjectVmUpdate](_api_.computeprojectvmapi.md#computeprojectvmupdate)

## Constructors

### constructor

\+ **new ComputeProjectVmApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [ComputeProjectVmApi](_api_.computeprojectvmapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [ComputeProjectVmApi](_api_.computeprojectvmapi.md)

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

### computeProjectVmConsole

▸ **computeProjectVmConsole**(`projectId`: string, `locationId`: string, `vmId`: string, `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:13676*

action console

**`summary`** Console compute/vm

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### computeProjectVmCreate

▸ **computeProjectVmCreate**(`projectId`: string, `locationId`: string, `computeProjectVmCreate`: [ComputeProjectVmCreate](../interfaces/_api_.computeprojectvmcreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

*Defined in api.ts:13691*

Create vm

**`summary`** Create compute/vm

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`computeProjectVmCreate` | [ComputeProjectVmCreate](../interfaces/_api_.computeprojectvmcreate.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

___

### computeProjectVmDelete

▸ **computeProjectVmDelete**(`projectId`: string, `locationId`: string, `vmId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:13705*

Delete vm

**`summary`** Delete compute/vm

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### computeProjectVmDiskCreate

▸ **computeProjectVmDiskCreate**(`projectId`: string, `locationId`: string, `vmId`: string, `computeProjectVmDiskCreate`: [ComputeProjectVmDiskCreate](../interfaces/_api_.computeprojectvmdiskcreate.md), `options?`: any): Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)>>

*Defined in api.ts:13720*

Create compute/vm.disk

**`summary`** Create compute/vm.disk

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`computeProjectVmDiskCreate` | [ComputeProjectVmDiskCreate](../interfaces/_api_.computeprojectvmdiskcreate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)>>

___

### computeProjectVmDiskList

▸ **computeProjectVmDiskList**(`projectId`: string, `locationId`: string, `vmId`: string, `options?`: any): Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)[]>>

*Defined in api.ts:13734*

List compute/vm.disk

**`summary`** List compute/vm.disk

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Disk](../interfaces/_api_.disk.md)[]>>

___

### computeProjectVmEventGet

▸ **computeProjectVmEventGet**(`projectId`: string, `locationId`: string, `vmId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:13749*

Get compute/vm.event

**`summary`** Get compute/vm.event

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### computeProjectVmEventList

▸ **computeProjectVmEventList**(`projectId`: string, `locationId`: string, `vmId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:13765*

List compute/vm.event

**`summary`** List compute/vm.event

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### computeProjectVmFlavour

▸ **computeProjectVmFlavour**(`projectId`: string, `locationId`: string, `vmId`: string, `computeProjectVmFlavour`: [ComputeProjectVmFlavour](../interfaces/_api_.computeprojectvmflavour.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

*Defined in api.ts:13781*

action flavour

**`summary`** Flavour compute/vm

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`computeProjectVmFlavour` | [ComputeProjectVmFlavour](../interfaces/_api_.computeprojectvmflavour.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

___

### computeProjectVmGet

▸ **computeProjectVmGet**(`projectId`: string, `locationId`: string, `vmId`: string, `options?`: any): Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

*Defined in api.ts:13795*

Returns a single vm

**`summary`** Get compute/vm

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

___

### computeProjectVmIsoCreate

▸ **computeProjectVmIsoCreate**(`projectId`: string, `locationId`: string, `vmId`: string, `computeProjectVmIsoCreate`: [ComputeProjectVmIsoCreate](../interfaces/_api_.computeprojectvmisocreate.md), `options?`: any): Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)>>

*Defined in api.ts:13810*

Create compute/vm.iso

**`summary`** Create compute/vm.iso

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`computeProjectVmIsoCreate` | [ComputeProjectVmIsoCreate](../interfaces/_api_.computeprojectvmisocreate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)>>

___

### computeProjectVmIsoList

▸ **computeProjectVmIsoList**(`projectId`: string, `locationId`: string, `vmId`: string, `options?`: any): Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)[]>>

*Defined in api.ts:13824*

List compute/vm.iso

**`summary`** List compute/vm.iso

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Iso](../interfaces/_api_.iso.md)[]>>

___

### computeProjectVmList

▸ **computeProjectVmList**(`projectId`: string, `locationId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)[]>>

*Defined in api.ts:13840*

List vm

**`summary`** List compute/vm

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)[]>>

___

### computeProjectVmMetricGet

▸ **computeProjectVmMetricGet**(`projectId`: string, `locationId`: string, `vmId`: string, `metricId`: string, `options?`: any): Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)>>

*Defined in api.ts:13855*

Get compute/vm.metric

**`summary`** Get compute/vm.metric

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`metricId` | string | metricId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)>>

___

### computeProjectVmMetricList

▸ **computeProjectVmMetricList**(`projectId`: string, `locationId`: string, `vmId`: string, `options?`: any): Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)[]>>

*Defined in api.ts:13869*

List compute/vm.metric

**`summary`** List compute/vm.metric

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Metric](../interfaces/_api_.metric.md)[]>>

___

### computeProjectVmMetricPointList

▸ **computeProjectVmMetricPointList**(`projectId`: string, `locationId`: string, `vmId`: string, `metricId`: string, `interval?`: string, `timespan?`: string, `options?`: any): Promise\<AxiosResponse\<[Serie](../interfaces/_api_.serie.md)[]>>

*Defined in api.ts:13886*

List compute/vm.point

**`summary`** List compute/vm.point

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`metricId` | string | metricId |
`interval?` | string | - |
`timespan?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Serie](../interfaces/_api_.serie.md)[]>>

___

### computeProjectVmPasswordReset

▸ **computeProjectVmPasswordReset**(`projectId`: string, `locationId`: string, `vmId`: string, `computeProjectVmPasswordReset`: [ComputeProjectVmPasswordReset](../interfaces/_api_.computeprojectvmpasswordreset.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

*Defined in api.ts:13902*

action password_reset

**`summary`** Password reset compute/vm

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`computeProjectVmPasswordReset` | [ComputeProjectVmPasswordReset](../interfaces/_api_.computeprojectvmpasswordreset.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

___

### computeProjectVmRestart

▸ **computeProjectVmRestart**(`projectId`: string, `locationId`: string, `vmId`: string, `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

*Defined in api.ts:13917*

action restart

**`summary`** Restart compute/vm

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

___

### computeProjectVmSerialport

▸ **computeProjectVmSerialport**(`projectId`: string, `locationId`: string, `vmId`: string, `computeProjectVmSerialport`: [ComputeProjectVmSerialport](../interfaces/_api_.computeprojectvmserialport.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<any>>

*Defined in api.ts:13933*

action serialport

**`summary`** Serialport compute/vm

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`computeProjectVmSerialport` | [ComputeProjectVmSerialport](../interfaces/_api_.computeprojectvmserialport.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<any>>

___

### computeProjectVmServiceGet

▸ **computeProjectVmServiceGet**(`projectId`: string, `locationId`: string, `vmId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:13948*

Get compute/vm.service

**`summary`** Get compute/vm.service

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### computeProjectVmServiceList

▸ **computeProjectVmServiceList**(`projectId`: string, `locationId`: string, `vmId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:13962*

List compute/vm.service

**`summary`** List compute/vm.service

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### computeProjectVmStart

▸ **computeProjectVmStart**(`projectId`: string, `locationId`: string, `vmId`: string, `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

*Defined in api.ts:13977*

action start

**`summary`** Start compute/vm

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

___

### computeProjectVmStop

▸ **computeProjectVmStop**(`projectId`: string, `locationId`: string, `vmId`: string, `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

*Defined in api.ts:13992*

action stop

**`summary`** Stop compute/vm

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

___

### computeProjectVmTagCreate

▸ **computeProjectVmTagCreate**(`projectId`: string, `locationId`: string, `vmId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:14007*

Create compute/vm.tag

**`summary`** Create compute/vm.tag

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### computeProjectVmTagDelete

▸ **computeProjectVmTagDelete**(`projectId`: string, `locationId`: string, `vmId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:14022*

Delete compute/vm.tag

**`summary`** Delete compute/vm.tag

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### computeProjectVmTagGet

▸ **computeProjectVmTagGet**(`projectId`: string, `locationId`: string, `vmId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:14037*

Get compute/vm.tag

**`summary`** Get compute/vm.tag

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### computeProjectVmTagList

▸ **computeProjectVmTagList**(`projectId`: string, `locationId`: string, `vmId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:14051*

List compute/vm.tag

**`summary`** List compute/vm.tag

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### computeProjectVmTagPut

▸ **computeProjectVmTagPut**(`projectId`: string, `locationId`: string, `vmId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:14066*

Replace compute/vm.tag

**`summary`** Replace compute/vm.tag

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### computeProjectVmTurnoff

▸ **computeProjectVmTurnoff**(`projectId`: string, `locationId`: string, `vmId`: string, `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

*Defined in api.ts:14081*

action turnoff

**`summary`** Turnoff compute/vm

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

___

### computeProjectVmUpdate

▸ **computeProjectVmUpdate**(`projectId`: string, `locationId`: string, `vmId`: string, `computeProjectVmUpdate`: [ComputeProjectVmUpdate](../interfaces/_api_.computeprojectvmupdate.md), `options?`: any): Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>

*Defined in api.ts:14096*

Returns modified vm

**`summary`** Update compute/vm

**`throws`** {RequiredError}

**`memberof`** ComputeProjectVmApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`locationId` | string | Location Id |
`vmId` | string | Vm Id |
`computeProjectVmUpdate` | [ComputeProjectVmUpdate](../interfaces/_api_.computeprojectvmupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Vm](../interfaces/_api_.vm.md)>>
