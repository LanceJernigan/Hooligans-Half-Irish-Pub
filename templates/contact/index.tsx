import * as React from "react";
import {
	Html,
	Body,
	Tailwind,
	Container,
	Text,
	Heading,
	Head,
	Preview,
	Section,
	Row,
	Column,
	Hr,
} from "@react-email/components";

interface EmailTemplateProps {
	name: string;
	email: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	email,
	name,
	message,
}) => {
	return (
		<Html>
			<Head />
			<Tailwind>
				<Body className="bg-[#1a9638]">
					<Preview>New Contact Submission</Preview>
					<Container className="mx-auto my-[30px] overflow-hidden rounded-lg bg-white">
						<Section>
							<Row>
								<Column className="p-4">
									<Heading className="text-center text-lg font-bold">
										New Contact Submission
									</Heading>
								</Column>
							</Row>
						</Section>
						<Section>
							<Row>
								<Column className="px-10 pb-10">
									<Hr className="mb-4 border-[#1a9638]" />
									<Row>
										<Column className="w-1/3">
											<Text className="my-0 text-sm font-bold text-[#0e0e0e]">
												Name:
											</Text>
										</Column>
										<Column className="w-2/3">
											<Text className="my-0 text-sm leading-[22px] text-[#0e0e0e]">
												{name}
											</Text>
										</Column>
									</Row>
									<Row>
										<Column className="w-1/3">
											<Text className="my-2 text-sm font-bold leading-[22px] text-[#0e0e0e]">
												Email:
											</Text>
										</Column>
										<Column className="w-2/3">
											<Text className="my-2 text-sm leading-[22px] text-[#0e0e0e]">
												{email}
											</Text>
										</Column>
									</Row>
									<Row>
										<Column className="w-full">
											<Text className="whitespace-pre-wrap text-sm leading-[22px] text-[#0e0e0e]">
												{message}
											</Text>
										</Column>
									</Row>
								</Column>
							</Row>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default EmailTemplate;
