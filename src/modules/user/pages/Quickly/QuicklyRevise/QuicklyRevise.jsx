import React, { useEffect, useState } from "react";
import { Container, ImageWrapper, Image, Card, Title } from "./QuicklyRevise.styles";
import { getModule } from "../../../../../api/addNewModuleApi"; // Import API function
import { Link } from "react-router-dom";
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
              <Image src={module.imageURL || "https://via.placeholder.com/300"} alt={module.moduleName}
              style={{
                borderRadius: "10px",
              }}
              />
            </ImageWrapper>
           <Link to={`/user/revise/${module._id}`
           }
           style={{textDecoration: "none"}}> 
            <Title
            style={{
              textAlign: "left"
            }} >{module.moduleName}</Title></Link>
          </Card>
        ))
      ) : (
        !loading && <p>No modules found.</p>
      )}
    </Container>
  );
};

export default QuicklyRevise;
