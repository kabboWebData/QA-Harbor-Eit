import React from "react";

import blog from '../../assets/photos/blog.jpg';

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaTwitterSquare } from "react-icons/fa";

import { FaBehance } from "react-icons/fa6";

import { GiHumanEar } from "react-icons/gi";

import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";



import { FaComment } from "react-icons/fa";

const BlogDetails = () => {
  return (

<div style={{display:"flex", flexDirection:"row"}}>  



    <div style={{flex:1, margin:"20px"}}>  

        <div style={styles.container}>
          <div style={styles.imageContainer}>
           <img
          src={blog}
          alt="Horseback Riding"
          style={styles.image}
        />
      </div>

      <div style={{display:"flex", flexDirection:"row", width:"600px"}}> 

         <div style={{flex:1, margin:"10px"}}> 

         <span > Food, Technology, Politics, Lifestyle</span> <br/>


         <div style={styles.metaData}>
      <div style={styles.item}>
        <span style={styles.text}>Mark Wiens</span>
        <span style={styles.icon}> <GiHumanEar/> </span>
      </div>
      <div style={styles.item}>
        <span style={styles.text}>12 Dec, 2017</span>
        <span style={styles.icon}> <FaRegCalendarAlt/>  </span>
      </div>
      <div style={styles.item}>
        <span style={styles.text}>1.2M Views</span>
        <span style={styles.icon}><FaRegEye/> </span>
      </div>
      <div style={styles.item}>
        <span style={styles.text}>06 Comments</span>
        <span style={styles.icon}> <FaComment/> </span>
      </div>
      <div style={styles.social}>
        <span style={styles.icon}> <FaFacebook/> </span> 
        <span style={styles.icon}><FaGithub/> </span> 
        <span style={styles.icon}> <FaTwitterSquare/> </span> 
        <span style={styles.icon}> <FaBehance/> </span> 
      </div>
    </div>
   

    </div>



        <div style={{flex:1, margin:"10px"}}>


        <h1 style={styles.title}>Astronomy Binoculars A Great Alternative</h1>
        
        <p style={styles.paragraph}>
          MCSE boot camps have its supporters and its detractors. Some people do
          not understand why you should have to spend money on boot camp when
          you can get the MCSE study materials yourself at a fraction.
        </p>
        <p style={styles.paragraph}>
          Boot camps have its supporters and its detractors. Some people do not
          understand why you should have to spend money on boot camp when you
          can get the MCSE study materials yourself at a fraction of the camp
          price. However, who has the willpower to actually sit through a
          self-imposed MCSE training, who has the willpower to actually sit
          through a self-imposed.
          </p>
          <p style={styles.paragraph}>
             Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
          </p> 
           </div>
        

        </div>

    </div>

 </div>



    <div style={{flex:1, margin:"20px"}}>  
    
    
    </div>



</div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    width: "120%",
    margin: "auto",
    backgroundColor: "#f4f4f4",
    padding: "50px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  imageContainer: {
    width: "100%",
    height: "400px",
    overflow: "hidden",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
  content: {
    padding: "20px",
  },
  categories: {
    color: "#999",
    marginBottom: "10px",
    fontStyle: "italic",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },


  metaData: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    fontSize: "14px",
    color: "#666",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  text: {
    marginRight: "8px",
    fontWeight: "bold",
  },
  icon: {
    fontSize: "16px",
  },
  social: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
 

 


  views: {
    marginRight: "10px",
  },
  comments: {
    marginRight: "10px",
  },
 




  paragraph: {
    fontSize: "11px",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "20px",
  },
};

export default BlogDetails;
