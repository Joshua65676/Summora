import React from "react";
import { Button } from "./ui/Button";
import LogoImg from "./LogoImg";
import { ExploreList, LegalList, ContactList, SocialLink } from "../constants";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[url(./assets/BG.jpg)] py-10">
      <main className="container mx-auto max-w-6xl w-full flex flex-col gap-10">
        {/* Footer Details */}
        <div className="flex flex-col gap-5 text-center items-center">
          <h2 className="font-sf font-medium w-[726px] text-[48px] text-White leading-[150%] tracking-[0%]">
            Ready to elevate your event experience
          </h2>
          <p className="font-sf font-medium text-[18px] text-WhiteText leading-[150%] w-[851px] tracking-[0%]">
            Where ideas meet inspiration, forging connections that shape the
            future and moments that last a lifetime.
          </p>
          <Button className="bg-linear-to-b from-linearUp from-0% to-linearDown to-100% border rounded-[37px]">
            <span className="text-[16px] font-sf text-Black font-medium leading-[150%] tracking-[0%]">
              Book Us Now
            </span>
          </Button>
        </div>

        {/* Footer */}
        <main className="flex flex-col gap-5">
          {/* Footer Logo, Subscribe Button and List*/}
          <section className="flex flex-row justify-between items-center">
            <main className="flex flex-col gap-5">
              <LogoImg />

              <div className="space-y-2">
                <button>
                  <span className="underline font-roboto font-[400px] text-[18px] leading-[150%] text-White tracking-[0%]">
                    Join
                  </span>
                </button>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email Here"
                    className="underline font-roboto font-[400px] text-[18px] text-FormText leading-[150%] tracking-[0%] border-b border-b-BorderLine h-10 w-[326px] focus:outline-none"
                  />
                  <Button
                    type="submit"
                    className="bg-linear-to-b from-linearUp from-0% to-linearDown to-100% border rounded-[37px]"
                  >
                    <span className="text-[16px] font-sf text-Black font-medium leading-[150%] tracking-[0%]">
                      Subscribe
                    </span>
                  </Button>
                </div>
              </div>
            </main>

            <main className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-4">
                <h2 className="font-sf font-medium text-[18px] leading-[150%] tracking-0 text-White">
                  Explore
                </h2>
                <ul className="flex flex-col gap-1">
                  {ExploreList.map(({ id, head, link }) => (
                    <li key={id}>
                      <Link to={link}>
                        <span className="font-sf font-[400px] text-[14px] text-WhiteText leading-[150%] tracking-[0%]">
                          {head}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-sf font-medium text-[18px] leading-[150%] tracking-0 text-White">
                  Contact
                </h2>
                <ul className="flex flex-col gap-1">
                  {ContactList.map(({ id, head, link }) => (
                    <li key={id}>
                      <Link to={link}>
                        <span className="underline font-sf font-[400px] text-[14px] text-WhiteText leading-[150%] tracking-[0%]">
                          {head}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-sf font-medium text-[18px] leading-[150%] tracking-0 text-White">
                  Legal
                </h2>
                <ul className="flex flex-col gap-1">
                  {LegalList.map(({ id, head, link }) => (
                    <li key={id}>
                      <Link to={link}>
                        <span className="font-sf font-[400px] text-[14px] text-WhiteText leading-[150%] tracking-[0%]">
                          {head}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </main>
          </section>

          {/* Social Link  */}
          <section className="flex flex-row justify-between items-center">
            <Link to="">
              <p className="underline font-roboto font-[400px] text-[18px] text-White leading-[150%] tracking-[0%]">
                By joining you accept our Privacy Policy.
              </p>
            </Link>

            <ul className="flex flex-row gap-3">
              {SocialLink.map(({ id, social, link, label }) => (
                <li key={id}>
                  <Link to={link}>
                    <img src={social} alt={label} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <section className="flex flex-row items-center justify-between">
          <p className="font-worksans font-[400px] text-[14px] text-White leading-[150%] tracking-[0%] pt-18">© 2025 Summora. All rights reserved.</p>
          <h2 className="font-sansita font-[400px] leading-[150%] tracking-[0%] text-SummoraText w-[616px] text-[128px]">Summora</h2>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
