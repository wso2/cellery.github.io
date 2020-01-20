---
layout: cellery-page
title: Cellery Home
---
<div class="row cCellery-io-White-row cCelleryIntro" style="padding-top:0; background-image:none;">
   <div class="container">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 cCellery-io-Home-Tag">
         <div>
            <div class="banner">
                <div class="cellery-msg">
                           <p class="cellery-text">
                Cellery started off as a learning experiment. Our passion for services composition and the need for a reference
                implementation for <a href="https://github.com/wso2/reference-architecture/blob/master/reference-architecture-cell-based.md"
                target="_blank" class="cellery-link">Cell-based architecture</a> gave birth to Cellery. Last year and half
                was a great learning experience for us. Through Cellery, we learnt to organize services and deploy on Kubernetes at scale.
                We also found out that this is a common problem that many technical communities are trying to solve and we are planning
                to contribute to <a href="https://oam.dev/" target="_blank" class="cellery-link">such communities</a> in future. As for
                Cellery, we are no longer actively maintaining the codebase. If you are interested in
                forking Cellery and using it in your project, please feel free to do so. 
                            </p>
                            <p>You can navigate to the code base
                at - <a target="_blank" href="https://github.com/wso2/cellery" class="cellery-link">https://github.com/wso2/cellery</a>.          
                           </p>
                       </div>
            </div>
         </div>
      </div>
      <div class="col-xs-12 col-sm-16 col-md-6 col-lg-6 cCellery-io-Home-Left-col">
         <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 cCellery-io-Home-main-content-wraper">
         <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 cCellery-io-Home-main-instructions cLeft-pading-none">
               <p>The use of microservices and serverless functions is exploding as organizations aim to increase speed of development and improve scalability.
This can quickly get out of control, creating a need for higher-level constructs,
which aggregate multiple microservices and serverless functions into re-usable building blocks. We call these <i>cells</i>. 


</p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 cCellery-io-Home-main-instructions cLeft-pading-none">
               <p>Cellery is a code-first approach to building, integrating, running and managing composite applications on Kubernetes. 
Build, push/pull, test, deploy, update, scale and observe cells. Create secure APIs by default. 
Use your existing container images, written in any language.

</p>
            </div>
                        

            <!-- <p><a class="cGreenLink" href="/philosophy">LEARN MORE ></a></p> -->
            <div class="cHomeButtonContainer">
               <a class="cCellery-io-Home-main-download-button" href="https://github.com/wso2-cellery/sdk/blob/master/README.md" target="_blank">Get Started</a>
            </div>
            <!-- <p class="cCellery-io-Home-OS">Distributions available </br>for Linux, OS X and Windows</p> -->
            <!-- <hr class="cHr"> -->
         </div>
      </div>
      <div class="col-xs-12 col-sm-16 col-md-6 col-lg-6 cCellery-io-Home-Right-col cCellery-io-Home-widget">
         <a class="cTry" href="https://www.katacoda.com/wso2/courses/cellery" target="_blank">Try it yourself ></a>
         <div class="cVideoConatiner cBorderGray ">
 <div class="VideoR-one cGoToTop" id="videoClick_1" onclick="this.nextElementSibling.style.display = 'block'; this.style.display = 'none'">
          <img src="{{site.baseurl}}/img/play.svg"/>
                </div>
                <div class="embed-responsive embed-responsive-16by9 " style="display:none">
<div class="embed-container" id="video_1"></div>
                </div>
</div>
      </div>
   </div>
</div>
<div class="row cCellery-io-Gray-row">
   <div class="container" data-aos="fade-up">
      <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
         <h2>How does Cellery work?</h2>
      </div>
      <!-- <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 cListContainerHome">
         <ul>
            <li> Write simple code that packages microservices together into cells, which are simply groups of microservices with well-defined APIs.</li>
            <li>Compile cells into immutable images. Push and pull images from any docker repository.</li>
            <li>Connect cells together into applications.</li>
            <li>Your application is secure by default using mTLS and JWT tokens with embedded microgateways.</li>
            <li>Manage and observe cells with simple tools, tracing, and monitoring.</li>
            <li>Cellery extends Kubernetes and Istio, supporting multiple clouds including Google, AWS, Azure and OpenShift.</li>
            <li>Cellery is completely open source and supports writing apps in any language</li>
         </ul>
      </div> -->
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 cDaigramContainerHome">
       <div class="cDiagramBorder"  data-aos="fade-up">
         <div class="cChinaAdvantageBlock" data-aos="fade-up">
            <img src="{{site.baseurl}}/img/diagram/cellery-architecture_step-01.svg"/>
         </div>
         <div class="cChinaAdvantageBlock" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" style="margin-top: -60px;">
            <img src="{{site.baseurl}}/img/diagram/cellery-architecture_step-02.svg"/>
         </div>
         <div class="cChinaAdvantageBlock" data-aos="fade-up">
            <img src="{{site.baseurl}}/img/diagram/cellery-architecture_step-03.svg"/>
         </div>
         </div>
      </div>
   </div>
   </div>

<div class="row cCellery-io-White-row">
   <div class="container">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  cCelleryBoxHomeContainer">
         <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h2>Capabilities</h2>
         </div>
         <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3" >
            <div class="cCelleryBoxHome">
               <!-- <div class="cCelleryBoxImg">
                  <img src="{{site.baseurl}}/img/create-cloud.svg"/>
               </div> -->
               <h3 class="box1">Compose</h3>
               <p>Cellery simplifies composing microservice apps. Use code instead of YAML to build, test and deploy composites on Kubernetes. Re-use your existing container images.</p>
            </div>
         </div> 
         <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 " >
            <div class="cCelleryBoxHome">
               <!-- <div class="cCelleryBoxImg">
                  <img src="{{site.baseurl}}/img/structure-secure.svg"/>
               </div> -->
               <h3 class="box3">Secure</h3>
               <p>Cellery apps are secure by default, using secured APIs, single sign-on, tokens, policy-based access control and mTLS.
</p>
            </div>
         </div>
         <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 " >
            <div class="cCelleryBoxHome">
               <!-- <div class="cCelleryBoxImg">
                  <img src="{{site.baseurl}}/img/agile-dev.svg"/>
               </div> -->
               <h3 class="box2">Operate</h3>
               <p>Cellery is designed around DevOps practices. Build, push, pull, test and run composite apps with the CLI. Deploy and update  using blue/green and canary deployments.
</p>
            </div>
         </div>
         <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 " >
            <div class="cCelleryBoxHome">
               <!-- <div class="cCelleryBoxImg">
                  <img src="{{site.baseurl}}/img/observable.svg"/>
               </div> -->
               <h3 class="box4">Observe</h3>
               <p>Cellery visualises your composites as diagrams. At runtime these diagrams become observable with monitoring and tracing.</p>
            </div>
         </div>
         <!-- <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 cCelleryLinksomeContainer">
            <ul>
               <li>
                  <a href="">Try out Cellery on Katacoda</a>
               </li>
               <li>
                  <a href="">Get started with Cellery on GCP or Kubernetes</a>
               </li>
            </ul>
            </div> -->
      </div>
      <div class=""></div>
   </div>
</div>

<!-- <div class="row cCellery-io-Gray-row" id="Get-Started">
<div class="container">
   <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 cListContainerHome">
      <h2>Get Started</h2>
   </div>
</div> -->
<div class="row cCellery-io-White-row">
   <div class="container">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 cListContainerHome cLinksList">
      <h2 id="community">Join the Community</h2>
      <ul>
        <li><img src="../{{site.baseurl}}/img/slack-logo.svg" class="community-list-svg"/><a href="https://join.slack.com/t/cellery-io/shared_invite/enQtNzkwMzI4NjE2MDA1LThkZTI2ZjQ2OWEzNmIwZWQ5ZDg3MGFmNWZiYmY3MWVmZTRiMjdjZDZlMmUyNmY4YmNmYjQ0MDRlZDEzNDg3N2U" target="_blank">Slack</a></li>
        <li><img src="../{{site.baseurl}}/img/twitter-logo.svg" class="community-list-svg"/><a href="https://twitter.com/cellery_io" target="_blank">Twitter</a></li>
        <li><img src="../{{site.baseurl}}/img/google-groups.svg" class="community-list-svg"/><a href="https://groups.google.com/forum/#!forum/wso2-cellery-dev" target="_blank">Mailing list</a></li>
        <li><img src="../{{site.baseurl}}/img/medium-logo.svg" class="community-list-svg"/><a href="https://medium.com/wso2-cellery" target="_blank">Medium</a></li>
        <li><img src="../{{site.baseurl}}/img/github-logo-green.svg" class="community-list-svg"/><a href="https://github.com/wso2-cellery/" target="_blank">Github</a></li>
        <li><img src="../{{site.baseurl}}/img/zoomus-icon.svg" class="community-list-svg"/><a href="https://docs.google.com/document/d/1Ndj3Beh-iRgLKxGx76_t2AQ_67ZhPS_aKCbm27GQ_ms/edit?pli=1#heading=h.j5r8jmg8lp6w" target="_blank">Bi-weekly community meeting</a>
            <span class="community-text"> (Wednesdays 09:30 PM IST/ 08:00 AM PST)</span>
        </li>
        <li><a href="https://github.com/wso2-cellery/sdk/blob/master/CONTRIBUTING.md" target="_blank">How to contribute</a></li>
      </ul>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 cListContainerHome cLinksList">
      <h2 id="docs">Docs</h2>
      <ul>
        <li><a href="https://github.com/wso2-cellery/samples" target="_blank">Samples</a></li>
        <li><a href="https://github.com/wso2-cellery/sdk/blob/master/README.md" target="_blank">Getting started</a></li>
        <li><a href="https://github.com/wso2-cellery/sdk/blob/master/docs/cellery-syntax.md" target="_blank">How to code cells</a></li>
        <li><a href="https://github.com/wso2-cellery/sdk/blob/master/docs/cli-reference.md" target="_blank">How to use the CLI</a></li>
        <li><a href="https://github.com/wso2-cellery/sdk/blob/master/docs/cellery-architecture.md" target="_blank">Architecture</a></li>
        <!-- <li><a href="https://github.com/wso2-cellery/sdk/blob/master/docs/cellery-philosophy.md" target="_blank">Philosophy</a></li> -->
        <li><a href="https://github.com/wso2-cellery/sdk/blob/master/docs/cellery-and-kubernetes.md" target="_blank">How Cellery 
        works with Kubernetes</a></li>
      </ul>
   </div>
</div>

<script>
        $(document).ready(function() {

            $('.cCelleryDemo').addClass("cCelleryDemoClass");

        });

        $('.VideoR-one').click(function() {

            var videos = ["", "SkgrHUhK4SI"];

            var video_div = $(this).attr('id');
            var video_div = video_div.split("_");
            var vcode = video_div[1];

            $("#video_" + vcode).html('<iframe width="100%" height="373" src="https://www.youtube.com/embed/' + videos[vcode] + '?autoplay=1&wmode=transparent&VQ=HD1080" frameborder="0" allowfullscreen wmode="Opaque" allow="autoplay"></iframe>');
            $("#video_" + vcode).show();
            $('.cPlayTitle').toggleClass('cPlay');

            $('.cVideoRow').addClass('cPLAY-VideoRow');
            $('.cConVideoContainer').addClass('cPLAY-VideoContainer');

        });
    </script>
 <style>
.cVideoConatiner {
   background-image: url("{{site.baseurl}}/img/demo.jpg");
   background-repeat: no-repaet;
}
</style>
