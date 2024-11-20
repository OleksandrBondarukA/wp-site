<?php

/**
 * Plugin Name: My block
 * Plugin URI: localhost
 * Description: Gutenberg Block
 * Author: Oleksandr Bondaruk
 * Author URI: localhost
 */

 function orion_myblock_init()
 {
    register_block_type_from_metadata(__DIR__);
 }

 add_action('init', 'orion_myblock_init');