import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactTemplate from "@/templates/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	const body = await req.json();
	const { name, email, message } = body;

	if (!name || !email || !message) {
		return NextResponse.json(
			{ error: "Missing required fields: name, email, message" },
			{ status: 400 },
		);
	}

	const emailTemplate = (
		<ContactTemplate
			message={message}
			name={name}
			email={email}
		/>
	);
	try {
		const data = await resend.emails.send({
			from: `Hooligans <no-reply@thehalfirishpub.com>`,
			to: "kalaroche@gmail.com",
			subject: "New Contact Form Submission",
			replyTo: email,
			react: emailTemplate,
		});

		return NextResponse.json({ success: true, data });
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json(
				{ error: "Failed to send email", details: error.message },
				{ status: 500 },
			);
		} else {
			return NextResponse.json(
				{ error: "Failed to send email", details: "Unknown Error" },
				{ status: 500 },
			);
		}
	}
}
