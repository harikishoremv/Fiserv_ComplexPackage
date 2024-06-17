// Online Banking 1.23.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved.
function activateLogin(e) {
    let body = document.querySelector('body');
    if (body.classList.contains('home')) {
        if (e) {
            e.preventDefault();
        }
        if (body.classList.contains('openob')) {
            body.classList.remove('openob');
        } else {
            body.classList.add('openob');
        }
        body.classList.remove('opennav');
    }
}

let loginOpenElements = document.querySelectorAll('.login-open');
for (let i = 0; i < loginOpenElements.length; i++) {
    loginOpenElements[i].addEventListener('click', function (e) {
        activateLogin(e);
    });
}

let loginCloseElements = document.querySelectorAll('.login-close');
for (let i = 0; i < loginCloseElements.length; i++) {
    loginCloseElements[i].addEventListener('click', function (e) {
        activateLogin(e);
    });
}

(function initializeLogin() {
    if (window.location.hash === '#Login-Panel') {
        activateLogin();
    }
})();

jQuery(function () {

    // Location Finder 1.1.0 by Jesse Fowler, Copyright 2023 Fiserv. All rights reserved.
    const locationFinder = new LocationFinder({
        "map": {
            "center": {
                "Latitude": 30,
                "Longitude": -70
            },
            "zoom": 13
        }
    });

    // Slideshow 4.6.0 by Jesse Fowler, Copyright 2015 Fiserv. All rights reserved.
    jQuery('table[class*="-Slideshow"] > tbody > tr > td').slideShow();

    // Side Navigation Generator 5.1.0 by Jesse Fowler, Copyright 2014 Fiserv. All rights reserved.
    jQuery("[class*='Subsection-Table'], .subsection-table").not('[class*="-Guide"]').sideNavGenerator({
        fullURLEnable: true,
        sideNavAsToolbar: true
    });

    // Product Comparison 1.2.0 by Jesse Fowler and Kristen Rogers, Copyright 2022 Fiserv. All rights reserved.
    const productComparison = new ProductComparison({
        "querySelectorAll": '[class*="Product-Comparison-Table-Display"]'
    });

    const productComparison2 = new ProductComparison({
        "type": "time-value",
        "querySelectorAll": '[class*="Product-Comparison-Table-Calculator"]:not([class*="-Recurring"])'
    });

    const productComparison3 = new ProductComparison({
        "type": "time-value-recurring-deposit",
        "querySelectorAll": '[class*="Product-Comparison-Table-Recurring-Calculator"]',
        "dataTable": 'data-table-recurring'
    });

    // Text Resizer 5.0.1 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved.
    jQuery('html').textResizer();

    // Online Banking 1.23.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved.
    jQuery('#login').onlineBanking({
        defaultAccountType: "personal",
        routingNumber: "199999996", //OB Routing Number
        retail: {
            version: "Cloud-Load", //Use the Retail Online version number, or "custom" for the custom function. If that version isn't set, 5.1 will be used.
            server: "idemo.secureinternetbank.com", //OB Server Subdomain
            profileNumber: null, //OB Profile Number (Integer)
            active: true
        },    
        //retail: { // Abiliti XD / Custom
        //    version: "custom",
        //    active: true,
        //    custom: function () {
        //        jQuery("form.personal").on('submit', function () {
        //            this.action = "https://bankurl.onlinebank.com/login.aspx";
        //        });
        //        return false;
        //    }
        //},
        business: {
            version: "6.0-Load", //Use the Business Online version number, or "custom" for the custom function. If that version isn't set, 5.0 will be used.
            server: "idemo.secureinternetbank.com", //OB Server Subdomain
            profileNumber: null, //OB Profile Number (Integer)
            active: true
        }
    });

    const OBValidate = new ValidateForm({
        "querySelectorAll": `#login form.validate-form`,
        "validateDelay": 0
    });

    // Field History 2.0.1 by JP Larson, Copyright 2018 Fiserv. All rights reserved.
    if (typeof jQuery.fn.onlineBanking === "function") {
        jQuery('[name=loginTo]').fieldHistory({
            form: jQuery('#login').find('form')
        });
    }
    //jQuery('input, select, textarea').fieldHistory();

    // Smooth Scroll 4.0.1 by JP Larson, Copyright 2018 Fiserv. All rights reserved.
    var scroll1 = jQuery('a[href*="#"]:not([href="#"]):not(.exclude-smoothScroll)').smoothScroll();

    // Accessibility Tab Expand 2.1.3 by JP Larson, Copyright 2018 Fiserv. All rights reserved.
    jQuery('nav#primary').accessibilityTabExpand();

    // Anniversary Badge 2.0.2 by Jesse Fowler, Copyright 2018 Fiserv. All rights reserved.
    const anniversaryBadgeInclude = new CMSInclude({
        "querySelectorAll": ".Include-Anniversary-Badge",
        "includeURL": "inc_anniversary-badge.aspx",
        "callback": function () {
            jQuery('svg#Anniversary-Badge #digit').anniversaryBadge({
                "day": 1,
                "month": 1,
                "year": 1984
            });
        }
    });

    // Responsive Table 2.0.0 by Kristen Rogers, Copyright 2016 Fiserv. All rights reserved.
    jQuery(".Table-Product").responsiveDataTable();

    // Scroll To 1.3.2 by Jesse Fowler, Copyright 2015 Fiserv. All rights reserved.
    jQuery('section:not(#toolbar), .subsection, [class*="Subsection-Table"]').scrollTo({
        skipInitial: 1
    });

    // Tour 3.0.2 by JP Larson, Copyright 2018 Fiserv. All rights reserved.
    //Delete the options to the tour not run on load.
    jQuery('body').tour({
        url: "inc_tour.aspx"
    });

    // Weather 4.3.0 by Jesse Fowler, Copyright 2014 Fiserv. All rights reserved.
    jQuery('.weather').weather();

    // Lightcase 4.3.0 by @cornelboppart, GPL license
    jQuery('a[rel^=lightcase]').lightcase({
        attr: 'rel'
    });

    //Video helper scripts
    //Adds class Automatically to embedded videos
    jQuery('a[href*="embed"]').each(function () {
        jQuery(this).addClass('media');
    });

    //Adds Lightbox Manual
    jQuery('.media').lightcase();

    // Count Up 1.0.1 by Gareth Nolan, Copyright 2015. MIT license
    jQuery('#animate-number-1, #animate-number-2, #animate-number-3').each(function () {
        let element = jQuery(this).get(0);
        let autoReset = true; // Change to false to stop animations from playing after scrolling past these elements.
        let animateNumberInitialNumber = parseInt(element.innerHTML);
        let countUpScrollTrigger = new ScrollTrigger({
            "nodeList": [element],
            "rootMargin": "-10% 0%"
        });
        let prevState = element.classList.contains('scroll-active');
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                const { target } = mutation;

                if (mutation.attributeName === 'class') {
                    const currentState = mutation.target.classList.contains('scroll-active');
                    if (prevState !== currentState) {
                        prevState = currentState;
                        if ((!autoReset && !mutation.target.classList.contains("numerator-enabled")) || autoReset) {
                            jQuery(this).numerator({ fromValue: 1, toValue: animateNumberInitialNumber, duration: 3000, delimiter: ',' });
                            mutation.target.classList.add("numerator-enabled");
                        }
                    }
                }
            });
        });
        observer.observe(element, {
            attributes: true,
            attributeOldValue: true,
            attributeFilter: ['class']
        });
    });

    // Staff Table 1.2.0 by JP Larson, Copyright 2020 Fiserv. All rights reserved.
    jQuery('a.Include-Staff-Table').sortTable({
        databaseName: location.hostname,
        tableID: "Staff-Table",
        containerClass: "Staff-Table",
        url: "inc_cms-include.aspx?name=Staff+Table",
        outputAllEntries: true,
        sort: {
            default: "Name"
        },
        detailsLinkText: "More Info",
        collectionText: "Staff",
        expiration: {
            lastModified: false,
            session: true,
            interval: 1,
            timeScale: "days",
            storageName: "Table-Update"
        }
    });

    // Fiserv Forms 1.9.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved.
    jQuery('form.fiserv-form').fiservForm({
        autoID: true,
        //paginate: true,
        progress: true,
        //leaveWarning: "Warning: Your progress will be lost if you continue.",
        verifyInputs: {
            dataAttribute: "data-verify"
        },
        sideNav: {
            excludedPageClass: 'no-sidenav',
            addToSideNavClassName: 'Side-Navigation',
            includeCurrentPageSiblings: false,
            debug: false,
            toggleOnScroll: true,
            toggleOnScrollClass: 'active',
            lastActivatedTriggerClass: 'last-active',
            sideNavAsToolbar: false
        },
        calculate: {
            dataAttribute: "data-calculate"
        },
        singleTrigger: {
            listeners: "change keyup keydown paste blur click propertychange RadioStateChange input",
            customEvent: "formEvent",
        },
        validateForm2: {
            querySelectorAll: ".validate-form",
            validationTemplate: `<span class="validation"></span>`,
            errorTemplate: `<span class="error">Please fill out this field.</span>`,
            validClass: "valid",
            invalidClass: "invalid",
            requiredClass: "required",
            focus: true,
            scroll: true,
            scrollPosition: 0.3,
            eventListeners: ["formEvent"],
            validateDelay: 500,
            custom: vForm => {
                let params = (new URL(document.location.href.toLowerCase())).searchParams;
                let vuid = "";
                if (params.has("vuid")) {
                    vuid = params.get("vuid");
                }
                vForm.node.action = `../../../admin/exportXML.asp?vuid=${vuid}`;
                return true;
            }
        },
        formsEnabler: {
            listeners: ["formEvent"],
            dataAttribute: "data-enabler",
            disabledClass: "disabled",
            comparitor: "positive"
        },
        formsDisabler: {
            listeners: ["formEvent"],
            dataAttribute: "data-disabler",
            disabledClass: "disabled",
            comparitor: "negative"
        },
        formsExpander: {
            listeners: ["formEvent"],
            disabledClass: "disabled",
            collapsedClass: "collapse",
            dataAttribute: "data-expander",
            comparitor: "positive"
        },
        formsCollapser: {
            listeners: ["formEvent"],
            disabledClass: "disabled",
            collapsedClass: "collapse",
            dataAttribute: "data-collapser",
            comparitor: "negative"
        },
        formatInputs: {
            currency: {
                selector: ".currency",
                locale: "en-US",
                currency: "USD"
            },
            ssn: {
                selector: ".ssn"
            },
            ein: {
                selector: ".ein"
            },
            zip: {
                selector: ".zip"
            },
            phone: {
                selector: "[type=tel]",
                format: "domestic"
            },
            date: {
                selector: ".date",
                format: "MM/DD/YYYY"
            }
        },
        duplicate: {
            dataAttribute: "data-duplicate",
        }
    });

    // Pseudo Select 4.3.0 by JP Larson, Copyright 2021 Fiserv. All rights reserved.
    jQuery('label select').pseudoSelect();

});