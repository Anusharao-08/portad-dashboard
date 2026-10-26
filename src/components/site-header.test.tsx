import { render, screen, fireEvent, cleanup, within } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

import SiteHeader from "./site-header";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    onClick,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    [key: string]: unknown;
  }) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </a>
  ),
}));

vi.mock("@/lib/auth", () => ({
  useAuth: () => ({ ready: true, session: null }),
  signOut: vi.fn(),
}));

vi.mock("@/components/theme-toggle", () => ({
  default: () => <button aria-label="Toggle color theme">Theme</button>,
}));

describe("SiteHeader responsive navigation", () => {
  beforeEach(() => {
    cleanup();
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("renders the brand logo and desktop navigation", () => {
    render(<SiteHeader />);

    const brandLink = screen.getAllByRole("link").find((link) => link.getAttribute("href") === "/");
    expect(brandLink).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Main navigation" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /open navigation menu/i })).toBeInTheDocument();
  });

  it("toggles the mobile navigation drawer open and closed", () => {
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: /open navigation menu/i });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeInTheDocument();

    // Links should be present in mobile menu
    const mobileNav = screen.getByRole("navigation", { name: "Mobile navigation" });
    expect(mobileNav).toHaveTextContent("Overview");
    expect(mobileNav).toHaveTextContent("Migrate");
    expect(mobileNav).toHaveTextContent("Jobs");
    expect(mobileNav).toHaveTextContent("Compatibility");

    // Click to close
    const closeButton = screen.getByRole("button", { name: /close navigation menu/i });
    fireEvent.click(closeButton);
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
  });

  it("closes the mobile menu when a navigation link is clicked", () => {
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: /open navigation menu/i });
    fireEvent.click(menuButton);

    const mobileNav = screen.getByRole("navigation", { name: "Mobile navigation" });
    const migrateLink = within(mobileNav).getByRole("link", { name: /migrate/i });

    fireEvent.click(migrateLink);
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
  });

  it("closes the mobile menu when the Escape key is pressed", () => {
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: /open navigation menu/i });
    fireEvent.click(menuButton);
    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
  });
});
