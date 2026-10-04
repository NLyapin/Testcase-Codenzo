import { describe, it, expect } from "vitest";
import { tutors, filterTutors, uniqueLanguages } from "./tutors.js";

describe("filterTutors", () => {
  it("returns everyone when no language is selected", () => {
    expect(filterTutors(tutors, "")).toHaveLength(tutors.length);
  });

  it("returns only tutors of the selected language", () => {
    const result = filterTutors(tutors, "Python");
    expect(result).toHaveLength(2);
    expect(result.every((t) => t.language === "Python")).toBe(true);
  });

  it("returns an empty list for an unknown language", () => {
    expect(filterTutors(tutors, "Rust")).toEqual([]);
  });
});

describe("uniqueLanguages", () => {
  it("returns sorted languages without duplicates", () => {
    expect(uniqueLanguages(tutors)).toEqual(["JavaScript", "Python", "Scratch"]);
  });
});
