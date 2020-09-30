**hyperone**

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
* [password](_configuration_.configuration.md#password)
* [username](_configuration_.configuration.md#username)

## Constructors

### constructor

\+ **new Configuration**(`param`: [ConfigurationParameters](../interfaces/_configuration_.configurationparameters.md)): [Configuration](_configuration_.configuration.md)

*Defined in configuration.ts:65*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`param` | [ConfigurationParameters](../interfaces/_configuration_.configurationparameters.md) | {} |

**Returns:** [Configuration](_configuration_.configuration.md)

## Properties

### accessToken

• `Optional` **accessToken**: string \| (name?: string,scopes?: string[]) => string

*Defined in configuration.ts:51*

parameter for oauth2 security

**`param`** security name

**`param`** oauth2 scope

**`memberof`** Configuration

___

### apiKey

• `Optional` **apiKey**: string \| Promise\<string> \| (name: string) => string \| (name: string) => Promise\<string>

*Defined in configuration.ts:30*

parameter for apiKey security

**`param`** security name

**`memberof`** Configuration

___

### baseOptions

• `Optional` **baseOptions**: any

*Defined in configuration.ts:65*

base options for axios calls

**`memberof`** Configuration

___

### basePath

• `Optional` **basePath**: string

*Defined in configuration.ts:58*

override base path

**`memberof`** Configuration

___

### password

• `Optional` **password**: string

*Defined in configuration.ts:44*

parameter for basic security

**`memberof`** Configuration

___

### username

• `Optional` **username**: string

*Defined in configuration.ts:37*

parameter for basic security

**`memberof`** Configuration
