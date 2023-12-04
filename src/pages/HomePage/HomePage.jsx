import ContactUs from "../../components/ContactUs/ContactUs";
import Faq from "../../components/Faq/Faq";

import AboutPage from "../AboutPage/AboutPage"
import AllProduct from "../AllProduct/AllProduct";


const HomePage = () => {
    return (
        <div>

            HomePage
           
            <AllProduct></AllProduct>
         
            <AboutPage></AboutPage>

            <Faq></Faq>

            <ContactUs></ContactUs>

           

        </div>
    );
};

export default HomePage;