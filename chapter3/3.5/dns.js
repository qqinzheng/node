var dns = require('dns');

dns.lookup('http://localhost:8124',function(err,address,family) {
    console.log('ip地址' + address + '地址族' + family);
});



dns.lookup('www.google.com',function(err,address,family){
    console.log(address);
    console.log(family);
});

dns.reverse('204.155.146.122',function(err,domains){
    if (err) {
        console.log(err.code);
        return;
    }
    domains.forEach(function(domain){
    console.log(domain);
    });
});

dns.resolve('burningbird.net','NS',function(err,domains) {
    console.log(domains);
});