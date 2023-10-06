import {Layout} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/layouts/name`;

const getLayout = async (layoutName: string): Promise<Layout> => {
    const res = await fetch(`${URL}/${layoutName}`);

    return res.json();
}

export default getLayout;