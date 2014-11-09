<?php

/**
 * Description of DokuwikiTestCase
 *
 * @author Daniel Criado Casas<dani.criado.casas@gmail.com>
 */

if(!defined('DOKU_INC')) define('DOKU_INC', dirname(__FILE__)."/".DOKU_SRC);
require_once (DOKU_INC.'inc/init.php');
class DokuwikiTestCase extends PHPUnit_Framework_TestCase {
    public function __construct($name="DokuwikiTestCase") {
        parent::__construct($name);
    }
}
