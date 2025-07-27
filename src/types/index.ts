export interface Feature {
	icon: string;
	title: string;
	description: string;
	gradientFrom: string;
	gradientTo: string;
	borderColor: string;
	iconBg: string;
}

export interface DownloadLink {
	href: string;
	icon: string;
	subtitle: string;
	title: string;
	bgColor: string;
	hoverColor: string;
	textColor?: string;
}

export interface FooterLink {
	href: string;
	label: string;
}

export interface NavigationItem {
	href: string;
	label: string;
}
