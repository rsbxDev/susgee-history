export type UserResponse = {
	data: User[];
};

export type User = {
	id: string;
	login: string;
	display_name: string;
};

export type GlobalBadgesMap = {
	[badgeId: string]: string;
};

export type TwitchBadgeVersion = {
	id: string;
	image_url_1x: string;
	image_url_2x: string;
	image_url_4x: string;
	title: string;
	description: string;
	click_action: string | null;
	click_url: string | null;
};

export type TwitchBadgeSet = {
	set_id: string;
	versions: {
		[versionId: string]: TwitchBadgeVersion;
	};
};

export type TwitchBadgesResponse = {
	data: TwitchBadgeSet[];
};
