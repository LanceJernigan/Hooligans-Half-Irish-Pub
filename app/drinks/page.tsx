import { headers } from "next/headers";
import Drinks from "@/components/drinks";

const Page = async () => {
	const h = await headers();
	const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
	const protocol = h.get("x-forwarded-proto") ?? "http";
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `${protocol}://${host}`;

	const drinksResponse = await fetch(`${baseUrl}/api/menus`, {
		cache: "no-store",
	});

	if (!drinksResponse.ok)
		return (
			<Drinks
				menus={{
					taps: [],
					bottles: [],
					spirits: [],
					cocktails: [],
					ondeck: [],
				}}
			/>
		);
	const menus = await drinksResponse.json();

	return <Drinks menus={menus} />;
};

export default Page;
