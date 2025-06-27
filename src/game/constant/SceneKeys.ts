import Player from "../GamePlay/player/Player";

export const SceneKeys = {
    OBSTACLE: {
        INITIAL_POS : { x : 0, y : 700},
        TAG: "OBSTACLE",
        SPIKE_TAG: "SPIKE"
    },
    PLAYER: {
        HEAD: "HEAD",
        TAG: "PLAYER",
        INITIAL_POS: {x : 32, y : 100},
    },
    BOX: {
        HEAD: "HEAD",
        TAG: "BOX",
        INITIAL_POS: {x : 0, y : 800},
    },
    HIGHSCORE_KEY: "highscore"
}