import React from "react";
import Gotop from "../components/gotop";
import ayroui from "../assets/images/homepage/brands/ayroui-white.svg";
import ecom from "../assets/images/homepage/brands/ecom-white.svg";
import graygrids from "../assets/images/homepage/brands/graygrids-white.svg";
import plainadmin from "../assets/images/homepage/brands/plainadmin-white.svg";
import "/src/index.css";
import "../assets/css/brand.css";
import "../assets/css/border.css"
import "../assets/css/grid.css"

const brandsData = [
    {
        imageSrc: ayroui,
        lightImageSrc: ayroui,
        altText: "graygrids",
        link: "#",
    },
    {
        imageSrc: ecom,
        lightImageSrc: ecom,
        altText: "lineicons",
        link: "#",
    },
    {
        imageSrc: graygrids,
        lightImageSrc: graygrids,
        altText: "uideck",
        link: "#",
    },
    {
        imageSrc: plainadmin,
        lightImageSrc: plainadmin,
        altText: "ayroui",
        link: "#",
    },

];

export default function Brand1() {
    return (
        // original way
        // <section className="brand-wrap py-20 lg:py-[120px]">
        //     <div className="brand-bg">
        //         <BrandBg />
        //     </div>
        //     <div className="container">
        //             <h2 className="text-white text-6xl font-bold mb-10">Our clients</h2>
        //         <div className="-mx-4 flex flex-wrap">
        //             <div className="w-full px-4">
        //                 <div className="flex flex-wrap items-center justify-center">
        //                     {brandsData.map((brand, i) => (
        //                         <SingleImage key={i} brand={brand} />
        //                     ))}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        // new way, use grid
        <section className="brand-wrap dark:bg-dark bg_border_b">
            <Gotop />
            {/* upper space */}
            <div className="grid grid-cols-13 bg_border_b">
                <div className="h-20 md:h-24 col-span-1 bg_border_r"></div>
                <div className="h-20 md:h-24 col-span-2 bg_border_r"></div>
                <div className="h-20 md:h-24 col-span-3 bg_border_r"></div>
                <div className="h-20 md:h-24 col-span-3 bg_border_r"></div>
                <div className="h-20 md:h-24 col-span-3 bg_border_r"></div>
                <div className="h-20 md:h-24 col-span-1"></div>
            </div>

            <div className="grid grid-cols-13 container">
                <div className="col-span-1 bg_border_r"></div>
                <div className="col-span-2 bg_border_r p-2">
                    <span className="little_number">04</span><br />
                    <span className="text-white">Some of</span>
                </div>
                <div className="brandlist_bg col-span-9">
                    <h2 className="h2_bg text-white text-3xl md:text-6xl font-bold leading-[5rem] bg_border_r py-4">
                        Our clients
                    </h2>
                </div>
                <div className="col-span-1"></div>

                <div className="col-span-1 bg_border"></div>
                <div className="col-span-2 bg_border"></div>
                <div className="brandlist_bg col-span-9 flex flex-wrap py-10 bg_border_t">
                    <div className="w-full px-4">
                        <div className="flex flex-wrap items-center justify-center">
                            {brandsData.map((brand, i) => (
                                <SingleImage key={i} brand={brand} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-1 bg_border"></div>
            </div>
        </section>
    );
}

const SingleImage = ({ brand }) => {
    const { link, imageSrc, lightImageSrc, altText } = brand;
    return (
        <>
            <a
                href={link}
                className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
            >
                <img src={imageSrc} alt={altText} class="h-10 w-full dark:hidden" />
                <img
                    //   src={{ lightImageSrc }}
                    src={lightImageSrc}
                    alt={altText}
                    className="hidden h-10 w-full dark:block"
                />
            </a>
        </>
    );
};

