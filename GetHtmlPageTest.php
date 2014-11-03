<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of GetHtmlPageTest
 *
 * @author Daniel Criado Casas<dani.criado.casas@gmail.com>
 */


//define('__ROOT__', dirname(dirname(__FILE__))); 
require_once('testLib/DokuModelAdapterTestCase.php'); 
class GetHtmlPageTest extends DokuModelAdapterTestCase {
    
    function testGetHtmlPage() {
        $response = $this->adapter.getHtmlPage();
        echo $response;
    }
}
