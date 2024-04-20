import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faBehance,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Social() {
  return (
    <div className="fixed left-10 top-1/2 -translate-y-1/2 text-white mix-blend-difference">
      <div className="flex flex-col h-full w-10 p-2 py-5 gap-3 ">
        <Link className="hover:text-sky-500" href={"/"}>
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link className="hover:text-sky-500" href={"/"}>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link className="hover:text-sky-500" href={"/"}>
          <FontAwesomeIcon icon={faBehance} />
        </Link>
        <Link className="hover:text-sky-500" href={"/"}>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
    </div>
  );
}