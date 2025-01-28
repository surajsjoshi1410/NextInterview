// import React from "react";
// import { Container, ImageWrapper, Image, Card, Title } from "../QuicklyRevise/QuicklyRevise.styles";
// import quicklyimage from "../../assets/quicklyimage.png";

// const data = [
//   {
//     image: "https://via.placeholder.com/300", // Replace with actual image URLs
//     title: "Machine Learning",
//   },
//   {
//     image: "https://via.placeholder.com/300",
//     title: "Diagnosing and Investigating Metrics",
//   },
//   {
//     image: "https://via.placeholder.com/300",
//     title: "Diagnosing and Investigating Metrics",
//   },
//   {
//     image: "https://via.placeholder.com/300",
//     title: "Machine Learning",
//   },
//   {
//     image: "https://via.placeholder.com/300",
//     title: "Diagnosing and Investigating Metrics",
//   },
//   {
//     image: "https://via.placeholder.com/300",
//     title: "Diagnosing and Investigating Metrics",
//   },
// ];

// const QuicklyRevise = () => {
//   return (
//     <Container>
//       {/* <Image>
//         <div className="rocket-launch">
//            <img src={quicklyimage} alt="rocket" 
//            style={{ width: "80%", height: "80%" }}
//            />
         
//         </div>
//       </Image>
//       <Text>After completing the module, you can access the quick revision.</Text> */}

//       {data.map((item, index) => (
//         <Card key={index}>
//           <ImageWrapper>
//             <Image src={item.image} alt={item.image} />
//           </ImageWrapper>
//           <Title>{item.title}</Title>
//         </Card>
//       ))}
//     </Container>
//   );
// };

// export default QuicklyRevise;


import React, { useEffect, useState } from "react";
import { Container, ImageWrapper, Image, Card, Title } from "../QuicklyRevise/QuicklyRevise.styles";
import { getModule } from "../../../../api/addNewModuleApi"; // Import API function

const QuicklyRevise = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await getModule();
        if (response.success && Array.isArray(response.data)) {
          setModules(response.data);
        } else {
          throw new Error("Invalid API response format.");
        }
      } catch (err) {
        setError("Failed to fetch modules.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  return (
    <Container>
      {loading && <p>Loading modules...</p>}
      {error && <p>{error}</p>}

      {modules.length > 0 ? (
        modules.map((module, index) => (
          <Card key={module._id || index}>
            <ImageWrapper>
              <Image
                src={module.imageURL || "https://via.placeholder.com/300"}
                alt={module.moduleName}
              />
            </ImageWrapper>
            <Title>{module.moduleName}</Title>
          </Card>
        ))
      ) : (
        !loading && <p>No modules found.</p>
      )}
    </Container>
  );
};

export default QuicklyRevise;
