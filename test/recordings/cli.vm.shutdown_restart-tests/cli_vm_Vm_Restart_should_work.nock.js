// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website', 'website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '51e4bf034e2e84dbaf9e1a0d9819f55b',
  date: 'Tue, 24 Mar 2015 02:31:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices')
  .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/ClitestVm5480</Url><ServiceName>ClitestVm5480</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>Q2xpdGVzdFZtNTQ4MA==</Label><Status>Created</Status><DateCreated>2015-03-23T21:51:13Z</DateCreated><DateLastModified>2015-03-23T21:51:34Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>ClitestVm5480</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService><HostedService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/ClitestVm9187</Url><ServiceName>ClitestVm9187</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>Q2xpdGVzdFZtOTE4Nw==</Label><Status>Created</Status><DateCreated>2015-03-24T00:12:39Z</DateCreated><DateLastModified>2015-03-24T00:12:43Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>ClitestVm9187</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize><RoleSize>Standard_G1</RoleSize><RoleSize>Standard_G2</RoleSize><RoleSize>Standard_G3</RoleSize><RoleSize>Standard_G4</RoleSize><RoleSize>Standard_G5</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService><HostedService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/clitestvm9508</Url><ServiceName>clitestvm9508</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>Y2xpdGVzdHZtOTUwOA==</Label><Status>Created</Status><DateCreated>2015-03-24T02:27:32Z</DateCreated><DateLastModified>2015-03-24T02:27:57Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>clitestvm9508</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService><HostedService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/clitestvm9825</Url><ServiceName>clitestvm9825</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>Y2xpdGVzdHZtOTgyNQ==</Label><Status>Created</Status><DateCreated>2015-03-16T00:46:22Z</DateCreated><DateLastModified>2015-03-16T00:46:55Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>clitestvm9825</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService><HostedService><Url>https://management.core.windows.net/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/testwinvm125</Url><ServiceName>testwinvm125</ServiceName><HostedServiceProperties><Description i:nil=\"true\"/><Location>West US</Location><Label>dGVzdHdpbnZtMTI1</Label><Status>Created</Status><DateCreated>2015-03-15T03:33:58Z</DateCreated><DateLastModified>2015-03-16T01:33:02Z</DateLastModified><ExtendedProperties><ExtendedProperty><Name>ResourceGroup</Name><Value>testwinvm125</Value></ExtendedProperty><ExtendedProperty><Name>ResourceLocation</Name><Value>West US</Value></ExtendedProperty></ExtendedProperties></HostedServiceProperties><DefaultWinRmCertificateThumbprint>C51D3D3900DF86722DFAEDE322C535FE17830DF0</DefaultWinRmCertificateThumbprint><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities></HostedService></HostedServices>", { 'cache-control': 'no-cache',
  'content-length': '9576',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '2b26a888af478dd6a3601201f7c11a5e',
  date: 'Tue, 24 Mar 2015 02:31:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'af5d875c23cb8bd496ab8b0612b42636',
  date: 'Tue, 24 Mar 2015 02:31:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'ad504a2f7dfd858a88bffd7fbb722ae9',
  date: 'Tue, 24 Mar 2015 02:31:05 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'e7c36bb7941b8a26b488b93504c79ffd',
  date: 'Tue, 24 Mar 2015 02:31:05 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '931fa7c92bc58509a4e055add275aac2',
  date: 'Tue, 24 Mar 2015 02:31:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'eac0118928528976ab013533b9543f18',
  date: 'Tue, 24 Mar 2015 02:31:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/ClitestVm9187/deploymentslots/Production')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>No deployments were found.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '191',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '106620d5c93c885d953c6f7103df2b4f',
  date: 'Tue, 24 Mar 2015 02:31:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/clitestvm9508/deploymentslots/Production')
  .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestvm9508</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>82bed03fa3244fde90a4272abceb1e90</PrivateID><Status>Running</Status><Label>Y2xpdGVzdHZtOTUwOA==</Label><Url>http://clitestvm9508.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJjbGl0ZXN0dm05NTA4Ij4NCiAgICA8SW5zdGFuY2VzIGNvdW50PSIxIiAvPg0KICA8L1JvbGU+DQo8L1NlcnZpY2VDb25maWd1cmF0aW9uPg==</Configuration><RoleInstanceList><RoleInstance><RoleName>clitestvm9508</RoleName><InstanceName>clitestvm9508</InstanceName><InstanceStatus>RoleStateUnknown</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>100.112.208.181</IpAddress><PowerState>Starting</PowerState><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2015-03-24T02:30:33Z</Timestamp><GuestAgentVersion>Unknown</GuestAgentVersion><Status>NotReady</Status><FormattedMessage><Language>en-US</Language><Message>Status not available for role clitestvm9508.</Message></FormattedMessage></GuestAgentStatus></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>clitestvm9508</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>clitestvm9508-clitestvm9508-0-201503240227410830</DiskName><MediaLink>https://azsmnet4404.blob.core.windows.net/vhd-store/clitestvm9508-ebd7f68c364264ed.vhd</MediaLink><SourceImageName>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</SourceImageName><OS>Linux</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Small</RoleSize><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2015-03-24T02:27:38Z</CreatedTime><LastModifiedTime>2015-03-24T02:30:33Z</LastModifiedTime><ExtendedProperties/><VirtualIPs><VirtualIP><Address>104.42.6.112</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>clitestvm9508.d4.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", { 'cache-control': 'no-cache',
  'content-length': '2826',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '35b9b9e17b3784e3a51a557ab6ce714c',
  date: 'Tue, 24 Mar 2015 02:31:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/testwinvm125/deploymentslots/Production')
  .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>testwinvm125</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>c2dd7acbf07d4d1b895306f47570c7b7</PrivateID><Status>Running</Status><Label>dGVzdHdpbnZtMTI1</Label><Url>http://testwinvm125.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJ0ZXN0d2ludm0xMjUiPg0KICAgIDxJbnN0YW5jZXMgY291bnQ9IjEiIC8+DQogIDwvUm9sZT4NCjwvU2VydmljZUNvbmZpZ3VyYXRpb24+</Configuration><RoleInstanceList><RoleInstance><RoleName>testwinvm125</RoleName><InstanceName>testwinvm125</InstanceName><InstanceStatus>ReadyRole</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Medium</InstanceSize><InstanceStateDetails/><IpAddress>100.112.100.119</IpAddress><InstanceEndpoints><InstanceEndpoint><Name>PowerShell</Name><Vip>104.210.41.12</Vip><PublicPort>5986</PublicPort><LocalPort>5986</LocalPort><Protocol>tcp</Protocol></InstanceEndpoint><InstanceEndpoint><Name>Remote Desktop</Name><Vip>104.210.41.12</Vip><PublicPort>55820</PublicPort><LocalPort>3389</LocalPort><Protocol>tcp</Protocol></InstanceEndpoint></InstanceEndpoints><PowerState>Started</PowerState><HostName>testwinvm125</HostName><RemoteAccessCertificateThumbprint>6C41918C8EC2C62EA51E9DD8F7B277BD7EFD0497</RemoteAccessCertificateThumbprint><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2015-03-24T02:30:54Z</Timestamp><GuestAgentVersion>2.5.1198.702</GuestAgentVersion><Status>Ready</Status><FormattedMessage><Language>en-US</Language><Message>GuestAgent is running and accepting new configurations.</Message></FormattedMessage></GuestAgentStatus><ResourceExtensionStatusList><ResourceExtensionStatus><HandlerName>Chef.Bootstrap.WindowsAzure.ChefClient</HandlerName><Version>11.16.4.2</Version><Status>Ready</Status><ExtensionSettingStatus><Timestamp>2015-03-17T06:33:45Z</Timestamp><Name>Chef Extension Handler</Name><Operation>chef-client-run</Operation><Status>Success</Status><FormattedMessage><Language>en-US</Language><Message>chef-service enabled</Message></FormattedMessage></ExtensionSettingStatus></ResourceExtensionStatus><ResourceExtensionStatus><HandlerName>Microsoft.Compute.BGInfo</HandlerName><Version>1.1</Version><Status>Ready</Status><FormattedMessage><Language>en-US</Language><Message>Plugin enabled (name: Microsoft.Compute.BGInfo, version: 1.1).</Message></FormattedMessage></ResourceExtensionStatus></ResourceExtensionStatusList></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>testwinvm125</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><InputEndpoints><InputEndpoint><LocalPort>5986</LocalPort><Name>PowerShell</Name><Port>5986</Port><Protocol>tcp</Protocol><Vip>104.210.41.12</Vip><EnableDirectServerReturn>false</EnableDirectServerReturn></InputEndpoint><InputEndpoint><LocalPort>3389</LocalPort><Name>Remote Desktop</Name><Port>55820</Port><Protocol>tcp</Protocol><Vip>104.210.41.12</Vip><EnableDirectServerReturn>false</EnableDirectServerReturn></InputEndpoint></InputEndpoints><SubnetNames/></ConfigurationSet></ConfigurationSets><ResourceExtensionReferences><ResourceExtensionReference><ReferenceName>BGInfo</ReferenceName><Publisher>Microsoft.Compute</Publisher><Name>BGInfo</Name><Version>1.*</Version><ResourceExtensionParameterValues/><State>Enable</State></ResourceExtensionReference><ResourceExtensionReference><ReferenceName>ChefClient</ReferenceName><Publisher>Chef.Bootstrap.WindowsAzure</Publisher><Name>ChefClient</Name><Version>11.*</Version><ResourceExtensionParameterValues><ResourceExtensionParameterValue><Key>ChefClientPublicConfigParameter</Key><Value>eyJjbGllbnRfcmIiOiJsb2dfbGV2ZWwgICAgICAgIDppbmZvXHJcbmxvZ19sb2NhdGlvbiAgICAgXCJjOi9jaGVmL2xvZ3NcIlxyXG5jaGVmX3NlcnZlcl91cmwgIFwiaHR0cHM6Ly9hcGkub3BzY29kZS5jb20vb3JnYW5pemF0aW9ucy9vcmduYW1lXCJcclxudmFsaWRhdGlvbl9jbGllbnRfbmFtZSBcdFwib3JnbmFtZS12YWxpZGF0b3JcIiIsImF1dG9VcGRhdGVDbGllbnQiOiJmYWxzZSJ9</Value><Type>Public</Type></ResourceExtensionParameterValue></ResourceExtensionParameterValues><State>Enable</State></ResourceExtensionReference></ResourceExtensionReferences><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>testwinvm125-testwinvm125-0-201503150334060989</DiskName><MediaLink>https://portalvhds38v5hbggr1fmp.blob.core.windows.net/vhds/testwinvm125-testwinvm125-2015-03-15.vhd</MediaLink><SourceImageName>a699494373c04fc0bc8f2bb1389d6106__Windows-Server-2012-R2-201502.01-en.us-127GB.vhd</SourceImageName><OS>Windows</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Medium</RoleSize><DefaultWinRmCertificateThumbprint>C51D3D3900DF86722DFAEDE322C535FE17830DF0</DefaultWinRmCertificateThumbprint><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2015-03-15T03:34:03Z</CreatedTime><LastModifiedTime>2015-03-24T02:31:07Z</LastModifiedTime><ExtendedProperties/><VirtualIPs><VirtualIP><Address>104.210.41.12</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>testwinvm125ContractContract</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>testwinvm125.d6.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", { 'cache-control': 'no-cache',
  'content-length': '5741',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '21a4708e08078c5c831eb7a6e276b735',
  date: 'Tue, 24 Mar 2015 02:31:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/ClitestVm5480/deploymentslots/Production')
  .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>ClitestVm5480</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>3550b11fb72246539413ca59391f9d27</PrivateID><Status>Running</Status><Label>Q2xpdGVzdFZtNTQ4MA==</Label><Url>http://clitestvm5480.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJDbGl0ZXN0Vm0zMTYzIj4NCiAgICA8SW5zdGFuY2VzIGNvdW50PSIxIiAvPg0KICA8L1JvbGU+DQo8L1NlcnZpY2VDb25maWd1cmF0aW9uPg==</Configuration><RoleInstanceList><RoleInstance><RoleName>ClitestVm3163</RoleName><InstanceName>ClitestVm3163</InstanceName><InstanceStatus>ReadyRole</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>100.78.28.146</IpAddress><PowerState>Started</PowerState><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2015-03-24T02:31:08Z</Timestamp><GuestAgentVersion>Unknown</GuestAgentVersion><Status>NotReady</Status><FormattedMessage><Language>en-US</Language><Message>VM Agent is unresponsive. Status was last reported at 2015-03-23T21:51:22Z.</Message></FormattedMessage></GuestAgentStatus></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>ClitestVm3163</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks><DataVirtualHardDisk><HostCaching>None</HostCaching><DiskLabel>ClitestVm3163-ClitestVm3163-ClitestVm3163-0</DiskLabel><DiskName>ClitestVm3163-ClitestVm3163-0-201503232143260411</DiskName><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://azsmnet4404.blob.core.windows.net/disks/ClitestVm6830.vhd</MediaLink><IOType>Standard</IOType></DataVirtualHardDisk></DataVirtualHardDisks><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>ClitestVm3163-ClitestVm3163-0-201503232142330086</DiskName><MediaLink>https://azsmnet4404.blob.core.windows.net/vhd-store/ClitestVm3163-108ba576326971c3.vhd</MediaLink><SourceImageName>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</SourceImageName><OS>Linux</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Small</RoleSize><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2015-03-23T21:51:15Z</CreatedTime><LastModifiedTime>2015-03-24T02:31:07Z</LastModifiedTime><ExtendedProperties/><VirtualIPs><VirtualIP><Address>104.42.28.82</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>ClitestVm5480.d5.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", { 'cache-control': 'no-cache',
  'content-length': '3235',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '3b4c004aa88b82ec8c2908635ab9f357',
  date: 'Tue, 24 Mar 2015 02:31:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/hostedservices/clitestvm9825/deploymentslots/Production')
  .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestvm9825</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>97d97e0f9ce94e80956b30b5a5e395cf</PrivateID><Status>Running</Status><Label>Y2xpdGVzdHZtOTgyNQ==</Label><Url>http://clitestvm9825.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJjbGl0ZXN0dm05ODI1Ij4NCiAgICA8SW5zdGFuY2VzIGNvdW50PSIxIiAvPg0KICA8L1JvbGU+DQo8L1NlcnZpY2VDb25maWd1cmF0aW9uPg==</Configuration><RoleInstanceList><RoleInstance><RoleName>clitestvm9825</RoleName><InstanceName>clitestvm9825</InstanceName><InstanceStatus>ReadyRole</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>10.76.88.76</IpAddress><PowerState>Started</PowerState><GuestAgentStatus><ProtocolVersion>1.0</ProtocolVersion><Timestamp>2015-03-24T02:31:08Z</Timestamp><GuestAgentVersion>Unknown</GuestAgentVersion><Status>NotReady</Status><FormattedMessage><Language>en-US</Language><Message>VM Agent is unresponsive. Status was last reported at 2015-03-16T00:46:47Z.</Message></FormattedMessage></GuestAgentStatus></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>clitestvm9825</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>clitestvm9825-clitestvm9825-0-201503160046430691</DiskName><MediaLink>https://azsmnet4404.blob.core.windows.net/vhd-store/clitestvm9825-894abdbde5b93052.vhd</MediaLink><SourceImageName>0b11de9248dd4d87b18621318e037d37__RightImage-CentOS-6.2-x64-v5.8.8.1</SourceImageName><OS>Linux</OS><IOType>Standard</IOType></OSVirtualHardDisk><RoleSize>Small</RoleSize><ProvisionGuestAgent>true</ProvisionGuestAgent></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2015-03-16T00:46:29Z</CreatedTime><LastModifiedTime>2015-03-24T02:31:08Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2014-12-02T01:25:07Z</StartTime><EndTime>2014-12-04T01:25:07Z</EndTime><Status>PersistentVMUpdateScheduled</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>168.62.193.68</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs><InternalDnsSuffix>clitestvm9825.d9.internal.cloudapp.net</InternalDnsSuffix><LoadBalancers/></Deployment>", { 'cache-control': 'no-cache',
  'content-length': '3017',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.206 (rd_rdfe_stable.150320-1537) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '2f7bc88b35f689bfa92fdb8f3fa0b87d',
  date: 'Tue, 24 Mar 2015 02:31:08 GMT' });
 return result; }]];