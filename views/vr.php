<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title><?= $data['title'] ?></title>
    <meta name="description" content="Video - A-Frame">
    <!-- <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script> -->
    <script src="js/aframe-1.2.0.min.js"></script>
    <script src="js/look-control.js"></script>
    <script src="js/vr.js"></script>
    <!-- for streaming -->
    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
</head>

<body>
    <a-scene>
        <!-- https://www.youtube.com/watch?v=ZFTSLHd7xgY -->
        <!-- Asset Management System -->
        <a-assets>
            <!-- <video id="gmTurtles" src="https://www.youtube.com/watch?v=8EtfihvMLyQ"></video> -->
            <!-- <video  src="assets/360_VR Master Series _ Free Download _ London On Tower Bridge.mp4" width="800" height="600" id="gmTurtles" autoplay></video> -->
            <!-- <video  id="gmTurtles" src="assets/360_VR Master Series _ Free Download _ London On Tower Bridge.mp4" loop="true"
                crossOrigin="anonymous" muted  preload="auto" autoplay></video> -->
            <img id="next" src="assets/img/next.svg" alt="Next">
            <img id="home" src="assets/img/home.svg" alt="Home">
            <img id="prev" src="assets/img/prev.svg" alt="Prev">
            <img id="logo-circle" src="assets/img/logo-circle.svg" alt="Prev">
            <!-- <video id="gmTurtles" src="< ?= $data['video_url'] ?>" loop="true"></video> -->
            <!-- using vimeo :https://stackoverflow.com/questions/35055233/vimeo-video-player-in-html5 -->
            <?php if (strpos($data['video_url'], '.mp4') !== false) : ?>
                <!-- <video id="gmTurtles" preload="none" muted playsinline>
                    <source type="video/mp4" src="<?= $data['video_url'] ?>">
                </video> -->
            <?php else : ?>
                <!-- STREAMING -->
                <!-- <video id="gmTurtles" loop="true"></video> -->
            <?php endif; ?>
            <video width="2000" height="1000" id="gmTurtles" loop="true" muted="muted"></video>
            <audio id="audio" src="main_track.mp3" autoplay></audio>
        </a-assets>
        <!-- <video style="display: block;" id="gmTurtles" src="assets/xxx.mp4" muted preload="auto" loop="true"></video> -->
        <!-- <video style="display: block;" id="gmTurtles2" src="assets/xxx2.mp4" autoplay="autoplay" muted preload="auto"
            loop="true" autoplay></video> 
            look-controls="pointerLockEnabled: true,mouseEnabled: false,touchEnabled: false,enabled: false
        -->

        <!-- Carmera -->
        <a-camera look-controls="touchEnabled: true">
            <a-cursor color="#fff" attribute="sacle" from="1 1 1" to="2 2 1" begin="click"></a-cursor>
        </a-camera>

        <!-- Hotspots -->
        <!-- anim: https://aframe.io/docs/1.2.0/components/animation.html -->
        <a-image material="shader: standard;emissive: #fff; emissiveIntensity: 0.0" animation__mouseenter="property: components.material.material.emissiveIntensity; to: 0.2; startEvents: mouseenter; dur: 500" animation__mouseleave="property: components.material.material.emissiveIntensity; to: 0.0; startEvents: mouseleave; dur: 500" my-elements="next" src="#next" position="1.25 3 -5"></a-image>
        <a-image material="shader: standard;emissive: #fff; emissiveIntensity: 0.0" animation__mouseenter="property: components.material.material.emissiveIntensity; to: 0.2; startEvents: mouseenter; dur: 500" animation__mouseleave="property: components.material.material.emissiveIntensity; to: 0.0; startEvents: mouseleave; dur: 500" my-elements="home" src="#home" position="0 3 -5"></a-image>
        <a-image material="shader: standard;emissive: #fff; emissiveIntensity: 0.0" animation__mouseenter="property: components.material.material.emissiveIntensity; to: 0.2; startEvents: mouseenter; dur: 500" animation__mouseleave="property: components.material.material.emissiveIntensity; to: 0.0; startEvents: mouseleave; dur: 500" my-elements="prev" src="#prev" position="-1.25 3 -5"></a-image>
        <a-image src="#logo-circle" position="0 0 0" rotation="-90 0 0"></a-image>

        <!-- 360 video -->
        <a-videosphere my-elements="videosphere" src="#gmTurtles"></a-videosphere>
        <!-- <a-sky my-elements="videosphere" autoplay="true" src="#gmTurtles"></a-sky> -->
        <!-- <a-sky src="assets/360_VR Master Series _ Free Download _ London On Tower Bridge.mp4" rotation="0 -130 0"></a-sky> -->
    </a-scene>
    <!-- STREAMING -->
    <script>
        const videoEl = document.querySelector('#gmTurtles');
        let src = '<?= $data['video_url'] ?>';
        // for ios always play as stream
        if (iOS()) {
            src = '<?= $data['stream_url'] ?>';
        }

        // playing according to video source
        if (!src.includes('.mp4')) {
            if (videoEl.canPlayType('application/vnd.apple.mpegurl')) {
                // Some browers (safari and ie edge) support HLS natively
                videoEl.src = src;
            } else if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(src)
                hls.attachMedia(videoEl);
            } else {
                console.error("This is a legacy browser that doesn't support MSE");
            }
        } else {
            videoEl.src = src;
            // videoEl.muted = false;           
        }
        videoEl.play();

        function iOS() {
            return [
                    'iPad Simulator',
                    'iPhone Simulator',
                    'iPod Simulator',
                    'iPad',
                    'iPhone',
                    'iPod'
                ].includes(navigator.platform)
                // iPad on iOS 13 detection
                ||
                (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        }
    </script>
    <!-- <style>
        #play {
            position: fixed;
            top: 0;
            left: 0;
        }
    </style>
    <input id="play" type="button" value="<?= lang('Play') ?>"> -->

    <!-- global data -->
    <script>
        var lang = `<?= $lang ?>`;
        var home_url = `<?= $data['home_url'] ?>`;
        var prev_url = `<?= $data['prev_url'] ?>`;
        var next_url = `<?= $data['next_url'] ?>`;
        var has_sound = <?= $data['has_sound'] ?>;

        // window.addEventListener('touchstart', checkVideo);
        // function checkVideo(e) {
        //     console.log('asd' + e);
        //     let vs = document.querySelector('a-videosphere');
        //     console.log('clicked');
        //     // console.log(vs.components.material.material.map.image.play());            
        //     if (vs) {
        //         vs.components.material.material.map.image.load();
        //         vs.components.material.material.map.image.play();
        //     }
        // }

        // playing audio
        console.log('has_sound: ' + has_sound);
        if (!has_sound) {
            var audio = document.getElementById('audio');
            // var audio = new Audio('main_track.mp3');        
            window.addEventListener('touchmove', checkAudio);
            window.addEventListener('mousedown', checkAudio);
            if (audio) audio.play();

            function checkAudio() {
                if (audio && audio.paused) audio.play();
            };
            // var play = document.getElementById('play');
            // play.addEventListener('click', (e) => {
            //     audio.play();
            //     videoEl.play();
            //     if (audio.paused) audio.play();
            //     if (videoEl.paused) videoEl.play();
            // });
        }
    </script>

</body>

</html>