/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HyperoneClient);
  }
}(this, function(expect, HyperoneClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HyperoneClient.InvoiceItems();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InvoiceItems', function() {
    it('should create an instance of InvoiceItems', function() {
      // uncomment below and update the code to test InvoiceItems
      //var instane = new HyperoneClient.InvoiceItems();
      //expect(instance).to.be.a(HyperoneClient.InvoiceItems);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new HyperoneClient.InvoiceItems();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new HyperoneClient.InvoiceItems();
      //expect(instance).to.be();
    });

    it('should have the property netto (base name: "netto")', function() {
      // uncomment below and update the code to test the property netto
      //var instane = new HyperoneClient.InvoiceItems();
      //expect(instance).to.be();
    });

    it('should have the property brutto (base name: "brutto")', function() {
      // uncomment below and update the code to test the property brutto
      //var instane = new HyperoneClient.InvoiceItems();
      //expect(instance).to.be();
    });

    it('should have the property vatAmount (base name: "vatAmount")', function() {
      // uncomment below and update the code to test the property vatAmount
      //var instane = new HyperoneClient.InvoiceItems();
      //expect(instance).to.be();
    });

    it('should have the property vatRate (base name: "vatRate")', function() {
      // uncomment below and update the code to test the property vatRate
      //var instane = new HyperoneClient.InvoiceItems();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new HyperoneClient.InvoiceItems();
      //expect(instance).to.be();
    });

  });

}));
