import React, { useState } from "react";
import theme from "../../../../theme/Theme"; // Adjust the path according to your structure
import Group from "../..../../../../../../src/assets/Group.png";
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
      image: "https://via.placeholder.com/150",
      title: "React Basics",
      level: "Beginner",
      difficulty: "Easy Level",
      totalTime: "10h",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Advanced React",
      level: "Intermediate",
      difficulty: "Medium Level",
      totalTime: "15h",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Full-Stack Development",
      level: "Advanced",
      difficulty: "Hard Level",
      totalTime: "20h",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "React Basics",
      level: "Beginner",
      difficulty: "Easy Level",
      totalTime: "10h",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      title: "Advanced React",
      level: "Intermediate",
      difficulty: "Medium Level",
      totalTime: "15h",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
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
            <Image src={Group} alt={course.title} />
            <CardContent>
              <Title>{course.title}</Title>
              <Details>
                <p> {course.level} </p>
                <p> {course.difficulty}</p>
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
        />
      )}
    </>
  );
};

export default InterviewPage;
