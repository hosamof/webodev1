<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1.0">
    <title><?= $data['title'] ?></title>
    <link rel="stylesheet" href="../css/home.css?version=9">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js?version=9" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <!-- <script src="https://hammerjs.github.io/dist/hammer.min.js"></script> -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
    <script src="../js/svgs.js?version=9"></script>
    <script src="../js/home.js?version=9"></script>
</head>

<body class="<?= $lang ?>">
    <header>
        <img class="bg" src="../assets/img/top-bar.png">
        <!-- <div class="bg"></div> -->
        <div class="social">
            <a class="s-icon" target="_blank" href="https://www.facebook.com/NoorRiyadhFestival"><img src="../assets/img/facebook.svg"></a>
            <a class="s-icon" target="_blank" href="https://www.instagram.com/noorriyadhfestival/"><img src="../assets/img/instagram.svg"></a>
            <a class="s-icon" target="_blank" href="https://twitter.com/NoorRiyadhFest"><img src="../assets/img/twitter.svg"></a>
            <a class="lang-btn" href="?lang=<?= $lang == 'ar' ? 'en' : 'ar' ?>"><?= lang('عربي') ?></a>
        </div>
    </header>
    <main>
        <div class="overlay"></div>
        <div id="zoomable" class="map">
            <div id="map-container" class="map-container">
                <!-- <img src="../assets/img/map.svg" alt="Map"> 
            https://stackoverflow.com/questions/4476526/do-i-use-img-object-or-embed-for-svg-files
            -->
                <!-- <object class="map-image" data="../assets/img/map.svg" type="image/svg+xml"><img src="yourfallback.jpg" /></object> -->
                <!-- <img class="map-image is-png" src="../assets/img/map-bg.png" alt="Map"> -->
                <img class="map-image is-png" src="../assets/img/main-2.png" alt="Map">
                <img class="map-image is-png map-lines" src="../assets/img/main-1.png" alt="Map">
                <script>
                    document.write(mapImgCircles);
                </script>
            </div>
            <!-- <img id="zoom-btn" src="../assets/img/zoom-in.png"> -->
            <script>
                document.write(zoomIcon);
            </script>
        </div>
        <div class="hover-map"></div>
        <div class="details hide">
            <div class="header">
                <!-- <object class="logo" data="../assets/img/logo.svg" type="image/svg+xml">
                </object> -->
                <img id="zoomable" class="logo" src="../assets/img/logo.svg">
            </div>
            <div class="body">
                <img class="info-icon" src="../assets/img/info-icon.svg" alt="info">
                <div class="info-box">
                    <!-- <img class="info-bg" src="../assets/img/info-box-bg.png" alt=""> -->
                    <img class="close-icon" src="../assets/img/close-icon.svg" alt="info">
                    <h2 id="info-title"></h2>
                    <ul>
                        <!-- 
                        <h2 id="info-title">KING ABDULLAH FINANCIAL DISTRICT</h2>    
                        <li>
                            <script>
                                document.write(playIcon);
                                // document.write(mapIcon1);
                            </script>
                            < !-- <img class="map-icon" src="../assets/img/map-icon1.svg" alt="icon"/> - ->
                            Daydream Wilson
                        </li>
                        <li>
                            <script>
                                document.write(playIcon);
                                // document.write(mapIcon1);
                            </script>
                            The Infinite Blue AL Homoud
                        </li>
                        <li>
                            <script>
                                document.write(playIcon);
                                // document.write(mapIcon1);
                            </script>
                            ubmergence Squidsoup
                        </li> -->
                    </ul>
                </div>
            </div>
            <div class="footer">
                <img class="icon" src="" alt="icon">
                <!-- <img class="icon" src="../assets/img/pis/pin2.svg" alt="icon">
                <img class="icon" src="../assets/img/pis/pin3.svg" alt="icon">
                <img class="icon" src="../assets/img/pis/pin4.svg" alt="icon">
                <img class="icon" src="../assets/img/pis/pin5.svg" alt="icon">
                <img class="icon" src="../assets/img/pis/pin6.svg" alt="icon">
                <img class="icon" src="../assets/img/pis/pin7.svg" alt="icon">
                <img class="icon" src="../assets/img/pis/pin8.svg" alt="icon">
                <img class="icon" src="../assets/img/pis/pin9.svg" alt="icon">
                <img class="icon" src="../assets/img/pis/pin10.svg" alt="icon"> -->
                <!-- ../assets/img/king-abdullah.svg -->
            </div>
        </div>
    </main>
    <footer>
        <p class="copyright">Copyright &copy; <?= date('Y') ?> By <a href="https://noorriyadh.sa/<?= $lang == 'ar' ? '' : 'en' ?>" target="_blank">Noor Riyadh</a>
        </p>
        <img class="bg" src="../assets/img/bottom-bar.png">
    </footer>
    <script>
        var locations = `<?= json_encode($locations) ?>`;
        var lang = `<?= $lang ?>`;
    </script>
</body>

</html>