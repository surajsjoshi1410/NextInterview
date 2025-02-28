import React, { useState } from "react";
import theme from "../../../../theme/Theme"; // Adjust the path according to your structure
import {
  Container,
  Details,
  Image,
  Card,
  CardContent,
  StartButton,
  Title,
} from "./InterviewPage.style";
import StartInterview from "../../components/UserInterview/StartInterview"; // Import the modal component

const InterviewPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null); // Store the selected course

  const courses = [
    {
      id: 1,
      image: "https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain",
      title: "React Basics",
      level: "Beginner",
      difficulty: "Easy Level",
      totalTime: "10h",
    },
    {
      id: 2,
      image: "https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain",
      title: "Advanced React",
      level: "Intermediate",
      difficulty: "Medium Level",
      totalTime: "15h",
    },
    {
      id: 3,
      image: "https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain",
      title: "Full-Stack Development",
      level: "Advanced",
      difficulty: "Hard Level",
      totalTime: "20h",
    },
    {
      id: 4,
      image: "https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain",
      title: "React Basics",
      level: "Beginner",
      difficulty: "Easy Level",
      totalTime: "10h",
    },
    {
      id: 5,
      image: "https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain",
      title: "Advanced React",
      level: "Intermediate",
      difficulty: "Medium Level",
      totalTime: "15h",
    },
    {
      id: 6,
      image: "https://th.bing.com/th/id/OIP.hfNK8S7ywtaPVr8WGTV4-wHaE7?rs=1&pid=ImgDetMain",
      title: "Full-Stack Development",
      level: "Advanced",
      difficulty: "Hard Level",
      totalTime: "20h",
    },
  ];

  return (
    <>
      <Container>
        {courses.map((course) => (
          <Card key={course.id}>
            <Image src={course.image} alt={course.title} />
            <CardContent>
              <Title>{course.title}</Title>
              <Details>
                <p> {course.level} </p>
                <div className="dot"></div>
                <p> {course.difficulty}</p>
                <div className="dot"></div>
                <p> {course.totalTime}</p>
              </Details>
              <StartButton onClick={() => setSelectedCourse(course)}>
                Start Now
              </StartButton>
            </CardContent>
          </Card>
        ))}
      </Container>

      {/* Modal Component */}
      {selectedCourse && (
        <StartInterview
          isOpen={!!selectedCourse}
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          title={courses.find((c) => c.id === selectedCourse.id)?.title}
        />
      )}
    </>
  );
};

export default InterviewPage;
