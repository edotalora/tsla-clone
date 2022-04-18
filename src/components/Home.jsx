import React, { useState } from "react";
import styled from "styled-components";
import Section from "./Section";
function Home(props) {
  const cars = [
    {
      id: 0,
      title: "Model S",
      description: "Order Online for Touchless Delivery",
      image: "model-s.jpg",
      range: "390",
      time: "1.99",
      topSpeed: "200",
      peakPower: "1,020",
      leftBtnText: "Custom order",
      rightBtnText: "Existing inventory",
    },
    {
      id: 1,
      title: "Model 3",
      description: "Order Online for Touchless Delivery",
      image: "model-3.jpg",
      range: "400",
      time: "2.99",
      topSpeed: "180",
      peakPower: "900",
      leftBtnText: "Custom order",
      rightBtnText: "Existing inventory",
    },
    {
      id: 2,
      title: "Model X",
      description: "Order Online for Touchless Delivery",
      image: "model-x.jpg",
      range: "350",
      time: "1.55",
      topSpeed: "150",
      peakPower: "1,130",
      leftBtnText: "Custom order",
      rightBtnText: "Existing inventory",
    },
    {
      id: 3,
      title: "Model Y",
      description: "Order Online for Touchless Delivery",
      image: "model-y.jpg",
      range: "410",
      time: "2.05",
      topSpeed: "190",
      peakPower: "1,040",
      leftBtnText: "Custom order",
      rightBtnText: "Existing inventory",
    },
    {
      id: 4,
      title: "Lower Cost Solar Panels in America",
      description: "Money-back guarantee",
      image: "solar-panel.jpg",
      range: "410",
      time: "2.05",
      topSpeed: "190",
      peakPower: "1,040",
      leftBtnText: "Order now",
      rightBtnText: "Learn more",
    },
    {
      id: 5,
      title: "Solar for New Roofs",
      description: "Solar roof cost less than a new roof",
      image: "solar-roof.jpg",
      range: "410",
      time: "2.05",
      topSpeed: "190",
      peakPower: "1,040",
      leftBtnText: "Order now",
      rightBtnText: "Learn more",
    },
    {
      id: 6,
      title: "Accesories",
      description: "",
      image: "accessories.jpg",
      range: "410",
      time: "2.05",
      topSpeed: "190",
      peakPower: "1,040",
      leftBtnText: "Order",
    },
  ];
  const [models, setModels] = useState(cars);

  return (
    <div>
      <Container>
        {models &&
          models.map((model) => {
            return (
              <Section
                key={model.id}
                title={model.title}
                description={model.description}
                imageName={model.image}
                leftBtnText={model.leftBtnText}
                rightBtnText={model.rightBtnText}
              ></Section>
            );
          })}
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
