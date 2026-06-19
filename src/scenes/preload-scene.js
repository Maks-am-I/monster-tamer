import { BATTLE_ASSETS_KEYS, BATTLE_BACKGROUND_ASSETS_KEYS, HEALTH_BAR_ASSETS_KEYS, MONSTER_ASSETS_KEYS } from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super ({
            key: SCENE_KEYS.PRELOAD_SCENE,
        });

        console.log(SCENE_KEYS.PRELOAD_SCENE);
    }

    preload() {
        const monsterTamerAssetsPath = 'assets/images/monster-tamer';
        const kenneysAssetsPath = 'assets/images/kenneys-assets';

        // battle background
        this.load.image(
            BATTLE_BACKGROUND_ASSETS_KEYS.FOREST,
            `${monsterTamerAssetsPath}/battle-backgrounds/forest-background.png`,
        );

        // battle assets
        this.load.image(
            BATTLE_ASSETS_KEYS.HEALTH_BAR_BACKGROUND,
            `${kenneysAssetsPath}/ui-space-expansion/custom-ui.png`,
        );

        // health bar assets
        this.load.image(
            HEALTH_BAR_ASSETS_KEYS.RIGHT_CAP,
            `${kenneysAssetsPath}/ui-space-expansion/barHorizontal_green_right.png`,
        );

        this.load.image(
            HEALTH_BAR_ASSETS_KEYS.MIDDLE,
            `${kenneysAssetsPath}/ui-space-expansion/barHorizontal_green_mid.png`,
        );

        this.load.image(
            HEALTH_BAR_ASSETS_KEYS.LEFT_CAP,
            `${kenneysAssetsPath}/ui-space-expansion/barHorizontal_green_left.png`,
        );

        // monster assets
        this.load.image(
            MONSTER_ASSETS_KEYS.CARNODUSK,
            `${monsterTamerAssetsPath}/monsters/carnodusk.png`,
        );

        this.load.image(
            MONSTER_ASSETS_KEYS.IGUANIGNITE,
            `${monsterTamerAssetsPath}/monsters/iguanignite.png`,
        );
    }

    create() {
        this.scene.start(SCENE_KEYS.BATTLE_SCENE)
    }
}