AFRAME.registerComponent('my-elements', {
    schema: { type: 'string' },

    init: function () {
        // debugging
        // console.log(this.data);
        // console.log(this);

        // init elements
        var cursor = document.querySelector('a-cursor');
        var vidSphere = document.querySelector('a-videosphere');;

        switch (this.data) {
            case 'next':
                // events: click - mouseenter - mouseleave
                this.el.addEventListener("mouseenter", () => onMouseEnter(this, next_url));
                this.el.addEventListener("mouseleave", () => onMouseLeave(this));
                break;

            case 'home':
                this.el.addEventListener("mouseenter", () => onMouseEnter(this, home_url));
                this.el.addEventListener("mouseleave", () => onMouseLeave(this));
                break;

            case 'prev':
                this.el.addEventListener("mouseenter", () => onMouseEnter(this, prev_url));
                this.el.addEventListener("mouseleave", () => onMouseLeave(this));
                break;

            case 'videosphere':
                // https://aframe.io/docs/1.2.0/primitives/a-videosphere.html
                // vidSphere.components.material.data.src.currentTime = 0;
                this.el.components.material.material.map.image.play();
                break;

            default:
                break;
        }

        var clickTimer, deg;

        function onMouseEnter(el, url) {
            // el = document.querySelector('#' + el.data);
            // console.log(el);
            // el.setAttribute('opacity','1');
            deg = 1;
            if (cursor) {
                clickTimer = setInterval(function () {
                    if (deg < 2) deg += 0.015;
                    else {
                        clearInterval(clickTimer);
                        cursor.setAttribute('scale', '1 1 1');
                        goVideo(url);
                    }
                    cursor.setAttribute('scale', `${deg} ${deg} 1`);
                }, 15);
            }

        }
        function onMouseLeave(el) {
            // console.log(`${el} leave`);
            clearInterval(clickTimer);
            if (cursor) {
                cursor.setAttribute('scale', '1 1 1');
            }
        }
        function goVideo(url) {
            // 1- by change video
            // if (vidSphere) {
            //     vidSphere.setAttribute('src', url);
            //     vidSphere.components.material.data.src.currentTime = 0;
            //     vidSphere.components.material.material.map.image.play();
            // }

            // var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
            // var url = new URL(url_string);
            // var c = url.searchParams.get("c");
            // console.log(c);

            // 2- by change url
            window.location.href = url;
        }

    }
});

// for video on ios
// window.addEventListener('touchmove', checkVideo);
// window.addEventListener('mousedown', checkVideo);
// window.addEventListener('touchstart', checkVideo);

// function checkVideo(e) {
//     console.log('asd' + e);
//     let vs = document.querySelector('a-videosphere');
//     console.log('clicked');
//     // console.log(vs.components.material.material.map.image.play());            
//     if (vs){
//         vs.components.material.material.map.image.load();
//         vs.components.material.material.map.image.play();
//     }
// }