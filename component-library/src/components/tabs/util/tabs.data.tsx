import { TextBox } from "../example-components/textBox";
import { TextWithIcon } from "../example-components/textWithIcon";

export const TABS_MOCK_DATA = {
	"data-cy": "tabs-example",
	header: 'Dynamic & Accessible Tabs Example',
	id: 'tab-example-container',
	activeTabId: 'one',
	tabDetails: [
		{
			id: "one",
			isActive: true,
			tabChildren: (
				<TextWithIcon
					iconClassName={"material-icons"}
					iconName="cloud"
					iconTitle={"CLOUD"}
					activeTab={"one"}
					id={"icon-one"}
				/>
			),
			panelChildren: (
				<TextBox
					id={"text-group-one"}
					heading={"This is Tab Panel One Heading"}
					secondaryHeading={"This is Tab Panel One Sub-Heading"}
					content={"This is Tab Panel One Content"}
				/>
			),
		},
		{
			id: "two",
			isActive: false,
			tabChildren: (
				<TextWithIcon
					iconClassName={"material-icons"}
					iconName={"favorite"}
					iconTitle={"FAVORITE"}
					activeTab={"two"}
					id={"icon-two"}
				/>
			),
			panelChildren: (
				<TextBox
					id={"text-group-two"}
					heading={"This is Tab Panel Two Heading"}
					secondaryHeading={"This is Tab Panel Two Sub-Heading"}
					content={"This is Tab Panel Two Content"}
				/>
			),
		},
		{
			id: "three",
			isActive: false,
			tabChildren: (
				<TextWithIcon
					iconClassName={"material-icons"}
					iconName={"attachment"}
					iconTitle={"ATTACHMENT"}
					activeTab={"three"}
					id={"icon-three"}
				/>
			),
			panelChildren: (
				<TextBox
					id={"text-group-three"}
					heading={"This is Tab Panel Three Heading"}
					secondaryHeading={"This is Tab Panel Three Sub-Heading"}
					content={"This is Tab Panel Three Content"}
				/>
			),
		},
	],
};
