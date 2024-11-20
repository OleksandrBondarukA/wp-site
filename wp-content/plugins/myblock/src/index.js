/*
// Other variant to connect function
var registerBlockType = wp.blocks.registerBlockType;
var createElement = wp.element.createElement; */

import { registerBlockType } from '@wordpress/blocks';
import './block';
import Edit from './edit';
import Save from './save';
import './style.scss';

registerBlockType( 'orion/myblocks', {
	edit: Edit,
	save: Save,
} );
