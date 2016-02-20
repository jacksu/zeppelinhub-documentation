var original_url = 'http://nflabs.github.io/zeppelinhub-documentation/';
var new_url = 'http://help.zeppelinhub.com/';
/*
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
*/
//for ( i = 0; i < pagenames.length; i++ ) {
  if ( window.location == original_url ){ //+ pagenames[i]) {
    window.location.href = new_url ; //+ pagenames[i];
  }
//}

