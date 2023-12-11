import { Helmet } from "react-helmet-async";
import ContactUs from "../../components/ContactUs/ContactUs";
import Faq from "../../components/Faq/Faq";

import AboutPage from "../AboutPage/AboutPage"
import AllProduct from "../AllProduct/AllProduct";
import Bannar from "../../components/Bannar/Bannar";


const HomePage = () => {
    return (
        <div>

            <Helmet>
                <title>Riz Shop || Home</title>
                
            </Helmet>

            <Bannar></Bannar>

            <AllProduct></AllProduct>

            <AboutPage></AboutPage>

            <Faq></Faq>

            <ContactUs></ContactUs>



        </div>
    );
};

export default HomePage;