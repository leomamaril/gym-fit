import { Layout } from "../components/layout";
import AboutMe from "./Home/AboutUs";
import HeroPanel from "./Home/HeroPanel";
import WorkoutClasses from "./Home/WorkoutClasses";
import Trainers from "./Home/Trainers";
import Footer from "../layout/Footer";

export default function Home() {
    return(
        <Layout>
            <HeroPanel/>
            <AboutMe/>
            <WorkoutClasses/>
            <Trainers/>
        </Layout>
    )
}