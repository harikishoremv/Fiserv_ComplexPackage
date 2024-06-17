/*  ___ _                      
   |  _|_|___ ___ ___ _ _      
   |  _| |_ -| -_|  _| | |_    
   |_| |_|___|___|_|  \_/|_|   Web Services                                  JavaScript (JS) Table of Contents
   -----------------------------------------------------------------------------------------------------------
   Fiserv Construct 2.2.0 by JP Larson, Copyright 2020 Fiserv. All rights reserved..........................43 
   JSONP Construct 1.0.0 by Jesse Fowler, Copyright 2023 Fiserv. All rights reserved.......................132 
   Geocoder 1.0.0 by Jesse Fowler, Copyright 2023 Fiserv. All rights reserved..............................213 
   Fiserv Map 1.0.0 by Jesse Fowler, Copyright 2023 Fiserv. All rights reserved............................580 
   Location Finder 1.1.0 by Jesse Fowler, Copyright 2023 Fiserv. All rights reserved......................1245 
   Page Class 3.1.1 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved...........................1892 
   Randomizer 2.0.1 by Jesse Fowler, Copyright 2022 Fiserv. All rights reserved...........................1999 
   Scroll Trigger 4.2.1 by JP Larson, Copyright 2021 Fiserv. All rights reserved..........................2053 
   Get Queries 3.0.1 by JP Larson, Copyright 2020 Fiserv. All rights reserved.............................2283 
   Language Selector 1.4.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved.......................2332 
   Text Replace 2.0.0 by Jesse Fowler, Copyright 2021 Fiserv. All rights reserved.........................2557 
   Table Timeline 1.0.1 by Jesse Fowler, Copyright 2020 Fiserv. All rights reserved.......................2709 
   Rate Updater 2.0.0 by Jesse Fowler, Copyright 2019 Fiserv. All rights reserved.........................2714 
   CMS Include 3.3.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved.............................2879 
   Ajax Post 3.3.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved...............................3081 
   Ajax Form 4.3.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved...............................3283 
   Replace With Checkmarks 2.0.0 by Jesse Fowler, Copyright 2017 Fiserv. All rights reserved..............3294 
   Chart 1.1.1 by Jesse Fowler, Copyright 2020 Rami Yushuvaev & Jesse Fowler. MIT License.................3332 
   Product Comparison 1.2.0 by Jesse Fowler and Kristen Rogers, Copyright 2022 Fiserv. All rights reserved.3508 
   Validate Form 2.0.1 by JP Larson, Copyright 2021 Fiserv. All rights reserved...........................4188 
   Personalization 3.0.2 by Jesse Fowler, Copyright 2015 Fiserv. All rights reserved......................4608 
   Site Notice 5.5.0 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved..........................4965 
   Panel Navigation 6.2.0 by Paul Richards, Copyright 2016 Fiserv. All rights reserved....................5126 
   Product Selector 3.3.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved........................5275 
   Accessibility 1.1.2 by Paul Richards, Copyright 2021 Fiserv. All rights reserved.......................5291 
   Accessibility Mode 3.1.0 by Paul Richards, Copyright 2017 Fiserv. All rights reserved..................5383 
   App Banners 3.0.0 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved..........................5494 
   Captcha 4.2.0 by Jesse Fowler & JP Larson, Copyright 2021 Fiserv. All rights reserved..................5585 
   Expander 5.3.0 by Jesse Fowler & Kristen Rogers, Copyright 2015 Fiserv. All rights reserved............5832 
   Speedbump 2.2.0 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved............................6073 
   Toolbar Side 6.1.0 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved.........................6244 
   Contrast Class 2.3.0 by Jesse Fowler, Copyright 2019 Fiserv. All rights reserved.......................6328 
   Current Date 1.0.0 by Paul Richards, Copyright 2022 Fiserv. All rights reserved........................6590 
   Responsive Zoom 4.1.0 by Jesse Fowler, Copyright 2015 Fiserv. All rights reserved......................6675 
   Resize Class 2.0.0 by Jesse Fowler, Copyright 2019 Fiserv. All rights reserved.........................6878 
   ----------------------------------------------------------------------------------------------------------- */

// Fiserv Construct 2.2.0 by JP Larson, Copyright 2020 Fiserv. All rights reserved.
class Fiserv {
    constructor(options) {
        this.logTime("Init Start");
        this.packageName = options && options.packageName ? options.packageName : this.constructor.name;
        Fiserv.register(this);
    }
    static message(msg) {
        if (!msg || typeof msg !== "object") return new Error(`Invalid Message, Object expected.`);
        if (!this.registry) return new Error(`Missing Registry`);
        for (let key in this.registry) {
            const thisPackage = this.registry[key];
            for (let i = 0; i < thisPackage.length; i++) {
                const thisInstance = thisPackage[i];
                if (typeof thisInstance.onmessage === "function") thisInstance.onmessage(msg);
            }
        }
    }
    static register(call) {
        if (!call) return new Error(`Invalid Call`);
        if (!this.registry) this.registry = {};
        if (!this.registry[call.constructor.name]) this.registry[call.constructor.name] = [];
        if (this.registry[call.constructor.name].indexOf(call) !== -1) return call.logError(`An instance cannot be logged more than once.`);
        this.registry[call.constructor.name].push(call);
    }
    static get timeLog() {
        if (!this._timeLog) return;
        const report = this._timeLog;
        report.duration = report[report.length - 1].timeStamp - report[0].timeStamp;
        return report;
    }
    set nodeList(nList) {
        if (!nList || typeof nList !== "object") return this.logError(`Invalid "nodeList"`);
        this.addPointer(nList);
        this._nodeList = nList;
    }
    set options(options) {
        if (!options) return;
        if (typeof options !== "object") return this.logError(`Invalid "options"`);
        Object.assign(this, options);
    }
    set template(htmlString) {
        if (!htmlString) return this.logError(`Missing "template"`);
        this._template = this.parseHTML(htmlString);;
    }
    get nodeList() { return this._nodeList; }
    get template() { return this._template; }
    get timeLog() {
        const report = [];
        for (let i = 0; i < Fiserv._timeLog.length; i++) {
            const thisEntry = Fiserv._timeLog[i];
            if (thisEntry.instance === this) report.push(thisEntry);
        }
        if (!report.length) return this.logError(`No time logs for this instance.`);
        report.duration = report[report.length - 1].timeStamp - report[0].timeStamp;
        return report;
    }
    addPointer(nList) {
        if (!nList.length) nList[this.packageName] = this;
        for (let i = 0; i < nList.length; i++) {
            nList[i][this.packageName] = this;
        }
    }
    clean(args) { return this.logError(`This package is missing a custom clean function.`); }
    logTime(label) {
        if (!Fiserv.timeLog) Fiserv._timeLog = [];
        Fiserv._timeLog.push({
            "timeStamp": performance.now(),
            "instance": this,
            "label": label ? label : null
        });
    }
    logError(args, callback) {
        let error = new Error(args);
        if (callback && typeof callback === "function") error = new Error(callback(args));
        if (!Fiserv.errorLog) this.errorLog = [];
        this.errorLog.push(error);
        if (this.throwErrors) throw error;
        if (window.console && window.console.warn) console.warn(error.stack);
    }
    parseHTML(htmlString) {
        if (!htmlString || typeof htmlString !== "string") return this.logError(`Invalid HTML String`);
        const domNodes = new DOMParser().parseFromString(htmlString, "text/html").querySelectorAll("body > *");
        if (!domNodes) return this.logError(`Invalid HTML String`);
        this.addPointer(domNodes);
        return domNodes;
    }
}

// JSONP Construct 1.0.0 by Jesse Fowler, Copyright 2023 Fiserv. All rights reserved.
class JSONPConstruct extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.addedNodes = [];
        this.callback = "";
        this.data = "";
        this.debug = true;
        this.htmlClass = 'jsonp-construct-enabled';
        this.removeAfterLoading = true;
        this.url = "";

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.initJSONPConstruct = this.initJSONPConstruct.bind(this);
        return true;
    }

    clean() {
        for (let i = 0; i < this.addedNodes.length; i++) {
            this.addedNodes[i].remove();
        }
        this.data = "";
        document.getElementsByTagName('html')[0].classList.remove(this.htmlClass);
        return true;
    }

    init() {
        if (!this.initJSONPConstruct()) return false;
        this.bindCallbacks();
        this.logTime('bindCallbacks');
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    initJSONPConstruct() {
        if (this.url === "") { return false; }
        if (this.callback !== "") { 
            window[this.callback] = (function (data) {
                this.data = data;
            }).bind(this);
        }
        let scriptElement = document.createElement('script');
        scriptElement.src = this.url;
        scriptElement.addEventListener("load", (function (e) {
            e.preventDefault();
            Fiserv.message(this);
            if (this.removeAfterLoading) {
                this.clean();
            }
        }).bind(this), false);
        document.body.appendChild(scriptElement);
        this.addedNodes.push(scriptElement);
        document.getElementsByTagName('html')[0].classList.add(this.htmlClass);
        return true;
    }
}

//const jsonpConstruct = new JSONPConstruct({
//    "callback": "handleResponse",
//    "url": "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=4600%20Silver%20Hill%20Rd%2C%20Washington%2C%20DC%2020233&benchmark=Public_AR_Current&format=jsonp&callback=handleResponse"
//});

// Geocoder 1.0.0 by Jesse Fowler, Copyright 2023 Fiserv. All rights reserved.
class Geocoder extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.address = "";
        this.debug = false;
        this.historyStorageItems = [];
        this.htmlClass = 'geocoder-enabled';
        this.intervalProcess;
        this.latitude = "";
        this.longitude = "";
        this.sources = {
            "USCensus": {
                "urlTemplate": "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?benchmark=Public_AR_Current&format=jsonp",
                "queries": {
                    "callbackQuery": "callback",
                    "addressQuery": "address",
                },                
                "enabled": true,
                "responseType": "jsonp",
                "sampleResponse": {
                    "enabled": false,
                    "result": {
                        "input": {
                            "address": {
                                "address": "4600 Silver Hill Rd, Washington, DC 20233"
                            },
                            "benchmark": {
                                "isDefault": true,
                                "benchmarkDescription": "Public Address Ranges - Current Benchmark",
                                "id": "4",
                                "benchmarkName": "Public_AR_Current"
                            }
                        },
                        "addressMatches": [
                            {
                                "tigerLine": {
                                    "side": "L",
                                    "tigerLineId": "76355984"
                                },
                                "coordinates": {
                                    "x": -76.9274328556918,
                                    "y": 38.845989080537514
                                },
                                "addressComponents": {
                                    "zip": "20233",
                                    "streetName": "SILVER HILL",
                                    "preType": "",
                                    "city": "WASHINGTON",
                                    "preDirection": "",
                                    "suffixDirection": "",
                                    "fromAddress": "4600",
                                    "state": "DC",
                                    "suffixType": "RD",
                                    "toAddress": "4700",
                                    "suffixQualifier": "",
                                    "preQualifier": ""
                                },
                                "matchedAddress": "4600 SILVER HILL RD, WASHINGTON, DC, 20233"
                            }
                        ]
                    }
                }
            },
            "GoogleMaps": {
                "urlTemplate": "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBxrokNebb8hmsj1_2xWDCI3qJUDM_y8FU&address=",
                "enabled": true,
                "responseType": "json",
                "sampleResponse": {
                    "enabled": false,
                    "results": [
                        {
                            "address_components": [
                                {
                                    "long_name": "1600",
                                    "short_name": "1600",
                                    "types": [
                                        "street_number"
                                    ]
                                },
                                {
                                    "long_name": "Amphitheatre Parkway",
                                    "short_name": "Amphitheatre Pkwy",
                                    "types": [
                                        "route"
                                    ]
                                },
                                {
                                    "long_name": "Mountain View",
                                    "short_name": "Mountain View",
                                    "types": [
                                        "locality",
                                        "political"
                                    ]
                                },
                                {
                                    "long_name": "Santa Clara County",
                                    "short_name": "Santa Clara County",
                                    "types": [
                                        "administrative_area_level_2",
                                        "political"
                                    ]
                                },
                                {
                                    "long_name": "California",
                                    "short_name": "CA",
                                    "types": [
                                        "administrative_area_level_1",
                                        "political"
                                    ]
                                },
                                {
                                    "long_name": "United States",
                                    "short_name": "US",
                                    "types": [
                                        "country",
                                        "political"
                                    ]
                                },
                                {
                                    "long_name": "94043",
                                    "short_name": "94043",
                                    "types": [
                                        "postal_code"
                                    ]
                                }
                            ],
                            "formatted_address": "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA",
                            "geometry": {
                                "location": {
                                    "lat": 37.4224428,
                                    "lng": -122.0842467
                                },
                                "location_type": "ROOFTOP",
                                "viewport": {
                                    "northeast": {
                                        "lat": 37.4239627802915,
                                        "lng": -122.0829089197085
                                    },
                                    "southwest": {
                                        "lat": 37.4212648197085,
                                        "lng": -122.0856068802915
                                    }
                                }
                            },
                            "place_id": "ChIJeRpOeF67j4AR9ydy_PIzPuM",
                            "plus_code": {
                                "compound_code": "CWC8+X8 Mountain View, CA",
                                "global_code": "849VCWC8+X8"
                            },
                            "types": [
                                "street_address"
                            ]
                        }
                    ],
                    "status": "OK"
                }
            }
        };
        this.sourceQueue = [];
        this.sourceResponseTimeoutInMilliseconds = 2000;
        this.enableHistory = true;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.addToQueryHistory = this.addToQueryHistory.bind(this);
        this.getDataUSCensus = this.getDataUSCensus.bind(this);
        this.getDataGoogleMaps = this.getDataGoogleMaps.bind(this);
        this.getHistoryMatch = this.getHistoryMatch.bind(this);
        this.dequeueSource = this.dequeueSource.bind(this);
        this.queueSource = this.queueSource.bind(this);
        this.initGeocoder = this.initGeocoder.bind(this);
        return true;
    }

    clean() {
        this.latitude = "";
        this.longitude = "";
        //for (let i = 0; i < this.historyStorageItems.length; i++) {
        //    window.localStorage.removeItem(this.historyStorageItems[i]);
        //}
        document.getElementsByTagName('html')[0].classList.remove(this.htmlClass);
        return true;
    }

    init() {
        if (!this.initGeocoder()) return false;
        this.bindCallbacks();
        this.logTime('bindCallbacks');
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    addToQueryHistory(data, responseType) {
        data.address = this.address;
        data.responseType = responseType;
        window.localStorage.setItem(data.address, JSON.stringify(data));
        this.historyStorageItems.push(data.address);
    }

    getHistoryMatch() {
        if (!this.enableHistory) { return false; }
        let addressHistory = window.localStorage.getItem(this.address);
        if (addressHistory) {
            let addressHistoryData = JSON.parse(addressHistory);
            if (this.debug) {
                console.log(`Matching query found in query history: ${this.address}`);
                console.log(addressHistoryData.responseType);
            }
            if (addressHistoryData.responseType === "json") {
                this.getDataGoogleMaps(addressHistoryData, "json");
            }
            if (addressHistoryData.responseType === "jsonp") {
                this.getDataUSCensus(addressHistoryData, "jsonp");
            }
            return true;
        }
        return false;
    }

    getDataUSCensus(data, responseType, logQuery) {
        this.latitude = data.result.addressMatches[0].coordinates.y;
        this.longitude = data.result.addressMatches[0].coordinates.x;
        if (this.debug) {
            console.log(`Latitude: ${this.latitude}, Longitude: ${this.longitude}`);
        }
        if (logQuery) {
            this.addToQueryHistory(data, responseType);
        }
        this.completeCallback();
    }

    getDataGoogleMaps(data, responseType, logQuery) {
        if (data.status !== "OK") { return false; }
        this.latitude = data.results[0].geometry.location.lat;
        this.longitude = data.results[0].geometry.location.lng;
        if (this.debug) {
            console.log(`Latitude: ${this.latitude}, Longitude: ${this.longitude}`);
        }
        if (logQuery) {
            this.addToQueryHistory(data, responseType);
        }
        this.completeCallback();
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "JSONPConstruct":
                if (obj.data !== "") {
                    if (this.debug) {
                        console.log('Message from JSONPConstruct detected by Geocoder');
                    }
                    for (let source in this.sources) {
                        if (this.sources[source].jsonpConstruct === obj) {
                            this.getDataUSCensus(obj.data, "jsonp", true);
                        }
                    }
                }
                break;
        }
    }

    dequeueSource() {
        let source = this.sourceQueue.shift();
        if ((this.latitude !== "" && this.longitude !== "") || typeof source === "undefined") {
            clearInterval(this.intervalProcess);
            return true;
        }
        if (this.debug) {
            console.group(source);
        }

        if (this.sources[source].hasOwnProperty('responseType') && this.sources[source].responseType === "json") {
            let url = this.sources[source].urlTemplate + encodeURIComponent(this.address);
            if (this.sources[source].sampleResponse && this.sources[source].sampleResponse.enabled) {
                this.getDataGoogleMaps(this.sources[source].sampleResponse, "json", false);
            } else {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        this.getDataGoogleMaps(data, "json", true);
                    });
            }
        }
        if (this.sources[source].hasOwnProperty('responseType') && this.sources[source].responseType === "jsonp") {
            let callbackName = 'handleResponse' + Date.now();
            let url = this.sources[source].urlTemplate;
            if (this.sources[source].hasOwnProperty('queries')) {
                if (this.sources[source].queries.hasOwnProperty('callbackQuery')) {
                    url = url + '&' + encodeURIComponent(this.sources[source].queries.callbackQuery) + '=' + callbackName;
                }
                if (this.sources[source].queries.hasOwnProperty('addressQuery')) {
                    url = url + '&' + encodeURIComponent(this.sources[source].queries.addressQuery) + '=' + encodeURIComponent(this.address);
                }
            } else {
                url = url + encodeURIComponent(this.address);
            }
            if (this.sources[source].sampleResponse && this.sources[source].sampleResponse.enabled) {
                this.getDataUSCensus(this.sources[source].sampleResponse, "jsonp", false);
            } else {
                if (this.sources[source].hasOwnProperty('jsonpConstruct')) {
                    this.sources[source].jsonpConstruct.clean();
                    this.sources[source].jsonpConstruct.url = url;
                    this.sources[source].jsonpConstruct.init();
                } else {
                    this.sources[source].jsonpConstruct = new JSONPConstruct({
                        "callback": callbackName,
                        "url": url
                    });
                }
            }
        }
        clearInterval(this.intervalProcess);
        this.intervalProcess = setInterval((function () { this.dequeueSource(); }).bind(this), this.sourceResponseTimeoutInMilliseconds);
        if (this.debug) {
            console.groupEnd();
        }
    }

    queueSource(source) {
        if (this.sources[source].enabled) {
            this.sourceQueue.push(source);
        }
    }

    initGeocoder() {
        if (this.address === "") { return false; }
        this.sourceQueue = [];
        if (!this.getHistoryMatch()) {
            for (let source in this.sources) {
                this.queueSource(source);
            }
            if (this.debug) {
                console.log(this.sourceQueue);
            }
            if (this.sourceQueue.length > 0) {
                this.dequeueSource();
            }
        }
        document.getElementsByTagName('html')[0].classList.add(this.htmlClass);
        return true;
    }
}

//const geocoder = new Geocoder({
//    "address": "4600 Silver Hill Rd, Washington, DC 20233"
//});

// Fiserv Map 1.0.0 by Jesse Fowler, Copyright 2023 Fiserv. All rights reserved.
class FiservMap extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.addedNodes = [];
        this.mapNode = 'main .map';
        this.debug = false;
        this.htmlClass = 'map-enabled';
        this.intervalProcess;
        this.markers = [];
        this.ok = false;
        this.fiservMap = {
            "center": {
                "latitude": 42.4484873,
                "longitude": -94.8971377
            },
            "markers": [
                {
                    "title": "Fiserv Lincoln",
                    "coords": {
                        "latitude": 40.755510,
                        "longitude": -96.701880
                    },
                    "infoPanel": {
                        "content": "<strong>Fiserv</strong><br>1345 Old Cheney Rd<br>Lincoln, NE 68512<br>(402) 423-2682"
                    },
                    "color": "#2e8bc9"
                },
                {
                    "title": "Fiserv Brookfield",
                    "coords": {
                        "latitude": 43.033588,
                        "longitude": -88.140579
                    },
                    "infoPanel": {
                        "content": "<strong>Fiserv, Inc Headquarters</strong><br>255 Fiserv Dr<br>Brookfield, WI 53045<br>(800) 872-7882"
                    },
                    "color": "#ff6600"
                }
            ],
            "theme": "Light",
            "zoom": 7
        };
        this.sources = {
            "GoogleMaps": {
                "url": "https://maps.googleapis.com/maps/api/js?callback=initMap&v=weekly&key=AIzaSyDLbETevLKVBJvbtslEMjLz19CIIwtLUVo",
                "callback": "initMap",
                "enabled": true,
                "responseType": "jsonp",
                "themes": [
                    {
                        "title": "Default",
                        "styles": []
                    },
                    {
                        "title": "Dark",
                        "styles": [
                            { "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] },
                            { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] },
                            { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] },
                            {
                                "featureType": "administrative.locality",
                                "elementType": "labels.text.fill",
                                "stylers": [{ "color": "#d59563" }],
                            },
                            {
                                "featureType": "poi",
                                "elementType": "labels.text.fill",
                                "stylers": [{ "color": "#d59563" }],
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "geometry",
                                "stylers": [{ "color": "#263c3f" }],
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "labels.text.fill",
                                "stylers": [{ "color": "#6b9a76" }],
                            },
                            {
                                "featureType": "road",
                                "elementType": "geometry",
                                "stylers": [{ "color": "#38414e" }],
                            },
                            {
                                "featureType": "road",
                                "elementType": "geometry.stroke",
                                "stylers": [{ "color": "#212a37" }],
                            },
                            {
                                "featureType": "road",
                                "elementType": "labels.text.fill",
                                "stylers": [{ "color": "#9ca5b3" }],
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry",
                                "stylers": [{ "color": "#746855" }],
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.stroke",
                                "stylers": [{ "color": "#1f2835" }],
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "labels.text.fill",
                                "stylers": [{ "color": "#f3d19c" }],
                            },
                            {
                                "featureType": "transit",
                                "elementType": "geometry",
                                "stylers": [{ "color": "#2f3948" }],
                            },
                            {
                                "featureType": "transit.station",
                                "elementType": "labels.text.fill",
                                "stylers": [{ "color": "#d59563" }],
                            },
                            {
                                "featureType": "water",
                                "elementType": "geometry",
                                "stylers": [{ "color": "#17263c" }],
                            },
                            {
                                "featureType": "water",
                                "elementType": "labels.text.fill",
                                "stylers": [{ "color": "#515c6d" }],
                            },
                            {
                                "featureType": "water",
                                "elementType": "labels.text.stroke",
                                "stylers": [{ "color": "#17263c" }],
                            }
                        ]
                    },
                    {
                        "title": "Light",
                        "styles":[
                            {
                                "featureType": "administrative",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#686868"
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "color": "#f2f2f2"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "saturation": -100
                                    },
                                    {
                                        "lightness": 45
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "visibility": "simplified"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "lightness": "-22"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "saturation": "11"
                                    },
                                    {
                                        "lightness": "-51"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "labels.text",
                                "stylers": [
                                    {
                                        "saturation": "3"
                                    },
                                    {
                                        "lightness": "-56"
                                    },
                                    {
                                        "weight": "2.20"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "lightness": "-52"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "weight": "6.13"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "labels.icon",
                                "stylers": [
                                    {
                                        "lightness": "-10"
                                    },
                                    {
                                        "gamma": "0.94"
                                    },
                                    {
                                        "weight": "1.24"
                                    },
                                    {
                                        "saturation": "-100"
                                    },
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "lightness": "-16"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "saturation": "-41"
                                    },
                                    {
                                        "lightness": "-41"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "weight": "5.46"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "labels.icon",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "weight": "0.72"
                                    },
                                    {
                                        "lightness": "-16"
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "lightness": "-37"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "all",
                                "stylers": [
                                    {
                                        "color": "#a4ceea"
                                    },
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            "Leaflet": {
                "url": "https://unpkg.com/leaflet@1.9.3/dist/leaflet.js",
                "callback": "initMap",
                "enabled": true,
                "responseType": "jsonp",
                "icon": {
                    "iconUrl": 'https://whdev1.secureinternetbank.com/Code-Library/Fiserv-Map/Fiserv-Map-1.0.0/images/marker.svg',
                    "iconRetinaUrl": 'https://whdev1.secureinternetbank.com/Code-Library/Fiserv-Map/Fiserv-Map-1.0.0/images/marker.svg',
                    "iconSize": [32, 44],
                    "iconAnchor": [16, 44],
                    "popupAnchor": [0, -44],
                    "shadowUrl": 'https://whdev1.secureinternetbank.com/Code-Library/Fiserv-Map/Fiserv-Map-1.0.0/images/marker-shadow.svg',
                    "shadowRetinaUrl": 'https://whdev1.secureinternetbank.com/Code-Library/Fiserv-Map/Fiserv-Map-1.0.0/images/marker-shadow.svg',
                    "shadowSize": [32, 14],
                    "shadowAnchor": [16, 9]
                }
            }
        };
        this.sourceQueue = [];
        this.sourceResponseTimeoutInMilliseconds = 2000;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.buildGoogleMaps = this.buildGoogleMaps.bind(this);
        this.buildLeafletMap = this.buildLeafletMap.bind(this);
        this.buildMaps = this.buildMaps.bind(this);
        this.dequeueSource = this.dequeueSource.bind(this);
        this.queueSource = this.queueSource.bind(this);
        this.initMap = this.initMap.bind(this);
        return true;
    }

    clean() {
        for (let i = 0; i < this.addedNodes.length; i++) {
            this.addedNodes[i].remove();
        }
        if (this.source === "GoogleMaps") {
            for (let i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(null);
            }
        }
        this.markers = [];
        this.ok = false;
        document.getElementsByTagName('html')[0].classList.remove(this.htmlClass);
        return true;
    }

    init() {
        if (!this.initMap()) return false;
        this.bindCallbacks();
        this.logTime('bindCallbacks');
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    buildGoogleMaps() {
        let themeStyles;
        for (let i = 0; i < this.sources.GoogleMaps.themes.length; i++) {
            if (this.sources.GoogleMaps.themes[i].title === this.fiservMap.theme) {
                themeStyles = this.sources.GoogleMaps.themes[i].styles;
            }
        }
        if (!this.hasOwnProperty('mapConstruct')) {
            if (this.debug) { console.log('Created map.'); }
            this.mapConstruct = new google.maps.Map(document.querySelector(this.mapNode), {
                center: { lat: this.fiservMap.center.latitude, lng: this.fiservMap.center.longitude },
                zoom: this.fiservMap.zoom,
                styles: themeStyles,
            });
        } else {
            if (this.debug) { console.log('Using previous map.'); }
            // unlink all markers from previous map...
            for (let j = 0; j < this.fiservMap.markers.length; j++) {
                if (this.fiservMap.markers[j].hasOwnProperty('marker')) {
                    if (this.debug) { console.log(this.fiservMap.markers[j].marker.map + ' set to null'); }
                    this.fiservMap.markers[j].marker.map = null;
                }
            }
        }
        let map = this.mapConstruct;
        var bounds = new google.maps.LatLngBounds();
        for (let j = 0; j < this.fiservMap.markers.length; j++) {
            this.fiservMap.markers[j].infowindow = new google.maps.InfoWindow({
                content: this.fiservMap.markers[j].infoPanel.content,
                ariaLabel: this.fiservMap.markers[j].title,
            });
            let markerColor = '';
            if (this.fiservMap.markers[j].hasOwnProperty('color')) {
                markerColor = this.fiservMap.markers[j].color;
            }
            if (markerColor !== '') {
                const svgMarker = {
                    path: "M11,0.065c-4.371,0-7.927,3.673-7.927,8.187c0,4.782,6.292,11.965,7.925,13.748c1.63-1.798,7.929-9.052,7.929-13.748C18.927,3.737,15.371,0.065,11,0.065z M11.005,12.339c-2.187,0-3.967-1.831-3.967-4.083c0-2.251,1.779-4.083,3.967-4.083c2.187,0,3.967,1.832,3.967,4.083C14.972,10.507,13.192,12.339,11.005,12.339z",
                    fillColor: markerColor,
                    fillOpacity: 1,
                    strokeWeight: 0,
                    rotation: 0,
                    scale: 2,
                    anchor: new google.maps.Point(11, 22), // If the svg is 22 x 22 pixels then 22w/2=11 and 22h*1
                };
                this.fiservMap.markers[j].marker = new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    position: { lat: Number(this.fiservMap.markers[j].coords.latitude), lng: Number(this.fiservMap.markers[j].coords.longitude) },
                    icon: svgMarker,
                    map,
                    title: this.fiservMap.markers[j].title
                });
            } else {
                if (this.debug) { console.log('latitude: ' + this.fiservMap.markers[j].coords.latitude + ', longitude: ' + this.fiservMap.markers[j].coords.longitude); }
                this.fiservMap.markers[j].marker = new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    position: { lat: Number(this.fiservMap.markers[j].coords.latitude), lng: Number(this.fiservMap.markers[j].coords.longitude) },
                    map,
                    title: this.fiservMap.markers[j].title
                });
            }
            this.markers.push(this.fiservMap.markers[j].marker);
            let infowindow = this.fiservMap.markers[j].infowindow;
            this.fiservMap.markers[j].marker.addListener("click", () => {
                infowindow.open({
                    anchor: this.fiservMap.markers[j].marker,
                    map
                });
            });
            this.fiservMap.markers[j].marker.addListener("hover", () => {
                this.setAnimation(google.maps.Animation.BOUNCE);
            });
            bounds.extend(this.fiservMap.markers[j].marker.position);
        }

        google.maps.event.addListenerOnce(map, 'bounds_changed', function () { this.setZoom(Math.min(15, this.getZoom())); });

        map.fitBounds(bounds);
        let idleZoom = this.fiservMap.zoom;
        //var listener = google.maps.event.addListener(map, "idle", function () {
        //    map.setZoom(idleZoom);
        //    google.maps.event.removeListener(listener);
        //});
    }

    buildLeafletMap() {
        if (!this.hasOwnProperty('mapCSSLink')) {
            if (this.debug) { console.log('Created map CSS tag.'); }
            this.mapCSSLink = document.createElement("link");
            this.mapCSSLink.setAttribute("rel", "stylesheet");
            this.mapCSSLink.setAttribute("href", "https://unpkg.com/leaflet@1.9.3/dist/leaflet.css");
            this.mapCSSLink.setAttribute("integrity", "sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=");
            this.mapCSSLink.setAttribute("crossorigin", "");
            document.head.append(this.mapCSSLink);
        }

        if (!this.hasOwnProperty('mapConstruct')) {
            if (this.debug) { console.log('Created map.'); }
            this.mapConstruct = L.map(document.querySelector(this.mapNode)).setView([this.fiservMap.center.latitude, this.fiservMap.center.longitude], this.fiservMap.zoom);
        } else {
            if (this.debug) { console.log('Using previous map.'); }
            // unlink all markers from previous map...
            //for (let j = 0; j < this.fiservMap.markers.length; j++) {
            //    if (this.fiservMap.markers[j].hasOwnProperty('marker')) {
            //        if (this.debug) { console.log(this.fiservMap.markers[j].marker.map + ' set to null'); }
            //        this.fiservMap.markers[j].marker.map = null;
            //    }
            //}
        }
        let map = this.mapConstruct;

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        if (this.fiservMap.markers.length > 0) {
            //var bounds = new google.maps.LatLngBounds();
            let points = [];
            for (let j = 0; j < this.fiservMap.markers.length; j++) {
                let myIcon = L.icon(this.sources.Leaflet.icon);
                this.fiservMap.markers[j].marker = L.marker([Number(this.fiservMap.markers[j].coords.latitude), Number(this.fiservMap.markers[j].coords.longitude)], { icon: myIcon }).bindPopup(this.fiservMap.markers[j].infoPanel.content).addTo(map);
                this.markers.push(this.fiservMap.markers[j].marker);
                let point = [Number(this.fiservMap.markers[j].coords.latitude), Number(this.fiservMap.markers[j].coords.longitude)];
                points.push(point);
            }

            //google.maps.event.addListenerOnce(map, 'bounds_changed', function () { this.setZoom(Math.min(15, this.getZoom())); });
            let bounds = L.latLngBounds(points).pad(.5);
            map.fitBounds(bounds, true);
            map.setZoom(Math.min(15, map.getZoom()))
        }
    }

    buildMaps(source) {
        if (source === 'GoogleMaps') {
            this.buildGoogleMaps();
        }
        if (source === 'Leaflet') {
            this.buildLeafletMap();
        } 
        this.completeCallback();
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "JSONPConstruct":
                if (this.debug) {
                    console.log('Message from JSONPConstruct detected by Map');
                }
                for (let source in this.sources) {
                    if (this.sources[source].jsonpConstruct === obj) {
                        this.ok = true;
                        this.source = source;
                        this.buildMaps(source);
                    }
                }
                break;
        }
    }

    hasSourceBeenPreviouslyLoaded() {
        let maps = Fiserv.registry.FiservMap;
        for (let i = 0; i < maps.length; i++) {
            for (let source in maps[i].sources) {
                if (maps[i].sources[source].hasOwnProperty('jsonpConstruct')) {
                    return true;
                }
            }
        }
        return false;
    }

    dequeueSource() {
        let hasSourceBeenPreviouslyLoaded = this.hasSourceBeenPreviouslyLoaded();
        if (this.ok || this.sourceQueue === []) {
            clearInterval(this.intervalProcess);
            return true;
        }
        let source = this.sourceQueue.shift();
        if (this.debug) {
            console.group(source);
        }
        if (this.sources[source].responseType === "jsonp") {
            let url = this.sources[source].url;
            if (this.sources[source].hasOwnProperty('jsonpConstruct')) {
                //this.sources[source].jsonpConstruct.clean();
                //this.sources[source].jsonpConstruct.url = url;
                //this.sources[source].jsonpConstruct.init();
            } else {
                if (!hasSourceBeenPreviouslyLoaded) {
                    this.sources[source].jsonpConstruct = new JSONPConstruct({
                        "callback": this.sources[source].callback,
                        "url": url,
                        "removeAfterLoading": false
                    });
                }
            }
        }
        if (this.sources[source].responseType === "json") {
            console.log('responseType of json detected.');
            this.sources[source].jsonpConstruct = true;
            hasSourceBeenPreviouslyLoaded = true;
        }
        if (!hasSourceBeenPreviouslyLoaded) {
            this.intervalProcess = setInterval((function () { this.dequeueSource(); }).bind(this), this.sourceResponseTimeoutInMilliseconds);
        } else {
            if (this.debug) {
                console.log('This source has been previously loaded.');
            }
            this.ok = true;
            this.buildMaps(source);
        }
        if (this.debug) {
            console.groupEnd();
        }
    }

    queueSource(source) {
        if (this.sources[source].enabled) {
            this.sourceQueue.push(source);
        }
    }

    initMap() {
        if (this.debug) { console.log(this.fiservMap); }
        if (this.address === "") { return false; }
        this.sourceQueue = [];
        for (let source in this.sources) {
            this.queueSource(source);
        }
        if (this.debug) {
            console.log(this.sourceQueue);
        }
        if (this.sourceQueue.length > 0) {
            this.dequeueSource();
        }
        document.getElementsByTagName('html')[0].classList.add(this.htmlClass);
        return true;
    }
}

//const fiservMap = new FiservMap();

// Location Finder 1.1.0 by Jesse Fowler, Copyright 2023 Fiserv. All rights reserved.
class LocationFinder extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.nodeList = document.querySelectorAll('a[class*="Table-Location-Finder"]');
        this.addedNodes = [];
        this.address = "";
        this.dataTable = 'locations-finder-data-table';
        this.debug = false;
        this.directionOpenInNewWindow = false;
        this.enableDirections = true;
        this.enableMap = true;
        this.enableSearch = true;
        this.htmlClass = 'location-finder-enabled';
        this.intervalProcess;
        this.isSectionOfMain = false;
        this.latitude = "";
        this.languages = {
            'en': {
                loading: "Loading",
                searchInstructionsHeading: "Enter an address, zip code, or city and state",
                locationsHeading: "Locations",
                searchResultsHeading: "Search Results",
                locationDirectionsButton: "Get Directions",
                locationExpandedAreaToggle: "More Info",
                searchProximityHeading: "Proximity",
                searchProximityOptions: [
                    { proximityTitle: "Within 5 miles", proximity: 5 },
                    { proximityTitle: "Within 10 miles", proximity: 10 },
                    { proximityTitle: "Within 15 miles", proximity: 15 },
                    { proximityTitle: "Within 20 miles", proximity: 20 },
                    { proximityTitle: "Within 25 miles", proximity: 25, default: true },
                    { proximityTitle: "Within 50 miles", proximity: 50 },
                    { proximityTitle: "Within 100 miles", proximity: 100 },
                    { proximityTitle: "Within 250 miles", proximity: 250 },
                    { proximityTitle: "Within 500 miles", proximity: 500 },
                    { proximityTitle: "Unlimited", proximity: 10000 }
                ],
                searchPlaceholder: "Use my location",
                searchButton: "Search",
                searchViewHeading: "View Options",
                searchViews: [
                    {
                        viewTitle: "Branches",
                        type: "Bank"
                    },
                    {
                        viewTitle: "ATMs",
                        //searchViews: [
                        //    {
                        //        viewTitle: "Bank Name ITMs",
                        //        type: "ATM"
                        //    },
                        //    {
                        //        viewTitle: "Bank Name Deposit ATMs",
                        //        type: "ATM"
                        //    },
                        //    {
                        //        viewTitle: "Allpoint",
                        //        type: "ATM"
                        //    },
                        //    {
                        //        viewTitle: "Bank Name ATMs",
                        //        type: "ATM"
                        //    }
                        //],
                        type: "ATM"
                    }
                ],
                searchNoResultsFound: "No results where found.",
                geoLocationNotAvailable: "Geolocation is not supported by this browser."
            }
        };
        this.locations = {};
        this.locationsViewClass = "horizontal"; // "horizontal" | "condensed"
        this.locationsHaveImages = true;
        this.longitude = "";
        this.fiservMap = {
            "center": {
                "latitude": 42.4484873,
                "longitude": -94.8971377
            },
            "theme": "Light",
            "zoom": 7
        };
        this.includeContentFromClass = ".Location-Finder-Aside";
        this.missingLatLongQueries = [];
        this.openFirstResult = true;
        this.search = {};
        this.units = "miles";

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.buildMap = this.buildMap.bind(this);
        this.buildSearch = this.buildSearch.bind(this);
        this.addView = this.addView.bind(this);
        this.setActiveViews = this.setActiveViews.bind(this)
        this.addMarkerToMap = this.addMarkerToMap.bind(this)
        this.buildLocations = this.buildLocations.bind(this);
        this.buildIncludedContent = this.buildIncludedContent.bind(this);
        this.buildUI = this.buildUI.bind(this);
        this.searchLocations = this.searchLocations.bind(this);
        this.clean = this.clean.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.getDistance = this.getDistance.bind(this);
        this.locationUpdatePosition = this.locationUpdatePosition.bind(this);
        this.getLocationShowError = this.getLocationShowError.bind(this);
        this.getData = this.getData.bind(this);
        this.initLocationFinder = this.initLocationFinder.bind(this);
        this.setLanguage = this.setLanguage.bind(this);
        return true;
    }

    clean() {
        for (let i = 0; i < this.addedNodes.length; i++) {
            this.addedNodes[i].remove();
        }
        for (let i = 0; i < this.nodeList.length; i++) {
            this.nodeList[i].classList.remove('visuallyhidden');
        }
        let includedContent = document.querySelectorAll(this.includeContentFromClass)
        for (let i = 0; i < includedContent.length; i++) {
            includedContent[i].classList.remove('visuallyhidden');
        }
        delete this.locations.node;
        delete this.search.node;
        delete this.data;
        document.getElementsByTagName('html')[0].classList.remove(this.htmlClass);
        return true;
    }

    init() {
        if (!this.initLocationFinder()) return false;
        this.bindCallbacks();
        this.logTime('bindCallbacks');
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "CMSInclude":
                this.clean();
                this.initLocationFinder();
                break;
            case "Geocoder":
                if (obj.latitude !== "") {
                    if (obj.callingConstruct === this) {
                        let position = {
                            "coords": {}
                        };
                        position.coords.latitude = obj.latitude;
                        position.coords.longitude = obj.longitude;
                        this.locationUpdatePosition(position);
                        obj.latitude = "";
                        obj.longitude = "";
                        if (this.debug) {
                            console.log('Recieved latitude: ' + obj.latitude + ' and longitude: ' + obj.longitude + ' from Geocoder.');
                        }
                    }
                    for (let i = 0; i < this.missingLatLongQueries.length; i++) {
                        if (this.missingLatLongQueries[i].geocoderConstruct === obj) {
                            this.locations[this.missingLatLongQueries[i].location].latitude = obj.latitude;
                            this.locations[this.missingLatLongQueries[i].location].longitude = obj.longitude;
                            this.missingLatLongQueries.splice(i, 1);
                        }
                    }
                }
                break;
            case "FiservMap":
                if (obj.ok) {
                    if (this.debug) {
                        console.log('Message from Map detected by Location Finder');
                    }
                }
                break;
            case "LanguageSelector":
                this.clean();
                this.initLocationFinder();
                break;
        }
    }

    setLanguage() {
        for (let language in this.languages) {
            if (language.toLowerCase() === document.documentElement.lang.toLowerCase()) { this.language = document.documentElement.lang.toLowerCase(); }
        }
        if (!this.language) { this.language = 'en'; };
    }

    locationUpdatePosition(position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        for (let i = 0; i < this.locations.length; i++) {
            this.locations[i].distance = this.getDistance(position.coords.latitude, position.coords.longitude, this.locations[i].latitude, this.locations[i].longitude);
        }
        this.buildLocations();
    }

    getDistance(lat1, lon1, lat2, lon2) {
        if (lat1 === "" || lon1 === "" || lat2 === "" || lon2 === "") { return 40075; }
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);
        var dLon = this.deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    getLocationShowError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.log("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.log("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.log("An unknown error occurred.");
                break;
        }
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(((position) => {
                this.locationUpdatePosition(position);
            }).bind(this), this.getLocationShowError);
            return true;
        }
        console.log(this.languages[this.language].geoLocationNotAvailable);
        return false;
    }

    buildMap() {
        if (!this.enableMap) { return false; }
        if (!this.fiservMap.hasOwnProperty('node')) {
            this.fiservMap.node = document.createElement('section');
            this.fiservMap.node.classList.add('location-finder-map');
            this.fiservMap.node.classList.add('map');
            //this.fiservMap.node.innerHTML = this.languages[this.language].loading;
            if (this.isSectionOfMain) {
                this.locationFinderElement.querySelector('td').prepend(this.fiservMap.node);
            } else {
                this.locationFinderElement.prepend(this.fiservMap.node);
            }
        }
        if (this.isSectionOfMain) {
            this.locationFinderElement.classList.add('section-of-main');
        }
        return true;
    }

    buildSearch() {
        if (!this.search.hasOwnProperty('node')) {
            this.search.node = document.createElement('form');
            this.search.node.classList.add('location-finder-search');
            this.search.node.classList.add('fiserv-form');
            let searchSection = document.createElement('section');
            this.search.node.append(searchSection);
            searchSection.innerHTML = `<p>${this.languages[this.language].searchInstructionsHeading}</p><label><input name="location-search" placeholder="${this.languages[this.language].searchPlaceholder}"><span class="visuallyhidden">${this.languages[this.language].searchInstructionsHeading}</span></label>`;
            this.search.input = this.search.node.querySelector('input')
            let proximitySection = document.createElement('label');
            proximitySection.classList.add('two-thirds');
            this.search.node.proximity = document.createElement('select');
            this.search.node.proximity.name = "location-proximity";
            let options = this.languages[this.language].searchProximityOptions;
            for (let i = 0; i < options.length; i++) {
                let optionOption = document.createElement('option');
                optionOption.innerHTML = this.languages[this.language].searchProximityOptions[i].proximityTitle;
                optionOption.value = this.languages[this.language].searchProximityOptions[i].proximity;
                if (this.languages[this.language].searchProximityOptions[i].hasOwnProperty("default")) {
                    optionOption.defaultSelected = true;
                    let proximityAdjustedDistance;
                    if (this.units === "miles") {
                        proximityAdjustedDistance = optionOption.value * 1.60934;
                    } else {
                        proximityAdjustedDistance = optionOption.value;
                    }
                    this.proximity = proximityAdjustedDistance;
                }
                this.search.node.proximity.append(optionOption);
            }
            proximitySection.append(this.search.node.proximity);
            let proximitySpan = document.createElement('span');
            proximitySpan.innerHTML = this.languages[this.language].searchProximityHeading;
            proximitySection.append(proximitySpan);
            searchSection.append(proximitySection);

            let searchButton = document.createElement('button');
            searchButton.classList.add('location-finder-search-button');
            searchButton.type = "submit";
            searchButton.classList.add('Button1');
            searchButton.classList.add('thirds');
            searchButton.innerHTML = this.languages[this.language].searchButton;
            searchSection.append(searchButton);

            this.viewFieldset = document.createElement('fieldset');
            this.viewFieldset.classList.add('location-finder-views');
            let viewFieldsetLegend = document.createElement('legend');
            viewFieldsetLegend.classList.add('visuallyhidden');
            viewFieldsetLegend.innerHTML = this.languages[this.language].searchViewHeading;
            this.viewFieldset.append(viewFieldsetLegend);
            let views = this.languages[this.language];
            this.addView(views, this.viewFieldset);
            searchSection.append(this.viewFieldset);
            this.search.node.append(searchSection);
            this.search.node.addEventListener('submit', (function (e) {
                e.preventDefault();
                this.searchLocations(this.search.input.value);
            }).bind(this));
            if (this.isSectionOfMain) {
                this.locationFinderElement.querySelector('td').append(this.search.node);
            } else {
                this.locationFinderElement.append(this.search.node);
            }
            if (this.address !== '') {
                this.searchLocations(this.address);
            }
        }
        return true;
    }

    addView(obj, targetElement, parent) {
        if (!obj.hasOwnProperty('searchViews')) { return false; }
        let newParent = "";
        if (parent && parent.hasOwnProperty('viewTitle')) {
            newParent = obj.viewTitle;
        }
        for (let i = 0; i < obj.searchViews.length; i++) {
            let viewLabel = document.createElement('label');
            let viewInput = document.createElement('input');
            viewInput.type = "checkbox";
            viewInput.defaultChecked = true;
            viewInput.value = obj.searchViews[i].type;
            viewInput.name = obj.searchViews[i].viewTitle.toLowerCase().replace(/\s/g, "-");
            viewLabel.append(viewInput);
            let viewLabelSpan = document.createElement('span');
            viewLabelSpan.innerHTML = obj.searchViews[i].viewTitle;
            if (parent) {
                viewLabel.setAttribute("data-parent", newParent);
            }
            viewLabel.append(viewLabelSpan);
            targetElement.append(viewLabel);
            this.addView(obj.searchViews[i], targetElement, newParent);
        }
    }

    setActiveViews() {
        this.activeViews = {};
        let views = this.viewFieldset.querySelectorAll('label > input');
        for (let i = 0; i < views.length; i++) {
            if (views[i].checked) {
                this.activeViews[views[i].value] = true;
            }
        }
    }

    addMarkerToMap(location) {
        if (!this.fiservMap.hasOwnProperty('markers')) {
            this.fiservMap.markers = [];
        }
        let newMarker = {};
        if (location.hasOwnProperty('color')) {
            newMarker.title = location.name;
        }
        newMarker.coords = {};
        if (location.hasOwnProperty('latitude') && location.latitude !== "") {
            newMarker.coords.latitude = location.latitude;
        } else {
            return false;
        }
        if (location.hasOwnProperty('longitude') && location.longitude !== "") {
            newMarker.coords.longitude = location.longitude;
        } else {
            return false;
        }
        newMarker.infoPanel = {};
        if (location.hasOwnProperty('name')) {
            newMarker.infoPanel.content = `<strong>${location.name}</strong><br>${location.streetAddress}<br>${location.addressLocality}, ${location.addressRegion} ${location.postalCode}<br>${location.telephone}`;
        }
        if (location.hasOwnProperty('color')) {
            newMarker.color = location.color;
        }
        this.fiservMap.markers.push(newMarker);
    }

    buildLocations() {
        if (this.hasOwnProperty('fiservMap') && this.fiservMap.hasOwnProperty('markers')) {
            this.fiservMap.markers = [];
        }
        if (this.locations.hasOwnProperty('node')) {
            this.locations.node.remove();
        }
        this.locations.node = document.createElement('section');
        this.locations.node.classList.add('location-finder-locations');
        if (this.enableSearch) {
            this.locations.node.innerHTML = `<p>${this.languages[this.language].searchResultsHeading}</p>`;
        } else {
            this.locations.node.innerHTML = `<p>${this.languages[this.language].locationsHeading}</p>`;
        }
        this.locations.node.locationsSection = document.createElement('section');
        this.locations.node.locationsSection.classList.add('locations');
        if (this.locationsHaveImages) {
            this.locations.node.locationsSection.classList.add('locations-have-images');
        }
        if (this.locations.length > 0) {
            this.setActiveViews();
            this.locations.sort((a, b) => a.distance - b.distance)
            for (let i = 0; i < this.locations.length; i++) {
                if (this.locations[i].hasOwnProperty('distance') && this.locations[i].distance >= this.proximity) { continue; }
                if (!this.activeViews.hasOwnProperty(this.locations[i].locationType)) { continue; }
                this.addMarkerToMap(this.locations[i]);
                let location = document.createElement('article');
                if (this.openFirstResult && i === 0) {
                    location.classList.add('open');
                }
                if (this.locationsHaveImages) {
                    location.innerHTML = this.locations[i].image;
                }
                let content = document.createElement('div');
                content.classList.add('content');
                let telephone = this.locations[i].telephone;
                content.innerHTML = `<p><strong>${this.locations[i].name}</strong><br>${this.locations[i].streetAddress}<br>${this.locations[i].addressLocality}, ${this.locations[i].addressRegion} ${this.locations[i].postalCode}<br>${telephone}</p>`;
                location.append(content);
                let locationDistance = document.createElement('div');
                locationDistance.classList.add('location-distance');
                if (this.locations[i].hasOwnProperty('distance')) {
                    let roundedDistance = 0;
                    if (this.units === "miles") {
                        roundedDistance = Math.floor((this.locations[i].distance * 0.621371) * 100) / 100;
                    } else {
                        roundedDistance = Math.floor(this.locations[i].distance * 100) / 100;
                    }
                    locationDistance.innerHTML = `<p>${roundedDistance} ${this.units}</p>`;
                }
                location.append(locationDistance);
                if (this.locations[i].hasOwnProperty('description') && this.locations[i].description !== '' || this.enableDirections) {
                    let locationExpandedArea = document.createElement('section');
                    locationExpandedArea.classList.add('expanded-area');
                    let locationExpandedAreaToggle = document.createElement('a');
                    locationExpandedAreaToggle.classList.add('expanded-area-toggle');
                    locationExpandedAreaToggle.innerHTML = `<span class="visuallyhidden">${this.languages[this.language].locationExpandedAreaToggle}</span>`;
                    locationExpandedAreaToggle.addEventListener('click', function (e) {
                        e.target.parentNode.classList.toggle('open');
                    });
                    location.append(locationExpandedAreaToggle);
                    let locationDescription = document.createElement('section');
                    locationDescription.classList.add('location-description');
                    locationDescription.innerHTML = this.locations[i].description;
                    locationExpandedArea.append(locationDescription);
                    if (this.enableDirections) {
                        let locationDirectionsButton = document.createElement('a');
                        let destinationAddress = encodeURIComponent(this.locations[i].streetAddress + ", " + this.locations[i].addressLocality + ", " + this.locations[i].addressRegion + " " + this.locations[i].postalCode);
                        let staticAddress = encodeURIComponent(this.address);
                        locationDirectionsButton.href = `https://maps.google.com/maps?saddr=${staticAddress}&daddr=${destinationAddress}`;
                        locationDirectionsButton.classList.add('Button1');
                        if (this.directionOpenInNewWindow) {
                            locationDirectionsButton.target = "_blank";
                        }
                        locationDirectionsButton.innerHTML = this.languages[this.language].locationDirectionsButton;
                        if (locationDescription.querySelectorAll('p:last-of-type')[0]) {
                            locationDescription.querySelectorAll('p:last-of-type')[0].append(locationDirectionsButton);
                        } else {
                            let locationDirectionsButtonParagraph = document.createElement('p');
                            locationDirectionsButtonParagraph.append(locationDirectionsButton);
                            locationExpandedArea.append(locationDirectionsButtonParagraph);
                        }
                    }
                    location.append(locationExpandedArea);
                }
                this.locations.node.locationsSection.append(location);
            }
            let mapObj = this.fiservMap;
            if (mapObj.hasOwnProperty('node')) {
                delete mapObj.node;
            }
            if (this.hasOwnProperty('fiservMapConstruct')) {
                if (this.debug) { console.log('Existing map detected.'); }
                this.fiservMapConstruct.clean();
                this.fiservMapConstruct.fiservMap = mapObj;
                this.fiservMapConstruct.init();
            } else {
                this.fiservMapConstruct = new FiservMap({
                    "fiservMap": mapObj
                });
            }
        } else {
            let locationNoResultsFoundParagraph = document.createElement('p');
            locationNoResultsFoundParagraph.innerHTML = this.languages[this.language].searchNoResultsFound;
            this.locations.node.locationsSection.append(locationNoResultsFoundParagraph);
        }
        this.locations.node.append(this.locations.node.locationsSection);
        if (this.isSectionOfMain) {
            this.locationFinderElement.querySelector('td').append(this.locations.node);
        } else {
            this.locationFinderElement.append(this.locations.node);
        }
        return true;
    }

    buildIncludedContent() {
        let includedContent = document.querySelectorAll(this.includeContentFromClass);
        if (this.hasOwnProperty('includedContentSection')) {
            this.includedContentSection.innerHTML = "";
        } else {
            this.includedContentSection = document.createElement('section');
        }
        this.includedContentSection.classList.add('included-content');
        if (includedContent.length > 0) {
            for (let i = 0; i < includedContent.length; i++) {
                let clone = includedContent[i].cloneNode(true);
                this.addedNodes.push(clone);
                this.includedContentSection.append(clone);
                includedContent[i].classList.add('visuallyhidden');
            }
        }
        if (this.isSectionOfMain) {
            this.locationFinderElement.querySelector('td').append(this.includedContentSection);
        } else {
            this.locationFinderElement.append(this.includedContentSection);
        }
    }

    buildUI() {
        for (let i = 0; i < this.nodeList.length; i++) {
            this.nodeList[i].classList.add('visuallyhidden');
            if (this.nodeList[i].parentElement.nodeName === 'MAIN') {
                this.isSectionOfMain = true;
            }
            if (this.addedNodes.length === 0) {
                if (this.isSectionOfMain) {
                    this.locationFinderElement = document.createElement('table');
                    this.locationFinderElement.innerHTML = `<tbody><tr><td></td></tr></tbody>`;
                    this.locationFinderElement.classList.add('Subsection-Table-Location-Finder');
                    this.locationFinderElement.classList.add('location-finder');
                } else {
                    this.locationFinderElement = document.createElement('div');
                    this.locationFinderElement.classList.add('location-finder');
                }
                this.buildIncludedContent();
                this.buildMap();
                this.buildSearch();
                this.buildLocations();
                this.locationFinderElement.classList.add(this.locationsViewClass);
                this.nodeList[i].after(this.locationFinderElement);
                this.addedNodes.push(this.locationFinderElement);
            }
        }
        return true;
    }

    searchLocations(address) {
        this.address = address;
        let proximityAdjustedDistance;
        if (this.units === "miles") {
            proximityAdjustedDistance = this.search.node.proximity.value * 1.60934;
        } else {
            proximityAdjustedDistance = this.search.node.proximity.value;
        }
        this.proximity = proximityAdjustedDistance;
        if (!address) {
            this.getLocation();
        } else {
            if (this.hasOwnProperty('geocoderConstruct')) {
                this.geocoderConstruct.clean();
                this.geocoderConstruct.address = this.address;
                this.geocoderConstruct.init();
            } else {
                this.geocoderConstruct = new Geocoder({
                    "address": this.address,
                    "callingConstruct": this
                });
            }
        }
    }

    getData() {
        let dataTableElement = document.getElementById(this.dataTable);
        if (!dataTableElement) { return false; }
        this.response = jQuery(dataTableElement).tableToJSON();
        this.data = this.response[0].tableToJSON.parsed.data;
        for (let location in this.data) {
            for (let key in this.data[location]) {
                if (this.data[location][key] === "&nbsp;") {
                    this.data[location][key] = '';
                    if (this.debug) {
                        console.log('%cNonbreaking space replaced', 'color: red;');
                    }
                }
                if ((key === "latitude" && this.data[location][key] === "") || (key === "longitude" && this.data[location][key] === "")) {
                    console.log('%cMissing latitude or longitude from ' + this.data[location].streetAddress, 'color: red;');
                    let address = this.data[location].streetAddress + ", " + this.data[location].addressLocality + ", " + this.data[location].addressRegion + " " + this.data[location].postalCode;
                    if (this.debug) {
                        console.log('%cRequested geocoder for ' + address + " update the table with Fiserv.registry.Geocoder[0] lookups", 'color: red;');
                        let missingLatLongQuery = {};
                        missingLatLongQuery.geocoderConstruct = new Geocoder({
                            "address": address
                        });
                        missingLatLongQuery.location = location;
                        missingLatLongQuery.key = key;
                        this.missingLatLongQueries.push(missingLatLongQuery);
                    }
                }
            }
        }
        this.locations = this.data;
        return true;
    }

    initLocationFinder() {
        this.setLanguage();
        this.getData();
        this.buildUI();
        document.getElementsByTagName('html')[0].classList.add(this.htmlClass);
        return true;
    }
}

// Page Class 3.1.1 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved.
class PageClass extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.querySelectorAll = 'body';
        this.classedNodes = [];
        this.debug = false;
        this.pageClasses = [];
        this.pageRegex = /[\_\-\w]+/gi;
        this.url = window.location.pathname;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.getPageClasses = this.getPageClasses.bind(this);
        this.initPageClass = this.initPageClass.bind(this);
        return true;
    }

    clean() {
        for (let i = 0; i < this.classedNodes.length; i++) {
            for (let j = 0; j < this.pageClasses.length; j++) {
                this.classedNodes[i].classList.remove(this.pageClasses[j].toLowerCase());
            }
        }
        return true;
    }

    init() {
        if (!this.initPageClass()) return false;
        this.bindCallbacks();
        this.logTime('bindCallbacks');
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    getPageClasses(url, regex) {
        if (/\/customContent.aspx/i.test(url)) {
            if (this.debug) {
                console.log('Custom content page detected.');
            }
            let params = (new URL(document.location.href)).searchParams;
            let querylink = "";
            params.forEach((value, key) => {
                if (key.toLowerCase() === "name") {
                    querylink = value.replace(/\s/g, "-");
                }
            });
            this.pageClasses = querylink.match(regex);
        } else {
            this.pageClasses = url.match(regex);
        }
        if (this.debug) {
            console.groupCollapsed('getPageClasses');
            console.info('Initial class names: ' + this.pageClasses);
        }
        if (!this.pageClasses || this.pageClasses.length < 1) { return false; }
        let pageClassesFiltered = this.pageClasses.filter(a => !a.match(/^[0-9]+/))
        if (this.debug) {
            console.info('Filtered class names: ' + pageClassesFiltered);
            console.groupEnd();
        }
        this.pageClasses = pageClassesFiltered;
        return this.pageClasses;
    }

    initPageClass() {
        this.nodeList = document.querySelectorAll(this.querySelectorAll);
        if (this.debug) {
            console.log(this.nodeList);
        }
        if (this.getPageClasses(this.url, this.pageRegex)) {
            for (let i = 0; i < this.nodeList.length; i++) {
                for (let j = 0; j < this.pageClasses.length; j++) {
                    this.nodeList[i].classList.add(this.pageClasses[j].toLowerCase());
                }
                this.classedNodes.push(this.nodeList[i]);
            }
        }
        return true;
    }
}

const pageClass = new PageClass();

//const rootPageClass = new PageClass({
//    "querySelectorAll": "html",
//    "pageRegex": /[\_\w]+/gi
//});

// Randomizer 2.0.1 by Jesse Fowler, Copyright 2022 Fiserv. All rights reserved.
class Randomizer extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.selector = 'body.home > main > [class*="Subsection-Table"][class*="-Full-Height"]';

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();
    }

    randomize(elems) {
        if (elems) {
            var allElems = (function () {
                var ret = [], l = elems.length;
                while (l--) { ret[ret.length] = elems[l]; }
                return ret;
            })();

            var shuffled = (function () {
                var l = allElems.length, ret = [];
                while (l--) {
                    var random = Math.floor(Math.random() * allElems.length),
                        randEl = allElems[random].cloneNode(true);
                    allElems.splice(random, 1);
                    ret[ret.length] = randEl;
                }
                return ret;
            })(), l = elems.length;

            while (l--) {
                elems[l].replaceWith(shuffled[l]);
            }

            return true;
        }
        return false;
    }

    init() {
        this.nodeList = document.querySelectorAll(this.selector);
        this.randomize(this.nodeList);
        return true;
    }

}

const randomizer = new Randomizer();

// Scroll Trigger 4.2.1 by JP Larson, Copyright 2021 Fiserv. All rights reserved.
class ScrollTrigger extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.querySelectorAll = '[class*="subsection"], [class*="Subsection"]';
        this.targetNodeList = null;
        this.root = null;
        this.rootMargin = "-25% 0%";
        this.threshold = 0;
        this.scrollMin = 0;
        this.activeClass = "scroll-active";
        this.triggerClass = "scroll-trigger";
        this.intersectsViewport = true;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    static bindWindowScroll() {
        if (typeof ScrollTrigger.windowY !== "undefined") return;
        ScrollTrigger.windowY = window.scrollY;
        window.addEventListener("scroll", this.scrollCallback);
    }

    static scrollCallback() {
        ScrollTrigger.windowY = window.scrollY;
    }

    init() {
        this.nodeList = this.nodeList ? this.nodeList : document.querySelectorAll(this.querySelectorAll);
        ScrollTrigger.bindWindowScroll();
        this.splitFramedandObserved(this.nodeList);
    }

    isIntersecting(obj) {
        if (obj === document.querySelector("body")) return false;
        if (obj === document.querySelector("main")) return false;
        return true;
    }

    isFixed(obj) {
        if (obj === document.body) return false;
        if (window.getComputedStyle(obj).position === "fixed") return true;
        return this.isFixed(obj.parentElement);
    }

    pushArray(obj, name) {
        if (!obj) return;
        if (!this[name]) this[name] = [];
        if (this[name].indexOf(obj) !== -1) return;
        this[name].push(obj);
    }

    splitFramedandObserved(nodeList) {
        if (!nodeList) return;
        const framed = [];
        const observed = [];
        for (let i = 0; i < nodeList.length; i++) {
            const thisNode = nodeList[i];
            const fixed = this.isFixed(thisNode);
            const intersects = this.isIntersecting(thisNode);
            if (fixed || !intersects || !this.intersectsViewport) framed.push(thisNode);
            if (!fixed && intersects && this.intersectsViewport) observed.push(thisNode);
        }
        this.createObserver(observed);
        this.createAnimationFrame(framed);
        if (!this.framed) this.framed = [];
        this.framed = this.framed.concat(framed);
        if (!this.observed) this.observed = [];
        this.observed = this.observed.concat(observed);
    }

    handleTarget(targetNodeList, callback) {
        if (!targetNodeList) return;
        for (let i = 0; i < this.targetNodeList.length; i++) {
            const thisTarget = this.targetNodeList[i];
            callback(thisTarget);
        }
        return;
    }

    addActive(obj, targetNodeList) {
        if (!obj) return;
        if (ScrollTrigger.windowY < this.scrollMin) return;
        if (targetNodeList) return this.handleTarget(targetNodeList, this.addActive.bind(this));
        if (this.active !== obj) this.active = obj;
        if (this.active.classList.contains(this.activeClass)) return;
        requestAnimationFrame(() => {
            this.active.classList.add(this.activeClass);
        });
        this.addTrigger(obj);
        this.activeCallback();
    }

    removeActive(obj, targetNodeList) {
        if (!obj) return;
        if (targetNodeList) return this.handleTarget(targetNodeList, this.removeActive.bind(this));
        requestAnimationFrame(() => {
            obj.classList.remove(this.activeClass);
        });
    }

    activeCallback() {
        this.change = true;
        Fiserv.message(this);
        delete this.change;
    }

    addTrigger(obj) {
        if (!obj) return;
        if (!this.triggerClass) return;
        this.pushArray(obj, "triggered");
        requestAnimationFrame(() => {
            obj.classList.add(this.triggerClass);
        });
    }

    removeTrigger(obj) {
        if (!obj) return;
        if (!this.triggerClass) return;
        if (!this.triggered) return;
        this.triggered.splice(this.triggered.indexOf(obj), 1);
        requestAnimationFrame(() => {
            obj.classList.remove(this.triggerClass);
        });
    }

    createAnimationFrame(nodeList) {
        if (!nodeList) return;
        this.runFrame = true;
        const frame = function () {
            if (!this.runFrame) return;
            if (this.windowY === ScrollTrigger.windowY) return window.requestAnimationFrame(frame);
            this.windowY = ScrollTrigger.windowY;
            for (let i = 0; i < nodeList.length; i++) {
                const thisNode = nodeList[i];
                if (this.windowY < this.scrollMin) this.removeActive(thisNode, this.targetNodeList);
                this.addActive(thisNode, this.targetNodeList);
            }
            return window.requestAnimationFrame(frame);
        }.bind(this);
        window.requestAnimationFrame(frame);
        return true;
    }

    intersectionCallback(entries) {
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            if (!entry.isIntersecting || this.windowY < this.scrollMin) this.removeActive(entry.target, this.targetNodeList);
            if (entry.isIntersecting) this.addActive(entry.target, this.targetNodeList);
        }
        return true;
    }

    createObserver(nodeList) {
        if (!nodeList) return;
        if (nodeList.length <= 0) return;
        const observerOptions = {
            "root": this.root,
            "rootMargin": this.rootMargin,
            "threshold": this.threshold
        };
        this.observer = new IntersectionObserver(this.intersectionCallback.bind(this), observerOptions);
        for (let i = 0; i < nodeList.length; i++) {
            const thisNode = nodeList[i];
            this.observer.observe(thisNode);
        }
    }

    clean() {
        if (this.observer) this.observer.disconnect();
        if (this.observer) delete this.observer;
        if (this.observed) delete this.observed;
        if (this.runFrame) delete this.runFrame;
        if (this.framed) delete this.framed;
        if (this.windowY) delete this.windowY;
        if (this.active) delete this.active;
        for (let i = 0; i < this.nodeList.length; i++) {
            const thisNode = this.nodeList[i];
            this.removeTrigger(thisNode);
            this.removeActive(thisNode);
        }
        if (this.triggered) delete this.triggered;
    }

    includeInit(CMSInclude) {
        for (let i = 0; i < CMSInclude.includeList.length; i++) {
            const nodeList = CMSInclude.includeList[i].html;
            for (let k = 0; k < nodeList.length; k++) {
                const node = nodeList[k];
                const newNodeList = node.parentNode.querySelectorAll(this.querySelectorAll);
                this.splitFramedandObserved(newNodeList);
            }
        }
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "CMSInclude":
                if (obj.addedNodes) this.includeInit(obj);
                break;
        }
    }
}

const showTopScrollTrigger = new ScrollTrigger({
    "querySelectorAll": 'body',
    "activeClass": "showtop",
    "triggerClass": null,
    "scrollMin": 350
});

const bodyScrollTrigger = new ScrollTrigger({
    "querySelectorAll": 'body',
    "activeClass": "scroll",
    "triggerClass": null,
    "scrollMin": 1
});

const subsectionScrollTrigger = new ScrollTrigger();

// Get Queries 3.0.1 by JP Larson, Copyright 2020 Fiserv. All rights reserved.
class GetQueries extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);
    
        //Default Properties
        this.propertyName = "queries";
        this.decode = true;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.setLocationGetter();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    //Default Functions/Methods
    setLocationGetter() {
        Object.defineProperty(location, this.propertyName, {get: this.getQuery.bind(this)});
    }

    getQuery() {
        const search = location.search;
        if (!search) return;
        const querySets = search.substring(1).split("&");
        if (!querySets) return;
        const queries = {};
        for (let i = 0; i < querySets.length; i++) {
            const thisSet = querySets[i];
            const setSplit = thisSet.split("=");
            if (!setSplit) continue;
            const key = this.decode ? decodeURIComponent(setSplit[0]) : setSplit[0];
            const value = this.decode ? decodeURIComponent(setSplit[1]) : setSplit[1];
            queries[key] = value;
        }
        return queries;
    }

    get queries() {
        return this.getQuery();
    }
}

const getQueries = new GetQueries();

// Language Selector 1.4.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved.
class LanguageSelector extends Fiserv {
    constructor(options) {
        super(options);

        //Default Properties
        this.html = document.querySelectorAll("html");
        this.langInputParents = document.querySelectorAll(".lang-input");
        this.langStorageName = "language";
        this.labels = [];
        this.inputs = [];
        this.inputEvent = document.createEvent("HTMLEvents");
        this.inputEvent.initEvent("input", false, true);
        this.expireDate = new Date(new Date().getTime() + 3.154e+10);

        //Default Overrides
        this.options = options;
        this.defaultLanguage = this.defaultLanguage ? this.defaultLanguage : navigator.languages;
        this.language = this.defaultLanguage;

        //Initialize Needed Functions
        this.addPointer(this.langInputParents);
        this.langNodes = this.findLangNodes(this.langCodes);
        this.changeLanguage(this.langStorageName, this.html);
        this.checkDefaultLang(this.defaultLanguage, this.langCodes, this.langStorageName, this.html);
        this.appendTemplate(this.langInputParents);
        this.changeInputValues(this.labels, this.checkLangStorage(this.langStorageName));
        this.bindLangInputs(this.labels, this.langStorageName, this.html);

        //Complete Time Stamp
        this.logTime("Init End");
    }
    set defaultLanguage(languages) {
        const storageLang = this.checkLangStorage(this.langStorageName);
        if (storageLang) this._defaultLanguage = storageLang;
        if (storageLang) return;
        if (!this.langCodes) return this.logError(`Missing "LangCodes"`);
        if (typeof languages === "array") languages = languages;
        if (typeof languages === "string") languages = [languages];
        for (let i = 0; i < languages.length; i++) {
            const thisLang = languages[i];
            for (let key in this.langCodes) {
                const thisLangCode = this.langCodes[key];
                const langCodeRegex = new RegExp(thisLangCode, "gi");
                if (thisLang === thisLangCode || langCodeRegex.test(thisLang)) {
                    this._defaultLanguage = thisLangCode;
                    return;
                }
            }
        }
        this._defaultLanguage = this.html.lang;
    }
    get defaultLanguage() {
        return this._defaultLanguage;
    }
    //Change the names of multiple inputs
    appendInputNames(label, postfix) {
        if (!label) return;
        if (!postfix) return;
        const theseInputs = label.querySelectorAll("input, select, textarea");
        for (let i = 0; i < theseInputs.length; i++) {
            const thisInput = theseInputs[i];
            thisInput.name += "-" + postfix;
        }
        return label;
    }
    //Default Functions
    appendTemplate(parents) {
        if (!parents) return this.logError(`Missing "Parent"`);
        if (!this.template) return;
        for (let i = 0; i < parents.length; i++) {
            const thisNode = parents[i];
            for (let k = 0; k < this.template.length; k++) {
                const thisTemplateNode = this.template[k];
                const thisLabel = thisTemplateNode.cloneNode(true);
                const input = thisLabel.querySelector("input, select, textarea");
                this.addPointer(thisLabel);
                this.appendInputNames(thisLabel, i);
                this.labels.push(thisLabel);
                this.inputs.push(input);
                thisNode.appendChild(thisLabel);
            }
        }
    }
    //Set lang attribute on each node in the nodeList.
    setLangAttr(lang, nodes) {
        if (!lang) return this.logError(`Missing "lang"`);
        if (!nodes) return this.logError(`Missing "nodes"`);
        for (let i = 0; i < nodes.length; i++) {
            const thisNode = nodes[i];
            thisNode.setAttribute("lang", lang);
        }
    }
    //Find each nodeList associated with a language class. Then set the lang attribute.
    findLangNodes(codes) {
        if (!codes) return this.logError(`Missing "codes"`);
        const allNodes = {};
        for (let key in codes) {
            const lang = codes[key];
            const langNodes = document.querySelectorAll("." + key);
            this.setLangAttr(lang, langNodes);
            allNodes[lang] = langNodes;
        }
        return allNodes;
    }
    //Get cookie value
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    //Check local storage for the set language.
    checkLangStorage(storageName) {
        if (!storageName) return this.logError(`Missing "storageName"`);
        const storage = this.getCookie(storageName);
        if (storage) return storage;
        return false;
    }
    //Trigger change event
    triggerChangeEvent() {
        for (let i = 0; i < this.inputs.length; i++) {
            const input = this.inputs[i];
            if (input.psSelect && input.psSelect.changeEvent.eventPhase === 0) input.psSelect.setSelected(null, this.language);
        }
    }
    //Change the lang attribute on the html object.
    changeLanguage(storageName, html) {
        if (!storageName) return this.logError(`Missing "storageName"`);
        if (!html) return this.logError(`Missing html object`);
        const lang = this.checkLangStorage(storageName);
        if (!lang) return false;
        this.setLangAttr(lang, html);
        this.language = lang;
        this.triggerChangeEvent();
        this.completeCallback();
    }
    completeCallback() {
        this.change = true;
        Fiserv.message(this);
        delete this.change;
    }
    //Set the language setting in local storage.
    setLangStorage(lang, storageName, html) {
        if (!lang) return this.logError(`Missing "lang"`);
        if (!storageName) return this.logError(`Missing "storageName"`);
        if (!html) return this.logError(`Missing "html"`);
        document.cookie = `${storageName}=${lang}; expires=${this.expireDate};`;
        return this.changeLanguage(storageName, html);
    }
    //Check the browser default language and compare that to the language codes. Set the local storage if none is found.
    checkDefaultLang(language, langCodes, storageName, html) {
        if (!language) return this.logError(`Missing "languages"`);
        if (!langCodes) return this.logError(`Missing "langCodes"`);
        if (!storageName) return this.logError(`Missing "storageName"`);
        if (!html) return this.logError(`Missing "html"`);
        if (this.checkLangStorage(storageName)) return;
        return this.setLangStorage(language, storageName, html);
    }
    //Change the input values to match the current language.
    changeInputValues(nodes, value) {
        if (!nodes) return this.logError(`Missing "nodes"`);
        if (!value) return this.logError(`Missing "value"`);
        for (let i = 0; i < nodes.length; i++) {
            const thisLabel = nodes[i];
            const theseInputs = thisLabel.querySelectorAll("input, textarea, select");
            for (let h = 0; h < theseInputs.length; h++) {
                const thisInput = theseInputs[h];
                if (thisInput.nodeName === "SELECT") {
                    for (let k = 0; k < thisInput.options.length; k++) {
                        const thisOption = thisInput.options[k];
                        if (thisOption.value === value) thisInput.selectedIndex = k;
                    }
                }
                if (thisInput.nodeName === "INPUT" && thisInput.type === "radio" && thisInput.value !== value) thisInput.checked = false;
                if (thisInput.nodeName === "INPUT" && thisInput.type === "radio" && thisInput.value === value) thisInput.checked = true;
                if ((thisInput.nodeName === "INPUT" && thisInput.type !== "radio") || thisInput.nodeName === "TEXTAREA") thisInput.value = value;
            }
        }
    }
    //Attach change even listeners to the selects and change the language on the event. (jQuery change even is used due to psuedo select)
    bindLangInputs(nodes, storageName, html) {
        if (!nodes) return this.logError(`Missing "nodes"`);
        if (!storageName) return this.logError(`Missing "storageName"`);
        if (!html) return this.logError(`Missing "html"`);
        for (let i = 0; i < nodes.length; i++) {
            const thisLabel = nodes[i];
            const theseInputs = thisLabel.querySelectorAll("input, textarea, select");
            for (let k = 0; k < theseInputs.length; k++) {
                const thisInput = theseInputs[k];
                thisInput.addEventListener("change", function (e) {
                    const input = e.target;
                    this.changeInputValues(nodes, input.value);
                    this.setLangStorage(input.value, storageName, html);
                }.bind(this));
            }
        }
    }
} 

const languageSelector = new LanguageSelector({
    "langCodes": { //Class: Lang Value
        "Lang-English": "en",
        "Lang-Spanish": "es"
    },
    "template": `
        <label>
            <span>Select Language</span>
            <select name="language">
                <option value="" disabled>Select Language</option>
                <option value="en">English</option>
                <option value="es">En español</option>
            </select>
        </label>`
});

// Text Replace 2.0.0 by Jesse Fowler, Copyright 2021 Fiserv. All rights reserved.
class TextReplace extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.nodeList = document.querySelectorAll('main, body > header, body > footer');
        this.debug = true;
        this.htmlClass = 'text-replace-enabled';
        this.pairs = {
            "loneSpaces": {
                "regex": /^\&nbsp\;$/gm,
                "replace": ""
            },
            "spaces": {
                "regex": /\&nbsp\;/gm,
                "replace": " "
            },
            "specials": {
                "regex": /[\n\r\t]+/gm,
                "replace": ""
            }
        };
        this.removableElements = ["H1", "H2", "H3", "H4", "H5", "H6", "P"];

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.cleanHTML = this.cleanHTML.bind(this);
        this.findTextNodes = this.findTextNodes.bind(this);
        this.removeEmptyParents = this.removeEmptyParents.bind(this);
        this.replaceTextNodes = this.replaceTextNodes.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.initTextReplace = this.initTextReplace.bind(this);
        return true;
    }

    parser = new DOMParser();

    cleanHTML(obj) {
        let result = {
            "replaced": [],
            "removed": []
        };
        for (let key in this.pairs) {
            const pair = this.pairs[key];
            if (result.replaced.length == 0) {
                result.replaced = this.replaceTextNodes(obj, pair);
            } else {
                result.replaced = result.replaced.concat(this.replaceTextNodes(obj, pair));
            }
            if (result.removed.length == 0) {
                result.removed = this.removeEmptyParents();
            } else {
                result.removed = result.removed.concat(this.removeEmptyParents());
            }
        }
        return result;
    }

    findTextNodes(obj, pair, nodeList) {
        if (obj) {
            const childrenNodes = obj.childNodes;
            if (!nodeList) {
                nodeList = [];
            }
            for (let i = 0, n = childrenNodes.length; i < n; i++) {
                const thisNode = childrenNodes[i];
                if (thisNode && thisNode.nodeType == 3) {
                    const pseudoDom = this.parser.parseFromString(thisNode.textContent, "text/html");
                    if (pair.regex.test(thisNode.textContent) || pair.regex.test(pseudoDom.body.innerHTML)) {
                        nodeList.push({
                            "node": thisNode,
                            "parent": thisNode.parentNode,
                            "pair": pair
                        });
                    }
                } else {
                    nodeList.concat(this.findTextNodes(thisNode, pair, nodeList));
                }
            }
        }
        return nodeList;
    }

    removeEmptyParents() {
        const removables = this.removableElements;
        const empties = document.querySelectorAll(":empty");
        let removed = [];
        for (let i = 0, n = empties.length; i < n; i++) {
            const thisEmpty = empties[i];
            for (let p = 0, t = removables.length; p < t; p++) {
                if (thisEmpty.nodeName == removables[p]) {
                    removed.push(thisEmpty);
                    thisEmpty.parentNode.removeChild(thisEmpty);
                }
            }
        }
        return removed;
    }

    replaceTextNodes(obj, pair) {
        const text = this.findTextNodes(obj, pair);
        for (let i = 0, n = text.length; i < n; i++) {
            if (!text[i].node.textContent.length) continue;
            const parsed = this.parser.parseFromString(text[i].node.textContent, "text/html");
            if (!parsed.body.childNodes.length) continue;
            parsed.body.innerHTML = parsed.body.innerHTML.replace(pair.regex, pair.replace);
            if (!parsed.body.childNodes.length) text[i].node.textContent = "";
            if (parsed.body.childNodes.length && !/^\s/.test(text[i].node.textContent)) text[i].node.textContent = parsed.body.childNodes[0].textContent;
            if (text[i].node.textContent.length === 0) text[i].parent.removeChild(text[i].node);
        }
        return text;
    }

    init() {
        for (var i = 0, n = this.nodeList.length; i < n; i++) {
            this.initTextReplace(this.nodeList[i]);
        }
        this.bindCallbacks();
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    initTextReplace(obj) {
        this.cleanHTML(obj);
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "CMSInclude":
                this.init();
                break;
        }
    }
}

const textReplace = new TextReplace();

// Table Timeline 1.0.1 by Jesse Fowler, Copyright 2020 Fiserv. All rights reserved.
const timeLineScrollTrigger = new ScrollTrigger({
    "nodeList": document.querySelectorAll('[class*="Table-"][class*="-Panel"][class*="-Timeline"] > * > tr')
});

// Rate Updater 2.0.0 by Jesse Fowler, Copyright 2019 Fiserv. All rights reserved.
class RateUpdater extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.addedNodes = [];
        this.querySelectorAll = 'p';
        this.callback = "";
        this.data = {};
        this.debug = false;
        this.htmlClass = 'enable-rate-updater';
        this.invalidClassNames = [];
        this.prependClassNameString = 'Rate-Updater-';
        this.rateRegExpStr = '(?<=: )[^\n]+'; // '[0123456789.]*\%'
        this.rateRegExp = new RegExp(this.rateRegExpStr);
        this.ratesFileUrl = 'inc_rate-updater.aspx';
        this.stringRemovals = [{ 'findStr': ':[\s]*[^\n]*', 'replaceStr': '' }, { 'findStr': '&nbsp;', 'replaceStr': ' ' }, { 'findStr': '&amp;', 'replaceStr': 'and' }, { 'findStr': '\\+', 'replaceStr': '' }, { 'findStr': '\\/', 'replaceStr': '-' }, { 'findStr': '\\.', 'replaceStr': '_' }, { 'findStr': '%', 'replaceStr': ' Percent' }, { 'findStr': '\\$', 'replaceStr': '' }, { 'findStr': ',', 'replaceStr': '' }];
        this.stringReplacements = [{ 'findStr': '[^\n]+(?=: )', 'replaceStr': '' }, { 'findStr': '%', 'replaceStr': '<span class="rate-updater-percentage">%</span>' }];
        this.templateElementSelector = '#rate-updater'; // '#rate-updater'

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.createReplacement = this.createReplacement.bind(this);
        this.initRateUpdater = this.initRateUpdater.bind(this);
        return true;
    }

    clean() {
        for (let i = 0; i < this.addedNodes.length; i++) {
            this.addedNodes[i].remove();
        }
        this.data = {};
        this.invalidClassNames = [];
        document.querySelector('html').classList.remove(this.htmlClass);
        return true;
    }

    init() {
        if (!this.initRateUpdater()) return false;
        this.bindCallbacks();
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    createReplacement(rate, rateClass, paragraph) {
        if (rate) {
            this.data[rateClass] = rate;
            let selectorText = '.' + rateClass;
            const queryCheck = (s) => document.createDocumentFragment().querySelector(s)
            const isSelectorValid = (selector) => {
                try { queryCheck(selector) } catch { return false }
                return true;
            }
            if (isSelectorValid(selectorText)) {
                let matchingElements = document.querySelectorAll(selectorText);
                let replacement = document.createElement('span');
                replacement.classList.add('rate-updater-replacement');
                for (let j = 0; j < this.stringReplacements.length; j++) {
                    let regExp = new RegExp(this.stringReplacements[j].findStr, "ig");
                    replacement.innerHTML = rate[0].replace(regExp, this.stringReplacements[j].replaceStr);
                }
                for (let k = 0; k < matchingElements.length; k++) {
                    let clone = replacement.cloneNode(true);
                    matchingElements[k].before(clone);
                    this.addedNodes.push(clone);
                }
                replacement = null;
            } else {
                this.invalidClassNames.push(rateClass);
                if (this.debug) {
                    console.log('Invalid classname: "' + rateClass + '". Use stringRemovals to replace invalid characters.');
                }
            }
        }
    }

    initRateUpdater() {
        document.querySelector('html').classList.add(this.htmlClass);
        let url = this.ratesFileUrl;
        if (this.hasOwnProperty('templateElementSelector') && this.templateElementSelector !== '') {
            const paragraphs = document.querySelector(this.templateElementSelector).content.querySelectorAll(this.querySelectorAll);
            if (paragraphs && paragraphs.length > 0) {
                for (let i = 0; i < paragraphs.length; i++) {
                    let paragraph = paragraphs[i];
                    let classStr = paragraphs[i].innerHTML;
                    for (let j = 0; j < this.stringRemovals.length; j++) {
                        let regExp = new RegExp(this.stringRemovals[j].findStr, "ig");
                        classStr = classStr.replace(regExp, this.stringRemovals[j].replaceStr);
                    }
                    let rateName = classStr.trim();
                    let rate = this.rateRegExp.exec(paragraphs[i].innerHTML);
                    let rateClass = this.prependClassNameString + rateName.replace(/\s/g, '-');
                    this.createReplacement(rate, rateClass, paragraph);
                };
            }
        } else {
            let that = this;
            async function fetchArticle() {
                const response = await fetch(url);
                const responseText = await response.text();
                if (that.debug) {
                    console.group(`Content found within ${url}...`);
                    console.log(responseText);
                    console.groupEnd;
                }
                if (responseText.length > 12) {
                    let ratesFileHTML = document.createElement('div');
                    ratesFileHTML.classList.add('rates-file');
                    ratesFileHTML.innerHTML = responseText;
                    let paragraphs = ratesFileHTML.querySelectorAll(that.querySelectorAll);
                    if (paragraphs && paragraphs.length > 0) {
                        for (let i = 0; i < paragraphs.length; i++) {
                            let paragraph = paragraphs[i];
                            let classStr = paragraphs[i].innerHTML;
                            for (let j = 0; j < that.stringRemovals.length; j++) {
                                let regExp = new RegExp(that.stringRemovals[j].findRegEx);
                                classStr = classStr.replace(regExp, "");
                            }
                            let rateName = classStr.trim();
                            let rate = that.rateRegExp.exec(paragraphs[i].innerHTML);
                            let rateClass = that.prependClassNameString + rateName.replace(/\s/g, '-');
                            that.createReplacement(rate, rateClass, paragraph);
                        };
                    }
                }
            };
            fetchArticle();
        }
        return true;
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "CMSInclude":
                this.clean();
                this.init();
                break;
        }
    }
}

const rateUpdater = new RateUpdater();

//const RateUpdaterSpecial = new RateUpdater({
//    "stringReplacements": [{ 'findStr': ', ', 'replaceStr': '' }, { 'findStr': '%', 'replaceStr': '<span class="rate-updater-percentage">%</span>' }],
//    "templateElementSelector": ''
//});

// CMS Include 3.3.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved.
class CMSInclude extends Fiserv {
    constructor(options) {
        super(options);

        //Default Properties
        this.querySelectorAll = ".CMS-Include";
        this.includeURL = "inc_cms-include.aspx";
        this.prefetchIframe = false;
        this.queryValueAttribute = "href";
        this.queryName = "name";
        this.loadedClass = "include-loaded";

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        this.logTime(`Init End`);
    }

    addClass(node) {
        if (!node) return false;
        node.classList.add(this.loadedClass);
        return true;
    }

    appendCallback() {
        this.addedNodes = true;
        this.logTime("Loaded Message");
        Fiserv.message(this);
        delete this.addedNodes;
        return this.callback();
    }

    appendObjects() {
        if (!this.includeList) return false;
        const append = () => {
            for (let i = 0; i < this.includeList.length; i++) {
                const include = this.includeList[i];
                if (include.appeded) continue;
                for (let k = 0; k < include.html.length; k++) {
                    const HTMLNode = include.html[k];
                    include.appendNode.parentNode.insertBefore(HTMLNode, include.appendNode);
                }
                this.addClass(include.node);
                this.addClass(include.appendNode);
                include.appeded = true;
                this.appendCallback();
            }
        }
        requestAnimationFrame(append);
        return true;
    }

    callback() {
        return true;
    }

    clean() {
        if (!this.includeList) return false;
        for (let i = 0; i < this.iframeList.length; i++) {
            const iframe = this.iframeList[i];
            iframe.remove();
        }
        for (let i = 0; i < this.includeList.length; i++) {
            const include = this.includeList[i];
            for (let k = 0; k < include.html.length; k++) {
                const HTMLNode = include.html[k];
                HTMLNode.remove();
            }
            this.removeClass(include.node);
            this.removeClass(include.appendNode);
        }
        this.cleanCallback();
        return true;
    }

    cleanCallback() {
        this.removedNodes = true;
        this.logTime("Cleaned Message");
        Fiserv.message(this);
        delete this.removedNodes;
    }

    createCMSURL(articleName) {
        if (!articleName) return;
        articleName = articleName.replace(/[\-\s]/ig, '+');
        return `${this.includeURL}?${this.queryName}=${articleName}`;
    }

    async createObjectList(nodeList) {
        nodeList = nodeList ? nodeList : this.nodeList;
        for (let i = 0; i < nodeList.length; i++) {
            const node = nodeList[i];
            if (!this.isNewInclude(node)) continue;
            const attribute = node.hasAttribute(this.queryValueAttribute) ? node.attributes[this.queryValueAttribute].value : this.includeURL;
            const url = this.isFile(attribute) ? attribute : this.createCMSURL(attribute);
            if(this.prefetchIframe){
                let prefetchIframe = document.createElement("iframe");
                prefetchIframe.setAttribute("src", url);
                prefetchIframe.scrolling = 'no';
                prefetchIframe.className = 'cms-include-iframe';
                prefetchIframe.style.width = "0px";
                prefetchIframe.style.height = "0px";
                document.body.appendChild(prefetchIframe);
                if (!this.iframeList) this.iframeList = [];
                this.iframeList.push(prefetchIframe);
            }
            const responseHTML = await this.fetchHTML(url);
            if (!responseHTML) continue;
            const html = new DOMParser().parseFromString(responseHTML, "text/html").querySelectorAll("body > *, style, script");
            if (!html.length) continue;
            const parentP = this.findParentP(node);
            const appendNode = parentP ? parentP : node;
            const obj = {
                "node": node,
                "appendNode": appendNode,
                "url": url,
                "html": html
            }
            if (!this.includeList) this.includeList = [];
            this.includeList.push(obj);
        }
        if (!this.includeList) return false;
        return true;
    }

    async fetchHTML(url) {
        const response = await fetch(url, { cache: "no-cache" });
        if (response.status === 404) this.logError(`404 ${url}`);
        if (response.status === 403) this.logError(`403 ${url}`);
        if (response.status === 500) this.logError(`500 ${url}`);
        if (response.status !== 200) return false;
        return await response.text();
    }

    findParentP(node) {
        const parent = node.parentNode;
        if (parent === document.body) return null;
        if (parent.nodeName.toLowerCase() === "p") return parent;
        return this.findParentP(parent);
    }

    async init() {
        this.nodeList = document.querySelectorAll(this.querySelectorAll);
        if (!this.nodeList.length) {
            delete this.nodeList;
            return false;
        }
        if (!this.includeList) await this.createObjectList();
        this.appendObjects();
        return true;
    }

    isFile(path) {
        const url = new URL(`${location.origin}/${path}`);
        if (!url) return false;
        const test = /[^\.]+[\.]{1}[^\.]{2,4}$/ig.test(url.pathname);
        return test;
    }

    isNewInclude(node) {
        if (!this.includeList) return true;
        for (let i = 0; i < this.includeList.length; i++) {
            const includeNode = this.includeList[i].node;
            if (node === includeNode) return false;
        }
        return true;
    }

    removeClass(node) {
        if (!node) return false;
        node.classList.remove(this.loadedClass);
        return true;
    }

    async includeInit(CMSInclude) {
        for (let i = 0, l = CMSInclude.includeList.length; i < l; i++) {
            const nodeList = CMSInclude.includeList[i].html;
            for (let k = 0, j = nodeList.length; k < j; k++) {
                const node = nodeList[k];
                const newNodeList = node.querySelectorAll(this.querySelectorAll);
                await this.createObjectList(newNodeList);
            }
        }
        this.appendObjects();
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "CMSInclude":
                if (obj.addedNodes) this.includeInit(obj);
                break;
        }
    }

}

const cmsInclude = new CMSInclude();

// Ajax Post 3.3.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved.
class AjaxPost extends Fiserv {
    constructor(options) {
        super(options);

        //Default Properties
        this.querySelectorAll = "";
        this.method = "post";
        this.url = "";
        this.append = [];
        this.prefetchIframe = false;
        this.replace = false;
        this.responseClass = "success";

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        this.logTime(`Init End`);
    }

    appendCallback() {
        this.addedNodes = true;
        Fiserv.message(this);
        delete this.addedNodes;
    }

    callback() {
        return;
    }

    clean() {
        for (let i = 0; i < this.formList.length; i++) {
            const form = this.formList[i];
            form.clean();
        }
        for (let i = 0; i < this.iframeList.length; i++) {
            const iframe = this.iframeList[i];
            iframe.remove();
        }
        delete this.formList;
        return true;
    }

    includeInit(CMSInclude) {
        for (let i = 0; i < CMSInclude.includeList.length; i++) {
            const nodeList = CMSInclude.includeList[i].html;
            for (let k = 0; k < nodeList.length; k++) {
                const node = nodeList[k];
                const newNodeList = node.parentNode.querySelectorAll(this.querySelectorAll);
                if (!newNodeList || !newNodeList.length) continue;
                if (!this.isNewForm(newNodeList)) continue;
                this.setFormList(newNodeList);
            }
        }
    }

    isNewForm(newNodeList) {
        if (!this.formList) return true;
        if (!newNodeList) return false;
        for (let i = 0; i < this.formList.length; i++) {
            const formNode = this.formList[i].node;
            for (let n = 0; n < newNodeList.length; n++) {
                const newNode = newNodeList[n];
                if (newNode === formNode) return false;
            }
        }
        return true;
    }

    init() {
        this.nodeList = document.querySelectorAll(this.querySelectorAll);
        if (!this.nodeList.length) {
            delete this.nodeList;
            return false;
        }
        this.setFormList(this.nodeList);
        return true;
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "CMSInclude":
                if (obj.addedNodes) this.includeInit(obj);
                break;
        }
    }

    setFormList(nodeList) {
        nodeList = nodeList ? nodeList : this.nodeList;
        for (let i = 0; i < nodeList.length; i++) {
            const node = nodeList[i];
            if (!this.formList) this.formList = [];
            if(this.prefetchIframe){
                let prefetchIframe = document.createElement("iframe");
                prefetchIframe.setAttribute("src", this.url);
                prefetchIframe.scrolling = 'no';
                prefetchIframe.className = 'ajax-post-iframe';
                prefetchIframe.style.width = "0px";
                prefetchIframe.style.height = "0px";
                document.body.appendChild(prefetchIframe);
                if (!this.iframeList) this.iframeList = [];
                this.iframeList.push(prefetchIframe);
            }
            const form = new AjaxPostForm(this, node);
            this.formList.push(form);
        }
    }
}

class AjaxPostForm {
    constructor(ajaxPost, node) {
        this.ajaxPost = ajaxPost;
        this.node = node;
        this.bindFunctions();
        this.init();
    }

    addResponseClass() {
        this.node.classList.add(this.ajaxPost.responseClass);
    }

    appendResult() {
        for (let i = 0; i < this.result.length; i++) {
            const node = this.result[i];
            const sibling = this.node.nextElementSibling;
            const append = () => {
                if (this.ajaxPost.replace) {
                    this.node.replaceWith(node);
                    this.ajaxPost.callback();
                    return;
                }
                if (sibling) {
                    this.node.parentNode.insertBefore(node, sibling);
                    this.ajaxPost.callback();
                    return;
                }
                this.node.parentNode.appendChild(node);
                this.ajaxPost.callback();
                return;
            };
            requestAnimationFrame(append);
        }
        this.ajaxPost.appendCallback();
    }

    bindFunctions() {
        this.submitCallback = this.submitCallback.bind(this);
    }

    clean() {
        this.node.removeEventListener("submit", this.submitCallback);
        this.removeResponseClass();
        return true;
    }

    init() {
        this.node.addEventListener("submit", this.submitCallback);
    }

    removeResponseClass() {
        this.node.classList.remove(this.ajaxPost.responseClass);
    }

    setFormData() {
        this.formData = new FormData(this.node);
        for (let i = 0; i < this.ajaxPost.append.length; i++) {
            const pair = this.ajaxPost.append[i];
            for (let key in pair) {
                this.formData.append(key, pair[key]);
            }
        }
    }

    async submitCallback(e) {
        e.preventDefault();
        this.setFormData();
        const result = await this.submitForm();
        if (!result) return false;
        this.result = this.ajaxPost.parseHTML(result);
        this.appendResult();
        this.addResponseClass();
        this.node.reset();
        return false;
    }

    async submitForm() {
        const args = {
            method: this.ajaxPost.method,
            body: this.formData
        };
        const response = await fetch(this.ajaxPost.url, args);
        if (response.status === 404) this.logError(`404 ${url}`);
        if (response.status === 403) this.logError(`403 ${url}`);
        if (response.status === 500) this.logError(`500 ${url}`);
        if (response.status !== 200) return false;
        return await response.text();
    }
}

// Ajax Form 4.3.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved.
const ajaxFormInclude = new CMSInclude({
    "querySelectorAll": ".Form-Include",
    "includeURL": "inc_contact-form.aspx"
});

const ajaxFormPost = new AjaxPost({
    "querySelectorAll": "form.ajax-form",
    "url": "sendmail52.aspx"
});

// Replace With Checkmarks 2.0.0 by Jesse Fowler, Copyright 2017 Fiserv. All rights reserved.
class ReplaceWithCheckmarks extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.findThis = 'x';
        this.htmlReplacement = '<span class="checkmark"><span class="visuallyhidden">Yes</span></span>';
        this.selector = '[class*=Table-] > * > tr > *, [class*=Table-] > * > tr > * > p';

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();
    }

    matchReplacement(obj) {
        if (obj.innerHTML && obj.innerHTML.toLowerCase() === this.findThis.toLowerCase()) {
            obj.innerHTML = this.htmlReplacement;
            return true;
        }
        return false;
    }

    init() {
        this.nodeList = document.querySelectorAll(this.selector);
        for (var i = 0, n = this.nodeList.length; i < n; i++) {
            this.matchReplacement(this.nodeList[i]);
        }
        return true;
    }

}

const replaceWithCheckmarks = new ReplaceWithCheckmarks();

// Chart 1.1.1 by Jesse Fowler, Copyright 2020 Rami Yushuvaev & Jesse Fowler. MIT License.
class Chart extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.querySelectorAll = '[class*="Table-Chart"]';
        this.addedNodes = [];

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.initChart = this.initChart.bind(this);
        return true;
    }

    clean() {
        for (let i = 0; i < this.addedNodes.length; i++) {
            this.addedNodes[i].remove();
        }
        for (let i = 0; i < this.nodeList.length; i++) {
            this.nodeList[i].classList.remove('visuallyhidden');
        }
        return true;
    }

    init() {
        this.bindCallbacks();
        this.logTime('bindCallbacks');
        if (!this.initChart()) return false;
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    setLanguage() {
        for (let language in this.languages) {
            if (language.toLowerCase() === navigator.language.toLowerCase()) { this.language = navigator.language; }
        }
        if (!this.language) { this.language = 'en-US'; };
    }

    initChart() {
        this.nodeList = document.querySelectorAll(this.querySelectorAll);
        this.largest = 0;
        for (let j = 0; j < this.data.datasets[0].data.length; j++) {
            if (parseFloat(this.data.datasets[0].data[j].toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, '')) > parseFloat(this.largest.toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, ''))) {
                this.largest = this.data.datasets[0].data[j];
            }
        }
        for (let i = 0; i < this.nodeList.length; i++) {
            let table = document.createElement('table');
            table.classList.add('charts-css');
            let tableCaption = document.createElement('caption');
            tableCaption.innerHTML = this.data.datasets[0].label;
            table.append(tableCaption);
            let tableTbody = document.createElement('tbody');
            table.append(tableTbody);

            if (this.type.toLowerCase() === 'column') {
                table.classList.add(this.type.toLowerCase());
                table.classList.add('data-spacing-20');
                table.classList.add('show-4-secondary-axes');
                if (this.hasOwnProperty('settings') && this.settings.hasOwnProperty('scales') && this.settings.scales.hasOwnProperty('x') && this.settings.scales.x.hasOwnProperty('display')) {
                    table.classList.add('show-labels');
                    table.classList.add('show-primary-axis');
                }
                for (let k = 0; k < this.data.labels.length; k++) {
                    let tableTr = document.createElement('tr');
                    tableTbody.append(tableTr);
                    let tableTh = document.createElement('th');
                    tableTh.scope = 'row';
                    tableTh.innerHTML = this.data.labels[k];
                    tableTr.append(tableTh);
                    let tableTd = document.createElement('td');
                    let size = parseFloat(this.data.datasets[0].data[k].toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, '')) / parseFloat(this.largest.toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, ''));
                    if(isNaN(size)){ size = 0; }
                    tableTd.style.setProperty('--size', size);
                    tableTd.classList.add('contrast-class');
                    if (this.largest === this.data.datasets[0].data[k]) {
                        tableTd.classList.add('largest');
                    }
                    let tableTdSpan = document.createElement('span');
                    tableTdSpan.classList.add('data');
                    tableTdSpan.innerHTML = this.data.datasets[0].data[k];
                    if (this.data.datasets[0].labels) {
                        let tableTdSpanLabel = document.createElement('span');
                        tableTdSpanLabel.classList.add('label');
                        tableTdSpanLabel.innerHTML = this.data.labels[k];
                        tableTdSpan.prepend(tableTdSpanLabel);
                    }
                    tableTd.append(tableTdSpan);
                    if (this.hasOwnProperty('settings') && this.settings.hasOwnProperty('plugins') && this.settings.plugins.hasOwnProperty('tooltip') && this.settings.plugins.tooltip) {
                        let tableTdTooltip = document.createElement('span');
                        tableTdTooltip.classList.add('tooltip');
                        tableTdTooltip.innerHTML = this.data.datasets[0].data[k];
                        tableTd.append(tableTdTooltip);
                    }
                    tableTr.append(tableTd);
                }
            }
            if (this.type.toLowerCase() === 'bar') {
                table.classList.add(this.type.toLowerCase());
                table.classList.add('data-spacing-20');
                table.classList.add('show-4-secondary-axes');
                if (this.hasOwnProperty('settings') && this.settings.hasOwnProperty('scales') && this.settings.scales.hasOwnProperty('x') && this.settings.scales.x.hasOwnProperty('display')) {
                    table.classList.add('show-labels');
                    table.classList.add('show-primary-axis');
                }
                for (let k = 0; k < this.data.labels.length; k++) {
                    let tableTr = document.createElement('tr');
                    tableTbody.append(tableTr);
                    let tableTh = document.createElement('th');
                    tableTh.scope = 'row';
                    tableTh.innerHTML = this.data.labels[k];
                    tableTr.append(tableTh);
                    let tableTd = document.createElement('td');
                    tableTd.style.setProperty('--size', parseFloat(this.data.datasets[0].data[k].toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, '')) / parseFloat(this.largest.toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, '')));
                    tableTd.classList.add('contrast-class');
                    if (this.largest === this.data.datasets[0].data[k]) {
                        tableTd.classList.add('largest');
                    }
                    let tableTdSpan = document.createElement('span');
                    tableTdSpan.classList.add('data');
                    tableTdSpan.innerHTML = this.data.datasets[0].data[k];
                    if (this.data.datasets[0].labels) {
                        let tableTdSpanLabel = document.createElement('span');
                        tableTdSpanLabel.classList.add('label');
                        tableTdSpanLabel.innerHTML = this.data.labels[k];
                        tableTdSpan.prepend(tableTdSpanLabel);
                    }
                    tableTd.append(tableTdSpan);
                    if (this.hasOwnProperty('settings') && this.settings.hasOwnProperty('plugins') && this.settings.plugins.hasOwnProperty('tooltip') && this.settings.plugins.tooltip) {
                        let tableTdTooltip = document.createElement('span');
                        tableTdTooltip.classList.add('tooltip');
                        tableTdTooltip.innerHTML = this.data.datasets[0].data[k];
                        tableTd.append(tableTdTooltip);
                    }
                    tableTr.append(tableTd);
                }
            }

            this.nodeList[i].innerHTML = '';
            this.nodeList[i].append(table);
            this.addedNodes.push(table);
        }
        return true;
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "Expander":
                this.clean();
                this.initChart();
                break;
            case "CMSInclude":
                this.clean();
                this.initChart();
                break;
        }
    }
}

// Product Comparison 1.2.0 by Jesse Fowler and Kristen Rogers, Copyright 2022 Fiserv. All rights reserved.
class ProductComparison extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.querySelectorAll = '[class*="Product-Comparison-Table-Display"]';
        this.addedNodes = [];
        this.debug = false;
        this.initialDepositSet = false;
        this.languages = {
            'en': {
                heading: 'We have terms to fit your goals',
                selectProductLabel: 'Select Term',
                initialDepositLabel: 'Initial Deposit',
                initialDepositMinimum: 'Please enter an amount greater than the minimum deposit amount of',
                recurringDepositHeading: 'Save for',
                recurringDepositLabel: 'Recurring Deposit',
                recurringDepositFrequencyLabel: 'Recurring Deposit Period',
                calculateButton: 'Calculate',
                recurringDepositFrequencies: [
                    { periodTitle: 'Weekly', period: 52},
                    { periodTitle: 'Biweekly', period: 26 },
                    { periodTitle: 'Monthly', period: 12 }
                ]
            },
            'zh-hant': {    // Traditional / Cantonese
                heading: '試算存款利息有多少',
                selectProductLabel: '選擇儲蓄週期',
                initialDepositLabel: '儲蓄金額',
                initialDepositMinimum: '請輸入大於最低入金金額的金額',
                recurringDepositHeading: '看看你能賺多少錢...',
                recurringDepositLabel: '循環儲蓄金額',
                recurringDepositFrequencyLabel: '循環儲蓄頻率',
                calculateButton: '試算',
                recurringDepositFrequencies: [
                    { periodTitle: '每周', period: 52 },
                    { periodTitle: '每兩周', period: 26 },
                    { periodTitle: '每月', period: 12 }
                ]
            },
            'zh-hans': {    // Simplified / Mandarin
                heading: '试算存款利息有多少',
                selectProductLabel: '选择储蓄周期',
                initialDepositLabel: '储蓄金额',
                initialDepositMinimum: '请输入大于最低入金金额的金额',
                recurringDepositHeading: '看看你能赚多少钱...',
                recurringDepositLabel: '循环储蓄金额',
                recurringDepositFrequencyLabel: '循环储蓄频率',
                calculateButton: '试算',
                recurringDepositFrequencies: [
                    { periodTitle: '每周', period: 52 },
                    { periodTitle: '每两周', period: 26 },
                    { periodTitle: '每月', period: 12 }
                ]
            }
        };
        this.minimumSize = .01;
        this.panel = true;
        this.type = 'rates'; // 'rates' | 'time-value' | 'time-value-recurring-deposit'
        this.dataTable = 'data-table'; // id of table

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.setLanguage = this.setLanguage.bind(this);
        this.setIninitialDepositValue = this.setIninitialDepositValue.bind(this);
        if (this.type.match(/recurring-deposit/)) {
            this.setRecurringDepositFrequencyValue = this.setRecurringDepositFrequencyValue.bind(this);
            this.setRecurringDepositValue = this.setRecurringDepositValue.bind(this);
        }
        this.updateUI = this.updateUI.bind(this);
        this.initProductComparison = this.initProductComparison.bind(this);
        return true;
    }

    clean() {
        for (let i = 0; i < this.addedNodes.length; i++) {
            this.addedNodes[i].remove();
        }
        for (let i = 0; i < this.nodeList.length; i++) {
            this.nodeList[i].classList.remove('visuallyhidden');
            document.getElementById(this.dataTable).classList.remove('visuallyhidden');
        }
        return true;
    }

    init() {
        this.bindCallbacks();
        this.logTime('bindCallbacks');
        if (!this.initProductComparison()) return false;
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    setLanguage() {
        for (let language in this.languages) {
            if (language.toLowerCase() === document.documentElement.lang.toLowerCase()) { this.language = document.documentElement.lang.toLowerCase(); }
        }
        if (!this.language) { this.language = 'en'; };
    }

    setIninitialDepositValue() {
        let newValue = '';
        let selectValue = parseFloat(this.data[this.select.value].Initial_Deposit.toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, ''));
        if (window.sessionStorage.getItem('initial-deposit')) {
            let sessionInitialDeposit = parseFloat(window.sessionStorage.getItem('initial-deposit').toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, ''));
            if (sessionInitialDeposit >= selectValue) {
                newValue = sessionInitialDeposit;
                this.initialDepositMinimumError.classList.remove('active');
            } else {
                newValue = selectValue;
                window.sessionStorage.setItem('initial-deposit', selectValue);
                this.initialDepositMinimumError.classList.add('active');
            }
        } else {
            newValue = selectValue;
            this.initialDepositMinimumError.classList.remove('active');
        }
        this.initialDeposit.value = '$' + newValue.toLocaleString('en');
        this.initialDepositMinimumError.innerHTML = this.languages[this.language].initialDepositMinimum + " $" + this.data[this.select.value].Initial_Deposit.toString().trim().replace(/&nbsp;/, '').replace(/\$/, '').replace(/\%/, '').replace(/\,/, '').trim();
    }

    setRecurringDepositValue() {
        let newValue = '';
        let selectValue = parseFloat(this.data[this.select.value].Recurring_Deposit_Amount.toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, ''));
        if (window.sessionStorage.getItem('recurring-deposit')) {
            let sessionRecurringDeposit = parseFloat(window.sessionStorage.getItem('recurring-deposit').toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, ''));
            if (this.debug) {
                console.log("Found 'recurring-deposit' in sessionStorage: " + sessionRecurringDeposit);
            }
            newValue = sessionRecurringDeposit;
        } else {
            newValue = selectValue;
        }
        this.recurringDeposit.value = '$' + newValue.toLocaleString('en');
    }

    setRecurringDepositFrequencyValue() {
        let newValue = '';
        let selectValue = parseFloat(this.data[this.select.value].Recurring_Deposit_Frequency.toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, ''));
        if (window.sessionStorage.getItem('recurring-deposit-frequency')) {
            let sessionRecurringDepositFrequency = parseFloat(window.sessionStorage.getItem('recurring-deposit-frequency').toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, ''));
            newValue = sessionRecurringDepositFrequency;
        } else {
            newValue = selectValue;
        }
        this.recurringDepositFrequencySelect.value = newValue;
    }

    formulaEvaluation(str, dataObj, name) {
        let formula = str;
        if (this.debug) {
            console.group('The formulas for ' + name);
            console.log(formula);
        }
        let operatios = /[+\-\*\/\(\)]/g;
        let keys = formula.split(operatios);
        keys.forEach(function (k) {
            if (k && !isNaN(dataObj[k])) {
                formula = formula.replace(k, dataObj[k]);
            }
        });
        if (this.debug) {
            console.log(formula);
            console.groupEnd();
        }
        if (!formula.match(/[a-z]+/)) {
            return Number(parseInt(eval(formula))).toLocaleString('en');
        } else {
            return false;
        }
    }

    updateUI(event) {
        if (event) {
            if (typeof event.target !== 'undefined') {
                this.select.value = event.target.value;
            }
        }
        this.name.innerHTML = this.data[this.select.value].Name; 
        //if (this.type === 'rates' || this.type === 'time-value') {
            this.rate.innerHTML = this.data[this.select.value].Bank_Rate.trim().replace(/&nbsp;/, '').replace(/%/, '');
        //}
        this.data[this.select.value].labels = [];
        if (this.data[this.select.value].Bank_Rate !== '') {
            this.data[this.select.value].labels.push(this.data[this.select.value].Bank_Name);
        }
        if (this.data[this.select.value].Competitor_1_Rate !== '') {
            this.data[this.select.value].labels.push(this.data[this.select.value].Competitor_1_Name);
        }
        if (this.data[this.select.value].Competitor_2_Rate !== '') {
            this.data[this.select.value].labels.push(this.data[this.select.value].Competitor_2_Name);
        }
        if (this.data[this.select.value].Competitor_3_Rate !== '') {
            this.data[this.select.value].labels.push(this.data[this.select.value].Competitor_3_Name);
        }
        if (this.data[this.select.value].Competitor_4_Rate !== '') {
            this.data[this.select.value].labels.push(this.data[this.select.value].Competitor_4_Name);
        }
        this.data[this.select.value].rates = [];
        this.data[this.select.value].timeValue = [];
        if (this.type.match(/time-value/)) {
            let data = {};
            let dataWithKeyName = {};
            const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            let keyIndex = 0;
            this.setIninitialDepositValue();
            if (this.type.match(/recurring-deposit/)) {
                this.setRecurringDepositValue();
                this.setRecurringDepositFrequencyValue();                
            }
            for (let key in this.data[this.select.value]) {
                if (typeof this.data[this.select.value][key] !== 'undefined') {
                    if (key === 'Initial_Deposit' && window.sessionStorage.getItem('initial-deposit')) {
                        if (this.debug) {
                            console.log('Using user provided "Initial-Deposit" of ' + this.initialDeposit.value);
                            console.log(this.initialDeposit);
                        }
                        data[alphabet[keyIndex]] = parseFloat(this.initialDeposit.value.toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, ''));
                        dataWithKeyName[key] = this.initialDeposit.value;
                    } else if (key === 'Recurring_Deposit_Frequency' && window.sessionStorage.getItem('recurring-deposit-frequency')) {
                        if (this.debug) {
                            console.log('Using user provided "Recurring-Deposit-Frequency" of ' + this.recurringDepositFrequencySelect.value);
                            console.log(this.recurringDepositFrequency);
                        }
                        data[alphabet[keyIndex]] = parseFloat(this.recurringDepositFrequencySelect.value.toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, ''));
                        dataWithKeyName[key] = this.recurringDepositFrequencySelect.value;
                    } else if (key === 'Recurring_Deposit_Amount' && window.sessionStorage.getItem('recurring-deposit')) {
                        if (this.debug) {
                            console.log('Using user provided "Recurring-Deposit" of ' + this.recurringDeposit.value);
                            console.log(this.recurringDeposit);
                        }
                        data[alphabet[keyIndex]] = parseFloat(this.recurringDeposit.value.toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, ''));
                        dataWithKeyName[key] = this.recurringDeposit.value;
                    } else {
                        data[alphabet[keyIndex]] = parseFloat(this.data[this.select.value][key].toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, ''));
                        dataWithKeyName[key] = parseFloat(this.data[this.select.value][key].toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, ''));
                    }
                } else {
                    data[alphabet[keyIndex]] = 'undefined';
                    dataWithKeyName[key] = 'undefined';
                }
                keyIndex++;
            }
            if (this.debug) {
                console.log(data);
                console.log(dataWithKeyName);
            }
            if (this.data[this.select.value].Bank_Rate.trim().replace(/&nbsp;/, '').replace(/%/, '') !== '') {
                this.data[this.select.value].rates.push(this.data[this.select.value].Bank_Rate.trim().replace(/&nbsp;/, '').replace(/%/, ''));
            }
            let formula = this.data[this.select.value].Bank_Formula.trim().toLowerCase();
            let bankFormulaEvaluated = this.formulaEvaluation(formula, data, 'Bank');
            if (bankFormulaEvaluated !== false) {
                this.data[this.select.value].timeValue.push(bankFormulaEvaluated);
            }
            if (this.data[this.select.value].Competitor_1_Rate.trim().replace(/&nbsp;/, '').replace(/%/, '') !== '') {
                this.data[this.select.value].rates.push(this.data[this.select.value].Competitor_1_Rate.trim().replace(/&nbsp;/, '').replace(/%/, ''));
            }
            formula = this.data[this.select.value].Competitor_1_Formula.trim().toLowerCase();
            let competitor1FormulaEvaluated = this.formulaEvaluation(formula, data, 'Competitor 1');
            if (competitor1FormulaEvaluated !== false) {
                this.data[this.select.value].timeValue.push(competitor1FormulaEvaluated);
            }
            if (this.data[this.select.value].Competitor_2_Rate.trim().replace(/&nbsp;/, '').replace(/%/, '') !== '') {
                this.data[this.select.value].rates.push(this.data[this.select.value].Competitor_2_Rate.trim().replace(/&nbsp;/, '').replace(/%/, ''));
            }
            formula = this.data[this.select.value].Competitor_2_Formula.trim().toLowerCase();
            let competitor2FormulaEvaluated = this.formulaEvaluation(formula, data, 'Competitor 2');
            if (competitor2FormulaEvaluated !== false) {
                this.data[this.select.value].timeValue.push(competitor2FormulaEvaluated);
            }
            if (this.data[this.select.value].Competitor_3_Rate.trim().replace(/&nbsp;/, '').replace(/%/, '') !== '') {
                this.data[this.select.value].rates.push(this.data[this.select.value].Competitor_3_Rate.trim().replace(/&nbsp;/, '').replace(/%/, ''));
            }
            formula = this.data[this.select.value].Competitor_3_Formula.trim().toLowerCase();
            let competitor3FormulaEvaluated = this.formulaEvaluation(formula, data, 'Competitor 3');
            if (competitor3FormulaEvaluated !== false) {
                this.data[this.select.value].timeValue.push(competitor3FormulaEvaluated);
            }
            if (this.data[this.select.value].Competitor_4_Rate.trim().replace(/&nbsp;/, '').replace(/%/, '') !== '') {
                this.data[this.select.value].rates.push(this.data[this.select.value].Competitor_4_Rate.trim().replace(/&nbsp;/, '').replace(/%/, ''));
            }
            formula = this.data[this.select.value].Competitor_4_Formula.trim().toLowerCase();
            let competitor4FormulaEvaluated = this.formulaEvaluation(formula, data, 'Competitor 4');
            if (competitor4FormulaEvaluated !== false) {
                this.data[this.select.value].timeValue.push(competitor4FormulaEvaluated);
            }
            if (this.debug) {
                if (this.data[this.select.value].labels.length !== this.data[this.select.value].timeValue.length) {
                    console.group('%cThe "data" array and the "labels" array should be equal length', 'color:red;');
                    console.log(this.data[this.select.value].labels);
                    console.log(this.data[this.select.value].timeValue);
                    console.log(this.data[this.select.value].rates);
                    console.groupEnd();
                }
            }
            let chartType = 'column';
            let chartQuerySelectorAll = '[class*= "Table-Product-Comparison"][class*= "time-value"]:not([class*= "-recurring-deposit"]) [class*="Table-Chart"]';
            if (this.type.match(/recurring-deposit/)) {
                chartType = 'bar';
                chartQuerySelectorAll = '[class*= "Table-Product-Comparison"][class*= "time-value-recurring-deposit"] [class*="Table-Chart"]';
            }
            const chart = new Chart({
                querySelectorAll: chartQuerySelectorAll,
                type: chartType,
                data: {
                    labels: this.data[this.select.value].labels,
                    datasets: [{
                        legend: 'Interest Earned',
                        labels: true,
                        data: this.data[this.select.value].timeValue
                    }]
                },
                settings: {
                    plugins: {
                        tooltip: true
                    },
                    scales: {
                        y: {
                            display: true
                        },
                        x: {
                            display: true
                        }
                    }
                }
            });
            if (this.type.match(/recurring-deposit/)) {
                let charts = document.querySelectorAll(chartQuerySelectorAll);
                charts.forEach(chart => {
                    let rows = chart.querySelectorAll('tbody > tr');
                    rows.forEach((row, index) => {
                        let dataElement = row.querySelector('td > span.data');
                        let rateSpan = document.createElement('span');
                        rateSpan.classList.add('rate');
                        rateSpan.innerHTML = this.data[this.select.value].rates[index];
                        dataElement.append(rateSpan);
                    });
                });
            }
                
            
        } else {
            if (this.data[this.select.value].Bank_Rate.trim().replace(/&nbsp;/, '').replace(/%/, '') !== '') {
                this.data[this.select.value].rates.push(this.data[this.select.value].Bank_Rate.trim().replace(/&nbsp;/, '').replace(/%/, ''));
            }
            if (this.data[this.select.value].Competitor_1_Rate.trim().replace(/&nbsp;/, '').replace(/%/, '') !== '') {
                this.data[this.select.value].rates.push(this.data[this.select.value].Competitor_1_Rate.trim().replace(/&nbsp;/, '').replace(/%/, ''));
            }
            if (this.data[this.select.value].Competitor_2_Rate.trim().replace(/&nbsp;/, '').replace(/%/, '') !== '') {
                this.data[this.select.value].rates.push(this.data[this.select.value].Competitor_2_Rate.trim().replace(/&nbsp;/, '').replace(/%/, ''));
            }
            if (this.data[this.select.value].Competitor_3_Rate.trim().replace(/&nbsp;/, '').replace(/%/, '') !== '') {
                this.data[this.select.value].rates.push(this.data[this.select.value].Competitor_3_Rate.trim().replace(/&nbsp;/, '').replace(/%/, ''));
            }
            if (this.data[this.select.value].Competitor_4_Rate.trim().replace(/&nbsp;/, '').replace(/%/, '') !== '') {
                this.data[this.select.value].rates.push(this.data[this.select.value].Competitor_4_Rate.trim().replace(/&nbsp;/, '').replace(/%/, ''));
            }
            const chart = new Chart({
                querySelectorAll: '[class*= "Table-Product-Comparison"][class*= "rates"] [class*="Table-Chart"]',
                type: 'column',
                data: {
                    labels: this.data[this.select.value].labels,
                    datasets: [{
                        legend: 'Interest Rates',
                        labels: true,
                        data: this.data[this.select.value].rates
                    }]
                },
                settings: {
                    plugins: {
                        tooltip: true
                    },
                    scales: {
                        y: {
                            display: true
                        },
                        x: {
                            display: true
                        }
                    }
                }
            });
        }
        this.disclaimerSection.innerHTML = this.data[this.select.value].Disclaimer;
        if (event) {
            if (typeof event.target !== 'undefined') {
                this.select.value = event.target.value;
            } else {
                this.range.value = this.select.value;
            }
        }
        return true;
    }

    controlsSectionButtonClick() {
        this.updateUI();
        return false;
    }

    initProductComparison() {
        this.nodeList = document.querySelectorAll(this.querySelectorAll);
        if (!document.getElementById(this.dataTable)) { return false; }
        this.setLanguage();
        for (let i = 0; i < this.nodeList.length; i++) {
            this.nodeList[i].classList.add('visuallyhidden');
            document.getElementById(this.dataTable).classList.add('visuallyhidden');
            let tableProductComparison = document.createElement('table');
            if (this.panel === true) {
                tableProductComparison.classList.add('Table-Product-Comparison-Panel');
            } else {
                tableProductComparison.classList.add('Table-Product-Comparison');
            }
            tableProductComparison.classList.add(this.type);
            let tableProductComparisonTbody = document.createElement('tbody');
            tableProductComparison.append(tableProductComparisonTbody);
            let tableProductComparisonTr = document.createElement('tr');
            tableProductComparisonTbody.append(tableProductComparisonTr);
            let tableProductComparisonTd = document.createElement('td');
            tableProductComparisonTr.append(tableProductComparisonTd);
            this.heading = document.createElement('h3');
            this.heading.classList.add('heading');
            if (this.type === 'rates' || this.type === 'time-value') {
                this.heading.innerHTML = this.languages[this.language].heading;
            } else if (this.type === 'time-value-recurring-deposit') {
                this.heading.innerHTML = this.languages[this.language].recurringDepositHeading;
            }
            tableProductComparisonTd.append(this.heading);
            this.name = document.createElement('h4');
            this.name.classList.add('name');
            this.name.innerHTML = 'loading';
            tableProductComparisonTd.append(this.name);
            //if (this.type === 'rates' || this.type === 'time-value') {
                let rateParagraph = document.createElement('p');
                rateParagraph.classList.add('rate-container');
                rateParagraph.innerHTML = '<span class="percentage">%</span><span class="apy">APY</span>';
                this.rate = document.createElement('span');
                this.rate.classList.add('rate');
                this.rate.innerHTML = '3.60';
                rateParagraph.prepend(this.rate);
                tableProductComparisonTd.append(rateParagraph);
            //}
            let form = document.createElement('form');
            form.classList.add('ajax-form');
            form.classList.add('validate-form');
            form.method = 'post';
            let section = document.createElement('section');
            form.append(section);
            let selectLabel = document.createElement('label');
            selectLabel.classList.add('name-select');
            if (this.type === 'rates' || this.type.match(/time-value/)) {
                selectLabel.classList.add('visuallyhidden');
            };
            section.append(selectLabel);
            this.select = document.createElement('select');
            this.select.name = 'name';
            selectLabel.append(this.select);
            let selectLabelSpan = document.createElement('span');
            selectLabelSpan.classList.add('label');
            selectLabelSpan.innerHTML = this.languages[this.language].selectProductLabel;
            selectLabel.append(selectLabelSpan);
            this.getData();
            for (let product in this.data) {
                let option = document.createElement('option');
                option.innerHTML = this.data[product].Name;
                option.value = product;
                this.select.append(option);
            }
            this.select.addEventListener('input', (function () {
                this.updateUI('select');
            }).bind(this));
            let rangeLabel = document.createElement('label');
            rangeLabel.classList.add('range');
            section.append(rangeLabel);
            this.range = document.createElement('input');
            this.range.type = 'range';
            this.range.max = this.data.length - 1;
            this.range.value = '0';
            this.range.addEventListener('input', ((event) => {
                this.updateUI(event);
            }).bind(this));
            rangeLabel.append(this.range);
            this.rangeLabelSpan = document.createElement('span');
            this.rangeLabelSpan.classList.add('label');
            this.rangeLabelSpan.innerHTML = this.languages[this.language].selectProductLabel;     
            rangeLabel.append(this.rangeLabelSpan);
            if (this.type.match(/time-value/)) {
                let initialDepositLabel = document.createElement('label');
                section.append(initialDepositLabel);
                this.initialDeposit = document.createElement('input');
                this.initialDeposit.type = 'text';
                this.initialDeposit.name = 'initial-deposit';
                if (window.sessionStorage.getItem('initial-deposit')) {
                    this.initialDeposit.value = window.sessionStorage.getItem('initial-deposit');
                }
                this.initialDeposit.pattern = '[0-9\.\,\$]+';
                this.initialDeposit.classList.add('currency');
                this.initialDeposit.addEventListener('click', ((event) => {
                    this.initialDepositSet = true;
                }).bind(this));
                this.initialDeposit.addEventListener('change', ((event) => {
                    if (this.initialDepositSet === true) {
                        let currency = this.initialDeposit.value;
                        //let number = Number(currency.replace(/[^0-9\.]+/g, ""));
                        let number = Number(parseFloat(currency.toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, '')));
                        window.sessionStorage.setItem('initial-deposit', number);
                        this.initialDeposit.value = '$' + number.toLocaleString('en');
                        if (this.debug) {
                            console.log('"initial-deposit" set to ' + number + ' by user for this session.');
                        }
                    }
                }).bind(this));
                initialDepositLabel.append(this.initialDeposit);
                let initialDepositLabelSpan = document.createElement('span');
                initialDepositLabelSpan.classList.add('label');
                initialDepositLabelSpan.innerHTML = this.languages[this.language].initialDepositLabel;
                initialDepositLabel.append(initialDepositLabelSpan);
                this.initialDepositMinimumError = document.createElement('p');
                this.initialDepositMinimumError.classList.add('error');
                this.initialDepositMinimumError.classList.add('fa-info-circle');
                this.initialDepositMinimumError.innerHTML = this.languages[this.language].initialDepositMinimum + " $" + this.initialDeposit.value;
                section.append(this.initialDepositMinimumError);
                if (this.type.match(/recurring-deposit/)) {
                    let recurringDepositLabel = document.createElement('label');
                    section.append(recurringDepositLabel);
                    this.recurringDeposit = document.createElement('input');
                    this.recurringDeposit.type = 'text';
                    this.recurringDeposit.name = 'recurring-deposit';
                    if (window.sessionStorage.getItem('recurring-deposit')) {
                        this.recurringDeposit.value = window.sessionStorage.getItem('recurring-deposit');
                    } 
                    this.recurringDeposit.pattern = '[0-9\.\,\$]+';
                    this.recurringDeposit.classList.add('currency');
                    this.recurringDeposit.addEventListener('click', ((event) => {
                        this.recurringDepositSet = true;
                    }).bind(this));
                    this.recurringDeposit.addEventListener('change', ((event) => {
                        if (this.recurringDepositSet === true) {
                            let currency = this.recurringDeposit.value;
                            let number = Number(parseFloat(currency.toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, '')));
                            window.sessionStorage.setItem('recurring-deposit', number);
                            this.recurringDeposit.value = '$' + number.toLocaleString('en');
                            if (this.debug) {
                                console.log('"recurring-deposit" set to ' + number + ' by user for this session.');
                            }
                        }
                    }).bind(this));
                    recurringDepositLabel.append(this.recurringDeposit);
                    let recurringDepositLabelSpan = document.createElement('span');
                    recurringDepositLabelSpan.classList.add('label');
                    recurringDepositLabelSpan.innerHTML = this.languages[this.language].recurringDepositLabel;
                    recurringDepositLabel.append(recurringDepositLabelSpan);
                    let recurringDepositFrequencySelectLabel = document.createElement('label');
                    recurringDepositFrequencySelectLabel.classList.add('recurring-deposit-period-select');
                    recurringDepositFrequencySelectLabel.classList.add('valid');
                    section.append(recurringDepositFrequencySelectLabel);
                    this.recurringDepositFrequencySelect = document.createElement('select');
                    this.recurringDepositFrequencySelect.name = 'recurring-deposit-period';
                    recurringDepositFrequencySelectLabel.append(this.recurringDepositFrequencySelect);
                    let recurringDepositFrequencySelectLabelSpan = document.createElement('span');
                    recurringDepositFrequencySelectLabelSpan.classList.add('label');
                    recurringDepositFrequencySelectLabelSpan.innerHTML = this.languages[this.language].recurringDepositFrequencyLabel;
                    recurringDepositFrequencySelectLabel.append(recurringDepositFrequencySelectLabelSpan);
                    this.getData();
                    for (let recurringDepositFrequency in this.languages[this.language].recurringDepositFrequencies) {
                        let recurringDepositFrequencyOption = document.createElement('option');
                        recurringDepositFrequencyOption.innerHTML = this.languages[this.language].recurringDepositFrequencies[recurringDepositFrequency].periodTitle;
                        recurringDepositFrequencyOption.value = this.languages[this.language].recurringDepositFrequencies[recurringDepositFrequency].period;
                        this.recurringDepositFrequencySelect.append(recurringDepositFrequencyOption);
                    }
                    if (window.sessionStorage.getItem('recurring-deposit-frequency')) {
                        this.recurringDepositFrequencySelect.value = window.sessionStorage.getItem('recurring-deposit-frequency');
                    } else {
                        this.recurringDepositFrequencySelect.querySelector('option').setAttribute('selected', true);
                    }
                    this.recurringDepositFrequencySelect.addEventListener('click', ((event) => {
                        this.recurringDepositFrequencySet = true;
                    }).bind(this));
                    this.recurringDepositFrequencySelect.addEventListener('change', ((event) => {
                        if (this.recurringDepositFrequencySet === true) {
                            let currency = this.recurringDepositFrequencySelect.value;
                            //let number = Number(currency.replace(/[^0-9\.]+/g, ""));
                            let number = Number(parseFloat(currency.toString().trim().replace(/&nbsp;/, '').replace(/\$/g, '').replace(/\%/g, '').replace(/\,/g, '')));
                            window.sessionStorage.setItem('recurring-deposit-frequency', number);
                            this.recurringDepositFrequencySelect.value = number;
                            if (this.debug) {
                                console.log('"recurring-deposit-frequency" set to ' + number + ' by user for this session.');
                            }
                        }
                    }).bind(this));
                }
            }
            this.chartSection = document.createElement('section');
            this.chartSection.classList.add('Table-Chart');
            this.chartSection.innerHTML = 'Loading';
            if (this.type === 'rates') {
                form.append(this.chartSection);
            }
            this.disclaimerSection = document.createElement('section');
            this.disclaimerSection.classList.add('disclaimer');
            this.disclaimerSection.innerHTML = 'Loading';
            form.append(this.disclaimerSection);
            if (this.type.match(/time-value/)) {
                let controlsSection = document.createElement('section');
                controlsSection.classList.add('controls');
                this.controlsSectionButton = document.createElement('button');
                controlsSection.append(this.controlsSectionButton);
                this.controlsSectionButton.type = 'submit';
                this.controlsSectionButton.name = 'submit';
                this.controlsSectionButton.classList.add('Button1');
                this.controlsSectionButton.innerHTML = this.languages[this.language].calculateButton;
                this.controlsSectionButton.addEventListener('click', (function (e) {
                    e.preventDefault();
                    this.controlsSectionButtonClick();
                }).bind(this));
                form.append(controlsSection);
            }
            tableProductComparisonTd.append(form);
            if (this.type.match(/time-value/)) {
                tableProductComparisonTd.append(this.chartSection);
            }
            this.nodeList[i].after(tableProductComparison);
            this.addedNodes.push(tableProductComparison);
            this.updateUI();
        }
        return true;
    }

    getData() {
        let dataTableElement = document.getElementById(this.dataTable);
        if (!dataTableElement) { return false; }
        this.response = jQuery(dataTableElement).tableToJSON();
        this.data = this.response[0].tableToJSON.parsed.data;
        for (let product in this.data) {
            for (let key in this.data[product]) {
                if (this.data[product][key] === "&nbsp;") {
                    this.data[product][key] = '';
                    if (this.debug) {
                        console.log('%cNonbreaking space replaced', 'color: red;');
                    }
                }
            }
        }
        return true;
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "Expander":
                this.clean();
                this.initProductComparison();
                break;
            case "CMSInclude":
                this.clean();
                this.initProductComparison();
                break;
            case "LanguageSelector":
                this.clean();
                this.initProductComparison();
                break;
        }
    }
}

// Validate Form 2.0.1 by JP Larson, Copyright 2021 Fiserv. All rights reserved.
class ValidateForm extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.querySelectorAll = ".validate-form";
        this.validationTemplate = `<span class="validation"></span>`;
        this.errorTemplate = `<span class="error">Please fill out this field.</span>`;
        this.validClass = "valid";
        this.invalidClass = "invalid";
        this.requiredClass = "required";
        this.focus = true;
        this.scroll = true;
        this.scrollPosition = 0.3;
        this.eventListeners = ["click", "blur", "input", "change"];
        this.validateDelay = 500;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        this.logTime(`Init End`);
    }

    set custom(f) {
        this._custom = f;
        if (!this.formList) return;
        for (let i = 0; i < this.formList.length; i++) {
            const form = this.formList[i];
            form.custom = f;
        }
    }

    get custom() {
        return this._custom;
    }

    isNewForm(node) {
        if (!this.formList) return true;
        for (let i = 0; i < this.formList.length; i++) {
            const formNode = this.formList[i].node;
            if (node === formNode) return false;
        }
        return true;
    }

    setFormList(nodeList) {
        nodeList = nodeList ? nodeList : this.nodeList;
        for (let i = 0; i < nodeList.length; i++) {
            const node = nodeList[i];
            if (!this.formList) this.formList = [];
            if (!this.isNewForm(node)) continue;
            const vForm = new VForm(this, node);
            this.formList.push(vForm);
        }
        if (!this.formList) return false;
        return true;
    }

    init() {
        this.nodeList = document.querySelectorAll(this.querySelectorAll);
        if (!this.nodeList.length) {
            delete this.nodeList;
            return false;
        }
        this.setFormList();
    }

    clean() {
        for (let i = 0; i < this.formList.length; i++) {
            const form = this.formList[i];
            form.clean();
        }
        delete this.formList;
    }

    includeInit(CMSInclude) {
        for (let i = 0; i < CMSInclude.includeList.length; i++) {
            const nodeList = CMSInclude.includeList[i].html;
            for (let k = 0; k < nodeList.length; k++) {
                const node = nodeList[k];
                const newNodeList = node.parentNode.querySelectorAll(this.querySelectorAll);
                this.setFormList(newNodeList);
            }
        }
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "CMSInclude":
                if (obj.addedNodes) this.includeInit(obj);
                break;
        }
    }
}

class VForm {
    constructor(validateForm, node) {
        this.bindFunctions();
        this.validateForm = validateForm;
        this.node = node;
        this.checkValidity();
        this.custom = validateForm.custom;
    }

    get node() {
        return this._node;
    }

    get submit() {
        if (!this._submit) return;
        return this._submit;
    }

    set node(node) {
        this._node = node;
        node.addEventListener("reset", this.resetCallback);
        this.submit = node.querySelector("[type=submit]");
        const labels = node.querySelectorAll("label");
        const fieldsets = node.querySelectorAll("fieldset");
        this.setLabelList(labels);
        this.setFieldsetList(fieldsets);
    }

    set submit(node) {
        if (!node) {
            this.validateForm.logError("No submit button found");
            return;
        }
        node.onclick = this.submitCallback;
        this._submit = node;
    }

    bindFunctions() {
        this.submitCallback = this.submitCallback.bind(this);
        this.resetCallback = this.resetCallback.bind(this);
    }

    checkValidity(submit) {
        for (let i = 0; i < this.labelList.length; i++) {
            const label = this.labelList[i];
            const validity = label.checkValidity(submit);
            if (!validity) return false;
        }
        if ("function" === typeof this.custom) return this.custom(this);
        return true;
    }

    clean() {
        for (let i = 0; i < this.labelList.length; i++) {
            const label = this.labelList[i];
            label.clean();
        }
        for (let i = 0; i < this.fieldsetList.length; i++) {
            const fieldset = this.fieldsetList[i];
            fieldset.clean();
        }
        this.node.removeEventListener("reset", this.resetCallback);
        this.submit.onclick = null;
        return true;
    }

    resetCallback(e) {
        for (let i = 0; i < this.labelList.length; i++) {
            const label = this.labelList[i];
            label.removeInvalid();
            label.removeValid();
        }
        if (!this.fieldsetList) return;
        for (let i = 0; i < this.fieldsetList.length; i++) {
            const fieldset = this.fieldsetList[i];
            fieldset.removeInvalid();
            fieldset.removeValid();
        }
    }

    setFieldsetList(nodeList) {
        for (let i = 0; i < nodeList.length; i++) {
            const node = nodeList[i];
            if (!this.fieldsetList) this.fieldsetList = [];
            const vFieldset = new VFieldset(this.validateForm, this, node);
            this.fieldsetList.push(vFieldset);
        }
        if (!this.fieldsetList) return false;
        return true;
    }

    setLabelList(nodeList) {
        for (let i = 0; i < nodeList.length; i++) {
            const node = nodeList[i];
            if (!this.labelList) this.labelList = [];
            const vLabel = new VLabel(this.validateForm, this, node);
            this.labelList.push(vLabel);
        }
        if (!this.labelList) return false;
        return true;
    }

    submitCallback(e) {
        return this.checkValidity(true);
    }

}

class VParent {
    constructor(validateForm, form, node) {
        this.validateForm = validateForm;
        this.validationTemplate = validateForm.validationTemplate;
        this.errorTemplate = validateForm.errorTemplate;
        this.form = form;
        this.node = node;
        this.appendNodeList(this.validationTemplate);
        if (!this.node.querySelector(".error")) this.appendNodeList(this.errorTemplate);
    }

    get validationTemplate() {
        return this._validationTemplate;
    }

    get errorTemplate() {
        return this._errorTemplate;
    }

    set errorTemplate(html) {
        this._errorTemplate = this.validateForm.parseHTML(html);
    }

    set validationTemplate(html) {
        this._validationTemplate = this.validateForm.parseHTML(html);
    }

    addClass(className) {
        const run = () => {
            this.node.classList.add(className);
        };
        requestAnimationFrame(run);
        return true;
    }

    addInvalid() {
        if (this.fieldset) {
            this.fieldset.removeValid();
            this.fieldset.addInvalid();
            return true;
        }
        this.addClass(this.validateForm.invalidClass);
        this.focus();
        this.scrollTo();
        return true;
    }

    addValid() {
        if (this.fieldset) {
            this.fieldset.removeInvalid();
            this.fieldset.addValid();
            return true;
        }
        this.removeInvalid();
        return this.addClass(this.validateForm.validClass);
    }

    appendNodeList(nodeList) {
        for (let i = 0; i < nodeList.length; i++) {
            const node = nodeList[i];
            const run = () => {
                this.node.appendChild(node);
            };
            requestAnimationFrame(run);
        }
    }

    clean() {
        if ("function" === typeof this.removeEvents) this.removeEvents();
        this.removeInvalid();
        this.removeValid();
        this.removeNodeList(this.validationTemplate);
        this.removeNodeList(this.errorTemplate);
    }

    focus() {
        if (!this.validateForm.focus) return false;
        if (this.input) this.input.focus();
        return true;
    }

    removeClass(className) {
        const run = () => {
            this.node.classList.remove(className);
        };
        requestAnimationFrame(run);
        return true;
    }

    removeInvalid() {
        return this.removeClass(this.validateForm.invalidClass);
    }

    removeNodeList(nodeList) {
        for (let i = 0; i < nodeList.length; i++) {
            const node = nodeList[i];
            node.remove();
        }
    }

    removeValid() {
        return this.removeClass(this.validateForm.validClass);
    }

    scrollTo() {
        if (!this.validateForm.scroll) return false;
        const nodeY = this.node.getBoundingClientRect().top;
        const offsetY = window.innerHeight * this.validateForm.scrollPosition;
        const scrollY = nodeY - offsetY;
        const scroll = () => {
            window.scrollBy(0, scrollY);
        };
        requestAnimationFrame(scroll);
        return true;
    }
}

class VFieldset extends VParent {
    constructor(validateForm, form, node) {
        super(validateForm, form, node);
        this.validateForm = validateForm;
        this.form = form;
        this.node = node;
        this.labelList = node.querySelectorAll("label");
        this.addRequired();
    }

    get labelList() {
        return this._labelList;
    }

    set labelList(nodeList) {
        for (let i = 0; i < nodeList.length; i++) {
            const node = nodeList[i];
            if (!this._labelList) this._labelList = [];
            for (let k = 0; k < this.form.labelList.length; k++) {
                const vLabel = this.form.labelList[k];
                if (node !== vLabel.node) continue;
                vLabel.fieldset = this;
                this._labelList.push(vLabel);
            }
        }
        if (!this._labelList) return false;
        return true;
    }

    addRequired() {
        for (let i = 0; i < this.labelList.length; i++) {
            const label = this.labelList[i];
            if (label.input.required) return this.addClass(this.validateForm.requiredClass);
        }
        return false;
    }

}

class VLabel extends VParent {
    constructor(validateForm, form, node) {
        super(validateForm, form, node);
        this.bindFunctions();
        this.input = node.querySelector("input, select, textarea");
        this.input.validateForm = this;
        this.addRequired();
        this.addEvents();
    }

    addEvents() {
        for (let i = 0; i < this.validateForm.eventListeners.length; i++) {
            const event = this.validateForm.eventListeners[i];
            this.input.addEventListener(event, this.eventCallback);
        }
    }

    addRequired() {
        if (!this.input.required) return false;
        return this.addClass(this.validateForm.requiredClass);
    }

    bindFunctions() {
        this.eventCallback = this.eventCallback.bind(this);
    }

    checkValidity(submit) {
        this.removeValid();
        this.removeInvalid();
        if (this.input.disabled) return true;
        const validity = this.input.checkValidity();
        if (validity && this.input.type === "checkbox" && !this.input.checked) return true;
        if (validity && this.input.type === "radio" && !this.input.checked) return true;
        if (validity && this.input.value.length === 0) return true;
        if (validity) return this.addValid();
        if (submit) this.addInvalid();
        return false;
    }

    eventCallback(e) {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
            return this.checkValidity();
        }, this.validateForm.validateDelay);
    }

    removeEvents() {
        for (let i = 0; i < this.validateForm.eventListeners.length; i++) {
            const event = this.validateForm.eventListeners[i];
            this.node.removeEventListener(event, this.eventCallback);
        }
    }
}

const validateForm = new ValidateForm();

// Personalization 3.0.2 by Jesse Fowler, Copyright 2015 Fiserv. All rights reserved.
class Personalization extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.addedNodes = [];
        this.nodeList = document.querySelectorAll('span.firstname');
        this.dateAndTimeNodeList = document.querySelectorAll('.date-and-time');
        this.dateShow = true;
        this.debug = false;
        this.displayPopupAutomatically = true;
        this.greetingEnable = true;
        this.greetingNodeList = document.querySelectorAll('.greeting');
        this.htmlClass = 'personalization-enabled';
        this.nameField = document.getElementById('personalizationName');
        this.personalizationEnable = true;
        this.popupDialog = document.getElementById('personalizationPopup1');
        this.popupForm = document.getElementById('personalizationForm');
        this.spans = [];
        this.storageName = 'personalizationFirstName';
        this.languages = {
            'en': {
                guest: 'Guest',
                pretext: " It's ",
                posttext: ".",
                greetingPreText: ", ",
                greetingPostText: ".",
                greetingGoodMorning: "Good morning",
                greetingGoodAfternoon: "Good afternoon",
                greetingGoodEvening: "Good evening",
                timeSegway: " at ",
                dayNamesSunday: "Sunday",
                dayNamesMonday: "Monday",
                dayNamesTuesday: "Tuesday",
                dayNamesWednesday: "Wednesday",
                dayNamesThursday: "Thursday",
                dayNamesFriday: "Friday",
                dayNamesSaturday: "Saturday",
                monthNamesJanuary: "January",
                monthNamesFebruary: "February",
                monthNamesMarch: "March",
                monthNamesApril: "April",
                monthNamesMay: "May",
                monthNamesJune: "June",
                monthNamesJuly: "July",
                monthNamesAugust: "August",
                monthNamesSeptember: "September",
                monthNamesOctober: "October",
                monthNamesNovember: "November",
                monthNamesDecember: "December"
            },
            'es': {
                guest: 'El socio',
                pretext: " Es ",
                posttext: ".",
                greetingPreText: ", ",
                greetingPostText: ".",
                greetingGoodMorning: "Buenos días",
                greetingGoodAfternoon: "Buenas tardes",
                greetingGoodEvening: "Buenas noches",
                timeSegway: " a las ",
                dayNamesSunday: "domingo",
                dayNamesMonday: "el lunes",
                dayNamesTuesday: "martes",
                dayNamesWednesday: "Miercoles",
                dayNamesThursday: "jueves",
                dayNamesFriday: "viernes",
                dayNamesSaturday: "sábado",
                monthNamesJanuary: "enero",
                monthNamesFebruary: "febrero",
                monthNamesMarch: "marzo",
                monthNamesApril: "abril",
                monthNamesMay: "mayo",
                monthNamesJune: "junio",
                monthNamesJuly: "julio",
                monthNamesAugust: "agosto",
                monthNamesSeptember: "septiembre",
                monthNamesOctober: "octubre",
                monthNamesNovember: "noviembre",
                monthNamesDecember: "diciembre"
            }
        };
        this.localStorageTest = 'personalizeMyFinancial';
        this.timeShow = true;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.setLanguage = this.setLanguage.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.greeting = this.greeting.bind(this);
        this.dateAndTime = this.dateAndTime.bind(this);
        this.personalizationInitialize = this.personalizationInitialize.bind(this);
        this.initPersonalization = this.initPersonalization.bind(this);
        return true;
    }

    clean() {
        if (this.hasOwnProperty('intervalProcess')) {
            clearInterval(this.intervalProcess);
        }
        for (let i = 0; i < this.addedNodes.length; i++) {
            this.addedNodes[i].remove();
        }
        document.getElementsByTagName('html')[0].classList.remove(this.htmlClass);
        return true;
    }

    init() {
        for (let i = 0; i < this.nodeList.length; i++) {
            this.spans.push(this.nodeList[i]);
        }
        if (!this.initPersonalization()) return false;
        this.bindCallbacks();
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    setLanguage() {
        for (let language in this.languages) {
            if (language.toLowerCase() === document.documentElement.lang.toLowerCase()) { this.language = document.documentElement.lang.toLowerCase(); }
        }
        if (!this.language) { this.language = 'en'; }
    }

    greeting() {
        if (!this.greetingEnable) { return false; }
        let greeting = "";
        let dateNow = new Date();
        let hourValue = dateNow.getHours();
        if (hourValue == 0) {
            greeting = this.languages[this.language].greetingGoodMorning;
        }
        else if (hourValue < 12) {
            greeting = this.languages[this.language].greetingGoodMorning;
        }
        else if (hourValue == 12) {
            greeting = this.languages[this.language].greetingGoodAfternoon;
        }
        else if (hourValue < 17) {
            greeting = this.languages[this.language].greetingGoodAfternoon;
        }
        else {
            greeting = this.languages[this.language].greetingGoodEvening;
        }
        for (let i = 0; i < this.greetingNodeList.length; i++) {
            let greetingElement = document.createElement('span');
            greetingElement.classList.add('personalization-greeting');
            let greetingTextNode = document.createTextNode(greeting);
            greetingElement.append(greetingTextNode);
            let greetingPreTextNode = document.createTextNode(this.languages[this.language].greetingPreText);
            greetingElement.append(greetingPreTextNode);
            if (this.greetingNodeList[i].querySelector('.firstname')) {
                let greetingNameSpan = document.createElement('a');
                greetingNameSpan.classList.add('firstname');
                greetingNameSpan.innerText = this.languages[this.language].guest;
                greetingElement.append(greetingNameSpan);
                this.spans.push(greetingNameSpan);
            }
            let greetingPostTextNode = document.createTextNode(this.languages[this.language].greetingPostText);
            greetingElement.append(greetingPostTextNode);

            this.greetingNodeList[i].before(greetingElement);
            this.addedNodes.push(greetingElement);
        }
    }

    dateAndTime() {
        let htmlstr = this.languages[this.language].pretext;
        let timeSegway = "";
        let dateNow = new Date();
        if (this.dateShow) {
            let dayNames = new Array(7);
            dayNames[0] = this.languages[this.language].dayNamesSunday;
            dayNames[1] = this.languages[this.language].dayNamesMonday;
            dayNames[2] = this.languages[this.language].dayNamesTuesday;
            dayNames[3] = this.languages[this.language].dayNamesWednesday;
            dayNames[4] = this.languages[this.language].dayNamesThursday;
            dayNames[5] = this.languages[this.language].dayNamesFriday;
            dayNames[6] = this.languages[this.language].dayNamesSaturday;
            let monthNames = new Array(12);
            monthNames[0] = this.languages[this.language].monthNamesJanuary;
            monthNames[1] = this.languages[this.language].monthNamesFebruary;
            monthNames[2] = this.languages[this.language].monthNamesMarch;
            monthNames[3] = this.languages[this.language].monthNamesApril;
            monthNames[4] = this.languages[this.language].monthNamesMay;
            monthNames[5] = this.languages[this.language].monthNamesJune;
            monthNames[6] = this.languages[this.language].monthNamesJuly;
            monthNames[7] = this.languages[this.language].monthNamesAugust;
            monthNames[8] = this.languages[this.language].monthNamesSeptember;
            monthNames[9] = this.languages[this.language].monthNamesOctober;
            monthNames[10] = this.languages[this.language].monthNamesNovember;
            monthNames[11] = this.languages[this.language].monthNamesDecember;
            let dayValue = dateNow.getDay();
            let dateText = dayNames[dayValue];
            let monthValue = dateNow.getMonth();
            dateText += " " + monthNames[monthValue];
            dateText += " " + dateNow.getDate();
            dateText += ", " + dateNow.getFullYear();
            let minuteValue = dateNow.getMinutes();
            if (minuteValue < 10) {
                minuteValue = "0" + minuteValue;
            }
            htmlstr += dateText;
            timeSegway = this.languages[this.language].timeSegway;
        }
        if (this.timeShow) {
            let hourValue = dateNow.getHours();
            let minuteValue = dateNow.getMinutes();
            if (minuteValue < 10) {
                minuteValue = "0" + minuteValue
            }
            let timeText = "";
            if (hourValue == 0) {
                timeText = timeSegway + (hourValue + 12) + ":" + minuteValue + " AM"
            }
            else if (hourValue < 12) {
                timeText = timeSegway + hourValue + ":" + minuteValue + " AM"
            }
            else if (hourValue == 12) {
                timeText = timeSegway + hourValue + ":" + minuteValue + " PM"
            }
            else if (hourValue < 17) {
                timeText = timeSegway + (hourValue - 12) + ":" + minuteValue + " PM"
            }
            else {
                timeText = timeSegway + (hourValue - 12) + ":" + minuteValue + " PM"
            }
            htmlstr += timeText;
        }
        let dateAndTimeNode = document.createElement('span');
        dateAndTimeNode.classList.add('personalization-date-and-time');
        dateAndTimeNode.innerHTML = htmlstr + this.languages[this.language].posttext;
        this.addedNodes.push(dateAndTimeNode);
        for (let i = 0; i < this.dateAndTimeNodeList.length; i++) {
            this.dateAndTimeNodeList[i].before(dateAndTimeNode);
        }
    }

    personalizationInitialize() {
        let personalizationFirstName = "";
        if (window.sessionStorage.getItem(this.storageName)) {
            personalizationFirstName = window.sessionStorage.getItem(this.storageName);
        }
        if (window.localStorage.getItem(this.storageName)) {
            personalizationFirstName = window.localStorage.getItem(this.storageName);
            if (personalizationFirstName !== 'Skipped') {
                this.nameField.value = personalizationFirstName;
            }
        }
        if (this.spans.length > 0) {
            if (!personalizationFirstName) {
                if (this.displayPopupAutomatically === true && document.body.classList.contains('option-personalization') && !this.popupDialog.open) {
                    this.popupDialog.showModal();
                }
            } else {
                this.popupDialog.classList.remove('active');
            }
            for (let i = 0; i < this.spans.length; i++) {
                let firstNameElement = document.createElement('a');
                firstNameElement.href = "javascript:void(0)";
                firstNameElement.classList.add('personalizationSetting');
                firstNameElement.innerHTML = this.languages[this.language].newButton;
                firstNameElement.addEventListener('click', (function (e) {
                    e.preventDefault();
                    if (!this.popupDialog.open) {
                        this.popupDialog.showModal();
                    }
                }).bind(this));
                let linkHtml = "";
                if (!personalizationFirstName) {
                    linkHtml = this.spans[i].innerHTML;
                    firstNameElement.innerHTML = linkHtml;
                } else if (personalizationFirstName != 'Skipped') {
                    firstNameElement.innerHTML = personalizationFirstName;
                } else {
                    linkHtml = this.spans[i].innerHTML;
                    firstNameElement.innerHTML = linkHtml;
                }
                this.spans[i].innerHTML = '';
                this.spans[i].append(firstNameElement);
                this.addedNodes.push(firstNameElement);
            }
        }
    }

    initPersonalization() {
        this.setLanguage();
        this.greeting();
        this.dateAndTime();
        let refreshRate = 3600000; // 1 hr to refresh greeting.
        if (this.timeShow) {
            refreshRate = 60000; // 1 min to refresh when time is shown.
        }
        if (this.greetingEnable || this.timeShow) {
            this.intervalProcess = setInterval((function () { this.clean(); this.init(); }).bind(this), refreshRate);
        }
        let personalizeMyFinancial = window.localStorage.setItem(this.localStorageTest, 'true');
        if (this.popupDialog && this.personalizationEnable && window.localStorage.getItem(this.localStorageTest)) {
            this.personalizationInitialize();
            let personalizationClose = document.querySelectorAll('.personalizationClose');
            for (let i = 0; i < personalizationClose.length; i++) {
                personalizationClose[i].addEventListener("click", (function () {
                    window.sessionStorage.setItem(this.storageName, 'Skipped');
                    this.popupDialog.close();
                }).bind(this));
            }
            let personalizationPopupClosePerm = document.querySelectorAll('.personalizationPopupClosePerm');
            for (let i = 0; i < personalizationPopupClosePerm.length; i++) {
                personalizationPopupClosePerm[i].addEventListener("click", (function () {
                    window.localStorage.setItem(this.storageName, 'Skipped');
                    this.popupDialog.close();
                }).bind(this));
            }
            if (this.popupForm) {
                this.popupForm.addEventListener("submit", (function (e) {
                    e.preventDefault();
                    window.localStorage.setItem(this.storageName, this.nameField.value);
                    this.personalizationInitialize();
                    this.popupDialog.close();
                }).bind(this));
            }
        }
        document.getElementsByTagName('html')[0].classList.add(this.htmlClass);
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "CMSInclude":
                this.clean();
                this.init();
                break;
            case "LanguageSelector":
                this.clean();
                this.initProductComparison();
                break;
        }
    }
}

const personalization = new Personalization();

// Site Notice 5.5.0 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved.
class responsiveSiteNotice extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.bodyTriggerClass = 'home';
        this.reqLength = 15;
        this.enableContrastClass = true;
        this.delay = 2000;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    clean() {

        return true;
    }

    removeAddedContent(obj) {
        if (!obj) { return false; }
        let combinedInnerHTML = "";
        for (let i = 0; i < obj.length; i++) {
            let clone = obj[i].cloneNode(true);
            let noticeClosers = clone.querySelectorAll(".noticeclosers");
            if (noticeClosers.length > 0) {
                for (let j = 0; j < noticeClosers.length; j++) {
                    noticeClosers[j].remove();
                }
            }
            combinedInnerHTML += clone.innerHTML;
        }
        if (combinedInnerHTML === "") { return false; }
        return combinedInnerHTML;
    }

    init() {
        if (document.body.classList.contains(this.bodyTriggerClass) || !this.bodyTriggerClass) {
            for (let i = 0; i < this.nodeList.length; i++) {
                let notice = this.nodeList[i];
                if (notice.classList.contains('notice-clone')) {
                    return true;
                }
                let noticeHtml = notice.querySelectorAll('tbody > tr > td'),
                    uniqueName = notice.id + "-innerHTML";
                let noticeHtmlAsCleanedString = this.removeAddedContent(noticeHtml);
                let bodyClassName;
                if (notice.classList.contains("appbanner")) {
                    bodyClassName = "bannernoticeactive";
                }
                else {
                    bodyClassName = "noticeactive";
                }
                if (noticeHtmlAsCleanedString.length > this.reqLength) {
                    const noticeClosers = document.createElement("div");
                    noticeClosers.classList.add('noticeclosers');
                    const noticeCloser = document.createElement("div");
                    noticeCloser.classList.add('noticecloser');
                    const noticeCloserSession = document.createElement("div");
                    noticeCloserSession.classList.add('noticeclosersession');
                    noticeClosers.append(noticeCloserSession);
                    noticeClosers.append(noticeCloser);
                    noticeHtml[0].prepend(noticeClosers);
                    if (this.enableContrastClass) {
                        notice.classList.add('contrast-class');
                    }
                    if (notice.bgColor) {
                        notice.style.backgroundColor = notice.bgColor;
                    }
                    let bypassNotice = localStorage.getItem(uniqueName),
                        noticeHtmlNow = noticeHtmlAsCleanedString;
                    if (bypassNotice) {
                        sessionStorage.setItem(uniqueName, bypassNotice);
                    }
                    var bypassNoticeSession = sessionStorage.getItem(uniqueName);
                    let newId = "";
                    if (notice.id) {
                        newId = notice.id + '-clone';
                    } else {
                        newId = 'notice-' + (i + 1) + '-clone';
                    }
                    if (notice.classList.contains('top-banner')) {
                        try {
                            document.getElementById(newId).remove();
                        } catch (e) {}
                        let clone = notice.cloneNode(true);
                        clone.id = newId;
                        clone.classList.add('notice-clone');
                        document.body.prepend(clone);
                    }
                    let noticeOpen = function () {
                        notice.classList.add('active');
                        if (notice.classList.contains('top-banner')) {
                            document.getElementById(newId).classList.add('active');
                        }
                        document.body.classList.add(bodyClassName);
                    };
                    let noticeClose = function (e) {
                        let notice = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
                        notice.classList.remove('active');
                        if (notice.classList.contains('top-banner')) {
                            document.getElementById(newId).classList.remove('active');
                        }
                        document.body.classList.remove(bodyClassName);
                    };
                    try {
                        if (bypassNotice !== noticeHtmlNow && bypassNoticeSession !== noticeHtmlNow) {
                            setTimeout(noticeOpen, settings.delay);
                            localStorage.removeItem(uniqueName);
                            sessionStorage.removeItem(uniqueName);
                        } else if (bypassNoticeSession !== noticeHtmlNow) {
                            setTimeout(noticeOpen, settings.delay);
                            localStorage.removeItem(uniqueName);
                            sessionStorage.removeItem(uniqueName);
                        }
                    } catch (e) {
                        setTimeout(noticeOpen, this.delay);
                    }

                    noticeCloser.addEventListener('click', function (e) {
                        noticeClose(e);
                        try {
                            localStorage.setItem(uniqueName, noticeHtmlNow);
                            sessionStorage.setItem(uniqueName, noticeHtmlNow);
                        } catch (e) {
                            console.log('You are in Privacy Mode. Please deactivate Privacy Mode and then reload the page.');
                        }
                    });

                    noticeCloserSession.addEventListener('click', function (e) {
                        noticeClose(e);
                        try {
                            sessionStorage.setItem(uniqueName, noticeHtmlNow);
                        } catch (e) {
                            console.log('You are in Privacy Mode. Please deactivate Privacy Mode and then reload the page.');
                        }
                    });

                } else if (noticeHtmlAsCleanedString.length < settings.reqLength) {
                    localStorage.removeItem(uniqueName);
                    sessionStorage.removeItem(uniqueName);
                }

            }
        }
        return true;
    }
}

const responsiveSiteNotice1 = new responsiveSiteNotice({
    "nodeList": document.querySelectorAll('[class*="Table-Notice"]')
});

// Panel Navigation 6.2.0 by Paul Richards, Copyright 2016 Fiserv. All rights reserved.
class PanelNav extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.navPanelCategories = []; 
        this.querySelectorAll = "nav#primary";
        this.enableAccordion = false;
        this.tooWideClass = "edge";
        this.debug = false;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    clean() {
       return true;
    }

    init() {
        if (!this.initNav()) return false;
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    initNav() {
        this.nodeList = document.querySelectorAll(this.querySelectorAll);
        for (let i = 0; i < this.nodeList.length; i++) {
            const node = this.nodeList[i];
            let navHeadings = node.querySelectorAll('h2');
            for (let j = 0; j < navHeadings.length; j++) {
                let navPanelCategory = document.createElement("li");
                navPanelCategory.tabIndex = '0';

                let navPanelContent = navHeadings[j].nextElementSibling;
                if (navPanelContent) {
                    if (navPanelContent.nodeName.toLowerCase() === 'table') {
                        navHeadings[j].parentElement.insertBefore(navPanelCategory, navHeadings[j].nextSibling);
                        let navPanel = document.createElement("div");
                        navPanel.append(navPanelContent);
                        navPanelCategory.append(navPanel);

                        navPanelCategory.addEventListener('mouseenter', (function (e) {
                            if (this.debug) {
                                console.log('mouseentered', e.target);    
                            }
                            let parentElm = e.target,
                                navPanelLeft = navPanel.getBoundingClientRect().left,
                                navPanelWidth = navPanel.clientWidth,
                                combinedWidth = Math.abs(navPanelLeft) + navPanelWidth,
                                bodyWidth = document.querySelector('body').clientWidth;
                            if (this.debug) {
                                console.log('navPanelLeft: ' + navPanelLeft + ', navPanelWidth: ' + navPanelWidth + ', combinedWidth: ' + combinedWidth + ', bodyWidth: ' + bodyWidth);
                            }
                            if (navPanelLeft < 0 || combinedWidth > bodyWidth) {
                                parentElm.classList.add(this.tooWideClass);
                            }
                        }).bind(this));
                        this.navPanelCategories.push(navPanelCategory);
                    } else {
                        navHeadings[j].classList.add('direct-link');
                        navHeadings[j].parentElement.insertBefore(navPanelCategory, navHeadings[j]);
                    }
                } else {
                    navHeadings[j].parentElement.append(navPanelCategory);
                }              
                navPanelCategory.prepend(navHeadings[j]);
                // Show nav when complete
                document.body.classList.add("primary-nav");
            }

            // Show/Hide Navigation
            function activateNav() {
                if (document.body.classList.contains("opennav")) {
                    document.body.classList.remove("opennav");
                } else {
                    document.body.classList.add("opennav");
                }
                document.body.classList.remove("openob"); // Hide login
            }

            document.querySelector('#menuopen').addEventListener('click', function () {
                activateNav();
            });

            let navCloseElements = document.querySelectorAll('.nav-close');
            for (let i = 0; i < navCloseElements.length; i++) {
                navCloseElements[i].addEventListener('click', function (e) {
                    activateNav();
                });
            }

            // Remove Primary Nav Panel for Page Anchors
            for (let i = 0; i < this.nodeList.length; i++) {
                let navAnchors = this.nodeList[i].querySelectorAll('nav > div a[href*="#"]');
                for (let j = 0; j < navAnchors.length; j++) {
                    navAnchors[j].addEventListener('click', function () {
                        activateNav();
                    });
                }
            }            

            // Toggle Category 
            let navListItems = node.querySelectorAll('div > ul > li > h2');
            let enableAccordion = this.enableAccordion;
            for (let k = 0; k < navListItems.length; k++) {
                let navListItemsExpand = function () {
                    navListItems[k].closest('nav > div > ul > li').classList.toggle("active");
                    if (enableAccordion === true) {
                        let listCategories = navListItems[k].parentNode.children;
                        for (let l = 0; l < listCategories.length; l++) {
                            if (listCategories[l] !== navListItems[k]) {
                                listCategories[l].classList.remove("active");
                            }                            
                        }
                    }
                };

                navListItems[k].addEventListener('click', function () {
                    navListItemsExpand();
                });
            }            
        }

        window.addEventListener('resize', (function (e) {
            for (let k = 0; k < this.navPanelCategories.length; k++) {
                this.navPanelCategories[k].classList.remove(this.tooWideClass);
            }            
        }).bind(this));

        return true;
    }

}

const panelNav = new PanelNav();

// Product Selector 3.3.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved.
const productSelector = new CMSInclude({
    "querySelectorAll": ".Include-Product-Selector",
    "includeURL": "inc_Product-Selector.aspx",
    "callback": function () {
        var productSelector = jQuery('#Product-Selector a[href*="#"]:not([href="#"]):not([rel="lightcase"])').smoothScroll({
            animation: {
                obj: jQuery('#Product-Selector #scroller'),
                duration: 0,
                delay: 500
            },
            initialHash: "#Product-Selector-Start"
        });
    }
});

// Accessibility 1.1.2 by Paul Richards, Copyright 2021 Fiserv. All rights reserved.
class Accessibility extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.nodeList = document.querySelectorAll("div");

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    clean() {
        // Cleans Area Label By
        for (let i = this.elementsWithIdAdded.length - 1; i >= 0; i--) {
            this.elementsWithIdAdded[i].removeAttribute('id');
        }
        for (let i = this.elementsWithAriaLabelledByAdded.length - 1; i >= 0; i--) {
            this.elementsWithAriaLabelledByAdded[i].removeAttribute('aria-labelledby');
        }
        // Cleans Tab Focus
        document.body.removeEventListener('mousedown', this.tabFocusMouseDown);
        document.body.removeEventListener('keydown', this.tabFocusKeyDown);
        return true;
    }

    init() {
        if (!this.addAriaLabelledBy()) return false;
        if (!this.tabFocus()) return false;
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    addAriaLabelledBy() {
        if (!this.elementsWithIdAdded) this.elementsWithIdAdded = [];
        if (!this.elementsWithAriaLabelledByAdded) this.elementsWithAriaLabelledByAdded = [];
        let counter = 0;
        for (let i = 0; i < this.nodeList.length; i++) {
            const node = this.nodeList[i];
            let ariaLabelledByID = '';
            if (node.querySelectorAll("h1,h2,h3,h4,h5,h6").length > 0 && !node.getAttribute('aria-labelledby') && !node.getAttribute('aria-label')) {
                const heading = node.querySelectorAll("h1,h2,h3,h4,h5,h6")[0];
                if (heading.id !== "") {
                    ariaLabelledByID = heading.id;
                } else {
                    let packageIndex = Fiserv.registry[this.packageName].length;
                    heading.id = 'accessibility-' + packageIndex + '-' + counter++;
                    ariaLabelledByID = heading.id;
                    this.elementsWithIdAdded.push(heading);
                }
                node.setAttribute('aria-labelledby', ariaLabelledByID);
                this.elementsWithAriaLabelledByAdded.push(node);
            }
        }
        return true;
    }

    tabFocusMouseDown() {
        document.body.classList.add('using-mouse');
    }

    tabFocusKeyDown(e) {
        if (e.keyCode === 9) {
            document.body.classList.remove('using-mouse');
        }
    }

    tabFocus() {
        // Let the document know when the mouse is being used
        document.body.addEventListener('mousedown', this.tabFocusMouseDown);

        // Re-enable focus styling when Tab is pressed
        document.body.addEventListener('keydown', this.tabFocusKeyDown);
        return true;
    }
}

const accessibility = new Accessibility({
    "nodeList": document.querySelectorAll("section")
});

// Accessibility Mode 3.1.0 by Paul Richards, Copyright 2017 Fiserv. All rights reserved.
class AccessibilityMode extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.addedNodes = [];
        this.nodeListEventListeners = [];
        this.nodeList = document.querySelectorAll('.accessibility-mode-toggle');
        this.callback = "";
        this.data = "";
        this.debug = true;
        this.enabled = false;
        this.htmlClass = 'accessibility-mode-enabled';
        this.pageClass = 'accessibility-enabled';
        this.storageName = 'accessibility-mode';
        this.initiallyEnabled = 'false';

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.toggleAccessibilityMode = this.toggleAccessibilityMode.bind(this);
        this.buildControls = this.buildControls.bind(this);
        this.initAccessibilityMode = this.initAccessibilityMode.bind(this);
        return true;
    }

    clean() {
        for (let i = 0; i < this.nodeListEventListeners.length; i++) {
            this.nodeListEventListeners[i].node.removeEventListener("click", this.nodeListEventListeners[i].eventListener);
        }
        this.nodeListEventListeners = [];
        document.getElementsByTagName('html')[0].classList.remove(this.htmlClass);
        document.querySelector('body').classList.remove(this.pageClass);
        this.enabled = false;
        return true;
    }

    init() {
        if (!this.initAccessibilityMode()) return false;
        this.bindCallbacks();
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    toggleAccessibilityMode() {
        if (document.querySelector('body').classList.contains(this.pageClass)) {
            if (this.initiallyEnabled === 'true') {
                localStorage.setItem(this.storageName, 'false');
            } else {
                localStorage.removeItem(this.storageName);
            }
            this.enabled = false;
        } else {
            localStorage.setItem(this.storageName, 'true');
            this.enabled = true;
        }
        document.querySelector('body').classList.toggle(this.pageClass);
        Fiserv.message(this);
    }

    buildControls() {
        let toggleAccessibilityMode = this.toggleAccessibilityMode;
        toggleAccessibilityMode = toggleAccessibilityMode.bind(this);
        for (let i = 0; i < this.nodeList.length; i++) {
            this.nodeList[i].addEventListener('click', toggleAccessibilityMode);
            let nodeEventListener = { 'node': this.nodeList[i], 'eventListener': toggleAccessibilityMode };
            this.nodeListEventListeners.push(nodeEventListener);
        }
    }

    initAccessibilityMode() {
        document.querySelector('html').classList.add(this.htmlClass);
        this.buildControls();
        if (localStorage.getItem(this.storageName) === 'false') {
            // Accessibility has been disabled by the user.
        } else {
            if (localStorage.getItem(this.storageName) === 'true' || this.storageName === 'true') {
                document.querySelector('body').classList.add(this.pageClass);
            }
        }
        return this;
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "CMSInclude":
                this.clean();
                this.init();
                break;
        }
    }
}

const accessibilityMode = new AccessibilityMode();

// App Banners 3.0.0 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved.
class AppBanners extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.addedClasses = [];
        this.debug = false;
        this.htmlClass = 'appbanners-enabled';

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.initAppBanners = this.initAppBanners.bind(this);
        return true;
    }

    clean() {
        for (let i = 0; i < this.addedClasses.length; i++) {
            document.getElementsByTagName('body')[0].classList.remove(this.addedClasses[i]);
        }
        document.getElementsByTagName('html')[0].classList.remove(this.htmlClass);
        return true;
    }

    init() {
        if (!this.initAppBanners()) return false;
        this.bindCallbacks();
        this.logTime('bindCallbacks');
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    initAppBanners() {
        let ua = navigator.userAgent;
        const kindleStrings = ["KFAPWA", "KFAPWI", "KFARWI", "KFASWI", "KFFOWI", "KFGIWI", "KFJWA", "KFJWI", "KFMEWI", "KFOT", "KFSAWA", "KFSAWI", "KFSOWI", "KFTBWI", "KFTHWA", "KFTHWI", "KFTT", "Kindle", "Silk"];
        let isKindle = false;

        for (let i = 0; i < kindleStrings.length; i++) {
            let matchRegExp = new RegExp(kindleStrings[i]);
            if (matchRegExp.test(ua)) {
                isKindle = true;
                break;
            }
        }

        let mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
        if (mobile) {
            var userAgent = navigator.userAgent.toLowerCase();
            if ((userAgent.search("android") > -1) && (userAgent.search("mobile") > -1) && !isKindle) {
                document.getElementsByTagName('body')[0].classList.add("android");
                this.addedClasses.push("android");
            } else if ((userAgent.search("android") > -1) && (userAgent.search("mobile") <= -1) && !isKindle) {
                document.getElementsByTagName('body')[0].classList.add("android-tablet");
                this.addedClasses.push("android-tablet");
            } else if ((userAgent.search("android") > -1) && (userAgent.search("mobile") > -1) && isKindle) {
                document.getElementsByTagName('body')[0].classList.add("android-fire");
                this.addedClasses.push("android-fire");
            } else if ((userAgent.search("android") > -1) && (userAgent.search("mobile") <= -1) && isKindle) {
                document.getElementsByTagName('body')[0].classList.add("android-tablet-fire");
                this.addedClasses.push("android-tablet-fire");
            } else if (userAgent.search("ipad") > -1) {
                document.getElementsByTagName('body')[0].classList.add("ipad");
                this.addedClasses.push("ipad");
            } else if ((userAgent.search("iphone") > -1) || (userAgent.search("ipod") > -1)) {
                document.getElementsByTagName('body')[0].classList.add("iphone");
                this.addedClasses.push("iphone");
            }
        }
        document.getElementsByTagName('html')[0].classList.add(this.htmlClass);
        return true;
    }
}

const appBanners = new AppBanners();

// Captcha 4.2.0 by Jesse Fowler & JP Larson, Copyright 2021 Fiserv. All rights reserved.
class Captcha extends Fiserv {
    constructor(options) {
        super(options);

        //Default Properties
        this.querySelectorAll = "input.captcha";
        this.fieldNumbersQuerySelector = ".captchaFieldNumbers";
        this.fieldRefreshQuerySelector = ".captchaFieldRefresh";
        this.fieldAnswerQuerySelector = ".captchaAnswer";
        this.captchaClassName = 'plain';
        this.captchaNumbers = 8;
        this.templateString = `<div class="captchaField ${this.captchaClassName}">
                                    <div class="captchaFieldBoxLeft"></div>
                                    <div class="captchaFieldBoxMid">
                                        <div class="captchaFieldBoxMidOverlay"></div>
                                        <div class="captchaFieldBoxMidOverlaySecure"></div>
                                        <div class="captchaFieldNumbers"></div>
                                    </div>
                                    <div class="captchaFieldBoxRight">
                                        <div class="captchaFieldRefresh"></div>
                                    </div>
                                </div>`;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();
        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    clean() {
        for (let i = 0; i < this.captchaInputList.length; i++) {
            const captchaInput = this.captchaInputList[i];
            captchaInput.clean();
        }
        delete this.captchaInputList;
    }

    includeInit(CMSInclude) {
        for (let i = 0; i < CMSInclude.includeList.length; i++) {
            const nodeList = CMSInclude.includeList[i].html;
            for (let k = 0; k < nodeList.length; k++) {
                const node = nodeList[k];
                const newNodeList = node.querySelectorAll(this.querySelectorAll);
                this.setCaptchaInputList(newNodeList);
            }
        }
    }

    init() {
        this.setTemplate();
        this.nodeList = document.querySelectorAll(this.querySelectorAll);
        if (!this.nodeList.length) {
            delete this.nodeList;
            return false;
        }
        this.setCaptchaInputList();

    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "CMSInclude":
                if (obj.addedNodes) this.includeInit(obj);
                break;
        }
    }

    setNumbersCallback(change) {
        this.change = change;
        Fiserv.message(this);
        delete this.change;
    }

    setTemplate() {
        if (this.template) return;
        this.template = this.templateString;
        return true;
    }

    isConflict(node) {
        if (!Fiserv.registry.Captcha) return false;
        for (let i = 0; i < Fiserv.registry.Captcha.length; i++) {
            const captcha = Fiserv.registry.Captcha[i];
            const captchaInputList = captcha.captchaInputList;
            if (!captchaInputList) continue;
            for (let n = 0; n < captchaInputList.length; n++) {
                const captchaInput = captcha.captchaInputList[n];
                if (captchaInput.node === node) return true;
            }
        }
        return false;
    }

    setCaptchaInputList(nodeList) {
        nodeList = nodeList ? nodeList : this.nodeList;
        for (let i = 0; i < nodeList.length; i++) {
            const node = nodeList[i];
            if (this.isConflict(node)) continue;
            if (!this.captchaInputList) this.captchaInputList = [];
            const captchaInput = new CaptchaInput(node, this);
            this.captchaInputList.push(captchaInput);
        }
    }
}

class CaptchaInput {
    constructor(node, captcha) {
        this.captcha = captcha;
        this.node = node;
        this.captchaNumbers = this.captcha.captchaNumbers;
        this.bindFunctions();
        this.setTemplate();
        requestAnimationFrame(this.appendHTML);
    }

    addRefreshListeners() {
        this.captchaFieldRefresh.addEventListener("click", this.refreshCallback);
    }

    removeRefreshListeners() {
        this.captchaFieldRefresh.removeEventListener("click", this.refreshCallback);
    }

    appendHTML() {
        for (let i = 0; i < this.template.length; i++) {
            const node = this.template[i];
            this.node.parentNode.insertBefore(node, this.node);
        }
        this.setFields();
    }

    setFields() {
        this.captchaFieldNumbers = this.node.form.querySelector(this.captcha.fieldNumbersQuerySelector);
        this.captchaFieldRefresh = this.node.form.querySelector(this.captcha.fieldRefreshQuerySelector);
        this.captchaFieldAnswer = this.node.form.querySelector(this.captcha.fieldAnswerQuerySelector);
        this.addRefreshListeners();
        this.setRandomNumbersList();
    }

    bindFunctions() {
        this.appendHTML = this.appendHTML.bind(this);
        this.refreshCallback = this.refreshCallback.bind(this);
        this.setAnswerPattern = this.setAnswerPattern.bind(this);
        this.cleanNumbers = this.cleanNumbers.bind(this);
        this.cleanHTML = this.cleanHTML.bind(this);

    }

    clean() {
        this.removeRefreshListeners();
        requestAnimationFrame(this.cleanNumbers);
        requestAnimationFrame(this.cleanHTML);
    }

    cleanHTML() {
        for (let i = 0; i < this.template.length; i++) {
            const node = this.template[i];
            this.node.parentNode.removeChild(node);
        }
        delete this.template;
    }

    cleanNumbers() {
        for (let i = 0; i < this.randomNumbers.length; i++) {
            const randomNumber = this.randomNumbers[i];
            randomNumber.clean();
        }
        this.node.value = "";
        delete this.captchaNumberHTML;
        delete this.randomNumbers;
    }

    refreshCallback(e) {
        this.cleanNumbers();
        this.setRandomNumbersList();
    }

    setAnswerPattern() {
        this.captchaFieldAnswer.pattern = this.captchaNumberHTML;
    }

    setRandomNumbersList(captchaNumbers) {
        captchaNumbers = captchaNumbers ? captchaNumbers : this.captchaNumbers;
        for (let i = 0; i < captchaNumbers; i++) {
            const randomNumber = new CaptchaNumber(this, this.captcha);
            if (!this.randomNumbers) this.randomNumbers = [];
            if (!this.captchaNumberHTML) this.captchaNumberHTML = "";
            this.captchaNumberHTML += randomNumber.randomNumber.toString();
            this.randomNumbers.push(randomNumber);
        }
        this.node.value = this.captchaNumberHTML;
        requestAnimationFrame(this.setAnswerPattern);
        this.captcha.setNumbersCallback(this.captchaNumberHTML);
        return true;
    }

    setTemplate() {
        for (let i = 0; i < this.captcha.template.length; i++) {
            const node = this.captcha.template[i];
            if (!this.template) this.template = [];
            const clonedNode = node.cloneNode(true);
            this.template.push(clonedNode);
        }
    }

}

class CaptchaNumber {
    constructor(captchaInput, captcha) {
        this.captchaInput = captchaInput;
        this.captcha = captcha;
        this.randomNumber = Math.floor(Math.random() * 10);
        this.bindFunctions();
        this.setNode();
        requestAnimationFrame(this.appendNode);
    }

    bindFunctions() {
        this.appendNode = this.appendNode.bind(this);
    }

    appendNode() {
        this.captchaInput.captchaFieldNumbers.appendChild(this.node);
    }

    removeNode() {
        this.captchaInput.captchaFieldNumbers.removeChild(this.node);
    }

    clean() {
        this.removeNode();
    }

    setNode() {
        const randomNumberShiftWidth = Math.random() / 4;
        const plusOrMinusHeight = Math.random() < 0.5 ? -1 : 1;
        const randomNumberShiftHeight = (Math.random() / 4) * plusOrMinusHeight;
        this.node = this.captcha.parseHTML(`<div alt="${this.randomNumber}" style="transform: translate(${randomNumberShiftWidth}em, ${randomNumberShiftHeight}em)">${this.randomNumber}</div>`)[0];
    }
}

const captcha = new Captcha();

// Expander 5.3.0 by Jesse Fowler & Kristen Rogers, Copyright 2015 Fiserv. All rights reserved.
class Expander extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.nodeList = document.querySelectorAll('[class*="Table-Expandable"]'),
            this.additionalOffsetTop = 10, // Added offset height to the scroll baseOffsetTopObject
            this.animationend = false,
            this.animationDuration = 500,
            this.baseOffsetTopObject = document.querySelectorAll('header')[0], // Fixed object that overlays the scrollable content area.
            this.baseOffset = '2rem', // Added with baseOffsetTopObject to be the total offset.
            this.debugging = true,
            this.defaultClass = 'Table-Expandable',
            this.displayedMobileOnly = document.getElementById('tabtoexpander'),
            this.hash = '',
            this.openFirstExpandable = false,
            this.openAll = false,
            this.pageLinkSupport = true,
            this.scrollToExpanders = false;
            
        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.applyExpander = this.applyExpander.bind(this);
        this.initPageLinkSupport = this.initPageLinkSupport.bind(this);
        //this.openExpandersFromQuerystring = this.openExpandersFromQuerystring.bind(this);
        return true;
    }

    clean() {
        window.removeEventListener("resize", this.applyExpander);
        if (typeof this.elementsAdded !== "object") {
            for (let i = this.elementsAdded.length - 1; i >= 0; i--) {
                let children = this.elementsAdded[i].childNodes;
                for (let j = 0; i < children.length; j++) {
                    children[j].style.transformOrigin = "";
                    children[j].style.transform = "";
                    children[j].style.marginTop = "";
                    children[j].style.marginBottom = "";
                    this.elementsAdded[i].insertAdjacentElement('afterend', children[j]);
                }
                this.elementsAdded[i].parentNode.removeChild(this.elementsAdded[i]);
            }
        }
        return true;
    }

    init() {
        if (!this.applyExpander()) return false;
        //if (!this.openExpandersFromQuerystring()) return false;
        this.bindCallbacks();
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "CmsInclude":
                if (obj.load) {
                    this.applyExpander();
                }
                break;
        }
    }

    autoExpansionDetection(node) {
        if (!node) { return false; }
        let enableAutoExpansion = false;
        if ((this.openFirstExpandable && i === 0) || this.openAll) {
            enableAutoExpansion = true;
        }
        if (node.className.match('-Initial-Open') && !node.previousElementSibling.className.match('-Initial-Open')) {
            enableAutoExpansion = true;
        }
        if (node.className.match('-All-Open')) {
            enableAutoExpansion = true;
        }
        if (enableAutoExpansion) {
            node.classList.add('expanded');
        }
    }

    animationDetectionAndMessaging(node) {
        if (!node) { return false; }
        let enableMessaging = false;

        if (enableMessaging) {
            this.animationend = true;
            Fiserv.message(this);
            this.animationend = false;
        }
    }

    expandExpander(node) {
        node.classList.add('expanded');
        node.children[0].setAttribute('aria-expanded', 'true');
    }

    collapseExpander(node) {
        node.classList.remove('expanded');
        node.children[0].setAttribute('aria-expanded', 'false');
    }

    expanderHashChange(nodeList) {
        if (!window.location.hash) return;
        if (!document.querySelector(window.location.hash)) return;
        try {
            if (document.querySelector(window.location.hash) && document.querySelector(window.location.hash).parentElement.parentElement.parentElement.className.match('Table-Expandable')) {
                let node = document.querySelector(window.location.hash);
                let resetViewToAnchor = function (event) {
                    if (document.querySelector(window.location.hash).parentElement.parentElement.parentElement.className.match('expanded')) { return; }
                };
                document.getElementsByTagName('body')[0].addEventListener("animationend", resetViewToAnchor, false);
                node.parentElement.parentElement.parentElement.classList.add('expanded');
                node.parentElement.parentElement.setAttribute('aria-expanded', 'true');
                setTimeout(function (){ window.location = window.location.hash;}, 1000);
            }
        } catch (e) {

        }
    }

    applyExpander() {
        if (!this.elementsAdded) this.elementsAdded = [];
        for (let i = 0; i < this.nodeList.length; i++) {
            const node = this.nodeList[i];
            var expander = []; // Customize with element that is visible only in the mobile view.
            this.autoExpansionDetection(node);
            
            expander = node.children[0];
            let expandingNode = node.getElementsByTagName('tbody')[0];
            if (!expander.getAttribute('aria-controls')) {
                expander.setAttribute('aria-controls', 'expandable-details-' + (i + 1));
            }
            if (!expander.getAttribute('aria-expanded')) {
                if (node.classList.contains('expanded')) {
                    expander.setAttribute('aria-expanded', 'true');
                } else {
                    expander.setAttribute('aria-expanded', 'false');
                }
            }
            if (!expandingNode.id) {
                expandingNode.id = 'expandable-details-' + (i + 1);
            }
            if (!expandingNode.getAttribute('role')) {
                expandingNode.setAttribute("role", "region");
            }
            if (!expandingNode.getAttribute('tabindex')) {
                expandingNode.setAttribute("tabindex", "-1");
            }

            if (expandingNode.parentElement.querySelectorAll('caption a[id]').length === 0) {
                let anchor = document.createElement('a');
                anchor.id = "expandable-" + (i + 1);
                expander.children[0].prepend(anchor);
            }

            expander.addEventListener("click", () => {
                if (node.classList.contains('expanded')) {
                    this.collapseExpander(node);
                    history.replaceState('', null, "");
                } else {
                    this.expandExpander(node);
                    history.replaceState('', null, "#" + expandingNode.parentElement.querySelectorAll('caption a[id]')[0].id);
                }
            }, false);
        }

        // Adds the ability for anchor links to scroll to element and open expander.
        this.initPageLinkSupport(this.nodeList);

        window.addEventListener("hashchange", this.expanderHashChange(this.nodeList), false);
        window.addEventListener("popstate", this.expanderHashChange(this.nodeList), false);

        this.completeCallback();
        return true;
    }

    getHash() {
        if (window.location.hash) {
            var hash = window.location.hash.substring(1);
            if (hash.length === 0) {
                return false;
            } else {
                return hash;
            }
        } else {
            return false;
        }
    }

    initPageLinkSupport(nodeList) {
        if (!this.pageLinkSupport) return;
        var linksToAnchors = document.querySelectorAll('a[href*=\\#]');
        for (let i = 0; i < linksToAnchors.length; i++) {
            for (let j = 0; j < nodeList.length; j++) {
                let testNode = nodeList[j].querySelectorAll('caption a[id]');
                if (testNode.length > 0 && linksToAnchors[i].hash.substr(1) === testNode[0].id) {
                    linksToAnchors[i].addEventListener("click", function (e) {
                        if (!nodeList[j].classList.contains('expanded')) {
                            nodeList[j].children[0].click();
                        }
                        //this.scrollToElement(matchingObj, this.animationDuration);
                    });
                }
            }
        } 
    }

    openExpandersFromQuerystring() {
        if (this.getHash()) {
            if (this.debugging) { console.log('getHash: ' + this.getHash()); }
            this.hash = this.getHash();
            if (!document.getElementById(this.hash)) return;
            if (document.getElementById(this.hash).parentNode.parentNode.parentNode) {
                document.getElementById(this.hash).parentNode.parentNode.parentNode.classList.add('expanded');
            }
        }
    }
}

const expander = new Expander({
    "nodeList": document.querySelectorAll('[class*="Table-Expandable"]')
});

// Speedbump 2.2.0 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved.
class Speedbump extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.querySelectorAll = "a[href^=Speedbump\\.aspx], a[href^=speedbump\\.aspx]";
        this.addedNodes = [];
        this.existingNodes = [];
        this.nodesWithTargetAdded = [];
        this.debug = false;
        this.buttonAcceptClass = 'Button2';
        this.buttonTxtAccept = 'Accept';
        this.htmlClass = 'speedbump-enabled';
        this.openInNewWindow = false;
        this.testVBNetLinkGeneration = false;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.initSpeedbump = this.initSpeedbump.bind(this);
        this.modifyLinksToSpeedbumpPage = this.modifyLinksToSpeedbumpPage.bind(this);
        this.modifySpeedbumpPage = this.modifySpeedbumpPage.bind(this);
        this.setTarget = this.setTarget.bind(this);
        return true;
    }

    clean() {
        for (let i = 0; i < this.addedNodes.length; i++) {
            this.addedNodes[i].remove();
        }
        for (let i = 0; i < this.existingNodes.length; i++) {
            this.existingNodes[i].element.classList.remove(this.buttonAcceptClass);
            this.existingNodes[i].element.innerHTML = this.existingNodes[i].innerHTML;
            this.existingNodes[i].element.href = this.existingNodes[i].href;
        }
        for (let i = 0; i < this.nodesWithTargetAdded.length; i++) {
            this.nodesWithTargetAdded[i].removeAttribute('target');
        }
        document.getElementsByTagName('html')[0].classList.remove("speedbump-open-in-new-window");
        document.getElementsByTagName('html')[0].classList.remove(this.htmlClass);
        return true;
    }

    init() {
        if (!this.initSpeedbump()) return false;
        this.bindCallbacks();
        this.logTime('bindCallbacks');
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "CMSInclude":
                if (obj.addedNodes) {
                    this.initSpeedbump();
                }
                break;
        }
    }

    modifySpeedbumpPage() {
        if (this.testVBNetLinkGeneration) { return; }
        if (!document.querySelector('.cancel-new-window')) { return; }
        let params = (new URL(document.location.href)).searchParams;
        let querylink = "";
        params.forEach((value, key) => {
            if (key.toLowerCase() === "link") {
                querylink = value;
            }
        });
        querylink = querylink + window.location.hash;
        querylink = encodeURI(decodeURIComponent(querylink));
        const query = window.location.search;
        const mailtoRegEx = /mailto\:/i;
        let isMailbump = false;
        if (query.match(mailtoRegEx)) {
            isMailbump = true;
        }
        let continueLink;
        if (document.getElementById('speedbump-accept')) {
            let existingNode = {};
            continueLink = document.getElementById('speedbump-accept');
            existingNode.element = continueLink;
            continueLink.classList.add(this.buttonAcceptClass);
            existingNode.innerHTML = continueLink.innerHTML;
            continueLink.innerHTML = this.buttonTxtAccept;
            existingNode.href = continueLink.href;
            continueLink.href = querylink;
            this.existingNodes.push(existingNode);
        } else {
            continueLink = document.createElement('a');
            continueLink.classList.add(this.buttonAcceptClass);
            continueLink.innerHTML = this.buttonTxtAccept;
            continueLink.href = querylink;
            this.addedNodes.push(continueLink);
        }
        if (isMailbump) {
            continueLink.addEventListener("click", function () {
                window.history.go(-1);
                return true;
            });
        }
        document.querySelector('.cancel-new-window').parentElement.insertBefore(continueLink, document.querySelector('.cancel-new-window'));
        if (!isMailbump) {
            this.setTarget(continueLink);
        }
        return true;
    }

    setTarget(obj) {
        if (obj.length === 0) { return false; }
        var str = obj.ownerDocument.documentElement.querySelectorAll('body')[0].classList;
        var regex = RegExp('speedbump');
        if (regex.test(str)) {
            obj.target = "_top";
        }
        return true;
    }

    modifyLinksToSpeedbumpPage() {
        this.nodeList = document.querySelectorAll(this.querySelectorAll);
        if (this.debug) {
            console.log(this.nodeList);
        }
        for (let i = 0; i < this.nodeList.length; i++) {
            if (this.openInNewWindow) {
                this.nodeList[i].target = "_blank";
                this.nodesWithTargetAdded.push(this.nodeList[i]);
            }
            this.setTarget(this.nodeList[i]);
        }
        return true;
    }

    initSpeedbump() {
        this.modifyLinksToSpeedbumpPage();
        this.modifySpeedbumpPage();
        if (this.openInNewWindow) {
            document.getElementsByTagName('html')[0].classList.add("speedbump-open-in-new-window");
        }
        document.getElementsByTagName('html')[0].classList.add(this.htmlClass);
        return true;
    }
}

const speedbump = new Speedbump();

//const speedbump = new Speedbump({
//    "querySelectorAll": "a[href^=Speedbump\\.aspx], a[href^=speedbump\\.aspx]",
//    "buttonAcceptClass": 'Button1',
//    "buttonTxtAccept": 'Continue',
//    "openInNewWindow": true
//});

// Toolbar Side 6.1.0 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved.
class ToolbarSide extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.querySelectorAll = '.toolbar';
        this.debug = false;
        this.htmlClass = 'toolbar-side-enabled';
        this.whichSide = 'right';
        this.toolbarPanelClass = "toolbar-panel";
        this.toolbarMobileClass = ".toolbar-mobile";

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.initToolbarSide = this.initToolbarSide.bind(this);
        return true;
    }

    clean() {
        let elements = document.querySelectorAll(this.querySelectorAll);
        let toolbarMobileClassedElements = document.querySelectorAll(this.toolbarMobileClass);
        for (let i = 0, n = elements.length; i < n; i++) {
            elements[i].classList.remove(this.whichSide);
            let toolbarPanels = elements[i].querySelectorAll('div > div');
            for (var j = 0, m = toolbarPanels.length; j < m; j++) {
                toolbarPanels[j].parentElement.classList.remove(this.toolbarPanelClass);
            }
            for (var k = 0, l = toolbarMobileClassedElements.length; k < l; k++) {
                toolbarMobileClassedElements[k].removeEventListener('click', function () {
                    elements[i].classList.toggle('toolbar-active');
                });
            }
        }
        document.getElementsByTagName('html')[0].classList.remove(this.htmlClass);
        return true;
    }

    init() {
        if (!this.initToolbarSide()) return false;
        this.bindCallbacks();
        this.logTime('bindCallbacks');
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    initToolbarSide() {
        let elements = document.querySelectorAll(this.querySelectorAll);
        let toolbarMobileClassedElements = document.querySelectorAll(this.toolbarMobileClass);
        for (let i = 0, n = elements.length; i < n; i++) {
            elements[i].classList.add(this.whichSide);
            let toolbarPanels = elements[i].querySelectorAll('div > div');
            for (var j = 0, m = toolbarPanels.length; j < m; j++) {
                toolbarPanels[j].parentElement.classList.add(this.toolbarPanelClass);
            }
            for (var k = 0, l = toolbarMobileClassedElements.length; k < l; k++) {
                toolbarMobileClassedElements[k].addEventListener('click', function () {
                    elements[i].classList.toggle('toolbar-active');
                });
            }
        }
        document.getElementsByTagName('html')[0].classList.add(this.htmlClass);
        return true;
    }
}

const toolbarSide = new ToolbarSide();

// Contrast Class 2.3.0 by Jesse Fowler, Copyright 2019 Fiserv. All rights reserved.
class ContrastClass extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.querySelectorAll = ".contrast-class";
        this.lightClass = 'light';
        this.darkClass = 'dark';
        this.classReceiver = false;
        this.returnOpposite = false;
        this.thresholdRed = 299;
        this.thresholdGreen = 587;
        this.thresholdBlue = 114;
        this.threshold = 125;
        this.debugging = false;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.applyContrastClass = this.applyContrastClass.bind(this);
        return true;
    }

    clean() {
        this.nodeList = document.querySelectorAll(this.querySelectorAll);
        for (let i = 0; i < this.nodeList.length; i++) {
            this.nodeList[i].classList.remove(this.lightClass);
            this.nodeList[i].classList.remove(this.darkClass);
        }
        if (this.classReceiver) {
            document.querySelectorAll(this.classReceiver)[0].classList.remove(this.lightClass);
            document.querySelectorAll(this.classReceiver)[0].classList.remove(this.darkClass);
        }
        return true;
    }

    init() {
        if (!this.applyContrastClass()) return false;
        this.logTime('applyContrastClass');
        this.bindCallbacks();
        this.logTime('bindCallbacks');
        this.completeCallback();
        this.logTime('completeCallback');
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "Customizer":
                this.applyContrastClass();
                break;
            case "CMSInclude":
                if (obj.addedNodes) {
                    this.applyContrastClass();
                }
                break;
        }
    }

    applyContrastClass() {
        this.nodeList = document.querySelectorAll(this.querySelectorAll);
        for (let i = 0; i < this.nodeList.length; i++) {
            const node = this.nodeList[i];
            this.setContrastClass(node);
        }
        this.completeCallback();
        return true;
    }

    adjustForAlpha(color, alpha) {
        var alphaMultiplier = 0;
        if (alpha) {
            alphaMultiplier = 255 * parseFloat(alpha);
        }
        var adjustedColorValue = parseInt(color) + alphaMultiplier;
        var returnColorValue = 0;
        if (adjustedColorValue <= 255) {
            returnColorValue = adjustedColorValue;
        } else {
            returnColorValue = 255;
        }
        return returnColorValue;
    }

    rgbToObj(rgbColor) {
        const positionRegEx = /[0-9]+%/gm;
        let str = rgbColor.replace(/rgb[a]*\(/gm, "");
        let color = {};
        if (rgbColor.match(positionRegEx)) {
            color.position = rgbColor.match(positionRegEx)[0];
        }
        str = str.replace(positionRegEx, "").trim().replace(/\)/, "");
        let colorsRGB = str.split(/,/);
        color.red = colorsRGB[0].trim();
        color.green = colorsRGB[1].trim();
        color.blue = colorsRGB[2].trim();
        if (colorsRGB.length === 4) {
            color.alpha = colorsRGB[3].trim();
        }
        return (color);
    }

    weightedAverage = (nums, weights) => {
        const [sum, weightSum] = weights.reduce(
            (acc, w, i) => {
                acc[0] = acc[0] + nums[i] * w;
                acc[1] = acc[1] + w;
                return acc;
            },
            [0, 0]
        );
        return sum / weightSum;
    }

    linearGradientWeightedAverageColor(obj) {
        let objBackgroundImage = window.getComputedStyle(obj).getPropertyValue('background-image');
        if (objBackgroundImage === 'none') { return false; }
        let objBackgroundColor = window.getComputedStyle(obj).getPropertyValue('background-color');
        if (objBackgroundColor === 'rgba(0, 0, 0, 0)') {
            objBackgroundColor = 'rgb(255, 255, 255)';
        }
        let colorSteps = [];
        objBackgroundImage = objBackgroundImage.replace(/linear-gradient\(/gm, "").replace(/\)$/gm, "");

        const rgbRegEx = /rgb[a]*\([\s]*[0-9,\.\s]+\)[\s]*[0-9%]+/gm;
        let colorsRaw = objBackgroundImage.match(rgbRegEx);
        //console.info(colorsRaw);

        for (let i = 0; i < colorsRaw.length; i++) {
            colorSteps.push(this.rgbToObj(colorsRaw[i]));
        }

        let colorAreas = [];
        for (let j = 0; j < colorSteps.length - 1; j++) {
            let color = {};
            color.positionStart = colorSteps[j].position;
            color.positionEnd = colorSteps[j + 1].position;
            color.coverage = (parseFloat(color.positionEnd.replace(/\%/gm, "")) - parseFloat(color.positionStart.replace(/\%/gm, ""))) / 100;
            let alphaStart = '';
            if (colorSteps[j].hasOwnProperty('alpha')) {
                alphaStart = colorSteps[j].alpha;
            } else {
                alphaStart = '1';
            }
            let alphaEnd = '';
            if (colorSteps[j + 1].hasOwnProperty('alpha')) {
                alphaEnd = colorSteps[j + 1].alpha;
            } else {
                alphaEnd = '1';
            }
            let redStart = parseFloat(colorSteps[j].red) * parseFloat(alphaStart) + parseFloat(this.rgbToObj(objBackgroundColor).red) * (1 - parseFloat(alphaStart));
            let redEnd = parseFloat(colorSteps[j + 1].red) * parseFloat(alphaEnd) + parseFloat(this.rgbToObj(objBackgroundColor).red) * (1 - parseFloat(alphaEnd));
            color.red = (redStart + redEnd) / 2;
            let greenStart = parseFloat(colorSteps[j].green) * parseFloat(alphaStart) + parseFloat(this.rgbToObj(objBackgroundColor).green) * (1 - parseFloat(alphaStart));
            let greenEnd = parseFloat(colorSteps[j + 1].green) * parseFloat(alphaEnd) + parseFloat(this.rgbToObj(objBackgroundColor).green) * (1 - parseFloat(alphaEnd));
            color.green = (greenStart + greenEnd) / 2;
            let blueStart = parseFloat(colorSteps[j].blue) * parseFloat(alphaStart) + parseFloat(this.rgbToObj(objBackgroundColor).blue) * (1 - parseFloat(alphaStart));
            let blueEnd = parseFloat(colorSteps[j + 1].blue) * parseFloat(alphaEnd) + parseFloat(this.rgbToObj(objBackgroundColor).blue) * (1 - parseFloat(alphaEnd));
            color.blue = (blueStart + blueEnd) / 2;
            if (colorSteps[j].hasOwnProperty('alpha')) {
                color.alpha = colorSteps[j].alpha;
            }
            colorAreas.push(color);
        }
        //console.table(colorAreas);

        let weightedAverageColors = {};
        let colorReturn = "rgb("
        let colorVars = ['red', 'green', 'blue'];
        for (let i = 0; i < colorVars.length; i++) {
            weightedAverageColors[colorVars[i]] = {};
            weightedAverageColors[colorVars[i]].nums = [];
            weightedAverageColors[colorVars[i]].weights = [];
            //console.info(weightedAverageColors);
            for (let j = 0; j < colorAreas.length; j++) {
                //console.info(colorAreas[j][colorVars[i]]);
                weightedAverageColors[colorVars[i]].nums.push(colorAreas[j][colorVars[i]]);
                weightedAverageColors[colorVars[i]].weights.push(colorAreas[j].coverage);
            }
            colorReturn = colorReturn + Math.round(this.weightedAverage(weightedAverageColors[colorVars[i]].nums, weightedAverageColors[colorVars[i]].weights)) + ', ';
        }
        //console.info(weightedAverageColors);

        colorReturn = colorReturn.replace(/,\s$/, "") + ")";
        return colorReturn;
    }

    setContrastClass(obj) {
        let classReceiver = '';
        if (!this.classReceiver) {
            classReceiver = obj;
        } else {
            if (document.querySelectorAll(this.classReceiver).length > 0) {
                classReceiver = document.querySelectorAll(this.classReceiver)[0];
            } else {
                if (this.debugging) { console.log('There is no element: ' + this.classReceiver); }
                return false;
            }
        }
        let objBgColor = [];
        if (getComputedStyle(obj).backgroundColor === 'rgba(0, 0, 0, 0)' && window.getComputedStyle(obj).getPropertyValue('background-image') === 'none') {
            return false;
        } else {
            if (window.getComputedStyle(obj).getPropertyValue('background-image') !== 'none') {
                objBgColor = this.linearGradientWeightedAverageColor(obj).match(/(\d*),[\s]*(\d*),[\s]*(\d*)[,]*[\s]*([\d]*[.]*[\d]*)/);
            } else {
                objBgColor = getComputedStyle(obj).backgroundColor.match(/(\d*),[\s]*(\d*),[\s]*(\d*)[,]*[\s]*([\d]*[.]*[\d]*)/);
            }
        }
        //http://www.w3.org/TR/AERT#color-contrast
        let o = Math.round(((this.adjustForAlpha(objBgColor[1], objBgColor[4]) * parseInt(this.thresholdRed)) + (this.adjustForAlpha(objBgColor[2], objBgColor[4]) * parseInt(this.thresholdGreen)) + (this.adjustForAlpha(objBgColor[3], objBgColor[4]) * parseInt(this.thresholdBlue))) / 1000);
        classReceiver.classList.remove(this.lightClass);
        classReceiver.classList.remove(this.darkClass);
        if (o > parseInt(this.threshold)) {
            if (this.returnOpposite) {
                classReceiver.classList.add(this.darkClass);
                return this.darkClass;
            } else {
                classReceiver.classList.add(this.lightClass);
                return this.lightClass;
            }
        } else {
            if (this.returnOpposite) {
                classReceiver.classList.add(this.lightClass);
                return this.lightClass;
            } else {
                classReceiver.classList.add(this.darkClass);
                return this.darkClass;
            }
        }
        return false;
    }

}

const contrastClass = new ContrastClass();

//const contrastClass = new ContrastClass({
//    "thresholdRed": "257"
//});

//const contrastClass2 = new ContrastClass({
//    "querySelectorAll": ".sample-table.contrast-class",
//    "classReceiver": "body"
//});

// Current Date 1.0.0 by Paul Richards, Copyright 2022 Fiserv. All rights reserved.
class CurrentDate extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.querySelectorAll = '[class*="Date"]';
        this.toLocaleDateStringOptions = '{}';
        this.outputDate = new Date().toLocaleDateString(navigator.language, JSON.parse(this.toLocaleDateStringOptions));
        this.addedNodes = [];

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    clean() {
        for (let i = 0; i < this.addedNodes.length; i++) {
            this.addedNodes[i].remove();
        }
        for (let i = 0; i < this.nodeList.length; i++) {
            this.nodeList[i].classList.remove('visuallyhidden');
        }
        return true;
    }

    init() {
        if (!this.initCurrentDate()) return false;
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    initCurrentDate() {
        this.nodeList = document.querySelectorAll(this.querySelectorAll);
        let currentLang = 'en-US';
        let documentLang = document.documentElement.lang;
        if (navigator.language !== documentLang) {
            currentLang = documentLang;
        }
        const outputDate = new Date().toLocaleDateString(currentLang, JSON.parse(this.toLocaleDateStringOptions));
        for (let i = 0; i < this.nodeList.length; i++) {
            this.nodeList[i].classList.add('visuallyhidden');
            let currentDateObj = document.createElement('span');
            currentDateObj.classList.add('current-date');
            currentDateObj.innerHTML = outputDate;
            this.nodeList[i].after(currentDateObj);
            this.addedNodes.push(currentDateObj);
        }
        return true;
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "Expander":
                this.clean();
                this.initCurrentDate();
                break;
            case "CMSInclude":
                this.clean();
                this.initCurrentDate();
                break;
            case "LanguageSelector":
                this.clean();
                this.initCurrentDate();
                break;
         }
    }
}

const currentDate = new CurrentDate();

//const currentdate2 = new CurrentDate({
//    "toLocaleDateStringOptions": '{"weekday": "long", "year": "numeric", "month": "long", "day": "numeric"}'
//});

// Responsive Zoom 4.1.0 by Jesse Fowler, Copyright 2015 Fiserv. All rights reserved.
class ResponsiveZoom extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.scaleAdjustment = .995;
        this.nodeList = document.querySelectorAll('.responsivezoom, .Table-Style, .Table-Product, .Table-Privacy'),
        this.preventRunningWithSameWindowDimensions = true;
        this.hideBeforeResized = true,
        this.debug = false;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.applyResponsiveZoom = this.applyResponsiveZoom.bind(this);
        return true;
    }

    clean() {
        window.removeEventListener("resize", this.applyResponsiveZoom);
        if (typeof this.elementsAdded !== "object") {
            for (let i = this.elementsAdded.length - 1; i >= 0; i--) {
                let children = this.elementsAdded[i].childNodes;
                for (let j = 0; i < children.length; j++) {
                    children[j].style.transformOrigin = "";
                    children[j].style.transform = "";
                    children[j].style.marginTop = "";
                    children[j].style.marginBottom = "";
                    this.elementsAdded[i].insertAdjacentElement('afterend', children[j]);
                }
                this.elementsAdded[i].parentNode.removeChild(this.elementsAdded[i]);
            }
        }
        this.preventRunningWithSameWindowDimensions = true;
        return true;
    }

    init() {
        this.windowWidth = 0;
        if (!this.applyResponsiveZoom()) return false;
        this.logTime('applyResponsiveZoom');
        this.bindCallbacks();
        this.logTime('bindCallbacks');
        this.setWindowEvents();
        this.logTime('setWindowEvents');
        this.completeCallback();
        this.logTime('completeCallback');
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    onmessage(obj) {
        switch (obj.packageName) {
            case "Expander":
                if (obj.animationend) {
                    this.preventRunningWithSameWindowDimensions = false;
                    this.applyResponsiveZoom();
                    this.preventRunningWithSameWindowDimensions = true;
                }
                break;
            case "CMSInclude":
                if (obj.addedNodes) {
                    this.preventRunningWithSameWindowDimensions = false;
                    this.applyResponsiveZoom();
                    this.preventRunningWithSameWindowDimensions = true;
                }
                break;
            case "LanguageSelector":
                if (obj.change) {
                    this.preventRunningWithSameWindowDimensions = false;
                    this.applyResponsiveZoom();
                    this.preventRunningWithSameWindowDimensions = true;
                }
                break;
        }
    }

    applyResponsiveZoom() {
        if (window.innerWidth === this.windowWidth && this.preventRunningWithSameWindowDimensions) {
            return;
        } else {
            this.windowWidth = window.innerWidth;
        }
        if (!this.elementsAdded) this.elementsAdded = [];
        for (let i = 0; i < this.nodeList.length; i++) {
            const node = this.nodeList[i];
            const nodeWidth = parseFloat(window.getComputedStyle(node, null).width.replace("px", ""));
            // reset scale before calc.
            node.style.transformOrigin = "0 0";
            node.style.transform = "scale(1)";

            // The element being scaled can't be display:none.
            var elWidth = 0;
            if (node.style.display === 'none') {
                if (node.tagName === "TABLE") {
                    node.style.display = "table";
                } else {
                    node.style.display = "inline";
                }
                elWidth = nodeWidth;
                node.style.display = "none";
            } else {
                elWidth = nodeWidth;
            }
            this.logTime('The element being scaled...');

            // Widths set as a percentage are set to pixels for proper scaling.
            if (node.tagName === "TABLE") {
                if (!node.dataset.originalWidthString) {
                    node.dataset.originalWidthString = node.style.width;
                }
                if (!node.dataset.originalWidth) {
                    node.dataset.originalWidth = elWidth;
                    node.style.width = elWidth;
                } else {
                    if (node.style.width !== node.dataset.originalWidth) {
                        node.style.width = node.dataset.originalWidth;
                    }
                }
            }
            this.logTime('Widths set as a percentage are set to...');

            // Calculates the proportional scale.
            var elParentWidth = 0;
            if (!node.parentElement.classList.contains("responsive-zoom-wrapper")) {
                elParentWidth = parseFloat(window.getComputedStyle(node.parentElement, null).width.replace("px", "") - window.getComputedStyle(node.parentElement, null).paddingLeft.replace("px", "") - window.getComputedStyle(node.parentElement, null).paddingRight.replace("px", ""));
            } else {
                elParentWidth = parseFloat(window.getComputedStyle(node.parentElement.parentElement, null).width.replace("px", "") - window.getComputedStyle(node.parentElement.parentElement, null).paddingLeft.replace("px", "") - window.getComputedStyle(node.parentElement.parentElement, null).paddingRight.replace("px", ""));
            }

            var elScale = elParentWidth / elWidth;
            if (this.debug) { console.log('elScale: ' + elScale + ' elParentWidth: ' + elParentWidth + ' elWidth: ' + elWidth); }
            this.logTime('Calculates the proportional scale...');

            // Create wrapper to space out the vertical area to the new proportional height.
            if (!node.parentElement.classList.contains("responsive-zoom-wrapper")) {
                var responsiveZoomWrapper = document.createElement("div");
                responsiveZoomWrapper.classList.add("responsive-zoom-wrapper");
                node.after(responsiveZoomWrapper);
                responsiveZoomWrapper.appendChild(node);
                this.elementsAdded.push(responsiveZoomWrapper);
                node.parentElement.style.marginTop = window.getComputedStyle(node, null).marginTop;
                node.style.marginTop = 0;
                node.parentElement.style.marginBottom = window.getComputedStyle(node, null).marginBottom;
                node.style.marginBottom = 0;
            }

            // Applies the scale.
            if (elScale < 1) {
                node.style.transformOrigin = "0 0";
                node.style.transform = "scale(" + (elScale * this.scaleAdjustment) + ")";
                node.parentElement.style.width = nodeWidth * elScale + 'px';
                if (this.debug) { console.log('Setting parent element height to: ' + window.getComputedStyle(node, null).height); }
                node.parentElement.style.height = parseFloat(window.getComputedStyle(node, null).height.replace("px", "")) * elScale + 'px';
            } else {
                node.style.transformOrigin = "";
                node.style.transform = "";
                if (node.parentElement.classList.contains("responsive-zoom-wrapper")) {
                    if (this.debug) { console.log('Detected responsive-zoom-wrapper'); }
                    var parentToRemove = node.parentElement;
                    node.style.marginTop = "";
                    node.style.marginBottom = "";
                    parentToRemove.insertAdjacentElement('afterend', node);
                    this.elementsAdded = this.elementsAdded.filter(item => item !== parentToRemove);
                    parentToRemove.parentNode.removeChild(parentToRemove);
                }
                node.style.width = node.dataset.originalWidthString;
            }

            if (this.hideBeforeResized) { node.style.opacity = "1"; }
        }
        this.completeCallback();
        return true;
    }

    setWindowEvents() {
        document.fonts.ready.then((fontFaceSet) => {
            this.preventRunningWithSameWindowDimensions = false;
            this.applyResponsiveZoom();
            this.preventRunningWithSameWindowDimensions = true;
        });
        window.addEventListener("resize", this.applyResponsiveZoom);
        return true;
    }
}

const responsiveZoom = new ResponsiveZoom();

// Resize Class 2.0.0 by Jesse Fowler, Copyright 2019 Fiserv. All rights reserved.
class ResizeClass extends Fiserv {
    constructor(options) {
        //Parent/Super Constructor Call
        super(options);

        //Default Properties
        this.nodeList = document.querySelectorAll('html');
        this.nodeListEventListeners = [];
        this.debounceDuration = 500;
        this.debug = true;
        this.htmlClass = 'resize-class-enabled';
        this.resizeClass = "resize";
        this.timer;

        //Default Overrides
        this.options = options;

        //Initialize Needed Functions
        this.init();

        //Complete Time Stamp
        this.logTime(`Init End`);
    }

    bindCallbacks() {
        this.clean = this.clean.bind(this);
        this.assignResizeClass = this.assignResizeClass.bind(this);
        this.completeCallback = this.completeCallback.bind(this);
        this.initResizeClass = this.initResizeClass.bind(this);
        return true;
    }

    clean() {
        document.querySelector('html').classList.remove(this.resizeClass);
        window.removeEventListener("resize", this.nodeListEventListener);
        document.querySelector('html').classList.remove(this.htmlClass);
        return true;
    }

    init() {
        if (!this.initResizeClass()) return false;
        this.bindCallbacks();
        this.completeCallback();
        return true;
    }

    completeCallback() {
        Fiserv.message(this);
    }

    assignResizeClass() {
        document.querySelector('html').classList.add(this.resizeClass);
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            document.querySelector('html').classList.remove(this.resizeClass);
        }, this.debounceDuration);
    }

    initResizeClass() {
        document.querySelector('html').classList.remove(this.resizeClass);
        let assignResizeClass = this.assignResizeClass;
        assignResizeClass = assignResizeClass.bind(this);
        this.nodeListEventListener = assignResizeClass;
        window.addEventListener('resize', assignResizeClass);
        document.querySelector('html').classList.add(this.htmlClass);
    }
}

const resizeClass = new ResizeClass();

