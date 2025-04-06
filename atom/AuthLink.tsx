import Link from "next/link";
import React from "react";

type AuthLinkProps = {
  text: string;
  redirectLink: string;
  redirectText: string;
};
const AuthLink = ({ text, redirectLink, redirectText }: AuthLinkProps) => {
  return (
    <p className="pt-5 text-center">
      {text} {" "}
      <Link className="font-bold" href={redirectLink}>{redirectText}</Link>
    </p>
  );
};

export default AuthLink;
