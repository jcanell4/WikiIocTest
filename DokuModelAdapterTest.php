<?php

require_once 'DokuModelAdapterTestCase.php';

/**
 * Generated by PHPUnit_SkeletonGenerator on 2014-11-01 at 02:25:01.
 */
class DokuModelAdapterTest extends DokuModelAdapterTestCase {

    public function __construct($name = "DokuModelAdapterTest") {
        parent::__construct($name);
    }
    
    /**
     * Escriu per pantalla un array de clau/valor
     * @param string $funcName
     * @param array $resp
     */
    private function showParameters($funcName, $resp) {
        print "PARAMETRES DE: " . $funcName . "\n";
        foreach ($resp as $key => $value) {
            print $key . " : " . $value . "\n";
        }
    }

    /**
     * Sets up the fixture, for example, opens a network connection.
     * This method is called before a test is executed.
     */
    protected function setUp() {
        
    }

    /**
     * Tears down the fixture, for example, closes a network connection.
     * This method is called after a test is executed.
     */
    protected function tearDown() {
        
    }

    /**
     * @test getHtmlPageTest
     */
    public function getHtmlPageTest() {
        $page = "prv:unfitxer";
        $pageId = str_replace(":", "_", $page);
        $title = $page;
        try {
            $resp = $this->getDokuModelAdapter()->getHtmlPage($page);
            $this->assertEquals($resp['id'], $pageId);
            $this->assertEquals($resp["ns"], $page);
            $this->assertEquals($resp["title"], $title);
            $this->assertArrayHasKey("content", $resp);
            print $resp["content"];
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        } catch (PageNotFoundException $e) {
            $this->assertFalse(FALSE);
        }


        $page = "noexisteix";
        $pageId = str_replace(":", "_", $page);
        $title = $page;
        try {
            $resp = $this->getDokuModelAdapter()->getHtmlPage($page);
            $this->assertEquals($resp['id'], $pageId);
            $this->assertEquals($resp["ns"], $page);
            $this->assertEquals($resp["title"], $title);
            $this->assertArrayHasKey("content", $resp);
            print $resp["content"];
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        } catch (PageNotFoundException $e) {
            $this->assertFalse(FALSE);
        }
    }

    /**
     * @test getCodePageTest
     */
    public function getCodePageTest() {
        $page = "prv:unfitxer";
        $pageId = str_replace(":", "_", $page);
        $title = $page;
        try {
            $resp = $this->getDokuModelAdapter()->getCodePage($page);
            //$this->showParameters("getCodePageTest", $resp);
            $this->assertEquals($resp['id'], $pageId);
            $this->assertEquals($resp["ns"], $page);
            $this->assertEquals($resp["title"], $title);
            $this->assertArrayHasKey("content", $resp);
            print $resp["content"];
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        } catch (PageNotFoundException $e) {
            $this->assertFalse(FALSE);
        }

        $page = "noexisteix";
        $pageId = str_replace(":", "_", $page);
        $title = $page;
        try {
            $resp = $this->getDokuModelAdapter()->getCodePage($page);
            $this->assertEquals($resp['id'], $pageId);
            $this->assertEquals($resp["ns"], $page);
            $this->assertEquals($resp["title"], $title);
            $this->assertArrayHasKey("content", $resp);
            print $resp["content"];
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        } catch (PageNotFoundException $e) {
            $this->assertFalse(FALSE);
        }
    }

    /**
     * @test cancelEditionTest
     */
    public function cancelEditionTest() {
        $page = "prv:unfitxer";
        $pageId = str_replace(":", "_", $page);
        $title = $page;
        try {
            $resp = $this->getDokuModelAdapter()->cancelEdition($page);
            //$this->showParameters("cancelEditionTest", $resp);
            $this->assertEquals($resp['id'], $pageId);
            $this->assertEquals($resp["ns"], $page);
            $this->assertEquals($resp["title"], $title);
            $this->assertArrayHasKey("content", $resp);
            print $resp["content"];
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        } catch (PageNotFoundException $e) {
            $this->assertFalse(TRUE);
        }

        $page = "noexisteix";
        $pageId = str_replace(":", "_", $page);
        $title = $page;
        try {
            $resp = $this->getDokuModelAdapter()->cancelEdition($page);
            $this->assertEquals($resp['id'], $pageId);
            $this->assertEquals($resp["ns"], $page);
            $this->assertEquals($resp["title"], $title);
            $this->assertArrayHasKey("content", $resp);
            print $resp["content"];
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        } catch (PageNotFoundException $e) {
            $this->assertFalse(FALSE);
        }
    }

    /**
     * @test saveEditionTest
     */
    public function saveEditionTest() {
        $page = "prv:unfitxer";
        $pageId = str_replace(":", "_", $page);
        $title = $page;
        try {
            $resp = $this->getDokuModelAdapter()->saveEdition($page);
            //$this->showParameters("saveEditionTest", $resp);
            $this->assertEquals($resp['id'], $pageId);
            $this->assertEquals($resp["ns"], $page);
            $this->assertEquals($resp["title"], $title);
            $this->assertArrayHasKey("content", $resp);
            print $resp["content"];
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        } catch (PageNotFoundException $e) {
            $this->assertFalse(TRUE);
        }

        $page = "noexisteix";
        $pageId = str_replace(":", "_", $page);
        $title = $page;
        try {
            $resp = $this->getDokuModelAdapter()->saveEdition($page);
            $this->assertEquals($resp['id'], $pageId);
            $this->assertEquals($resp["ns"], $page);
            $this->assertEquals($resp["title"], $title);
            $this->assertArrayHasKey("content", $resp);
            print $resp["content"];
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        } catch (PageNotFoundException $e) {
            $this->assertFalse(FALSE);
        }
    }

    /**
     * @test isDeniedTest
     */
    public function isDeniedTest() {
        //TODO
        /*
        $page = "prv:unfitxer";
        try {
            $this->getDokuModelAdapter()->saveEdition($page);
            $resp = $this->getDokuModelAdapter()->isDenied();
            print "isDeniedTest\n";
            print $resp . "\n";
            $this->assertFalse($resp); //ES Correcte?
            //$this->assertTrue($resp);
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        }*/
        
        //FALTARIA EL CAS DE FITXER DENEGAT?
    }

    /**
     * @test getMediaFileNameTest
     */
    public function getMediaFileNameTest() {
        global $conf;
        $page = "common:cc.png";
        $pageId = str_replace(":", "/", $page);
        try {
            $resp = $this->getDokuModelAdapter()->getMediaFileName($page);
            $this->assertEquals($resp, $conf['mediadir'].'/'.$pageId);
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        }
    }

    /**
     * @test getIdWithoutNsTest
     */
    public function getIdWithoutNsTest() {
        $page = "prv:unfitxer";
        $pos = strrpos($page, ':');
        if ($pos !== false) {
            $idWithOutNs = substr($page, $pos + 1);
        } else {
            $idWithOutNs = $page;
        }
        
        try {
            $resp = $this->getDokuModelAdapter()->getIdWithoutNs($page);
            $this->assertEquals($resp, $idWithOutNs);
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        }
    }

    
    /**
     * @test getMediaListTest
     */
    public function getMediaListTest() {
        $page = "common";
        $mediaFile="cc.png";
        try {
            $resp = $this->getDokuModelAdapter()->getMediaList($page);
            //$this->showParameters("getmedialist", $resp);
            $this->assertEquals($resp[0], $mediaFile);
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        }
    }
    
    
    /**
     * @test imagePathToIdTest
     */
    public function imagePathToIdTest() {
        global $conf;
        $pathFile = "/common/cc.png";
        $path = $conf['mediadir'] . $pathFile;
        $imageId = "common:cc.png";
        try {
            $resp = $this->getDokuModelAdapter()->imagePathToId($path);
            $this->assertEquals($resp, $imageId);//COMPROVAR QUIN ES EL RESULTAT CORRECTE
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        }
    }
    
    /**
     * @test getPageFileNameTest
     */
    public function getPageFileNameTest() {
        global $conf;
        $page = "prv:unfitxer";
        $pathPage = str_replace(":", "/", $page);
        $pathPage .= ".txt";
        $path = $conf['datadir']."/".$pathPage;
        try{
            $resp = $this->getDokuModelAdapter()->getPageFileName($page);
            $this->assertEquals($resp, $path);
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        }
    }
    
    
    /**
     * @test getMediaUrlTest
     */
    
    public function getMediaUrlTest() {
        $amp="&amp;";
        $url="/./lib/exe/fetch.php?";
        $image = "common:cc.png";
        $height = "31";
        $width = "90";
        $t="1359488666";
        $tok="f14fbf";
        $command = $url."t=".$t.$amp."w=".$width.$amp."h=".$height.$amp."tok=".$tok.$amp."media=".$image;
        try{
            $resp = $this->getDokuModelAdapter()->getMediaUrl($image);
            // "/./lib/exe/fetch.php?t=1359488666&amp;w=90&amp;h=31&amp;tok=f14fbf&amp;media=common:cc.png"
            $this->assertEquals($resp, $command);
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        }
    }
    
    /**
     * @test uploadImageTest
     */
    public function uploadImageTest() {
        $nsTarget = "common";
        $idTarget = "prova.jpg";
        $filePathSource = "/tmp/prova.jpg";
        try{
            $resp = $this->getDokuModelAdapter()->uploadImage($nsTarget, $idTarget, $filePathSource);
            print "uploadImage ".$resp."\n";
            //$this->assertEquals($resp, $path);
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        }
    }
    
    /**
     * @test saveImageTest
     */
    public function saveImageTest() {
        $nsTarget = "common";
        $idTarget = "prova.jpg";
        $filePathSource = "/tmp/prova.jpg";
        try{
            $resp = $this->getDokuModelAdapter()->saveImage($nsTarget, $idTarget, $filePathSource);
            print "saveImage ".$resp."\n";
            //$this->assertEquals($resp, $path);
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        }
    }
    
    
    /**
     * @test getNsTreeTest
     */
    public function getNsTreeTest() {
        $currentnode = "fp:dam";
        $type="d";
        try{
            $resp = $this->getDokuModelAdapter()->getNsTree($currentnode, 0);
            $this->showParameters("getNsTree", $resp);//PRINT
            
            $this->assertEquals($resp["id"], $currentnode);
            $this->assertEquals($resp["name"], $currentnode);
            $this->assertEquals($resp["type"], $type);
            $this->assertArrayHasKey("children", $resp);
        } catch (PHPUnit_Framework_Exception $e) {
            print $e;
            $this->assertFalse(TRUE);
        }
        
        $currentnode = "common:cc.png";
        $type="d";
        try{
            $resp = $this->getDokuModelAdapter()->getNsTree($currentnode, 0);
            $this->showParameters("getNsTree", $resp);//PRINT
            
            $this->assertEquals($resp["id"], $currentnode);
            $this->assertEquals($resp["name"], $currentnode);
            $this->assertEquals($resp["type"], $type);
            $this->assertArrayHasKey("children", $resp);
        } catch (PHPUnit_Framework_Exception $e) {
            print $e;
            $this->assertFalse(TRUE);
        }
    }
    
    
    /**
     * @test getGlobalMessageTest
     */
    public function getGlobalMessageTest() {
        $id = "encoding";
        $encoding = "utf-8";
        try{
            $resp = $this->getDokuModelAdapter()->getGlobalMessage($id);
            $this->assertEquals($resp, $encoding);
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        }
    }
    
    /**
     * @test makeFileDirTest
     */
    public function makeFileDirTest() {
        $filePath = "tmp/dani/";
        try{
            $resp = $this->getDokuModelAdapter()->makeFileDir($filePath);
            print "makeFileDir ".$resp."\n";
            //$this->assertEquals($resp, $path);
        } catch (PHPUnit_Framework_Exception $e) {
            $this->assertFalse(TRUE);
        }
    }
}
