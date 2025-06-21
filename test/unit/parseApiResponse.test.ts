import { describe, it, expect, vi } from "vitest";
import { z } from "zod";
import { parseApiResponse } from "../../src/shared/lib/utils";

describe("parseApiResponse", () => {
  const schema = z.object({
    id: z.number(),
    name: z.string(),
  });

  it("should return parsed data after successful schema validation", () => {
    const input = { id: 1, name: "John" };
    const result = parseApiResponse(input, schema);
    expect(result).toEqual(input);
  });

  it("should throw custom error when schema validation fails with ZodError", () => {
    const invalidInput = { id: "string", name: "John" };

    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => parseApiResponse(invalidInput, schema)).toThrowError(
      "Invalid data format received from the API."
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      "Response validation error:",
      expect.any(Array)
    );

    consoleSpy.mockRestore();
  });

  it("should rethrow non-Zod errors", () => {
    const schema = z.object({
      id: z.number(),
    });

    const parseSpy = vi.spyOn(schema, "parse").mockImplementation(() => {
      throw new Error("Unexpected error");
    });

    expect(() => parseApiResponse({}, schema)).toThrowError("Unexpected error");

    parseSpy.mockRestore();
  });
});
