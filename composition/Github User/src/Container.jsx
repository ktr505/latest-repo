import { useState } from "react";

function Container({title, children}) {
    const [collapsed, setCollapsed] = useState(false);
    function handleCollapse () {
        setCollapsed(!collapsed)
    }
    return (
        <div style={{ backgroundColor: 'white', color:'red',border: '2px solid red', marginBottom: '10px' }}>
        <div style={{ padding: '5px', cursor: 'pointer' }} onClick={handleCollapse}>
          {title}
        </div>
        {!collapsed && (
          <div style={{ padding: '10px' }}>
            {children}
          </div>
        )}
      </div>
    )
}
export default Container