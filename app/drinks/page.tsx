import Drinks from "@/components/drinks";

const Page = async () => {
	const drinksResponse = await fetch(
		`${process.env.NODE_ENV === "development" ? "http" : "https"}://${
			process.env.VERCEL_URL
		}/api/menus`,
		{
			cache: "no-store",
		},
	);
	const menus = await drinksResponse.json();

	console.log(
		`${process.env.NODE_ENV === "development" ? "http" : "https"}://${
			process.env.VERCEL_URL
		}/api/menus`,
	);

	return <Drinks menus={menus} />;
};

export default Page;
