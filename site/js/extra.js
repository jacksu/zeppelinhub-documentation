var pagenames = [
  "",
  "overview",
  "zeppelinhub_account",
  "zeppelin_integration",
  "sharing_notebooks",
  "copying_notebooks",
  "zeppelinhub_viewer",
  "zeppelin_multitenancy",
  "support"
  ];
  
for ( i = 0; i < pagenames.length; i++ ) {
  var originalUrl = 'http://nflabs.github.io/zeppelinhub-documentation/';
  var newUrl = 'http://help.zeppelinhub.com/';

  if ( window.location == originalUrl + pagenames[i]) {
    window.location.href = newUrl + pagenames[i];
  }
}

