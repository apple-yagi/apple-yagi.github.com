import { SITE_TITLE } from "../config";
import { HeaderLink } from "./HeaderLink";

export const Header = (): JSX.Element => (
  <header style={{ margin: "0em 0 2em" }}>
    <h2 style={{ margin: "0.5em 0" }}>{SITE_TITLE}</h2>
    <nav>
      <HeaderLink href="/">Home</HeaderLink>
      <HeaderLink href="/blog">Blog</HeaderLink>
      <HeaderLink href="/about">About</HeaderLink>
      <HeaderLink href="https://twitter.com/astrodotbuild" target="_blank">
        Twitter
      </HeaderLink>
      <HeaderLink href="https://github.com/withastro/astro" target="_blank">
        GitHub
      </HeaderLink>
    </nav>
  </header>
);
