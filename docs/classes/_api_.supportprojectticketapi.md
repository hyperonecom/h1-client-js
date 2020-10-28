**h1-client-ts**

> [README](../README.md) / [Globals](../globals.md) / ["api"](../modules/_api_.md) / SupportProjectTicketApi

# Class: SupportProjectTicketApi

SupportProjectTicketApi - object-oriented interface

**`export`** 

## Hierarchy

* [BaseAPI](_base_.baseapi.md)

  ↳ **SupportProjectTicketApi**

## Index

### Constructors

* [constructor](_api_.supportprojectticketapi.md#constructor)

### Properties

* [axios](_api_.supportprojectticketapi.md#axios)
* [basePath](_api_.supportprojectticketapi.md#basepath)
* [configuration](_api_.supportprojectticketapi.md#configuration)

### Methods

* [supportProjectTicketClose](_api_.supportprojectticketapi.md#supportprojectticketclose)
* [supportProjectTicketCreate](_api_.supportprojectticketapi.md#supportprojectticketcreate)
* [supportProjectTicketGet](_api_.supportprojectticketapi.md#supportprojectticketget)
* [supportProjectTicketList](_api_.supportprojectticketapi.md#supportprojectticketlist)
* [supportProjectTicketMessageCreate](_api_.supportprojectticketapi.md#supportprojectticketmessagecreate)
* [supportProjectTicketMessageGet](_api_.supportprojectticketapi.md#supportprojectticketmessageget)
* [supportProjectTicketMessageList](_api_.supportprojectticketapi.md#supportprojectticketmessagelist)

## Constructors

### constructor

\+ **new SupportProjectTicketApi**(`configuration?`: [Configuration](_configuration_.configuration.md), `basePath`: string, `axios`: AxiosInstance): [SupportProjectTicketApi](_api_.supportprojectticketapi.md)

*Inherited from [BaseAPI](_base_.baseapi.md).[constructor](_base_.baseapi.md#constructor)*

*Defined in base.ts:49*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`configuration?` | [Configuration](_configuration_.configuration.md) | - |
`basePath` | string | BASE_PATH |
`axios` | AxiosInstance | globalAxios |

**Returns:** [SupportProjectTicketApi](_api_.supportprojectticketapi.md)

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

### supportProjectTicketClose

▸ **supportProjectTicketClose**(`projectId`: string, `ticketId`: string, `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Ticket](../interfaces/_api_.ticket.md)>>

*Defined in api.ts:64392*

action close

**`summary`** Close support/ticket

**`throws`** {RequiredError}

**`memberof`** SupportProjectTicketApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`ticketId` | string | Ticket Id |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ticket](../interfaces/_api_.ticket.md)>>

___

### supportProjectTicketCreate

▸ **supportProjectTicketCreate**(`projectId`: string, `supportProjectTicketCreate`: [SupportProjectTicketCreate](../interfaces/_api_.supportprojectticketcreate.md), `xIdempotencyKey?`: string, `options?`: any): Promise\<AxiosResponse\<[Ticket](../interfaces/_api_.ticket.md)>>

*Defined in api.ts:64406*

Create ticket

**`summary`** Create support/ticket

**`throws`** {RequiredError}

**`memberof`** SupportProjectTicketApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`supportProjectTicketCreate` | [SupportProjectTicketCreate](../interfaces/_api_.supportprojectticketcreate.md) |  |
`xIdempotencyKey?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ticket](../interfaces/_api_.ticket.md)>>

___

### supportProjectTicketGet

▸ **supportProjectTicketGet**(`projectId`: string, `ticketId`: string, `options?`: any): Promise\<AxiosResponse\<[Ticket](../interfaces/_api_.ticket.md)>>

*Defined in api.ts:64419*

Returns a single ticket

**`summary`** Get support/ticket

**`throws`** {RequiredError}

**`memberof`** SupportProjectTicketApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`ticketId` | string | Ticket Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ticket](../interfaces/_api_.ticket.md)>>

___

### supportProjectTicketList

▸ **supportProjectTicketList**(`projectId`: string, `state?`: string, `options?`: any): Promise\<AxiosResponse\<[Ticket](../interfaces/_api_.ticket.md)[]>>

*Defined in api.ts:64432*

List ticket

**`summary`** List support/ticket

**`throws`** {RequiredError}

**`memberof`** SupportProjectTicketApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`state?` | string | - |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[Ticket](../interfaces/_api_.ticket.md)[]>>

___

### supportProjectTicketMessageCreate

▸ **supportProjectTicketMessageCreate**(`projectId`: string, `ticketId`: string, `supportMessage`: [SupportMessage](../interfaces/_api_.supportmessage.md), `options?`: any): Promise\<AxiosResponse\<[SupportMessage](../interfaces/_api_.supportmessage.md)>>

*Defined in api.ts:64446*

Create support/ticket.message

**`summary`** Create support/ticket.message

**`throws`** {RequiredError}

**`memberof`** SupportProjectTicketApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`ticketId` | string | Ticket Id |
`supportMessage` | [SupportMessage](../interfaces/_api_.supportmessage.md) |  |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[SupportMessage](../interfaces/_api_.supportmessage.md)>>

___

### supportProjectTicketMessageGet

▸ **supportProjectTicketMessageGet**(`projectId`: string, `ticketId`: string, `messageId`: string, `options?`: any): Promise\<AxiosResponse\<[SupportMessage](../interfaces/_api_.supportmessage.md)>>

*Defined in api.ts:64460*

Get support/ticket.message

**`summary`** Get support/ticket.message

**`throws`** {RequiredError}

**`memberof`** SupportProjectTicketApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`ticketId` | string | Ticket Id |
`messageId` | string | messageId |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[SupportMessage](../interfaces/_api_.supportmessage.md)>>

___

### supportProjectTicketMessageList

▸ **supportProjectTicketMessageList**(`projectId`: string, `ticketId`: string, `options?`: any): Promise\<AxiosResponse\<[SupportMessage](../interfaces/_api_.supportmessage.md)[]>>

*Defined in api.ts:64473*

List support/ticket.message

**`summary`** List support/ticket.message

**`throws`** {RequiredError}

**`memberof`** SupportProjectTicketApi

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`projectId` | string | Project Id |
`ticketId` | string | Ticket Id |
`options?` | any | - |

**Returns:** Promise\<AxiosResponse\<[SupportMessage](../interfaces/_api_.supportmessage.md)[]>>
