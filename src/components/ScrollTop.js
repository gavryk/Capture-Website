import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = ({setActiveMobileBenu}) => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scroll({
        top: 0,
        left: 0,
      });
      setActiveMobileBenu(false);
    }, [pathname, setActiveMobileBenu]);
    
    return null;
}

export default ScrollTop;