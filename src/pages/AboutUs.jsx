import { Layout } from "../components/layout";
import HeroPanel from "./About/HeroPanel";
import Trainers from "./About/Trainers";
import Footer from "../layout/Footer";
export default function AboutUs(){
    return(
        <Layout>
            <HeroPanel/>
            <Trainers/>
        </Layout>
    )
}