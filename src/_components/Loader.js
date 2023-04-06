import React from "react";
import { promiseTrackerHoc } from "react-promise-tracker";
import ClipLoader from "react-spinners/ClipLoader";


const LoaderInner = (props) =>
  props.promiseInProgress && (
    <div style={{background:"#effcff", opacity:0.8, height:'100vh', width:'100vw', position:'fixed', top:'0px', left:'0px', display: "flex",
    justifyContent: "center",
        alignItems: "center", zIndex:656656567}}>
            <ClipLoader
                style={{display:'block', margin:'0 auto', borderColor:'red'}}
                size={50}
                //size={"150px"} this also works
                color={"#0099FF"}
                loading={true}
                />
              <br/>
            
            <div style={{ margin:10,fontSize:20, fontWeight:'bold', color:'#999999', alignItems: "center",}}>Please wait...</div></div>
  )

export default  promiseTrackerHoc(LoaderInner);
