import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [show, handleshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else {
        handleshow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleshow(true);
        } else {
          handleshow(false);
        }
      });
    };
  }, []);

  return (
    <div
      className={`text-white ${
        show ? "bg-black" : ""
      } flex justify-between fixed w-full z-50 items-center`}
    >
      <div className="w-[20%] md:w-[10%]">
        <Link to="/">
          <img src="/logo.png" alt="" />
        </Link>
      </div>
      <div className="w-[auto] pr-1">
        <p>Profile</p>
      </div>
    </div>
  );
}

export default Header;
