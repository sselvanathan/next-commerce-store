import React from "react";
import Container from "@/components/ui/container";
import getLayout from "@/actions/get-layout";
import ReactMarkdown from 'react-markdown'

export const revalidate = 0;

interface LayoutPageProps {
    params: {
        layoutName: string;
    }
}

const LayoutPage: React.FC<LayoutPageProps> = async (
    {
        params
    }) => {
    const layout = await getLayout(params.layoutName);

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <b>{layout.name}</b>
                    <ReactMarkdown>{layout.markdown}</ReactMarkdown>
                </div>
            </Container>
        </div>
    )
}

export default LayoutPage;