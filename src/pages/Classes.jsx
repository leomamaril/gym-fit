import { Layout } from "../components/layout";
import HeroPanel from "./Classes/HeroPanel";
import Workout from "./Classes/Workout";
export default function Classes(){
    return(
        <Layout>
            <HeroPanel/>
            <Workout/>
        </Layout>
    )
}