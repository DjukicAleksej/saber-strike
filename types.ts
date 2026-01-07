import * as THREE from 'three';

export enum GameStatus {
    LOADING = 'LOADING',
    IDLE = 'IDLE',
    PLAYING='PLAYING',
    GAME_OVER = 'GAME_OVER',
    VICTORY='VICTORY'
}

export type HandType = 'left' | 'right';
//0 for up , 1 down , 2 is left , 3 is right and 4 any

export enum CutDirection {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
    ANY = 4
}


export interface NoteData {
    id: string;
    time: number;//reach layr time in seconds
    lineIndex: number; // 0-3 (horizontal position)
    lineLayer: number; //0-2 (vertical pos)
    type: HandType;
    cutDirection: CutDirection;
    hit?: boolean;
    missed?: boolean;
    hitTime?: number; //time when hit occured
}


export interface HandPositions {
    left: THREE.Vector3 | null;
    right: THREE.Vector3 | null;
    leftVelocity: THREE.Vector3;
    rightVelocity: THREE.Vector3;
}

export const COLORS = {
    
}