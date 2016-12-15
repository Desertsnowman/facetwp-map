<?php
/**
 * fwp_map section
 *
 * @package   ui
 * @author    David Cramer
 * @license   GPL-2.0+
 * @link
 * @copyright 2016 David Cramer
 */
namespace facetwp\ui;

/**
 * A generic holder for multiple controls. this panel type does not handle saving, but forms part of the data object tree.
 *
 * @since 1.0.0
 * @see \facetwp\facetwp
 */
class section extends panel {

	/**
	 * The type of object
	 *
	 * @since 1.0.0
	 * @access public
	 * @var      string
	 */
	public $type = 'section';


	/**
	 * Define core page style
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function set_assets() {

		$this->assets['style']['sections'] = $this->url . 'assets/css/sections' . fwp_map_ASSET_DEBUG . '.css';

		parent::set_assets();
	}

	/**
	 * Render the complete section
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string|null HTML of rendered notice
	 */
	public function render() {

		if ( ! isset( $this->struct['active'] ) ) {
			$this->struct['active'] = 'true';
		}

		$output = '<div id="' . esc_attr( $this->id() ) . '" class="facetwp-section" aria-hidden="' . esc_attr( $this->struct['active'] ) . '">' . $this->description();

		$output .= '<div class="facetwp-section-content">';

		$output .= $this->render_template();
		$output .= $this->render_children();

		$output .= '</div></div>';

		return $output;
	}

}
