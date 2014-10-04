<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DokuModelAdapterTestCase
 *
 * @author Daniel Criado Casas<dani.criado.casas@gmail.com>
 */
if (!defined('DOKU_INC'))
    die();
require_once 'DokuwikiTestCase.php';
require_once (DOKU_INC.'lib/plugins/wikiiocmodel/DokuModelAdapter.php');
class DokuModelAdapterTestCase extends DokuwikiTestCase{
    private $instance;
    
    /**
     * Constructor
     */
    function DokuModelAdapterTestCase() {
        $this->instance = new DokuModelAdapter();
    }
    
    /**
     * Getter de la instància
     */
    function getDokuModelAdapter(){
        return $this->instance;
    }
}