/* eslint-disable react/no-unescaped-entities */

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';

const Faq = () => {

    useEffect(() => {

        AOS.init();

    }, [])

    return (
        <div>
           

            <div className="my-[50px] pb-[50px] px-[10px] bg-[#99DBF5]" data-aos="fade-up" >

                <h1 className="text-5xl font-bold text-center pt-[20px]">Frequently Asked Questions </h1>

                <div className="space-y-3 mt-[40px]" >




                    <div className="collapse collapse-arrow bg-base-200" >
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        What are the key features of a good Inventory Management System?
                        </div>
                        <div className="collapse-content">
                            <p>A robust IMS should include features such as real-time inventory tracking, order management, reporting and analytics, barcode scanning, supplier management, and integration capabilities with other business systems (e.g., ERP, CRM).</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200" >
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        How does an Inventory Management System help in reducing costs?
                        </div>
                        <div className="collapse-content">
                            <p> An IMS helps reduce costs by preventing overstocking, which minimizes holding costs, and by preventing stockouts, which can lead to lost sales and customer dissatisfaction. It optimizes reorder points, enhances order accuracy, and reduces the need for emergency or rush orders.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200" >
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        Can an Inventory Management System integrate with other business systems?
                        </div>
                        <div className="collapse-content">
                            <p>  Yes, a good IMS should have the capability to integrate with other business systems, such as Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems. This ensures seamless data flow and consistency across different departments.</p>
                        </div>
                    </div>


                    <div className="collapse collapse-arrow bg-base-200" >
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        How does an Inventory Management System handle product variations and updates?
                        </div>
                        <div className="collapse-content">
                            <p>An IMS should be able to handle product variations by allowing for different attributes (e.g., size, color) and managing them within a single product entry. It should also support updates, such as price changes, product additions, and discontinuations, to keep the system accurate and up-to-date. </p>
                        </div>
                    </div>


                    <div className="collapse collapse-arrow bg-base-200" >
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        How does an Inventory Management System handle multi-location inventory?
                        </div>
                        <div className="collapse-content">
                            <p>  An IMS designed for multi-location inventory should support tracking stock levels at various locations in real-time. It should provide tools for transferring stock between locations, ensuring that inventory is balanced and optimized across the entire supply chain.</p>
                        </div>
                    </div>


                    <div className="collapse collapse-arrow bg-base-200" >
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        Is training required for users to operate an Inventory Management System?
                        </div>
                        <div className="collapse-content">
                            <p> Yes, training is essential for users to effectively operate an Inventory Management System. Training should cover basic functionalities, data entry, report generation, and any specific features unique to the system being implemented.</p>
                        </div>
                    </div>







                </div>

            </div>

        </div>
    );
};

export default Faq;