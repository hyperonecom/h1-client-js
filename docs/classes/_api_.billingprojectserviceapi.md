**h1-client-ts**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / BillingProjectServiceApi

# Class: BillingProjectServiceApi

BillingProjectServiceApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **BillingProjectServiceApi**

## Index

### Constructors

* [constructor](_api_.billingprojectserviceapi.md#constructor)

### Properties

* [axios](_api_.billingprojectserviceapi.md#axios)
* [basePath](_api_.billingprojectserviceapi.md#basepath)
* [configuration](_api_.billingprojectserviceapi.md#configuration)

### Methods

* [billingProjectServiceGet](_api_.billingprojectserviceapi.md#billingprojectserviceget)
* [billingProjectServiceList](_api_.billingprojectserviceapi.md#billingprojectservicelist)

## Constructors

### constructor

\+ **new BillingProjectServiceApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [BillingProjectServiceApi](_api_.billingprojectserviceapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [BillingProjectServiceApi](_api_.billingprojectserviceapi.md)

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

### billingProjectServiceGet

▸ **billingProjectServiceGet**(`projectId`: string, `serviceId`: string, `options?`: any): Promise\<AxiosResponse\<[Service](../interfaces/_api_.service.md)>>

*Defined in api.ts:9577*

Returns a single service

**`summary`** Get billing/service

**`throws`** {RequiredError}

**`memberof`** BillingProjectServiceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`serviceId` | string | Service Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Service](../interfaces/_api_.service.md)>>

___

### billingProjectServiceList

▸ **billingProjectServiceList**(`projectId`: string, `kind?`: string, `name?`: string, `type?`: string, `options?`: any): Promise\<AxiosResponse\<[Service](../interfaces/_api_.service.md)[]>>

*Defined in api.ts:9592*

List service

**`summary`** List billing/service

**`throws`** {RequiredError}

**`memberof`** BillingProjectServiceApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`kind?` | string | - |
`name?` | string | - |
`type?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Service](../interfaces/_api_.service.md)[]>>
