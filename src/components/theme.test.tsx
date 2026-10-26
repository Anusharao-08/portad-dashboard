import { render, screen, fireEvent, cleanup, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

import {
  ThemeProvider,
  useTheme,
  THEME_STORAGE_KEY,
} from "./theme-provider";
import ThemeToggle from "./theme-toggle";

function ConsumerComponent() {
  const { theme, toggleTheme, mounted } = useTheme();
  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <span data-testid="mounted-value">{mounted ? "mounted" : "unmounted"}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

let store: Record<string, string> = {};

const mockLocalStorage = {
  getItem: vi.fn((key: string) => store[key] ?? null),
  setItem: vi.fn((key: string, value: string) => {
    store[key] = String(value);
  }),
  removeItem: vi.fn((key: string) => {
    delete store[key];
  }),
  clear: vi.fn(() => {
    store = {};
  }),
};

describe("Theme System", () => {
  beforeEach(() => {
    store = {};
    Object.defineProperty(window, "localStorage", {
      value: mockLocalStorage,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(globalThis, "localStorage", {
      value: mockLocalStorage,
      writable: true,
      configurable: true,
    });

    document.documentElement.classList.remove("light", "dark");

    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query.includes("dark"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  afterEach(() => {
    cleanup();
    store = {};
    document.documentElement.classList.remove("light", "dark");
    vi.restoreAllMocks();
  });

  it("defaults to dark theme when no preference is saved and prefers-color-scheme is dark", () => {
    render(
      <ThemeProvider>
        <ConsumerComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme-value").textContent).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("reads saved preference from localStorage", () => {
    store[THEME_STORAGE_KEY] = "light";

    render(
      <ThemeProvider>
        <ConsumerComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme-value").textContent).toBe("light");
    expect(document.documentElement.classList.contains("light")).toBe(true);
  });

  it("toggles theme and persists to localStorage and documentElement", () => {
    render(
      <ThemeProvider>
        <ConsumerComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme-value").textContent).toBe("dark");

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Toggle" }));
    });

    expect(screen.getByTestId("theme-value").textContent).toBe("light");
    expect(store[THEME_STORAGE_KEY]).toBe("light");
    expect(document.documentElement.classList.contains("light")).toBe(true);
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Toggle" }));
    });

    expect(screen.getByTestId("theme-value").textContent).toBe("dark");
    expect(store[THEME_STORAGE_KEY]).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(document.documentElement.classList.contains("light")).toBe(false);
  });

  it("renders ThemeToggle with accessible label and toggles properly", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );

    const toggleBtn = screen.getByRole("button", { name: /switch to light theme/i });
    expect(toggleBtn).toBeInTheDocument();

    act(() => {
      fireEvent.click(toggleBtn);
    });

    expect(screen.getByRole("button", { name: /switch to dark theme/i })).toBeInTheDocument();
    expect(document.documentElement.classList.contains("light")).toBe(true);
  });
});
