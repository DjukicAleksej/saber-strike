import { CutDirection, NoteData } from "./types";
import * as THREE from 'three';

//Game world config
export const TRACK_LENGTH = 50;
export const SPAWN_Z = -30;
export const PLAYER_Z = 0;
export const MISS_z = 5;
export const NOTE_SPEED = 10; //Reduced from 15 for easier difficulty

export const LANE_WIDTH = 0.8;
export const LAYER_HEIGHT = 0.8;
export const NOTE_SIZE = 0.5;


//pos for the 4 lanes (centered arnd 0)
export const LANE_X_POSITIONS = [-1.5 * LANE_WIDTH, -0.5 * LANE_WIDTH,0.5 * LANE_WIDTH, 1.5 * LANE_WIDTH];
export const LAYER_Y_POSITIONS = [0.8, 1.6,2.4]; // low , mid and highest

