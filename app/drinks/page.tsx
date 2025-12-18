import Drinks from "@/components/drinks";

const Page = async () => {
	const drinksResponse = await fetch(`${process.env.SITE_URL}/api/menus`, {
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
