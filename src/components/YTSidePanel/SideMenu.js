import MenuHeader from "./MenuHeader";
import List from "./List";
import listItems from "./items";

export default function SideMenu() {
    return (
        <div className="side-menu-wrapper">
            <MenuHeader />
            <List ordered={false} items={listItems} />
        </div>
    );
}