# HyperoneClient.Invoice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalInfo** | **String** |  | [optional] 
**corrections** | **[String]** |  | [optional] 
**invoiceInfo** | **String** |  | [optional] 
**invoiceNo** | **String** |  | [optional] 
**issueDate** | **Date** |  | [optional] 
**payments** | **[String]** |  | [optional] 
**currency** | **String** |  | [optional] 
**seller** | [**InvoiceSeller**](InvoiceSeller.md) |  | [optional] 
**items** | [**[InvoiceItems]**](InvoiceItems.md) |  | [optional] 
**buyer** | [**InvoiceBuyer**](InvoiceBuyer.md) |  | [optional] 
**type** | **String** |  | [optional] [default to &#39;vat&#39;]
**vat** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**summary** | **String** |  | [optional] 
**project** | **String** |  | [optional] 
**organisation** | **String** |  | [optional] 
**duplicate** | [**InvoiceDuplicate**](InvoiceDuplicate.md) |  | [optional] 
**_array** | [**InvoiceArray**](InvoiceArray.md) |  | [optional] 



## Enum: TypeEnum


* `vat` (value: `"vat"`)

* `correction` (value: `"correction"`)




