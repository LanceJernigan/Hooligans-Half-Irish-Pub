import { NextResponse } from "next/server";

export async function GET() {
	try {
		const res = await fetch(
			`https://www.taphunter.com/widgets/location/v3/${process.env.TAPHUNTER_ID}.json`,
			{
				cache: "no-store",
			},
		);

		if (!res.ok) {
			console.error("TapHunter fetch failed", res.status, res.statusText);
			return NextResponse.json(
				{ error: "Failed to fetch data from TapHunter" },
				{ status: 502 },
			);
		}

		const data = await res.json();
		return NextResponse.json(data);
	} catch (err) {
		console.error("TapHunter fetch error", err);
		return NextResponse.json(
			{ error: "Unexpected error fetching TapHunter data" },
			{ status: 500 },
		);
	}
}
