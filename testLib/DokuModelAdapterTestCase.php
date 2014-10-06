<?php

/**
 * Description of DokuModelAdapterTestCase
 *
 * @author Daniel Criado Casas<dani.criado.casas@gmail.com>
 */
require_once 'DokuwikiTestCase.php';
require_once (DOKU_INC.'lib/plugins/wikiiocmodel/DokuModelAdapter.php');
class DokuModelAdapterTestCase extends DokuwikiTestCase{
    private $adapter;
    
    /**
     * Constructor
     */
    function DokuModelAdapterTestCase() {
        $this->adapter = new DokuModelAdapter();
    }
    
    /**
     * Getter de la instància
     */
    function getDokuModelAdapter(){
        return $this->adapter;
    }
}
