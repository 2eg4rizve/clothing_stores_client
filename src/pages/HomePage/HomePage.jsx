import Faq from "../../components/Faq/Faq";
import MyProducts from "../MyProducts/MyProducts";
import AboutPage from "../AboutPage/AboutPage"


const HomePage = () => {
    return (
        <div>

            HomePage
            <p className="text-5xl font-bold text-center my-[30px] pt-[20px]">My Product</p>
            <MyProducts></MyProducts>
         
            <AboutPage></AboutPage>

            <Faq></Faq>

           

        </div>
    );
};

export default HomePage;