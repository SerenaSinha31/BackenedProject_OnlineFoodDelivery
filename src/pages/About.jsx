import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={'About us - food website'}>
     <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Taste-Bust! We are more than just a food website. We are a community of passionate food lovers and home cooks, just like you.

Founded in 2024, our mission is to inspire culinary creativity and make cooking an enjoyable experience for everyone. Whether you’re a seasoned chef or a beginner in the kitchen, we believe that everyone can create mouth-watering dishes with the right ingredients and a little guidance.

At Foodie’s Delight, we offer a wide range of recipes from various cuisines around the world. Our recipes are carefully curated and tested to ensure that you can recreate them in your kitchen with ease. We also provide cooking tips, product reviews, and articles about food culture and history.


Our team is made up of professional chefs, food writers, and photographers who share a common love for food and a desire to share their knowledge with the world. We are constantly exploring new flavors and techniques to bring you the most delicious and innovative recipes.

Join us on this culinary journey as we explore the world of food, one recipe at a time
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
