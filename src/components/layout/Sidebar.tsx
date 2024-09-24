import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const { Sider } = Layout;

const userRole = {
    ADMIN: 'admin',
    STUDENT: 'student',
    FACULTY: 'faculty',
}

export default function Sidebar() {
    const role = 'faculty';
    let sidebarItems;

    switch (role) {
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN)
            break;
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY)
            break;
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT)
            break;
    
        default:
            break;
    }
    
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div
                style={{ height: "4rem", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <h1>PH Uni</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    )
}
