import * as MiniMeTokenMapping from "./MiniMeTokenMapping"
// @ponicode
describe("MiniMeTokenMapping.handleClaimedTokens", () => {
    test("0", () => {
        let callFunction: any = () => {
            MiniMeTokenMapping.handleClaimedTokens(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("MiniMeTokenMapping.handleNewCloneToken", () => {
    test("0", () => {
        let callFunction: any = () => {
            MiniMeTokenMapping.handleNewCloneToken(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("MiniMeTokenMapping.handleApproval", () => {
    test("0", () => {
        let callFunction: any = () => {
            MiniMeTokenMapping.handleApproval(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
