**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / "common"

# Module: "common"

## Index

### Variables

* [DUMMY\_BASE\_URL](_common_.md#dummy_base_url)

### Functions

* [assertParamExists](_common_.md#assertparamexists)
* [createRequestFunction](_common_.md#createrequestfunction)
* [serializeDataIfNeeded](_common_.md#serializedataifneeded)
* [setApiKeyToObject](_common_.md#setapikeytoobject)
* [setBasicAuthToObject](_common_.md#setbasicauthtoobject)
* [setBearerAuthToObject](_common_.md#setbearerauthtoobject)
* [setOAuthToObject](_common_.md#setoauthtoobject)
* [setSearchParams](_common_.md#setsearchparams)
* [toPathString](_common_.md#topathstring)

## Variables

### DUMMY\_BASE\_URL

• `Const` **DUMMY\_BASE\_URL**: \"https://example.com\" = "https://example.com"

*Defined in common.ts:24*

**`export`** 

## Functions

### assertParamExists

▸ `Const`**assertParamExists**(`functionName`: string, `paramName`: string, `paramValue`: unknown): void

*Defined in common.ts:31*

**`throws`** {RequiredError}

**`export`** 

#### Parameters:

Name | Type |
------ | ------ |
`functionName` | string |
`paramName` | string |
`paramValue` | unknown |

**Returns:** void

___

### createRequestFunction

▸ `Const`**createRequestFunction**(`axiosArgs`: [RequestArgs](../interfaces/_base_.requestargs.md), `globalAxios`: AxiosInstance, `BASE_PATH`: string, `configuration?`: [Configuration](../classes/_configuration_.configuration.md)): (Anonymous function)

*Defined in common.ts:126*

**`export`** 

#### Parameters:

Name | Type |
------ | ------ |
`axiosArgs` | [RequestArgs](../interfaces/_base_.requestargs.md) |
`globalAxios` | AxiosInstance |
`BASE_PATH` | string |
`configuration?` | [Configuration](../classes/_configuration_.configuration.md) |

**Returns:** (Anonymous function)

___

### serializeDataIfNeeded

▸ `Const`**serializeDataIfNeeded**(`value`: any, `requestOptions`: any, `configuration?`: [Configuration](../classes/_configuration_.configuration.md)): any

*Defined in common.ts:104*

**`export`** 

#### Parameters:

Name | Type |
------ | ------ |
`value` | any |
`requestOptions` | any |
`configuration?` | [Configuration](../classes/_configuration_.configuration.md) |

**Returns:** any

___

### setApiKeyToObject

▸ `Const`**setApiKeyToObject**(`object`: any, `keyParamName`: string, `configuration?`: [Configuration](../classes/_configuration_.configuration.md)): Promise\<void>

*Defined in common.ts:41*

**`export`** 

#### Parameters:

Name | Type |
------ | ------ |
`object` | any |
`keyParamName` | string |
`configuration?` | [Configuration](../classes/_configuration_.configuration.md) |

**Returns:** Promise\<void>

___

### setBasicAuthToObject

▸ `Const`**setBasicAuthToObject**(`object`: any, `configuration?`: [Configuration](../classes/_configuration_.configuration.md)): void

*Defined in common.ts:54*

**`export`** 

#### Parameters:

Name | Type |
------ | ------ |
`object` | any |
`configuration?` | [Configuration](../classes/_configuration_.configuration.md) |

**Returns:** void

___

### setBearerAuthToObject

▸ `Const`**setBearerAuthToObject**(`object`: any, `configuration?`: [Configuration](../classes/_configuration_.configuration.md)): Promise\<void>

*Defined in common.ts:64*

**`export`** 

#### Parameters:

Name | Type |
------ | ------ |
`object` | any |
`configuration?` | [Configuration](../classes/_configuration_.configuration.md) |

**Returns:** Promise\<void>

___

### setOAuthToObject

▸ `Const`**setOAuthToObject**(`object`: any, `name`: string, `scopes`: string[], `configuration?`: [Configuration](../classes/_configuration_.configuration.md)): Promise\<void>

*Defined in common.ts:77*

**`export`** 

#### Parameters:

Name | Type |
------ | ------ |
`object` | any |
`name` | string |
`scopes` | string[] |
`configuration?` | [Configuration](../classes/_configuration_.configuration.md) |

**Returns:** Promise\<void>

___

### setSearchParams

▸ `Const`**setSearchParams**(`url`: URL, ...`objects`: any[]): void

*Defined in common.ts:90*

**`export`** 

#### Parameters:

Name | Type |
------ | ------ |
`url` | URL |
`...objects` | any[] |

**Returns:** void

___

### toPathString

▸ `Const`**toPathString**(`url`: URL): string

*Defined in common.ts:118*

**`export`** 

#### Parameters:

Name | Type |
------ | ------ |
`url` | URL |

**Returns:** string
