**hyperone**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / BillingProjectReservationApi

# Class: BillingProjectReservationApi

BillingProjectReservationApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **BillingProjectReservationApi**

## Index

### Constructors

* [constructor](_api_.billingprojectreservationapi.md#constructor)

### Properties

* [axios](_api_.billingprojectreservationapi.md#axios)
* [basePath](_api_.billingprojectreservationapi.md#basepath)
* [configuration](_api_.billingprojectreservationapi.md#configuration)

### Methods

* [billingProjectReservationAssign](_api_.billingprojectreservationapi.md#billingprojectreservationassign)
* [billingProjectReservationCreate](_api_.billingprojectreservationapi.md#billingprojectreservationcreate)
* [billingProjectReservationDelete](_api_.billingprojectreservationapi.md#billingprojectreservationdelete)
* [billingProjectReservationEventGet](_api_.billingprojectreservationapi.md#billingprojectreservationeventget)
* [billingProjectReservationEventList](_api_.billingprojectreservationapi.md#billingprojectreservationeventlist)
* [billingProjectReservationExtend](_api_.billingprojectreservationapi.md#billingprojectreservationextend)
* [billingProjectReservationGet](_api_.billingprojectreservationapi.md#billingprojectreservationget)
* [billingProjectReservationList](_api_.billingprojectreservationapi.md#billingprojectreservationlist)
* [billingProjectReservationServiceGet](_api_.billingprojectreservationapi.md#billingprojectreservationserviceget)
* [billingProjectReservationServiceList](_api_.billingprojectreservationapi.md#billingprojectreservationservicelist)
* [billingProjectReservationTagCreate](_api_.billingprojectreservationapi.md#billingprojectreservationtagcreate)
* [billingProjectReservationTagDelete](_api_.billingprojectreservationapi.md#billingprojectreservationtagdelete)
* [billingProjectReservationTagGet](_api_.billingprojectreservationapi.md#billingprojectreservationtagget)
* [billingProjectReservationTagList](_api_.billingprojectreservationapi.md#billingprojectreservationtaglist)
* [billingProjectReservationTagPut](_api_.billingprojectreservationapi.md#billingprojectreservationtagput)
* [billingProjectReservationUpdate](_api_.billingprojectreservationapi.md#billingprojectreservationupdate)

## Constructors

### constructor

\+ **new BillingProjectReservationApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [BillingProjectReservationApi](_api_.billingprojectreservationapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [BillingProjectReservationApi](_api_.billingprojectreservationapi.md)

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

### billingProjectReservationAssign

▸ **billingProjectReservationAssign**(`projectId`: string, `reservationId`: string, `billingProjectReservationAssign`: [BillingProjectReservationAssign](../interfaces/_api_.billingprojectreservationassign.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Reservation](../interfaces/_api_.reservation.md)>>

*Defined in api.ts:9065*

action assign

**`summary`** Assign billing/reservation

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`reservationId` | string | Reservation Id |
`billingProjectReservationAssign` | [BillingProjectReservationAssign](../interfaces/_api_.billingprojectreservationassign.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Reservation](../interfaces/_api_.reservation.md)>>

___

### billingProjectReservationCreate

▸ **billingProjectReservationCreate**(`projectId`: string, `billingProjectReservationCreate`: [BillingProjectReservationCreate](../interfaces/_api_.billingprojectreservationcreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Reservation](../interfaces/_api_.reservation.md)>>

*Defined in api.ts:9079*

Create reservation

**`summary`** Create billing/reservation

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`billingProjectReservationCreate` | [BillingProjectReservationCreate](../interfaces/_api_.billingprojectreservationcreate.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Reservation](../interfaces/_api_.reservation.md)>>

___

### billingProjectReservationDelete

▸ **billingProjectReservationDelete**(`projectId`: string, `reservationId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:9092*

Delete reservation

**`summary`** Delete billing/reservation

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`reservationId` | string | Reservation Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### billingProjectReservationEventGet

▸ **billingProjectReservationEventGet**(`projectId`: string, `reservationId`: string, `eventId`: string, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

*Defined in api.ts:9106*

Get billing/reservation.event

**`summary`** Get billing/reservation.event

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`reservationId` | string | Reservation Id |
`eventId` | string | eventId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)>>

___

### billingProjectReservationEventList

▸ **billingProjectReservationEventList**(`projectId`: string, `reservationId`: string, `$limit?`: number, `$skip?`: number, `options?`: any): Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

*Defined in api.ts:9121*

List billing/reservation.event

**`summary`** List billing/reservation.event

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`reservationId` | string | Reservation Id |
`$limit?` | number | - |
`$skip?` | number | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Event](../interfaces/_api_.event.md)[]>>

___

### billingProjectReservationExtend

▸ **billingProjectReservationExtend**(`projectId`: string, `reservationId`: string, `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Reservation](../interfaces/_api_.reservation.md)>>

*Defined in api.ts:9135*

action extend

**`summary`** Extend billing/reservation

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`reservationId` | string | Reservation Id |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Reservation](../interfaces/_api_.reservation.md)>>

___

### billingProjectReservationGet

▸ **billingProjectReservationGet**(`projectId`: string, `reservationId`: string, `options?`: any): Promise\<AxiosResponse\<[Reservation](../interfaces/_api_.reservation.md)>>

*Defined in api.ts:9148*

Returns a single reservation

**`summary`** Get billing/reservation

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`reservationId` | string | Reservation Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Reservation](../interfaces/_api_.reservation.md)>>

___

### billingProjectReservationList

▸ **billingProjectReservationList**(`projectId`: string, `name?`: string, `tagValue?`: string, `tagKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Reservation](../interfaces/_api_.reservation.md)[]>>

*Defined in api.ts:9163*

List reservation

**`summary`** List billing/reservation

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`name?` | string | - |
`tagValue?` | string | - |
`tagKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Reservation](../interfaces/_api_.reservation.md)[]>>

___

### billingProjectReservationServiceGet

▸ **billingProjectReservationServiceGet**(`projectId`: string, `reservationId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

*Defined in api.ts:9177*

Get billing/reservation.service

**`summary`** Get billing/reservation.service

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`reservationId` | string | Reservation Id |
`serviceId` | string | serviceId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)>>

___

### billingProjectReservationServiceList

▸ **billingProjectReservationServiceList**(`projectId`: string, `reservationId`: string, `options?`: any): Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

*Defined in api.ts:9190*

List billing/reservation.service

**`summary`** List billing/reservation.service

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`reservationId` | string | Reservation Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[ResourceService](../interfaces/_api_.resourceservice.md)[]>>

___

### billingProjectReservationTagCreate

▸ **billingProjectReservationTagCreate**(`projectId`: string, `reservationId`: string, `tag`: [Tag](../interfaces/_api_.tag.md), `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:9204*

Create billing/reservation.tag

**`summary`** Create billing/reservation.tag

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`reservationId` | string | Reservation Id |
`tag` | [Tag](../interfaces/_api_.tag.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### billingProjectReservationTagDelete

▸ **billingProjectReservationTagDelete**(`projectId`: string, `reservationId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<void>>

*Defined in api.ts:9218*

Delete billing/reservation.tag

**`summary`** Delete billing/reservation.tag

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`reservationId` | string | Reservation Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<void>>

___

### billingProjectReservationTagGet

▸ **billingProjectReservationTagGet**(`projectId`: string, `reservationId`: string, `tagId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

*Defined in api.ts:9232*

Get billing/reservation.tag

**`summary`** Get billing/reservation.tag

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`reservationId` | string | Reservation Id |
`tagId` | string | tagId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)>>

___

### billingProjectReservationTagList

▸ **billingProjectReservationTagList**(`projectId`: string, `reservationId`: string, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:9245*

List billing/reservation.tag

**`summary`** List billing/reservation.tag

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`reservationId` | string | Reservation Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### billingProjectReservationTagPut

▸ **billingProjectReservationTagPut**(`projectId`: string, `reservationId`: string, `tag`: Array\<[Tag](../interfaces/_api_.tag.md)>, `options?`: any): Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

*Defined in api.ts:9259*

Replace billing/reservation.tag

**`summary`** Replace billing/reservation.tag

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`reservationId` | string | Reservation Id |
`tag` | Array\<[Tag](../interfaces/_api_.tag.md)> |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Tag](../interfaces/_api_.tag.md)[]>>

___

### billingProjectReservationUpdate

▸ **billingProjectReservationUpdate**(`projectId`: string, `reservationId`: string, `billingProjectReservationUpdate`: [BillingProjectReservationUpdate](../interfaces/_api_.billingprojectreservationupdate.md), `options?`: any): Promise\<AxiosResponse\<[Reservation](../interfaces/_api_.reservation.md)>>

*Defined in api.ts:9273*

Returns modified reservation

**`summary`** Update billing/reservation

**`throws`** {RequiredError}

**`memberof`** BillingProjectReservationApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`reservationId` | string | Reservation Id |
`billingProjectReservationUpdate` | [BillingProjectReservationUpdate](../interfaces/_api_.billingprojectreservationupdate.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Reservation](../interfaces/_api_.reservation.md)>>
