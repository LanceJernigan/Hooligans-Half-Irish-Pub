import Drinks from "@/components/drinks";

const Page = async () => {
	const drinksResponse = await fetch(`${process.env.VERCEL_URL}/api/menus`, {
		cache: "no-store",
	});
	const menus = await drinksResponse.json();

	return <Drinks menus={menus} />;
};

export default Page;
