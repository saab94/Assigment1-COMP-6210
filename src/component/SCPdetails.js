import React from 'react';
import '../App.css';

import scp from '../data.json';

var scp_detail = scp.map(
  (scp) =>{
    
        if (scp.image ) {
          if(scp.additional_notes){
            return(
                <div id={scp.item}>
                    <h1 class="text-center">{scp.title}</h1>
                    <h2>Item #: {scp.item}</h2>
                    <h2><b>Object Class: </b>{scp.class}</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <h3>Special Containment Procedures:</h3>
                            <div dangerouslySetInnerHTML={{__html:scp.procedures}} />
                        </div>
                        <div class="col-md-6 img-div">
                            <img src={process.env.PUBLIC_URL+ '/images/' + scp.image} alt={scp.item}></img>
                        </div>
                        </div>
                    <h3>Additional Notes:</h3>
                    <div dangerouslySetInnerHTML={{__html:scp.additional_notes}} />
                    <h3>Appendix A:</h3>
                    <div dangerouslySetInnerHTML={{__html:scp.appendix_a}} />
                    <hr/>
                </div>
            )
          }
          else{
              if(scp.reference){
                  return(
                    <div id={scp.item}>
                        <h1 class="text-center">{scp.title}</h1>
                        <h2>Item #: {scp.item}</h2>
                        <h2><b>Object Class: </b>{scp.class}</h2>
                        <div class="row">
                            <div class="col-md-6">
                                <h3>Special Containment Procedures:</h3>
                                <div dangerouslySetInnerHTML={{__html:scp.procedures}} />
                            </div>
                            <div class="col-md-6 img-div">
                                <img src={process.env.PUBLIC_URL+ '/images/' + scp.image} alt={scp.item}></img>
                            </div>
                        </div>
                        
                        
                        <h3>Description:</h3>
                        <div dangerouslySetInnerHTML={{__html:scp.description}} />
                        <hr/>
                    </div>
                )
              }
              return(
                <div id={scp.item}>
                    <h1 class="text-center">{scp.title}</h1>
                    <h2>Item #: {scp.item}</h2>
                    <h2><b>Object Class: </b>{scp.class}</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <h3>Special Containment Procedures:</h3>
                            <div dangerouslySetInnerHTML={{__html:scp.procedures}} />
                        </div>
                        <div class="col-md-6 img-div">
                            <img src={process.env.PUBLIC_URL+ '/images/' + scp.image} alt={scp.item}></img>
                        </div>
                    </div>
                    <h3>Description:</h3>
                    <div dangerouslySetInnerHTML={{__html:scp.description}} />
                    <h3>Reference:</h3>
                    <div dangerouslySetInnerHTML={{__html:scp.reference}} />
                    <hr/>
                </div>
            )
          }
          
      }
      else{
          return(
            <div id={scp.item}>
                <h1 class="text-center">{scp.title}</h1>
                <h2>Item #: {scp.item}</h2>
                <h2><b>Object Class: </b>{scp.class}</h2>
                <h3>Special Containment Procedures:</h3>
                 <div dangerouslySetInnerHTML={{__html:scp.procedures}} />
                <h3>Description:</h3>
                 <div dangerouslySetInnerHTML={{__html:scp.description}} />
                 <hr/>
            </div>
            )
      }
    
  }
);

function SCPdetails(){
    return(
        <div class="container">
            <div class="row">
                {scp_detail}
            </div>
        </div>
    )
}

export default SCPdetails;