import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/uiSlice";

function Sidebar() {

  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.ui.sidebarOpen);

  return (
    <div>

      <button onClick={() => dispatch(toggleSidebar())}>
        Toggle Sidebar
      </button>

      {sidebarOpen && <p>Sidebar is Open</p>}

    </div>
  );
}

export default Sidebar;