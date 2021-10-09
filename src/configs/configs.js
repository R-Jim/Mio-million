export const MESSAGE_SPACING = 5;
export const NUMBER_OF_TRACK = 4;
export const TRACK_LENGTH = 10;

export const SECTION_RESOLUTION = {
    _3x3: "3x3",
    _2x2: "2x2",
    _1x4: "1x4",
    _1x3: "1x3",
    _1x2: "1x2",
}

export const RESOLUTION = {
    _4x3: [
        [
            SECTION_RESOLUTION._3x3, null, null, SECTION_RESOLUTION._1x3,
            null, null, null, null,
            null, null, null, null,
        ],
        [
            SECTION_RESOLUTION._1x2, SECTION_RESOLUTION._2x2, null, SECTION_RESOLUTION._1x2,
            null, null, null, null,
            SECTION_RESOLUTION._1x4, null, null, null
        ],
        [
            null, null, null, null,
            null, null, null, null,
            null, null, null, null,
        ]
    ],
    _8x4: [],
    _9x6: [
        [
            SECTION_RESOLUTION._1x3, null, null, SECTION_RESOLUTION._3x3, null, null, SECTION_RESOLUTION._1x3, null, null, SECTION_RESOLUTION._3x3, null, null, SECTION_RESOLUTION._1x3, null, null,
            null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null,
            SECTION_RESOLUTION._1x3, SECTION_RESOLUTION._1x3, SECTION_RESOLUTION._1x3, SECTION_RESOLUTION._3x3, SECTION_RESOLUTION._1x3, SECTION_RESOLUTION._1x3, SECTION_RESOLUTION._1x3
        ],
    ],
}
