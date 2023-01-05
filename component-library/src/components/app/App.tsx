import "./App.css";
import { TabExample } from "../tabs";
import { TABS_MOCK_DATA } from "../tabs/util/tabs.data";

function App() {
	return (
		<div className="App">
			<TabExample
				header={TABS_MOCK_DATA.header}
				tabDetails={TABS_MOCK_DATA.tabDetails}
				activeTabId={"one"}
			/>
		</div>
	);
}

export default App;
