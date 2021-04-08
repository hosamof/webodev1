<?php

// get configrations
// require 'config.php';
$data = [];

function init()
{
    global $data, $config, $pages, $lang, $IS_VR;
    // language
    $lang = empty($_GET['lang']) || !in_array($_GET['lang'], ['ar', 'en']) ? $config['default_lang'] : $_GET['lang'];

    // page    
    $page = !empty($_GET['page']) && key_exists($_GET['page'], $pages[$lang]) ? $pages[$lang][$_GET['page']] : null;
    $loc =  !empty($page) && !empty($_GET['loc']) && key_exists($_GET['loc'], $page) ? $page[$_GET['loc']] : null;
    if (empty($loc) || empty($loc['videos'])) {
        $IS_VR = false;
        // set data
        $data = [
            'lang' => $lang,
            'title' => lang('Noor Riyadh') . ' - ' . lang('Home Page'),
        ];
    } else {
        // set vr
        $IS_VR = true;

        // set video url
        // $video_url = 'assets/' . $page['video_name'];
        $index = intval($_GET['index']);
        $video_url = !empty($index) && is_int($index)  && $index < count($loc['videos']) ? $loc['videos'][$index] : $loc['videos'][0];
        $stream_url = !empty($index) && is_int($index)  && $index < count($loc['streams']) ? $loc['streams'][$index] : $loc['streams'][0];
        $has_sound = key_exists('has_sound', $loc) ? $loc['has_sound'] : 0;

        // set data
        $home_url = 'https://' . $_SERVER['SERVER_NAME'];
        $data = [
            'lang' => $lang,
            'page' => $page,
            'loc' => $loc,
            'title' => $loc['title'],
            'video_url' => $video_url,
            'home_url' => $home_url,
            'next_url' => $home_url . '?page=' . $_GET['page'] . '&loc=' . $_GET['loc'] . '&index=' . ($index + 1 < count($loc['videos']) ? $index + 1 : 0),
            'prev_url' => $home_url . '?page=' . $_GET['page'] . '&loc=' . $_GET['loc'] . '&index=' . ($index - 1 >= 0 ? $index - 1 : count($loc['videos']) - 1),
            'stream_url' => $stream_url,
            'has_sound' => $has_sound,
        ];
        // var_dump($data);die;
    }
}

// language function
function lang($key)
{
    global $lang, $arabic;
    if (!key_exists($key, $arabic)) {
        return $key;
    }
    switch ($lang) {
        case 'ar':
            return $arabic[$key];

        default:
            return $key;
    }
}
