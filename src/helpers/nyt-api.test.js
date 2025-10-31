import { describe, it, vi, expect, beforeAll } from "vitest"
import { getPopular, fetchData } from "./nyt-api.js"

describe("nyt-api", () => {

	describe("Fetch Funtion", () => {
		const newFetchUrl = "https://jsonplaceholder.typicode.com"
		const param = "/users/7"

		it("could find the fetch function", () => {
			expect(fetchData(newFetchUrl, param))
		})

		it("does the fetching return anything", () => {
			expect(fetchData(newFetchUrl, param)).toBeDefined()
		})
	})

	describe("getPopular Function", () => {
		it("could find the getPopular function", () => {
			expect(getPopular)
		})

		it("does the getPopular return anything", () => {
			const finding = getPopular()
			expect(finding).toBeDefined()
		})

		it("does getPopular find the new (7 days) json", () => {
			const finding = getPopular(7)
			expect(finding).toBeDefined()
		})
	})
})