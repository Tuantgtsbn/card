import { Dropdown, Avatar as Av } from "flowbite-react";
import { useContext } from "react";
import { AppContext } from "@/contexts/AppProvider";
function Avatar() {
    const { userInfor, handleLogOut } = useContext(AppContext);
    return (
        <Dropdown
            label={<Av alt="User settings" img={userInfor.avatar} rounded />}
            arrowIcon={false}
            inline
        >
            <Dropdown.Header>
                <span className="block text-sm">{userInfor.fullName}</span>
                <span className="block truncate text-sm font-medium">{userInfor.email}</span>
            </Dropdown.Header>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>Favorites</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogOut}>Logn out</Dropdown.Item>
        </Dropdown>
    );
}

export default Avatar;