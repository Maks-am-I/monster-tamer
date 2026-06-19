import { BATTLE_BACKGROUND_ASSETS_KEYS, MONSTER_ASSETS_KEYS } from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class BattleScene extends Phaser.Scene {
    constructor() {
        super ({
            key: SCENE_KEYS.BATTLE_SCENE,
        });
    }

    create() {
        // create main background
        this.add.image(0, 0, BATTLE_BACKGROUND_ASSETS_KEYS.FOREST).setOrigin(0);

        // render out the player and enemy monsters
        this.add.image(768, 144, MONSTER_ASSETS_KEYS.CARNODUSK, 0);
        this.add.image(256, 316, MONSTER_ASSETS_KEYS.IGUANIGNITE, 0).setFlipX(true);   
    }
}