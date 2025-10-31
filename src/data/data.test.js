import { describe, it, vi, expect, beforeAll } from "vitest"
import categories from "../data/categories.json"
import boarding from "../data/boarding.json"

describe("data-sets", () => {

	describe("Boarding Data List", () => {
		it("could find the data", () => {
			expect(boarding)
		})

		it("is the data found a list", () => {
			expect(boarding[0])
		})
	})

	describe("Categories Data List", () => {
		it("could find the data", () => {
			expect(categories)
		})

		it("is the data found a list", () => {
			expect(boarding[0])
		})
	})
})