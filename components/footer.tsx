import getLayouts from "@/actions/get-layouts";
import Link from "next/link";

const Footer = async () => {
    const layouts = await getLayouts();

    return (
        <footer className="bg-white border-t">
            <div className="container mx-auto py-8">
                <ul>
                    {Object.values(layouts).map((layout) => (
                        <Link key={layout.id} href={`/${layout.name}`}>{layout.name}</Link>
                    ))
                    }
                </ul>
            </div>
            <div className="mx-auto py-18">
                <p className="text-center text-xs text-black">
                    &copy; {new Date().getFullYear()} Store, Inc. All rights reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer;