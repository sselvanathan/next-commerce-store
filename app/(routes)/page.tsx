import Container from "@/components/ui/container";
import getProducts from "@/actions/get-products";
import React from "react";
import ProductList from "@/components/product-list";
import BillboardSlider from "@/components/billboard-slider";
import getBillboards from "@/actions/get-billboards";

export const revalidate = 0;
const HomePage = async () => {
    const featuredBillboards = await getBillboards({
        isFeatured: true,
    });
    const products = await getProducts({
        isFeatured: true,
    });

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <BillboardSlider billboards={featuredBillboards}/>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products}/>
                </div>
            </div>
        </Container>
    )
}

export default HomePage;