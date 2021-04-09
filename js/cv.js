// data
var jobs = {
    title: 'PREVIOUS JOBS:',
    locations: [{
        title: 'YAMAN-NET (Syria): 2013-2015 / Administrator- software engineer',
        url: 'https://google.com',
    },
    {
        title: 'Elma Technology (Istanbul): 2017-2018 / Backend & Mobile Developer',
        url: 'https://google.com',
    },
    {
        title: 'Boraq Group (Istanbul): 2018-2020 / Backend & Mobile Developer',
        url: 'https://boraq-group.com/en',
    },
    {
        title: 'CARBON (Istanbul): 2020-2021 / Software Engineer',
        url: 'https://carboncd.com',
    },
    ],
};
var works = {
    title: 'SOME OF MY WORKS:',
    locations: [
        {
            title: 'LARAVEL + REACT JS + SASS media production website',
            url: 'https://carboncd.com',
        },
        {
            title: 'Dart / Flutter (with Magento Backend) - Online shop for auto parts : [Android Ver]',
            url: 'https://play.google.com/store/apps/details?id=com.rafraf.store',
        },
        {
            title: 'Dart / Flutter – Android / IOS Ecommerce Application (for Woocomerce ecommerce website): [Android Ver]',
            url: 'https://play.google.com/store/apps/details?id=com.turksey.marketplace',
        },
        {
            title: 'Dart / Flutter – Android / IOS Ecommerce Application (for Woocomerce ecommerce website): [IOS Ver]',
            url: 'https://apps.apple.com/us/app/turksey-shopping-online/id1487432922',
        },
    ],
};
var pins_data =
{
    pin1: works,
    pin2: jobs,
    pin3: works,
    pin4: jobs,
    pin5: works,
    pin6: jobs,
    pin7: works,
    pin8: jobs,
    pin9: works,
    pin10: jobs,
    pin11: works,
    pin12: jobs,
    pin13: works,    
};

$(function () {
    // zoom on mobile: - https://hammerjs.github.io/getting-started/
    // https://d19jftygre6gh0.cloudfront.net/stephanbogner/06c3e0d3a1c8fcca61b5345e1af80798
    zooming();

    // $('.info-box ul li').click(function () {
    //     window.location.href = '?page=v1';
    // });

    // slider & show/hide variables
    var hideRunner;
    const hideAfter = 2000;

    // # Pins Listeners #
    $('.map .map-circles .map-pin').mouseenter(function (evt) {
        // clear downing logo runner
        clearTimeout(hideRunner);

        // up logo if is down      
        if ($('.details').hasClass('hide')) {
            $('.details').removeClass('hide');
            $('.details').addClass('hide-remove');
        };

        // init data        
        initData(this);

        // show info
        $('.details .body, .details .footer').addClass('show');

        //    $(this).append(mapIcon1);

        // change z-index in svg - https://stackoverflow.com/questions/17786618/how-to-use-z-index-in-svg-elements
        // DONE by Order
        // var newtarget = this;//evt.target || event.target;        
        // var topmost = document.getElementById("use");
        // topmost.setAttributeNS("http://www.w3.org/1999/xlink",
        //     "xlink:href",
        //     "#" + newtarget.id);
        // $('#use').attr('xlink:href', '#' + $(this).find('image').id);
    });
    $('.map .map-circles .map-pin').mouseleave(function (evt) {
        // hide info
        $('.details .body, .details .footer').removeClass('show');

        // down logo after a while (if no pin clicked !important)
        if (!$('.details .body, .details .footer').hasClass('clicked')) {
            hideRunner = setTimeout(() => {
                $('.details').addClass('hide');
                $('.details').removeClass('hide-remove');
            }, hideAfter);

            // remove title and elemetns in details (aslo if no pin clicked !important)
            $('#info-title').text('');
            $('.info-box ul').html('');
        }
    });

    $('.map .map-circles .map-pin').click(function (evt) {
        // clear downing logo runner            
        clearTimeout(hideRunner);

        // add clicked to pin
        $(this).addClass('clicked');

        // init data        
        initData(this);

        // show info
        $('.details .body, .details .footer').addClass('clicked');

        // show overlay
        $('.overlay').addClass('show');
    });

    // # close icon #
    $('.close-icon , .overlay').click(function (e) {
        // down logo after a while
        hideRunner = setTimeout(() => {
            $('.details').addClass('hide');
            $('.details').removeClass('hide-remove');
        }, hideAfter);

        // remove clicked class        
        $('.map .map-circles .map-pin').removeClass('clicked');

        // remove title and elemetns in details
        $('#info-title').text('');
        $('.info-box ul').html('');

        // hide info
        $('.details .body, .details .footer').removeClass('clicked');

        // hide overlay
        $('.overlay').removeClass('show');
    });

    // ##### functions #####
    function initData(pin) {
        // var locs = JSON.parse(pins_data);
        var locs = pins_data;
        console.log(locs['php']);
        if (locs[pin.id]) {
            let loc = locs[pin.id];

            // set title
            $('#info-title').html(loc.title);

            // set elements
            $('.info-box ul').html('');
            for (const key in loc.locations) {
                if (Object.hasOwnProperty.call(loc.locations, key)) {
                    const el = loc.locations[key];
                    if (el && el.title && el.url) {
                        const subtitle = (el.subtitle ? `<span>&nbsp;${el.subtitle}</span>` : '');
                        const d = `<li url="${el.url}">${playIcon + el.title + subtitle}</li>`;
                        $('.info-box ul').append(d);
                    }
                }
            }

            // set elements click listener
            $('.info-box ul li').click(function () {
                // window.location.href = $(this).attr('url');
                window.open($(this).attr('url'), '_blank').focus();
            });
        }

        // change footer icon
        $('.details .footer img').attr('src', `../assets/img/pins/${pin.id}.svg?v=2`);
    }
});

// zooming function
function zooming() {
    const myOptions = {};
    var element = document.getElementById('map-container');
    console.log(element);
    var hammertime = new Hammer(element, myOptions);

    hammertime.get('pinch').set({ enable: true });
    hammertime.get('pan').set({ threshold: 0 });

    var fixHammerjsDeltaIssue = undefined;
    var pinchStart = { x: undefined, y: undefined }
    var lastEvent = undefined;

    var originalSize = {
        width: 200,
        height: 300
    }

    var current = {
        x: 0,
        y: 0,
        z: 1,
        zooming: false,
        width: originalSize.width * 1,
        height: originalSize.height * 1,
    }

    var last = {
        x: current.x,
        y: current.y,
        z: current.z
    }

    function getRelativePosition(element, point, originalSize, scale) {
        var domCoords = getCoords(element);

        var elementX = point.x - domCoords.x;
        var elementY = point.y - domCoords.y;

        var relativeX = elementX / (originalSize.width * scale / 2) - 1;
        var relativeY = elementY / (originalSize.height * scale / 2) - 1;
        return { x: relativeX, y: relativeY }
    }

    function getCoords(elem) { // crossbrowser version
        var box = elem.getBoundingClientRect();

        var body = document.body;
        var docEl = document.documentElement;

        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;

        var top = box.top + scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;

        return { x: Math.round(left), y: Math.round(top) };
    }

    function scaleFrom(zoomOrigin, currentScale, newScale) {
        var currentShift = getCoordinateShiftDueToScale(originalSize, currentScale);
        var newShift = getCoordinateShiftDueToScale(originalSize, newScale)

        var zoomDistance = newScale - currentScale

        var shift = {
            x: currentShift.x - newShift.x,
            y: currentShift.y - newShift.y,
        }

        var output = {
            x: zoomOrigin.x * shift.x,
            y: zoomOrigin.y * shift.y,
            z: zoomDistance
        }
        return output
    }

    function getCoordinateShiftDueToScale(size, scale) {
        var newWidth = scale * size.width;
        var newHeight = scale * size.height;
        var dx = (newWidth - size.width) / 2
        var dy = (newHeight - size.height) / 2
        return {
            x: dx,
            y: dy
        }
    }

    hammertime.on('doubletap', function (e) {
        var scaleFactor = 1;
        if (current.zooming === false) {
            current.zooming = true;
        } else {
            current.zooming = false;
            scaleFactor = -scaleFactor;
        }

        element.style.transition = "0.3s";
        setTimeout(function () {
            element.style.transition = "none";
        }, 300)

        var zoomOrigin = getRelativePosition(element, { x: e.center.x, y: e.center.y }, originalSize, current.z);
        var d = scaleFrom(zoomOrigin, current.z, current.z + scaleFactor)
        current.x += d.x;
        current.y += d.y;
        current.z += d.z;

        last.x = current.x;
        last.y = current.y;
        last.z = current.z;

        update();
    })

    hammertime.on('pan', function (e) {
        if (lastEvent !== 'pan') {
            fixHammerjsDeltaIssue = {
                x: e.deltaX,
                y: e.deltaY
            }
        }

        current.x = last.x + e.deltaX - fixHammerjsDeltaIssue.x;
        current.y = last.y + e.deltaY - fixHammerjsDeltaIssue.y;
        lastEvent = 'pan';
        update2();
    })

    hammertime.on('pinch', function (e) {
        var d = scaleFrom(pinchZoomOrigin, last.z, last.z * e.scale)
        current.x = d.x + last.x + e.deltaX;
        current.y = d.y + last.y + e.deltaY;
        current.z = d.z + last.z;
        lastEvent = 'pinch';
        update();
    })

    var pinchZoomOrigin = undefined;
    hammertime.on('pinchstart', function (e) {
        pinchStart.x = e.center.x;
        pinchStart.y = e.center.y;
        pinchZoomOrigin = getRelativePosition(element, { x: pinchStart.x, y: pinchStart.y }, originalSize, current.z);
        lastEvent = 'pinchstart';
    })

    hammertime.on('panend', function (e) {
        last.x = current.x;
        last.y = current.y;
        lastEvent = 'panend';
    })

    hammertime.on('pinchend', function (e) {
        last.x = current.x;
        last.y = current.y;
        last.z = current.z;
        lastEvent = 'pinchend';
    })
    function update() {
        // current.height = originalSize.height * current.z;
        // current.width = originalSize.width * current.z;
        // element.style.transform = "translate3d(" + current.x + "px, " + current.y + "px, 0) scale(" + current.z + ")";
    }
    function update2() {
        // let tomove = element;
        // let tomove = document.getElementById('map');
        current.height = originalSize.height * current.z;
        current.width = originalSize.width * current.z;
        // console.log('current: ');
        // console.log(isOverflown(element));
        // console.log(current);        
        // element.style.transform = "translate3d(" + current.x + "px, " + current.y + "px, 0) scale(" + current.z + ")";
        if (isZoomed) {
            element.style.transform = "translate3d(" + current.x + "px, " + current.y + "px, 0) scale(1.8)";
        }
        else {
            current.x = 0;
            current.y = 0;
            fixHammerjsDeltaIssue = {
                x: 0,
                y: 0
            }
            last.x = 0;
            last.y = 0;
            element.style.transform = "translate3d(" + current.x + "px, " + current.y + "px, 0)";
        }
        // let x = current.x;
        // let y = current.y, tr = '';
        // if (current.z >= 1.1 && current.z <= 2) {//current.zooming ) {
        //     tr = "translate3d(" + x + "px, " + y + "px, 0) scale(" + current.z + ")";
        // } else {
        //     tr = "scale(" + current.z + ")";
        // }
        // tomove.style.transform = tr;
    }

    // zoom btn
    var isZoomed = isMobile2();
    // console.log(isMobile2());
    if (isZoomed) {
        element.style.transform = "translate3d(" + current.x + "px, " + current.y + "px, 0) scale(1.8)";
        $('#zoom-btn').addClass('zoomed-in');
    }
    $('#zoom-btn').click(function (e) {
        // onZoomBtnClick(e);
        if (!isZoomed) {
            element.style.transform = "translate3d(" + current.x + "px, " + current.y + "px, 0) scale(1.8)";
            isZoomed = true;
            // this.src = '../assets/img/zoom-out.png';
            $(this).addClass('zoomed-in');
        }
        else {
            current.x = 0;
            current.y = 0;
            fixHammerjsDeltaIssue = {
                x: 0,
                y: 0
            }
            last.x = 0;
            last.y = 0;
            element.style.transform = "translate3d(" + current.x + "px, " + current.y + "px, 0)";
            isZoomed = false;
            // this.src = '../assets/img/zoom-in.png';
            $(this).removeClass('zoomed-in');
        }
    });
}

// check if overflow
function isOverflown(element) {
    element = document.querySelector('main');
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

// check if mobile
function isMobile() {
    return window.screen.width <= 1170;
}
function isMobile2() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
}