// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestNsg1719\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1719\",\r\n      \"etag\": \"W/\\\"971bf1cf-6b82-4d19-9f9b-d315908c8ccc\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"defaultSecurityRules\": [\r\n          {\r\n            \"name\": \"AllowVnetInBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1719/defaultSecurityRules/AllowVnetInBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n              \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65000,\r\n              \"direction\": \"Inbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowAzureLoadBalancerInBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1719/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow inbound traffic from azure load balancer\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65001,\r\n              \"direction\": \"Inbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"DenyAllInBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1719/defaultSecurityRules/DenyAllInBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Deny all inbound traffic\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Deny\",\r\n              \"priority\": 65500,\r\n              \"direction\": \"Inbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowVnetOutBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1719/defaultSecurityRules/AllowVnetOutBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n              \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65000,\r\n              \"direction\": \"Outbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowInternetOutBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1719/defaultSecurityRules/AllowInternetOutBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"Internet\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65001,\r\n              \"direction\": \"Outbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"DenyAllOutBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1719/defaultSecurityRules/DenyAllOutBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Deny all outbound traffic\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Deny\",\r\n              \"priority\": 65500,\r\n              \"direction\": \"Outbound\"\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"location\": \"westus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5164',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4d86e412-ee66-469c-868a-8bb2730791be',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31964',
  'x-ms-correlation-request-id': '78418b9b-c881-42a7-aeb7-9100feb08503',
  'x-ms-routing-request-id': 'EASTASIA:20150427T104459Z:78418b9b-c881-42a7-aeb7-9100feb08503',
  date: 'Mon, 27 Apr 2015 10:44:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestNsg1719\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1719\",\r\n      \"etag\": \"W/\\\"971bf1cf-6b82-4d19-9f9b-d315908c8ccc\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"defaultSecurityRules\": [\r\n          {\r\n            \"name\": \"AllowVnetInBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1719/defaultSecurityRules/AllowVnetInBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n              \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65000,\r\n              \"direction\": \"Inbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowAzureLoadBalancerInBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1719/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow inbound traffic from azure load balancer\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65001,\r\n              \"direction\": \"Inbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"DenyAllInBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1719/defaultSecurityRules/DenyAllInBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Deny all inbound traffic\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Deny\",\r\n              \"priority\": 65500,\r\n              \"direction\": \"Inbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowVnetOutBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1719/defaultSecurityRules/AllowVnetOutBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n              \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65000,\r\n              \"direction\": \"Outbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"AllowInternetOutBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1719/defaultSecurityRules/AllowInternetOutBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"Internet\",\r\n              \"access\": \"Allow\",\r\n              \"priority\": 65001,\r\n              \"direction\": \"Outbound\"\r\n            }\r\n          },\r\n          {\r\n            \"name\": \"DenyAllOutBound\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateNsg505/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1719/defaultSecurityRules/DenyAllOutBound\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"description\": \"Deny all outbound traffic\",\r\n              \"protocol\": \"*\",\r\n              \"sourcePortRange\": \"*\",\r\n              \"destinationPortRange\": \"*\",\r\n              \"sourceAddressPrefix\": \"*\",\r\n              \"destinationAddressPrefix\": \"*\",\r\n              \"access\": \"Deny\",\r\n              \"priority\": 65500,\r\n              \"direction\": \"Outbound\"\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"location\": \"westus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5164',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4d86e412-ee66-469c-868a-8bb2730791be',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31964',
  'x-ms-correlation-request-id': '78418b9b-c881-42a7-aeb7-9100feb08503',
  'x-ms-routing-request-id': 'EASTASIA:20150427T104459Z:78418b9b-c881-42a7-aeb7-9100feb08503',
  date: 'Mon, 27 Apr 2015 10:44:59 GMT',
  connection: 'close' });
 return result; }]];