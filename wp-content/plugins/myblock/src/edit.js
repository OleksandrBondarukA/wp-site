import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { columns } = attributes;
	return (
		<div
			{ ...useBlockProps( {
				className: `the-${ columns }-columns`,
			} ) }
		>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Columns', 'myblocks' ) }
						min={ 1 }
						max={ 4 }
						value={ columns }
						onChange={ ( val ) => {
							setAttributes( { columns: val } );
						} }
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={ [ 'orion/myblock' ] }
				orientation="horizontal"
				template={ [
					[
						'orion/myblock',
						{
							title: 'Test title 1',
							description: 'Test description 1',
						},
					],
					[
						'orion/myblock',
						{
							title: 'Test title 2',
							description: 'Test description 2',
						},
					],
				] }
			/>
		</div>
	);
}
