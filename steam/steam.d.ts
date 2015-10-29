// Type definitions for steam
// Project: https://github.com/seishun/node-steam
// Definitions by: Andrey Kurdyumov <https://github.com/kant2002>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module Steam {
    export var servers: Array<any>;

    export interface LogonOptions {
        account_name: string;
        password: string;
        shaSentryfile?: string;
        authCode?: string;
    }

    export enum EResult {
        AccountLogonDenied,
        OK
    }

    export enum EPersonaState {
        Online
    }

    export enum EChatEntryType {
        ChatMsg
    }

    export enum EChatMemberStateChange {
        Kicked
    }

    export class SteamClient implements NodeJS.EventEmitter {
        sessionId: string;
        cookie: string[];
        steamID: string;
        users: {};

        /**
         * Connect to Steam
         */
        connect(): void;

        /**
         * Disconnect from Steam
         */
        disconnect(): void;

        webLogOn(callback: (cookie: any[]) => void): void;

        // Event emitter
        addListener(event: string, listener: Function): NodeJS.EventEmitter;
        on(event: string, listener: Function): NodeJS.EventEmitter;
        once(event: string, listener: Function): NodeJS.EventEmitter;
        removeListener(event: string, listener: Function): NodeJS.EventEmitter;
        removeAllListeners(event?: string): NodeJS.EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
    }

    export class SteamUser implements NodeJS.EventEmitter {
        constructor(steamClient: SteamClient);
        logOn(options: LogonOptions): void;

        // Event emitter
        addListener(event: string, listener: Function): NodeJS.EventEmitter;
        on(event: string, listener: Function): NodeJS.EventEmitter;
        once(event: string, listener: Function): NodeJS.EventEmitter;
        removeListener(event: string, listener: Function): NodeJS.EventEmitter;
        removeAllListeners(event?: string): NodeJS.EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
    }

    export class SteamFriends implements NodeJS.EventEmitter {
        personaStates: EPersonaState;
        constructor(steamClient: SteamClient);
        setPersonaState(state: EPersonaState): void;
        setPersonaName(name: string): void;
        joinChat(chatId: string): void;
        sendMessage(source: any, message: string, entryType: EChatEntryType): void;

        // Event emitter
        addListener(event: string, listener: Function): NodeJS.EventEmitter;
        on(event: string, listener: Function): NodeJS.EventEmitter;
        once(event: string, listener: Function): NodeJS.EventEmitter;
        removeListener(event: string, listener: Function): NodeJS.EventEmitter;
        removeAllListeners(event?: string): NodeJS.EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
    }
}

declare module "steam" {
    export = Steam;
}
