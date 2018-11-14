////////////////////////////////
///////    MAIN TESTS    ///////
////////////////////////////////

/* globals ownCloud, __karma__ */

describe("Currently testing apps management,", function() {
// CURRENT TIME
    var timeRightNow = new Date().getTime();

// LIBRARY INSTANCE
    var oc;

    var utf8 = window.utf8;

// TESTING CONFIGS
    var testApp = 'someAppName' + timeRightNow;
    var nonExistingApp = 'nonExistingApp' + timeRightNow;

    var config = __karma__.config.ownCloudConfig;
    var owncloudURL = config.owncloudURL;

    beforeEach(function() {
        oc = new ownCloud(owncloudURL);
    });

    it('checking method : getApps', function(done) {
        oc.apps.getApps().then(apps => {
            expect(apps).toBe(null);
            done();
        }).catch(error => {
            expect(error).toBe('Please specify an authorization first.');
            done();
        });
    });

    it('checking method : setAttribute', function(done) {
        var key = ['attr1', 'attr+plus space', '属性1'];
        var value = ['value1', 'value+plus space and/slash', '值对1'];
        var count = 0;

        for (var i = 0; i < key.length; i++) {
            oc.apps.setAttribute(testApp, key[i], value[i]).then(status => {
                expect(status).toBe(null);
                done();
            }).catch(error => {
                expect(error).toBe('Please specify an authorization first.');
                count++;
                if (count === key.length) {
                    done();
                }
            });
        }
    });

    it('checking method : getAttribute', function(done) {
        var key = ['attr1', 'attr+plus space', '属性1'];
        var count = 0;

        for (var i = 0; i < key.length; i++) {
            oc.apps.getAttribute(testApp, key[i]).then(data => {
                expect(data).toBe(null);
                done();
            }).catch(error => {
                expect(error).toBe('Please specify an authorization first.');
                count++;
                if (count === key.length) {
                    done();
                }
            });
        }
    });

    it('checking method : deleteAttribute', function(done) {
        var key = ['attr1', 'attr+plus space', '属性1'];
        var count = 0;

        for (var i = 0; i < key.length; i++) {
            oc.apps.deleteAttribute(testApp, key[i]).then(status => {
                expect(status).toBe(null);
                done();
            }).catch(error => {
                expect(error).toBe('Please specify an authorization first.');
                count++;
                if (count === key.length) {
                    done();
                }
            });
        }
    });

    it('checking method : enableApp when app exists', function(done) {
        oc.apps.enableApp('files').then(status => {
            expect(status).toBe(null);
            done();
        }).catch(error => {
            expect(error).toBe('Please specify an authorization first.');
            done();
        });
    });

    it('checking method : disableApp', function(done) {
        oc.apps.disableApp('files').then(status => {
            expect(status).toBe(null);
            done();
        }).catch(error => {
            expect(error).toBe('Please specify an authorization first.');
            done();
        });
    });
});

