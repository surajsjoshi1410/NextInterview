import React from "react";
import { Container, Image, Text } from "../QuicklyRevise/QuicklyRevise.styles";
import quicklyimage from "../../assets/quicklyimage.png";
const QuicklyRevise = () => {
  return (
    <Container>
      <Image>
        <div className="rocket-launch">
           <img src={quicklyimage} alt="rocket" 
           style={{ width: "80%", height: "80%" }}
           />
         
        </div>
      </Image>
      <Text>After completing the module, you can access the quick revision.</Text>
    </Container>
  );
};

export default QuicklyRevise;
