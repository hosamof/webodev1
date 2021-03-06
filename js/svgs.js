// play icon
var playIcon = `
<svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.73367 23.73797">
  <defs>
    <style>
      .cls-1 {
        fill: none;
        stroke: #0c9366;
        stroke-miterlimit: 10;
      }
    </style>
  </defs>
  <g id="Layer_2" data-name="Layer 2">
    <g id="side_info" data-name="side info">
      <path class="cls-1" d="M.5,21.56858V2.16938A1.66723,1.66723,0,0,1,2.91284.67817L22.312,10.37776a1.66724,1.66724,0,0,1,0,2.98244L2.91284,23.0598A1.66723,1.66723,0,0,1,.5,21.56858Z"/>
    </g>
  </g>
</svg>
`;

var mapIcon1 = `
<svg class="map-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 274.45001 274.43994">
  <defs>
    <style>
      .cls-1 {
        isolation: isolate;
      }

      .cls-2 {
        fill: url(#linear-gradient);
      }

      .cls-3 {
        fill: #53499d;
        stroke: #fff;
        stroke-miterlimit: 10;
        stroke-width: 5px;
      }

      .cls-4 {
        opacity: 0.75;
        mix-blend-mode: screen;
      }

      .cls-5 {
        fill: #fff;
      }

      .cls-6 {
        fill: url(#radial-gradient);
      }
    </style>
    <linearGradient id="linear-gradient" x1="-12.93024" y1="10.3453" x2="454.39051" y2="405.21322" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff" stop-opacity="0"/>
      <stop offset="0.2163" stop-color="#fff" stop-opacity="0.5"/>
      <stop offset="0.48388" stop-color="#fff" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#fff"/>
    </linearGradient>
    <radialGradient id="radial-gradient" cx="34.88541" cy="85.49505" r="269.92286" gradientUnits="userSpaceOnUse">
      <stop offset="0.52018" stop-color="#fff" stop-opacity="0"/>
      <stop offset="0.72607" stop-color="#fff" stop-opacity="0.1"/>
      <stop offset="0.72635" stop-color="#fff" stop-opacity="0.08"/>
      <stop offset="0.72731" stop-color="#fff" stop-opacity="0.03391"/>
      <stop offset="0.72866" stop-color="#fff" stop-opacity="0.00735"/>
      <stop offset="0.73241" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <g class="cls-1">
    <g id="Layer_2" data-name="Layer 2">
      <g id="TEST_POP" data-name="TEST POP">
        <g>
          <path class="cls-2" d="M137.22,0a137.22,137.22,0,1,0,0,274.43994H274.45v-137.22A137.22144,137.22144,0,0,0,137.22,0ZM15.31,137.21991a121.915,121.915,0,1,1,121.91,121.91A121.90874,121.90874,0,0,1,15.31,137.21991Z"/>
          <path class="cls-3" d="M259.14,137.21991a121.915,121.915,0,1,1-121.92-121.91A121.91727,121.91727,0,0,1,259.14,137.21991Z"/>
          <g>
            <image class="cls-4" width="206" height="167" transform="translate(28.95853 46.06799)" xlink:href="data:image/png;base64,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"/>
            <path class="cls-5" d="M210.56618,146.282h-2.21475v-4.41313l1.687-1.08114a.50587.50587,0,0,0,.04571-.04415.51587.51587,0,0,0,.081-.07849.73146.73146,0,0,0,.09115-.1768.51554.51554,0,0,0,.01675-.11108.50424.50424,0,0,0,.00948-.06266l-.19114-3.989-.00325-.01434a.67169.67169,0,0,0-.21178-.38878l-1.27774-1.03355a.506.506,0,0,0-.05947-.0309.3887.3887,0,0,0-.20257-.07292.50505.50505,0,0,0-.07246-.0146H189.9458a.53187.53187,0,0,0,0,1.06374h18.13035l.965.78066.16491,3.44333-.95362.61115a.52236.52236,0,0,0-.43293-.24.53157.53157,0,0,0-.53187.53187V146.282H197.24033v-4.80138a.51693.51693,0,0,0-.02675-.133h9.33656a.53187.53187,0,0,0,0-1.06374H182.348a.53187.53187,0,0,0,0,1.06374h4.48948l-3.2159,16.34567a.51294.51294,0,0,0,.00052.14855h-5.62437l2.3007-6.666a1.32494,1.32494,0,0,1,.02909-.17348v-54.053l4.31833.185V138.038a.53156.53156,0,0,0,.53187.53187h4.05759a.53187.53187,0,1,0,0-1.06374h-3.52572V97.02477a5.39827,5.39827,0,0,0-.94428-.95l-11.85515-.50785a.52539.52539,0,0,0-.514-.37722.53137.53137,0,0,0-.51525.548l.26828,8.53155-.08129-.0585a.531.531,0,0,0-.74275.121.51916.51916,0,0,0-.09063.32579.52462.52462,0,0,0-.15349.09908l-1.82025,1.77818a.51635.51635,0,0,0-.1431-.02883.53157.53157,0,0,0-.53187.53187v43.96451a.53187.53187,0,1,0,1.06374,0V117.401l4.28613,21.36059c.00234.012.00974.02123.013.03286a.50947.50947,0,0,0,.03116.07992.52128.52128,0,0,0,.05454.09557.49746.49746,0,0,0,.053.06051.52617.52617,0,0,0,.08843.06992.51023.51023,0,0,0,.06791.03831.522.522,0,0,0,.1231.03474.5065.5065,0,0,0,.04986.01408l.03895.00143.00052.00013.00052-.00006.00156.00006.00221-.00039a.51912.51912,0,0,0,.10167-.01c.01532-.00312.027-.01318.04181-.01753a.57366.57366,0,0,0,.30892-.23971.79764.79764,0,0,0,.06584-.18939c.00168-.012.00831-.022.00934-.03434l2.32486-30.40181a.5025.5025,0,0,0-.00779-.06252.45392.45392,0,0,0-.04882-.20062.50827.50827,0,0,0-.048-.0844.52143.52143,0,0,0-.07531-.08116.50152.50152,0,0,0-.04026-.04344l-3.854-2.77109-.26464-8.41831,6.28973.26944v54.0094l-2.39133,6.92873h-3.51845l-.01247.00253c-.017.00039-.03285.00643-.04973.00844a.5231.5231,0,0,0-.08531.01876.54429.54429,0,0,0-.067.017c-.0148.00649-.02649.01908-.04077.02694a.52443.52443,0,0,0-.06908.04707.53214.53214,0,0,0-.05817.04428l-.00806.00584c-.00921.00994-.01194.02286-.02025.03331a1.40316,1.40316,0,0,0-.08207.13472.51854.51854,0,0,0-.01376.0522c-.00312.01156-.0113.02026-.01377.0322l-1.22371,5.87967a.52558.52558,0,0,0,.0657.37566l-4.04331,5.28436v-22.0166a.53156.53156,0,0,0-.53187-.53187h-.46123V107.41806a.533.533,0,0,0-.16932-.38955.512.512,0,0,0-.401-.14076l-6.4884.46746a.53133.53133,0,0,0-.40514.23685l-5.29689,8.00935V90.88982a.528.528,0,0,0,.20465-.5633l-.20465-.78624V71.5999a.51016.51016,0,0,0-.01921-.09537.54131.54131,0,0,0-.02-.0994.42258.42258,0,0,0-.19023-.23114.51488.51488,0,0,0-.08454-.05694.53094.53094,0,0,0-.10245-.02577.50392.50392,0,0,0-.09051-.02273l-4.39338-.2075a.52532.52532,0,0,0-.56485-.208.51718.51718,0,0,0-.25763.16913l-2.783-.13141a.478.478,0,0,0-.40384-.01909l-9.89492-.4674c-.00467-.00039-.00857.002-.01324.00176a.51006.51006,0,0,0-.08882.01194.48257.48257,0,0,0-.11972.024l-.00922.00332c-.01494.00623-.02545.01863-.03961.02616l-.00623.00409a.52736.52736,0,0,0-.1105.07317l-.0126.01a12.94533,12.94533,0,0,0-.106.15628l-.00948.01512-.00091.00137a1.65786,1.65786,0,0,1-.03947.17919c-.00026.004.00182.00734.00169.0113l-.00273.01363v58.23593l-7.55747,5.54082.54758-12.87092a.53329.53329,0,0,0-.51732-.55472l-16.77886-.44409a.58484.58484,0,0,0-.3854.15062.5329.5329,0,0,0-.161.38125v17.75117l-1.34318,1.2928a.53647.53647,0,0,0-.1631.362l-.33761,8.44124-3.12175-.158a9.2819,9.2819,0,0,0,1.82012-5.00842c0-1.63821-.66068-1.93323-1.337-2.09476-.3937-.094-.67834-.16206-.67834-1.59613,0-1.22528.19841-1.272.49863-1.34319.98375-.23269,1.51666-.81494,1.51666-3.22238,0-4.74269-2.01529-6.91432-2.10047-7.0047a.53327.53327,0,0,0-.3854-.16517H94.675l.15115-10.1019a.53119.53119,0,0,0-.53187-.53966H87.79965a.53156.53156,0,0,0-.53187.53187v1.34058H85.11952v-1.34058a.53155.53155,0,0,0-.53187-.53187H78.40674a.53155.53155,0,0,0-.53187.53187V162.637H53.02446a.53157.53157,0,0,0-.53187.53187v24.93975a.53157.53157,0,0,0,.53187.53187H93.62322a.53157.53157,0,0,0,.53187-.53187v-5.28573l15.68706-.2262a.53206.53206,0,0,0,.5246-.53187V156.586a6.78084,6.78084,0,0,0,1.89687-4.09291c.13608-2.61988-1.52082-3.27485-1.59146-3.30134a.52369.52369,0,0,0-.16-.03376l-.14544-.00734v-.40143l19.22006.28567-.19737,7.40516h-.00831v-2.21319a.53157.53157,0,0,0-.53188-.53187H114.80039a.53157.53157,0,0,0-.53187.53187v30.55555a.53157.53157,0,0,0,.53187.53187h14.04886a.53157.53157,0,0,0,.53188-.53187v-1.99348l4.13653,2.99541a.52933.52933,0,0,0,.31165.10128.47469.47469,0,0,0,.08622-.00727l3.40106-.56459,7.897-.2597a.53166.53166,0,0,0,.51421-.53135v-2.70091H182.348a.53889.53889,0,0,0,.12154-.014l3.9641-.92714a.53187.53187,0,0,0,.32826-.802l-.61913-.97856h11.56715a.53157.53157,0,0,0,.53187-.53187v-2.39757h12.32444a.53157.53157,0,0,0,.53187-.53187V146.81388A.53156.53156,0,0,0,210.56618,146.282ZM174.2203,134.77316l-4.57076-22.77882V107.642l2.17527-2.125a.51363.51363,0,0,0,.07817-.11492l4.32547,3.11013Zm-6.22974,36.31458L172.553,165.125a1.19874,1.19874,0,0,1,.09765-.763l1.03219-4.95928,3.27628,3.0291-4.081,15.46931-5.246-1.56971v-5.04952A.52053.52053,0,0,0,167.99056,171.08774Zm-7.46592,3.117V148.32015h1.231V174.573Zm-2.47237-.73976V148.32015h1.40863v25.56627Zm-4.98732-1.49232V148.32015h1.605v24.13272Zm-2.66663-.79793V148.32015h1.60288v23.3342ZM139.15425,156.44h-3.57351v-9.4744L140.324,139.37v17.07Zm-1.82415,2.43393a.53912.53912,0,0,0-.081.267l-.03065,1.02336-5.02913-2.66052h6.0025Zm10.85556-86.98525,4.62893,17.7839v.06779l-7.11571,13.47777-.02091-.02564V71.7702Zm8.17842,66.60958,3.87125.56959-.30255,4.313-3.64934-3.26829Zm3.94578-.49467-4.36949-.64289c-.009-.00143-.01714.00214-.026.00117s-.016-.00591-.02493-.00637a.557.557,0,0,0-.08025.011.51485.51485,0,0,0-.10323.01422.48734.48734,0,0,0-.15413.074l-.00961.006a.47284.47284,0,0,0-.12726.14082l-.00961.014a.53657.53657,0,0,0-.05012.13972.51884.51884,0,0,0-.01948.05421c-.00129.009.00234.01714.00143.0261-.00078.00877-.00519.01591-.00558.02481l-.067,1.33987-3.70518-3.31822,8.85819.58439Zm-8.70444-3.18486a.54207.54207,0,0,0-.56615.496.30486.30486,0,0,1-.37709.47786.5321.5321,0,0,0,.04051.751l8.58265,7.68629.14024,3.02644h-5.59347l-7.32725-9.59341a.52784.52784,0,0,0-.13764-.11985l6.44737-14.66111v12.01649Zm-10.21773,2.84783.77287-1.23767c.00727-.0115.00753-.02468.01377-.03649a.521.521,0,0,0,.03856-.10252.50716.50716,0,0,0,.02052-.10187c.00117-.01415.00818-.02623.00818-.04064a.47561.47561,0,0,0-.01169-.05759.50263.50263,0,0,0-.19685-.35417.493.493,0,0,0-.04181-.0396c-.012-.00741-.02572-.0078-.03792-.01416a.65953.65953,0,0,0-.2-.05752c-.01506-.0013-.02805-.00883-.04363-.00883h-3.65661V123.45968l6.56112,10.1121v9.86934l-3.22654,3.09845Zm4.29028-28.37606,7.067,11.106-7.067,16.07006Zm-1.06374,22.32578-6.47542-9.98011,6.47542-12.05818Zm0-24.28595L138.05311,119.548V95.526l6.56112,8.04571ZM136.9956,93.95249c-.00065.00415.001.00792.00052.01208-.00182.01389-.00078.02726-.00156.04129-.00039.00915-.00519.01681-.00519.0261v41.58355h-1.40863V71.53277l4.51493,1.87791Zm-1.41486,42.72676h1.532a.51161.51161,0,0,0,.817,0h2.3942v.6838l-4.74321,7.59564ZM152.81459,118.524,145.678,107.30872v-2.62559a.3857.3857,0,0,0,.35683-.04.49492.49492,0,0,0,.04792-.02682.48535.48535,0,0,0,.04817-.02694.52817.52817,0,0,0,.134-.1642l6.54969-12.40559Zm-8.20036-16.63588-6.532-8.01014L141.209,73.15864c.00208-.01377-.00286-.0263-.00195-.03993a.69484.69484,0,0,0-.02428-.20419.51587.51587,0,0,0-.04493-.09447.50883.50883,0,0,0-.05324-.081.68891.68891,0,0,0-.16283-.128c-.01247-.00636-.02065-.01734-.03376-.02279l-2.83257-1.1782,6.55878.30982Zm.90065,42.16411.0035-.005a.52864.52864,0,0,0,.078-.11277.51308.51308,0,0,0,.03922-.05818c.00389-.009.003-.0198.00623-.029a.52956.52956,0,0,0,.03506-.17381l.001-.00506v-4.558l.21672-.49291,6.59839,8.639H142.17822Zm10.21877,4.268h1.25488V173.1466l-1.25488-.37547Zm7.08572,0h1.88648v27.13566l-1.88648-.56447Zm2.95022,0h.79884v27.693l-.79884-.23906Zm-5.85162-39.923,5.65736-.40774v39.267h-5.08575l-.1057-2.27954.00883.00039a.5322.5322,0,0,0,.52979-.49447l.5942-8.47461-.00026-.00175.00026-.00085a.49908.49908,0,0,0-.0113-.08479.54124.54124,0,0,0-.01649-.12336,26.51945,26.51945,0,0,0-.10206-.17614.52964.52964,0,0,0-.11024-.08609.51382.51382,0,0,0-.05026-.0389.53135.53135,0,0,0-.1901-.05226l-.013-.00357h-.00013l-.002-.00052-7.14286-.47123V117.52983Zm-10.6204-36.456,3.517.16615V85.45347Zm-23.25024,63.24-3.77166,2.76524V122.02619l4.14485.10972-.53811,12.6444A.52538.52538,0,0,0,126.04733,135.18116Zm-20.59207.41773c0,2.022-.35423,2.10618-.697,2.18721-.8352.19737-1.31825.64978-1.31825,2.37836,0,1.90154.54849,2.40432,1.49485,2.63078.35735.08518.52044.12466.52044,1.06011a8.924,8.924,0,0,1-2.04541,4.95668H98.62249a10.93776,10.93776,0,0,0,1.86311-5.19717c.08829-1.68754-.5111-2.12073-1.43668-2.25162-.3667-.05194-.51836-.07375-.39786-1.139a3.12761,3.12761,0,0,1,1.13022-2.26045,3.88063,3.88063,0,0,0,1.34007-3.33666,9.43177,9.43177,0,0,0-2.11476-5.13432h4.77515A10.143,10.143,0,0,1,105.45526,135.59889Zm-7.78432-6.10613a.525.525,0,0,0,.093.1579c.02286.02545,2.27708,2.569,2.2937,4.98421a2.85633,2.85633,0,0,1-1.01908,2.5669,4.15085,4.15085,0,0,0-1.445,2.90295c-.1953,1.73741.3802,2.18047,1.30578,2.31136.39787.05661.57966.08206.5246,1.14372a10.43841,10.43841,0,0,1-2.10255,5.25223H94.37l.28918-19.31927ZM88.33152,118.8512h5.42259L93.09966,162.637H88.33152Zm-1.06374,1.87245V162.637H85.11952V120.72365Zm-8.32917-1.87245h5.11717v.84221a.52245.52245,0,0,0,0,.99674V162.637H78.93861Zm14.15274,68.72557h-39.535v-23.876h39.535Zm1.06374-24.40008.19893-13.30092h9.28943l1.35759.06862a8.68851,8.68851,0,0,1,.45734,3.56046c-.20361,2.03814-2.69364,5.14678-2.71857,5.17795a.53122.53122,0,0,0-.11842.33917l.22932,22.6117-8.69562.12524ZM111.202,152.438a5.89687,5.89687,0,0,1-1.72754,3.53663.53244.53244,0,0,0-.17141.39059v25.17555l-5.38856.07759-.22724-22.41927c.53291-.68717,2.62091-3.493,2.82868-5.58931a9.56716,9.56716,0,0,0-.37774-3.60785l4.212.213C110.57036,150.34063,111.283,150.872,111.202,152.438Zm-1.35877-4.76034a.473.473,0,0,0-.38124.15322.53009.53009,0,0,0-.15894.37865v.88721l-.41916-.02117.32879-8.239,1.35253-1.30111a.53365.53365,0,0,0,.16309-.38332V121.72039l10.48367.27762v16.72828l-4.92292,3.60928a.53078.53078,0,0,0-.215.388l-.38955,5.04076Zm14.11509.20951-7.20908-.107.167-2.1613,7.04027-.99064C123.91815,145.77987,123.89076,147.22356,123.95828,147.88716Zm6.55826.25535a.53089.53089,0,0,0-.375-.16361l-5.11587-.0759c-.00364-.01409-.00078-.028-.00546-.042a36.08464,36.08464,0,0,1,.02286-3.827.53254.53254,0,0,0-.60563-.54745l-7.43723,1.04634.11466-1.48368,15.39074-11.28349-7.31919,9.79332a.53177.53177,0,1,0,.85183.63679l8.47876-11.34491V156.44h-4.06278l.21087-7.91521A.53483.53483,0,0,0,130.51654,148.14251Zm-2.19916,36.108H115.33226V154.75869h12.98512Zm5.64386.54226-4.58011-3.3164V157.50375H130.63a.53084.53084,0,0,0,.27918.52563l6.27364,3.31894-.69107,23.02787Zm4.34742-25.47525,1.13957-1.81376h3.70336l.12985.44149a.53034.53034,0,0,0,.46954.38124l.91311.07012v.76645l-4.61543.57362a.53138.53138,0,0,0-.46642.523l-.20179,23.92528-1.82078.06083Zm6.35543,24.69094-4.21951.141.19724-23.41445,4.02227-.50018Zm.57239-26.63455-1.03777-.08-.13817-.4711a.53087.53087,0,0,0-.51005-.3828h-2.1628v-8.11986h7.94689v23.70356a.52755.52755,0,0,0,.99856.24191l1.75247.52441a.50611.50611,0,0,0,.67912.20321l1.91634.57343a.51917.51917,0,0,0,.92636.27716l3.87268,1.15879a.52081.52081,0,0,0,.89728.26847l1.579.47247a.52269.52269,0,0,0,.33112.1253.49758.49758,0,0,0,.05246-.01058l16.37488,4.89974h-32.987V157.90421A.53193.53193,0,0,0,145.23648,157.3739Zm37.12835,23.36581-8.46721-2.53353,4.06694-15.41645H183.62l.26126,15.35309a.5321.5321,0,0,0,.53187.523h.00935a.52059.52059,0,0,0,.22984-.06214.53017.53017,0,0,0,.07557.2486l.73548,1.16295Zm2.81284-2.70337a.52539.52539,0,0,0-.23321.06376l-.26958-15.85107a.49964.49964,0,0,0-.01973-.08888.53911.53911,0,0,0-.02519-.11427.46244.46244,0,0,0-.23374-.24711.57092.57092,0,0,0-.0483-.03149.52763.52763,0,0,0-.13258-.02668.49843.49843,0,0,0-.07233-.01461h-6.37946l-3.05033-2.82037h17.61483l-.53732,19.13072Zm12.00033,0h-4.32275l.55187-19.64753-.00143-.00811.00143-.00695a.49749.49749,0,0,0-.01818-.08992.69736.69736,0,0,0-.13336-.28.526.526,0,0,0-.08193-.05869.52047.52047,0,0,0-.08519-.05733.54085.54085,0,0,0-.0992-.02292.49924.49924,0,0,0-.09947-.023l-.00779.00136-.00675-.00136h-8.19959l3.24524-16.49422h8.28243a.51693.51693,0,0,0-.02675.133v4.81728a.52491.52491,0,0,0-.45292.516v28.82489a.53157.53157,0,0,0,.53187.53187h.92247Zm12.85631-2.92944H196.7874V147.34575h13.24691Z"/>
          </g>
          <path class="cls-6" d="M259.14,137.21991a121.915,121.915,0,1,1-121.92-121.91A121.91727,121.91727,0,0,1,259.14,137.21991Z"/>
        </g>
      </g>
    </g>
  </g>
</svg>
`;

// circles
var mapImgCircles = `
<svg class="map-circles"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1287.95658 1426.73906">
    <defs>
        <style>
      .cls-1 {
        isolation: isolate;
      }

      .cls-2 {
        opacity: 0.1;
      }

      .cls-3, .cls-5, .cls-6, .cls-7 {
        fill: none;
      }

      .cls-3 {
        stroke: #fff;
        stroke-miterlimit: 10;
      }

      .cls-4 {
        opacity: 0.2;
      }

      .cls-5 {
        stroke: #5dbc72;
      }

      .cls-5, .cls-6, .cls-7 {
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .cls-5, .cls-7 {
        stroke-width: 2.5px;
      }

      .cls-6 {
        stroke: #0c9366;
        stroke-width: 2.9px;
      }

      .cls-7 {
        stroke: #53499d;
      }

      .cls-8 {
        fill: url(#linear-gradient);
      }

      .cls-9 {
        fill: url(#linear-gradient-2);
      }

      .cls-10 {
        fill: url(#linear-gradient-3);
      }

      .cls-11 {
        fill: url(#linear-gradient-4);
      }

      .cls-12 {
        fill: url(#linear-gradient-5);
      }

      .cls-13 {
        fill: url(#linear-gradient-6);
      }

      .cls-14 {
        fill: url(#linear-gradient-7);
      }

      .cls-15 {
        fill: url(#linear-gradient-8);
      }

      .cls-16 {
        fill: url(#linear-gradient-9);
      }

      .cls-17 {
        opacity: 0.75;
        mix-blend-mode: screen;
      }

      .cls-18 {
        fill: url(#linear-gradient-10);
      }

      .cls-19 {
        fill: url(#linear-gradient-11);
      }

      .cls-20 {
        fill: url(#linear-gradient-12);
      }

      .cls-21 {
        fill: url(#linear-gradient-13);
      }
        </style>
        <linearGradient id="linear-gradient" x1="702.6638" y1="1105.0125" x2="736.1931" y2="1105.0125" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#5dbc72"/>
            <stop offset="1" stop-color="#0c9366"/>
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="761.69505" y1="1003.86016" x2="795.22435" y2="1003.86016" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-3" x1="749.88255" y1="912.42656" x2="783.41185" y2="912.42656" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-4" x1="696.7595" y1="811.01055" x2="730.2888" y2="811.01055" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-5" x1="654.45482" y1="712.68828" x2="687.98411" y2="712.68828" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-6" x1="517.23802" y1="620.23906" x2="550.76732" y2="620.23906" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-7" x1="435.17161" y1="632.46367" x2="468.70091" y2="632.46367" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-8" x1="311.08958" y1="572.64531" x2="344.61888" y2="572.64531" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-9" x1="94.96458" y1="533.46563" x2="128.49388" y2="533.46563" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-10" x1="524.22825" y1="527.54766" x2="557.75755" y2="527.54766" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-11" x1="818.07005" y1="288.52813" x2="851.59935" y2="288.52813" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-12" x1="484.73607" y1="815.16289" x2="518.26536" y2="815.16289" xlink:href="#linear-gradient"/>
        <linearGradient id="linear-gradient-13" x1="405.40794" y1="936.84063" x2="438.93724" y2="936.84063" xlink:href="#linear-gradient"/>
    </defs>
    <g class="cls-1">
        <g id="Layer_2" data-name="Layer 2">
            <g id="numbers">
                <g id="pin8" class="map-pin">
                    <image x="111.72923" y="533.46563" class="map-icon" xlink:href="../assets/img/pins/pin-pop8.svg" alt="icon"/>
                    <circle class="cls-16" cx="111.72923" cy="533.46563" r="16.76465"/>
                    <circle class="cls-16 hover-circle" cx="111.72923" cy="533.46563" r="30"/>
                </g>
                <g id="pin9" class="map-pin">
                    <image x="327.85423" y="572.64531" class="map-icon" xlink:href="../assets/img/pins/pin-pop9.svg" alt="icon"/>
                    <circle class="cls-15" cx="327.85423" cy="572.64531" r="16.76465"/>
                    <<circle class="cls-15 hover-circle" cx="327.85423" cy="572.64531" r="30"/>
                </g>
                <g id="pin3" class="map-pin">
                    <image x="451.93626" y="632.46367" class="map-icon" xlink:href="../assets/img/pins/pin-pop3.svg" alt="icon"/>
                    <circle class="cls-14" cx="451.93626" cy="632.46367" r="16.76465"/>
                    <<circle class="cls-14 hover-circle" cx="451.93626" cy="632.46367" r="30"/>
                </g>
                <g id="pin1" class="map-pin">
                    <image x="540.9929" y="527.54766" class="map-icon" xlink:href="../assets/img/pins/pin-pop1.svg" alt="icon"/>
                    <circle class="cls-18" cx="540.9929" cy="527.54766" r="16.76465"/>
                    <circle class="cls-18 hover-circle" cx="540.9929" cy="527.54766" r="30"/>
                </g>
                <g id="pin4" class="map-pin">
                    <image x="534.00267" y="620.23906" class="map-icon" xlink:href="../assets/img/pins/pin-pop4.svg" alt="icon"/>
                    <circle class="cls-13" cx="534.00267" cy="620.23906" r="16.76465"/>
                    <<circle class="cls-13 hover-circle" cx="534.00267" cy="620.23906" r="30"/>
                </g>
                <g id="pin13" class="map-pin">
                    <image x="834.8347" y="288.52813" class="map-icon" xlink:href="../assets/img/pins/pin-pop13.svg" alt="icon"/>
                    <circle class="cls-19" cx="834.8347" cy="288.52813" r="16.76465"/>
                    <circle class="cls-19 hover-circle" cx="834.8347" cy="288.52813" r="30"/>
                </g>
                <g id="pin10" class="map-pin">
                    <image x="501.50072" y="815.16289" class="map-icon" xlink:href="../assets/img/pins/pin-pop10.svg" alt="icon"/>
                    <circle class="cls-20" cx="501.50072" cy="815.16289" r="16.76465"/>
                    <circle class="cls-20 hover-circle" cx="501.50072" cy="815.16289" r="30"/>
                </g>
                <g id="pin6" class="map-pin">
                    <image x="422.17259" y="936.84063" class="map-icon" xlink:href="../assets/img/pins/pin-pop6.svg" alt="icon"/>
                    <circle class="cls-21" cx="422.17259" cy="936.84063" r="16.76465"/>
                    <circle class="cls-21 hover-circle" cx="422.17259" cy="936.84063" r="30"/>
                </g>
                <g id="pin5" class="map-pin">
                    <image x="671.21947" y="712.68828" class="map-icon" xlink:href="../assets/img/pins/pin-pop5.svg" alt="icon"/>
                    <circle class="cls-12" cx="671.21947" cy="712.68828" r="16.76465"/>
                    <circle class="cls-12 hover-circle" cx="671.21947" cy="712.68828" r="30"/>
                </g>
                <g id="pin12" class="map-pin">
                    <image x="713.52415" y="811.01055" class="map-icon" xlink:href="../assets/img/pins/pin-pop12.svg" alt="icon"/>
                    <circle class="cls-11" cx="713.52415" cy="811.01055" r="16.76465"/>
                    <circle class="cls-11 hover-circle" cx="713.52415" cy="811.01055" r="30"/>
                </g>
                <g id="pin2" class="map-pin">
                    <image x="766.6472" y="912.42656" class="map-icon" xlink:href="../assets/img/pins/pin-pop2.svg" alt="icon"/>
                    <circle class="cls-10" cx="766.6472" cy="912.42656" r="16.76465"/>
                    <circle class="cls-10 hover-circle" cx="766.6472" cy="912.42656" r="30"/>
                </g>
                <g id="pin11" class="map-pin">
                    <image x="778.4597" y="1003.86016" class="map-icon" xlink:href="../assets/img/pins/pin-pop11.svg" alt="icon"/>
                    <circle class="cls-9" cx="778.4597" cy="1003.86016" r="16.76465"/>
                    <circle class="cls-9 hover-circle" cx="778.4597" cy="1003.86016" r="30"/>
                </g>
                <g id="pin7" class="map-pin">
                    <image x="719.42845" y="1105.0125" class="map-icon" xlink:href="../assets/img/pins/pin-pop7.svg" alt="icon"/>
                    <circle class="cls-8" cx="719.42845" cy="1105.0125" r="16.76465"/>
                    <circle class="cls-8 hover-circle" cx="719.42845" cy="1105.0125" r="30"/>
                </g>
            </g>
        </g>
    </g>
    <use id="use" xlink:href="" />
</svg>
`;

// zoom icon
var zoomIcon = `
<svg id="zoom-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.92 75.92">
    <defs>
        <style>.cls-1-zoom{fill:#fff;}.cls-2-zoom{fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:4.09px;}</style>
    </defs>    
    <g id="Layer_2" data-name="Layer 2">
        <g id="_360_icons" data-name="360 icons">
            <path class="cls-1-zoom" d="M45.83,26.44a19.43,19.43,0,1,0-5.69,13.7A19.41,19.41,0,0,0,45.83,26.44Zm-35.78,0A16.39,16.39,0,1,1,26.44,42.83,16.31,16.31,0,0,1,10.05,26.44Z"/>
            <path class="cls-1-zoom" d="M52.88,26.44a26.49,26.49,0,1,0-9.26,20.07l6.23,6.23-2.5,2.5a3.7,3.7,0,0,0,0,5.24L60.07,73.2A9.28,9.28,0,1,0,73.2,60.08L60.48,47.35a3.7,3.7,0,0,0-5.24,0l-2.5,2.5-6.23-6.23A26.31,26.31,0,0,0,52.88,26.44Zm18.2,44.64a6.28,6.28,0,0,1-8.88,0l-2.5-2.5,8.88-8.88,2.5,2.5A6.28,6.28,0,0,1,71.08,71.08ZM58.35,49.47l2.95,2.94L52.41,61.3l-2.94-2.95a.69.69,0,0,1,0-1l7.89-7.89A.69.69,0,0,1,58.35,49.47Zm-54.26-23A22.35,22.35,0,1,1,26.44,48.79,22.32,22.32,0,0,1,4.09,26.44Z"/>
            <line class="cls-2-zoom" x1="18.4" y1="26.44" x2="34.47" y2="26.44"/>
            <line id="vertical-line" class="cls-2-zoom" x1="26.44" y1="34.47" x2="26.44" y2="18.4"/>
        </g>
    </g>
</svg>
`;