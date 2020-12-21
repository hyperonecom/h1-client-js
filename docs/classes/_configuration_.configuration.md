**@hyperone/client**

> [README](../README.md) / [Globals](../globals.md) / ["configuration"](../modules/_configuration_.md) / Configuration

# Class: Configuration

## Hierarchy

* **Configuration**

## Index

### Constructors

* [constructor](_configuration_.configuration.md#constructor)

### Properties

* [accessToken](_configuration_.configuration.md#accesstoken)
* [apiKey](_configuration_.configuration.md#apikey)
* [baseOptions](_configuration_.configuration.md#baseoptions)
* [basePath](_configuration_.configuration.md#basepath)
* [formDataCtor](_configuration_.configuration.md#formdatactor)
* [password](_configuration_.configuration.md#password)
* [username](_configuration_.configuration.md#username)

### Methods

* [isJsonMime](_configuration_.configuration.md#isjsonmime)

## Constructors

### constructor

\+ **new Configuration**(`param`: [ConfigurationParameters](../interfaces/_configuration_.configurationparameters.md)): [Configuration](_configuration_.configuration.md)

*Defined in configuration.ts:75*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`param` | [ConfigurationParameters](../interfaces/_configuration_.configurationparameters.md) | {} |

**Returns:** [Configuration](_configuration_.configuration.md)

## Properties

### accessToken

• `Optional` **accessToken**: string \| Promise\<string> \| (name?: string,scopes?: string[]) => string \| (name?: string,scopes?: string[]) => Promise\<string>

*Defined in configuration.ts:53*

parameter for oauth2 security

**`param`** security name

**`param`** oauth2 scope

**`memberof`** Configuration

___

### apiKey

• `Optional` **apiKey**: string \| Promise\<string> \| (name: string) => string \| (name: string) => Promise\<string>

*Defined in configuration.ts:32*

parameter for apiKey security

**`param`** security name

**`memberof`** Configuration

___

### baseOptions

• `Optional` **baseOptions**: any

*Defined in configuration.ts:67*

base options for axios calls

**`memberof`** Configuration

___

### basePath

• `Optional` **basePath**: string

*Defined in configuration.ts:60*

override base path

**`memberof`** Configuration

___

### formDataCtor

• `Optional` **formDataCtor**: {}

*Defined in configuration.ts:75*

The FormData constructor that will be used to create multipart form data
requests. You can inject this here so that execution environments that
do not support the FormData class can still run the generated client.

___

### password

• `Optional` **password**: string

*Defined in configuration.ts:46*

parameter for basic security

**`memberof`** Configuration

___

### username

• `Optional` **username**: string

*Defined in configuration.ts:39*

parameter for basic security

**`memberof`** Configuration

## Methods

### isJsonMime

▸ **isJsonMime**(`mime`: string): boolean

*Defined in configuration.ts:97*

Check if the given MIME is a JSON MIME.
JSON MIME examples:
  application/json
  application/json; charset=UTF8
  APPLICATION/JSON
  application/vnd.company+json

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mime` | string | MIME (Multipurpose Internet Mail Extensions) |

**Returns:** boolean

True if the given MIME is JSON, false otherwise.
