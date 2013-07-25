<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta http-equiv="keywords" content="real recycling, recycling, we take, ccc, onyx, rmf, wdc, christchurch city council, onyx environmental and industrial services, recovered materials foundation, waimakariri district council" />
    <meta http-equiv="description" content="The homepage of Real Recycling for Christchurch and Waimakariri." />
    <meta http-equiv="author" content="Chris Alley" />
    <title>Real Recycling - Contact</title>
    <style type="text/css">
      @import url(styles/styles.css);
    </style>
    <script type="text/javascript" src="scripts/misc_contact_page_code.js"></script>
    <script type="text/javascript" src="scripts/form_validator_class.js"></script>
    <script type="text/javascript" src="scripts/nn_flash_detection.js"></script>
    <script type="text/vbscript" src="scripts/ie_flash_detection.vb"></script>
    <script type="text/javascript" src="scripts/image_rollovers.js"></script>
  </head>
  <body onload="preparePage();">
    <div id="overall">
      <div id="header" title="Real Recycling"><img src="images/banner.png" alt="Real Recycling" title="Real Recycling" width="750" height="150" /></div>
      <div id="navigation">
        <ul>
          <li><a href="index.html"><img src="images/home.png" alt="Home" title="Home" onmouseover="showRollOverImage(0);" onmouseout="showNormalImage(0);" id="image0" width="80" height="30" /></a></li>
          <li><a href="metals.html"><img src="images/metals.png" alt="Metals" title="Metals" onmouseover="showRollOverImage(1);" onmouseout="showNormalImage(1);" id="image1" width="85" height="30" /></a></li>
          <li><a href="glass.html"><img src="images/glass.png" alt="Glass" title="Glass" onmouseover="showRollOverImage(2);" onmouseout="showNormalImage(2);" id="image2" width="75" height="30" /></a></li>
          <li><a href="cardboard.html"><img src="images/cardboard.png" alt="Cardboard" title="Cardboard" onmouseover="showRollOverImage(3);" onmouseout="showNormalImage(3);" id="image3" width="130" height="30" /></a></li>
          <li><a href="paper.html"><img src="images/paper.png" alt="Paper" title="Paper" onmouseover="showRollOverImage(4);" onmouseout="showNormalImage(4);" id="image4" width="80" height="30" /></a></li>
          <li><a href="plastics.html"><img src="images/plastics.png" alt="Plastics" title="Plastics" onmouseover="showRollOverImage(5);" onmouseout="showNormalImage(5);" id="image5" width="100" height="30" /></a></li>
          <li><a href="contact.html"><img src="images/contact.png" alt="Contact" title="Contact" onmouseover="showRollOverImage(6);" onmouseout="showNormalImage(6);" id="image6" width="100" height="30" /></a></li>
        </ul>      
      </div>
      <div id="content_area">
        <?php
          if ($_POST["full_name"]) {
            echo '<p class="form_submitted">Your information has been successfully submitted. Thank you for sending feedback to Christchurch City Council.</p>' . "\n";
          }
          else {
            echo '<p class="form_submitted">Please fill out the form on the <a href="contact.html" title="Contact Form">Contact</a> page.</p>' . "\n";
          }
        ?>
      </div>
      <div id="sponsors">
        <a href="http://www.ccc.govt.nz"><img src="images/ccc.png" alt="Christchurch City Council" title="Christchurch City Council" width="124" height="75" /></a>
        <a href="http://www.onyxes.com"><img src="images/onyx.png" alt="Onyx Environmental and Industrial Services" title="Onyx Environmental and Industrial Services" width="195" height="75" /></a>
        <a href="http://www.rmf.org.nz"><img src="images/rmf.png" alt="Recovered Materials Foundation" title="Recovered Materials Foundation" width="47" height="75" /></a>
        <a href="http://www.waimakariri.govt.nz"><img src="images/wdc.png" alt="Waimakariri District Council" title="Waimakariri District Council" width="112" height="75" /></a>
        <a href="http://www.ccc.govt.nz/recycling"><img src="images/rr.png" alt="Real Recycling" title="Real Recycling" width="150" height="75" /></a>
      </div>
      <div id="footer">
        <p>Copyright &copy; 2005, <a href="http://www.ccc.govt.nz/recycling" title="Christchurch City Council">CCC</a>, <a href="http://www.waimakariri.govt.nz" title="Waimakariri District Council">WDC</a>, <a href="http://www.rmf.org.nz" title="Recovered Materials Foundation">RMF</a>, and <a href="mailto:chris@chrisalley.info?subject=Real Recycling" title="Send an email to Chris Alley">Chris Alley</a>.</p>        
      </div>
    </div>
  </body>
</html>
