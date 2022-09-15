import { PAGE_SIZE } from "../reducers/stage"

export const SECTION_RESOLUTION = {
    _4x3: "4x3",
}

export const LAYOUTS = [
    (() => {
        const section = []
        for (let i = 0; i < PAGE_SIZE; i++) {
            section.push(SECTION_RESOLUTION._4x3)
        }
        return section
    })(),
]
