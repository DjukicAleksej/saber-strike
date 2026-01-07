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


