import React from "react";
import Particles from "react-tsparticles";

export default () => (
  <div
    style={{
      
      position: "relative",
      top: "-100px",
      left: 0,
    }}
  >
    <Particles
        options = {
            {background:{
                color:{value:"#142a4d"},
                position:"50% 50%",
                repeat:"no-repeat",
                size:"cover"},
                fullScreen:{
                    enable:true,
                    zIndex:0
                },
                interactivity:{
                    events:{onClick:{enable:true,mode:"push"},
                    onHover:{
                        enable:true,
                        mode:"grab",
                        parallax:{
                            enable:true,
                            force:60
                        }
                    }
                },
                modes:{
                    bubble:{
                        distance:400,
                        duration:2,
                        opacity:0.8,
                        size:40},
                        grab:{
                            distance:400
                        }
                    }
                },
                particles:{
                    color:{
                        value:"#ffffff"
                    },
                    links:{
                        color:{
                            value:"#ffffff"
                        },
                        distance:150,
                        enable:true,
                        opacity:0.4
                    },
                    move:{
                        attract:{
                            rotate:{
                                x:600,y:1200
                            }
                        },
                        enable:true,
                        outModes:{
                            bottom:"out",
                            left:"out",
                            right:"out",
                            top:"out"
                        }
                    },number:{density:{enable:true}},opacity:{random:{enable:true},value:{min:0.1,max:0.5},animation:{enable:true,speed:3,minimumValue:0.1}},size:{random:{enable:true},value:{min:0.1,max:10},animation:{enable:true,speed:20,minimumValue:0.1}}}}}
     />
       </div>
);
