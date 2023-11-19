import React from 'react'
import Footer from './Footer';
import TopNav from './TopNav';
import "./blog.css"
import yash from "./image/Yash Sharma.jpg"
import top from "./image/95aedea85c484b2998d19f215e8c1650.jpg"
import anand from "./image/Yash Anand.jpg"
import jeet from "./image/Jeet Selal.jpg"
import bhupendra from "./image/Bhupendra Dhawan and Mukesh.jpg"
import gaurabh from "./image/Gaurav Taneja.jpg"

function Blogs() { 
    return (
        <>
<TopNav/>

        <div className="para">
            <img className="para" src={top} />
            <p>Many YouTubers in India demonstrate their unique talents, and their videos are anxiously awaited by their fans. There are so many definitions for what constitutes an influencer, and indeed the health and fitness industry is no exception. To become an influencer in a given area is similar to becoming a major voice in that they are considered experts in their industry. Fitness influencers would not only share fitness-related information with their audience, but they would also share comparable stuff with their fans. The capacity to effect is how one's influence is determined. <br/>
                The key determinant of influencer impact is an enthusiastic and committed audience. Therefore, when looking for a fitness influencer, it's critical to consider their target audience.</p>
            </div>
                <div className="yash">
                    <img src={yash}/>
                        <h1>yash sharma</h1>
                        <p>Yash Sharma has been sensational on YouTube as a Health Influencer, Bodybuilder, Content creator, and fitness coach. He aims to provide quality education to his followers on their fitness and make them a better version. He started as a state-level football player and then became a fitness coach and entrepreneur. His channel provides the best exercises for bodybuilding and fitness. He possesses 8 years of experience in strength training and transformed 1000's people.</p>

                </div>

                <div className="anand">
                    <img src={anand}/>
                        <h1>Yash Anand</h1>
                        <p>Yash Anand is highly famous for his incredible body transformation. This handsome hunk has started making a high impact on social media and getting famous day by day. He started his YouTube channel in June 2017, intending to help every man become a better version of himself, and from that time, there has been no looking back for this young influencer on YouTube. The channel has helped beginners and has kept motivating them for bodybuilding and weight loss.</p>
                </div>

                <div className="jeet">
                    <img src={jeet}/>
                        <h1>Jeet Selal</h1>
                        <p>Jeet Selal is an immensely popular YouTuber, and many people are inspired by his way of sharing knowledge and producing quality content representing the sports fitness industry. He has become the Youth Icon for many people crazy about Fitness and Gym. His Amazing physique, character, and experience have made people fall in love with him. Jeet was born in Uttarakhand but settled in Australia with his wife. People are also inspired by his take on the drug-free India campaign, and he opened his company Himalayan Stallion to create awareness of drugs. Jeet promotes many sports brands and also owns a Gym in Surat.</p>
                </div>
                <div className="mukesh">
                    <img src={bhupendra}/>
                        <h1>Bhupendra Dhawan and Mukesh</h1>
                        <p>Bhupendra Dhawan is an Indian weightlifter and Coach. He is also a recipient of the Dhronacharya Award for his excellent contribution to bodybuilding. He was also 4 times holder of the Mr. India Award. Along with renowned professionals in bodybuilding, Mr. India Mukesh Singh is together in the Fitness business. The fans follow him for his excellent training tips on bodybuilding and fitness.</p>
                </div>

                <div className="gaurav">
                    <img src={gaurabh}/>
                        <h1>Gaurav Taneja</h1>
                        <p>Popularly known as "The Flying Beast," he leads his way among the Top 50 Indian Health and fitness Youtuber. This YouTuber produces content that is so authentic that people adore watching his videos again and again. Born in Kanpur, Uttar Pradesh, Gaurav Taneja is a 35-year-old hard-hitting multi-talented personality who dominates as Vlogger, Pilot, fitness freak, and promising lawyer. Gaurav Taneja married Rani, famously known as the "Power couple." He started his journey on YouTube in December 2017, and Today, Gaurav is the inspiration of many people because of his enthusiasm and passion for fitness. </p>
                </div>
                <Footer/>
                </>
                )
}
                export default Blogs;